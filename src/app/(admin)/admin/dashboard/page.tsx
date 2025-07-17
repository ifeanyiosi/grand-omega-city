/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/admin/page.tsx (changed to .tsx for TypeScript and using Link from 'next/link')
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link for navigation
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig"; // Removed storage as forms are removed

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
  const [properties, setProperties] = useState<Property[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  // Delete Property function (kept for viewing list functionality)
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

  // Delete Blog function (kept for viewing list functionality)
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
    <div className="min-h-screen bg-gray-50 py-0-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">Admin Overview</h1>
          <p className="text-gray-600 mt-2">
            View and manage your properties and blog posts.
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
            {error}
          </div>
        )}

        {/* Hotlinks for Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link href="/admin/properties" passHref>
            <div className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Properties
              </h2>
              <p className="text-gray-600">
                Add, edit, or delete real estate listings.
              </p>
            </div>
          </Link>
          <Link href="/admin/blogs" passHref>
            <div className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Blog Posts
              </h2>
              <p className="text-gray-600">
                Create, update, or remove blog articles.
              </p>
            </div>
          </Link>
        </div>

        {/* Posted Properties Section */}
        <div className="bg-white rounded-lg shadow-md py-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Posted Properties 🏠
          </h2>
          {properties.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No properties found.
              <Link href="/admin/properties" passHref>
                <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
                  Add one!
                </span>
              </Link>
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {properties.map((property) => (
                    <tr key={property.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-md object-cover"
                            src={property.image}
                            alt={property.title}
                          />
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {property.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {property.address}
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${property.price.toLocaleString()}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                        {/* These buttons would ideally navigate to an edit page like /admin/properties/[id] */}
                        <Link
                          href={`/admin/properties?editId=${property.id}`}
                          passHref
                        >
                          <span className="text-blue-600 hover:text-blue-900 mr-2 cursor-pointer">
                            Edit
                          </span>
                        </Link>
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

        {/* Posted Blog Posts Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Posted Blog Posts 📝
          </h2>
          {blogs.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No blog posts found.
              <Link href="/admin/blogs" passHref>
                <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
                  Create one!
                </span>
              </Link>
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-md object-cover"
                            src={blog.image}
                            alt={blog.title}
                          />
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {blog.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {blog.content.substring(0, 50)}...
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                        {blog.createdAt &&
                          new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                        {/* These buttons would ideally navigate to an edit page like /admin/blogs/[id] */}
                        <Link href={`/admin/blogs?editId=${blog.id}`} passHref>
                          <span className="text-blue-600 hover:text-blue-900 mr-2 cursor-pointer">
                            Edit
                          </span>
                        </Link>
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
    </div>
  );
};

export default AdminDashboard;
