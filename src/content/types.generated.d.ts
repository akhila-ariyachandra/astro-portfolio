declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"client-side-rendering-vs-server-side-rendering.mdx": {
  id: "client-side-rendering-vs-server-side-rendering.mdx",
  slug: "client-side-rendering-vs-server-side-rendering",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"create-a-serverless-api-with-typescript-graphql-and-mongodb.mdx": {
  id: "create-a-serverless-api-with-typescript-graphql-and-mongodb.mdx",
  slug: "create-a-serverless-api-with-typescript-graphql-and-mongodb",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"data-structures-stack.mdx": {
  id: "data-structures-stack.mdx",
  slug: "data-structures-stack",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"environment-variables-in-next-js.mdx": {
  id: "environment-variables-in-next-js.mdx",
  slug: "environment-variables-in-next-js",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"getting-started-in-react-with-parcel-js.mdx": {
  id: "getting-started-in-react-with-parcel-js.mdx",
  slug: "getting-started-in-react-with-parcel-js",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"getting-started-in-react-with-webpack.mdx": {
  id: "getting-started-in-react-with-webpack.mdx",
  slug: "getting-started-in-react-with-webpack",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"getting-started-with-tailwind-css-in-next-js.mdx": {
  id: "getting-started-with-tailwind-css-in-next-js.mdx",
  slug: "getting-started-with-tailwind-css-in-next-js",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"making-delayed-network-requests-in-react-with-settimeout-and-useeffect.mdx": {
  id: "making-delayed-network-requests-in-react-with-settimeout-and-useeffect.mdx",
  slug: "making-delayed-network-requests-in-react-with-settimeout-and-useeffect",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"markdown-cheatsheet.mdx": {
  id: "markdown-cheatsheet.mdx",
  slug: "markdown-cheatsheet",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"mimic-react-life-cycle-methods-with-hooks.mdx": {
  id: "mimic-react-life-cycle-methods-with-hooks.mdx",
  slug: "mimic-react-life-cycle-methods-with-hooks",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"my-two-most-used-ES6-features.mdx": {
  id: "my-two-most-used-ES6-features.mdx",
  slug: "my-two-most-used-es6-features",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"note-app-part-1-setup-the-node-api.mdx": {
  id: "note-app-part-1-setup-the-node-api.mdx",
  slug: "note-app-part-1-setup-the-node-api",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"note-app-part-2-the-react-site.mdx": {
  id: "note-app-part-2-the-react-site.mdx",
  slug: "note-app-part-2-the-react-site",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"page-loading-progress-bar-in-nextjs.mdx": {
  id: "page-loading-progress-bar-in-nextjs.mdx",
  slug: "page-loading-progress-bar-in-nextjs",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"persistent-state-in-react.mdx": {
  id: "persistent-state-in-react.mdx",
  slug: "persistent-state-in-react",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"react-usereducer-with-usecontext.mdx": {
  id: "react-usereducer-with-usecontext.mdx",
  slug: "react-usereducer-with-usecontext",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"serverless-graphql-api-typescript-prisma-postgressql.mdx": {
  id: "serverless-graphql-api-typescript-prisma-postgressql.mdx",
  slug: "serverless-graphql-api-typescript-prisma-postgressql",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"setup-mongodb-in-nodejs-with-mongoose.mdx": {
  id: "setup-mongodb-in-nodejs-with-mongoose.mdx",
  slug: "setup-mongodb-in-nodejs-with-mongoose",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"setup-redux-in-a-react-app.mdx": {
  id: "setup-redux-in-a-react-app.mdx",
  slug: "setup-redux-in-a-react-app",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"understanding-this-in-react.mdx": {
  id: "understanding-this-in-react.mdx",
  slug: "understanding-this-in-react",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"use-hooks-in-react-redux.mdx": {
  id: "use-hooks-in-react-redux.mdx",
  slug: "use-hooks-in-react-redux",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"using-mongodb-in-a-serverless-app.mdx": {
  id: "using-mongodb-in-a-serverless-app.mdx",
  slug: "using-mongodb-in-a-serverless-app",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"using-planetscale-with-prisma-in-nextjs.mdx": {
  id: "using-planetscale-with-prisma-in-nextjs.mdx",
  slug: "using-planetscale-with-prisma-in-nextjs",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"using-react-context.mdx": {
  id: "using-react-context.mdx",
  slug: "using-react-context",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"utterances-comments-in-react-blog.mdx": {
  id: "utterances-comments-in-react-blog.mdx",
  slug: "utterances-comments-in-react-blog",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"snippets": {
"firebase-authentication-react-hook.mdx": {
  id: "firebase-authentication-react-hook.mdx",
  slug: "firebase-authentication-react-hook",
  body: string,
  collection: "snippets",
  data: InferEntrySchema<"snippets">
},
"prettier-config.mdx": {
  id: "prettier-config.mdx",
  slug: "prettier-config",
  body: string,
  collection: "snippets",
  data: InferEntrySchema<"snippets">
},
"prisma-development.mdx": {
  id: "prisma-development.mdx",
  slug: "prisma-development",
  body: string,
  collection: "snippets",
  data: InferEntrySchema<"snippets">
},
"serverless-pre-rendering.mdx": {
  id: "serverless-pre-rendering.mdx",
  slug: "serverless-pre-rendering",
  body: string,
  collection: "snippets",
  data: InferEntrySchema<"snippets">
},
},

	};

	type ContentConfig = typeof import("./config");
}
