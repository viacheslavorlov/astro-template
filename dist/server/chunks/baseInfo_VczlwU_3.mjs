import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_OXDAmbrG.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"phone":"+7000000000","address":"Адрес организации","vk":"vk.com","whatsapp":"web.whatsap/","telegram":"t.me/адрес","ogrn":"00000000000000","inn":"00000000000000","fio":"ФИО (ИП)","yurAddress":"Юридический адрес организации","bank":"название банка","bik":"0000000000000000","bill1":"корсчет","bill2":"расч/счет"};
				const file = "/home/viacheslav/projects/astro-template/src/content/baseInfo/baseInfo.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
