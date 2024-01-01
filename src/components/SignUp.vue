<template>
  <div class="text-center">
    <div class="form-container">
      <div class="">
        <img
          src="../assets/logo.png"
          class="w-20 ml-[40%] text-center"
          alt="logo"
        />
      </div>
      <h1
        class="text-2xl font-bold underline decoration-wavy decoration-blue-500 underline-offset-8"
      >
        Sign up
      </h1>
      <form class="">
        <div class="mt-10">
          <label for="" class="block text-gray font-bold">Name</label>
          <input
            v-model="name"
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name"
            class="bg-white px-8 pl-2 py-2 shadow appearance-none focus:outline-blue-500 border-l-4 border-blue-400 focus:border-none text-gray-600 font-bold placeholder:font-normal"
          />
        </div>
        <div>
          <label for="" class="block text-gray font-bold">Email</label>
          <input
            v-model="email"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            class="bg-white px-8 pl-2 py-2 shadow appearance-none focus:outline-blue-500 border-l-4 border-blue-400 focus:border-none text-gray-600 font-bold placeholder:font-normal"
          />
        </div>
        <div>
          <label for="" class="block text-gray font-bold">Password</label>
          <input
            v-model="password"
            :type="inputType"
            name=""
            id=""
            placeholder="Enter Your Password"
            class="bg-white px-8 pl-2 py-2 shadow appearance-none focus:outline-blue-500 border-l-4 border-blue-400 focus:border-none text-gray-600 font-bold placeholder:font-normal"
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
        <span>
          <button
            type="submit"
            @click="signUp"
            class="bg-blue-500 rounded mt-4 text-white py-2 px-4 transition ease-linear hover:scale-75"
          >
            SignUp
          </button>
        </span>
        <span class="ml-4 underline">
          You already have an account?
          <router-link class="font-bold text-green-500" to="/login"
            >Login</router-link
          >
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Icon } from "@iconify/vue";

export default {
  name: "SignUp",
  components: {
    Icon,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",

      //
      inputType: "password",
      showPassword: "",
      hidePassword: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },

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


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.form-container {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
}

label {
  font-weight: bold;
  margin: 10px;
}

input {
  padding: 10px 10px;
}

button {
  font-weight: bold;
}

.password-toggle span {
  position: relative;
  top: -28px;
  left: 190px;
}
</style>
