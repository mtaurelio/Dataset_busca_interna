function defineStructure() {}
function onSync(lastSyncDate) {}
function createDataset(fields, constraints, sortFields) {
  var datasetReturn = DatasetBuilder.newDataset();
  log.dir(datasetReturn);
  datasetReturn.addColumn("email");
  datasetReturn.addColumn("nome");

  log.dir(datasetReturn);
  var datasetConsulta = DatasetFactory.getDataset("colleague", null, null, null);
  log.dir(datasetConsulta);
  log.info(datasetConsulta.values);

  for (var i = 0; i < datasetConsulta.values.length; i++) {
    var row = datasetConsulta.values[i];
    log.dir(row);
    var email = datasetConsulta.getValue(i, "mail");
    var nome = datasetConsulta.getValue(i, "colleagueName");
    datasetReturn.addRow([email, nome]);
  }
  return datasetReturn;
}

function onMobileSync(user) {}
