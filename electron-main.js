const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    backgroundColor: '#080B10',
    titleBarStyle: 'hiddenInset',
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, 'web', 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });