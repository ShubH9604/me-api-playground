import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/dark.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("/api/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="card">
      <h2>💻 Projects</h2>
      <div>
        {projects.map((p) => (
          <div key={p._id} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><i>Skills:</i> {p.skills.join(", ")}</p>
            <div className="icon-links">
              {p.links.map((link, idx) => (
                <a key={idx} href={link} target="_blank">🔗</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;