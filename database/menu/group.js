const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GRUPO MENU* ]----- 🔰
Salve, ${pushname} 👋
Tenha um bom dia,boa tarde e boa noite para os usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ NIVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
A seguir estão os recursos deste bot!✨
Se você não entender, digite *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}welcome* 「1/0」
┃│➸ *${prefix}leveling* 「1/0」
┃│➸ *${prefix}simih* 「1/0」
┃│➸ *${prefix}nsfw* 「1/0」
┃│➸ *${prefix}antilinkgrup* 「1/0」
┃│➸ *${prefix}grup* 「buka/tutup」
┃│➸ *${prefix}add*
┃│➸ *${prefix}kick*
┃│➸ *${prefix}hedsot*
┃│➸ *${prefix}linkgrup*
┃│➸ *${prefix}promote*
┃│➸ *${prefix}demote*
┃│➸ *${prefix}setname*
┃│➸ *${prefix}setdesc*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}tagall*
┃│➸ *${prefix}admin*
┃│➸ *${prefix}level*
┃│➸ *${prefix}fitnah*
┃│➸ *${prefix}hidetag*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *𝐵𝑌 𝐵𝑅𝑈𝑋𝐼𝑁𝐻𝑂 𝑀𝑂𝑆 𝑊𝐴𝑅* ]----- 🔰`
}
exports.groupm = groupm
