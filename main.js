const { app, BrowserWindow } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('node:path')

// modify your existing createWindow() function
const createNewWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
}

app.whenReady().then(() => {
    createNewWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createNewWindow();
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')  app.quit();
})

