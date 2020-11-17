<template>
  <div id="app">
    <router-view></router-view>
    <h1>This is the cart page</h1>
       <!-- This is for displaying the lessons-->
    <div v-for="lesson in cart" :key="lesson.id"> 
      <!-- This is the list with lessons details-->
      <ul>
       <li>Subject: {{ lesson.subject}}</li>
      <li>Location: {{ lesson.location}} </li>
      <li>Price: {{ lesson.price}}</li>
      <li>Spaces: {{ lesson.places}}</li> 
      </ul>
      <!-- this is the button to remove the lesson from shopping cart-->
      <button class="button"  v-on:click="remove(lesson)" >Remove</button>
    </div> 
    
    <button class="back-button" >
      <router-link to="/">Back</router-link>
    </button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: "",
      phone_number: "",
      cart: [],
    };
  },
  mounted() {
    if (localStorage.getItem('shoppingcart')) {
      try {
        this.cart = JSON.parse(localStorage.getItem('shoppingcart'));
      } catch(e) {
        localStorage.removeItem('shoppingcart');
      }
    }
  },
  methods: {
    remove: function(lessontoremove) {
      let id = lessontoremove.id;
      //look for lessons in shopping cart array
        var arrayLength = this.cart.length;
        for (var i = 0; i < arrayLength; i++) {
            if (this.cart[i].id == id)
            {
              //remove item in location I
              this.cart.splice(i, 1);
              break;
            }
        }
    }
  }
}
</script>