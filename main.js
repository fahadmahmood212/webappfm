const app = Vue.createApp({
    data() {
        return {
            product: 'Book a Lesson',
            subject: 'Science',
            location: 'London',
            price: '£20.00',
            spaces: 5
        }
    },
    methods: { 
        addToCart() {
            if (this.spaces > 0) { 
            this.spaces-=1
            }
        }
    }
})