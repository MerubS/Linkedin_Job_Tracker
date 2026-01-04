function doGet(e) {
  return ContentService.createTextOutput("Webhook is live")
}

function doPost(e) {
  const spreedsheet = SpreadsheetApp.openById("1KQTbTiUhvClr0BXrjtiULT_vB8WTR6QDXDoJgy0uhiM").getActiveSheet();
  const data = JSON.parse(e.postData.contents)

  if(spreedsheet.getLastRow() === 0){
    spreedsheet.appendRow(["Company Name","Title","Location","Mode","Salary","URL"])
  }

  const lastRow = spreedsheet.getLastRow()
  if (lastRow > 1) {
    urlColumn = 6
    const exisitingURL = spreedsheet.getRange(2,urlColumn, lastRow - 1, 1 ).getValues();

    const isDuplicate = exisitingURL.some(row => row[0] === data.url);
    if(isDuplicate) {
      return ContentService.createTextOutput("Job already recorded")
    }
  }

  spreedsheet.appendRow([
    data.title,
    data.company,
    data.location,
    data.mode,
    data.salary,
    data.url
  ])

  return ContentService.createTextOutput("Success")
}
