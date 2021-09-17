<template>
  <div>
    <ToolKit :onPasswordGuesser="() => this.passwordScanning = true"
             :onDeviceScanner="() => this.deviceScanning = true"
    />
    <h1>Cafe Man in the Middle</h1>
    <p>It is mid morning when you arrive at the cafe. It is not too busy, so you easily get a seat against the wall near
      a power socket where no one can see your laptop screen. You order a coffee and one of those tasty looking donuts
      and settle down to work. The Cafe WiFi password is helpfully printed on the wall. Perfect for your
      <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">Man in the Middle</a> attack.</p>
    <p>In your laptop bag is a small but powerful WiFi router. It should have a stronger signal than the cafe's own
      WiFi for people sitting nearby. You plug that in to the power and configure it to have the same WiFi network name
      and password as the cafe. Now people who sit close to you will connect to your WiFi hot spot and not the real cafe
      one. You set up your laptop to silently copy all that data and pass it on to the internet unchanged. This is
      called an <a href="https://nordvpn.com/blog/evil-twin-attack/">Evil Twin attack</a>, because your network looks
      just like the good one, but it is secretly evil. Most web browsing is encrypted these days. A few years ago
      it was this easy to steal someone's Facebook session or get in to their online banking because most web sites did
      not use https.</p>
    <p>Now we just have to wait. Do evil people consume lots of donuts? Yeah probably. Lets go get another one...</p>
    <p>A few cafe customers come and go. Not much interesting happens until just before noon. A couple of people in
      overalls come in and grab some food. They set up a laptop between them on a table and carry on a technical
      discussion that has obviously been going for a while.</p>
    <p>Your monitoring software flags an interesting connection: someone is connecting to a VPN (Virtual Private
      Network) that looks like it belongs to The Department. Maybe it is the people in overalls working on the factory
      control systems? You couldn't see the VPN username and password because it was encrypted, but there are a few
      things we could try just now:</p>
    <ul>
      <li>The VPN might have a weak username and password. We could establish our own connection to the VPN and try to
        guess it. This might take a while, but... is that name badges embroidered on the overalls?
      </li>
      <li>The VPN server itself may have a weakness: known bugs or out of date software.</li>
      <li>Their laptop is on the same network as us, so we could see if we can hack in to it. Then we can
        see what they are doing now, and ride their laptop back in to the factory. This is a bit more challenging,
        because the VPN creates a secure virtual tunnel for all the data between their laptop and the factory. So we'd
        have to find a hole in the layer below: the WiFi software of that laptop. A bit too tricky for today...
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
          maybe could try again later if needed
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
        <p>I think you just earned another donut. You take a quick trip up to the cafe counter to buy one, then...</p>
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
