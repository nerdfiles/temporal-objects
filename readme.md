#Temporal Objects

Temporal Objects with configurable clock bases.

##Test

    $ npm run test/smoke

##Usage

    var baseClock = null
    var vectorClock = null
    var TempObj1 = require('temporal-objects')(baseClock)
    var TempObj2 = require('temporal-objects')(baseClock)

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
