
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
┏━━❉ *Abour User* ❉━━━┓
┣⊱ *nama* : ${pushname}
┣⊱ *nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *level* : ${getLevelingLevel(sender)}
┣⊱ *user register : ${_registered.length}
┗━━━━━━━━━━━━━━━━

┏━━❉ *LEVEL 0* ❉━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}toimg*
┣━━❉ *LEVEL 2* ❉━━
┣⊱ *${prefix}tiktokstalk*
┣━━❉ *LEVEL 4* ❉━━
┣⊱ *${prefix}text3d*
┣━━❉ *LEVEL 6* ❉━━
┣⊱ *${prefix}spamcall*
┣━━❉ *LEVEL 8* ❉━━
┣⊱ *${prefix}chord*
┣⊱ *${prefix}lirik*
┣⊱ *${prefix}phlogo*
┣━━❉ *LEVEL 9* ❉━━
┣⊱ *${prefix}owner*
┗━━━━━━━━━━━━━━

┏━━❉ *Group* ❉━━━━┓
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}welcome* [1/0]
┣━━❉ *Owner* ❉━━
┣⊱ *${prefix}bc*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}getses*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}clone*
┗━━━━━━━━━━━━━━━━
`
}
exports.help = help



  
