const os = require('os');

function getOsInfo() {
  const platform = os.platform();
  const freeMemory = os.freemem();
  const homeDir = os.homedir();
  const username = os.userInfo().username;
  const networkInterfaces = os.networkInterfaces();

  console.log('Платформа:', platform);
  console.log('Свободная память:', freeMemory / 1024 / 1024, 'MB');
  console.log('Главная директория:', homeDir);
  console.log('Имя пользователя:', username);
  console.log('Интерфейсы сети:', networkInterfaces);
}

module.exports.getOsInfo = getOsInfo;

function checkFreeMemory() {
    const freeMemory = os.freemem();
    const isEnoughMemory = freeMemory > 4 * 1024 * 1024 * 1024; 
  
    if (isEnoughMemory) {
      console.log('Свободной памяти достаточно.');
    } else {
      console.log('Свободной памяти недостаточно.');
    }
  }
  
  module.exports.checkFreeMemory = checkFreeMemory;

  require('dotenv').config();

function checkAccessMode(getOsInfo) {
  const mode = process.env.MODE;

  if (mode === 'admin') {
    console.log('Режим администратора. Выполняю функцию...');
    getOsInfo();
  } else {
    console.log('Доступ запрещен.');
  }
}

module.exports.checkAccessMode = checkAccessMode;