<template>
  <div>
    <ToolKit :onDeviceScanner="() => this.scanning = true"/>
    <h1>Phishing Email Sent</h1>
    <p>Your email might sit in someone's inbox for a few hours before they open it, so you get up from your desk and
      find something to much on. All this talk of donuts is making you crave one. No donuts here sadly.</p>
    <p>When you get back to your desk, you get a notification: It worked!</p>
    <HoleFound name="Phishing Email Opened">
      <strong>Congratulations!</strong> You found a hole in their security (<strong>Phishing Email Opened</strong>)
    </HoleFound>
    <p>Someone opened your document (fail number 1). Their computer allowed the malware to run (fail number 2). The
      computer was not fully up to date and not protected from the custom malware you placed in your document (fail
      number 3).</p>
    <p>You now have remote access to their computer</p>
    <RunScan :started="scanning" max="3">
      <template v-slot:before>
        <p class="text-muted">Use the Device Scanner to see what options you have</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Phishing Malware Infection">
          <strong>Congratulations!</strong> Your phishing email worked: (<strong>Phishing Malware Infection</strong>)
        </HoleFound>
        <p>When the device scanner finishes, you know a lot more than you wanted to know about the person who opened the
          document. They work in the marketing department, have 3 kids and an ugly dog, and enjoy donut racing (a sport
          you never new existed until now). You know their car registration, when the kids sports events are, and the
          names of their neighbours. Too much personal information on a work computer.</p>
        <p>You also found some outdated software that gives you access to the rest of the office network. Nice.</p>
        <p>
          <NextButton to="/network">Browse Office Network</NextButton>
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
