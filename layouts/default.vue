<template>
  <div>
    <b-navbar toggleable="lg" variant="light" class="border-bottom mb-3">
      <b-navbar-brand to="/"><img src="~static/ByteDownIcon.png" alt="ByteDown Icon" height="40rem" /> ByteDown</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Re-Start</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <Nuxt />
    </div>
  </div>
</template>
