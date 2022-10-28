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
        async loadFromStorage() {
            this.loading = true
            let data = localStorage.getItem('todo-entries');
            let entries = JSON.parse(data)
            if(entries != null){
                entries.forEach((entry) => this.entries.push(entry))
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
