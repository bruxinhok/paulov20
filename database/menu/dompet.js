const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *DOMPETKU MENU* ]----- 🔰
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
┃│➸ *${prefix}limit*
┃│➸ *${prefix}atm*
┃│➸ *${prefix}transfer*
┃│➸ *${prefix}buylimit*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *𝐵𝑌 𝐵𝑅𝑈𝑋𝐼𝑁𝐻𝑂 𝑀𝑂𝑆 𝑊𝐴𝑅* ]----- 🔰`
}
exports.dompet = dompet
