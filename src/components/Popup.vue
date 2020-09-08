<template>
    <v-dialog
      max-width="600"
      v-model="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          depressed
          v-bind="attrs"
          v-on="on"
        >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="white--text primary">
          <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
            <v-form ref="form" class="px-3 mt-3">
                <v-text-field label="Title" v-model="title" :rules="inputRules" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="Information" v-model="infos" :rules="inputRules" prepend-icon="mdi-information"></v-textarea>

                <v-menu
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        :value="formatedDate"
                        prepend-icon="mdi-calendar-range"
                        clearable
                        label="Due time"
                        :rules="inputRules"
                        v-bind="attrs"
                        v-on="on"
                        
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="due">
                        <v-spacer></v-spacer>
                    </v-date-picker>
                </v-menu>

                <v-btn text class="primary mx-0 my-3" @click="submit" :loading="loading">Add project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import { format, parseISO } from 'date-fns'
import db from '@/fb'


export default {
    data(){
        return{
            title: '',
            infos: '',
            due: new Date().toISOString().substr(0, 10),
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 caracters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                this.loading = true
                const project = {
                    title: this.title,
                    content: this.infos,
                    due: format(parseISO(this.due), 'do MMMM yyyy'),
                    person: 'The Net Ninja',
                    status: 'ongoing'
                }
                db.collection('project').add(project).then(() => {
                    this.loading = false
                    this.dialog = false
                    this.$emit('projectAdded')
                })
            }
        }
    },
    computed:{
        formatedDate(){
            return this.due ? format(parseISO(this.due), 'do MMMM yyyy') : ''
        }
    }
}
</script>