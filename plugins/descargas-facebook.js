import fetch from 'node-fetch'
import { facebookDl } from './scraper.js'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'

let handler = async (m, { conn, args, command, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\nπππππ πΌ ππΌπΎππ½πππ ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\nπππππ πΌ ππΌπΎππ½πππ ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`, fkontak, m)
/*const sections = [
{
title: htjava + ' π‘ πππππΌ πΏπ πΏπππΎπΌπππΌπ ' + htjava,
rows: [
{title: "π‘ ππΌπΎππ½πππ (π€π₯πππ€π£ 1) ", rowId: `${usedPrefix}fb1 ${args[0]}`},
{title: "π‘ ππΌπΎππ½πππ (π€π₯πππ€π£ 2) ", rowId: `${usedPrefix}fb2 ${args[0]}`},
]}]	
const listMessage = {
text: `πππππΎπΎππππ πππΌ πππΎπππ ππΌππΌ πΏπππΎπΌπππΌπ\n\nπππππΎπ πΌπ ππππππ ππ πΏππππππΌπΏ`,
footer: `*π£π₯ππ ππ¨π  ${user.premium ? "β": "β"}*\n${wm}`,
title: `*ββββκ€ π‘ ππΌπΎππ½πππ κ€ββββ*`,
buttonText: `π°οΈ ππ‘ππππ§ πΏππ¨πππ§ππ π°οΈ`,
sections }  
case "facebook": case "fb": case "facebookdl": case "fbdl":                
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
break  */  
    
try {  
let contenido = `β πππΏππ πΏπ ππΌπΎππ½πππ\n${wm}`
switch (command) {     
case "facebook": case "fb": case "facebookdl": case "fbdl":     
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ππππππ ππ πππππππ, ππ ππππΌ πΏπππΎπΌπππΌππΏπ ππ πππΏππ πΏπ ππΌπΎππ½πππ\n\nππΌππ πΌ ππππππ, ππππ πππΏππ ππ πΏππππππΌπΏπππ`, fkontak, m)
await conn.sendFile(m.chat, videovio, `error.mp4`, contenido, m)
break

}} catch {
await m.reply(`${lenguajeGB['smsAvisoFG']()}πΌπππ ππΌπππ ππΌπ, πππΎππππΏπ πππΌπ ππ ππππΌπΎπ ππΌπππΏπ πΏπ ππΌπΎππ½πππ`)
}}
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i
handler.limit = 3
export default handler
