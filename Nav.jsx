import { useState } from "react";

export default function Nav() {

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">JobPortal</div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Register</a>
        </div>
        </div>
    </nav>
  );
}
