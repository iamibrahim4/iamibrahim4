exports.run = {
    usage: ['ttstalk'],
    use: 'username',
    category: 'utilities',
    async: async (m, {
       client,
       args,
       isPrefix,
       command
    }) => {
       try {
          if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'hosico_cat'), m)
          client.sendReact(m.chat, '🕒', m.key)
          let json = await Func.fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=BrunoSobrino`)
          if (!json.status) return client.reply(m.chat, Func.texted('bold', `🚩 Account not found.`), m)
          let caption = `乂  *T I K T O K  S T A L K*\n\n`
          caption += `	◦  *Name* : ${json.result.nickname}\n`
          caption += `	◦  *Username* : ${json.result.username}\n`
          caption += `	◦  *videos* : ${json.result.video}\n`
          caption += `	◦  *Followers* : ${json.result.followers}\n`
          caption += `	◦  *Following* : ${json.result.followings}\n`
          caption += `	◦  *Bio* : ${json.result.bio}\n`
          caption += `	◦  *likes* : ${json.result.likes}\n\n`
          caption += global.footer
          client.sendFile(m.chat, json.result.user_picture, '', caption, m)
       } catch {
          return client.reply(m.chat, global.status.error, m)
       }
    },
    error: false,
    cache: true,
    location: __filename
 }
