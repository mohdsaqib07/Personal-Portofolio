export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles-dark.json","assets/particles-light.json","favicon.png","icons/css.png","icons/html.png","icons/js.png","icons/react.png","images/newprofile1.png","images/newprofile2.png","images/new_image.png","images/new_image2.png","images/new_image3.png","images/profile2.jpg","images/profile3.jpg","images/profile4.jpg","images/profile5.jpg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.3163ec96.js","app":"_app/immutable/entry/app.bbe1ce46.js","imports":["_app/immutable/entry/start.3163ec96.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/singletons.6a4aff00.js","_app/immutable/chunks/index.4fcb441a.js","_app/immutable/entry/app.bbe1ce46.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.12c1f4a5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
