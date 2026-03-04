module.exports=[37936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"registerServerReference",{enumerable:!0,get:function(){return d.registerServerReference}});let d=a.r(11857)},13095,(a,b,c)=>{"use strict";function d(a){for(let b=0;b<a.length;b++){let c=a[b];if("function"!=typeof c)throw Object.defineProperty(Error(`A "use server" file can only export async functions, found ${typeof c}.
Read more: https://nextjs.org/docs/messages/invalid-use-server-value`),"__NEXT_ERROR_CODE",{value:"E352",enumerable:!1,configurable:!0})}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ensureServerEntryExports",{enumerable:!0,get:function(){return d}})},6456,a=>{"use strict";var b=a.i(37936);async function c(a){let b=process.env.TELEGRAM_BOT_TOKEN,c=process.env.TELEGRAM_CHAT_ID;if(!b||!c)return console.error("Missing Telegram bot environment variables."),{success:!1,error:"Server configuration error."};let{inquiryType:d,website:e,name:f,message:g,locale:h}=a,i=`
📩 <b>New Contact Form Submission</b>
    
<b>Type:</b> ${d}
<b>Name:</b> ${f}
<b>Website:</b> ${e||"N/A"}
<b>Locale:</b> ${h}

<b>Message:</b>
${g}
    `;try{let a=await fetch(`https://api.telegram.org/bot${b}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:c,text:i,parse_mode:"HTML"})}),d=await a.json();if(!a.ok||!d.ok)return console.error("Telegram API Error:",d),{success:!1,error:d.description||"Failed to send message."};return{success:!0}}catch(a){return console.error("Error sending Telegram message:",a),{success:!1,error:"Failed to send message."}}}(0,a.i(13095).ensureServerEntryExports)([c]),(0,b.registerServerReference)(c,"40530cc2e80ecf78c2c8ac39132a5a1895915f7d60",null),a.s([],25749),a.i(25749),a.s(["40530cc2e80ecf78c2c8ac39132a5a1895915f7d60",()=>c],6456)}];

//# sourceMappingURL=_3324ae04._.js.map