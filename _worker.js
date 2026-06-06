export default {
  async fetch(request) {
    const CANVA_URL = "https://hymmaker.my.canvasite.cn/";
    const { pathname } = new URL(request.url);

    // 代理路由：只/proxy转发目标网站
    if(pathname === "/proxy"){
      const res = await fetch(CANVA_URL, {redirect:"follow"});
      const headers = new Headers(res.headers);
      headers.delete("x-frame-options");
      headers.delete("content-security-policy");
      return new Response(res.body, {headers});
    }
    // 其余所有路径：直接读取静态index.html，不再fetch自身
    return await fetch(request);
  }
}
