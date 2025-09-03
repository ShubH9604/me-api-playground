// frontend/src/components/Work.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/dark.css";

const Work = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    axios.get("/api/work").then((res) => setWork(res.data));
  }, []);

  return (
    <div className="card">
      <h2>💼 Work Experience</h2>
      <div>
        {work.map((w) => (
          <div key={w._id} className="card">
            <h3>{w.company}</h3>
            <p><strong>Role:</strong> {w.role}</p>
            <p><strong>Duration:</strong> {w.duration}</p>
            <p>{w.description}</p>
            <div className="icon-links">
              {w.links?.map((link, idx) => (
                <a key={idx} href={link} target="_blank" rel="noreferrer">
                  🌐
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;