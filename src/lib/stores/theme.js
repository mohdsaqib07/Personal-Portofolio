import { writable } from "svelte/store";

let initialTheme;

if (typeof localStorage !== "undefined") {
  initialTheme = localStorage.getItem("theme");
}

if (!initialTheme && typeof window !== "undefined") {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  initialTheme = prefersDark ? "dark" : "light";
}

export const theme = writable(initialTheme || "light");

theme.subscribe((value) => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(value);
    localStorage.setItem("theme", value);
  }
});
