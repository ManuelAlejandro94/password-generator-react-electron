const { app, BrowserWindow } = require('electron');
const path = require('path');

require('@electron/remote/main').initialize()

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    /* mainWindow.loadFile(path.join(__dirname, 'public/index.html')); */
    mainWindow.loadURL(
        'http://localhost:3000',
        path.join(__dirname, 'public/index.html')
    )
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});