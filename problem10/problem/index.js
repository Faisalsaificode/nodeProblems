// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';
import { text } from 'stream/consumers';

const Solution = async () => {
  // Write your code here
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user: 'faisalsaifi.code@gmail.com',
      pass: 'bydl ylmd redo azna', 
    },
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please enter your mail ", async (answer) => {
    const mailOption = {
      from: 'faisalsaifi.code@gmail.com',
      to: answer.trim(),
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!',
    };

    try{
      await transporter.sendMail(mailOption);
      console.log(`Success: Email sent to ${mailOption.to}`);
    }catch(err){
      console.log('Email send Failed with error: ' + err);
    }finally{
      rl.close();
    }
  })
};

export default Solution;
