module.exports = {
  apiEndpoint: process.env.MIDDLEWARE_EOS_API_ENDPOINT,
  chainId: process.env.MIDDLEWARE_EOS_API_CHAIN_ID,
  writer: {
    accountName: process.env.MIDDLEWARE_EOS_WRITER_ACCOUNT_NAME,
    pubKey: process.env.MIDDLEWARE_EOS_WRITER_PUB_KEY,
    privateKey: process.env.MIDDLEWARE_EOS_WRITER_PRI_KEY
  }
}
