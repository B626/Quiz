const btn = document.querySelector('.quiz-start-btn')
const title = document.querySelector('.quiz-output__title')
const output = document.querySelector('.quiz__winners')
const inputUsers = document.querySelector('.quiz-users-input')
const inputWinners = document.querySelector('.quiz-winners-input')
title.style.display = 'none'

async function ajax() {
   try {
      output.innerHTML = ''
      const inputUsers = document.querySelector('.quiz-users-input')
      const inputWinners = document.querySelector('.quiz-winners-input')
      const response = await fetch(`http://www.random.org/integers/?num=${inputWinners.value}&min=1&max=${inputUsers.value}&col=2&base=10&format=plain&rnd=yes&quot`)
      const numbers = await response.text()
      return numbers.split('').map(Number).filter(Boolean)
   }
   catch (err) {
      console.error(err)
   }
}

function valuesFilter(message) {
   output.style.display = 'block'
   output.innerHTML = message
   inputUsers.value = ''
   inputWinners.value = ''
   console.log(Boolean(!inputUsers.value))
   console.log(Boolean(!inputWinners.value))
}

btn.addEventListener('click', () => {
   if (!inputWinners.value && !inputUsers.value) {
      valuesFilter('You did not type amount of winners and users')
   } else if (!inputWinners.value) {
      valuesFilter('You did not type amount of winners')
   } else if (!inputUsers.value) {
      valuesFilter('You did not type amount of users')
   } else if (inputWinners.value < 0 && inputUsers.value < 0) {
      valuesFilter('Amount of winners and users must be more than 1')
   } else if (inputUsers.value < 0) {
      valuesFilter('Amount of users must be positive')
   } else if (inputWinners.value < 0) {
      valuesFilter('Amount of winners must be positive')
   } else if (inputWinners.value > inputUsers.value) {
      valuesFilter('Amount of winners can"t be higher than amount of users')
   } else {
      ajax().then(data => {
         console.log(Boolean(!inputUsers.value))
         console.log(Boolean(!inputWinners.value))
         title.style.display = 'block'
         output.style.fontSize = '30px'
         output.innerHTML = data
      }).catch(e => {
         console.error(e)
      })
   }
})
