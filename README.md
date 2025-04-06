# Astro general purpose template

## Структура проекта

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── shared/
│   │   ├── ui/
│   │   ├── seo/
│   │   └── lib/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## Установленные библиотеки и интеграции

- [@astrojs/mdx:](https://www.npmjs.com/package/@astrojs/mdx) Этот пакет является интеграцией Astro, позволяющей использовать компоненты MDX и создавать страницы в формате .mdx.
- [@astrojs/node:](https://www.npmjs.com/package/@astrojs/node) Этот пакет позволяет развертывать сайты на сервере Node.js.
- [@astrojs/preact:](https://www.npmjs.com/package/@astrojs/preact) Интеграция для Astro, обеспечивающая серверный рендеринг и гидратацию на стороне клиента для компонентов Preact.
- [@astrojs/sitemap:](https://www.npmjs.com/package/@astrojs/sitemap) Пакет предназначен для генерации карты сайта на основе страниц вашего проекта при его сборке в Astro.
- [astro:](https://www.npmjs.com/package/astro) Astro представляет собой всеобъемлющий веб-фреймворк, ориентированный на скорость. Является мощным инструментом для создания веб-проектов, подтягивающим контент из различных источников.
- [astro-compress:](https://www.npmjs.com/package/astro-compress) Этот утилитный пакет автоматически сжимает все ваши CSS, HTML, SVG, JavaScript и изображения в папке outDir проекта Astro.
- [clsx:](https://www.npmjs.com/package/clsx) Маленький (239B) хелпер для условного конструирования строк className. Может использоваться как более быстрая и меньшая замена для пакета classnames.
- [nodemailer:](https://www.npmjs.com/package/nodemailer) Простая в использовании библиотека Node.js для отправки электронной почты.
- [preact:](https://www.npmjs.com/package/preact) Библиотека для создания пользовательских интерфейсов, собирающая деревья компонентов и элементов. Является легковесной альтернативой React.
- [tailwindcss:](https://www.npmjs.com/package/tailwindcss) Утилитарный первый CSS-фреймворк для быстрой разработки пользовательских интерфейсов.
- [@tailwindcss/typography:](https://www.npmjs.com/package/@tailwindcss/typography) Плагин Tailwind CSS для автоматического стилизации чистого HTML содержимого с помощью красивых типографических стандартов.
- [typescript:](https://www.npmjs.com/package/typescript) Язык программирования, расширяющий возможности JavaScript, добавляющий поддержку статической типизации кода для разработки в больших масштабах.

## Команды

| Command                   | Action                                                          |
| :------------------------ | :-------------------------------------------------------------- |
| `npm install`             | Установка зависимости.                                          |
| `npm run dev`             | Запускает локальный сервер в режиме разработки `localhost:4321` |
| `npm run build`           | Сборка проекта. `./dist/`                                       |
| `npm run start`           | Запускает cобранный проект, в режиме SSR                        |
| `npm run prettier`        | Запускает Prettier                                              |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                |
| `npm run astro -- --help` | Get help using the Astro CLI                                    |

## Документация Astro

[Официальный сайт.](https://docs.astro.build) [Дискортс сервер](https://astro.build/chat).

## Компоненты интерфейса

[Button](src/shared/ui/Button.astro)
[Card](src/shared/ui/Card.astro)
[Container](src/shared/ui/Container.astro)
[Input](src/shared/ui/Input.astro) [Link](src/shared/ui/Link.astro)
[Section](src/shared/ui/Section.astro)
[Text](src/shared/ui/Text.astro)
[Title](src/shared/ui/Title.astro)
