<template>
  <p><a class="btn btn-secondary" @click="$router.back()">
    <font-awesome-icon icon="chevron-left"/>
    <slot>Back</slot>
  </a></p>
</template>
