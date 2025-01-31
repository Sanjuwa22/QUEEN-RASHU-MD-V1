const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5qaDVBYWdMc3dQTTZWclozZWpnQTVRcXZFQTgxQlZaS0hQRzNpUm1FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnh6R0R4UjNXYzNXUFkvd3gvcnNJZ1lXOEQ3M2l5b1loQjRXSWxVSW0xcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRk9McUxzRlFuaW04L3N6emR3WHNLMGg1bGtQTGtyRXl5SDA2OEJLZTBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4T21UVXFXN25jNDVEVk41TkIzUGJIcFJBbjQwQ3M1LyttUTZXUmlxWG5FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHTWk2OFNrdm5mMzFGbUhObHNEdzNCamdUbDc0azkvejNhZ3d6cGh0SGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYyNWJlR1hOK1lxYkVTYUN6Z0VLRlloL1plSm1CdkNuTE92WG9BUGU2WDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElMWExKZ1luaGg0Q0ZTRVpUN3M2dFRMa2poT2RkbzFTSzJNaHF3RjkxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1pDeGJSTlVOM2NsaTZZYm5uNHp1dXY3NENYQURna21OWUxZU1ZNTEJTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitsRDNRU2FGSHhsTysyZFBQYVRWRzgwOWlQcTAxQVZ6cnA3M0pDc2NkNlMySXA3enZhUFhaRmhVeW9WbTJQOUw3OFFUSm5JZWFESnNaYWt1TXM5V0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJocmkwN1dZZlNZTjlvUnNaSFBnZ0ZPZWFXNkE4R05rSDR2dUljc0ZPNEEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2OTI4NTQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY5MjlDNDNDMTI2OUNGQUY4MTYzQkZGQ0ZDMDhEMjdFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzgzNTAwODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2OTI4NTQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ3MEExNzhDNkVENjA1NDdFMkM4MDFDNTk2ODg5ODU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzgzNTAwODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2OTI4NTQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZEMTY0NjQzODExRUI4REVGQjA5OTg5OEEzOTZGQjU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzgzNTAwODl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2OTI4NTQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBGRkE0NjE0MzBFNUREODhDNjY5OEJBNzQyNzRERkJEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzgzNTAwODl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJEbkh3cG0xVFpPUVRURGx4b1liQXciLCJwaG9uZUlkIjoiOWFiYjFlZWEtMWQwMi00NTIxLTkwOTUtMjlmMDRmOGYyZGQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Ta2RUdTJ5L0JoYXpldXIva0NoS3FLcDBaRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ZGxhakV5SmI1T0I1Z2ppUzdkbVVxODV6Z1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUFETExWNkoiLCJtZSI6eyJpZCI6Ijk0Nzc2OTI4NTQ4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FuanV3YSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHpMbXhjUStidjB2QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRUpJQ1dzaktJdVpXWThHdmduVHpSZTZiNW00SXFWSVl0SS94TmQ2MGpBST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakhIRmk4bkREcGJjbkJQbC83em41RjJBWk4yTytvR0RTY2VMSTlrUDc4OUJTMXdEUUFzRDl6U1ZzN3hkc1QrVllHVVVNekNYbm1vTldjcTh0N0hiREE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1oSTgzTmVoU3JvbzY5M0tnbmlWN1hCTFBZN080Yi80RzlMT2pabG5tUXBhNnFrTTZ0VFRHamZxK1V1V0trWnl0cFNLTFQ1WGVCNDQ2N0RpNTVoa0JBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzY5Mjg1NDg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSQ1NBbHJJeWlMbVZtUEJyNEowODBYdW0rWnVDS2xTR0xTUDhUWGV0SXdDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4MzUwMDg2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQxdyJ9",
MONGODB: process.env.MONGODB || "mongodb://mongo:gKHtmRBScqBqMvRgsANvxGNUecfnJdGO@roundhouse.proxy.rlwy.net:59033",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BsjkCDP/9555.jpg",
BOT_NAME: process.env.BOT_NAME || "QUEEN-RASHU-MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
};
