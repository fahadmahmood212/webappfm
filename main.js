const app = Vue.createApp({
    data() {
        return { 
            //initialising the variables
            product: 'Book a Lesson',
            subject: 'History',
            location: 'Bristol',
            price: '£15.00',
            spaces: 5
        }
    },
    methods: { 
        //updating the button chart variable
        addToCart() {
            if (this.spaces > 0) { 
            this.spaces-=1
            }
        }
    }
})