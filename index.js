const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Créer la fenêtre de navigation.
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 400,
    webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    }
  })

  // et charger l'index.html de l'application.
  mainWindow.loadFile('index.html')
  mainWindow.setAlwaysOnTop(true)
  mainWindow.setMenu(null)
  mainWindow.setOpacity(0.5)

  // Ouvrir les outils de développement.
  // mainWindow.webContents.openDevTools()
}

// Cette méthode sera appelée quand Electron aura fini
// de s'initialiser et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // Sur macOS il est d'usage de recréer une fenêtre dans l'application quand
    // l'icône du dock est cliquée et qu'il n'y a pas d'autre fenêtre ouverte.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS. Sur macOS, il est courant
// pour les applications et leur barre de menu de rester actives jusqu’à ce que l’utilisateur quitte
// explicitement avec Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})