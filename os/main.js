const { getOsInfo, checkFreeMemory, checkAccessMode } = require('./index');

checkFreeMemory();
checkAccessMode(getOsInfo);