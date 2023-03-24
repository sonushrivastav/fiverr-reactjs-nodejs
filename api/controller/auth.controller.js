import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      password: hash,
      ...req.body,
    });

    await newUser.save();
    res.status(201).send("user has been created!");
  } catch (error) {
    res.status(500).send("Something went Wrong!");
  }
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
