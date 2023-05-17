exports.run = {
    usage: ['pornhub'],
   use: 'query',
    category: 'nsfw',
    async: async (m, {
       client,
       text,
       args,
       isPrefix,
       command
    }) => {
       try {
      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'step mom'), m)
            client.sendReact(m.chat, '🕒', m.key)
            let json = await Api.pppp(text)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
	  let textt = "*PORNHUB Search*\n\n Result From search  " + text + "\n\nTo download type " + isPrefix + " getxnxx your link\n\n───────────────────\n";
            const items = json.result.slice(0, 15);
		 for (const item of items) {
  const { title, duration, url, viewers, rating, published } = item;
		 textt += `❤️Title : ${title}\n🙈Views : ${
          viewers
        }\n👑Published : ${published}\n⌛️Duration : ${
          duration
        }\n👑Published : ${published}\n⌛️Rating : ${
          rating
        }\n⚡️Link : ${
          url
        }\n\n──────────────\n\n`;
	   }
     let thumb = await Func.fetchBuffer(`https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Logo.png`)  
     client.sendFile(m.chat, thumb, '', textt, m)
	  }
        catch (e) {
          console.log(e)
          return client.reply(m.chat, global.status.error, m)
       }
    },
    error: false,
    limit: true,
    restrict: true,
    premimum: true,
 }
