console.log('JS OK');

const app = new Vue ({
    el : '#app',
    data(){
        return {
            discMusic: [],
        }
    },
    mounted(){
        axios
        .get('album.php')
        .then((result)=>{
            console.log(result)
            this.discMusic = result.data
        })
    }
})