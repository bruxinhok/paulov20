const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *MENU DO 𝐵𝑌 𝐵𝑅𝑈𝑋𝐼𝑁𝐻𝑂 𝑀𝑂𝑆 𝑊𝐴𝑅* ]----- 🔰
Salve, ${pushname} 👋
Tenha um bom dia,boa tarde e boa noite para os usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ DINHEIRO : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ NÍVEL : ${getLevelingLevel(sender)}
┃│➸ DO UTILIZADOR ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
A seguir estão os recursos deste bot!✨
Se você não entender, digite *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}info*
┃│➸ *${prefix}ping*
┃│➸ *${prefix}donasi*
┃│➸ *${prefix}owner*
┃│───────────────────
┃│➸ *${prefix}simplemenu*
┃│➸ *${prefix}makermenu*
┃│➸ *${prefix}gabutmenu*
┃│➸ *${prefix}downloadmenu*
┃│➸ *${prefix}randommenu*
┃│➸ *${prefix}dompetmenu*
┃│➸ *${prefix}othermenu*
┃│➸ *${prefix}groupmenu*
┃│➸ *${prefix}soundmenu*
┃│➸ *${prefix}premiummenu*
┃│➸ *${prefix}ownermenu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *𝐵𝑅𝑈𝑋𝐼𝑁𝐻𝑂 𝑀𝑂𝐷𝑆 𝑊𝐴𝑅* ]----- 🔰`
}
exports.help = help
