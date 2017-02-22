const bowl = require('./singing-bowl')
const yoga = require('./yoga')('11:50', ['tuesday', 'thursday'])
const mindfulness = require('./mindfulness')('9:00')
const closing = require('./closing')('17:00')
const pair = require('./pairing')

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
  if (!pair.now(dateTime)) return
  pair.connect().then(pair.checkin)
    .then(pair.randomSelect([pair.drive, pair.navigate]))
    .finally(pair.haveFun)
}

function closeTheDay (dateTime) {
  if (!closing.now(dateTime)) return
  closing.answerQuestion()
    .then(closing.laugh)
    .finally(closing.clap)
}

function doTheYoga (dateTime) {
  if (!yoga.now(dateTime)) return
  yoga.connectMindAndBody()
}
