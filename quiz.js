let btn = document.querySelector('.quiz-start-btn')
let title = document.querySelector('.quiz-output__title')
let output = document.querySelector('.quiz__winners')
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
      console.log(err)
   }
}

btn.addEventListener('click', () => {
   if (!inputWinners.value && !inputUsers.value) {
      output.style.display = 'block'
      output.innerHTML = 'You did not type amount of winners and users'
      inputUsers.value = ''
      inputWinners.value =''
   } else if (!inputWinners.value) {
      output.style.display = 'block'
      output.innerHTML = 'You did not type amount of winners'
      inputUsers.value = ''
      inputWinners.value =''
   } else if (!inputUsers.value) {
      output.style.display = 'block'
      output.innerHTML = 'You did not type amount of users'
      inputUsers.value = ''
      inputWinners.value =''
   } else if (inputWinners.value < 1 && inputUsers.value < 1) {
      output.style.display = 'block'
      output.innerHTML = 'Amount of winners and users must be more than 1'
      inputUsers.value = ''
      inputWinners.value =''
   }
   else if (inputUsers.value < 1) {
      output.style.display = 'block'
      output.innerHTML = 'Amount of users must be more than 1'
      inputUsers.value = ''
      inputWinners.value =''
   }else if (inputWinners.value < 1) {
      output.style.display = 'block'
      output.innerHTML = 'Amount of winners must be more than 1'
      inputUsers.value = ''
      inputWinners.value =''
   } else if (inputWinners.value > inputUsers.value) {
      output.style.display = 'block'
      output.innerHTML = 'Amount of winners can"t be higher than amount of users'
      inputUsers.value = ''
      inputWinners.value =''
   }
   else {
      ajax().then(data => {
         title.style.display = 'block'
         output.style.fontSize = '30px'
         output.innerHTML = data
      }).catch(e => {
         console.error(e)
      })
   }
})

