export interface IExcelObj {
  [key: string]: any;
}
export type ExcelData = IExcelObj[];

export interface IExcelConfig {
  excelInputPath: string;
  excelOutputDir: string;
  excelOutputFileName: string;
  caseSheetName: string;
  translator: { [key: string]: string };
  excelStartRow: number;
}
