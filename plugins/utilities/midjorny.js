exports.run = {
  usage: ['midjourny'],
  use: 'query',
  category: 'ai',
  async: async (m, {
    client,
    text,
    isPrefix,
    command
  }) => {
    try {
     if (!text) return client.reply(m.chat, Func.example(isPrefix, command, `Thor as superman, artsation, illustration`), m)
         client.sendReact(m.chat, '🕒', m.key)
        const aii = await Func.fetchBuffer(`https://api.itsrose.site/image/stable/diffusion?prompt=${text}&negative_prompt=3d%2C%20bad%20anatomy.&ratio=9%3A16&apikey=e3f7c48414c36ab74bbc192f`)
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
