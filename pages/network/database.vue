<template>
  <div>
    <ToolKit :onPasswordGuesser="() => this.scanning = true"/>
    <h1>Database Server</h1>
    <p>You use some standard tools to poke at the database. Looks like it needs a password to connect.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Password Guesser</p>
      </template>
      <template v-slot:after>
        <p>You log in to the database server with the guessed password. (They really should stop using easy passwords
          everywhere).
          There are a number of databases filled with boring admin things. One grabs your attention: you start scrolling
          though a listing, and find a table called person_preferences.</p>
        <h2>You found it!</h2>
        <HoleFound name="Donut Preference Database">
          <strong>Congratulations!</strong> You found the <strong>Donut Preference Database</strong>
        </HoleFound>
        <p>This is just the first page. You wonder if it has anyone you know...</p>
        <b-table striped hover responsive small sticky-header :items="database" style="width:auto" class="border border-dark"></b-table>
        <p>Well done. Task complete.</p>
        <p>There are many more
          <NuxtLink to="/holes">holes</NuxtLink>
          to discover. You can stop here if you want, or you could see how many more holes you can find to make your
          report to The Department even more impressive.
        </p>
        <p>
          <NextButton to="/">Re-Start</NextButton>
          to go back to the beginning and try a different way through. The holes you already found will still stick
          around. Can you find them all?
        </p>
        <p>
          <NextButton to="/next-steps">Next Steps</NextButton>
          for ways to learn more about ethical hacking.
        </p>
        <p>
          <NextButton to="/tools">Toolkit</NextButton>
          tells you more about the tools you have been using.
        </p>
      </template>
    </RunScan>
    <BackButton/>
  </div>
</template>

<script type="ts">
function List (data) {
  // from https://www.frankmitchell.org/2015/01/fisher-yates/
  function shuffle (original) {
    let j = 0, temp = null
    let array = original.slice(0)
    for (let i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  // a queue of ingredients in random order
  let shuffled = []

  // take the next element
  this.next = function () {
    if (shuffled.length <= 0) {
      shuffled = shuffle(data)
    }
    return shuffled.shift()
  }
}

export default {
  methods: {
    randomItem: function (array) {
      return array[Math.floor(Math.random() * array.length)]
    }
  },
  data: function () {
    const database = []
    const first = new List(['Boss', 'Glazed', 'Minty', 'Mega', 'Flabby', 'Toothsome', 'Lemon', 'Raspberry', 'Serious', 'Chocolate', 'Caramel', 'Junior', 'Bacon', 'Spicy', 'Cheesy', 'Ginger', 'Jelly', 'Marmite', 'Blueberry', 'Teensy', 'Nutty'])
    const second = new List(['Joe', 'Hog', 'Honker', 'Jamboree', 'Giant', 'Sprinkle', 'Custard', 'Genie', 'Twister', 'Bomb', 'Lifesaver', 'Bathtub', 'Cricket', 'Buffalo', 'Dream', 'Splash', 'Wedgie', 'Coconut', 'Maple', 'Toe-kick', 'Jaw Cracker', 'Power Drill'])
    for (let step = 0; step < 60; step++) {
      database.push({
        first_name: this.$faker.name.firstName(),
        last_name: this.$faker.name.lastName(),
        phone: this.$faker.phone.phoneNumber().replace(/x.*/, ''),
        email: this.$faker.internet.email(),
        birth_date: this.$faker.date.between('1960-01-01', '2011-01-01').toLocaleDateString({
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        dream_donut_flavour: first.next() + ' ' + second.next()
      })
    }
    return {
      scanning: false,
      database: database
    }
  }
}
</script>
