var counter = new Vue({
    el: "#counter",
    data: {
        welcomeMessage: "¡Vamos a contar!",
        number: 0,
        quantity: 1,
    },
    methods: {
        increase: function() {
            this.number = parseInt(this.number) + parseInt(this.quantity)
        },
        decrease: function() {
            this.number = parseInt(this.number) - parseInt(this.quantity)
        },
    },
})
