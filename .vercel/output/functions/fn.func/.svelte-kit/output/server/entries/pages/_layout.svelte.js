import { c as create_ssr_component, a as add_attribute, v as validate_component, e as each, b as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const app = "";
let initialTheme;
if (typeof localStorage !== "undefined") {
  initialTheme = localStorage.getItem("theme");
}
if (!initialTheme && typeof window !== "undefined") {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  initialTheme = prefersDark ? "dark" : "light";
}
const theme = writable(initialTheme || "light");
theme.subscribe((value) => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(value);
    localStorage.setItem("theme", value);
  }
});
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current;
  theme.subscribe((value) => current = value);
  return `  <button class="p-2 transition-transform rounded-full hover:scale-110 animate-bounce" aria-label="Toggle theme"><i${add_attribute("class", `fas ${current === "dark" ? "fa-sun" : "fa-moon"}`, 0)}></i></button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [
    { "name": "Projects", "link": "#projects" },
    { "name": "About me", "link": "#about" }
  ];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-solid " + (y > 0 ? "py-4 bg-white dark:bg-slate-950 border-violet-950" : "py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-gby3jw"><b class="font-bold poppins">Mohd</b> Saqib</h1> <div class="items-center hidden gap-4 pr-4 ml-auto sm:flex">${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})} ${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-900 dark:hover:text-violet-400"><p>${escape(tab.name)}</p> </a>`;
  })}</div> <a href="https://www.linkedin.com/in/mohd-saqib-142a68250/" target="_blank" class="relative px-5 py-2 overflow-hidden bg-white rounded-full bluShadow group text-slate-950" data-svelte-h="svelte-1qwqcrs"><div class="absolute top-0 z-0 w-full h-full duration-200 right-full bg-violet-400 opacity-20 group-hover:translate-x-full"></div> <h4 class="relative z-[9]">Get in Touch</h4></a></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex flex-col items-center justify-center gap-4 py-20 bg-gray-200 border-t border-solid sm:py-32 dark:bg-black border-violet-950 sm:gap-8" data-svelte-h="svelte-b0wet5"><p class="px-4 py-2 font-bold text-white dark:font-medium dark:bg-white bg-violet-700 dark:text-slate-950">Connect with me ↓</p> <div class="flex flex-col items-center justify-center gap-2"><p><a href="mailto:mohdsaqib148183@gmail.com" class="pr-2 font-bold">Email</a> mohdsaqib148183@gmail.com</p> <p><b class="pr-2">Github</b> <a href="https://github.com/mohdsaqib07" target="_blank" class="cursor-pointer text-violet-600 dark:text-violet-400">mohdsaqib<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/mohd-saqib-142a68250/" target="_blank" class="cursor-pointer text-violet-600 dark:text-violet-400">mohdsaqib<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `<div class="container relative min-h-screen text-sm sm:text-base flex flex-col max-w-[1400px] mx-auto w-full"><div${add_attribute(
    "class",
    "fixed bottom-0 duration-200 w-full flex p-10 z-10 pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer" data-svelte-h="svelte-13lwajx"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
