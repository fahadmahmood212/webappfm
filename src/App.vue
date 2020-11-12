<template>
  <div id="app">
    <div v-for="lesson in lessons" :key="lesson.id"> 
      <p>Subject: {{ lesson.subject}}</p>
      <p>Location: {{ lesson.location}} </p>
      <p>Price: {{ lesson.price}}</p>
      <p>Spaces: {{ lesson.places}}</p>
    </div>
  </div>
</template>

<script>
import lessonData from "./lessons.json"; 
export default {
  name: 'App',
  data() {
    return{
      lessons: lessonData,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: 60,60,60;
  margin-top: 60px;
}
</style>
