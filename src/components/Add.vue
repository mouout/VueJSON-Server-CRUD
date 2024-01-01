<template>
  <div class="w-2/4 mt-[100px] ml-[25%]">
    <form action="" class="" @submit.prevent>
      <div>
        <h1
          class="uppercase text-5xl font-bold my-10 text-center underline decoration-wavy decoration-blue-600"
        >
          Add order
        </h1>
        <input
          v-model="order.name"
          type="text"
          placeholder="Order Name"
          id="name"
          class="shadow appearance-none py-4 px-4 pl-3 focus:outline-none border-blue-600 border-l-4 text-gray-600 font-bold placeholder:font-normal"
        />
      </div>
      <div>
        <input
          v-model="order.address"
          type="text"
          placeholder="Enter Address"
          id="address"
          class="shadow appearance-none py-4 px-4 pl-3 border-l-4 border-blue-600 focus:outline-none text-gray-600 font-bold placeholder:font-normal"
        />
      </div>
      <div>
        <input
          v-model="order.contact"
          type="text"
          placeholder="Enter Contact"
          id="contact"
          class="shadow appearance-none py-4 px-4 pl-3 border-l-4 border-blue-600 focus:outline-none text-gray-600 font-bold placeholder:font-normal"
        />
      </div>
      <div>
        <input
          @click="addNewOrder"
          type="submit"
          value="Add New"
          class="border-2 border-blue-600 bg-blue-600 text-white font-bold py-4 px-4 w-full transition linear hover:text-blue-600 hover:bg-white hover:border-blue-600"
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
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addNewOrder() {
      let result = await axios.post("http://localhost:3000/order", {
        name: this.order.name,
        contact: this.order.contact,
        address: this.order.address,
      });
      this.order.name = "";
      this.order.contact = "";
      this.order.address = "";

      if (!result) {
        alert("Something Went Wrong!");
      } else {
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
<style>
input {
  margin-bottom: 15px;
  width: 100%;
}
</style>
