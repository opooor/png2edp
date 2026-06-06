export default {
  async fetch(request, env, ctx) {
    const url = "https://hymmaker.my.canvasite.cn/";
    // CF内置headless浏览器，服务端原生截图，无视跨域
    const { browser } = await env.BROWSER.fetch(`https://browser.workers.dev`, {
      method: "POST",
      body: JSON.stringify({
        url: url,
        viewport: {width:1024,height:758},
        wait:4000 // 等待天气、农历动态加载
      })
    });
    const imgBin = await browser.screenshot();
    return new Response(imgBin,{
      headers:{
        "Content-Type":"image/png",
        "Cache-Control":"max-age=3600" // 缓存1小时，减少重复渲染
      }
    })
  }
}
