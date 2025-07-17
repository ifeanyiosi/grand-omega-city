/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/blog/[id]/page.tsx

"use client";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { notFound, useParams } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { JSX } from "react";

const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
      clipRule="evenodd"
    />
  </svg>
);

type BlogPost = {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
};

type PageProps = {
  params: {
    id: string;
  };
};

export default async function BlogPostPage(): Promise<JSX.Element> {
  const params = useParams();
  const id = params?.id as string;

  const docRef = doc(db, "blogs", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const data = docSnap.data();
  const post: BlogPost = {
    id: docSnap.id,
    title: data.title,
    content: data.content,
    image: data.image,
    createdAt: data.createdAt.toDate(),
  };

  return (
    <main className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1D6FB8] hover:text-[#14528a] font-semibold transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to all posts</span>
          </Link>
        </div>

        <article className="bg-white shadow-lg rounded-xl overflow-hidden">
          {post.image && (
            <div className="aspect-video w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={post.image}
                alt={post.title}
              />
            </div>
          )}

          <div className="p-6 sm:p-10">
            <div className="mb-4 text-sm text-gray-500">
              <time dateTime={post.createdAt.toISOString()}>
                {format(post.createdAt, "MMMM dd, yyyy")}
              </time>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-[#1D6FB8] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
