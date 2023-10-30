export default {
    data() {
        return {
            upHere: false
        }
    }
    ,
    methods: {
        foo() {
            //console.log(this.data);
        },
        imgFilm() {
            try {
                return this.data.image;
            }
            catch (err) {

            }

        },
        sendRequestDetail() {
            this.$emit('detailFilm',this.data);
        }
    },
    computed: {
        fullTitleFilm() {
            if (this.data) {
                return this.data.fullTitle;
            }
            return "";
        }
    },
    props: ['data', 'isImportant']
    ,
    template: ` 
        <div class="d-flex flex-column">
        <img :src="imgFilm()" @click="sendRequestDetail" alt="..."  @mouseover="upHere = true" @mouseleave="upHere = false"  :class='{big:upHere,small:!upHere}'>
        <Transition name="fade">
         <span v-if="upHere" class="card d-inline">
                {{fullTitleFilm}}
            </span>
        </Transition>
        </div>
        `
}