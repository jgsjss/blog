<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/">
      <a class="navbar-brand">My Blog</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link to="/">
            <a
              class="nav-link active"
              aria-current="page"
              >Home</a
            >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about"><a class="nav-link">about</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list"><a class="nav-link">post</a></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mt-4 container">
    <router-view :Blogs="Blogs"></router-view>
  </div>
</template>

<script>
import posts from "./assets/posts.js";

export default {
  name: "App",
  data() {
    return {
      Blogs: posts,
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
