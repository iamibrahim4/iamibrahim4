exports.run = {
   usage: ['playstore'],
   hidden: ['getplaystore'],
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
         if (command == 'playstore') {
           if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Telegram'), m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Api.gppl(text)
            if (!json.message) return client.reply(m.chat, global.status.fail, m)
	  let textt = "*playstore Search*\n\n Result From search  " + text + "\n\nTo download type " + isPrefix + " getplaystore link\n\n───────────────────\n";
            const items = json.result.slice(0, 5);
		 for (const item of items) {
  const { title, appId, url, developer, free, score } = item;
		 textt += `❤️Title : ${title}\n👑Appid : ${appId}\n⌛️Developer : ${
          developer
        }\n⚡️Free : ${
          free
        }/n👑Rating : ${
          score
        }\n⚡️Link : ${
          url
        }\n\n──────────────\n\n`;
	   }
            
	 
		client.sendFile(m.chat, json.result.icon[0], '', textt, m)
         } else if (command == 'getplaystore') {
             if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'your app id '), m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Func.fetchJson(`https://api.ibeng.tech/api/search/xvideosdown?url=${args[0]}&apikey=yahaa`)  
            if (!json.message) return client.reply(m.chat, Func.jsonFormat(json), m)
            let teks = `乂  *N S F W*\n\n`
            teks += '	◦  *Name* : ' + json.result.apk_name + '\n'
            teks += '	◦  *Version* : ' + json.result.apk_version + '\n'
            teks += '	◦  *Developer* : ' + json.result.apk_author + '\n'
            teks += global.footer
            client.sendFile(m.chat, json.data.apk_icon, '', teks, m).then(() => {
               client.sendFile(m.chat, json.data.apk_link, '', json.result.apk_name, m)
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
