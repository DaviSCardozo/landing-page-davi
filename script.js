const botao = document.getElementById("btnSaibaMais");
botao.addEventListener("click",()=>{alert("Obrigado por visitar meu site!");});

const btnBuscar = document.getElementById("buscarCep");

btnBuscar.addEventListener("click", ()=>{const cep = document.getElementById("cep").value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res=>res.json()).then(dados=>{
        document.getElementById("resultado").innerHTML=
        `<p>Rua: ${dados.logradouro}</p><p>Bairro:${dados.bairro}</p><p>Cidade:
        ${dados.localidade}</p>`;});
});