const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Urubokka,Matara."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94775053620" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94775053620,94775053620";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94775053620";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94775053620,94775053620";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_51_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrR0RTa09rNXRQa2dhS1lMREhxVzVPL0hjRWpXRVltZEJuc1N0ck80Ui9vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1MDUzNjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRjRGQkM5RDIxMDY2MUYwNDdBM0M0MDgyMTkzM0I4MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk3NjcwOTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NTA1MzYyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjc2MzkwQjc4ODZFREEzOTE3QTQxODI5Qjk2OTVDQjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NzY3MDkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZNd0k4V0Z3UmllVC1UR2ZBbTA0aUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWUwZTFmODctYzNkZi00YzM5LThjZDgtMGU2ZDVjYTBiODYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDEyLFxuICAgICAgMTM0LFxuICAgICAgMTY3LFxuICAgICAgMTEwLFxuICAgICAgNCxcbiAgICAgIDg5LFxuICAgICAgMTg0LFxuICAgICAgMTI2LFxuICAgICAgMTAwLFxuICAgICAgMTc4LFxuICAgICAgMzAsXG4gICAgICAxOTEsXG4gICAgICAyOSxcbiAgICAgIDE4MSxcbiAgICAgIDY1LFxuICAgICAgMTAyLFxuICAgICAgMjM2LFxuICAgICAgNSxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDI0OSxcbiAgICAgIDIwMixcbiAgICAgIDE1OSxcbiAgICAgIDEwNixcbiAgICAgIDE3MyxcbiAgICAgIDEzOSxcbiAgICAgIDI0OCxcbiAgICAgIDE3MSxcbiAgICAgIDEwNCxcbiAgICAgIDQzLFxuICAgICAgMTc4LFxuICAgICAgMTE3LFxuICAgICAgOCxcbiAgICAgIDQ2LFxuICAgICAgMjQsXG4gICAgICAyNTAsXG4gICAgICAxODAsXG4gICAgICA2MSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlIWk42UDkzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTA1MzYyMDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIm5vdGl5YVwiLFxuICAgIFwibGlkXCI6IFwiNjQ1MTA4OTUzNTgxODA6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFJdWFVREVLdk42TGdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybnU5YzRuQ0lENzFnaDlXZDRUdEhudklPVVozelJrbWtCZWtMUVJVblc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIksreWlRTkROOVhqRisxT0FqM3B3eEZ4S001dElXYmVvMkpMN0VOMkwrNi9XM3FpbDF1Qy9YbHNQZktsQU1SUWxrRC9PMU9iRVh4TGpNZTVBYWk2QkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhUeFM0NnRaWU9EV0x5czJjd3dDMVFmMkFpN1FpTStEcDdjYVEzNTRJY1UyY3lTTUdiN2VXSlB4SE5SUk84ZjdvN2FaNWlhWExuaWxFUzRkak9kZGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1MDUzNjIwOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTc2NzA4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUgvN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSC83Lmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
