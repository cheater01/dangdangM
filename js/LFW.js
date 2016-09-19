/**
 * Created by Cheater01 on 2016/9/17.
 */
//定义框架对象
var $L=function(){};

$L.prototype={
    extend:function(tar,source){
        for(var i in source)
        {
            tar[i]=source[i];
        }
        return tar;
    }
}
//实例化对象
$L=new $L();

//基本功能
$L.extend($L,{
    random:function(begin,end){
        return Math.floor(Math.random()*(end-begin)+begin);
    }
});

//类型判断
$L.extend($L,{
    isNumber:function(val){
      return typeof val==="number"&&isFinite(val);
    },
    isBoolean:function(val)
    {
        return typeof val==="boolean";
    },
    isString:function(val)
    {
        return typeof val==="string";
    }
});
//事件框架
$L.extend($L,{
    on:function(id,type,fn){
        var dom=$L.isString(id)?document.getElementById(id):id;
        if(dom.addEventListener)
        {
            dom.addEventListener(type,fn,false);
        }
        else if(dom.attachEvent)
        {
            dom.attachEvent("on"+type,fn);
        }
    },
    click:function(id,fn)
    {
        this.on(id,'click',fn);
    },
    getEvent:function(e)
    {
        return e?e:window.event;
    },
    getTarget:function(e)
    {
        var event=getEvent(e);
        return event.target||event.srcElement;
    }
});

//选择框架
$L.extend($L,{
    $id:function(str){
        return document.getElementById(str);
    },
    $tag:function(tag)
    {
        return document.getElementsByTagName(tag);
    },
    $all:function(selector,content)
    {
        content=content||document;
        return content.querySelectorAll(selector);
    }
});



//css框架
$L.extend($L,{
    css:function(context,key,value)
    {
        var dom=$L.isString(context)?$L.$all(context):context;
        if(dom.length)
        {
            if(value)
            {
                for(var i=dom.length-1;i>=0;i--){
                    setStyle(dom[i],key,value);
                }
            }
            else
            {
                return getStyle(dom[0]);
            }
        }
        else
        {
            if(value)
            {
                setStyle(dom,key,value);
            }
            else
            {
                return getStyle(dom);
            }
        }
        function getStyle(dom)
        {
            if(dom.currentStyle)
            {
                return dom.currentStyle[key];
            }
            else
            {
                return getComputedStyle(dom,null)[key];
            }
        }
        function setStyle(dom,key,value)
        {
            dom.style[key]=value;
        }
    }


});







