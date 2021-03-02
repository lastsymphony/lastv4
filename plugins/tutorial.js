let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *Last*

Ketik di *[TERMUX]*
1) $pkg install git -y
2) $pkg install ffmpeg -y
3) $pkg install imagemagick -y
4) $pkg install nodejs -y
5) $pkg install libwep -y
6) $git clone https://github.com/lastsymphony/last
7) $ls
8) $cd last
9) $npm install
10) $npm audit fix
11) $npm start
scan kode qr

_Bisa kalian liat tutorialnya di_
*Youtube kami:*
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

