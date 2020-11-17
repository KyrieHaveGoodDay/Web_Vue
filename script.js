new Vue({
    el:"#content",
    data:{
        datas:null
    },
     // 顯示所有元素後執行
    mounted(){
        // 新增 XML 物件
        var xhr = new XMLHttpRequest();

        // 開啟 JSON 資料
        xhr.open("GET","./datas.json");
    
        // 傳送需求並取得資料
        xhr.send();
        // 載入完成後
        xhr.onload = () => {

            // 將 JSON 資料資料轉為物件
            var obj = JSON.parse(xhr.responseText);
            this.datas = obj.result.records;
            console.log(obj);
        }
    }
    
});

console.log("!!!")