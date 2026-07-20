import React from "react";
import emailjs from "@emailjs/browser";

const Email = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        const serviceId = 'service_u13bh3l';
        const templateId = 'template_h0tjatb'
        const publicKey = 'zZI5XUrQzS1skFeFv'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Charles Gabut",
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

    }
    return (
        <form onSubmit={handleSubmit} className='email-form'>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit"> Send Email</button>
        </form>
    )
}

export default Email;