/**
 * Calculate cook time
 *
 * By:      Daniel
 * Version: 1.0
 * Since:   2022-10-14
 */
import promptSync from 'prompt-sync'

// Defining variables
const prompt = promptSync()
const options = ['sub', 'pizza', 'soup']
const optionsTime = [1, 0.75, 1.75]
let food = ''

while (!options.includes(food)) {
  food = prompt('Food(pizza, sub, or soup): ')
  food = food.toLowerCase()
  food = food.trim()
}

// Getting user input
const amountString = prompt(`How many ${food}(s) are you cooking?(max:3): `)

// Process
try {
  // Parse int from String input
  const amount = parseInt(amountString)
  if (isNaN(amount)) {
    console.log('Input invalid :(')
  } else if (amount <= 0) {
    console.log('Amount cannot be a negative')
  } else if (amount >= 4) {
    console.log('The maximum quantity of food is 3.')
  } else {
    // Calculations
    const timeOfOne = optionsTime[options.indexOf(food)]
    const timeUnFormated = timeOfOne + timeOfOne * ((amount - 1) * 0.5)
    const seconds = 60 * (timeUnFormated % 1)
    const minutes = timeUnFormated - (timeUnFormated % 1)

    // Output calculations
    console.log(timeUnFormated)
    console.log(
      `The total cook time is ${minutes} minutes and ${seconds} seconds.`
    )
  }
} catch (e) {
  // Incase error occurs
  console.log('Input invalid :(')
}

// Done
console.log('\nDone')
