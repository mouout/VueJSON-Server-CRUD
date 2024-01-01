<template>
  <nav class="bg-black text-white font-bold py-10 px-[100px] flex justify-between">
    <ul class="list-none flex gap-3 cursor-pointer uppercase text-3xl">
      <li class="hover:text-blue-500"><router-link to="/">Home</router-link></li>
      <li class="hover:text-blue-500" title="Add new order"><router-link to="/add">Add</router-link></li>
    </ul>
    
    <button class="bg-blue-500 px-4 py-3 text-white rounded text-1xl transition ease-in hover:bg-red-500 uppercase" @click="logout">
      Logout
    </button>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

a.router-link-exact-active {
  color: #0ea5e9;
}
</style>