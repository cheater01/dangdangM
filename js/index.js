/**
 * Created by Cheater01 on 2016/9/17.
 */
(function(document){
    //关闭广告页面
    $L.click($L.$id("closeAd"),function(){
        $L.css($L.$id("ad"),"display","none");
    })

    //轮播图
    var bannerUl=$L.$id("banner");
    var img=bannerUl.children[0].children[0];
    var width=img.width;
    var timer=null;
    var index=0;
    timer=setInterval(function(){
        index++;
        if(index>=6)
        {
            index=0;
        }
        //width=img.width;
        bannerUl.style["left"]=-width*index+"px";
    },2000);

}(document));
