function calcPerms(integer) {

names = [
    "create instant invite",
    "kick members",
    "ban members",
    "administrator", 
    "manage channels",
    "manage server", 
    "add reactions", 
    "view audit log", 
    "priority speaker",
    "stream video",
    "view channels",
    "send messages",
    "send tts messages", 
    "manage messages", 
    "embed links", 
    "attach files", 
    "read message history",
    "mention all roles",
    "use external emojis", 
    "view server insights",
    "connect voice",
    "speak",
    "mute members", 
    "deafen members",
    "move members",
    "use voice activity",
    "change nickname",
    "manage nicknames",
    "manage roles", 
    "manage webhooks", 
    "manage emojis and stickers",
    "use application commands",
    "request to speak", 
    "manage events", 
    "manage threads",
    "public threads", 
    "private threads",
    "use external stickers",
    "send messages in threads",
    "start activities (unavailable?)",
    "moderate members" 
]

let permissionsList = [];
names.reverse();
for (i = 0; i < names.length; i++) {
    permissions = 2**((names.length - 1) - i);
    if (integer - permissions >= 0) {
        permissionsList.push(names[i]); 
        integer -= permissions;
        
    }
}
return permissionsList;
}