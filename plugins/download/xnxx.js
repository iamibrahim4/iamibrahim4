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
            json.result.map(async (v, i) => {
           let teks = `⚡ To download type ${isPrefix}getxnxx your link \n Title : ${v.title}\n♫ Views : ${
          v.views
        }\nQuality : ${v.quality}\nDuration : ${
          i.duration
        }\Link : ${
          v.link
        }\n\n──────────────\n\n`;
            }
           client.sendFile(m.chat, json.result[0].thumb, '', teks, m)
         } else if (command == 'getxnxx') {
             if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'your link'), m)
             if (!args[0].match(/(?:https?:\/\/(www\.)?(xnxx)\.(com)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Func.fetchJson(`https://api.ibeng.tech/api/search/xnxxdl?url=${args[0]}&apikey=tamvan`)  
            if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
            let teks = `乂  *N S F W*\n\n`
            teks += '	◦  *Name* : ' + json.result.title + '\n'
            teks += '	◦  *Duratiom* : ' + json.result.duration + '\n'
            teks += '	◦  *Quality* : ' + json.result.quality + '\n'
            teks += '	◦  *Keywords* : ' + json.result.keyword + '\n'
            teks += '	◦  *views* : ' + json.result.views + '\n\n'
            teks += global.footer
            client.sendFile(m.chat, json.result.thumb, '', teks, m).then(() => {
               client.sendFile(m.chat, json.result.url, '', json.result.title, m)
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
