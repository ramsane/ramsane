<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      app
      mini-variant-width="56"
    >
      <profile-card :mini-varient="miniVariant"></profile-card>
      <hr />
      <v-list flat>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          exact
          active-class="activelink"
          :ripple="false"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app collapse flat color="transparent" class="ml-n12">
      <v-app-bar-nav-icon
        class="hidden-lg-and-up ml-9"
        @click.stop="hamMenuClick"
      />
      <v-btn
        class="hidden-md-and-down ml-5 mt-n5"
        :ripple="false"
        elevation="0"
        color="transparent"
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <h1 class="header font-weight-light">sfsdf</h1>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="false" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheProfileComponent from '@/components/TheProfileCard.vue'
export default {
  components: {
    'profile-card': TheProfileComponent
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      drawer: null,
      right: true
    }
  },
  mounted() {
    // decide whther to show the drawer or not
    this.drawer = this.$vuetify.breakpoint.lgAndUp
    // no minivarient in if the drawer is hidden
    // this.miniVariant = this.drawer &
  },
  methods: {
    hamMenuClick() {
      this.miniVariant = false
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped>
.activelink {
  /* border-left: 4px solid #ff8f00; */
  transition: border 0.3s;
  color: #ff8f00;
  background-color: transparent;
}
</style>
