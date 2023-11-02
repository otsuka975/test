import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AccountManagementView from "../views/AccountManagementView.vue";
import AccountAddView from "../views/AccountAddView.vue";
import AccountDetailView from "../views/AccountDetailView.vue";
import AccountEditView from "../views/AccountEditView.vue";
import AccountDeleteView from "../views/AccountDeleteView.vue";
import BookAddView from "../views/BookAddView.vue";
import BookSearchResultView from "../views/BookSearchResultView.vue";
import TagManagementView from "../views/TagManagementView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/account",
    name: "account",
    component: AccountManagementView,
  },
  {
    path: "/account/add",
    name: "account-add",
    component: AccountAddView,
  },
  {
    path: "/account/detail/:id",
    name: "account-detail",
    component: AccountDetailView,
  },
  {
    path: "/account/edit/:id",
    name: "account-edit",
    component: AccountEditView,
  },
  {
    path: "/account/delete/:id",
    name: "account-delete",
    component: AccountDeleteView,
  },

  {
    path: "/book/add/",
    name: "book-add",
    component: BookAddView,
  },
  {
    path: "/book/search/result",
    name: "book-search-result",
    component: BookSearchResultView,
  },
  {
    path: "/tag",
    name: "tag",
    component: TagManagementView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
