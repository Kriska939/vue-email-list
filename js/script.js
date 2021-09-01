Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        emailAddress: [],
        nEmail: 10,
    },
    methods: {},
    created() {
        for (let i = 0; i < this.nEmail; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((r) => {
                    const response = r.data.response;
                    this.emailAddress.push(response);
                });
        }
    }
});