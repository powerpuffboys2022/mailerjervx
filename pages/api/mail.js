// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sendEmail = require("../../services/Mailer");

export default function handler(req, res) {
    const { template, to, name, subject, content, verification } = req.body;
  
    sendEmail(to, {
      template_name: template, to, name, subject, content, verification
    });
  
    res.status(200).json({ message : "ok"}); 
}