const btn = document.querySelector('.password-start-btn')
const title = document.querySelector('.password-output__title')
const output = document.querySelector('.password__output')
const passwordInput = document.querySelector('.password-input')
const isDigits = document.querySelector('.password__letters')
const isUppercase = document.querySelector('.password__uppercase')
let digitsValue = 'off'
let uppercaseValue = 'off'
title.style.display = 'none'

async function ajax() {
   try {
      digitsValue = isDigits.checked ? 'on' : 'off';
      uppercaseValue = isUppercase.checked ? 'on' : 'off';
      output.innerHTML = ''
      const passwordLength = document.querySelector('.password-input')
      const response = await fetch(`http://www.random.org/strings/?num=1&len=${passwordLength.value}&digits=${digitsValue}&upperalpha=${uppercaseValue}&loweralpha=on&unique=on&format=plain&rnd=new&quot`)
      const password = await response.text()
      return password
   }
   catch (err) {
      console.error(err)
   }
}

btn.addEventListener('click', () => {
   if (!passwordInput.value) {
      output.innerHTML = 'You did not type password length'
      output.style.fontSize = '30px'
   } else {
      ajax().then(data => {
         title.style.display = 'block'
         output.style.fontSize = '30px'
         output.innerHTML = data
      }).catch(e => {
         console.error(e)
      })
   }
})

