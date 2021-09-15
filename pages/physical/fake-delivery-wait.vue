<template>
  <div>
    <ToolKit :onDeviceScanner="() => this.scanning = true"/>
    <h1>Fake Delivery + Coffee</h1>
    <p>The donuts are good here. You are on your third when a notification pops up on your laptop: someone has plugged
      in your USB key. The RAT is reporting home.
    </p>
    <HoleFound name="Poor Staff Training"><strong>Congratulations!</strong> You found a hole in their physical security! (lack of training)</HoleFound>
    <p>Your RAT lets you connect to the host computer. You take a quick look around. Seems like an old machine that
      hasn't been updated for a while. Possibly the Receptionist, going by the types of files you can see on the hard
      drive. The Department wanted to save a bit of money so they used an old spare one. Easy mistake to make.</p>
    <p>We were lucky with our RAT. This is an old-school hack. Most systems now disable auto-run because it is so easy to get
      a virus this way. Heh. Worked for us. There is a saying: USB devices are like underwear. Its good to have your
      own, but not so nice to
      share... A random USB drive like this should go straight in the rubbish. The Receptionist (and maye other staff)
      need to do some basic security training. Make a note of that to report back to The Dept when we are finished.</p>
    <p>Our RAT doesn't give us much access, but at least we can run our Device Scanner. Lets see if we can
      get out from this computer in to the rest of the network and have a look around.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Device Scanner in your toolkit: click the green Use button on the right</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Receptionist PC"/>
        <p>Our device scanner found an old version of some software. We were able to hack that to give
          us full admin rights. Now we can do anything we want on that PC. Lets take a look around to see what else is
          on the network.</p>
        <p>
          <NextButton to="/network">Scan Network</NextButton>
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
