import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, s as spreadAttributes, d as renderSlot, b as createAstro, e as defineStyleVars, f as renderComponent } from '../chunks/astro/server_OXDAmbrG.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import clsx$1, { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$Section, a as $$Title, b as $$Layout } from '../chunks/Layout_DuldtBjJ.mjs';
import '../chunks/components.dc6d30fe_l0sNRNKZ.mjs';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "regular",
    className,
    color = "light",
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(clsx$1(
    "flex items-center justify-center",
    "t-s",
    color === "light" ? "" : "",
    "disabled:bg-inactive disabled:opacity-80",
    variant === "round" ? "rounded-full aspect-square" : variant === "regular" ? "rounded-md" : "rounded-full",
    "",
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Button/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Input;
  const { className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(clsx("", className), "class")}${spreadAttributes(props)}>`;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Input.astro", void 0);

const $$Astro$2 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Text;
  const {
    className,
    align = "left",
    elementAlign,
    bold,
    full = true,
    size = "base",
    ...props
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ align }]);
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(clsx$1(
    "text",
    size === "small" ? "t-xs" : "t-s",
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center",
    elementAlign === "left" ? "mr-auto" : elementAlign === "right" ? "ml-auto" : "mx-auto",
    full && "w-full",
    bold && "font-bold",
    className
  ), "class")}${spreadAttributes(props)} data-astro-cid-ntqoidlh${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </p> `;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Text.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    paddings = [3, 4, 6],
    roundedRadius = 8,
    color,
    className
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{
    //border-radius
    roundedRadius,
    // tailwind-like paddings
    p0: paddings[0] * 4 + "px",
    p1: paddings[1] * 4 + "px",
    p2: paddings[2] * 4 + "px"
  }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(clsx(
    "",
    // TODO put default style hier
    color === "dark" ? "bg-bg-dark" : "bg-bg-light",
    className
  ), "class")} data-astro-cid-4pmusgvn${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Card.astro", void 0);

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { className, target = "_blank", ...props } = Astro2.props;
  return renderTemplate`<!-- <div class='flex'> -->${maybeRenderHead()}<a${addAttribute(target, "target")}${addAttribute(clsx$1(
    "",
    //TODO base style here
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a> <!-- </div> -->`;
}, "/home/viacheslav/projects/astro-template/src/shared/ui/Link.astro", void 0);

const $$Components = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "components", "title": "Components" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "className": "bg-chart-2" }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="container mx-auto"> ${renderComponent($$result3, "Title", $$Title, { "h": "xl" }, { "default": ($$result4) => renderTemplate`Карточка` })} <div class="flex flex-col gap-10"> ${renderComponent($$result3, "Card", Card, { "className": "" }, { "default": ($$result4) => renderTemplate` <h1>Карточка</h1> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus
                        magnam itaque maiores! Deleniti dolor ex nemo perspiciatis nostrum sed
                        voluptatibus, a saepe tempore perferendis, enim inventore accusantium
                        repudiandae necessitatibus. Autem sapiente facilis quod hic eius voluptatem
                        quis saepe eum ratione, labore ad corporis, nulla nobis illo inventore sint
                        quaerat quo tempore velit, maiores assumenda nesciunt earum! Porro tempore
                        hic nisi corrupti! Odit nam quam illum dignissimos voluptatum, quo,
                        provident ex totam, repellat culpa optio perspiciatis facere debitis odio in
                        beatae rerum consequuntur voluptate officiis quidem ducimus suscipit modi.
                        Perspiciatis excepturi asperiores soluta, blanditiis a quas repudiandae
                        vitae nesciunt voluptas.
</p> ` })} </div> ${renderComponent($$result3, "Title", $$Title, { "h": "xl" }, { "default": ($$result4) => renderTemplate`Кнопки` })} <div class="flex flex-col gap-10"> ${renderComponent($$result3, "Card", Card, { "className": "flex gap-4 bg-chart-1" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Button", Button, { "variant": "default" }, { "default": ($$result5) => renderTemplate`Кнопка` })} ${renderComponent($$result4, "Button", Button, { "variant": "destructive" }, { "default": ($$result5) => renderTemplate`Кнопка` })} ${renderComponent($$result4, "Button", Button, { "variant": "ghost" }, { "default": ($$result5) => renderTemplate`Кнопка` })} ${renderComponent($$result4, "Button", Button, { "variant": "link" }, { "default": ($$result5) => renderTemplate`Кнопка` })} ${renderComponent($$result4, "Button", Button, { "variant": "outline" }, { "default": ($$result5) => renderTemplate`Кнопка` })} ${renderComponent($$result4, "Button", Button, { "variant": "secondary" }, { "default": ($$result5) => renderTemplate`Кнопка` })} ` })} </div> ${renderComponent($$result3, "Title", $$Title, { "h": "xl" }, { "default": ($$result4) => renderTemplate`Инпут` })} <div class="flex flex-col gap-10"> <div class="flex gap-4"> ${renderComponent($$result3, "Input", Input, { "type": "text", "placeholder": "Placeholder" })} ${renderComponent($$result3, "Input", Input, { "type": "number", "placeholder": "123456" })} </div> </div> </div>  ` })} ` })}`;
}, "/home/viacheslav/projects/astro-template/src/pages/components.astro", void 0);

const $$file = "/home/viacheslav/projects/astro-template/src/pages/components.astro";
const $$url = "/components";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
