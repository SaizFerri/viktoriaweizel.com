import type { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const body = req.body;

    if (!body.email) {
      res.status(400).json({ error: "Email is missing" });
    }

    try {
      await mailchimp.lists.addListMember("217aaf7199", {
        email_address: body.email,
        status: "subscribed",
      });

      res.status(200).json({ text: "Subscribed successfully" });
    } catch (e) {
      res.status(e.status).json(e.response.text);
      return;
    }
  }
};
