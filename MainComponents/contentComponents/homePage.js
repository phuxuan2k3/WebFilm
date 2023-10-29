import film from './film.js'
import { computed } from 'vue'
export default {
    data() {
        return {
            currentNewFilm: 0,
            currentPopularFilmPage: 0
        }
    }
    ,
    inject: {
        newFilm: {
            from: `newFilm`
        },
        popularFilm: {
            from: `popularFilm`
        },
        top50Film: {
            from: `top50Film`
        }
    }
    ,
    methods: {
        getPF() {
            return computed(() => this.popularFilm);
        },

        foo() {
            console.log(this.top50Film);
        },

        getPopularFilm(i, j) {
            let index = i * 3;
            if (j == 1) {
                index -= 2;
            } else if (j == 2) {
                index -= 1;
            }
            return this.popularFilm[index - 1];
        },
        getTop50Film(i, j) {
            let index = i * 3;
            if (j == 1) {
                index -= 2;
            } else if (j == 2) {
                index -= 1;
            }
            return this.top50Film[index - 1];
        }
    }
    ,
    components: { film }
    ,
    template: `
        <div class="content mt-1">

            <div id="newFilmCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#newFilmCarousel" :data-bs-slide-to="index" :class="{active:index===currentNewFilm}" v-for="(item, index) in newFilm"></button>
                </div>
                <div class="carousel-inner text-center">
                    <div  data-bs-interval="3000" class="carousel-item" :class="{active:index===currentNewFilm}" v-for="(item,index) in newFilm">
                    <film  class="m-auto col-3 rounded-3" style="height:500px" :data="item" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#newFilmCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#newFilmCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <div id="popularFilmCarousel" class="carousel slide mt-5" data-bs-ride="carousel" >

                <div class="d-flex justify-content-between">
                    <div> Most popular</div>
                    <div class="carousel-indicators position-static m-0">
                        <button type="button" data-bs-target="#popularFilmCarousel" :data-bs-slide-to="index-1" :class="{active:index-1===currentPopularFilmPage}" v-for="index in 5"></button>
                    </div>
                </div>

                <div class="carousel-inner text-center">

                    <div class="carousel-item " data-bs-interval="3000" :class="{active:i-1===currentPopularFilmPage}" v-for="i in 5">
                        <film class="col-3 rounded-3" style="height:300px"  v-for="j in 3" :data="getPopularFilm(i,j)" />
                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#popularFilmCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#popularFilmCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <div id="topratingFilmCarousel" class="carousel slide mt-5" data-bs-ride="carousel" @click="foo">

                <div class="d-flex justify-content-between">
                    <div> Top rating</div>
                    <div class="carousel-indicators position-static m-0">
                        <button type="button" data-bs-target="#topratingFilmCarousel" :data-bs-slide-to="index-1" :class="{active:index-1===currentPopularFilmPage}" v-for="index in 5"></button>
                    </div>
                </div>

                <div class="carousel-inner text-center">

                    <div class="carousel-item " data-bs-interval="3000" :class="{active:i-1===currentPopularFilmPage}" v-for="i in 5">
                        <film class="col-3 rounded-3" style="height:300px"  v-for="j in 3" :data="getTop50Film(i,j)" />
                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#topratingFilmCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#topratingFilmCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        
        </div>
        `
}