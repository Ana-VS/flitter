<template>
    <div class="navbar-component">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li>
                    <router-link class="navbar-brand" :to="{ name: 'home' }"
                        >Flitter</router-link
                    >
                </li>
                <li class="searchBox">
                    <form class="form-inline my-2 my-lg-0">
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                </li>
                <li>
                    <button class="button-link login">
                        <router-link :to="{ name: 'login' }"
                            >Log In</router-link
                        >
                    </button>
                    <button class="button-link createAccount">
                        <router-link :to="{ name: 'createAccount' }"
                            >Create Account</router-link
                        >
                    </button>
                </li>
            </ul>
            <!-- <a href="#">Flitter</a> -->

            <!-- <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button> -->
            <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

  </div> -->
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NavBar",
});
</script>

<style scoped>
.navbar-component {
    width: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 16px;
    width: 100vw;
}
.navbar-brand {
    color: #4a3aff;
    font-weight: bolder;
    font-size: 22pt;
    padding: 10px 20px;
    width: 100%;
}

ul {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0px 10px;
}
li {
    padding: 1rem;
    font-weight: bold;
    margin: 0px 10px;
}
a {
    color: white;
    text-decoration: none;
    font-size: 10pt;
    padding: 10px;
    text-shadow: #454851 1px 1px 2px;
    margin: 15px;
}
/* a:hover {
    color: #454851;
    font-weight: bolder;
} */

searchBox button {
    padding: 10px;
    background: #4a3aff;
    border: #4a3aff;
    border-radius: 20px;
    margin: 0px 5px;
    font-size: 10pt !important;
}
</style>
