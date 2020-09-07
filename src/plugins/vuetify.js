import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9652ff'
            }
        }
    }
});


console.log(vuetify)
export default vuetify