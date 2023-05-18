exports.run = {
    usage: ['buffer'],
   use: 'query',
    category: 'downloader',
    async: async (m, {
       client,
       text,
       args,
       isPrefix,
       command
    }) => {
       try {
        let thumb = await Func.fetchBuffer(`https://api.itsrose.site/out/85196f74696ba0290e3f5f2557fd0d7b109d5ccee559c210d3c660cbe7a0c54afe1d186b58041e5b1e65a38ad769618796d0fef9dce70bc08712357ac5ede33637fc7925a4ccc01144ea24305c3625efc4da20bc9f28fe30a7079f246ee84b88c4e8b1ed61791a5c3ebcf4`)
             client.sendFile(m.chat, thumb, '', '', m)
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
