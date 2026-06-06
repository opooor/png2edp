export default {
  async fetch(){
    const CANVA = "https://hymmaker.my.canvasite.cn/";
    const api = `https://api.screenshotmachine.com?key=demo&url=${encodeURIComponent(CANVA)}&dimension=1024x758`;
    const r = await fetch(api);
    return new Response(await r.blob(),{headers:{"Content-Type":"image/png","Cache-Control":"no-cache"}})
  }
}
