// needed this for an election validation based on a list of valid registration numbers
function deleteInvalidRegistrations() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  // valid values are the registration numbers that are allowed
  var validValues = [
    "12032",
    "12036",
    "12040",
    "19331",
    "1093012",
    "103012",
    "102012",
  ];

  var columnToCheck = 1; // assuming my reg numbers are column B

  // i starts from 1, cos - 0 is the header [ form question]
  for (var i = data.length - 1; i >= 1; i--) {
    if (!validValues.includes(data[i][columnToCheck].toString())) {
      sheet.deleteRow(i + 1);
    }
  }
}
