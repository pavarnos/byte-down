<template>
  <div>
    <h1>Digital</h1>
    <p>There are lots of things you can do without leaving your nice warm office, which is good for you but bad for The
      Department: anything you can do over the internet, someone else in on the other side of the world can do over the
      internet. Holes in their &quot;Digital Armour&quot; are important to fix quickly.</p>

    <h2>Web Site</h2>
    <p>Take a look at their web site to see what you can learn, and poke at the server to see if you can get inside.</p>
    <p>
      <NextButton to="/digital/web-site">Browse Web Site</NextButton>
    </p>

    <h2>Analyse Domain Name</h2>
    <p>The <a href="https://en.wikipedia.org/wiki/Domain_Name_System">Domain Name System</a> converts a human-friendly
      web site name like <em>donuts.govt.nz</em> into a computer-friendly series of numbers that tells systems how to
      talk to
      each other. Sometimes there is a lot if useful information in a DNS record.</p>
    <p>
      <NextButton to="/digital/dns">Scan the Domain</NextButton>
    </p>

    <h2>Social Media</h2>
    <p>Perhaps you can learn something about The Department you could exploit later on. Or maybe their accounts have
      weak passwords you could guess, so you could take over their accounts?</p>
    <p>
      <NextButton to="/digital/social-media">Search Social Media</NextButton>
    </p>

    <h2>Phishing Attack</h2>
    <p><a href="https://en.wikipedia.org/wiki/Phishing">Phishing</a> is where you send a fake message that looks
      important to try and trick someone into clicking a link or opening a document that infects their computer.</p>
    <p>
      <NextButton to="/digital/phishing">Go Phishing</NextButton>
    </p>

    <BackButton/>
  </div>
</template>
