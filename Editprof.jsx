import React, { useState, useRef } from "react";

const titles = ["Mr", "Ms", "Mrs"];
const genders = ["Male", "Female", "Other"];
const states = ["Tripura", "Other State"];
const districts = ["Agartala", "Udaipur"];
const prtcIssuingDistricts = ["Agartala", "Udaipur"];

const qualifications = [
  "High School",
  "Intermediate",
  "Graduation",
  "Post Graduation",
  "PhD",
];

const experienceLevels = ["Fresher", "0-1", "1-3", "3-5", "5+"];

const jobRoles = [
  "Data Entry",
  "Frontend Developer",
  "Backend Developer",
  "Designer",
  "Project Manager",
];

const workLocations = ["Agartala", "Udaipur", "Gomati", "Dhalai"];

function maskAadhaar(aadhaar) {
  if (!aadhaar) return "";
  return aadhaar.replace(/^(\d{3})\d{5}(\d{4})$/, "$1*****$2");
}

export default function Editprof() {
  // Active tab state
  const [activeTab, setActiveTab] = useState("personal");

  // Form state
  const [form, setForm] = useState({
    // Personal Info (some read-only, some editable)
    title: "Mr",
    fullName: "Ravi Kumar",
    fatherName: "",
    motherName: "",
    dob: "2004-04-04",
    gender: "Male",
    aadhaar: "123456789012",
    mobile: "",
    email: "",
    state: "Tripura",
    district: "Agartala",
    tripuraResident: "Yes",
    prtcNumber: "PRTC123456",
    prtcDistrict: "Agartala",
    prtcIssueDate: "2020-01-01",
    prtcCertificate: null, // File

    // Education & Job Preference
    qualification: "",
    specialization: "",
    skills: [],
    experienceLevel: "",
    yearsOfExperience: "",
    preferredJobRole: "",
    preferredLocations: [],
    resume: null,
    coverLetter: null,
    certifications: null,
  });

  // File inputs refs to clear after upload
  const prtcRef = useRef();
  const resumeRef = useRef();
  const coverLetterRef = useRef();
  const certificationsRef = useRef();

  // Skills input state for tag input
  const [skillInput, setSkillInput] = useState("");

  // Handlers
  const handleInputChange = (e) => {
    const { name, value, type, checked, options } = e.target;
    if (type === "select-multiple") {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);
      setForm((f) => ({ ...f, [name]: selected }));
    } else if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm((f) => ({ ...f, [name]: files[0] }));
  };

  const addSkill = () => {
    const val = skillInput.trim();
    if (val && !form.skills.includes(val)) {
      setForm((f) => ({ ...f, skills: [...f.skills, val] }));
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setForm((f) => ({
      ...f,
      skills: f.skills.filter((s) => s !== skill),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!form.qualification) {
      alert("Please select Highest Qualification");
      return;
    }
    if (!form.experienceLevel) {
      alert("Please select Experience Level");
      return;
    }
    if (form.experienceLevel !== "Fresher" && !form.yearsOfExperience) {
      alert("Please enter Years of Experience");
      return;
    }
    if (!form.preferredJobRole) {
      alert("Please select Preferred Job Role");
      return;
    }
    if (!form.mobile.match(/^\d{10}$/)) {
      alert("Mobile number must be 10 digits");
      return;
    }
    if (
      !form.email.match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // simple email regex
      )
    ) {
      alert("Invalid email format");
      return;
    }
    if (!form.resume) {
      alert("Please upload your resume (PDF, max 2MB)");
      return;
    }
    if (form.resume && form.resume.type !== "application/pdf") {
      alert("Resume must be a PDF file");
      return;
    }
    if (form.resume && form.resume.size > 2 * 1024 * 1024) {
      alert("Resume file size must be less than 2MB");
      return;
    }

    // Submit form here (e.g. send to backend)
    alert("Profile saved successfully!");
  };

  return (
    <div className="mx-50 p-6 bg-slate-200 min-h-screen max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">PROFILE</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6 border-b">
        <button
          onClick={() => setActiveTab("personal")}
          className={`px-4 py-2 font-medium border-b-2 ${
            activeTab === "personal"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-blue-600"
          }`}
          type="button"
        >
          Personal Information
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-4 py-2 font-medium border-b-2 ${
            activeTab === "education"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-blue-600"
          }`}
          type="button"
        >
          Education & Job Preference
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 space-y-8"
        noValidate
      >
        {activeTab === "personal" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Basic Details</h2>
            {/* Title */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <label className="block">
                <span className="font-semibold">Title (read-only)</span>
                <select
                  name="title"
                  value={form.title}
                  disabled
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                >
                  {titles.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-semibold">Full Name (read-only)</span>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  readOnly
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Father's Name (optional)</span>
                <input
                  type="text"
                  name="fatherName"
                  value={form.fatherName}
                  onChange={handleInputChange}
                  placeholder="Enter Father's Name"
                  pattern="[A-Za-z\s]+"
                  title="Alphabets only"
                  maxLength={100}
                  className="mt-1 block w-full border rounded p-2"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <label className="block">
                <span className="font-semibold">Mother's Name (optional)</span>
                <input
                  type="text"
                  name="motherName"
                  value={form.motherName}
                  onChange={handleInputChange}
                  placeholder="Enter Mother's Name"
                  pattern="[A-Za-z\s]+"
                  title="Alphabets only"
                  maxLength={100}
                  className="mt-1 block w-full border rounded p-2"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Date of Birth (read-only)</span>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  readOnly
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Gender (read-only)</span>
                <select
                  name="gender"
                  value={form.gender}
                  disabled
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                >
                  {genders.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-end">
              <label className="block">
                <span className="font-semibold">Aadhaar No (read-only)</span>
                <input
                  type="password"
                  name="aadhaar"
                  value={maskAadhaar(form.aadhaar)}
                  readOnly
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Mobile Number *</span>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleInputChange}
                  placeholder="10-digit Indian number"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  className="mt-1 block w-full border rounded p-2"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Email ID *</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="Email ID"
                  required
                  maxLength={100}
                  className="mt-1 block w-full border rounded p-2"
                />
              </label>
            </div>

            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <label className="block">
                <span className="font-semibold">State (read-only)</span>
                <select
                  name="state"
                  value={form.state}
                  disabled
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                >
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-semibold">District (read-only)</span>
                <select
                  name="district"
                  value={form.district}
                  disabled
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                >
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-semibold">Are You Resident of Tripura? (read-only)</span>
                <input
                  type="text"
                  value={form.tripuraResident}
                  readOnly
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                />
              </label>
            </div>

            <h3 className="text-lg font-semibold mb-2">PRTC Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-center">
              <label className="block">
                <span className="font-semibold">PRTC Number (read-only)</span>
                <input
                  type="text"
                  name="prtcNumber"
                  value={form.prtcNumber}
                  readOnly
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                />

              </label>

              <label className="block">
                <span className="font-semibold">PRTC Issuing District (read-only)</span>
                <select
                  name="prtcDistrict"
                  value={form.prtcDistrict}
                  disabled
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                >
                  {prtcIssuingDistricts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-semibold">PRTC Issue Date (read-only)</span>
                <input
                  type="date"
                  name="prtcIssueDate"
                  value={form.prtcIssueDate}
                  readOnly
                  max={new Date().toISOString().split("T")[0]}
                  className="mt-1 block w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                />
              </label>
            </div>
 {/* 3 */}
            <label className=" block mb-6">
              <span className=" font-semibold">PRTC Certificate Document (view/download)</span>
              {form.prtcCertificate ? (
                <a
                  href={URL.createObjectURL(form.prtcCertificate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block w-full border rounded p-2"
                >
                  View / Download
                </a>
              ) : (
                <div className="mt-1 text-gray-500">No file uploaded</div>
              )}
              <input
                type="file"
                name="prtcCertificate"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                ref={prtcRef}
                className=" mt-1 block w-full border rounded p-2 "
              />
              <small className="text-gray-500">
                JPG, PNG, PDF; max size 2MB
              </small>
            </label>
          </section>
        )}

        {activeTab === "education" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Qualification Info</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <label className="block">
                <span className="font-semibold">Highest Qualification *</span>
                <select
                  name="qualification"
                  value={form.qualification}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border rounded p-2"
                >
                  <option value="">Select Qualification</option>
                  {qualifications.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-semibold">Stream / Specialization *</span>
                <input
                  type="text"
                  name="specialization"
                  value={form.specialization}
                  onChange={handleInputChange}
                  placeholder="Computer Science"
                  pattern="[A-Za-z\s]+"
                  title="Alphabets only"
                  maxLength={100}
                  required
                  className="mt-1 block w-full border rounded p-2"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Skills (optional)</span>
                <div className="flex gap-2 flex-wrap border rounded p-2">
                  {form.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm flex items-center gap-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="font-bold text-red-500 ml-1"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                    placeholder="Add skill and press Enter"
                    className="flex-grow border-none focus:ring-0 outline-none"
                  />
                </div>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <label className="block">
                <span className="font-semibold">Experience Level *</span>
                <select
                  name="experienceLevel"
                  value={form.experienceLevel}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border rounded p-2"
                >
                  <option value="">Select Experience Level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-semibold">
                  Years of Experience{" "}
                  {form.experienceLevel !== "Fresher" && "*"}
                </span>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={form.yearsOfExperience}
                  onChange={handleInputChange}
                  placeholder="1"
                  min={0}
                  max={99}
                  disabled={form.experienceLevel === "Fresher"}
                  required={form.experienceLevel !== "Fresher"}
                  className="mt-1 block w-full border rounded p-2"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Preferred Job Role *</span>
                <select
                  name="preferredJobRole"
                  value={form.preferredJobRole}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border rounded p-2"
                >
                  <option value="">Select Job Role</option>
                  {jobRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block mb-6">
              <span className="font-semibold">Preferred Work Location(s) (optional)</span>
              <select
                multiple
                name="preferredLocations"
                value={form.preferredLocations}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded p-2 h-32"
              >
                {workLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </label>

            <h3 className="text-xl font-semibold mb-4">Documents</h3>

            <label className="block mb-4">
              <span className="font-semibold">Upload Resume *</span>
              <input
                type="file"
                name="resume"
                accept="application/pdf"
                onChange={handleFileChange}
                ref={resumeRef}
                required
                className=" mt-1 block w-full border rounded p-2"
              />
              <small className="text-gray-500">PDF only, max size 2MB</small>
              {form.resume && (
                <p className="mt-1 text-green-700">
                  Selected file: {form.resume.name}
                </p>
              )}
            </label>

            <label className="block mb-4">
              <span className="font-semibold">Upload Cover Letter (optional)</span>
              <input
                type="file"
                name="coverLetter"
                accept="application/pdf"
                onChange={handleFileChange}
                ref={coverLetterRef}
                className=" mt-1 block w-full border rounded p-2"
              />
              <small className="text-gray-500">PDF only, max size 2MB</small>
              {form.coverLetter && (
                <p className="mt-1 text-green-700">
                  Selected file: {form.coverLetter.name}
                </p>
              )}
            </label>

            <label className="block mb-4">
              <span className="font-semibold">Upload Certifications (optional)</span>
              <input
                type="file"
                name="certifications"
                accept="application/pdf"
                onChange={handleFileChange}
                ref={certificationsRef}
                className=" mt-1 block w-full border rounded p-2 "
              />
              <small className="text-gray-500">PDF only, max size 2MB</small>
              {form.certifications && (
                <p className="mt-1 text-green-700">
                  Selected file: {form.certifications.name}
                </p>
              )}
            </label>
          </section>
        )}

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => alert("Profile Edit Cancelled")}
            className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}








