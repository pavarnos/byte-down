<template>
  <div>
    <h1>Your First Job</h1>
    <p>Today we have a new client: The <strong>Department Of Donuts</strong>, a government department responsible for
      donut research and development, and the National Donut Preference Database.</p>
    <img src="~static/DeptOfDonutsLogo.png" alt="Department of Donuts" height="200px">
    <p> The National Donut Preference Database is a list of everyone in the country with their name, email address,
      phone number, and favourite donut flavour. This is Sensitive Information and could cause a lot of embarrassment to
      Important People if their secrets ever gets out. What if everybody knew that the Prime Ministers' favourite was
      the
      &quot;<b-link v-b-popover.hover.bottom.html="popoverDonut" href="#">Boss Hog</b-link>&quot;:
      a donut pilled high with pulled pork and potato salad, and drizzled with honey BBQ sauce? Oh the shame!
    </p>
    <p>The Department Of Donuts ("The Dept" for short) has hired us to check that their systems are secure. It is very
      important to The Dept that their database is well protected behind many layers of security.</p>
    <p>But their security is <em>terrible</em>. These guys are <em>full</em> of holes, just like their donuts. It is our
      job to find the holes so they can fix them.</p>
    <p>The rules are simple:</p>
    <ul>
      <li>We can try anything we want</li>
      <li>Don't break anything: no permanent damage to software or hardware, stay legal</li>
      <li>Be quiet and careful: The Dept boss knows we are hacking, but the staff don't</li>
      <li>Being sneaky is OK. Being evil is not OK: it's a fine line</li>
      <li>We must tell The Dept anything we find afterwards</li>
    </ul>
    <p>
      <NextButton to="/digital-physical">Start</NextButton>
    </p>
    <BackButton />
  </div>
</template>

<script type="ts">
export default {
  methods: {
    popoverDonut () {
      return '<a href="https://www.trendhunter.com/trends/gourmet-donut"><img src="boss-hog-donut.jpg" alt="Boss Hog" width="250px"></a>'
    }
  }
}
</script>
