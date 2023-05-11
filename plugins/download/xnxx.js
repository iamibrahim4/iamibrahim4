exports.run = {
 usage: ["xnxx"],
 hidden: ["getxnxx"],
 use: "query",
 category: "downloader",
 async: async (m, { client, text, args, isPrefix, command }) => {
  if (!args[0]) {
   return client.reply(
    m.chat,
    Func.example(isPrefix, command, "query/url"),
    m
   );
  }
  client.sendReact(m.chat, "🕒", m.key);
  if (args[0].startsWith("http")) {
   const { status, result } = await Func.fetchJson(
   `https://api.ibeng.tech/api/search/xnxxdl?url=${args[0]}&apikey=tamvan`
   );
   if (!status) {
    return client.reply(m.chat, global.status.fail, m);
   }
   let teks = "";
   Object.keys(result).forEach((key) => {
    if (!result["thumb"] || !result["url"]) {
     teks +=   ◦  ${key} : ${result[key]}\n;
    }
   });
   teks += "\n" + global.footer;
   return await client
    .sendFile(m.chat, result["thumb"], "", teks, m)
    .then(() => {
     // then?
     client.sendFile(m.chat, result["url"], "", result["title"], m);
    });
  }
  const { status, result } = await Api.adus(text);
  if (!status) {
   return client.reply(m.chat, global.status.fail, m);
  }
  const teks =
   `Result from XNXX ${teks}\n\n +
   result
    .map(
     (v, i) => ❤️Title : ${v.title}
🙈Views : ${v.views}
👑Quality : ${v.quality}
⌛️Duration : ${v.duration}
⚡️Link : ${v.link}
──────────────`
    )
    .join("\n");
  await client.sendFile(m.chat, result[0]["thumb"], "", teks, m);
 },
 error: false,
 limit: true,
 premium: true,
};
