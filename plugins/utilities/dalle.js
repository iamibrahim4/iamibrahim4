exports.run = {
  usage: ['dalle'],
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
        const aii = await Func.fetchBuffer(`https://api.itsrose.site/image/diffusion?prompt=${text}&negative_prompt=(worst%20quality%2C%20low%20quality%2C%20extra%20hand)%2C%20monochrome&ratio=9%3A16&seed=-1&style=Realistic&sampler=Euler%20a&cfg=7.0&steps=40&controlNet=openpose&apikey=e3f7c48414c36ab74bbc192f`)
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