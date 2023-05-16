exports.run = {
    usage: ['terabox'],
   use: 'link',
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
            client.sendReact(m.chat, '🕒', m.key)
             let json = await Func.fetchJson(`https://sh.xznsenpai.xyz/api/teraboxdl?url=${text}`) 
            client.sendFile(m.chat, json.dlink, '', '', m)
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
