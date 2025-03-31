

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ccf4a1d2.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.12c1f4a5.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.4fcb441a.js"];
export const stylesheets = ["_app/immutable/assets/0.712f9942.css"];
export const fonts = [];
