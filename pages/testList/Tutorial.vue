<!-- Please remove this file from your project -->
<template>
  <div class="relative flex flex-col items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto max-h-xl">
      <div class="flex justify-center mt-24 text-5xl font-bold text-green-500">九九乘法表</div>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6 flex flex-wrap">
        <ul v-for="item in items" :key="item" class="mx-3 p-8 w-18 h-full">
          <li class="rounded-xl bg-yellow-300 text-indigo-500 text-xl w-12 h-10 flex justify-center items-center">{{item}}</li>
          <li v-for="item2 in items" :key="item2">{{(item)}} * {{item2}} = {{(item) * item2}}</li>
        </ul>
      </div>
    </div>
    <div><NuxtLink to="/contactus">contactus</NuxtLink></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:9
    }
  },
}
</script>