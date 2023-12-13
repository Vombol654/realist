import * as config from "../config.js";
export const welcome = (req, res) => {
  res.json({
    data: "hello from node-js api after changing routes",
  });
};
export const preRegister = (req, res) => {
  // create a jwt with email and password and then email as clickable link
  // only when user clicks that link, registration complete
  try {
    console.log(req.body);
    config.AWSSES.sendEmail(
      {
        Source: config.email_from,
        Destination: {
          ToAddresses: [config.email_to],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `
      <h1>Welcome to the Realist App </h1>
      `,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Welcome to Realist",
          },
        },
      },
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
