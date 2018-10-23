const {app, BrowserWindow} = require('electron');

app.on('ready',() =>{
    let mainWindow = new BrowserWindow({
        wdith:1920,
        height:1080
    });
    mainWindow.loadFile('index.html');
    mainWindow.on('closed',() => {
        mainwindow = null;
    });
});