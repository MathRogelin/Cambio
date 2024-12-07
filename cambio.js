const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const valor = document.getElementById('inValor').value
    const converter = document.getElementById('inConverter').value
    const para = document.getElementById('inPara').value
    const convercao = valor*converter/para
    resp.innerText = `${convercao.toFixed(2)}`
})