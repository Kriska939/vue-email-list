Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        emailAddress: "",
    },
    methods: {},
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((r) => {
                const response = r.data.response;
                this.emailAddress = response;
            });
    }
});