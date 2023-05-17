exports.run = {
   usage: ['xvideos'],
   hidden: ['getxvideos'],
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
         if (command == 'xvideos') {
           if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'step mom'), m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Api.aaas (text)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
	  let textt = "*xvideos Search*\n\n Result From search  " + text + "\n\nTo download type " + isPrefix + " getxvideosyour link\n\n───────────────────\n";
            const items = json.result.slice(0, 18);
		 for (const item of items) {
  const { title, url, quality, duration } = item;
		 textt += `❤️Title : ${title}\n👑Quality : ${quality}\n⌛️Duration : ${
          duration
        }\n⚡️Link : ${
          url
        }\n\n──────────────\n\n`;
	   }
     let thumb = await Func.fetchBuffer(`https://logos-world.net/wp-content/uploads/2023/01/XVideos-Logo-500x281.png`)       
	 
		client.sendFile(m.chat, thumb, '', textt, m)
         } else if (command == 'getxvideos') {
             if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'your link'), m)
             if (!args[0].match(/(?:https?:\/\/(www\.)?(xvideos)\.(com)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Func.fetchJson(`https://api.ibeng.tech/api/search/xvideosdown?url=${args[0]}&apikey=yahaa`)  
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
