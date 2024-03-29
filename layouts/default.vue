<template>
  <v-app light>
    <v-navigation-drawer v-model="sideNav" app temporary>
      <v-list>
        <v-list-item
          v-for="item in displayedItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
        <v-subheader inset> More </v-subheader>
        <v-list-item
          v-for="item in moreItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="sideNav = !sideNav"
      />
      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          <div class="logo">
            <span class="amu">amu</span><span class="roboclub">roboclub</span>
          </div>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in displayedItems"
          :key="item.title"
          :to="item.link"
          text
        >
          <v-icon class="mr-3">
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu bottom left class="hidden-xs-only">
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in moreItems"
            :key="item.title"
            :to="item.link"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <main><nuxt /></main>
      <div class="space" />
      <v-footer dark height="auto" class="footer pa-0 grey lighten-1">
        <div class="px-2 py-2">
          <v-btn
            text
            light
            href="https://github.com/open-roboclub/roboclub-vue/graphs/contributors"
            target="_blank"
            rel="noopener"
          >
            <v-icon>mdi-worker</v-icon>
            Developers
          </v-btn>
        </div>
        <v-spacer />
        <div class="">
          <v-btn
            v-for="icon in icons"
            :key="icon.name"
            light
            icon
            :href="icon.link"
            target="_blank"
            rel="noopener"
            style="text-decoration: none; color: black"
            class="mx-2"
          >
            <v-icon size="28px">{{ icon.name }}</v-icon>
          </v-btn>
        </div>
        <div class="pa-1 text-center grey darken-2 copyright">
          &copy;{{ getDate }} — <strong>AMURoboclub</strong>
        </div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        // {
        //   icon: 'mdi-account-check',
        //   title: 'Apply',
        //   link: '/apply',
        //   auth: false
        // },
        { icon: 'mdi-account-multiple', title: 'Team', link: '/team' },
        { icon: 'mdi-wrench', title: 'Projects', link: '/projects' },
        { icon: 'mdi-bell', title: 'News', link: '/news' },
        { icon: 'mdi-account', title: 'Profile', link: '/profile', auth: true },
        {
          icon: 'mdi-lock-open',
          title: 'Sign In',
          link: '/signin',
          auth: false
        }
        // {
        //   icon: 'mdi-account-group',
        //   title: 'Members',
        //   link: '/apply',
        //   auth: true
        // }
      ],
      moreItems: [
        { icon: 'mdi-android', title: 'Robocon', link: '/robocon' },
        { icon: 'mdi-robot', title: 'RoboVoyage', link: '/robovoyage' },
        { icon: 'mdi-cloud-download', title: 'Downloads', link: '/downloads' },
        { icon: 'mdi-store', title: 'Inventory', link: '/inventory' },
        { icon: 'mdi-coin', title: 'Contributions', link: '/contributions' }
      ],
      icons: [
        {
          name: 'mdi-instagram',
          link: 'https://www.instagram.com/amuroboclub/'
        },
        {
          name: 'mdi-facebook',
          link: 'https://www.facebook.com/groups/amuroboculb/'
        },
        {
          name: 'mdi-youtube',
          link: 'https://www.youtube.com/channel/UCKTQZXhxAWfhz1Mb8c2UKTg'
        },
        {
          name: 'mdi-github',
          link: 'https://github.com/open-roboclub/roboclub-vue/graphs/contributors'
        }
      ]
    }
  },
  computed: {
    getDate() {
      return (
        new Date().getFullYear() + '-' + ((new Date().getFullYear() + 1) % 100)
      )
    },
    displayedItems() {
      return this.menuItems.filter(this.isAuth)
    },
    ...mapState(['user'])
  },
  methods: {
    isAuth(item) {
      if (item.auth === undefined) return true
      else if (!item.auth && !this.user) return true
      return item.auth && this.user
    }
  }
}
</script>

<style scoped>
.logo {
  border-radius: 5px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.07);
  font-weight: 500;
}

.logo > .amu,
.logo > .roboclub {
  padding: 5px;
}

.logo > .amu {
  background-color: #000;
  color: #fff;
}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}

.space {
  margin-top: 100px;
}

.dev {
  font-size: 13px;
  text-decoration: none;
  color: #000;
}

@media (max-width: 539px) {
  .space {
    margin-top: 145px;
  }
}

.copyright {
  width: 100%;
}
</style>
