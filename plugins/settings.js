const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")

cmd({
    pattern: "settings",
    alias: ["setting","st"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = `* _𝑸𝑼𝑬𝑬𝑵 𝑹𝑨𝑺𝑯𝑼 𝑴𝑫 𝑺𝑬𝑻𝑻𝑰𝑵𝑮𝑺_


╭══════════════════════○
┣━ *𝗪𝗢𝗥𝗞 𝗠𝗢𝗗𝗘 ✨*
> *1️⃣.1️⃣  Public Work*
> *1️⃣.2️⃣  Private Work*
> *1️⃣.3️⃣  Group Only*
> *1️⃣.4️⃣  Inbox Only*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘 ✨*
> *2️⃣.1️⃣ Auto Voice On*
> *2️⃣.2️⃣ Auto Voice Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗦𝗘𝗘𝗡 ✨*
> *3️⃣.1️⃣ Auto Read Status On*
> *3️⃣.2️⃣ Auto Read Status Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ✨*
> *4️⃣.1️⃣ Auto sticker On*
> *4️⃣.2️⃣ Auto sticker Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬✨*
> *5️⃣.1️⃣ Auto reply On*
> *5️⃣.2️⃣ Auto reply Off*
╭══════════════════════○
┣━ *𝗕𝗢𝗧 𝗢𝗡𝗟𝗜𝗡𝗘 𝗢𝗙𝗙𝗟𝗜𝗡𝗘 ✨*
> *6️⃣.1️⃣ Online On*
> *6️⃣.2️⃣ Online Off*
╭══════════════════════○
┣━ *𝗠𝗦𝗚 𝗥𝗘𝗔𝗗 ✨*
> *7️⃣.1️⃣ Read Msg On*
> *7️⃣.2️⃣ Read Msg Off*
╭══════════════════════○
┣━ *𝗠𝗦𝗚 𝗥𝗘𝗔𝗖𝗧 ✨*
> *8️⃣.1️⃣ Auto React On*
> *8️⃣.2️⃣ Auto React Off*
╭══════════════════════○
┣━ *𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 ✨*
> *9️⃣.1️⃣ Anti Link Off*
> *9️⃣.2️⃣ Anti Link On*
> *9️⃣.3️⃣ Anti Link Remove*
╭══════════════════════○
┣━ *𝗔𝗡𝗧𝗜 𝗕𝗢𝗧 ✨*
> *🔟.1️⃣ Anti Bot On*
> *🔟.2️⃣ Anti Bot Off*
╭══════════════════════○
┣━ *𝗔𝗡𝗧𝗜 𝗖𝗔𝗟𝗟 ✨*
> *1️⃣1️⃣.1️⃣ Anti Call On*
> *1️⃣1️⃣.2️⃣ Anti Call Off*
╰═══════════════════════○


* *🔢 Reply Below This Number Change To QUEEN-TASHU-MD Bot Change Setting*

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/BsjkCDP/9555.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart" );
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart" );
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart" );
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart" );
                      break;
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        reply(".restart" );
                        break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                        reply(".restart" );
                    break;
                    case '3.1':    
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart" );
                    break;
                    case '3.2':    
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart" );
                    break;                    
                    case '4.1':    
                        reply(".update AUTO_STICKER:true");
                        reply(".restart" );
                    break;
                    case '4.2':    
                        reply(".update AUTO_STICKER:false");
                        reply(".restart" );
                    break;                                        
                    case '5.1':    
                        reply(".update AUTO_REPLY:true");
                        reply(".restart" );
                    break;
                    case '5.2':    
                        reply(".update AUTO_REPLY:false");
                        reply(".restart" );
                    break;                        
                    case '6.1':    
                        reply(".update ALLWAYS_OFFLINE:true");
                        reply(".restart" );
                    break; 
                    case '6.2':    
                        reply(".update ALLWAYS_OFFLINE:false");
                        reply(".restart" );
                    break;                       
                    case '7.1':    
                        reply(".update READ_MESSAGE:true");
                        reply(".restart" );
                    break;
                    case '7.2':    
                        reply(".update READ_MESSAGE:false");
                        reply(".restart" );
                    break;
                    case '8.1':    
                        reply(".update AUTO_REACT:true");
                        reply(".restart" );
                    break;
                    case '8.2':    
                        reply(".update AUTO_REACT:false");
                        reply(".restart" );
                    break;
                    case '9.1':    
                        reply(".update ANTI_LINK:true");
                        reply(".update ANTI_LINKK:false");
                        reply(".restart" );
                    break;
                    case '9.2':    
                        reply(".update ANTI_LINKK:true");
                        reply(".update ANTI_LINK:false");
                        reply(".restart" );
                    break;
                    case '9.3':    
                        reply(".update ANTI_LINK:false");
                        reply(".update ANTI_LINKK:false");
                        reply(".restart" );
                    break;
                        case '10.1':     
                        reply(".update ANTI_BOT:true");
                        reply(".restart" );
                        break;
                    case '10.2':     
                        reply(".update ANTI_BOT:false");
                        reply(".restart" );
                    break;
                        case '11.1':     
                        reply(".update ANTI_CALL:true");
                        reply(".restart" );
                        break;
                    case '11.2':     
                        reply(".update ANTI_CALL:false");
                        reply(".restart" );
                    break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
