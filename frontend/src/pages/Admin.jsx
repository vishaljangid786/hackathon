import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchTeams = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in the request
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Teams Data:", data);
        setTeams(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeams();
  }, [navigate]);

  return (
    <div className="admin-container bg-zinc-900 min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Admin Dashboard
      </h1>
      {teams.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-zinc-800 shadow-md rounded-lg">
            <thead>
              <tr className="bg-zinc-800 border-b-2 text-md border-black text-zinc-400 text-left">
                <th className="py-3 px-6">S.No</th>
                <th className="py-3 px-6">Team Name</th>
                <th className="py-3 px-6">Team Leader</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">WhatsApp</th>
                <th className="py-3 px-6">College Name</th>
                <th className="py-3 px-6">Team Members</th>
                <th className="py-3 px-6">GitHub Account</th>
                <th className="py-3 px-6">Field</th>
                <th className="py-3 px-6">Year</th> {/* Year column added */}
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-zinc-700" : "bg-zinc-600"
                  } hover:bg-zinc-500 text-white text-sm font-semibold transition-colors`}
                >
                  <td className="py-4 px-6">{index + 1 + "."}</td>
                  <td className="py-4 px-6">{team.teamName}</td>
                  <td className="py-4 px-6">{team.teamLeader}</td>
                  <td className="py-4 px-6">{team.email}</td>
                  <td className="py-4 px-6">{team.whatsapp}</td>
                  <td className="py-4 px-6">{team.collegeName}</td>
                  <td className="py-4 px-6">{team.TeamMembers}</td>
                  <td className="py-4 px-6">
                    <a
                      href={team.githubAccount}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      {team.githubAccount}
                    </a>
                  </td>
                  <td className="py-4 px-6">{team.field}</td>
                  <td className="py-4 px-6">{team.year}</td>{" "}
                  {/* Year data displayed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-zinc-300">
          No teams found
        </p>
      )}
    </div>
  );
};

export default Admin;
