// const sgMail = require("@sendgrid/mail");
const nodeEmailer = require('nodemailer');
const fs = require('fs');

// const setApiKey = async () => { 
//     const key = process.env.SENDGRID_KEY;
//     sgMail.setApiKey(key);
// }
// setApiKey()

const getFileContent = (template_content) => {
    let contents = fs.readFileSync(`templates/${template_content.template_name}.html`, 'utf-8');
    return contents;
}

const transTemplate = (template_content) => {
    var template = require('es6-template-strings');
    return template(getFileContent(template_content), {...template_content})
}

const sendMail = (msg) => {
    try{
        // const sent = await sgMail.send(msg);
        let smtpTransport = nodeEmailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASS
            }
        });
        
        smtpTransport.sendMail(msg, (error, response) => {
            if (error) console.log("error",error);
            else console.log('Sucess');
        });
    
        smtpTransport.close();
    }catch(e){
        console.log(e)
    }
}

const sendEmail = (userEmail, template_content) => {
    /**
     * user_email : string
     * template_content : {
     *  template_name : string
     *  ...other content
     * }
     */
    
    let mailOptions = {
        // from: "uptech.coderph@gmail.com",
        from : process.env.MAIL,
        to: userEmail,
        subject : template_content.subject,    
        html: transTemplate(template_content)
    };

    sendMail(mailOptions)
}

module.exports = sendEmail