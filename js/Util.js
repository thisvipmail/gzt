/**
 * Created by Administrator on 2017/7/21.
 */

const util = (function(){
    return {
        /**
         * 获取年
         * @param time
         */
        getYear:function(time){
            time = time || new Date();
            if(typeof  time === "string"){
                time = Date.parse(time);
                if(isNaN(time)){
                    throw new Error("时间字符串格式不正确！");
                }
            }
            if(typeof time === "number"){
                time = new Date(time)
            }
            return time.getFullYear();
        },
        /**
         * 获取月
         * @param time
         */
        getMonth:function(time){
            time = time || new Date();
            if(typeof  time === "string"){
                time = Date.parse(time);
                if(isNaN(time)){
                    throw new Error("时间字符串格式不正确！");
                }
            }
            if(typeof time === "number"){
                time = new Date(time)
            }
            return time.getMonth() + 1;
        },
        /**
         * 获取旬
         * @param time
         */
        getTen:function(time){
            time = time || new Date();
            if(typeof  time === "string"){
                time = Date.parse(time);
                if(isNaN(time)){
                    throw new Error("时间字符串格式不正确！");
                }
            }
            if(typeof time === "number"){
                time = new Date(time)
            }
            let date = time.getDate();
            return date < 11 ? "01" : date < 21 ? '02' : '03';
        },
        /**
         * 显示等待
         */
        showWaiting:function(){
            waitModal.modal({backdrop: 'static', keyboard: false});
        },
        /**
         * 隐藏等待
         */
        hideWaiting:function(){
            waitModal.modal('hide');
        }
    }
})()


