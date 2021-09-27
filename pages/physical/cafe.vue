<template>
  <div>
    <ToolKit :onDeviceScanner="() => this.scanning = true"/>
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
      control systems? You couldn't see the VPN username and password because it was encrypted, but you could try a
      couple of things from here:</p>
    <h2>Hack Laptop</h2>
    <p>Their laptop is on the same network as us, so we could see if we can hack in to it. Then we can
      see what they are doing right now, and also ride their laptop back in to the factory. This is a bit more
      challenging, because their VPN connection creates a secure virtual tunnel for all the data between their laptop
      and the factory. So we'd have to find a hole in the layer below: the WiFi software of that laptop
    </p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Try the Device Scanner</p>
      </template>
      <template v-slot:after>
        <p>No luck. Worth a try though.</p>
      </template>
    </RunScan>
    <h2>Hack VPN</h2>
    <p>A virtual private network allows the laptop to appear on the factory network as if it was physically connected to
      the real network in the building. VPNs are hard to get right. Maybe we can find a weakness?</p>
    <p>Is that name badges embroidered on their overalls? You could put those names into the password guesser and see it
      helps. You walk across the cafe to &quot;get a glass of water&quot; and go past their table so you can read the
      names...</p>
    <p>
      <NextButton to="/network/vpn">Try the VPN</NextButton>
    </p>
    <BackButton/>
  </div>
</template>


<script type="ts">
export default {
  data: () => ({
    scanning: false,
  })
}
</script>
