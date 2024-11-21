import { c as createComponent, r as renderTemplate, f as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_OXDAmbrG.mjs';
import 'kleur/colors';
import { $ as $$Section, c as $$Container, a as $$Title, b as $$Layout } from '../chunks/Layout_DuldtBjJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- контент страницы --> ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "className": "flex gap-2" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Title", $$Title, { "h": "xl" }, { "default": ($$result5) => renderTemplate` Чистый шаблон ` })} ` })} ` })} </main> ` })}`;
}, "/home/viacheslav/projects/astro-template/src/pages/index.astro", void 0);

const $$file = "/home/viacheslav/projects/astro-template/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
