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
            let json = await Api.aaas (text)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
	  let textt = "*XNXX Search*\n\n Result From search  " + text + "\n\nTo download type " + isPrefix + " getxnxx your link\n\n───────────────────\n";
            const items = json.result.slice(0, 18);
		 for (const item of items) {
  const { title, url, quality, duration } = item;
		 textt += `❤️Title : ${title}\n👑Quality : ${quality}\n⌛️Duration : ${
          duration
        }\⚡️Link : ${
          url
        }\n\n──────────────\n\n`;
	   }
     let thumb = await Func.fetchBuffer(`https://telegra.ph/file/4b8fa581714a1a2e70b0c.png`)       
	 
		client.sendFile(m.chat, thumb, '', textt, m)
         } else if (command == 'getxvideos') {
             if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'your link'), m)
             if (!args[0].match(/(?:https?:\/\/(www\.)?(xvideos)\.(com)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Func.fetchJson(`https://api.ibeng.tech/api/search/xvideosdown?url=${args[0]}&apikey=tamvan`)  
            if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
            let teks = `乂  *N S F W*\n\n`
            teks += '	◦  *Name* : ' + json.data.title + '\n'
            teks += '	◦  *Duratiom* : ' + json.data.duration + '\n'
            teks += '	◦  *like* : ' + json.data.like_count + '\n'
            teks += '	◦  *Keywords* : ' + json.data.keyword + '\n'
            teks += '	◦  *views* : ' + json.data.views + '\n\n'
            teks += global.footer
            client.sendFile(m.chat, json.data.thumb, '', teks, m).then(() => {
               client.sendFile(m.chat, json.data.url, '', json.data.title, m)
           })
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   premium: true,
  
}
