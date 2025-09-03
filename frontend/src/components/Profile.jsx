import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaFileAlt, FaGlobe } from "react-icons/fa";
import "../styles/dark.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("/api/profile").then((res) => setProfile(res.data));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="card">
      <h2>👤 Profile</h2>
      <h4><b>Name:</b> {profile.name}</h4>
      <h4><b>Email:</b> {profile.email}</h4>
      <h4><b>Education:</b> {profile.education}</h4>
      <h4><b>Skills:</b> {profile.skills.join(", ")}</h4>

      <div className="icon-links">
        <a href={profile.links.github} target="_blank"><FaGithub /></a>
        <a href={profile.links.linkedin} target="_blank"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Profile;