<template>
  <div class="wapper">
    <header-component />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

interface IUser {
  id: number
  title: string
  male: boolean
}

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      user: {
        id: 1,
        title: 'user',
        male: true
      } as IUser
    }
  }
}
</script>
