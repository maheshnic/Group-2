export default function Jobcard({ job }) {
     if (job.id===1) {
    return(<div className=" rounded p-4 bg-green-300 shadow transition-transform duration-200 transform hover:scale-105 ">
      <h2 className=" text-green-800 text-xl font-semibold">{job.title}</h2>
      <p className="text-green-800">{job.cnt}</p>
    </div>
    );
     }
      if (job.id===2) {
    return(<div className=" rounded p-4 bg-red-500 shadow transition-transform duration-200 transform hover:scale-105 ">
      <h2 className=" text-red-800 text-xl font-semibold">{job.title}</h2>
      <p className="text-red-800">{job.cnt}</p>
    </div>
    );

     }
      if (job.id===3) {
    return(<div className=" rounded p-4 bg-yellow-300 shadow transition-transform duration-200 transform hover:scale-105 ">
      <h2 className=" text-yellow-800 text-xl font-semibold">{job.title}</h2>
      <p className="text-yellow-800">{job.cnt}</p>
    </div>
    );

     }
}
