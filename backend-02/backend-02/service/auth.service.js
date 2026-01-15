import { User } from "../model/user.model.js";

export const registerService = async (email, password, name) => {
  if (email && password) {
    const userData = await User.findOne({ email });

    console.log(userData);
  }
};
