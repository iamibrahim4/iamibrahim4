exports.run = {
   usage: ['modapk'],
   hidden: ['getmodapk'],
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
         if (command == 'modapk') {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'fb lite'), m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Api.modapk(text)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
          let textt = "*Mod of app*  " + text + "\n\nTwo dwonload type " + isPrefix + " getmodapk ${text} number of app below \n\n───────────────────\n";
          json.data.map(async (v, i) =>  {
                textt += `⚡ No : ${v.no}\n ❤Name : ${i.name}\n♫ Version : ${
          i.version
        }\n🙈Mod : ${i.mod}\n🎵Url : ${
          i.url
        }\n\n──────────────\n\n`;
            })
	m.reply(`${textt}`)
         } else if (command == 'getmodapk') {
            if (!text) return client.reply(m.chat, global.status.invalid, m)
            let [query, no] = text.split`—`
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Api.modapk(query, no)  
            let teks = `乂  *P L A Y S T O R E*\n\n`
            teks += '	◦  *Name* : ' + json.data.name + '\n'
            teks += '	◦  *Version* : ' + json.data.version + '\n'
            teks += '	◦  *Size* : ' + json.file.size + '\n'
            teks += '	◦  *Mod* : ' + json.data.mod + '\n'
            teks += '	◦  *Publish* : ' + json.data.publish + '\n'
            teks += global.footer
            
            client.sendFile(m.chat, json.data.thumbnail, '', teks, m).then(() => {
               client.sendFile(m.chat, json.file.url, json.file.filename, '', m)
            })
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   restrict: true
}
