const electron = require('electron');
const { app, BrowserWindow, ipcMain, shell } = electron;

var mainWindow;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		height: 400,
		width: 450
	});
	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

ipcMain.on('show-chart', function(event){
	let win = new BrowserWindow({
		height: 730,
		width: 650
	});
	win.loadURL(`file://${__dirname}/app/time-chart.html`);
});