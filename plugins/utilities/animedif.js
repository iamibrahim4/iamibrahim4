exports.run = {
  usage: ['animedif'],
  use: 'query',
  category: 'ai',
  async: async (m, {
    client,
    text,
    isPrefix,
    command
  }) => {
    try {
     if (!text) return client.reply(m.chat, Func.example(isPrefix, command, `girl with red eyes`), m)
         client.sendReact(m.chat, '🕒', m.key)
       let json = await Func.fetchJson(`https://api.itsrose.site/image/diffusion?prompt=${text}&negative_prompt=(worst%20quality%2C%20low%20quality%2C%20extra%20hand)%2C%20monochrome&seed=-1&ratio=9%3A16&style=ACG&sampler=Euler%20a&cfg=4.0&steps=50&controlNet=openpose&image_num=1&apikey=e3f7c48414c36ab74bbc192f`)
       let caption = `${text}`
       client.sendFile(m.chat, json.result.images, 'image.jpg', caption, m)
     } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
  },
  error: false,
  limit: true,
  restrict: true,
};
