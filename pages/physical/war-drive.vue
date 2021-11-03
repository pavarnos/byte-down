<template>
  <div>
    <ToolKit :onWifiScanner="() => this.scanning = true"/>
    <h1>War Drive</h1>
    <p>
      You pick up a company laptop with some hacking tools on it, get in your car and drive to the factory. There are
      lots of cars around, so it seems safe enough to park across the street for a short time. It is also a good chance
      to observe the area to see people going in and out of the building.
    </p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Try using the WiFi Scanner in your toolkit</p>
      </template>
      <template v-slot:after>
        <p>The scan found about 20 wifi networks from different companies in the area. Some of those look
          interesting. We could try using our Password Guesser to see if they used an obvious password on one of
          their networks. It takes a while to run though. We might raise suspicion by staying in the car too long. If
          you think it is worth the risk, lets try to guess the wifi network password.</p>
        <p>
          <NextButton to="/physical/crack-wifi">Crack Wifi Networks</NextButton>
        </p>

        <h2>Factory Fixer</h2>
        <p>The factory has a gate that is open during the day: you can see a sign with delivery hours beside the gate.
          There is a delivery dock you can see from the street. A friend has an electrical business. We could ask if he
          could pretend to be on a job to fix a problem in the factory, and take us with him as his apprentice so we
          could look around. Maybe we could plug a device into an empty network port while no one is looking?</p>
        <p>
          <NextButton to="/physical/factory-fix">Visit the Factory</NextButton>
        </p>

        <h2>Courier Delivery</h2>
        <p>You saw a courier drop off a package in the office while the scan was running. We could deliver a package of
          our own and <em>accidentally</em> drop a USB key with some of our tools on it in the reception area.
          Maybe
          someone will pick it up and put it in their computer to see whose it is?</p>
        <p>
          <NextButton to="/physical/fake-delivery">Fake Delivery</NextButton>
        </p>

      </template>
    </RunScan>
    <BackButton/>
  </div>
</template>

<script type="ts">
export default {
  data: () => ({ scanning: false })
}
</script>
