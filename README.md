1. 本專案需要套件:
   # 安裝 LINE Bot SDK v8、Next.js、TypeScript 等主程式套件
    npm install @line/bot-sdk

    # 安裝開發工具
    npm install -D typescript ts-node

    # 安裝 Jest + TypeScript 支援
    npm install -D jest ts-jest @types/jest

    # 若使用 ES module 風格，可加入以下支援轉譯
    npm install -D babel-jest @babel/preset-env @babel/preset-typescript

2. 在next.js框架下，請提供 一個結構化的lint bot 適用於linebot sdk v8以上的範例，其中包含處理follow, unfollow, text message, icon message, post back 等Event，以及送出可以做post back action 的回應，在這個架構上，我還要 拆出 service 層、加上 log middlewares、以及測試案例

3. MessagingApiClient 在 line bot sdk V8中, 不可以直接被使用, 請重新整理一份完整V8的正確版本

4. 新增一個 services\replyService.ts 的測試程式    npm run test

5. 新增 push message 功能       
   功能測試: browser:  http://localhost:3000/api/push-test?userId=xxxx&message=Hello