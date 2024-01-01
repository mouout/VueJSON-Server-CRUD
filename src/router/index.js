import HomePage from "@/components/Home";
import SignUp from "@/components/SignUp";
import LoginPage from "@/components/Login";
import AddPage from "@/components/Add";
import UpdatePage from "@/components/Update";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
    },
    {
        name: "SignUp",
        path: "/sign-up",
        component: SignUp,
    },
    {
        name: "Login",
        path: "/login",
        component: LoginPage,
    },
    {
        name: "Add",
        path: "/add",
        component: AddPage,
    },
    {
        name: "Update",
        path: "/update/:id",
        component: UpdatePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;