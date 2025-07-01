import React from 'react'

  const applications = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    date: "2024-05-01",
    status: "Pending",
  },
  {
    id: 2,
    company: "Facebook",
    role: "Backend Engineer",
    date: "2024-04-15",
    status: "Rejected",
  },
  {
    id: 3,
    company: "Amazon",
    role: "Fullstack Developer",
    date: "2024-03-20",
    status: "Accepted",
  },
  {
    id: 4,
    company: "Microsoft",
    role: "Frontend Developer",
    date: "2024-02-01",
    status: "Rejected",
  },
  {
    id: 5,
    company: "IBM",
    role: "AI Engg",
    date: "2024-06-08",
    status: "Accepted",
  },
  {
    id: 6,
    company: "Oracle",
    role: "Backend Developer",
    date: "2024-9-03",
    status: "Accepted",
  },
  {
    id: 7,
    company: "Intel",
    role: "Data Analyst",
    date: "2024-08-06",
    status: "Rejected",
  },

];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Accepted: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
}
export default function Applica() {
  return (
   <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">Application History</h1>
      <ul className="space-y-4">
        {applications.map(({ id, company, role, date, status }) => (
          <li
            key={id}
            className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-md shadow hover:shadow-lg transition-shadow "
          >
            <div>
              <p className="text-lg text-blue-900 font-semibold">{company}</p>
              <p className="text-blue-500">{role}</p>
            </div>
            <div className="mt-2 md:mt-0 text-gray-500">
              Applied on:{" "}
              <span className="font-medium">
                {new Date(date).toLocaleDateString("en-IN", {
                       day: "numeric",
                      month: "short",
                       year: "numeric",
                    })}
              </span>
            </div>
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}
              >
                {status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
