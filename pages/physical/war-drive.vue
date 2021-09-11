<template>
  <div>
    <ToolKit :onWifiScanner="scanWifi"/>
    <h1>War Drive</h1>
    <p>
      You pick up a company laptop with you hacking tools on it, get in your car and drive to the factory. There are
      lots of cars around, so it seems safe enough to park across the street for a short time. It is also a good chance
      to observe the area to see people going in and out of the building. There is a nice looking cafe just down the
      road. You are feeling a bit hungry, but lets focus on work for the moment.
    </p>
    <div v-if="!scanning && !scanComplete">
      <p class="text-muted">Try using the WiFi Scanner in your toolkit</p>
    </div>
    <div v-if="scanning">
      <h2>Scanning...</h2>
      <p>It takes a few minutes to scan for local networks</p>
    </div>
    <div v-if="scanComplete">
      <h2>Scan Complete...</h2>
      <p>The scan found about 20 wifi networks from different companies in the area. 3 of those look interesting.</p>
      <p>Here are some things we could try:</p>
      <h2>Crack the Password</h2>
      <p>We could try using our Password Guesser tools to see if they used an obvious password on one of their networks.
        It takes a while to run though. We might raise suspicion by staying in the car too long.</p>
      <p><NextButton to="/physical/crack-wifi">Crack Wifi Password</NextButton></p>

      <h2>Cafe Man In the Middle</h2>
      <p>Maybe some of the staff go to the cafe for lunch, or take a
        break there and catch up on some work when the office is noisy. Its not difficult to set up a fake wifi network
        to that pretends to be the cafe free wifi or the office wifi. Maybe if we go sit there for half a day we could
        find something interesting. The donuts in the cafe look pretty good...</p>
      <p><NextButton to="/physical/cafe">Visit Cafe</NextButton></p>

      <h2>Courier Delivery</h2>
      <p>You saw a courier drop off a package in the office while the scan was running. We could deliver a package of
        our own and &quot;accidentally&quot; drop a USB key with some of our tools on it in the reception area. Maybe
        someone will pick it up and put it in their computer to see whose it is?</p>
      <p><NextButton to="/physical/courier-driver">Courier Delivery</NextButton></p>

    </div>

    <BackButton />

  </div>
</template>

<script type="ts">
export default {
  // todo display a progress bar, then show the
  data: function () {
    return {
      scanComplete: false,
      scanning: false
    }
  },
  methods: {
    scanWifi () {
      this.scanComplete = false
      this.scanning = true
      setTimeout(function () {
        this.scanning = false
        this.scanComplete = true
      }.bind(this), 500)
    },
  }
}
</script>
