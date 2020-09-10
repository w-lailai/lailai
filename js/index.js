/**
 * Created by Lebron James on 2018/6/7.
 */
//搜索框特效
window.onload = function () {
    function iptText() {
        var ipt = document.getElementById("ipt");
        var flag = true;
        ipt.onfocus = function () {
            if (ipt.value === "苹果电脑" && flag == true) {
                ipt.value = "";
                flag = false;
                console.log(ipt.value);
                console.log(flag);
            }
        }
        ipt.onblur = function () {
            if (this.value === "" && flag == false) {
                this.value = "苹果电脑"
                flag = true;
                console.log(ipt.value);
                console.log(flag);
            }
        }
    }

    iptText();


    var banner = new FragmentBanner({
      container : "#banner1",//选择容器 必选
      imgs : ['upload/focus1.jpg','upload/focus2.jpg','upload/focus3.jpg','upload/focus4.jpg','upload/focus5.jpg','upload/focus6.jpg','upload/focus7.jpg','upload/focus8.jpg'],//图片集合 必选
      size : {
        width : 720,
        height : 455
      },//容器的大小 可选
      //行数与列数 可选
      grid : {
        line : 12,
        list : 14
      },
      index: 0,//图片集合的索引位置 可选
      type : 2,//切换类型 1 ， 2 可选
      boxTime : 4000,//小方块来回运动的时长 可选
      fnTime : 15000//banner切换的时长 可选
    });     

    
}


