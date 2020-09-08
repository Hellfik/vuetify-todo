<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(project,index) in myProjects"
          :key="index"
        >
          <v-expansion-panel-header>{{ project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due}}</div>
              <div>{{ project.content}}</div>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  name: 'Projects',
  data(){
    return{
       projects: []
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
    }
  },
  created(){
    db.collection('project').onSnapshot(response => {
      const changes = response.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  components: {

  }
}
</script>