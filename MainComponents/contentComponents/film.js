export default {
    data() {
        return {
        }
    }
    ,
    methods: {
        foo() {
            console.log(this.data);
        },
        parseData() {
            try {
                return this.data.image;
            }
            catch (err) {

            }

        }
    },
    props: ['data']
    ,
    template: ` <img :src="parseData()" @click="foo" alt="...">
`
}