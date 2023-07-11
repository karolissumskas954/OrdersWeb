import { Resend } from 'resend';
import Email from '../../../emails/Email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request){
    const {name} = await request.json();
    resend.sendEmail({
        from: 'mail@email.test.dev',
        to: 'ex@gmail.com',
        subject: 'hello world',
        react: Email({
            name
        })
      });
      return console.log(name)
}