let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod':
if (!text) throw `*${lenguajeGB['smsAvisoMG']()} πππππππ ππ ππππ½ππ πΏπ ππΌ πΌππ πππ ππππππΌ π½πππΎπΌπ*`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text: '*ππ πππ πππππ½ππ πππΎπππππΌπ πππππππΌπΏπ πΏπ ππΌ πΌππ' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: 'πππππΎπΎππππ ππ πππΏ πΌ πΏπππΎπΌπππΌπ', rows: srh}]
const listMessage = {text: `β­βγ πππΏππΌππ γββ± ]\nβββββββΒ«β’Β»ββββββ\nβ- π πππππππΌπΏππ πΏπ: ${text}\nβ°ββββ° π  ${vs} β±ββββα`, footer: wm, title: null, buttonText: "πππππΎπΎππππ πΌπππ", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': 
if (!text) throw `*${lenguajeGB['smsAvisoMG']()} πππππππ ππ ππππ½ππ πΏπ ππΌ πΌππ πππ ππππππΌ π½πππΎπΌπ\n πππππππ: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ β ] α΄Κ α΄Κα΄ΚΙͺα΄ α΄ α΄s α΄α΄α΄α΄sΙͺα΄α΄α΄ α΄α΄sα΄α΄α΄*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ β ] α΄Κ α΄Κα΄ΚΙͺα΄ α΄ α΄s α΄α΄α΄α΄sΙͺα΄α΄α΄ α΄α΄sα΄α΄α΄*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch {
throw `${lenguajeGB['smsAvisoFG']()} ππ ππ πππΎπππππΌπ ππππππ πππΏ πΌππ πΎππ πππ ππππ½ππ π ππΌ πΌππ (ππΌππππΌ) ππππΌ πΎπΌππΏπΌ`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
handler.limit = 3
handler.register = true
handler.level = 6
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
