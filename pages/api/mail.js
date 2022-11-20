// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sendEmail = require("../../helpers/api/emailer");

export default function handler(req, res) {
    const { template, to, name, subject, content, verification } = req.body;
  
    Mailer(to, {
      template_name: template, to, name, subject, content, verification
    });
  
    res.status(200).json({ message : "ok"});
}