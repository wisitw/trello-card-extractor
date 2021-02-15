const moment = require('moment');
const x = require('./input');

let month = {}

x.cards.forEach(card => {

  if(card.name.indexOf("[Bug]") === -1)
    return;
  var crat = moment(1000*parseInt(card.id.substring(0,8),16));
  if(month[crat.format("YYYY-MM")] === undefined) {
    month[crat.format("YYYY-MM")] = [];
  }
  var data = {
    name: card.name,
    url: card.shortUrl,
    completed: card.closed,
    created: crat.format("DD MM YYYY")
  }
  month[crat.format("YYYY-MM")].push(data)
})

// console.info(month)

for(var ke in month) {
  // console.log(ke," total = "+month[ke].length)
}