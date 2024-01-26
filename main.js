function criptografar(){
    let txtusu = document.getElementById('txtusuario').value
    let imagem = document.getElementById('resultado__image')
    let titulo = document.getElementById('resultado__titulo')
    let paragrafo = document.getElementById('resultado__paragrafo')
    let criptografado = document.getElementById('resultado__txtcriptografado')
    let btnCopiar = document.getElementById('resultado__copiar')
    
    if(txtusu == ''){
        alert('Digite um texto para criptografar')
    }
    else{
        imagem.style.display = 'none'
        titulo.style.display = 'none'
        paragrafo.style.display = 'none'
        criptografado.style.display = 'block'
        btnCopiar.style.display = 'block'

        let result = txtusu.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')

        criptografado.innerHTML = result
    }
}

function descriptografar(){
    let criptografado = document.getElementById('resultado__txtcriptografado')
    let txtusu = document.getElementById('txtusuario').value
    let imagem = document.getElementById('resultado__image')
    let titulo = document.getElementById('resultado__titulo')
    let paragrafo = document.getElementById('resultado__paragrafo')
    let btnCopiar = document.getElementById('resultado__copiar')
    
    if(txtusu == ''){
        alert('Digite um texto para descriptografar')
    }
    else{
        imagem.style.display = 'none'
        titulo.style.display = 'none'
        paragrafo.style.display = 'none'
        criptografado.style.display = 'block'
        btnCopiar.style.display = 'block'

        let resultado = txtusu.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')

        criptografado.innerHTML = resultado
    }
}

function copiar() {
    let criptografado = document.getElementById('resultado__txtcriptografado').innerText

    navigator.clipboard.writeText(criptografado)
    alert('Texto copiado: ' + criptografado)
}