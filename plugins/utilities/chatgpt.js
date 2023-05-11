exports.run = {
    usage: ['chatgpt'],
    use: 'query',
    category: 'ai',
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
        const { message } = await Api.chatgpt(text)
        m.reply(`${message}`)
        } catch (e) {
      return client.reply(m.chat, global.status.error, m)
  }
},
error: false,
limit: true,
premium: false,
}
