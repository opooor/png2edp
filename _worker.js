export default {
  async fetch(request) {
    const CANVA = "https://hymmaker.my.canvasite.cn/";
    const url = new URL(request.url);
    // /proxy 路由用来中转可画
    if(url.pathname === "/proxy"){
      const resp = await fetch(CANVA,{redirect:"follow"});
      const headers = new Headers(resp.headers);
      headers.delete("content-security-policy");
      headers.delete("x-frame-options");
      return new Response(await resp.text(),{headers});
    }
    // 首页返回html截图页面
    return new Response(await fetch(new Request(`${url.origin}/index.html`)).then(r=>r.text()),{
      headers:{"Content-Type":"text/html;charset=utf-8"}
    })
  }
}
