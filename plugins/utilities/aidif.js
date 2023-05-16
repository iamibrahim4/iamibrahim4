exports.run = {
  usage: ['aidif'],
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
        let json = await Func.fetchJson(`https://api.itsrose.site/image/diffusion/txt2img?prompt=${text}&negative_prompt=%20bad%20anatomy%2C%20lowres%2C%20extra%20hands%2C%20extra%20legs%2C%20extra%20finger&width=512&height=512&steps=40&model_id=dream_shaper&sampler=UniPC&cfg=7.5&enhance_prompt=yes&multi_lingual=no&image_num=1&safety_checker=no&panorama=no&hiresFix=no&apikey=e3f7c48414c36ab74bbc192f`)
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
