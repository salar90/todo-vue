let todoApp = Vue.createApp({
    data () {
        return {
            title: 'Todo',
            description: 'You can write down what you want...',
            tags: [],
            entries: [],
            loading: false
        }
    },
    methods: {
        entriesChanged (entries){
            this.entries = [...entries]
            this.saveToStorage()
        },
        loadFromStorage() {
            this.loading = true
            let data = localStorage.getItem('todo-entries');
            let entries = JSON.parse(data)
            if(entries != null){
                this.entries = [...entries]
            }
            this.loading=false
        },
        saveToStorage(){
            console.log('saving')
            localStorage.setItem('todo-entries', JSON.stringify(this.entries))
        }
    },
    mounted()
    {
        this.loadFromStorage()
    }
});
