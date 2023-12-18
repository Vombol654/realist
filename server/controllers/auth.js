import * as config from "../config.js";
import jwt from "jsonwebtoken";
import { emailTemplate } from "../helpers/email.js";
export const welcome = (req, res) => {
  res.json({
    data: "hello from node-js api after changing routes",
  });
};
export const preRegister = (req, res) => {
  // create a jwt with email and password and then email as clickable link
  // only when user clicks that link, registration complete
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    const token = jwt.sign({ email, password }, config.JWT_SECRET, {
      expiresIn: "1h",
    });
    config.AWSSES.sendEmail(
      emailTemplate(
        email,
        `
         <p>Please click the link below to activate your account</p>
     <a href="${config.CLIENT_URL}/auth/account-activate/${token}">Activate my account</a>
      `,
        config.email_to,
        `Activate your account`
      ),
      (err, data) => {
        if (err) {
          console.log(err);
          return res.json({ ok: false });
        } else {
          console.log(data);
          return res.json({ ok: true });
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong try again" });
  }
};

export const register = async (req, res) => {
  try {
    console.log(req.body);
  } catch (e) {
    console.log(e);
    return res.json({ error: "Something went wrong, Please try again" });
  }
};
