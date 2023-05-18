exports.run = {
    usage: ['buffer'],
   use: 'query',
    category: 'tools',
    async: async (m, {
       client,
       text,
       args,
       isPrefix,
       command
    }) => {
       try {
           if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'your image url'), m);
      client.sendReact(m.chat, '🕒', m.key);
             if (text.match(/(?:https?:\/\/?$/)) return client.reply(m.chat, global.status.invalid, m)
        let thumb = await Func.fetchBuffer(`${text}`)
        client.sendFile(m.chat, thumb, '', `${text}`, m)
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
