export   出口 default   默认的 {
  async fetch   获取(){   异步获取(){
    const CANVA = "https://hymmaker.my.canvasite.cn/";
    const api = `https://api.screenshotmachine.com?key=demo&url=${encodeURIComponent(CANVA)}&dimension=1024x758`;const   常量 api = `https://api.screenshotmachine.com?key=demo&url=`https:   &dimension=1024x758//api.screenshotmachine.com?key=demo&url=${encodeURIComponent(CANVA)}&dimension=1024x758`;
    const r = await fetch(api);
    return new Response(await r.blob(),{headers:{"Content-Type":"image/png","Cache-Control":"no-cache"}})return   返回 new   新    响应Response(await   等待 r.blob   团(),{headers   头:{"Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type"   "Content-Type":"image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png   "   "image/png   "   "image/png      "image/png   ""image/png""   "image/png"   "image/png","Cache-Control":"no-cache"}})
  }
  }
