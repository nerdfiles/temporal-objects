
var baseClock = null
var vectorClock = null
var TempObj1 = require('../index')(baseClock)
var TempObj2 = require('../index')(baseClock)

var to1 = TempObj1.init()
var to2 = TempObj1.init()
var to3 = TempObj2.init()
var to4 = TempObj2.init()

to1.forged().then(function(res) {

  console.log(res)

  Promise.all([
    to2.forged(),
    to3.forged(),
    to4.forged()
  ]).then(function(res) {
    console.log(res)
  })
})
