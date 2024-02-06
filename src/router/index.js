import {createRouter, createWebHistory} from 'vue-router'

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import LoginView from "@/pages/auth/LoginView";
import RegisterView from "@/pages/auth/RegisterView";
import ForgotView from "@/pages/auth/ForgotView";
import ChangePasswordView from "@/pages/auth/ChangePasswordView";

import MainViewImages from "@/pages/images/MainViewImages";
import UserAgreementView from "@/pages/legal/UserAgreementView";
import PrivacyStatementView from "@/pages/legal/PrivacyStatementView";
import newImagesView from "@/pages/images/NewImagesView";
import PopularImagesView from "@/pages/images/PopularImagesView";
import SoonImagesView from "@/pages/images/SoonImagesView";
import SearchView from "@/pages/search/SearchView";
import AboutView from "@/pages/static/AboutView";
import HelpView from "@/pages/static/HelpView";
import DevView from "@/pages/static/DevView";
import mainViewImages from "@/pages/images/MainViewImages";
import categoriesView from "@/pages/categories/CategoriesView";
import NotFoundView from "@/pages/static/NotFoundView";
import EmailVerifyView from "@/pages/auth/EmailVerifyView";
import FeedbackView from "@/pages/static/FeedbackView";


const router = createRouter({
  history: createWebHistory(),
  mode: 'hash',
  linkActiveClass: "active",
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: AuthLayout,
      children: [
        {
          name: 'LoginView',
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
          name: 'RegisterView',
          path: '',
          component: RegisterView
        }
      ]
    },
    {
      path: '/verify',
      name: 'Verify',
      component: AuthLayout,
      children: [
        {
          name: 'EmailVerifyView',
          path: '',
          component: EmailVerifyView
        }
      ]
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: AuthLayout,
      children: [
        {
          name: 'ForgotView',
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
          name: 'ChangePasswordView',
          path: '',
          component: ChangePasswordView
        }
      ]
    },
    {
      path: '/user_agreement',
      name: 'User Agreement',
      component: MainLayout,
      children: [
        {
          name: 'UserAgreementView',
          path: '',
          component: UserAgreementView
        }
      ]
    },
    {
      path: '/privacy_statement',
      name: 'Privacy Statement',
      component: MainLayout,
      children: [
        {
          name: 'PrivacyStatementView',
          path: '',
          component: PrivacyStatementView
        }
      ]
    },
    {
      path: '/',
      name: 'Index',
      component: MainLayout,
      children: [
        {
          name: 'MainViewImages',
          path: '',
          component: MainViewImages
        }
      ]
    },
    {
      path: '/search',
      name: 'Search Images',
      component: MainLayout,
      children: [
        {
          name: 'SearchView',
          path: '',
          component: SearchView
        }
      ]
    },
    {
      path: '/images',
      name: 'Images',
      component: MainLayout,
      children: [
        {
          name: 'mainViewImages',
          path: '',
          component: mainViewImages
        }
      ]
    },
    {
      path: '/images/new',
      name: 'New Images',
      component: MainLayout,
      children: [
        {
          name: 'newImagesView',
          path: '',
          component: newImagesView
        }
      ]
    },
    {
      path: '/images/popular',
      name: 'Popular Images',
      component: MainLayout,
      children: [
        {
          name: 'PopularImagesView',
          path: '',
          component: PopularImagesView
        }
      ]
    },
    {
      path: '/images/soon',
      name: 'Soon Images',
      component: MainLayout,
      children: [
        {
          name: 'SoonImagesView',
          path: '',
          component: SoonImagesView
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: MainLayout,
      children: [
        {
          name: 'AboutView',
          path: '',
          component: AboutView
        }
      ]
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: MainLayout,
      children: [
        {
          name: 'FeedbackView',
          path: '',
          component: FeedbackView
        }
      ]
    },
    {
      path: '/help',
      name: 'Help',
      component: MainLayout,
      children: [
        {
          name: 'HelpView',
          path: '',
          component: HelpView
        }
      ]
    },
    {
      path: '/devs',
      name: 'Devs',
      component: MainLayout,
      children: [
        {
          name: 'DevView',
          path: '',
          component: DevView
        }
      ]
    },
    {
      path: '/404',
      name: 'Not Found',
      component: MainLayout,
      children: [
        {
          name: 'NotFoundView',
          path: '',
          component: NotFoundView
        }
      ]
    },
    {
      path: '/categories',
      name: 'Categories',
      component: MainLayout,
      children: [
        {
          name: 'categoriesView',
          path: '',
          component: categoriesView
        }
      ]
    },
  ]
})

export default router