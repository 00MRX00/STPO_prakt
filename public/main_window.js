const _ = require('lodash');
const { BrowserWindow } = require('electron');

module.exports = (options = {}) => {
    _.defaultsDeep(options, {
        width: 800,
        height: 440,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    let win = new BrowserWindow(options);

    win.on('closed', () => {
        win = null;
    })

    win.setMenuBarVisibility(false)

    return win;
}