exports.run = {
    usage: ['dictionary'],
    use: 'query',
    category: 'information',
    async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
    }) => {
       try {
        if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'what is java script'), m)
        client.sendReact(m.chat, '🕒', m.key)
        let json = await Api.urban(text)
        if (!json.status) return client.reply(m.chat, global.status.fail, m)
        m.reply(`${json.data.content}\n\n${json.data.author}`)
        } catch (e) {
     return client.reply(m.chat, Func.texted('bold', `Can you tell me in deatil`), m)
  }
},
error: false,
limit: true,
premium: false,
}
