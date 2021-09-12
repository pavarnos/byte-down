<template>
  <div>
    <ToolKit :onPasswordGuesser="guessPassword"/>
    <h1>Crack Wifi</h1>
    <p>A few networks look interesting:</p>
    <ul>
      <li><strong>BRN439EC1</strong>: hmmm... some Brother printers can expose their own wifi networks to supposedly
        make printing easier. Could be an interesting target if we had more time, but it also could be in any one of the
        other companies nearby. Maybe later...
      </li>
      <li><strong>chowdown</strong>: That is the name of the Cafe down the road. Hacking that is not going to help us
        much at the moment
      </li>
      <li><strong>top_teeth</strong>: There is a dentist further up the street. Good place for one with all those donuts
        nearby
      </li>
      <li><strong>ddonut-takeaway</strong>: this might belong to The Department? Worth investigating...</li>
      <li><strong>ddonut-dinein</strong>: this one too</li>
      <li><strong>ddonut-factory</strong>: possibly for devices in the factory?</li>
    </ul>
    <p>Lets try <strong>ddonut-takeaway</strong> first. You add some extra words to the password
      generator: things like "donut", "doughnut", "department", "takeaway", and some other food related terms in case it
      helps.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Password Guesser in your toolkit: click the green Use button on the right</p>
      </template>
      <template v-slot:during>
        <p>It normally takes a few hours to run the scan because there are so many possibilities...</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Guest WiFi"/>
        <p>The Dept used a super easy password for one of their networks: "pink-icing". Probably because it is a guest
          network for visitors to the company. They want a password that is easy to tell people and easy to type. Lets
          go and see what we can find...</p>
        <p>And lets start the password guesser on the <strong>ddonut-dinein</strong> network and leave it running while
          we explore</p>
        <p>
          <NextButton to="/physical/guest-network">Explore Guest Network</NextButton>
        </p>
      </template>
    </RunScan>
    <BackButton/>
  </div>
</template>

<script type="ts">
export default {
  data: function () {
    return {
      scanning: false,
    }
  },
  methods: {
    guessPassword () {
      this.scanning = true
    },
  },
}
</script>
