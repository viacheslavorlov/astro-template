import { c as createComponent, e as defineStyleVars, r as renderTemplate, m as maybeRenderHead, a as addAttribute, s as spreadAttributes, d as renderSlot, b as createAstro, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, f as renderComponent, u as unescapeHTML, j as defineScriptVars, k as renderHead } from './astro/server_OXDAmbrG.mjs';
import clsx, { clsx as clsx$1 } from 'clsx';
/* empty css                         */
import 'kleur/colors';
import { Traverse } from 'neotraverse/modern';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_I0t10rgk.mjs';
import * as devalue from 'devalue';
/* empty css                              */

const $$Astro$5 = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Title;
  const {
    className,
    bold = true,
    align = "left",
    elementAlign = "left",
    full,
    h,
    ...props
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ align }]);
  return renderTemplate`${h == "xl" && renderTemplate`${maybeRenderHead()}<h2${addAttribute(clsx(
    "",
    bold && "font-bold",
    h === "xl" && "t-xl",
    elementAlign === "left" ? "mr-auto" : elementAlign === "right" ? "ml-auto" : "mx-auto",
    full && "w-full",
    className
  ), "class")}${spreadAttributes(props)} data-astro-cid-d63x3bvs${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h2>`}${h == "l" && renderTemplate`<h2${addAttribute(clsx(
    "text",
    h === "l" && "t-l",
    elementAlign === "left" ? "mr-auto" : elementAlign === "right" ? "ml-auto" : "mx-auto",
    full && "w-full",
    className
  ), "class")}${spreadAttributes(props)} data-astro-cid-d63x3bvs${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h2>`}${h == "m" && renderTemplate`<h3${addAttribute(clsx(
    "text",
    h === "m" && "t-m",
    elementAlign === "left" ? "mr-auto" : elementAlign === "right" ? "ml-auto" : "mx-auto",
    full && "w-full",
    className
  ), "class")}${spreadAttributes(props)} data-astro-cid-d63x3bvs${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h3>`}`;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Title.astro", void 0);

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { className, id, paddings = [6, 10, 14], ...props } = Astro2.props;
  const $$definedVars = defineStyleVars([{
    // tailwind-like paddings
    p0: paddings[0] * 4 + "px",
    p1: paddings[1] * 4 + "px",
    p2: paddings[2] * 4 + "px"
  }]);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(clsx$1("w-full custom-section", className), "class")}${spreadAttributes(props)} data-astro-cid-3os2hakv${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Section.astro", void 0);

const $$Astro$3 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const {
    className,
    paddings = [6, 10, 14],
    maxWidth = 1280,
    ...props
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{
    // tailwind-like paddings
    p0: paddings[0] * 4 + "px",
    p1: paddings[1] * 4 + "px",
    p2: paddings[2] * 4 + "px",
    maxW: maxWidth + "px"
  }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(clsx("mx-auto  w-full", "custom-container", className), "class")}${spreadAttributes(props)} data-astro-cid-4xtvbavl${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Container.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/baseInfo/baseInfo.md": () => import('./baseInfo_CTEsYuW2.mjs'),"/src/content/metrika/yandex.md": () => import('./yandex_CZZWrXl8.mjs'),"/src/content/seo/base.md": () => import('./base_DrBZcx67.mjs')});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"baseInfo":{"type":"content","entries":{"baseinfo":"/src/content/baseInfo/baseInfo.md"}},"seo":{"type":"content","entries":{"base":"/src/content/seo/base.md"}},"metrika":{"type":"content","entries":{"yandex":"/src/content/metrika/yandex.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/baseInfo/baseInfo.md": () => import('./baseInfo_CxrmMEjr.mjs'),"/src/content/metrika/yandex.md": () => import('./yandex_B45KPXUg.mjs'),"/src/content/seo/base.md": () => import('./base_CHzUSrEa.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$YandexMetrika = createComponent(async ($$result, $$props, $$slots) => {
  const { data } = await getEntry("metrika", "yandex");
  const { counter, clickmap, trackLinks, accurateTrackBounce, webvisor } = data;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Yandex.Metrika counter --><script type="text/javascript">(function(){', '\n  (function (m, e, t, r, i, k, a) {\n    m[i] =\n      m[i] ||\n      function () {\n        (m[i].a = m[i].a || []).push(arguments);\n      };\n    m[i].l = 1 * new Date();\n    for (var j = 0; j < document.scripts.length; j++) {\n      if (document.scripts[j].src === r) {\n        return;\n      }\n    }\n    (k = e.createElement(t)),\n      (a = e.getElementsByTagName(t)[0]),\n      (k.async = 1),\n      (k.src = r),\n      a.parentNode.insertBefore(k, a);\n  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n  ym(counter, "init", {\n    clickmap,\n    trackLinks,\n    accurateTrackBounce,\n    webvisor,\n  });\n})();<\/script> ', "<noscript><div><img", ' style="position:absolute; left:-9999px;" alt=""></div></noscript><!-- /Yandex.Metrika counter -->'])), defineScriptVars({
    counter,
    clickmap,
    trackLinks,
    accurateTrackBounce,
    webvisor
  }), maybeRenderHead(), addAttribute("https://mc.yandex.ru/watch/" + counter, "src"));
}, "/home/viacheslav/projects/astro-template/src/shared/metrika/YandexMetrika.astro", void 0);

const $$Astro$2 = createAstro();
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    favicon,
    description,
    keywords,
    author,
    ogType = "website",
    ogImage,
    ogUrl
  } = Astro2.props;
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(
    Astro2.url.pathname + Astro2.url.search,
    baseUrl
  );
  return renderTemplate`<head><!-- Required Meta Tags --><title>${title}</title><link rel="icon" type="image/png"${addAttribute(favicon, "href")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(defaultCanonicalUrl.href, "href")}><meta charset="UTF-8"><!-- Optional Meta Tags for SEO -->${keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`}${author && renderTemplate`<meta name="author"${addAttribute(author, "content")}>`}<!-- Open Graph Meta Tags --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type"${addAttribute(ogType, "content")}>${ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}${ogUrl && renderTemplate`<meta property="og:url"${addAttribute(ogUrl, "content")}>`}${renderHead()}</head>`;
}, "/home/viacheslav/projects/astro-template/src/shared/seo/Seo.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/viacheslav/projects/astro-template/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { data } = await getEntry("seo", "base");
  return renderTemplate(_a || (_a = __template(['<html lang="ru"> <head><meta name="viewport" content="width=device-width"><meta name="generator"', ">", "", "<script>\n      const getThemePreference = () => {\n        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n          return localStorage.getItem('theme');\n        }\n        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n      };\n      const isDark = getThemePreference() === 'dark';\n      document.documentElement.classList[isDark ? 'add' : 'remove']('dark');\n\n      if (typeof localStorage !== 'undefined') {\n        const observer = new MutationObserver(() => {\n          const isDark = document.documentElement.classList.contains('dark');\n          localStorage.setItem('theme', isDark ? 'dark' : 'light');\n        });\n        observer.observe(document.documentElement, {\n          attributes: true,\n          attributeFilter: ['class'],\n        });\n      }\n    <\/script>", "</head> <body> ", "  <!-- \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u043C\u0435\u0442\u0440\u0438\u043A\u0443 \u0442\u0443\u0442 --> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Seo", $$Seo, { "ogImage": data.favicon, ...data }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "YandexMetrika", $$YandexMetrika, {}));
}, "/home/viacheslav/projects/astro-template/src/layouts/Layout.astro", void 0);

export { $$Section as $, $$Title as a, $$Layout as b, $$Container as c };
