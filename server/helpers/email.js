import * as config from "../config.js";

export const emailTemplate = (email, content, reply_to, subject) => {
  return {
    Source: config.email_from,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
    <html>
      <h1>Welcome to the Realist App </h1>
   ${content}
     <p>&copy;${new Date().getFullYear()}</p>
    </html>
      `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Welcome to Realist",
      },
    },
  };
};
