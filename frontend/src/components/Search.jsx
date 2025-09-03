import React, { useState } from "react";
import axios from "axios";
import "../styles/dark.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [work, setWork] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/query/search?q=${query}`
      );
      setProjects(res.data.projects);
      setWork(res.data.work);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  return (
    <div className="card">
      <h2>🔍 Search Projects & Work</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Type a skill, company, or role"
      />
      <button onClick={handleSearch}>Search</button>

      {projects.length > 0 && (
        <div>
          <h3>💻 Projects</h3>
          <ul>
            {projects.map((p) => (
              <li key={p._id} className="card">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <p><i>Skills:</i> {p.skills.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {work.length > 0 && (
        <div>
          <h3>🏢 Work</h3>
          <ul>
            {work.map((w) => (
              <li key={w._id} className="card">
                <h4>{w.company} - {w.role}</h4>
                <p>{w.description}</p>
                <p><i>Duration:</i> {w.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;