export default {
	env: {
		development: {
			plugins: ["@babel/plugin-syntax-jsx", ["@locator/babel-jsx/dist", { env: "development" }]],
		},
	},
};
