<template>
  <div>
    <ToolKit :onDeviceScanner="() => this.scanning = true"/>
    <h1>Factory Controller</h1>
    <p>You search for the name of the factory controller on the internet. The manufacturer has helpfully provided a user
      manual with instructions on how to reset the device if something goes wrong. You try that, but (thankfully)
      someone has changed the default passwords.</p>
    <p>Our device scanner has a database of common flaws in equipment from this supplier. Try that and see if you can
      find a way in.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Device Scanner</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Factory Controller"></HoleFound>
        <p>Once you get access to the central factory control systems you potential to be evil is unlimited. You
          could:</p>
        <ul>
          <li>Change the donut recipes to make something poisonous, or just something that tastes pretty nasty that no
            one would buy so they lose customers.
          </li>
          <li>Disable temperature sensors and then run a mixer or conveyor really fast until it overheats or destroys
            itself causing a fire. This is just one way you could cause expensive damage and take the factory offline
            for a long time
          </li>
          <li>Open valves to dump raw materials on the floor, creating a huge mess and a loss of essential raw
            ingredients
          </li>
          <li>Disable a couple of important machines so they do not work.
          </li>
        </ul>
        <p>This is how a factory can be held to ransom: &quot;pay up or I will do these evil things!&quot; (and many
          more). Given all the holes in this place, it is amazing no one has tried already.</p>
        <p>Feel the power for a few minutes, then lets get back to work and keep looking for more holes.</p>
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
