<template>
  <div class="container">
    <h1
      class="text-3xl font-bold underline decoration-wavy decoration-green-700 m-5 text-center"
    >
      Login
    </h1>
    <form action="">
      <div>
        <label for="">Email</label>
        <input
          type="email"
          name=""
          id=""
          v-model="email"
          placeholder="Enter your email"
          class="text-gray-600 font-bold placeholder:font-normal appearance-none shadow transition ease-linear focus:outline-green-500 border-l-4 border-green-500 focus:border-none py-3"
        />
      </div>
      <div>
        <label for="">Password</label>
        <input
          :type="inputType"
          name=""
          id=""
          v-model="password"
          placeholder="Enter your password"
          class="text-gray-600 font-bold placeholder:font-normal appearance-none shadow transition ease-linear focus:outline-green-500 border-l-4 border-green-500 focus:border-none py-3"
        />
        <button @click.prevent="toggleInput" class="password-toggle">
            <span v-if="inputType == 'password'">
              {{ showPassword }}<Icon icon="subway:eye" />
            </span>
            <span v-else>
              {{ hidePassword }}<Icon icon="mdi:eye-off" />
            </span>
          </button>
      </div>
    </form>
    <div>
      <button
        type="submit"
        @click="login"
        class="rounded bg-green-700 text-white py-2 px-5 hover:bg-green-600 font-bold my-2"
      >
        Login
      </button>
    </div>
    <span class="underline">
      Don’t you have an account?
      <router-link to="/sign-up" class="text-green-700 font-bold"
        >Sign up</router-link
      >
    </span>
  </div>
</template>

<script>
import axios from "axios";
import { Icon } from "@iconify/vue";

export default {
  name: "LoginPage",
  components: {
    Icon,
  },
  data() {
    return {
      email: "",
      password: "",

      //
      inputType: "password",
      showPassword: "",
      hidePassword: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },

    //
    toggleInput() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style>
.container {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

label {
  font-weight: bold;
  margin: 5px;
}

input {
  padding: 10px 10px;
}

label,
input {
  margin-bottom: 20px;
}

.password-toggle span {
  position: relative;
  top: -50px;
  left: 390px;
}
</style>
