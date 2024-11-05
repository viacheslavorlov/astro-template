import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Du9yu6D8.mjs';
import 'es-module-lexer';
import { l as decodeKey } from './chunks/astro/server_OXDAmbrG.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/viacheslav/projects/astro-template/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"inline","content":".text[data-astro-cid-d63x3bvs]{text-align:var(--align)}.custom-section[data-astro-cid-3os2hakv]{max-width:var(--maxW);padding:var(--p0) 0}@media screen and (min-width: 768px){.custom-section[data-astro-cid-3os2hakv]{padding:var(--p1) 0}}@media screen and (min-width: 1024px){.custom-section[data-astro-cid-3os2hakv]{padding:var(--p2) 0}}.custom-container[data-astro-cid-4xtvbavl]{max-width:var(--maxW);padding:0 var(--p0)}@media screen and (min-width: 768px){.custom-container[data-astro-cid-4xtvbavl]{padding:0 var(--p1)}}@media screen and (min-width: 1024px){.custom-container[data-astro-cid-4xtvbavl]{padding:0 var(--p2)}}\n"},{"type":"external","src":"/_astro/components.DKsY1BQf.css"}],"routeData":{"route":"/components","isIndex":false,"type":"page","pattern":"^\\/components\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components.astro","pathname":"/components","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"inline","content":".text[data-astro-cid-d63x3bvs]{text-align:var(--align)}.custom-section[data-astro-cid-3os2hakv]{max-width:var(--maxW);padding:var(--p0) 0}@media screen and (min-width: 768px){.custom-section[data-astro-cid-3os2hakv]{padding:var(--p1) 0}}@media screen and (min-width: 1024px){.custom-section[data-astro-cid-3os2hakv]{padding:var(--p2) 0}}.custom-container[data-astro-cid-4xtvbavl]{max-width:var(--maxW);padding:0 var(--p0)}@media screen and (min-width: 768px){.custom-container[data-astro-cid-4xtvbavl]{padding:0 var(--p1)}}@media screen and (min-width: 1024px){.custom-container[data-astro-cid-4xtvbavl]{padding:0 var(--p2)}}\n"},{"type":"external","src":"/_astro/components.DKsY1BQf.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/astro-template/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/astro-template/src/pages/components.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/components@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/astro-template/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/viacheslav/projects/astro-template/src/shared/metrika/YandexMetrika.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/components@_@astro":"pages/components.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/viacheslav/projects/astro-template/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Cwf7aeXV.mjs","/home/viacheslav/projects/astro-template/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/viacheslav/projects/astro-template/src/content/baseInfo/baseInfo.md?astroContentCollectionEntry=true":"chunks/baseInfo_CTEsYuW2.mjs","/home/viacheslav/projects/astro-template/src/content/metrika/yandex.md?astroContentCollectionEntry=true":"chunks/yandex_CZZWrXl8.mjs","/home/viacheslav/projects/astro-template/src/content/seo/base.md?astroContentCollectionEntry=true":"chunks/base_DrBZcx67.mjs","/home/viacheslav/projects/astro-template/src/content/baseInfo/baseInfo.md?astroPropagatedAssets":"chunks/baseInfo_CxrmMEjr.mjs","/home/viacheslav/projects/astro-template/src/content/metrika/yandex.md?astroPropagatedAssets":"chunks/yandex_B45KPXUg.mjs","/home/viacheslav/projects/astro-template/src/content/seo/base.md?astroPropagatedAssets":"chunks/base_CHzUSrEa.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/viacheslav/projects/astro-template/src/content/baseInfo/baseInfo.md":"chunks/baseInfo_VczlwU_3.mjs","/home/viacheslav/projects/astro-template/src/content/metrika/yandex.md":"chunks/yandex_Ae4oBYuQ.mjs","/home/viacheslav/projects/astro-template/src/content/seo/base.md":"chunks/base_BnBoUSra.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/components.DKsY1BQf.css","/favicon.svg","/_astro/client.5I5BMcNS.js","/_astro/hoisted.2daoxv0f.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Iz2HszKTWP1Nn0cRIOhPiq8+iqC8YVHAQUfHgRd4Dsg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
