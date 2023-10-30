export default {
    data() {
        return {
        }
    }
    ,
    inject: {
        darkMode: {
            from: `darkMode`
        },
        detailFilm: {
            from: `detailFilm`
        },
        reviewFilm: {
            from: `reviewFilm`
        }
    },
    methods: {

    },
    computed: {
        hasImages() {
            try {
                const tmp = this.detailFilm.images;
                if (tmp) {
                    return true;
                }
            } catch (err) {
                return false;
            }
        },
        DarkMode() {
            if (this.darkMode) {
                return 'dark';
            }
            return 'light';
        }
    },
    props: []
    ,
    template: ` 
        <div>
        <h1>  {{detailFilm.fullTitle}}</h1>
        <h4>{{detailFilm.title}}</h4>
        <img :src=" detailFilm.image" alt="..." class="col-6 m-auto d-block" style = "height:500px">
             <div v-if="hasImages"  id="filmImage" class="carousel slide">
                 <div class="m-2"> Film Image</div>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#filmImage" :data-bs-slide-to="index" :class="{active:index===0}" v-for="(item, index) in detailFilm.images"></button>
                </div>
                <div class="carousel-inner text-center">
                    <div  data-bs-interval="3000" class="carousel-item" :class="{active:index===0}" v-for="(item,index) in detailFilm.images">
                         <img :src="item.image" alt="..." class="col-6" style = "height:500px">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#filmImage" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#filmImage" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


             <div v-if="hasImages"  id="actorImage" class="carousel slide">
                 <div class="m-2"> Actors</div>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#actorImage" :data-bs-slide-to="index" :class="{active:index===0}" v-for="(item, index) in detailFilm.actorList"></button>
                </div>
                <div class="carousel-inner text-center">
                    <div  data-bs-interval="3000" class="carousel-item" :class="{active:index===0}" v-for="(item,index) in detailFilm.actorList">
                         <div class="d-flex flex-column col-5 m-auto">  
                            <img :src="item.image" alt="..." style = "width:100%;height:500px">
                             <span class="card d-flex">
                             {{item.name}}
                            </span>
                    
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#actorImage" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#actorImage" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            

            <div v-if="hasImages">
                <div class="m-2" > Director</div>
                <div class="d-flex flex-column col-5 m-auto">
                                <span class="card d-flex"  v-for="(item,index) in detailFilm.directorList">
                                {{item.name}}
                                </span>
                </div>
            </div>

             <div v-if="hasImages">
                <div class="card m-2" :data-bs-theme="DarkMode">
                    <div class="card-header">
                        Plot
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>{{detailFilm.plot}}</p>
                        </blockquote>
                    </div>
                    </div>
            </div>



         <div v-if="hasImages">
                <div class="card m-2" :data-bs-theme="DarkMode">
                    <div class="card-header">
                        Type
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>{{detailFilm.type}}</p>
                        </blockquote>
                    </div>
                    </div>
            </div>



        <div v-if="hasImages">
                <div class="card m-2" :data-bs-theme="DarkMode">
                    <div class="card-header">
                        Year
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>{{detailFilm.year}}</p>
                        </blockquote>
                    </div>
                    </div>
            </div>





                    <div >
                            <div class="alert alert-danger" role="alert">
                            Review
                            </div>
                              <div class="card m-2" v-if="reviewFilm" v-for="(item,index) in reviewFilm" :data-bs-theme="DarkMode">
                            <div class="card-header">
                                Review {{index+1}}
                            </div>
                            <div class="card-body">
                                <p style="font-size:20px">{{item.content}}</p>
                            </div>
                        </div>
                     </div>





            <div>

            </div>

        </div>
        `
}