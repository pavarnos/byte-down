<template>
  <div>
    <RightImage src="factory.jpg" alt="Factory"></RightImage>
    <h1>Physical</h1>
    <p>You Google for a while to find the address, look at the Street View and some photos of the building. It looks
      like a boring factory with some offices at the front, in a quiet corner of town with other similar buildings
      around it. Nothing special to see, but it's always good to check first. There is a nice looking cafe just down the
      road, and quite a few other companies nearby.</p>
    <p>There are a few different things we could try:</p>

    <h2>Dumpster Dive</h2>
    <p>Some companies are not very careful about what they throw out. We could have a look in their skip bin
      to see if there is anything useful we could learn.</p>
    <p>
      <NextButton to="/physical/dumpster-dive">Dumpster Dive</NextButton>
    </p>

    <h2>War Driving</h2>
    <p><a href="https://en.wikipedia.org/wiki/Wardriving">War Driving</a> is where you go past the building in a car or
      on foot or by bike. You have a laptop or smartphone with software on it that looks for WiFi networks that we
      might be able to probe.</p>
    <p>
      <NextButton to="/physical/war-drive">War Drive</NextButton>
    </p>

    <h2>Cafe Man In the Middle</h2>
    <p>Maybe some of the staff go to the cafe for lunch, or take a
      break there and catch up on some work when the office is noisy. Its not difficult to set up a fake wifi
      network to that pretends to be the cafe free wifi. If we go sit there for a few hours we could
      find something interesting. You check the cafe web site to find its opening hours: the donuts look pretty
      good...</p>
    <p>
      <NextButton to="/physical/cafe">Visit Cafe</NextButton>
    </p>

    <h2>Tech Support</h2>
    <p>A common trick used by hackers is to pretend to be an external tech support company. You walk in to the building
      with a bag of tools and tell reception you have come to fix the broken printer or reconfigure the networking
      cabinet (or something). There is almost always a broken printer in the building somewhere. In our case there is
      some risk. We don't know how the IT people at The Dept do things: do they do it all themselves? This approach
      might work if all the others do not.</p>
    <p>
      <NextButton to="/physical/tech-support">Visit the Office</NextButton>
    </p>

    <BackButton/>
  </div>
</template>
