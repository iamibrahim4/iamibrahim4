exports.run = {
  usage: ['makeanime'],
  use: 'query',
  category: 'utilities',
  async: async (m, {
    client,
    text,
    isPrefix,
    command
  }) => {
    try {
     if (!text) return client.reply(m.chat, Func.example(isPrefix, command, `girl with red eyes`), m)
         client.sendReact(m.chat, '🕒', m.key)
        const aii = await Func.fetchBuffer(`https://api.itsrose.site/image/anime/diffusion?prompt=${text}&negative_prompt=3d%2C%20bad%20anatomy.&apikey=e3f7c48414c36ab74bbc192f`)
       let aaaa = `${text}`
       client.sendFile(m.chat, aii, '', aaaa, m)
     } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
  },
  error: false,
  limit: true,
  restrict: true,
};
