let url = require('url');

let parcedURL = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`
);
console.log(parcedURL.query);
console.log(parcedURL.pathname);
console.log(parcedURL.protocol);

let parcedUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);
console.log(parcedUrl.query);
console.log(parcedUrl.pathname);
console.log(parcedUrl.protocol);
