import nextMDX from "@next/mdx";

// next.config.js
module.exports = {
  output: "standalone",
};

const withMDX = nextMDX({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" /* otherOptions… */ },
});

export default withMDX({
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
});
