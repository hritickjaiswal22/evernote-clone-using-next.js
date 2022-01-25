module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/notes",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
