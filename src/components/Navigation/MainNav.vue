<template>
  <header :class="headerHeightClass">
    <div class="head-container">
      <div class="nav-container">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="toggle"
          @click="navDisplay"
        />
        <router-link to="/" class="company-name">{{ company }}</router-link>
        <nav id="nav">
          <ul>
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="menuItems"
              data-test="main-nav-list-item"
              @click="hideNav"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex flex-nowrap border-solid px-8 items-center"></div>
        <div class="flex items-center ml-auto h-full">
          <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            type="primary"
            data-test="login-button"
            @click="LOGIN_USER"
          />
        </div>
      </div>
      <Subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

import { LOGIN_USER } from "@/store";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: "Bright Career",
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Workplace", url: "/" },
        { text: "Achievements", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    ...mapState(["isLoggedIn"]),
  },

  methods: {
    jobspage() {
      this.$router.push("/jobs/results");
    },
    navDisplay() {
      let navbar = document.getElementById("nav");
      navbar.classList.toggle("show");
    },
    hideNav() {
      let navbar = document.getElementById("nav");
      navbar.classList.remove("show");
    },
    // loginUser() {
    //   this.isLoggedIn = true;
    // },
    // loginUser() {
    //   this.$store.commit(LOGIN_USER);
    // },
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER);
    // },
    ...mapMutations([LOGIN_USER]),
  },
};
</script>

<style scoped>
header {
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.head-container {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 4rem;
  width: 100%;
  background-color: white;
}
.nav-container {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: auto;
  margin-right: auto;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: light gray;
}
.company-name {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.menuItems {
  height: 100%;
  margin-left: 2.25rem;
}
.menuItems:first-child {
  margin-left: 0px;
}
.toggle {
  width: 30px;
  margin: auto 0;
  display: none;
}
nav {
  position: absolute;
  float: left;
  height: 100%;
  margin-left: 9rem;
  color: gray;
}
nav ul {
  display: flex;
  height: 100%;
  padding: 0%;
  margin: 0%;
  list-style: none;
}
nav li {
  margin-left: 2.25rem;
  height: 100%;
  font-weight: 600;
}
nav li:first-child {
  margin-left: 0%;
}
@media only screen and (min-width: 320px) and (max-width: 768px) {
  .toggle {
    display: inline-block;
  }
  .nav-container {
    padding: 0 0.5rem;
  }
  nav {
    display: none;
    margin-left: 0;
    margin-top: 4rem;
  }
  nav ul {
    flex-direction: column;
  }
  nav li {
    margin-left: 0;
    background-color: white;
    font-weight: 600;
  }
  nav li:first-child {
    padding-left: 2rem;
  }
  .company-name {
    margin-left: 2rem;
  }
  nav.hide {
    display: none;
  }
  nav.show {
    display: block;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .menuItems {
    height: 100%;
    margin-left: 1.5rem;
  }
  .menuItems:first-child {
    margin-left: 0px;
  }
}
</style>
