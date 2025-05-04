"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Project Management</h1>
      <p className="text-gray-600 mb-8">
        Quickly create new projects or manage existing ones.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Card 1: Add New Project */}
        <Link href="/Construction/projectform" className="group">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-center text-center">
            {/* Icon (Plus sign) */}
            <svg
              className="w-12 h-12 text-blue-500 mb-4 transition-transform group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>

            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Add Project
            </h2>
            <p className="text-gray-600 text-sm">
              Create a new project and track its details.
            </p>
          </div>
        </Link>

        {/* Card 2: Past Projects */}
        <Link href="/Construction/project" className="group">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-center text-center">
            {/* Icon (Clipboard list / or any icon you prefer) */}
            <svg
              className="w-12 h-12 text-green-500 mb-4 transition-transform group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5h6m2 0a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h2"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 10h6M9 14h6M9 18h6"
              />
            </svg>

            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Past Projects
            </h2>
            <p className="text-gray-600 text-sm">
              View or edit existing projects in your records.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
