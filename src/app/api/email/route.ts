import { Resend } from 'resend';
// import Email from '../../../emails/Email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(){
    // const {name} = await request.json();

    

    try {
      const data = await resend.sendEmail({
        from: 'onboarding@resend.dev',
        to: 'ex@gmail.com',
        subject: 'hello world',
        // react: Email()
      });
      return console.log(data)
    }catch(error){
      console.error(error);
    }

}
