const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SIMPLE MENU* ]----- 🔰
Salve, ${pushname} 👋
Tenha um bom dia,boa tarde e boa noite para os usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ NIVEL : ${getLevelingLevel(sender)}
┃│➸ DO UTILIZADOR ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
A seguir estão os recursos deste bot!✨
Se você não entender, digite *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}sticker*
┃│➸ *${prefix}ttp*
┃│➸ *${prefix}tts*
┃│➸ *${prefix}nulis*
┃│➸ *${prefix}toimg*
┃│➸ *${prefix}stalkig*
┃│➸ *${prefix}quotes*
┃│➸ *${prefix}bikinquote*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *𝐵𝑌 𝐵𝑅𝑈𝑋𝐼𝑁𝐻𝑂 𝑀𝑂𝑆 𝑊𝐴𝑅* ]----- 🔰`
}
exports.simple = simple
