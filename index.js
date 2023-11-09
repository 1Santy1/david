const XLSX = require('xlsx');
const fs = require('fs');

function swapColumns(sheet, col1, col2) {
    const range = XLSX.utils.decode_range(sheet['!ref']);
    for (let R = range.s.r; R <= range.e.r; R++) {
        const cell1 = sheet[col1 + (R + 1)];
        const cell2 = sheet[col2 + (R + 1)];

        if (cell1 && cell2) {
            const temp = cell1.v;
            cell1.v = cell2.v;
            cell2.v = temp;
        }
    }
}

const filename = 'e.xlsx'
const workbook = XLSX.readFile("WORK.xlsx");

const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const columnA = 'A';
const columnB = 'B';

swapColumns(sheet, columnA, columnB);
XLSX.writeFile(workbook, filename);

console.log('Столбцы поменяны местами');