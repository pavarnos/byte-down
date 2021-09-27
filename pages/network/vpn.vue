<template>
  <div>
    <ToolKit :onPasswordGuesser="() => this.passwordScanning = true"
             :onDeviceScanner="() => this.deviceScanning = true"
    />
    <h1>Virtual Private Network</h1>
    <p>There are a few things that can go wrong with a VPN. Once you get inside it, you have access to the whole
      network.</p>
    <ul>
      <li>A VPN user might have a weak username and password. We could establish our own connection to the VPN and try
        to guess it.
      </li>
      <li>The VPN server itself may have a weakness: known bugs, weak protocols, or out of date software. The news
        lately has had many articles about VPN manufacturers with hard coded admin passwords, security flaws in their
        software, and even deliberate back doors.
      </li>
    </ul>
    <RunScan :started="passwordScanning" name="Password Scan">
      <template v-slot:before>
        <p class="text-muted">Use the Password Guesser to try a few VPN usernames and passwords</p>
      </template>
      <template v-slot:during>
        <p>We don't want to flood the server or it will slow down and someone will notice. Lets just try a few obvious
          combinations of first name and last name...</p>
      </template>
      <template v-slot:after>
        <p>No luck. You cautious approach was a good idea for now. You have a lot more information than before, so
          maybe could try again later if needed.
        </p>
      </template>
    </RunScan>
    <RunScan :started="deviceScanning" name="Device Scan">
      <template v-slot:before>
        <p class="text-muted">Use the Device Scanner to probe the VPN server for weaknesses</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Factory VPN Server"/>
        <p>The VPN software was way out of date. There were a couple of different ways in: a hard coded password
          from the VPN manufacturer that was published on the web a few months ago;
          and a flaw in the software that gave us admin access to the server itself.</p>
        <p>
          <NextButton to="/network/factory">Explore Factory Network</NextButton>
        </p>
      </template>
    </RunScan>
    <BackButton/>
  </div>
</template>


<script type="ts">
export default {
  data: () => ({
    passwordScanning: false,
    deviceScanning: false
  })
}
</script>
