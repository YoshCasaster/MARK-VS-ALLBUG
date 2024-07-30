let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By PUKI PUKI PUKI',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: yoshcss.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ PUKI PUKI PUKI ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⿻𝐙͢𝐱𝐕⿻\nAKU SUKA AMA LOBANG BOOL KAMU, AYO NGEGAY😋😘\",\"id\":\".terkentod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}

yoshcss.relayMessage(m.chat, msg, {});

let target = m.chat

async function pnis() {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By PUKI PUKI PUKI',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: yoshcss.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ PUKI PUKI PUKI ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⿻𝐙͢𝐱𝐕⿻\nAKU SUKA AMA LOBANG BOOL KAMU, AYO NGEGAY😋😘\",\"id\":\".terkentod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}), { userJid: target, quoted: m })
await yoshcss.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

pnis()