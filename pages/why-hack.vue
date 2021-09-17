<template>
  <div>
    <h1>Why hack?</h1>
    <p>There are lots of different reasons:</p>
    <ul>
      <li><strong>Governments</strong> hack other governments to find out what other countries are doing. Perhaps they
        can use the information in trade negotiations or for military purposes
      </li>
      <li><strong>Governments</strong> can also hack local or foreign companies because they want the company secrets:
        to make their own products that are better in some way, or because they want information about some of the
        company's customers (eg their location, photos, private documents)
      </li>
      <li><strong>Criminal gangs</strong> like to make money. Bank robberies in the old days used to involve going to a
        bank branch with guns. Now you can steal money from a bank with computers from the comfort of your own home.
        Stealing money from personal or company bank accounts, credit card information, top-up vouchers is also easy if
        you have the right tools and know how. They also like to copy data and sell it to others who might be
        interested: competitors, for blackmail, or sexy pictures on porn sites. <strong>Ransomware</strong> is software
        that encrypts all the files on your computer. You have to pay the gang money to get all your data back.
      </li>
      <li><strong>"Religious" groups</strong> have strong opinions about who should be allowed to do what. If they
        don't like you, they may try to deface or disable your systems to make your work harder. They might steal your
        data to find out what you are doing so they can stop you. They might steal your money so you can't carry on. Or
        they might put monitoring software on your devices so they can see what you are doing any time they want
      </li>
      <li><strong>Individuals</strong> hack for many reasons: they are bored, they like to see stuff burn, they have
        something to prove or want to be famous, they don't like you for some reason. Or sometimes they are just
        exploring: they are curious and like to know how stuff works by seeing how stuff breaks.
      </li>
    </ul>
    <p>It is like a cloud of mosquitoes outside your tent when you are camping. There are thousands all tapping and
      bumping to find the smallest gap so they can wiggle in and feed on you. No matter how good the rest of your tent
      is, if there is one tiny gap, that is enough.</p>
    <p>Hackers often use automated tools to find these holes: when a new hole is found, it will be quickly added to a
      toolkit that knows about many similar holes. This is used to scan large parts of the internet to see what they can
      find. It can sometimes be a race, with different groups competing to hack the same piece of software or hardware
      so they can use it for their own purposes.</p>
    <!-- todo famous hacks, cost of hacking, laws -->
    <img src="~static/dave.jpg" height="400px">
    <h2>How do they get in?</h2>
    <p>Software is <em>complicated</em>. There are layers and layers of components that must all
      work together. What looks simple on the outside can be made from hundreds of pieces each built by different
      people, and usually relies on a complicated collection of other systems to make it go. New versions are released
      all the time. It is easy to make a mistake, and it is hard to keep up with the pace of change.</p>
    <p>A security hole in a piece of software or hardware is called <strong>Vulnerability</strong>. It may be very
      obvious, or it may stay hidden for years until someone finds it. People have developed tools to help them find
      vulnerabilities. There are thousands found every year.</p>
    <p>If the Good Guys find a vulnerability they will tell the owner of the software and give them time to fix it. This
      is called <em>Responsible Disclosure</em>. Often they will build a <strong>Proof of Concept</strong>: a small
      example that
      shows where the hole is and how to use it. Most companies will quickly fix the problem and release a
      <em>patch</em> or software upgrade to protect their users. They may pay a <strong>Bounty</strong> or cash reward
      to the
      person who found it.</p>
    <p>Sadly there are lots of people who want to buy vulnerabilities for their own purposes: they pay a lot of money
      for a hole they can use themselves without telling anyone else. An <strong>Exploit</strong> is a tool for using a
      vulnerability in a way that allows you do to
      something that should not be possible. Sometimes exploits are <em>Chained</em> together: you use one to make a
      tiny hole, the next you put in that hole to make it wider, the next to insert something that should not be there,
      the next to give you full access to the system so you can do whatever you want.</p>
    <p>A <strong>Zero Day</strong> is an exploit that is being actively used to hack people or systems. You may not know
      you were hacked for months or years if someone quietly and carefully uses a Zero Day exploit to get access. They
      can stay quiet and look around, copy your data or watch what you are doing for almost as long as they like.</p>
    <h2>How do I stay safe from hackers?</h2>
    <p>A few simple things will help a lot</p>
    <ul>
      <li>Use a long <strong>strong unique password</strong> for every different thing you log in to. Use a Password
        Wallet to store them all, and have a good (but easy to ype and memorable) password for that. Never tell anyone
        else your password for anything: don't email it or allow anyone else to use it.
      </li>
      <li>Turn on <strong>two factor authentication</strong> for all services that support it. Avoid SMS / TXT versions
        because hackers can swap your SIM or get in to the mobile network to steal your code. Use App based two factor.
      </li>
      <li>Keep <strong>software up to date</strong>. All of it. Not just your phone and laptop. Your wifi router, the
        modem from your internet service provider, printers, anything connected to the network.
      </li>
      <li>When you get a new device, read the manual. <strong>Harden each device</strong> by changing default passwords,
        turn off unneeded features. Google for security tips for your laptop, phone, smart watch.
      </li>
      <li>Avoid IoT devices like internet connected fridges, door bells, cameras, baby monitors, smart TVs.... They are
        often poorly designed and rarely updated. An easy entry point for hackers. If you know a bit about network
        security you can make these safer to use by isolating them on their own subnet and preventing them from
        accessing the internet
      </li>
      <li>Avoid phishing. Don't click links or open emailed documents unless you trust the source and were expecting
        them. If unsure, upload the file to Google Drive and view it there
      </li>
    </ul>
    <BackButton/>
  </div>
</template>
