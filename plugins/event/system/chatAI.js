exports.run = {
   async: async (m, {
      client,
      body,
      chats,
      setting
   }) => {
      try { 
         if (body && !global.evaluate_chars.some(v => body.startsWith(v))) {
            const { result } = await Func.fetchJson(`https://sh.xznsenpai.xyz/api/openai?text=${body}`)
            if (!m.fromMe && setting.chatbot )
               m.reply(`${result}`)
         }
      } catch (e) {
         console.log(e)
      }
   },
   error: false,
   private: true,
   cache: true,
   location: __filename
}
