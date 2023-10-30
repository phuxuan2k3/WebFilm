import vcheader from './MainComponents/header.js'
import vcnav from './MainComponents/nav.js'
import homePage from './MainComponents/contentComponents/homePage.js'
import vcfooter from './MainComponents/footer.js'
import * as db from './DBprovider.js'
import vcdetailFilm from './MainComponents/contentComponents/detailFilm.js'
import vcspinner from './MainComponents/spinner.js'
import vcsearchFilm from './MainComponents/contentComponents/searchFilm.js'
import { computed } from 'vue';
export default {
    data() {
        return {
            currentContent: 'homePage',
            newFilm: [],
            popularFilm: [],
            top50Film: [],
            darkMode: false,
            detailFilm: {},
            reviewFilm: [],
            searchFilm: []
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
        },
        async getFilm(id) {
            const data = await db.fetchFilmData('detail/movie/' + id);
            this.detailFilm = data.detail;
            this.reviewFilm = data.review;
        },
        async getSearchFilm(searchData) {
            const data = await db.fetchFilmData('search/movie/' + searchData);
            this.searchFilm = data;
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        }
        ,
        async getDetailFilm(film) {
            await this.getFilm(film.id);
            console.log(film);

            console.log(this.detailFilm);
            if (!this.detailFilm) {
                this.detailFilm = film;
            }
            this.currentContent = 'vcdetailFilm';
        },
        sleep() {
            return new Promise(resolve => {
                setTimeout(function () { resolve("oke"); }, 300);
            })
        }
        ,
        async comeBackHome() {
            this.currentContent = 'vcspinner';
            await this.sleep();
            this.currentContent = 'homePage';
        }
        ,
        async searchResponse(searchData) {
            console.log(searchData);
            await this.getSearchFilm(searchData);
            console.log(this.searchFilm);
            this.currentContent = 'vcsearchFilm';
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
            top50Film: computed(() => this.top50Film),
            darkMode: computed(() => this.darkMode),
            detailFilm: computed(() => this.detailFilm),
            reviewFilm: computed(() => this.reviewFilm),
            searchFilm: computed(() => this.searchFilm)
        }
    },

    computed:
    {
        DarkMode() {
            if (this.darkMode) {
                return 'dark';
            }
            return 'light';
        }
    },

    components: { vcheader, vcnav, vcfooter, homePage, vcdetailFilm, vcspinner, vcsearchFilm },
    template: `
    <div  style="width:100wh;" :class="{dark:darkMode==true}">
        <vcheader @toggleDarkMode="toggleDarkMode" :data-bs-theme="DarkMode" />

       <vcnav :data-bs-theme="DarkMode" @comebackHome = 'comeBackHome' @searchRequest = 'searchResponse'/>

        <component :is='currentContent' @detailFilm="getDetailFilm" > </component>
      
        <vcfooter :data-bs-theme="DarkMode"/>
    </div>
        `
}