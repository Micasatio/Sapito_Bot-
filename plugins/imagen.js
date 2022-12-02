let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[❗] 𝙸n grese el texto que quiera buscar*')
let results = await gis(text) || []
let { url, width, height } = pickRandom(results) || {}
if (!url) return m.reply('*[❗] Servidor caído xd, intenta más tarde kp*')
conn.sendFile(m.chat, url, 'gimage', `
🔎 *Aquí tienes el resultado de* ${text}
🌎 *Buscador:* Google
`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
