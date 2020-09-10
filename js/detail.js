/**
 * Created by Lebron James on 2018/6/7.
 */

window.onload = function () {
    //�ֻ�tab��Ч
    function phoneTab() {
        //��ȡ����li��ǩ
        var list_item = document.getElementById("list_item");
        var list_item_lis = list_item.children;
        //��ȡ��ͼƬ
        var bigBox_img = document.getElementById("bigBox_img");
        //��ȡ��ͼƬ��ǩ
        var bigImg = document.getElementById("bigImg");
        for (var i = 0; i < list_item_lis.length; i++) {
            var li = list_item_lis[i];
            li.aaa = i + 1;
            li.onmouseenter = function () {
                bigImg.src = 'upload/iphoneX' + this.aaa + '.jpg';
                bigBox_img.src = 'upload/bigImg' + this.aaa + '.jpg'
                for (var i = 0; i < list_item_lis.length; i++) {
                    var li = list_item_lis[i];
                    li.className = "";
                }
                this.className = "current";
            }
        }
    }

    //�Ŵ�
    function fangDaJing() {
        var product_intro = document.getElementById("product_intro");
        //��ȡpreview_img����
        var preview_img = document.getElementById("preview_img");
        //��ȡСͼƬ
        var bigImg = document.getElementById("bigImg");
        //��ȡ�ڸǲ�
        var mask = document.getElementById("mask");

        //��ȡ�����
        var bigBox = document.getElementById("bigBox");

        preview_img.onmouseenter = function () {
            mask.style.display = "block";
            bigBox.style.display = "block";
        }
        preview_img.onmouseleave = function () {
            mask.style.display = "none";
            bigBox.style.display = "none";
        }
        preview_img.onmousemove = function (e) {
            e = e || window.event;
            var maskX = e.pageX - product_intro.offsetLeft;
            var maskY = e.pageY - product_intro.offsetTop;
            maskX = maskX - mask.offsetWidth / 2;
            maskY = maskY - mask.offsetHeight / 2;
            maskX = maskX < 0 ? 0 : maskX;
            maskY = maskY < 0 ? 0 : maskY;

            maskX = maskX > preview_img.offsetWidth - mask.offsetWidth ? preview_img.offsetWidth - mask.offsetWidth : maskX;
            maskY = maskY > preview_img.offsetHeight - mask.offsetHeight ? preview_img.offsetHeight - mask.offsetHeight : maskY;
            mask.style.left = maskX + "px";
            mask.style.top = maskY + "px";

            // mask�ƶ��ľ��� / mask����ܹ��ƶ��ľ���  = ��ͼƬ�ƶ��ľ��� / ��ͼƬ����ܹ��ƶ��ľ���

            // mask����ܹ��ƶ��ľ���
            var maskMax = preview_img.offsetWidth - mask.offsetWidth;
            // ��ͼƬ����ܹ��ƶ��ľ���
            var bigImageMax = bigBox_img.offsetWidth - bigBox.offsetWidth;

            var bigImageX = maskX * bigImageMax / maskMax;
            var bigImageY = maskY * bigImageMax / maskMax;

            bigBox_img.style.left = -bigImageX + 'px';
            bigBox_img.style.top = -bigImageY + 'px';
        }
    }

    //tab���л�
    function fenLeiTab() {
        var tab_list = document.getElementById("tab_list");
        var tab_list_ul = tab_list.children[0];
        var tab_list_lis = tab_list_ul.children;

        var tab_con = document.getElementById("tab_con");
        var tab_con_ul = tab_con.children

        for (var i = 0; i < tab_list_lis.length; i++) {
            var li = tab_list_lis[i];
            li.index = i;
            li.onclick = function () {
                for (var i = 0; i < tab_list_lis.length; i++) {
                    var li = tab_list_lis[i];
                    var ul = tab_con_ul[i]
                    console.log(ul);
                    li.className = li.className.replace("current", "");
                    ul.className = "";
                }
                this.className = this.className + " current";
                console.log(this.index);
                tab_con_ul[this.index].className = "hide";
            }
        }
    }

    //�������
    function priceCount() {
        var choose_amount = document.getElementById('choose_amount');
        var iptNum = choose_amount.children[0];
        var add = choose_amount.children[1];
        var reduce = choose_amount.children[2];
        var number = 1;
        add.onclick = function () {
            iptNum.value = ++number;
            if (iptNum.value > 1) {
                reduce.style.cursor = "pointer";
            }
        }

        reduce.onclick = function () {
            if (iptNum.value > 1) {
                iptNum.value = --number;
                if (iptNum.value == 1) {
                    reduce.style.cursor = "not-allowed";
                }
            }
        }

    }


    function detaiTab() {
        var detail_tab_list = document.querySelector("#detail_tab_list");
        var detail_tab_con = document.querySelector("#detail_tab_con");
        var detailLis = detail_tab_list.children[0].children;
        var detailDivs = detail_tab_con.children;
        for (var i = 0; i < detailLis.length; i++) {
            detailLis[i].index = i;
            detailLis[i].onclick = function () {
                for (var i = 0; i < detailLis.length; i++) {
                    detailLis[i].className = "";
                    detailDivs[i].style.display = "none";
                }
                this.className = "current";
                detailDivs[this.index].style.display = "block";
            }
        }

    }
    phoneTab();
    fangDaJing();
    fenLeiTab();
    priceCount();
    detaiTab();
}