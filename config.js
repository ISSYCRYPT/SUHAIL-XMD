const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07046209508";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_34_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ1gxUHZITGx0WHNsbWFhMCtwS0dCQmtOK2lxNnZ6ZlhHTExTd0ZqRmNROD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMXFBd3N6Z0FSaUNkaUxPZHhONHhDZ1wiLFxuICBcInBob25lSWRcIjogXCJjMjA2YmY3OS05OWI0LTRmN2YtYTMyZC0yMzU4YjE5OWU5YjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxODksXG4gICAgICAyMDMsXG4gICAgICA2MyxcbiAgICAgIDMxLFxuICAgICAgODMsXG4gICAgICAyMzAsXG4gICAgICAxNDUsXG4gICAgICAyMjcsXG4gICAgICA3NSxcbiAgICAgIDUzLFxuICAgICAgMzksXG4gICAgICAxMDMsXG4gICAgICA2MixcbiAgICAgIDQzLFxuICAgICAgMjMxLFxuICAgICAgNzUsXG4gICAgICAyMTgsXG4gICAgICAyMTgsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTU1LFxuICAgICAgMTE0LFxuICAgICAgOTksXG4gICAgICAxMTMsXG4gICAgICA2MSxcbiAgICAgIDM3LFxuICAgICAgMjQ4LFxuICAgICAgMTU1LFxuICAgICAgNTMsXG4gICAgICA3OSxcbiAgICAgIDExMCxcbiAgICAgIDExLFxuICAgICAgOCxcbiAgICAgIDEzMixcbiAgICAgIDIyNCxcbiAgICAgIDE1MCxcbiAgICAgIDIxMCxcbiAgICAgIDEwMyxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQTNXM1BaV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NjIwOTUwODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI2OTUwNzUyODI1MzcwOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xPbjV0UUVFSUNyanJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibVROWGZTYzZRbnNmeTcwMHVVQS9TcHF4U0Z3TGl3bGxWQ3Q2Y3QvOFR3QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqRVRFRmtLSlluTmF4TXNHZ29BRVB3c2hmQ0x5VWU5SW1xYWF1TXVPY0FWTXovOExKVlFVSzlYTWlWUjA1SGx6RHRES2R5Qml0VWtmQjlZVVRRdHpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1RitKd0JoeEs1Z1YyQnJ1ZTMwRW5BQ1lGWFFUWjhzNWNmNGM5cXpaWmw0eGxqZ044a2NMc3RpbmVTWHpVSFJUQ1c4RkRFdGFTVlc5ZDdyZWpTUUdEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ2MjA5NTA4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDM4NTI4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVAveFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUC94Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
