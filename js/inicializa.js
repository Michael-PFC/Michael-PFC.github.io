const address = "0x6d8d4027f9c919cadb7192a85dc86cefad1f4a94";
const abi = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_registro",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_regFederal",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_nomeDono",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_cpf",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_estado",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_endereco",
            "type": "string"
          }
        ],
        "name": "atualizaRegistro",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_regFederal",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_nomeDono",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_cpf",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_estado",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_endereco",
            "type": "string"
          }
        ],
        "name": "criaRegistro",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "getCartorioAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_registro",
            "type": "address"
          }
        ],
        "name": "getInfoUltimaAtualizacao",
        "outputs": [
          {
            "internalType": "string",
            "name": "RegistroFederalImovel",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "NomeDono",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "CPF",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Estado",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Endereco",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_registro",
            "type": "address"
          }
        ],
        "name": "getLenHistorico",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_registro",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getRegistroByIndex",
        "outputs": [
          {
            "internalType": "string",
            "name": "RegistroFederalImovel",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "NomeDono",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "CPF",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Estado",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Endereco",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
const ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
}

async function getCoinBase () {
  window.coinbase = await window.web3.eth.getCoinbase();
};

if (!ethEnabled()) {
  alert("Metamask or browser with Ethereum not detected!");
}
else {
  window.RegistroImovel = new web3.eth.Contract(abi, address);
  getCoinBase();
  // getCartorioAddress();
}

// var instructorEvent = RegistroImovel.RegistroAlterado();
// instructorEvent.watch(function(error, result) {
//   if(!error) {

//   } else {
//     alert("Error");
//   }
// });

