    // 说明，封装了项目中常用的函数

    //1手机格式验证
    const phoneReg = (e) =>{
        let bankReg = /^[1][3,4,5,7,8][0-9]{9}$/
        if (!bankReg.test(e)){
          return false;
        } else {
          return true;
        }
    }

    //2身份证格式
    const cerReg = (card) =>{
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if(reg.test(card) === false) {
          return false
        }else{
          return true
        }
    }

    //3获取当前时间的时间戳
    const nowTimestamp = () =>{
      return Date.parse(new Date());
    }

    //4获取当前时间2018-07-12格式，
    const nowTime = () =>{
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if(month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if(strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }

    function padLeftZero(str) {
      return('00' + str).substr(str.length);
    }

    //5日期格式转换函数
    const formatDate = (date, fmt) => {
        if(/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
        };
        for(let k in o) {
          if(new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
          }
        }
        return fmt;
    }

    //6邮箱验证正则函数
    const emailReg = (e) =>{
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
        if (!reg.test(e)){
            return false;
        } else {
            return true;
        }
    }

    //7url验证正则函数
    const urlReg = (str_url) =>{
        var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
          + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
          + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
          + "|" // 允许IP和DOMAIN（域名）
          + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
          + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
          + "[a-z]{2,6})" // first level domain- .com or .museum
          + "(:[0-9]{1,4})?" // 端口- :80
          + "((/?)|" // a slash isn't required if there is no file name
          + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        var re=new RegExp(strRegex);
        //re.test()
        if (re.test(str_url)){
          return (true);
        }else{
          return (false);
        }
    }

    //8获取url参数函数,使用方法 例子http://localhost/index.html?q1=abc&q2=efg&q3=h
    // var qs = getQueryString(); var q1 = qs["q1"]得到abc

    const urlParams = () =>{
        var qs = location.search.substr(1), // 获取url中"?"符后的字串
          args = {}, // 保存参数数据的对象
          items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
          item = null,
          len = items.length;

        for(var i = 0; i < len; i++) {
          item = items[i].split("=");
          var name = decodeURIComponent(item[0]),
            value = decodeURIComponent(item[1]);
          if(name) {
            args[name] = value;
          }
        }
        return args
    }


    //9根据身份证计算年龄
    const cerAge = (identityCard) =>{
        var len = (identityCard + "").length;
        if (len == 0) {
          return 0;
        } else {
          if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
          {
            return 0;
          }
        }
        var strBirthday = "";
        if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
        {
          strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
        }
        if (len == 15) {
          strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
        }
        //时间字符串里，必须是“/”
        var birthDate = new Date(strBirthday);
        var nowDateTime = new Date();
        var age = nowDateTime.getFullYear() - birthDate.getFullYear();
        //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
        if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
    }
    //11获取浏览器高度
    const viewHeight = () =>{
      if (typeof window.innerHeight !== 'undefined') {
          return window.innerHeight
      } else {
          return document.documentElement.clientHeight
      }
    }
    //12获取浏览器宽度
    const viewWidth = () =>{
      if (typeof window.innerWidth !== 'undefined') {
        return window.innerWidth
      } else {
        //兼容safira
        return document.documentElement.clientWidth
      }
    }
    //13单页面动态设置微信标题
    const setWxTitle = (title) => {
      document.title = title;
      let ua = navigator.userAgent;
      //兼容ios567
      if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        var i = document.createElement('iframe');
        i.src = '/favicon.ico';
        i.style.display = 'none';
        i.onload = function () {
          setTimeout(function () {
            i.remove();
          }, 9);
        };
        document.body.appendChild(i);
      }
    };


    //14js加密(手机暂不封装)
    //15公共提示，通知(手机暂不封装)
    //16上拉下拉(手机暂不封装)
    //对象存localhost必须转字符串

    //17银行卡验证
    const bankCardRed = (e) =>{
      let bankReg = /^\d{16}|\d{19}$/
      if (!bankReg.test(e)) {
        return false;
      } else {
        return true;
      }

    }

    //18编码
    const EU = (url) =>{
        return encodeURI(url)
    }


    //19解码
    const DU = (url) =>{
        return decodeURI(url)
    }

    //20解析json
    const JP = (json) =>{
        return JSON.parse(json)
    }


    //21转json
    const JZ = (json) =>{
        return JSON.stringify(json)
    }


    //22转整数
    const PINT = (e) =>{
        return parseInt(e)
    }

    //23保留几位小数
    const dot = (num,decimal) =>{
        return num.toFixed(decimal)
    }
    //四舍五入
    const round = (e) =>{
        return Math.round(e)
    }
    //向上取整
    const ceil = (e) =>{
        return Math.ceil(e)
    }
    //向下取整
    const floor = (e) =>{
        return Math.floor(e)
    }
    //24路由跳转
    const goPage = (page)=>{
        this.$router.push({
          path: page
        })
    }
    //25路由get穿参
    const goPageGet = (page,query)=>{
      this.$router.push({
        path: page,
        query:query
      })
    }

    //26路由post穿参
    const goPagePost = (page,params)=>{
      this.$router.push({
        path: page,
        params:params
      })
    }
    //缓存函数
    const S = (name,data)=>{
      localStorage.setItem(name,data)
    }
    const G = (name)=>{
      return localStorage.getItem(name)
    }
    const UTILS = {
        phoneReg,
        cerReg,
        nowTimestamp,
        nowTime,
        formatDate,
        emailReg,
        urlReg,
        urlParams,
        cerAge,
        setWxTitle,
        viewHeight,
        viewWidth,
        bankCardRed,
        goPagePost,
        goPageGet,
        goPage,
        floor,
        ceil,
        round,
        PINT,
        dot,
        JZ,
        JP,
        EU,
        DU,
        S,
        G
    }

    export default UTILS


