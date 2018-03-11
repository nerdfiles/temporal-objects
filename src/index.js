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

  const initializedTemporalObject = Object.create(vm)

  initializedTemporalObject.$id = cuid()
  initializedTemporalObject['#forged'] = true

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
    terminatedAfterBirthOf      : terminatedAfterBirthOf,
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
 * @name terminatedAfterBirthOf
 */
function terminatedAfterBirthOf() {
  var to = this

}

/**
 * @name isForgedBeforeTerminationOf() {}
 */
function isForgedBeforeTerminationOf() {
  var to = this

}

/**
 * @name contemporaryOf() {}
 */
function contemporaryOf() {
  var to = this

}

/**
 * @name survives() {}
 */
function survives() {
  var to = this

}

/**
 * @name isSurvivedBy() {}
 */
function isSurvivedBy() {
  var to = this

}

/**
 * @name isOlderThan() {}
 */
function isOlderThan() {
  var to = this

}

/**
 * @name isYoungerThan() {}
 */
function isYoungerThan() {
  var to = this

}

/**
 * @name younger() {}
 */
function younger() {
  var to = this

}

/**
 * @name older() {}
 */
function older() {
  var to = this

}

/**
 * @name youngerContemporaryOf() {}
 */
function youngerContemporaryOf() {
  var to = this

}

/**
 * @name survivedByContemporaryOf() {}
 */
function survivedByContemporaryOf() {}

/**
 * @name survivingContemporaryOf() {}
 */
function survivingContemporaryOf() {}

/**
 * @name isTailToTailWith() {}
 */
function isTailToTailWith() {}

/**
 * @name isHeadToHeadWith() {}
 */
function isHeadToHeadWith() {}

/**
 * @name after() {}
 */
function after() {}

/**
 * @name before() {}
 */
function before() {}

/**
 * @name contains() {}
 */
function contains() {}

/**
 * @name during() {}
 */
function during() {}

/**
 * @name overlappedBy() {}
 */
function overlappedBy() {}

/**
 * @name overlaps() {}
 */
function overlaps() {}

/**
 * @name equals() {}
 */
function equals() {}

/**
 * @name starts() {}
 */
function starts() {}

/**
 * @name startedBy() {}
 */
function startedBy() {}

/**
 * @name finishes() {}
 * @param {Object} tempObj A temporal object which may or may not have been
 * forged (so check with the method-promise!). So, an object merely with a
 * clock base that has not been initialized can be "finished" pre-emptively
 * such that when it is initialized, it is forged as "finished" necessarily.
 * @TODO
 */
function finishes(tempObj) {
  var defaultState = false
  var to = this
  return new Promise((res, rej) => {
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
 * @name finishedBy() {}
 */
function finishedBy() {}

/**
 * @name meets() {}
 */
function meets() {}

/**
 * @name metBy() {}
 */
function metBy() {}

/**
 * @name nothing() {}
 */
function nothing() {}

/**
 * @name overlapsStart() {}
 */
function overlapsStart() {}

/**
 * @name overlapsEnd() {}
 */
function overlapsEnd() {}

/**
 * @name split() {}
 */
function split() {}

/**
 * @name lte() {}
 */
function lte() {}

/**
 * @name disjunct() {}
 */
function disjunct() {}

/**
 * @name containsDate() {}
 */
function containsDate() {}

/**
 * @name containsDateStrict() {}
 */
function containsDateStrict() {}

/**
 * @name within() {}
 */
function within() {}

/**
 * EXPORTS
 */

module.exports = function(clock) {
  if ( ! clock ) { console.log('No clock installed!') }
  const TO = Object.create(TemporalObject)
  return TO
}


