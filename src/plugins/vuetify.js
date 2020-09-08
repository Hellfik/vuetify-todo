import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9652ff',
                secondary: '#3f51b5'
            }
        }
    }
});


console.log(vuetify)
export default vuetify