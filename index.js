let btn = document.querySelector('.intro__btn')

async function ajax() {
   try {
      const inputUsers = document.querySelector('.quiz-users')
      const inputWinners = document.querySelector('.quiz-winners')
      const users = await fetch(`http://www.random.org/integers/?num=3&min=1&max=7&col=2&base=10&format=plain&rnd=yes&quot`)
      return users.json()
   }
   catch (err) {
      console.log(err)
   }
}

ajax().then(data => {
   console.log(data)
})

btn.addEventListener('click', ajax)

