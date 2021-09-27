<template>
  <div>
    <h1>Scan Domain Name</h1>
    <p>You download the <a href="https://en.wikipedia.org/wiki/Zone_file">Zone File</a>. It has a
      ton of useful data. Looks like The Department have a few services you could investigate.</p>

    <h2>Web Site</h2>
    <p>They have a web site, which can sometimes be a good place to look for useful information about the organisation.
      Sometimes it can provide a way in to their back end services (depending on how complicated their systems are).</p>
    <p>
      <NextButton to="/digital/web-site">Browse Web Site</NextButton>
    </p>

    <h2>Email Service</h2>
    <p>Almost every organisation sends and receives email. Spam prevention is a complex area. Most email servers are
      pretty good these days. It is the human factors that make email an easy entry point.</p>
    <p>
      <NextButton to="/digital/email-service">Analyse Mail Services</NextButton>
    </p>

    <h2>Staging Server</h2>
    <p>Huh! You can't believe your luck. The DNS has a record for a staging server, commonly used by programmers to
      beta test their software. They upload new versions of their software to this server to let a few people try it
      out, or to simulate normal workloads for the main servers. Sometimes the software is there in advance of a
      security audit, so it may have weaknesses you could use</p>
    <p>
      <NextButton to="/digital/staging-server">Visit Staging Server</NextButton>
    </p>

    <h2>Virtual Private Network</h2>
    <p>Virtual Private Networks (VPNs) have many uses: remote office staff can connect to the office network and use
      resources like printers, file servers and database as if they are physically present in the office. Factory
      technicians can log in and provide remote support or running repairs to the factory as and when needed. It is very
      handy to be able to quickly pop in and tweak a broken system then get on with your evening or weekend.</p>
    <p>
      <NextButton to="/network/vpn">Scan VPN</NextButton>
    </p>

    <BackButton/>
  </div>
</template>
