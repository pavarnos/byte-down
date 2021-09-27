<template>
  <div>
    <ToolKit :onPasswordGuesser="() => this.scanning = true"/>
    <h1>Social Media</h1>
    <p>You do a quick search The Department's web site for social media links, and fine Facebook and LinkedIn. A search
      on other social media shows no presence at all. I guess only old people work for The Department? That could be a
      good thing: they might use weak passwords on their accounts and not have
      <a href="https://www.cert.govt.nz/individuals/guides/two-factor-authentication">two factor authentication</a>
      turned on.</p>
    <RunScan :started="scanning" max="3">
      <template v-slot:before>
        <p class="text-muted">Use the Password Guesser</p>
      </template>
      <template v-slot:after>
        <p>The password guesser runs for a while against Facebook, and gets blocked by their fraud detection tools. Its
          pretty hard to hack in to Facebook these days.</p>
        <p>You have even less luck with LinkedIn</p>
        <p>There weren't even any interesting posts about donuts. The accounts seem mostly unused / abandoned.</p>
        <p>Nothing more you can try here...</p>
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
