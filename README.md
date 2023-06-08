# Playwright Excel Reporter &middot; [![npm version](https://img.shields.io/npm/v/playwright-excel-reporter.svg?style=flat)](https://www.npmjs.com/package/playwright-excel-reporter)
Playwright Custom Reporter Library.  
Provides the ability to output test results to Excel(SheetJs)

## Examples
[Custom Reporter](https://playwright.dev/docs/test-reporters). Here is the first one to get you started:

```ts
// playwright.config.ts
import type { IExcelConfig } from 'playwright-excel-reporter'
export default defineConfig({
  reporter: [
    ['html', {
      outputFolder: 'playwright-result-html',
      outputFile: 'result.html',
    }],
    ['playwright-excel-reporter', {
      excelInputPath: 'test/asset/unit-test-case.xlsx',
      excelStartRow: 0,
      caseSheetName: '블라인드',
    } as Partial<IExcelConfig>],
  ],
})
```
이 설정은 Playwright 테스트가 종료 되었을때
`test/asset/unit-test-case.xlsx` 엑셀 파일의 `블라인드` 시트의 0번째 row에 테스트의 결과를 기록하여 `excel-reporter-result/result.xlsx` 경로에 저장합니다.

result of the test in the 0th row of the `블라인드` sheet in the `test/asset/unit-test-case.xlsx` excel file and save it in the `excel-reporter-result/result.xlsx` path.


# Issue
### Package name
Error setting package name @abacus/playwright-excel-reporter
- npm determines that abacus org and causes authentication to fail.
- I checked that both npm and github packages are not working