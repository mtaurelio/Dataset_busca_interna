# 📊 Dataset Personalizado - Usuários do Fluig

Este repositório contém um código que cria um **dataset personalizado no TOTVS Fluig**, retornando uma lista com os **nomes e e-mails de todos os usuários cadastrados** no sistema.

## 🔧 O que esse código faz?

- Consulta o dataset nativo do Fluig: `colleague`
- Recupera os campos: `mail` (e-mail) e `colleagueName` (nome)
- Cria um novo dataset com duas colunas: `email` e `nome`
- Preenche o novo dataset com os dados de cada usuário encontrado

## 🧠 Tecnologias e funções utilizadas

- **TOTVS Fluig ECM**
- **JavaScript (server-side)**
- `DatasetFactory.getDataset()`
- `DatasetBuilder.newDataset()`
- `dataset.addColumn()`
- `dataset.addRow()`
- `getValue()`

## 📁 Estrutura

```javascript
function createDataset(fields, constraints, sortFields) {
  var datasetReturn = DatasetBuilder.newDataset();
  datasetReturn.addColumn("email");
  datasetReturn.addColumn("nome");

  var datasetConsulta = DatasetFactory.getDataset("colleague", null, null, null);

  for (var i = 0; i < datasetConsulta.values.length; i++) {
    var email = datasetConsulta.getValue(i, "mail");
    var nome = datasetConsulta.getValue(i, "colleagueName");
    datasetReturn.addRow([email, nome]);
  }

  return datasetReturn;
}
