exports.run = {
    usage: ['gdrive'],
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
        if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'https://drive.google.com/file/d/1mkfqv5lwuNGpKatPRzPP4r01N6ZFxwBY/view?usp=drivesdk'), m)
              if (!text.match(/(?:https?:\/\/(drive\.)?(google)\.(com)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
             client.sendReact(m.chat, '🕒', m.key)
             let json = await Func.fetchJson(`https://api-fgmods.ddns.net/api/dowloader/gdrive?url=${text}&apikey=fg-dylux`) 
             if (!json.status) return client.reply(m.chat, global.status.fail, m)
             let teks = `乂  *G D R I V E*\n\n`
            teks += '	◦  *Size* : ' + json.result.fileSize + '\n'
            teks += '	◦  *Extension* : ' + json.result.version + '\n\n'
             client.sendFile(m.chat, json.result.downloadUrl, json.result.fileName, teks, m)
              }
        catch (e) {
          console.log(e)
          return client.reply(m.chat, global.status.error, m)
       }
    },
    error: false,
    limit: true,
    restrict: true,
    premimum: true,
 }
