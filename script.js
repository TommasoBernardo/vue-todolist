const {createApp} = Vue;

createApp({
    data () {
        return {
            error: false,

            newFilm: 
                {
                    title: "",
                    done: false
                },
            
            listFilm: [
                {
                    title: "Spider-Man",
                    done: false
                },
                {
                    title: "Jumanji",
                    done: false
                },
                {
                    title: "Mamma ho perso l'aereo",
                    done: false
                },
            ]
        }
    },
    methods: {
        addFilm() {
            // creo la condizione se l'user non inserisce niente nell'input
            if (this.newFilm.title === '') {
                this.error = true;
            //condizione film
            } else {
                this.error = false;
                let newObject = {...this.newFilm};
                this.listFilm.push(newObject);
                console.log(this.listFilm);
            }

            // svuoto l'input 
            this.newFilm.title = '';
        },

        // eliminare un elemento dalla lista
        removeFilm(index) {
            this.listFilm.splice(index, 1);
        },
    }
}).mount("#myapp");