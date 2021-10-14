const YOUTUBE_URL = 'https://www.youtube.com/channel/UCcpyzHIletIDFfin6ZIv10A'

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: YOUTUBE_URL,
        permanent: false,
        basePath: false
      },
    ]
  }
}
