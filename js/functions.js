
async function getLenHistorico () {
  var address = document.getElementById("inputRegistroAddress").value;
  if (address === ""){
    alert("Campo de endereco vazio.");
    return;
  }
  var len = window.RegistroImovel.methods.getLenHistorico(address).call().then((value) => {
    var input = document.getElementById("lenRegistros");
    input.value = value;
  });
}

async function getInfoUltimaAtualizacao () {
  var address = document.getElementById("inputRegistroAddress2").value;
  if (address === ""){
    alert("Campo de endereco vazio.");
    return;
  }
  var len = window.RegistroImovel.methods.getInfoUltimaAtualizacao(address).call().then((value) => {
    var input = document.getElementById("infoUltimaAtualizacao");
    var obj = {
      'RegistroFederalImovel' : value['RegistroFederalImovel'],
      'NomeDono' : value['NomeDono'],
      'CPF' : value['CPF'],
      'Estado' : value['Estado'],
      'Endereco' : value['Endereco'],
    }
    // console.log(obj);
    input.value = JSON.stringify(obj);
  });
}

async function getCartorioAddress () {
  var len = window.RegistroImovel.methods.getCartorioAddress().call().then((value) => {
    var input = document.getElementById("enderecoContrato");
    input.value = value;
    // lenRegistros;
    // console.log(value);
  });
}

async function getRegistroByIndex () {
  var address = document.getElementById("inputRegistroAddress3").value;
  var index = document.getElementById("inputIndex").value;

  var len = window.RegistroImovel.methods.getRegistroByIndex(address, index).call().then((value) => {
    console.log(value);
    var input = document.getElementById("registroByIndex");
    var obj = {
      'RegistroFederalImovel' : value['RegistroFederalImovel'],
      'NomeDono' : value['NomeDono'],
      'CPF' : value['CPF'],
      'Estado' : value['Estado'],
      'Endereco' : value['Endereco'],
    }
    // console.log(obj);
    input.value = JSON.stringify(obj);
  });
}

async function doCriaRegistro () {
  var regFederal = document.getElementById("inputRegistroFederal").value;
  var nomeDono = document.getElementById("inputNomeDono").value;
  var cpf = document.getElementById("inputCPF").value;
  var estado = document.getElementById("inputEstado").value;
  var endereco = document.getElementById("inputAddress").value;
  if(regFederal === "" || nomeDono === "" || cpf === "" || estado === "" || endereco === "") {
    alert("Preencha todos os campos.");
    return;
  }
  // window.RegistroImovel.methods.criaRegistro(regFederal,nomeDono,cpf,estado,endereco).send();
  web3.eth.getAccounts().then(async (accounts) => {
    getCoinBase();
    // return window.RegistroImovel.methods.criaRegistro(regFederal,nomeDono,cpf,estado,endereco).call();
    return window.RegistroImovel.methods.criaRegistro(regFederal,nomeDono,cpf,estado,endereco).send(
      {from:window.coinbase});
  }).then((value) => {
    var addressContrato = document.getElementById("enderecoContrato");
    addressContrato.value = value["events"][0]["address"];
  })
}

async function doAtualizaRegistro () {
  var regFederal = document.getElementById("inputRegistroFederal").value;
  var nomeDono = document.getElementById("inputNomeDono").value;
  var cpf = document.getElementById("inputCPF").value;
  var estado = document.getElementById("inputEstado").value;
  var endereco = document.getElementById("inputAddress").value;
  var addressContrato = document.getElementById("enderecoContrato").value;
  if(addressContrato === ""){
    alert("Campo de endereco vazio.");
    return;
  }
  if(regFederal === "" || nomeDono === "" || cpf === "" || estado === "" || endereco === "") {
    alert("Preencha todos os campos.");
    return;
  }
  // window.RegistroImovel.methods.criaRegistro(regFederal,nomeDono,cpf,estado,endereco).send();
  web3.eth.getAccounts().then(async (accounts) => {
    getCoinBase();
    return window.RegistroImovel.methods.atualizaRegistro(addressContrato,regFederal,nomeDono,cpf,estado,endereco).send(
      {from:window.coinbase});
  }).then((value) => {
    alert("Registro atualizado");
  })
}

// async function doAtualizaInfoImovel () {
//   var nome = document.getElementById("inputNomeDono").value;
//   web3.eth.getAccounts().then(async (accounts) => {
//     getCoinBase();
//     return window.RegistroImovel.methods.AtualizaInfoImovel(nome).send(nome, {from:window.coinbase});
//   }).then((value) => {
//     console.log(value);
//   })
// }

function copia(id) {
  /* Get the text field */
  var copyText = document.getElementById(id);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}

function copiaEndereco() {
  /* Get the text field */
  var copyText = document.getElementById("enderecoContrato");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}