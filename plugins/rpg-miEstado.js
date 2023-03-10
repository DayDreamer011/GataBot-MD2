let handler = async function (m, { conn, text, command, usedPrefix }) {
let miEstado
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let user = global.db.data.users[m.sender]
let name = await conn.getName(m.sender)
let emoji = [ 
'๐', '๐', '๐', '๐', '๐', '๐ฅน', '๐', '๐' ,'๐คฃ', '๐ฅฒ',
'โบ๏ธ', '๐' ,'๐', '๐', '๐', '๐', '๐' ,'๐', '๐ฅฐ', '๐', 
'๐', '๐' ,'๐', '๐', '๐', '๐', '๐' ,'๐คช', '๐คจ', '๐ง', 
'๐ค', '๐' ,'๐ฅธ', '๐คฉ', '๐ฅณ', '๐', '๐' ,'๐', '๐', '๐',
'๐', '๐' ,'โน๏ธ', '๐ฃ', '๐', '๐ซ', '๐ฉ' , '๐ฅบ', '๐ข', '๐ญ',
'๐ค', '๐ ' ,'๐ก', '๐คฌ', '๐คฏ', '๐ณ', '๐ฅต' ,'๐ฅถ', '๐ถโ๐ซ๏ธ', '๐ฑ',
'๐จ', '๐ฐ' ,'๐ฅ', '๐', '๐ค', '๐ค', '๐ซฃ' ,'๐คญ', '๐ซข', '๐ซก',
'๐คซ', '๐ซ ' ,'๐คฅ', '๐ถ', '๐ซฅ', '๐', '๐ซค' ,'๐', '๐ฌ', '๐',
'๐ฏ', '๐ฆ' ,'๐ง', '๐ฎ', '๐ฒ', '๐ฅฑ', '๐ด' ,'๐คค', '๐ช', '๐ฎโ๐จ',
'๐ต', '๐ตโ๐ซ' ,'๐ค', '๐ฅด', '๐คข', '๐คฎ', '๐คง' ,'๐ท', '๐ค', '๐ค',
'๐ค', '๐ค ' ,'๐', '๐ฟ', '๐คก' 
]

let significado = [
'Animado/a', 'Contento/a', 'Feliz', 'Sonriente', 'Risueรฑo/a', 'Orgulloso/a', 'Desenmascarado/a', 'Divertido/a' ,'Gracioso/a', 'Apenado/a',
'Amistoso/a', 'Amable' ,'Inocente', 'Cordial', 'Sarcastico/a', 'Coqueto/a' ,'Aliviado/a', 'Enamorado/a', 'Cariรฑoso/a', 'Afectuoso/a',
'Amoroso/a', 'Tierno/a', 'Empalagoso/a', 'Gustoso/a' ,'Bromista', 'Disgustado/a', 'Travieso/a', 'Loco/a', 'Desconfiado/a', 'Curioso/a', 
'Estudioso/a', 'Valiente' ,'Disfrazado/a', 'Entusiasmado/a', 'Festivo/a', 'Provocativo/a', 'Decepcionado/a' ,'Deprimido/a', 'Desanimado/a', 'Temeroso/a', 
'Inseguro/a', 'Desconsolado/a' ,'Infeliz', 'Angustiado/a', 'Estresado/a', 'Cansado/a', 'Frustrado/a' ,'Tierno/a', 'Dolorido/a', 'Lloroso/a',
'Exasperado/a', 'Irritado/a' ,'Enojado/a', 'Furioso/a', 'Asombrado/a', 'Sonrojado/a', 'Caluroso/a' ,'Frรญo/a', 'Timido/a ', 'Asustado/a',
'Preocupado/a', 'Aterrorizado/a' ,'Inquieto/a', 'Debil', 'Apoyado/a', 'Pensativo/a', 'Fascinado/a' ,'Pรญcaro/a', 'Avergonzado/a', 'Respetado/a',
'Misterioso/a', 'Impaciente' ,'Mentiroso/a', 'Indiferente', 'Introvertido/a', 'Inexpresivo/a', 'Confuso/a' ,'Aburrido/a', 'Incรณmodo/a', 'Fastidiado/a',
'Maravillado/a', 'Atรณnito/a' ,'Intranquilo/a', 'Sorprendido/a', 'Impactado/a', 'Fatigado/a', 'Dormido/a' ,'Apetitoso/a', 'Ilusionado/a', 'Resoplido/a',
'Mareado/a', 'Hipnotizado/a' ,'Silencioso/a', 'Espontรกneo/a', 'Nรกuseas', 'Asqueado/a', 'Resfriado/a' ,'Protegido/a', 'Enfermizo/a', 'Lastimado/a',
'Afortunado/a', 'Actor/Actriz' ,'Malvado/a', 'Diabรณlico/a', 'Payasesco/a'
]

let sections = Object.keys(emoji, significado).map((v, index) => ({ title: `๐ค CรMO ESTร HOY?`,
rows: [{ title: `ยป ${emoji[v]}${emoji[v]}${emoji[v]}${emoji[v]}`, description: `${1 + index}. ${significado[v]}`, rowId: usedPrefix + command + ' ' + text + significado[v] + ' ' + emoji[v], }], }))

const listMessage = {
text: `โ ${user.registered === true ? user.name : name}\n๐ *SELECCIONE SU ESTADO ACTUAL POR FAVOR*\n*โ SU ESTADO ACTUAL:* ${typeof user.miestado === 'string' ? user.miestado : 'Estado no asignado'}\n\n*โฐโธบ โน โธบ  โน โธบ โน โธบ โน โธบ โน ใ*`,
footer: wm,
title: "*โญโธบ โน โธบ  โน โธบ โน โธบ โน โธบ โน ใ*\n",
buttonText: "๐ MI ESTADO ๐",
sections
} 

if (command == 'miestado') { 
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
miEstado = text.trim()
user.miestado = miEstado
if (text) return conn.sendButton(m.chat, eg + `*GENIAL!! SE HA AGREGADO UN ESTADO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n` + `*โ SU ESTADO:* ${user.miestado}`, wm, null, [[`๐ MENU`, usedPrefix + 'menu']], m)
miEstado = 0
}}
handler.command = ['miestado'] 
export default handler
