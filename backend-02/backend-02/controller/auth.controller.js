import { registerService } from "../service/auth.service.js";
import { loginSchema, registerSchema } from "../validators/validator.js";

export const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const { error } = registerSchema.validate(req.body);

    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const data = await registerService(email, password, name);

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error, "error");
  }
};
