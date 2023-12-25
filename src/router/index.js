import {createRouter, createWebHistory} from 'vue-router'

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import LoginView from "@/pages/auth/LoginView";
import RegisterView from "@/pages/auth/RegisterView";
import ForgotView from "@/pages/auth/ForgotView";
import ChangePasswordView from "@/pages/auth/ChangePasswordView";

import MainView from "@/pages/images/MainView";


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: LoginView
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: RegisterView
        }
      ]
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: ForgotView
        }
      ]
    },
    {
      path: '/change-password',
      name: 'Change Password',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: ChangePasswordView
        }
      ]
    },
    {
      path: '/',
      name: 'Index',
      component: MainLayout,
      children: [
        {
          path: '',
          component: MainView
        }
      ]
    }
  ]
})

export default router