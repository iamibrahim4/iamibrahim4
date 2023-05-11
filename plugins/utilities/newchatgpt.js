exports.run = {
    usage: ['ai'],
    use: 'query',
    category: 'utilities',
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
        const { result } = await Api.openi(text)
        m.reply(`${result}`)
        } catch (e) {
     return client.reply(m.chat, Func.texted('bold', `Can you tell me in deatil`), m)
  }
},
error: false,
limit: true,
premium: false,
}
