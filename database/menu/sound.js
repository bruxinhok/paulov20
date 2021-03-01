const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOUND MENU* ]----- 🔰
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
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}sound1*
┃│➸ *${prefix}sound2*
┃│➸ *${prefix}sound3*
┃│➸ *${prefix}sound4*
┃│➸ *${prefix}sound5*
┃│➸ *${prefix}sound6*
┃│➸ *${prefix}sound7*
┃│➸ *${prefix}sound8*
┃│➸ *${prefix}sound9*
┃│➸ *${prefix}sound10*
┃│➸ *${prefix}musica11*
┃│➸ *${prefix}musica12*
┃│➸ *${prefix}musica13*
┃│➸ *${prefix}musica14*
┃│➸ *${prefix}musica15*
┃│➸ *${prefix}musica16*
┃│➸ *${prefix}musica17*
┃│➸ *${prefix}musica18*
┃│➸ *${prefix}musica19*
┃│➸ *${prefix}musica20*
┃│➸ *${prefix}musica21*
┃│➸ *${prefix}musica22*
┃│➸ *${prefix}musica23*
┃│➸ *${prefix}musica24*
┃│➸ *${prefix}musica25*
┃│➸ *${prefix}musica26*
┃│➸ *${prefix}musica27*
┃│➸ *${prefix}musica28*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *𝐵𝑌 𝐵𝑅𝑈𝑋𝐼𝑁𝐻𝑂 𝑀𝑂𝑆 𝑊𝐴𝑅* ]----- 🔰`
}
exports.sound = sound
