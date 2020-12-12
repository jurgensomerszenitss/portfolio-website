import emailjs from 'emailjs-com';


export const EmailService = {
    send(email) {
        return emailjs.send('service_176vlub', 'template_g76qwhf', email, 'user_Vv4uOR6MOEdRgrLC0HIE3');
    }
} 