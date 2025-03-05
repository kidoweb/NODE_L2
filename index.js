require('dotenv').config();

const firstName = process.env.FIRST_NAME;
const lastName = process.env.LAST_NAME;
const groupNumber = process.env.GROUP_NUMBER;
const listNumber = process.env.LIST_NUMBER;

console.log(`Имя: ${firstName}`);
console.log(`Фамилия: ${lastName}`);
console.log(`Группа: ${groupNumber}`);
console.log(`Номер в списке: ${listNumber}`);