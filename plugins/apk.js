const config = require('../config')
const {
    cmd,
    commands
} = require('../plugin')

const apkdl = require('../lib/apkdl')


cmd({
    pattern: "apk",
    alias: ["app"],
    use: '.apk <name>',
    react: "⬇️",
    desc: 'Download apps',
    category: "download",
    filename: __filename

},
async (conn, m, mek, { from, q, reply }) => {
  try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let listdata = `*📚 ɴᴀᴍᴇ :* ${data.name}
*📦 ᴅᴇᴠᴇʟᴏᴘᴇʀ :* ${data.package}
*⬆️ ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ :* ${data.lastup}
*📥 ꜱɪᴢᴇ :* ${data.size}`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: mek })
if (data.size.includes('GB')) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
if (data.size.includes('MB') && data.size.replace(' MB','') > config.MAX_SIZE) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  console.log(e)
}
})
