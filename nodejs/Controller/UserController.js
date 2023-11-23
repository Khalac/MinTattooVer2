import Email from "../models/email.js";

const EmailController = {
  getEmail: async (req, res) => {
    const email = await Email.find()
      .then((email) => res.json({ onSuccess: true, email }))
      .catch((err) => res.json({ onSuccess: false }));
  },
  postEmail: async (req, res) => {
    try {
      const data = req.body.mail;
      const email = { email: data };

      const newEmail = new Email(email);
      await newEmail.save();
      return res.json({ onSucecss: true });
    } catch (error) {
      return res.json({ onSuccess: false, error });
    }
  },
};

export default EmailController;
