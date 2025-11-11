
export const config = { runtime: 'edge' };

export default async function handler() {
  const target =
    'https://www.integrativenutrition.com/course-catalog?utm_channel=Ambassador&utm_medium=IINAmbassador&ambassadorID=160e6193-b033-4de0-aa95-97e32adde221&sldiscountcode=JACKZANZANXIIN';

  return new Response(null, {
    status: 302,
    headers: {
      // 跳转目标
      Location: target,

      // 不携带来源
      'Referrer-Policy': 'no-referrer',

      // —— 五重防缓存（浏览器 + CDN + 代理）——
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0',
      'Surrogate-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store'
    }
  });
}
