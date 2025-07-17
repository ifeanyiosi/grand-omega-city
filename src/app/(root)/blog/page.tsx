/* eslint-disable @typescript-eslint/no-unused-vars */
// app/blog/page.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { format } from "date-fns";

// Blog post type
type BlogPost = {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  category?: string;
  author?: string;
  readTime?: number;
};

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  // Fetch blog posts from Firestore
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const posts: BlogPost[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          posts.push({
            id: doc.id,
            title: data.title,
            content: data.content,
            image: data.image,
            createdAt: data.createdAt.toDate(),
            category: data.category || "Real Estate",
            author: data.author || "Real Estate Expert",
            readTime: data.readTime || Math.ceil(data.content.length / 200),
          });
        });

        // Sort by date (newest first)
        posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        // Set featured post (most recent)
        if (posts.length > 0) {
          setFeaturedPost(posts[0]);
        }

        setBlogPosts(posts);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog posts");
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(blogPosts.map((post) => post.category || "Real Estate"))
    );
    return ["all", ...cats];
  }, [blogPosts]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    return filtered;
  }, [blogPosts, searchQuery, selectedCategory]);

  // Get posts excluding featured post
  const regularPosts = useMemo(() => {
    return filteredPosts.filter((post) => post.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  // Truncate content for preview
  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="space-y-12">
      {/* Featured post skeleton */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
        <div className="h-96 bg-gray-300"></div>
        <div className="p-8">
          <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>

      {/* Regular posts skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-300 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-3xl shadow-xl max-w-md">
          <div className="text-red-500 text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Blog Unavailable
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Real Estate <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights, market trends, and stories from the world of real
            estate
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all font-medium ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredPosts.length} article
            {filteredPosts.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or category filter
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Post */}
            {featuredPost &&
              (selectedCategory === "all" ||
                featuredPost.category === selectedCategory) &&
              !searchQuery && (
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <Link href={`/blog/${featuredPost.id}`}>
                    <div className="relative">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Featured
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {format(featuredPost.createdAt, "MMMM dd, yyyy")}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {featuredPost.readTime} min read
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-6">
                        {truncateContent(featuredPost.content, 200)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">
                            {featuredPost.author}
                          </span>
                        </div>
                        <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                          <span>{format(post.createdAt, "MMM dd, yyyy")}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {post.readTime} min
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {truncateContent(post.content)}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-600 text-sm">
                              {post.author}
                            </span>
                          </div>
                          <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                            Read →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
