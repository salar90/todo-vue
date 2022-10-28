todoApp.component('entries', {
    props: {
        entries: {
            type: Array,
            required: true,
        },
        loading : {
            type: Boolean
        }
    },
    data (){
        return {
            newEntry: '',
            currentEntries: this.entries
        }
    },
    template:
    /*html*/
    `
    <span v-if="loading">Loading<br></span>

    <div style="width:400px; margin:0 auto;">
        <ul v-if="entries.length" class="entries list-unstyled">
            <li v-for="(entry, index) in currentEntries" class="d-flex justify-content-between">
                <span>{{entry.text}}</span>
                
                <span @click="remove(index)" class="justify-self-end btn-close"></span>

            </li>
        </ul>
        
        <div v-else>No Enties Yet...</div>

        <div class="add-entry d-flex">
            <input @keyup="hadnleInputKeyUp" type="text" v-model="newEntry" class="form-control flex-grow-1">
            <button @click="add" class="btn btn-primary ms-1 flex-grow-0">Add</button>
        </div>
    </div>
    `,
    emits: ['entriesChanged'],
    methods: {
        add () {
            console.log(this.currentEntries)
            if(this.newEntry.trim().length == 0){
                return
            }

            this.currentEntries.push({
                text: this.newEntry
            })
            this.newEntry = ""
            // console.log(this.currentEntries)
            this.$emit('entriesChanged', this.currentEntries)
        },
        remove(index){
            this.entries.splice(index, 1)
            this.$emit('entriesChanged', this.currentEntries)
        },
        hadnleInputKeyUp(event)
        {
            if(event.key == "Enter"){
                this.add()
            }
        }
    },
    mounted(){
        // console.log(this.currentEntries)
    }
})