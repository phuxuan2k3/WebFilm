export default {
    data() {
        return {

        }
    },
    inject: {
        searchFilm: {
            from: `searchFilm`
        },
    }
    ,
    template: `

    <div>
         <div class=" m-3 col-2 d-inline-block" style="height:300px" v-for="(item,index) in searchFilm">
        <img style="height:80%; width:100%" :src="item.image" @click="$emit('detailFilm',item)" alt="...">
         <span style="height:20%; width:100%" class="card ">
                {{item.fullTitle}}
            </span>
        </div>

    </div>

         `
}