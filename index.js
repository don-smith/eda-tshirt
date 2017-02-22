const bowl = require('./singing-bowl')
const yoga = require('./yoga')('11:50', ['tuesday', 'thursday'])
const mindfulness = require('./mindfulness')('9:00', 15)
const circle = require('./closing-circle')('17:00')
const pairing = require('./pairing')

const actions = [
  practiceMindfulness,
  pairOnDailyExercise,
  closeTheDay,
  doTheYoga
]

bowl.on('chime', () => invoke(actions))

function invoke (actions) {
  actions.forEach(action => {
    action.invoke(new Date())
  })
}

function practiceMindfulness (dateTime) {
  if (!mindfulness.now(dateTime)) return
  try {
    mindfulness.observe('breath').count()
  } catch (e) {
    practiceMindfulness(dateTime)
  }
}

function pairOnDailyExercise (dateTime) {
  if (!pairing.now(dateTime)) return
  pairing.connect().then(pairing.checkin)
    .then(pairing.randomSelect([pairing.drive, pairing.navigate]))
    .finally(pairing.haveFun)
}

function closeTheDay (dateTime) {
  if (!circle.now(dateTime)) return
  circle.answerQuestion()
    .then(circle.laugh)
    .finally(circle.clap)
}

function doTheYoga (dateTime) {
  if (!yoga.now(dateTime)) return
  yoga.connectMindAndBody()
}
