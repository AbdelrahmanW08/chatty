import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id } = req.params;
    const senderId = req.user._id;
    const messages = await Message.find({ $or: [{ senderId: id, recieverId: senderId }, { senderId: senderId, recieverId: id }] });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, image } = req.body;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const message = await Message.create({ senderId, recieverId: id, text, image: imageUrl });

    await message.save();
    res.status(201).json(message);
  } catch (error) {
    console.log("Error in sendMessage controller: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};