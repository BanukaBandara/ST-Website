"use client";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import Link from "next/link";
import Footer from "../Footer/page";
import Header from "../Header/page";

export default function PastProjectsPage() {
  // Fetch all projects using the Convex query.
  const projects = useQuery("projectInfo:getProjectInfos");

  if (!projects) return <div className="text-gray-200">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header/>

      {/* Main Content */}
      <main className="flex-1">
        {/* Page Title */}
        <div className="py-8 px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Our Projects
          </h1>
        </div>

        {/* Projects Table */}
        <div className="px-4 pb-8 overflow-x-auto">
          {projects.length === 0 ? (
            <p className="text-gray-300">No projects found.</p>
          ) : (
            <table className="min-w-full bg-gray-900 border border-gray-800 table-auto text-sm md:text-base">
              <thead className="bg-gray-800">
                <tr>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Job Name
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Job Type
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Job Address
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Start Date
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    End Date
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Contractor Tier
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Notes
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Owner Name
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Owner Company
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Owner Email
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-700">
                    Owner Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project._id}
                    className="border-b border-gray-800 hover:bg-gray-900 transition"
                  >
                    <td className="py-2 px-4">{project.jobName}</td>
                    <td className="py-2 px-4">{project.jobType}</td>
                    <td className="py-2 px-4">{project.jobAddress}</td>
                    <td className="py-2 px-4">{project.projectStartDate}</td>
                    <td className="py-2 px-4">{project.projectEndDate}</td>
                    <td className="py-2 px-4">{project.contractorType}</td>
                    <td className="py-2 px-4">{project.notes}</td>
                    <td className="py-2 px-4">{project.ownerName}</td>
                    <td className="py-2 px-4">{project.ownerCompany}</td>
                    <td className="py-2 px-4">{project.ownerEmail}</td>
                    <td className="py-2 px-4">{project.ownerPhone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
