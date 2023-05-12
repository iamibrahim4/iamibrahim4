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
            for (let i = 0; i < 18; i++) {
            var rand = Math.floor(json.result.length * Math.random())
            let textt = "*XNXX Search*\n\n Result From search  " + text + "\n\nTo download type ${isPrefix}getxnxx your link\n\n───────────────────\n";
           textt += `❤️Title : ${json.result[rand].title}\n🙈Views : ${
          json.result[rand].title
        }\n👑Quality : ${json.result[rand].title}\n⌛️Duration : ${
          json.result[rand].title
        }\n⚡️Link : ${
          json.result[rand].title
        }\n\n──────────────\n\n`;
            }
           client.sendFile(m.chat, json.result[0].thumb, '', textt, m)
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
