'use strict';
const wtf = require('./src/index');
const fromFile = require('./tests/lib/_cachedPage');
// const wtf = require('./builds/wtf_wikipedia');
// const wtf = require('./build');

// todo:
// description(), extract(), summary()

//doc.infoboxes('Venue')

let doc = fromFile('royal_cinema');
console.log(doc.sentences(0).json({
  links: false,
  formatting: false
}));

// wtf.fetch('Royal Cinema').then((doc) => {
//   console.log(doc.json({
//     categories: false
//   }));
// }).catch(console.log);
