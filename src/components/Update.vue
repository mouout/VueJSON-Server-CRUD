<template>
  <div class="text-bold text-4xl underline decoration-slice decoration-green-500 text-center mt-10">Update</div>
  <div class="w-2/4 mt-[100px] ml-[25%]">
    <form action="" @submit.prevent>
      <div>
        <input
          v-model="order.name"
          type="text"
          id="name"
          class="shadow appearance-none py-3 px-4 pl-3 focus:outline-none text-gray-600 font-bold placeholder:font-normal border-l-4 border-green-500"
        />
      </div>
      <div>
        <input
          v-model="order.address"
          type="text"
          id="address"
          class="shadow appearance-none py-3 px-4 pl-3 focus:outline-none text-gray-600 font-bold placeholder:font-normal border-l-4 border-green-500"
        />
      </div>
      <div>
        <input
          v-model="order.contact"
          type="text"
          id="contact"
          class="shadow appearance-none py-3 px-4 pl-3 focus:outline-none text-gray-600 font-bold placeholder:font-normal border-l-4 border-green-500"
        />
      </div>
      <div>
        <input
          @click="update"
          type="submit"
          value="UPDATE"
          class="border-2 border-green-500 rounded bg-white text-green-500 font-bold py-3 px-4 w-full hover:text-white hover:bg-green-500 hover:border-green-500 transition ease-linear cursor-pointer tracking-wider"
        />
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      order: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    async update() {
      const result = await axios.put(
        `http://localhost:3000/order/${this.$route.params.id}`,
        {
          name: this.order.name,
          address: this.order.address,
          contact: this.order.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  
    const result = await axios.get(
      `http://localhost:3000/order/${this.$route.params.id}`
    );
    this.order = result.data;
  },
};
</script>
<style>
input {
  margin-bottom: 20px;
}
</style>
