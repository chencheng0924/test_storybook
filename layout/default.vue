<template>
  <nuxt />
</template>

<script>
export default {
  middleware: [
    'checklogin'
  ]
}
</script>