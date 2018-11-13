
export default {
  methods:{
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
    },
    getFile(e,src,isShow,fileNameArg,callBack) {
      let _this = this
      var file = e.target.files[0]
      if (!e || !window.FileReader) return
      let reader = new FileReader()
      var img = new Image()
      reader.readAsDataURL(file)
      reader.onload = function () {
        img.src = this.result
      }

      var width = 360
      var quality = 0.8
      var canvas = document.createElement('canvas')
      var drawer = canvas.getContext('2d')
      var base64
      var fileData
      img.onload = function() {
        canvas.width = width
        canvas.height = width * (img.height / img.width)
        drawer.drawImage(img, 0, 0, canvas.width, canvas.height)
        base64 = canvas.toDataURL('image/jpeg', quality)
        fileData = _this.dataURLtoFile(base64,file.name)
        _this[src] = base64
        _this.upload(fileData,isShow,fileNameArg,callBack)
      }
    },
    upload(e,isShow,fileNameArg,callBack){
      var myTime = new Date();
      var iYear = myTime.getFullYear();
      var iMonth = myTime.getMonth()+1;
      var iDate = myTime.getDate();
      var iHours = myTime.getHours();
      var iMin = myTime.getMinutes();
      var iSec = myTime.getSeconds();
      var TDATE = '';

      TDATE = iYear+'-'+iMonth+'-'+iDate+iHours+iMin+iSec;
      var FEName=e.name;
      var suffix=FEName.substring(FEName.lastIndexOf('.'));
      var client = new OSS.Wrapper({
        accessKeyId:localStorage.getItem('AccessKeyId'),
        accessKeySecret:localStorage.getItem('AccessKeySecret'),
        stsToken:localStorage.getItem('SecurityToken'),
        endpoint:'oss-cn-beijing.aliyuncs.com',
        bucket:'xhqphoto'
      });
      this.$vux.loading.show({
        text: '加载中...'
      })
      let _this = this
      client.multipartUpload('ccd/'+TDATE+suffix,e).then(function (result){
        let name = result.name
        _this[fileNameArg] = name
        localStorage.setItem(fileNameArg,name)
        _this[isShow] = false
        _this.$vux.loading.hide()
        if(typeof callBack === 'function'){
          callBack()
        }
      }).catch(function (err){
        console.log(11111)
      });
    },
  }
}
