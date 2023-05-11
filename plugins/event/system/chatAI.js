exports.run = {
   async: async (m, {
      client,
      body,
      chats,
      setting
   }) => {
      try { 
         if (body && !global.evaluate_chars.some(v => body.startsWith(v))) {
            let json = await Api.chatbot(body)
            if (!m.fromMe && setting.chatbot )
               m.reply(`${json.data.data}`)
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
