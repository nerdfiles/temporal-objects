/**
 * @usage
 * var temporalObject = require('TemporalObject')(vectorClock)
 *
 * function finishingSchool() {
 *
 *   var tempObj1 = temporalObject.init()
 *   var tempObj2 = temporalObject.init()
 *
 *   tempObj1.forged()
 *     .finishes(tempObj2)
 *     .then((outcome) => {
 *       console.log(outcome)
 *     })
 * }
 */
const moment = require('moment')
const cuid = require('cuid')
const _ = require('lodash')

/**
 * INTERFACE
 */

const TemporalObject = {
  init: init
}

/**
 * DETAILS
 */

/**
 * @name init
 */
function init() {

  var vm = this

  if ( ! vm.time ) {
    // A "static time" versus a clock which might in principle have an
    // adjustable, dynamically changing time. Timezones are "static"
    // temporally, even if variegated geographically, though they can be
    // adjusted in the same sense that a logical clock might be re-
    // parameterized. Essentially the "start time" is the starting, or
    // "forging" of a temporal object, which might live until it's
    // "finished."
    console.log('No clock installed! Defaulting to a "static" time based on moment.js.')
  }

  const initializedTemporalObject = Object.create(vm)

  // Ident tempora object
  initializedTemporalObject['$id'] = cuid()

  // Tag as forged
  // @TODO Think about that without vm.time the object really should not be
  // forged, or if the vm.time clock itself is "invalid" for reasons like that
  // the configuration of the clock is erroneous (a clock with an absurd time
  // should not forge objects, etc.)
  initializedTemporalObject['#forged'] = true

  if ( vm.time && _.isFunction(vm.time.$clock) ) {
    initializedTemporalObject['clock'] = vm.time.$clock()
  }

  _.extend(initializedTemporalObject, {
    equals                      : equals,
    starts                      : starts,
    startedBy                   : startedBy,
    finishes                    : finishes,
    finishedBy                  : finishedBy,
    meets                       : meets,
    metBy                       : metBy,
    overlaps                    : overlaps,
    overlappedBy                : overlappedBy,
    overlapsStart               : overlapsStart,
    overlapsEnd                 : overlapsEnd,
    during                      : during,
    contains                    : contains,
    before                      : before,
    after                       : after,
    isHeadToHeadWith            : isHeadToHeadWith,
    isTailToTailWith            : isTailToTailWith,
    survivingContemporaryOf     : survivingContemporaryOf,
    survivedByContemporaryOf    : survivedByContemporaryOf,
    youngerContemporaryOf       : youngerContemporaryOf,
    older                       : older,
    isOlderThan                 : isOlderThan,
    younger                     : younger,
    isYoungerThan               : isYoungerThan,
    isSurvivedBy                : isSurvivedBy,
    survives                    : survives,
    contemporaryOf              : contemporaryOf,
    isForgedBeforeTerminationOf : isForgedBeforeTerminationOf,
    terminatedAfterForgeOf      : terminatedAfterForgeOf,
    nothing                     : nothing,
    within                      : within,
    containsDate                : containsDate,
    containsDateStrict          : containsDateStrict,
    disjunct                    : disjunct,
    lte                         : lte,
    split                       : split,
    forged                      : forged
  })

  return initializedTemporalObject

}

function forged() {
  var to = this
  return new Promise((res, rej) => {
    if ( ! to['#forged'] ) {
      console.log(to.$id + ' is not forged!')
      rej({ '$ref': to, '$value': false })
    }
    else {
      console.log(to.$id + ' is forged!')
      res({ '$ref': to, '$value': true })
    }
  })
}

/**
 * @name terminatedAfterForgeOf
 */
function terminatedAfterForgeOf() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name isForgedBeforeTerminationOf
 */
function isForgedBeforeTerminationOf() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name contemporaryOf
 */
function contemporaryOf() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name survives
 */
function survives() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name isSurvivedBy
 */
function isSurvivedBy() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name isOlderThan
 */
function isOlderThan() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name isYoungerThan
 */
function isYoungerThan() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name younger
 */
function younger() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name older
 */
function older() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name youngerContemporaryOf
 */
function youngerContemporaryOf() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name survivedByContemporaryOf
 */
function survivedByContemporaryOf() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name survivingContemporaryOf
 */
function survivingContemporaryOf() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name isTailToTailWith
 */
function isTailToTailWith() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name isHeadToHeadWith
 */
function isHeadToHeadWith() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name after
 */
function after() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name before
 */
function before() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name contains
 */
function contains() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name during
 */
function during() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name overlappedBy
 */
function overlappedBy() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name overlaps
 */
function overlaps() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name equals
 */
function equals() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name starts
 */
function starts() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name startedBy
 */
function startedBy() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name finishes
 * @param {Object} tempObj A temporal object which may or may not have been
 * forged (so check with the method-promise!). So, an object merely with a
 * clock base that has not been initialized can be "finished" pre-emptively
 * such that when it is initialized, it is forged as "finished" necessarily.
 * @TODO
 */
function finishes(tempObj) {
  var to = this
  return new Promise((res, rej) => {
    // @TODO We first need to compare timestamps of the given clocks. We're
    // essentially abstracting the concept of "clock" to enable clocks that
    // can initialize with a vector clock but then still finish a non-logical
    // clock like one based in a timezone; and vice versa: a non-logical clock
    // can "finish" a logical clock (vector clock, etc.). Let's call this
    // "progressive clocking".
    if (tempObj['#forged'] === true) {
      tempObj['#finished'] = true
      res({ '$ref': to, '$outcome': true })
    } else if (tempObj['#forged'] === undefined) {
      tempObj['#finished'] = false
      rej({ '$ref': to, '$outcome': false })
    } else {
      // #forged is false; so we do not set the object and respond that we
      // have not changed the temporal object while allowing the rest of the
      // Promise to continue.
      res({ '$ref': to, '$outcome': false })
    }
  })
}

/**
 * @name finishedBy
 */
function finishedBy() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name meets
 */
function meets() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name metBy
 */
function metBy() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name nothing
 */
function nothing() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name overlapsStart
 */
function overlapsStart() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name overlapsEnd
 */
function overlapsEnd() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name split
 */
function split() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name lte
 */
function lte() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name disjunct
 */
function disjunct() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name containsDate
 */
function containsDate() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name containsDateStrict
 */
function containsDateStrict() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * @name within
 */
function within() {
  var to = this
  return new Promise((res, rej) => {
    res({ '$ref': to, '$value': null })
  })
}

/**
 * EXPORTS
 */

module.exports = function(clock) {
  if ( ! clock ) {
    TemporalObject.time = { '$clock': moment }
  } else {
    TemporalObject.time = { '$clock': clock }
  }
  const TO = Object.create(TemporalObject)
  return TO
}


