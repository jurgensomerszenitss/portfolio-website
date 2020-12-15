import emailjs from 'emailjs-com';



export const EmailService = {
    sendContact(email) {
        return emailjs.send('service_176vlub', 'template_g76qwhf', email, 'user_Vv4uOR6MOEdRgrLC0HIE3');
    },
    sendJob(email){
        return emailjs.send('service_176vlub', 'template_r1c8r71', email, 'user_Vv4uOR6MOEdRgrLC0HIE3');
    }
} 