

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a777e4a1.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.12c1f4a5.js","_app/immutable/chunks/singletons.6a4aff00.js","_app/immutable/chunks/index.4fcb441a.js"];
export const stylesheets = [];
export const fonts = [];
