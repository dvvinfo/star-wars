<template>
  <div style ="text-align: center; margin: 2rem 0;">
    <h1 class="title">Star Wars</h1>
    <p>Type Script, Services, Composition API,REST API</p>
    <router-link to="/about">and more</router-link>
  <div v-if="loading">
    <spinner-component/>
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>gender</td>
          <td>mass</td>
          <td>hair color</td>
          <td>birth year</td>
          <td>skin color</td>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(people, index) in peoples.results" :key="index">
          <td>{{ people.name }}</td>
          <td>{{ people.gender}}</td>
          <td>{{ people.mass}}</td>
          <td>{{ people.hair_color}}</td>
          <td>{{ people.birth_year}}</td>
          <td>{{ people.skin_color}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import SpinnerComponent from '@/components/UI/SpinnerComponent.vue'
import DataService from '@/services/DataService'
import ResponseData from '@/types/ResponseData'
import Peoples from '@/types/Peoples'
export default defineComponent({
  components: {
    SpinnerComponent
  },
  setup() {
    const loading = ref(true as boolean)
    const peoples = ref({} as Peoples)
    onMounted(() => getPeople())

    const getPeople = () => {
      DataService.getAll()
        .then((res: ResponseData) => {
          peoples.value = res.data
          loading.value= false
        })
        .catch((e: Error) => console.log(e))
    }
    return {
      loading,
      peoples
    }
  }
})
</script>
