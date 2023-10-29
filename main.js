import vcheader from './MainComponents/header.js'
import vcnav from './MainComponents/nav.js'
import homePage from './MainComponents/contentComponents/homePage.js'
import vcfooter from './MainComponents/footer.js'
import * as db from './DBprovider.js'
import { computed } from 'vue';
export default {
    data() {
        return {
            currentContent: 'homePage',
            newFilm: [],
            popularFilm: [],
            top50Film: []
        }
    }
    ,
    methods: {
        async getNewFilm() {
            const data = await db.fetchFilmData('get/movie/newest');
            this.newFilm = data;
        },
        async getPopularFilm() {
            const data = await db.fetchFilmData('get/mostpopular');
            this.popularFilm = data;
        },
        async getTop50Film() {
            const data = await db.fetchFilmData('get/top50');
            this.top50Film = data;
        }
    }
    ,
    mounted() {
        this.getNewFilm();
        this.getPopularFilm();
        this.getTop50Film();
    },

    provide() {
        return {
            newFilm: computed(() => this.newFilm),
            popularFilm: computed(() => this.popularFilm),
            top50Film: computed(() => this.top50Film)
        }
    },

    computed:
    {

    },

    components: { vcheader, vcnav, vcfooter, homePage },
    template: `

        <vcheader/>

       <vcnav/> 

        <component :is='currentContent'> </component>
      
        <vcfooter/>
        `
}