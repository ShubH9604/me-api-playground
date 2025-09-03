import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
};

export const updateProfile = async (req, res) => {
  const profile = await Profile.findOneAndUpdate({}, req.body, { new: true });
  res.json(profile);
};