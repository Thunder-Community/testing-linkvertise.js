const fetch = require('node-fetch')

module.exports = ({ key, url, whitelist }) =>
  fetch(`https://linkvertise.net/cdn/linkvertise.js/(${encodeURIComponent(url)}, {whitelist: [`${encodeURIComponent(whitelist)}`], blacklist: []})
  .then(res =>
    res.text()
  )
