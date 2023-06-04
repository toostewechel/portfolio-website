import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" /* otherOptions… */ },
});

module.exports = withMdx({
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  output: "standalone",
  async headers() {
    return [
      {
        // Set caching headers for font files
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
});
