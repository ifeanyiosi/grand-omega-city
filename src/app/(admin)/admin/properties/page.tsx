/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/admin/page.jsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/firebaseConfig"; // Removed 'auth' import

// Property type
type Property = {
  id?: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  image: string;
};

// Blog post type
type BlogPost = {
  id?: string;
  title: string;
  content: string;
  image: string;
  createdAt?: Date;
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("properties");
  const [properties, setProperties] = useState<Property[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [propertyForm, setPropertyForm] = useState<Property>({
    title: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    address: "",
    image: "",
  });

  const [blogForm, setBlogForm] = useState<BlogPost>({
    title: "",
    content: "",
    image: "",
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [propertyImageFile, setPropertyImageFile] = useState<File | null>(null);
  const [blogImageFile, setBlogImageFile] = useState<File | null>(null);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch properties
        const propertiesSnapshot = await getDocs(collection(db, "properties"));
        const propertiesData: Property[] = propertiesSnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Property)
        );
        setProperties(propertiesData);

        // Fetch blogs
        const blogsSnapshot = await getDocs(collection(db, "blogs"));
        const blogsData: BlogPost[] = blogsSnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
              createdAt: doc.data().createdAt?.toDate(), // Convert Firestore Timestamp to Date
            } as BlogPost)
        );
        setBlogs(blogsData);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Upload image to Firebase Storage
  const uploadImage = async (file: File, folder: string): Promise<string> => {
    try {
      setUploading(true);
      const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setUploading(false);
      return downloadURL;
    } catch (err) {
      setUploading(false);
      throw new Error("Image upload failed");
    }
  };

  // Property form handlers
  const handlePropertyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPropertyForm({
      ...propertyForm,
      [name]:
        name === "price" ||
        name === "bedrooms" ||
        name === "bathrooms" ||
        name === "sqft"
          ? Number(value)
          : value,
    });
  };

  const handlePropertyImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setPropertyImageFile(e.target.files[0]);
    }
  };

  const handleSubmitProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      let imageUrl = propertyForm.image;

      // Upload new image if selected
      if (propertyImageFile) {
        imageUrl = await uploadImage(propertyImageFile, "properties");
      } else if (!editingId && !propertyImageFile) {
        throw new Error("Please select an image for the new property.");
      }

      const propertyData = {
        ...propertyForm,
        image: imageUrl,
      };

      if (editingId) {
        // Update existing property
        await updateDoc(doc(db, "properties", editingId), propertyData);
        setProperties(
          properties.map((p) =>
            p.id === editingId ? { ...propertyData, id: editingId } : p
          )
        );
      } else {
        // Add new property
        const docRef = await addDoc(collection(db, "properties"), propertyData);
        setProperties([...properties, { ...propertyData, id: docRef.id }]);
      }

      resetPropertyForm();
    } catch (err: any) {
      setError(err.message || "Failed to save property");
    }
  };

  const resetPropertyForm = () => {
    setPropertyForm({
      title: "",
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 0,
      address: "",
      image: "",
    });
    setPropertyImageFile(null);
    setEditingId(null);
  };

  const editProperty = (property: Property) => {
    setPropertyForm(property);
    setEditingId(property.id || null);
  };

  const deleteProperty = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await deleteDoc(doc(db, "properties", id));
        setProperties(properties.filter((p) => p.id !== id));
      } catch (err) {
        setError("Failed to delete property");
      }
    }
  };

  // Blog form handlers
  const handleBlogChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlogForm({
      ...blogForm,
      [name]: value,
    });
  };

  const handleBlogImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBlogImageFile(e.target.files[0]);
    }
  };

  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      let imageUrl = blogForm.image;

      // Upload new image if selected
      if (blogImageFile) {
        imageUrl = await uploadImage(blogImageFile, "blogs");
      } else if (!editingId && !blogImageFile) {
        throw new Error("Please select an image for the new blog post.");
      }

      const blogData = {
        title: blogForm.title,
        content: blogForm.content,
        image: imageUrl,
      };

      if (editingId) {
        // Update existing blog
        await updateDoc(doc(db, "blogs", editingId), blogData);
        setBlogs(
          blogs.map((b) =>
            b.id === editingId ? { ...blogData, id: editingId } : b
          )
        );
      } else {
        // Add new blog
        const docRef = await addDoc(collection(db, "blogs"), {
          ...blogData,
          createdAt: new Date(),
        });
        setBlogs([
          ...blogs,
          { ...blogData, id: docRef.id, createdAt: new Date() },
        ]);
      }

      resetBlogForm();
    } catch (err: any) {
      setError(err.message || "Failed to save blog post");
    }
  };

  const resetBlogForm = () => {
    setBlogForm({
      title: "",
      content: "",
      image: "",
    });
    setBlogImageFile(null);
    setEditingId(null);
  };

  const editBlog = (blog: BlogPost) => {
    setBlogForm(blog);
    setEditingId(blog.id || null);
  };

  const deleteBlog = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await deleteDoc(doc(db, "blogs", id));
        setBlogs(blogs.filter((b) => b.id !== id));
      } catch (err) {
        setError("Failed to delete blog post");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage properties and blog content
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("properties")}
            className={`py-3 px-6 font-medium text-sm rounded-t-lg ${
              activeTab === "properties"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`py-3 px-6 font-medium text-sm rounded-t-lg ${
              activeTab === "blogs"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Blog Posts
          </button>
        </div>

        {/* Properties Tab */}
        {activeTab === "properties" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Manage Properties
              </h2>
              <button
                onClick={resetPropertyForm}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Add New Property
              </button>
            </div>

            {/* Property Form */}
            <form
              onSubmit={handleSubmitProperty}
              className="mb-8 bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {editingId ? "Edit Property" : "Add New Property"}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={propertyForm.title}
                    onChange={handlePropertyChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={propertyForm.price}
                    onChange={handlePropertyChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={propertyForm.address}
                    onChange={handlePropertyChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePropertyImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={!editingId}
                  />
                  {uploading && (
                    <p className="text-sm text-blue-500 mt-1">
                      Uploading image...
                    </p>
                  )}
                  {editingId && propertyForm.image && !propertyImageFile && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Current Image:</p>
                      <img
                        src={propertyForm.image}
                        alt="Current property"
                        className="h-20 w-20 object-cover rounded-md mt-1"
                      />
                    </div>
                  )}
                  {propertyImageFile && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">New Image:</p>
                      <img
                        src={URL.createObjectURL(propertyImageFile)}
                        alt="Preview"
                        className="h-20 w-20 object-cover rounded-md mt-1"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    name="bedrooms"
                    value={propertyForm.bedrooms}
                    onChange={handlePropertyChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={propertyForm.bathrooms}
                    onChange={handlePropertyChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Square Feet
                  </label>
                  <input
                    type="number"
                    name="sqft"
                    value={propertyForm.sqft}
                    onChange={handlePropertyChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-3">
                <button
                  type="button"
                  onClick={resetPropertyForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                >
                  {uploading
                    ? "Uploading..."
                    : editingId
                    ? "Update Property"
                    : "Add Property"}
                </button>
              </div>
            </form>

            {/* Property List */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Existing Properties
              </h3>

              {properties.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No properties found
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Image
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {properties.map((property) => (
                        <tr key={property.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-md object-cover"
                                src={property.image}
                                alt={property.title}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {property.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {property.address}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${property.price.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => editProperty(property)}
                              className="text-blue-600 hover:text-blue-900 mr-4"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                property.id && deleteProperty(property.id)
                              }
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blogs Tab */}
        {activeTab === "blogs" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Manage Blog Posts
              </h2>
              <button
                onClick={resetBlogForm}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Add New Post
              </button>
            </div>

            {/* Blog Form */}
            <form
              onSubmit={handleSubmitBlog}
              className="mb-8 bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {editingId ? "Edit Blog Post" : "Add New Blog Post"}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={blogForm.title}
                    onChange={handleBlogChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBlogImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={!editingId}
                  />
                  {uploading && (
                    <p className="text-sm text-blue-500 mt-1">
                      Uploading image...
                    </p>
                  )}
                  {editingId && blogForm.image && !blogImageFile && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Current Image:</p>
                      <img
                        src={blogForm.image}
                        alt="Current blog"
                        className="h-20 w-20 object-cover rounded-md mt-1"
                      />
                    </div>
                  )}
                  {blogImageFile && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">New Image:</p>
                      <img
                        src={URL.createObjectURL(blogImageFile)}
                        alt="Preview"
                        className="h-20 w-20 object-cover rounded-md mt-1"
                      />
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <textarea
                    name="content"
                    value={blogForm.content}
                    onChange={handleBlogChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-3">
                <button
                  type="button"
                  onClick={resetBlogForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                >
                  {uploading
                    ? "Uploading..."
                    : editingId
                    ? "Update Post"
                    : "Add Post"}
                </button>
              </div>
            </form>

            {/* Blog List */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Existing Blog Posts
              </h3>

              {blogs.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No blog posts found
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Image
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {blogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-md object-cover"
                                src={blog.image}
                                alt={blog.title}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {blog.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {blog.createdAt &&
                                new Date(blog.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => editBlog(blog)}
                              className="text-blue-600 hover:text-blue-900 mr-4"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => blog.id && deleteBlog(blog.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
