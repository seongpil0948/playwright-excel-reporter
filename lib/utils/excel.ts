/* eslint-disable no-console */
import * as fs from 'fs';
import * as XLSX from 'xlsx';

export function readWBook(path = 'wise_life_doctor.xlsx') {
  if (!fs.existsSync(path)) return null;
  const workBook = XLSX.readFile(path);
  const sheetNames = workBook.SheetNames; // @details 첫번째 시트 정보 추출
  const getSheetByName = (sheetName: string) => workBook.Sheets[sheetName];
  return {
    workBook,
    sheetNames,
    getSheetByName,
  };
}
export function sheetToAoa(sheet: XLSX.WorkSheet, defval = '') {
  const jsonArr = XLSX.utils.sheet_to_json<any[]>(sheet, {
    header: 1,
    defval,
  });
  return jsonArr;
}
