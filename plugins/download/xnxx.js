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
	  let textt = "*XNXX Search*\n\n Result From search  " + text + "\n\nTo download type ${isPrefix}getxnxx your link\n\n───────────────────\n";
            json.result.map(async (v, i) => {
		 textt += `❤️Title : ${v.title}\n⌛️Duration : ${
          v.duration
        }\n⚡️Link : ${
          v.url
        }\n\n──────────────\n\n`;
	   })
            
	 
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
