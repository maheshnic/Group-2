import Header from "../components/Header";

import Jobcard from "../components/Jobcard";
export default function Dashboard() {

    const items = [
    {
      id: 1,
      title: "Selected",
       cnt:"4"
    },
    {
      id: 2,
      title: "Rejected",
       cnt:"15"
     
    },
     {
      id: 3,
      title: "Pending",
      cnt:"2"
    },
  ];

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1 bg-gray-50 min-h-screen p-6">
        <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Job Dashboard</h1>
         </header>
         {/* //Stats */}
          <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 m-18">
      <div className="bg-blue-100 p-4 rounded">
        <p className="text-gray-700">Total Jobs Available</p>
        <h2 className="text-2xl font-bold">50</h2>
      </div>
      <div className="bg-green-100 p-4 rounded">
        <p className="text-gray-700">Applications</p>
        <h2 className="text-2xl font-bold">11</h2>
      </div>
      <div className="bg-yellow-100 p-4 rounded">
        <p className="text-gray-700">Interviews Scheduled</p>
        <h2 className="text-2xl font-bold">5</h2>
      </div>
    </div>
        
        {/* <Joblist /> */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {items.map((item) => (
                <Jobcard key={item.id} job={item}  />
              ))}
            </div>
      </main>
    </div>
  );
}
