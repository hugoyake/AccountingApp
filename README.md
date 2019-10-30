# AccountingApp
Hi，這是一個記帳app，是我用來練習vuex的，並加入vuetify及chartjs，以簡化專案的css需求

> cd project
> 
>  npm install
>   
>  npm  run serve

使用上，我盡量簡潔，但不失資訊量。每一個記帳的條目可以包含：金額、事件、重要性、日期、以及一段作為note的文字。

>事件和重要性的 ***json*** 檔我放在 ***src/event/*** 下

![image]((https://github.com/hugoyake/AccountingApp/blob/master/picture/input.png))

其中，重要性指的是艾森豪威爾法則，也就將事情分成重要且緊急、重要不緊急、不重要但緊急，和不重要不緊急的方法。我也是後來才知道這叫做艾森豪威爾法則，之前都稱呼它為 "那四個象限"。這比艾森豪威爾好記多了。

建立條目後，會顯示一塊字卡：


![image](https://github.com/hugoyake/AccountingApp/blob/master/picture/card.png)

這樣便建完了。

另外，可以點 ***financial analysis*** 這個按鈕，長這個樣子：

![image](https://github.com/hugoyake/AccountingApp/blob/master/picture/openChart.png)

它會開啟一個相當簡單的圖表，分別代表事件和重要性跑出的圓餅圖。接著點右上角的 ***RELOAD*** 按鈕，圓餅圖就會刷新，更新成包含新建條目的狀態。