import Work from "../models/Work.js";

// @desc    Get all work experiences
// @route   GET /api/work
// @access  Public
export const getWork = async (req, res) => {
  try {
    const work = await Work.find();
    res.json(work);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching work data" });
  }
};