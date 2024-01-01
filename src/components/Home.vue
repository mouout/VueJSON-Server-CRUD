<template>
  <div class="text-center text-2xl font-bold m-5 underline transition ease-linear" v-if="showText">
    Hello there <span class="text-blue-800 capitalize">{{ name }}</span> !
  </div>
  <div class="flex justify-">
    <div
      v-for="item in order"
      :key="item.id"
      class="border-black m-10 text-center py-5 px-5 w-1/4 flex justify-between shadow-2xl transition ease-linear hover:shadow-none hover:cursor-pointer"
    >
      <div class="information flex flex-col text-left">
        <p
          class="flex items-center justify-center bg-yellow-700 rounded-full py-2 w-[30px] h-[30px] text-white font-bold"
        >
          {{ item.id }}
        </p>
        <p><span>order:</span> {{ item.name }}</p>
        <p><span>address:</span> {{ item.address }}</p>
        <p><span>contact:</span> {{ item.contact }}</p>
      </div>
      <div class="action-buttons">
        <button
          class="rounded border-2 border-green-700 hover:border-2 hover:border-green-700 bg-green-700 text-white hover:text-green-700 hover:bg-white font-bold py-2 px-5"
        >
          <router-link :to="`/update/${item.id}`">UPDATE</router-link>
        </button>
        <button
          class="block rounded border-2 border-red-700 py-2 px-5 m-4 bg-red-700 font-bold text-white hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700"
          @click="deleteOrder(item.id)"
        >
          DELETE
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      order: [],
      showText: true,
    };
  },
  methods: {
    async deleteOrder(id) {
      let result = await axios.delete(`http://localhost:3000/order/${id}`);
      if (result.status == 200) {
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user).name;
        if (!user) {
          this.$router.push({ name: "SignUp" });
        }
        //
        let result = await axios.get("http://localhost:3000/order");
        this.order = result.data;
        // 
        setTimeout(() => {
        this.showText = false;
      }, 2000);
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    //
    let result = await axios.get("http://localhost:3000/order");
    this.order = result.data;

    // 
    setTimeout(() => {
        this.showText = false;
      }, 2000);
  },
};
</script>
<style>
.action-buttons button {
  transition: all 0.3s linear;
}

.information p {
  margin-bottom: 10px;
}

.information:not(p:first-child) p span {
  font-weight: bold;
}
</style>
