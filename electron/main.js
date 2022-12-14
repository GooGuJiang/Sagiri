// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// 引入node的 path 和url模块
const path = require('path')
const url = require('url');
// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];

function createWindow () {
  // Create the browser window.
  //判断是否是开发模式 
  if(mode === 'dev') { 
    const mainWindow = new BrowserWindow({
      width: 1000,
      height: 630,
      minWidth: 800,
      minHeight: 600,
      title:"Sagiri DEV",
      frame:true,
      //titleBarStyle: 'hidden',
      //titleBarOverlay: true,
      webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js')
      }
    })
    
    mainWindow.loadURL("http://localhost:3000/");
    mainWindow.on('ready-to-show', () => {
      mainWindow.show();
      mainWindow.focus();
    });
  } else { 
    const mainWindow = new BrowserWindow({
      width: 1000,
      height: 630,
      minWidth: 800,
      minHeight: 600,
      title:"Sagiri",
      //frame: false,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be',
        height: 30
      },
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    mainWindow.loadURL(path.join("file://", __dirname, "/build/index.html"));
    //mainWindow.loadURL(url.format({
    //  pathname:path.join(__dirname, './build/index.html'), 
    //  protocol:'file:', 
    //  slashes:true 
    //}))
  }


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
