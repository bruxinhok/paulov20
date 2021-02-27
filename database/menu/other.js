const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OTHER MENU* ]----- 🔰
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
┃│➸ *${prefix}brainly*
┃│➸ *${prefix}wiki*
┃│➸ *${prefix}pinterest*
┃│➸ *${prefix}resepmakanan*
┃│➸ *${prefix}beritahoax*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}nulis1*
┃│➸ *${prefix}nulis2*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *𝐵𝑌 𝐵𝑅𝑈𝑋𝐼𝑁𝐻𝑂 𝑀𝑂𝑆 𝑊𝐴𝑅* ]----- 🔰`
}
exports.other = other
