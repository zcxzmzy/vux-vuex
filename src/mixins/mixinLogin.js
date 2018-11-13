
export default {
  methods:{
    hasLogin(){
      if(!this.G('userNo')){
        this.$router.push({
          path:'login'
        })
        return false
      }else{
        return true
      }
    }
  }
}
