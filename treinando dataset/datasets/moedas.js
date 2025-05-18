function defineStructure() {}

function onSync(lastSyncDate) {}

function createDataset(fields, constraints, sortFields) {
  var dataset = DatasetBuilder.newDataset();

  // Definir as colunas
  dataset.addColumn("simbolo");
  dataset.addColumn("moeda");
  dataset.addColumn("valor"); // Nova coluna

  // Adicionar as moedas com valores simulados (exemplo em relação ao Real)
  dataset.addRow(["R$", "Real Brasileiro", "1.00"]);
  dataset.addRow(["$", "Dólar Americano", "5.12"]);
  dataset.addRow(["€", "Euro", "5.47"]);
  dataset.addRow(["£", "Libra Esterlina", "6.36"]);
  dataset.addRow(["¥", "Iene Japonês", "0.033"]);
  dataset.addRow(["₿", "Bitcoin", "350000.00"]);
  dataset.addRow(["C$", "Dólar Canadense", "3.76"]);
  dataset.addRow(["A$", "Dólar Australiano", "3.40"]);
  dataset.addRow(["CHF", "Franco Suíço", "5.66"]);
  dataset.addRow(["₽", "Rublo Russo", "0.056"]);
  dataset.addRow(["₹", "Rupia Indiana", "0.062"]);
  dataset.addRow(["₩", "Won Sul-Coreano", "0.0038"]);

  return dataset;
}

function onMobileSync(user) {}
