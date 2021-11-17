<template>
  <div>
    <header class="header--classic">
      <button id="menu-button" class="open-menu" @click="expandNavbar">
        <font-awesome-icon icon="chevron-left" />
      </button>
      <ul id="navbar" class="navbar--folded">
        <li>
          <router-link to="/jonathanbinot/" class="active"
            >HOMEPAGE</router-link
          >
        </li>
        <li>
          <router-link to="/jonathanbinot/resume" class="cv-page"
            >MY RESUME</router-link
          >
        </li>
        <li>
          <router-link to="/jonathanbinot/portfolio" class="portfolio-page"
            >MY PORTFOLIO</router-link
          >
        </li>
        <li>
          <a
            href="#"
            class="contact-page"
            @click="contactPressed = !contactPressed"
          >
            CONTACT
          </a>
        </li>
        <li>
          <button @click="setLanguageFr" class="flag fr">
            <img
              src="@/assets/images/FR.png"
              alt="version FR"
              class="fr-flag"
              height="32"
              width="32"
            />
          </button>
        </li>
        <li>
          <button @click="toggleTheme" aria-label="Toggle themes">
            <span class="dark-mode-button" v-if="this.theme == 'darkMode'"
              ><b-icon icon="sun"></b-icon
            ></span>
            <span class="dark-mode-button" v-else
              ><b-icon icon="moon"></b-icon
            ></span>
          </button>
        </li>
      </ul>
    </header>

    <Contact v-show="contactPressed" />
  </div>
</template>

<script>
import Contact from "@/components/en/Contact";
export default {
  data() {
    return {
      theme: "", //When this property is empty, the theme is set to the default theme i.e. light mode.
      contactPressed: false,
      navbarExpanded: true,
    };
  },
  mounted() {
    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute
  },
  components: { Contact },
  methods: {
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage
    },
    setLanguageFr() {
      localStorage.setItem("language", "fr");
      location.reload();
    },
    expandNavbar() {
      let navbarElement = document.getElementById("navbar");
      let openMenuButton = document.getElementById("menu-button");
      if (this.navbarExpanded) {
        navbarElement.className = "navbar--expanded";
        openMenuButton.className = "open-menu--opened";
        openMenuButton.innerHTML = `<svg data-v-5c998570="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right"><path data-v-5c998570="" fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" class=""></path></svg>`;
        this.navbarExpanded = !this.navbarExpanded;
        console.log(this.navbarExpanded);
      } else {
        navbarElement.className = "navbar--folded";
        openMenuButton.className = "open-menu";
        openMenuButton.innerHTML = `<svg data-v-5c998570="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left"><path data-v-5c998570="" fill="currentColor" d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" class=""></path></svg>`;
        this.navbarExpanded = !this.navbarExpanded;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/modules/main";
nav {
  display: flex;
  flex-direction: column;
  background-color: $primary-color;
  color: $secondary-color;
  margin-bottom: 50px;
}

.logo {
  width: 50vw;
}
.user-dropdown {
  width: auto;
}
.profile-picture {
  &--image {
    width: 15%;
    border-radius: 50%;
    margin: auto;
  }
}
@media (min-width: 1024px) {
  #nav {
    flex-direction: row;
  }
  .logo {
    width: 10vw;
  }
  .user-dropdown {
    width: 10vw;
  }
}
</style>
