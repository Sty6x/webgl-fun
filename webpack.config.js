const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const html = require("html-loader");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		// will clean on every build
		clean: true,
	},
	devtool: "inline-source-map",
	// using webpack-dev-server will serve the specified folder, this server will watch the files for changes within
	// its dependency graph for changes, and recompile the code.
	devServer: {
		static: "./dist",
		hot: true,
		liveReload: false,
	},
	module: {
		rules: [
			//`test:` will check if the dependency matches this resource and will then,
			//`use:` the appropriate loaders
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
				options: {
					sources: true,
				},
			},
		],
	},
	plugins: [
		// without this when building the app, it will only refer the current entry point/points
		// so if any of the entry points' names are renamed, we then have to change each script name within our index.html
		// or if we add more entry points to our webpack config then we need to add another script tage to our index.html again
		// HtmlWebpackPlugin is used to generate an index.html file on our output dist/ folder
		// with our generated bundles defined within our webpack config
		new HtmlWebpackPlugin({
			title: "Basic Webpack Template",
			// template: "./src/index.html",
		}),
	],
};
