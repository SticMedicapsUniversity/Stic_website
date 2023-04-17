
// import { google } from 'googleapis'
// import nodemailer from 'nodemailer'


// const auth = new google.auth.GoogleAuth({
//     keyFile: './src/lib/secrete.json',
//     scopes: 'https://www.googleapis.com/auth/spreadsheets',
// });
// let client = auth.getClient()

// const googleSheets = google.sheets({ version: 'v4', auth: client })

// let spreadsheetId = '1Z63tCBZAq6h60fH45IUb6ejgec4iE0DbvSYQTvKxAS8'



// export async function load() {
//     let metadata = await googleSheets.spreadsheets.values.get({
//         auth,
//         spreadsheetId,
//         range: "A:C",
//         valueRenderOption: "FORMATTED_VALUE"
//     })
//     let mails_ = metadata.data.values

//     let mails = mails_.map((arr) => {
//         return arr[2]
//     })
//     console.log(mails)
//     return { mail: metadata.data.values }
// }


// async function getMails() {
//     let metadata = await googleSheets.spreadsheets.values.get({
//         auth,
//         spreadsheetId,
//         range: "A:C",
//         valueRenderOption: "FORMATTED_VALUE"
//     })
//     return metadata.data.values
// }


// async function mail() {
//     let testAccount = await nodemailer.createTestAccount();
//     let resp = await getMails()
//     let mails = resp.map((arr) => {
//         return arr[2]
//     })
//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: "tiwaary10@gmail.com",
//         },
//     });


//     let info = await transporter.sendMail({
//         from: 'tiwaary10@gmail.com',
//         to: mails,
//         subject: "Hello ✔",
//         html: "<b>Hello world?</b>",
//     });

//     console.log("Message sent: %s", info.messageId);

// }

// mail().catch(console.error);