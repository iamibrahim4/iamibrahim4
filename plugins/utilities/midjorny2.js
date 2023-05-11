exports.run = {
  usage: ['midjournyv4'],
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
        let json = await Func.fetchJson(`https://api.itsrose.site/image/diffusion/txt2img?prompt=${text}&negative_prompt=bad%20anatomy%2C%20lowres%2C%20extra%20hands%2C%20extra%20legs%2C%20extra%20finger&ratio=9%3A16&steps=40&model_id=midjourney_v4_art&sampler=Euler%20a&cfg=7.5&apikey=e3f7c48414c36ab74bbc192f`)
       let aaaa = `${text}`
       client.sendFile(m.chat, json.result.images, '', json.result.generation_time, m)
     } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
  },
  error: false,
  limit: true,
  restrict: true,
};