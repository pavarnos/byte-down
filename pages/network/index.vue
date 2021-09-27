<template>
  <div>
    <ToolKit :onNetworkMapper="() => this.scanning = true"/>
    <h1>Office Network</h1>
    <p>You are in the office network and getting closer to your goal of finding the Donut Preference Database.</p>
    <RunScan :started="scanning" max="3">
      <template v-slot:before>
        <p class="text-muted">Use the Network Mapper to see what is connected to the network</p>
      </template>
      <template v-slot:after>
        <p>A lot of devices are listed in the Mapper results. Looks like a big office.</p>
        <ul>
          <li>A few look like <strong>printers</strong>. If you need to get in to a network and stay there, hacking a
            device like a printer can be reasonably easy. Once you own the printer, if your malware is cleared off the
            network and they forget to update or replace the printers, you can re-infect other devices from the printer
            again. But slowly and carefully so they don't realise you are still there.
          </li>
          <li>Some could be <strong>security cameras</strong>, which are usually very poorly secured and rarely updated.
            It is
            fun to hack these, but watching people go in and out of office doors is a bit boring. Just like printers,
            cameras are often overlooked for upgrades. They really should put those on a separate isolated network...
          </li>
          <li>A useful target on any network is any <strong>router</strong> or firewall. The IP address usually ends in
            .1 (eg 192.168.1.1). Looking at this might give you access somewhere else interesting.
          </li>
          <li>One looks like a <strong>file server</strong>. Maybe there are some useful documents on the shared drive
            you could access?
          </li>
          <li>Another is a <strong>web server</strong>. Possibly it hosts an intranet. An intranet is a company specific
            internal web site that staff use to look up policies, manage time sheets, apply for time off, store and
            share information, do internal training courses. They can be really boring or really useful. It's hard to
            tell from here.
          </li>
          <li>Quite a number of devices named things like &quot;Dave's Mac&quot;, &quot;Reception&quot;, &quot;Finance
            PC 1&quot; or others with peopley sounding names. You already have access to the network, so there is not
            much point trying to hack into these if you can get what you need more easily elsewhere. One of the
            more useful hacking skills that develop over time is knowing which targets are worth while, and which ones
            just use up time. If you wanted to cause chaos, you could hack one PC and put ransomware on it, then make it
            hack the others and spread the ransomware everywhere across the network.
          </li>
        </ul>
        <p>
          <NextButton to="/network/office-router">Examine Network Router</NextButton>
          <NextButton to="/network/file-server">Examine File Server</NextButton>
          <NextButton to="/network/web-server">Examine Web Server</NextButton>
          <NextButton to="/network/ransomware">Infect with Ransomware</NextButton>
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
