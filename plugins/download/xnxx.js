exports.run = {
   usage: ['xnxx'],
   hidden: ['getxnxx'],
   use: 'query',
   category: 'downloader',
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
    }) => {
      try {
         if (command == 'xnxx') {
           if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'step mom'), m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Api.adus(text)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
	   const resp = json.result.slice(0, 18); 
  let textt = "*XNXX Search*\n\n Result From search  " + text + "\n\nTo download type ${isPrefix}getxnxx your link\n\n───────────────────\n";
          textt += `❤️Title : ${resp.title}\n⌛️Duration : ${
          resp.duration
        }\n⚡️Link : ${
          resp.url
        }\n\n──────────────\n\n`;
            
	 
		client.sendFile(m.chat, json.result[0].thumb, '', textt, m)
         } else if (command == 'getxnxx') {
             if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'your link'), m)
             if (!args[0].match(/(?:https?:\/\/(www\.)?(xnxx)\.(com)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Func.fetchJson(`https://api-fgmods.ddns.net/api/dowloader/xnxxdl?url=${args[0]}&apikey=fg-dylux`)  
            let teks = `乂  *N S F W*\n\n`
            teks += '	◦  *Name* : ' + json.result.title + '\n'
            teks += '	◦  *Duratiom* : ' + json.result.duration + '\n'
            teks += '	◦  *Quality* : ' + json.result.quality + '\n'
            teks += global.footer
            client.sendFile(m.chat, json.result.image, '', teks, m).then(() => {
               client.sendFile(m.chat, json.result.files.high, '', json.result.title, m)
           })
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   premium: true
}
