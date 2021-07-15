import fetch from 'node-fetch';

const SENDGRID_API_URL = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY = process.env.NEW_SENDGRID_API_KEY;

const sendMailToMe = async (
  recepient_email, // email_address to send mail
  name_, // from name on email
  subject = 'sample subject',
  client_message, // value we receive from our contact form
  client_email // value we receive from our contact form
) => {
  const sgResponse = await fetch(SENDGRID_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: recepient_email,
            },
          ],
          subject: subject,
        },
      ],
      from: {
        email: 'YOUR VERIFIED SENDGRID MAIL HERE',
        name: 'YOUR NAME',
      },
      content: [
        {
          type: 'text/html',
          value: `<strong>Client Name: ${name_} </strong> \n <p> 
                  sent you a query regarding <strong>${subject} </strong></p>
                  \n <p>Client's Message: <strong>${client_message}</strong><\p> 
                  <p>Client's Email : <strong> ${client_email} </strong></p>`,
        },
      ],
    }),
  });
  return sgResponse;
};

export { sendMailToMe };
