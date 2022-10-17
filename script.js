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
        .get('disk.php')
        .then((result)=>{
            console.log(result.data)
            this.containerMusic = result.data
        })
    }
})