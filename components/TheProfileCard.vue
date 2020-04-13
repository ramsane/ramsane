<template>
  <v-card class="my-auto pa-2" flat>
    <div class="d-flex align-center">
      <v-tooltip right>
        <template #activator="{ on }">
          <!-- # - shorthand for v-slot: directive -->
          <v-avatar
            style="transition: all 0.2s ease 0s;"
            :size="miniVarient ? 36 : 62"
            v-on="on"
          >
            <img src="profile.jpg" />
          </v-avatar>
        </template>
        <span>Ramana Reddy Sane</span>
      </v-tooltip>
      <div>
        <v-card-title v-show="!miniVarient" class="title font-weight-light">
          Ramana Reddy
        </v-card-title>
        <v-card-subtitle v-show="!miniVarient" class="subtitle-2">
          @ramsane
        </v-card-subtitle>
      </div>
    </div>
    <v-fade-transition>
      <v-card-actions
        v-show="!miniVarient"
        transitions="scale-transition"
        class="justify-space-between"
      >
        <v-hover
          v-for="c in connections"
          :key="c.color"
          v-slot:default="{ hover }"
        >
          <!-- extra div is to make btn with tooltip block. Otherwise hover won't work -->
          <div>
            <v-tooltip
              top
              :open-delay="50"
              transition="slide-y-reverse-transition"
              :color="c.color"
              content-class="tooltipStyle"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  fab
                  x-small
                  :href="c.link"
                  target="_blank"
                  :style="c.style"
                  :color="c.color"
                  :elevation="hover ? 2 : 5"
                  v-on="on"
                >
                  <fa
                    :icon="c.icon.name"
                    :style="{
                      fontSize: c.icon.fontSize + 'px',
                      color: 'white'
                    }"
                    :transform="c.icon.transform"
                  />
                </v-btn>
              </template>
              <span>{{ c.color }}</span>
            </v-tooltip>
          </div>
        </v-hover>
      </v-card-actions>
    </v-fade-transition>
  </v-card>
</template>

<script>
export default {
  props: { miniVarient: Boolean },
  data() {
    return {
      connections: [
        {
          color: 'gitbook',
          link: 'https://ramsane.gitbook.io/',
          style: null,
          icon: {
            name: ['fas', 'book'],
            fontSize: 20,
            transform: { rotate: 42 }
          }
        },
        {
          color: 'linkedin',
          link: 'https://www.linkedin.com/in/ramanareddysane/',
          style: 'border-radius: 10%',
          icon: {
            name: ['fab', 'linkedin'],
            fontSize: 28,
            transform: null
          }
        },
        {
          color: 'gmail',
          link: 'mailto:ramsane20@gmail.com',
          style: 'border-radius: 10%',
          icon: {
            name: ['fas', 'envelope-square'],
            fontSize: 28,
            transform: null
          }
        },
        {
          color: 'github',
          link: 'https://github.com/ramsane',
          style: null,
          icon: {
            name: ['fab', 'github'],
            fontSize: 27,
            transform: null
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.tooltipStyle {
  font-size: 12px;
  padding: 6px;
  line-height: normal;
}
</style>
