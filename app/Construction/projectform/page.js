"use client";
import { useState } from "react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation"; // Import Next.js router for navigation

export default function ProjectInfoForm() {
  // Using file-based naming: "projectInfo:createProjectInfo"
  const createProjectInfo = useMutation("projectInfo:createProjectInfo");
  const router = useRouter();

  const [formData, setFormData] = useState({
    jobType: "",
    jobName: "",
    jobAddress: "",
    projectStartDate: "",
    projectEndDate: "",
    contractorType: "",
    notes: "",
    ownerName: "",
    ownerCompany: "",
    ownerEmail: "",
    ownerPhone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear error for the field while the user is editing it.
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.jobType.trim()) {
      newErrors.jobType = "Job type is required.";
    }
    if (!formData.jobName.trim()) {
      newErrors.jobName = "Job name is required.";
    }
    if (!formData.jobAddress.trim()) {
      newErrors.jobAddress = "Job address is required.";
    }
    if (!formData.projectStartDate.trim()) {
      newErrors.projectStartDate = "Project start date is required.";
    }
    if (!formData.projectEndDate.trim()) {
      newErrors.projectEndDate = "Project end date is required.";
    }
    if (formData.projectStartDate && formData.projectEndDate) {
      if (new Date(formData.projectStartDate) > new Date(formData.projectEndDate)) {
        newErrors.projectEndDate = "Project end date must be after start date.";
      }
    }
    if (!formData.contractorType.trim()) {
      newErrors.contractorType = "Contractor tier is required.";
    }
    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Owner name is required.";
    }
    if (!formData.ownerEmail.trim()) {
      newErrors.ownerEmail = "Owner email is required.";
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(formData.ownerEmail)) {
        newErrors.ownerEmail = "Invalid email address.";
      }
    }
    if (!formData.ownerPhone.trim()) {
      newErrors.ownerPhone = "Owner phone is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await createProjectInfo(formData);
      alert("Form submitted and stored in Convex!");
      // Reset form fields and clear errors
      setFormData({
        jobType: "",
        jobName: "",
        jobAddress: "",
        projectStartDate: "",
        projectEndDate: "",
        contractorType: "",
        notes: "",
        ownerName: "",
        ownerCompany: "",
        ownerEmail: "",
        ownerPhone: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  // Handler for navigating to past projects
  const handlePastProjects = () => {
    router.push("/Construction/project");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-lg shadow p-8"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Project Information Sheet
        </h1>

        {/* Row 1: Job Type & Job Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="jobType"
              className="block text-gray-700 font-semibold mb-2"
            >
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
            >
              <option value="">Select one...</option>
              <option value="sitevisit">Site Visit</option>
              <option value="bio engineering">Bio Engineering</option>
              <option value="ground water">Ground Water Explorations</option>
              <option value="geotec">Geo Technical Investigations</option>
              <option value="ground improvement">Ground Improvement</option>
              <option value="hydro">Hydro Blasting</option>
              <option value="trenchless">Trenchless Technology</option>
              <option value="sm">Survey & Mapping</option>
              <option value="ers">Earth Retention Systems</option>
              <option value="pilling">Piling</option>
            </select>
            {errors.jobType && (
              <p className="text-red-500 text-sm">{errors.jobType}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="jobName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Job Name
            </label>
            <input
              id="jobName"
              name="jobName"
              type="text"
              value={formData.jobName}
              onChange={handleChange}
              placeholder="e.g. New Office Building"
              className="border border-gray-300 rounded w-full p-2"
            />
            {errors.jobName && (
              <p className="text-red-500 text-sm">{errors.jobName}</p>
            )}
          </div>
        </div>

        {/* Row 2: Job Address & Contractor Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="jobAddress"
              className="block text-gray-700 font-semibold mb-2"
            >
              Job Address
            </label>
            <input
              id="jobAddress"
              name="jobAddress"
              type="text"
              value={formData.jobAddress}
              onChange={handleChange}
              placeholder="e.g. 123 Main St, City, State"
              className="border border-gray-300 rounded w-full p-2"
            />
            {errors.jobAddress && (
              <p className="text-red-500 text-sm">{errors.jobAddress}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="contractorType"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contractor Tier
            </label>
            <select
              id="contractorType"
              name="contractorType"
              value={formData.contractorType}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
            >
              <option value="">Select one...</option>
              <option value="Lower Tier">Lower Tier</option>
              <option value="Prime Contractor">Prime Contractor</option>
              <option value="Sub-Contractor">Sub-Contractor</option>
              <option value="Other">Other</option>
            </select>
            {errors.contractorType && (
              <p className="text-red-500 text-sm">{errors.contractorType}</p>
            )}
          </div>
        </div>

        {/* Row 3: Project Start & End Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="projectStartDate"
              className="block text-gray-700 font-semibold mb-2"
            >
              Project Start Date
            </label>
            <input
              id="projectStartDate"
              name="projectStartDate"
              type="date"
              value={formData.projectStartDate}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
            />
            {errors.projectStartDate && (
              <p className="text-red-500 text-sm">{errors.projectStartDate}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="projectEndDate"
              className="block text-gray-700 font-semibold mb-2"
            >
              Project End Date
            </label>
            <input
              id="projectEndDate"
              name="projectEndDate"
              type="date"
              value={formData.projectEndDate}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
            />
            {errors.projectEndDate && (
              <p className="text-red-500 text-sm">{errors.projectEndDate}</p>
            )}
          </div>
        </div>

        {/* Additional Notes */}
        <div className="mb-4">
          <label
            htmlFor="notes"
            className="block text-gray-700 font-semibold mb-2"
          >
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Describe project details, materials needed, etc."
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>

        <hr className="my-6" />

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Who Hired You?
        </h2>

        {/* Row 4: Owner Name & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="ownerName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              id="ownerName"
              name="ownerName"
              type="text"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="e.g. John Smith"
              className="border border-gray-300 rounded w-full p-2"
            />
            {errors.ownerName && (
              <p className="text-red-500 text-sm">{errors.ownerName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="ownerCompany"
              className="block text-gray-700 font-semibold mb-2"
            >
              Company
            </label>
            <input
              id="ownerCompany"
              name="ownerCompany"
              type="text"
              value={formData.ownerCompany}
              onChange={handleChange}
              placeholder="e.g. Smith Construction Inc."
              className="border border-gray-300 rounded w-full p-2"
            />
          </div>
        </div>

        {/* Row 5: Owner Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="ownerEmail"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="ownerEmail"
              name="ownerEmail"
              type="email"
              value={formData.ownerEmail}
              onChange={handleChange}
              placeholder="e.g. john@smithco.com"
              className="border border-gray-300 rounded w-full p-2"
            />
            {errors.ownerEmail && (
              <p className="text-red-500 text-sm">{errors.ownerEmail}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="ownerPhone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone
            </label>
            <input
              id="ownerPhone"
              name="ownerPhone"
              type="text"
              value={formData.ownerPhone}
              onChange={handleChange}
              placeholder="e.g. (555) 123-4567"
              className="border border-gray-300 rounded w-full p-2"
            />
            {errors.ownerPhone && (
              <p className="text-red-500 text-sm">{errors.ownerPhone}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handlePastProjects}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Past Projects
          </button>
        </div>
      </form>
    </div>
  );
}
