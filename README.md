# 餐廳清單管理

***

可以將自己喜歡的餐廳記錄起來，以便管理自己的餐廳清單

# Installing

***

1.點擊右上的 Clone or download

2.複製 URL

3.開啟終端機輸入 git clone '剛剛複製的URL', 並按下 enter

4.終端機會開始跑 download , 待終端機出現 Done 後 , 表示下載完成

5.在終端機輸入 npm i init -y

6.輸入 cd models/seeds 找到種子資料夾

7.輸入 node restaurantSeeder.js 新增種子資料到資料庫

8.接著輸入 node app.js

9.伺服器會連接到 `http://localhost:3000`

10.在瀏覽器的網址上輸入 `http://localhost:3000` , 即可開始管理清單

# Features

***

+ 瀏覽自己歷年的喜愛餐廳

+ 可以新增及刪除清單

+ 點擊圖片或詳細資料可以瀏覽詳細資訊

+ 關鍵字搜尋片面的餐廳名稱

+ 餐廳資料更改可以點擊編輯修改

+ 排序方式按鈕有各種排序功能可選擇

+ 右上有登出功能

+ 加入facebook登入功能