const path = require("path");
const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
