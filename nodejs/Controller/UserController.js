import Email from "../models/email.js";

const EmailController = {
  getEmail: async (req, res) => {
    const email = await Email.find()
      .then((email) => res.json({ email }))
      .catch((err) => console.log(err));
  },
  postEmail: async (req, res) => {
    const data = req.body;
    const email = data;
    const newEmail = new Email(email);
    await newEmail.save();
    return res
      .status(201)
      .json({ message: "Your clothes posted successfully" });
  },
};

export default EmailController;
