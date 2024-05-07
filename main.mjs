import { app, BrowserWindow } from "electron";
import path from "node:path";

// 由于 ESM 中不存在 __dirname, 此处自实现
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// app 控制应用程序的生命周期
// BrowserWindow 创建和管理应用程序窗口

const createWindow = () => {
    // 创建一个 BrowserWindow 实例
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // 通过预加载脚本访问 node 功能
        webPreferences: {
            // __dirname 当前正在执行脚本的路径
            // path.join 路径拼接，创建一个跨平台路径字符串
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadFile("index.html");
};

app.whenReady().then(() => {
    createWindow();
    // macos，点击关闭后仍后台运行，确保再次激活时打开新窗口
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length == 0) createWindow();
    });
});

// 排除 macos，点击关闭即退出
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
