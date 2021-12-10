# 隨機迷宮遊戲

## [點擊進入迷宮遊戲](https://chiuweichung.github.io/MazeGame/)

* 使用 TypeScript 結合 React & Redux 建立 SPA
* 使用 Scss 預處理器進行版面佈局
* 建立 **圖 (Graph)** 之資料結構以產生隨機迷宮

![maze-game](https://github.com/ChiuWeiChung/IMGTANK/blob/main/portfolio/maze-game/maze-game.gif?raw=true)

這個小遊戲主要是用來練習 TypeScript 在 React 上的運用，雖然過程中需要不厭其煩的引用 Interface、Types，但好處就是執行時出現的報錯減少了。另外也用來練習 Scss，以增加對該處理器的熟悉程度。

另外在產生隨機迷宮的部分，由於之前學習過 [Graph 資料結構](https://github.com/ChiuWeiChung/notes-markdown/blob/main/data%20structure%26algorithm/data-structure/graph/note.markdown)，該結構可以用來建立不同位置之間的關係，並進行兩點路徑的計算，因此想說拿來建立迷宮可能是其中一種方法。