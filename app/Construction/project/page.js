"use client";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";

export default function PastProjectsPage() {
  // Fetch all projects using the Convex query.
  const projects = useQuery("projectInfo:getProjectInfos");

  // Mutation functions for updating and deleting.
  const updateProjectInfo = useMutation("projectInfo:updateProjectInfo");
  const deleteProjectInfo = useMutation("projectInfo:deleteProjectInfo");

  // Local state for inline editing.
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  if (!projects) return <div>Loading...</div>;

  // Start editing a project.
  const handleEditClick = (project) => {
    setEditingId(project._id);
    setEditFormData(project);
  };

  // Cancel editing.
  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData({});
  };

  // Update local state when a form input changes.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update the project in the database.
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Destructure out extra fields that Convex doesn't accept.
      const { _id, _creationTime, ...validFields } = editFormData;

      // Call the update mutation with only the allowed fields.
      await updateProjectInfo({
        id: editingId,
        ...validFields,
      });

      // Reset editing state.
      setEditingId(null);
      setEditFormData({});
    } catch (error) {
      console.error("Error updating project:", error);
      alert("There was an error updating the project.");
    }
  };

  // Delete the project from the database.
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProjectInfo({ id });
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("There was an error deleting the project.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Past Projects</h1>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Job Name</th>
              <th className="py-2 px-4 border">Job Type</th>
              <th className="py-2 px-4 border">Job Address</th>
              <th className="py-2 px-4 border">Start Date</th>
              <th className="py-2 px-4 border">End Date</th>
              <th className="py-2 px-4 border">Contractor Tier</th>
              <th className="py-2 px-4 border">Notes</th>
              <th className="py-2 px-4 border">Owner Name</th>
              <th className="py-2 px-4 border">Owner Company</th>
              <th className="py-2 px-4 border">Owner Email</th>
              <th className="py-2 px-4 border">Owner Phone</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border">
                {editingId === project._id ? (
                  // Inline editing mode.
                  <>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="jobName"
                        value={editFormData.jobName || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <select
                        name="jobType"
                        value={editFormData.jobType || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      >
                        <option value="">Select one...</option>
                        <option value="sitevisit">Site Visit</option>
                        <option value="bio engineering">Bio Engineering</option>
                        <option value="ground water">Ground Water Explorations</option>
                        <option value="geotec">Geo Technical Investigations</option>
                        <option value="grond">Ground Improvement</option>
                        <option value="hydro">Hydro Blasting</option>
                        <option value="trenchless">Trenchless Technology</option>
                        <option value="sm">Survey & Mapping</option>
                        <option value="ers">Earth Retention Systems</option>
                        <option value="pilling">Piling</option>
                      </select>
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="jobAddress"
                        value={editFormData.jobAddress || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="date"
                        name="projectStartDate"
                        value={editFormData.projectStartDate || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="date"
                        name="projectEndDate"
                        value={editFormData.projectEndDate || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <select
                        name="contractorType"
                        value={editFormData.contractorType || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      >
                        <option value="">Select one...</option>
                        <option value="Lower Tier">Lower Tier</option>
                        <option value="Prime Contractor">Prime Contractor</option>
                        <option value="Sub-Contractor">Sub-Contractor</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                    <td className="py-2 px-4 border">
                      <textarea
                        name="notes"
                        value={editFormData.notes || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="ownerName"
                        value={editFormData.ownerName || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="ownerCompany"
                        value={editFormData.ownerCompany || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="email"
                        name="ownerEmail"
                        value={editFormData.ownerEmail || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="ownerPhone"
                        value={editFormData.ownerPhone || ""}
                        onChange={handleInputChange}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border flex space-x-2">
                      <button
                        onClick={handleUpdateSubmit}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  // Normal display mode.
                  <>
                    <td className="py-2 px-4 border">{project.jobName}</td>
                    <td className="py-2 px-4 border">{project.jobType}</td>
                    <td className="py-2 px-4 border">{project.jobAddress}</td>
                    <td className="py-2 px-4 border">{project.projectStartDate}</td>
                    <td className="py-2 px-4 border">{project.projectEndDate}</td>
                    <td className="py-2 px-4 border">{project.contractorType}</td>
                    <td className="py-2 px-4 border">{project.notes}</td>
                    <td className="py-2 px-4 border">{project.ownerName}</td>
                    <td className="py-2 px-4 border">{project.ownerCompany}</td>
                    <td className="py-2 px-4 border">{project.ownerEmail}</td>
                    <td className="py-2 px-4 border">{project.ownerPhone}</td>
                    <td className="py-2 px-4 border flex space-x-2">
                      <button
                        onClick={() => handleEditClick(project)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
