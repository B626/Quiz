const btn = document.querySelector('.password-start-btn')
const title = document.querySelector('.password-output__title')
const output = document.querySelector('.password__output')
const passwordInput = document.querySelector('.password-input')
const isDigits = document.querySelector('.password__letters')
const isUppercase = document.querySelector('.password__uppercase')
isDigits.value = 'off'
isUppercase.value = 'off'
title.style.display = 'none'

async function ajax() {
   try {
      isDigits.value = isDigits.checked ? 'on' : 'off';
      isUppercase.value = isUppercase.checked ? 'on' : 'off';
      output.innerHTML = ''
      const passwordLength = document.querySelector('.password-input')
      const response = await fetch(`http://www.random.org/strings/?num=1&len=${passwordLength.value}&digits=${isDigits.value}&upperalpha=${isUppercase.value}&loweralpha=on&unique=on&format=plain&rnd=new&quot`)
      const password = await response.text()
      return password
   }
   catch (err) {
      console.log(err)
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

