module.exports = {
  images: {
    domains: ["api-viktoriaweizel.apps.saizferri.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
};
