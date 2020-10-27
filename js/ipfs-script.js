function uploadImage() {
  const reader = new FileReader();
  reader.onloadend = function() {
    const ipfs = window.IpfsApi({host: 'ipfs.infura.io', port: 5001, protocol: 'https'}) // Conecta IPFS
    const buf = buffer.Buffer(reader.result) // data para buffer
    ipfs.files.add(buf, (err, result) => { // Faz p upload
      if(err) {
        console.error(err)
        return
      }
      let url = `https://ipfs.io/ipfs/${result[0].hash}`
      console.log(`Url --> ${url}`);
      document.getElementById("staticHash").value = result[0].hash;
      // document.getElementById("output").src = url // mostra a imagem
    });
  }
  const photo = document.getElementById("photo");
  reader.readAsArrayBuffer(photo.files[0]); // inicia onloadend
}