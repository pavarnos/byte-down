<template>
  <div>
    <div class="col-4 float-right"><img src="~static/factory.jpg" alt="Factory" width="100%"></div>
    <h1>Physical</h1>
    <p>You Google for a while to find the address, look at the Street View and some photos of the building. It looks
      like a boring factory with some offices at the front, in a quiet corner of town with other similar buildings
      around it. Nothing special to see, but it's always good to check first.</p>
    <p>There are a few different things we could try:</p>

    <h2>Dumpster Dive</h2>
    <p>Some companies are not very careful about what they throw out. We could have a look in their skip bin one evening
      to see if there is anything useful we could learn.</p>
    <p><b-link to="/physical/dumpster-dive" class="btn btn-success btn-lg">Dumpster Dive</b-link></p>

    <h2>War Driving</h2>
    <p><a href="https://en.wikipedia.org/wiki/Wardriving">War Driving</a> is where you go past the building in a car or
      on foot or by bike. You have a laptop or smartphone with software on it that looks for WiFi networks that we
      might be able to probe.</p>
    <p><b-link to="/physical/war-drive" class="btn btn-success btn-lg">War Drive</b-link></p>

    <h2>Factory Fixer</h2>
    <p>The factory has a gate that is open during the day. There is a delivery dock you can see from the street. A
      friend has an electrical business. We could ask if he could pretend to be on a job to fix a problem in the
      factory, and take us with him so we could look around. Maybe we could plug a device into an empty network port
      while no one is looking?</p>
    <p><b-link to="/physical/factory-fix" class="btn btn-success btn-lg">Visit the Factory</b-link></p>

    <h2>Tech Support</h2>
    <p>A common trick used by hackers is to pretend to be an external tech support company. You walk in to the building
      with a bag of tools and tell reception you have come to fix the broken printer or reconfigure the networking
      cabinet (or something). There is almost always a broken printer in the building somewhere. We don't know how the
      IT department actually works: do they do it all themselves maybe? This is a risky approach, but might work if all
      the others do not.</p>
    <p><b-link to="/physical/tech-support" class="btn btn-success btn-lg">Visit the Office</b-link></p>
  </div>
</template>
