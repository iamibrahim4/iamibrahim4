exports.run = {
   usage: ['snakvideo'],
   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'your snak video link'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.snak(args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         client.sendFile(m.chat, json.result.url, '', json.result.caption, m)
          } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   premimum: true,
   location: __filename
}
