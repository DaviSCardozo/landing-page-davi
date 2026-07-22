document.addEventListener("DOMContentLoaded", function () {
    // 1. Elementos da Página
    var btnHamburguer = document.getElementById("btnHamburguer");
    var listaMenu = document.getElementById("listaMenu");
    var linksMenu = document.querySelectorAll(".lista-menu a");
    
    var btnSaibaMais = document.getElementById("btnSaibaMais");
    var formContato = document.getElementById("formContato");
    var formCep = document.getElementById("formCep");
    var btnBuscarCep = document.getElementById("buscarCep");
    var campoCep = document.getElementById("cep");
    var resultado = document.getElementById("resultado");
    var msgCep = document.getElementById("msgCep");
    var msgFormulario = document.getElementById("msgFormulario");
    var aviso = document.getElementById("aviso");
    var anoAtual = document.getElementById("anoAtual");

    // 2. Atualiza o ano no rodapé
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    // 3. Menu Hambúrguer (Responsividade Mobile)
    if (btnHamburguer && listaMenu) {
        btnHamburguer.addEventListener("click", function () {
            btnHamburguer.classList.toggle("ativo");
            listaMenu.classList.toggle("ativo");
        });

        // Fechar menu mobile ao clicar em qualquer link
        linksMenu.forEach(function (link) {
            link.addEventListener("click", function () {
                btnHamburguer.classList.remove("ativo");
                listaMenu.classList.remove("ativo");
            });
        });
    }

    // 4. Notificação Toast na tela
    function mostrarAviso(texto) {
        if (!aviso) return;
        aviso.textContent = texto;
        aviso.classList.add("ativo");

        setTimeout(function () {
            aviso.classList.remove("ativo");
        }, 3500);
    }

    // 5. Botão Saiba Mais (Scroll Suave)
    if (btnSaibaMais) {
        btnSaibaMais.addEventListener("click", function () {
            var secaoSobre = document.getElementById("sobre");
            if (secaoSobre) {
                secaoSobre.scrollIntoView({ behavior: "smooth" });
                mostrarAviso("Bem-vindo! Conheça um pouco sobre minha trajetória.");
            }
        });
    }

    // 6. Formulário de Contato (Integrado ao FormSubmit para dev.davicardozo@gmail.com)
    if (formContato) {
        formContato.addEventListener("submit", function (evento) {
            evento.preventDefault();

            var nome = document.getElementById("nome").value.trim();
            var email = document.getElementById("email").value.trim();
            var mensagem = document.getElementById("mensagem").value.trim();
            var btnEnviar = formContato.querySelector("button[type='submit']");

            msgFormulario.textContent = "";
            msgFormulario.style.color = "#dc2626";

            if (nome.length < 2) {
                msgFormulario.textContent = "Por favor, informe seu nome completo.";
                return;
            }

            if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
                msgFormulario.textContent = "Por favor, digite um e-mail válido.";
                return;
            }

            if (mensagem.length < 5) {
                msgFormulario.textContent = "Digite uma mensagem com pelo menos 5 caracteres.";
                return;
            }

            var textoOriginalBtn = btnEnviar ? btnEnviar.textContent : "Enviar Mensagem";
            if (btnEnviar) {
                btnEnviar.disabled = true;
                btnEnviar.textContent = "Enviando...";
            }

            fetch("https://formsubmit.co/ajax/dev.davicardozo@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: nome,
                    email: email,
                    message: mensagem,
                    _subject: "Nova mensagem do Portfólio de " + nome
                })
            })
            .then(function (resposta) {
                if (!resposta.ok) {
                    throw new Error("Erro no envio");
                }
                return resposta.json();
            })
            .then(function (dados) {
                formContato.reset();
                msgFormulario.style.color = "#16a34a";
                msgFormulario.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
                mostrarAviso("Mensagem enviada para dev.davicardozo@gmail.com!");
            })
            .catch(function (erro) {
                msgFormulario.style.color = "#dc2626";
                msgFormulario.textContent = "Erro ao enviar mensagem. Tente novamente mais tarde.";
                mostrarAviso("Falha ao enviar a mensagem.");
            })
            .finally(function () {
                if (btnEnviar) {
                    btnEnviar.disabled = false;
                    btnEnviar.textContent = textoOriginalBtn;
                }
            });
        });
    }

    // 7. Máscara de CEP enquanto digita
    if (campoCep) {
        campoCep.addEventListener("input", function () {
            var numeros = campoCep.value.replace(/\D/g, "");

            if (numeros.length > 8) {
                numeros = numeros.substring(0, 8);
            }

            if (numeros.length > 5) {
                campoCep.value = numeros.substring(0, 5) + "-" + numeros.substring(5);
            } else {
                campoCep.value = numeros;
            }

            msgCep.textContent = "";
        });
    }

    // 8. Consumo de API - ViaCEP (Fetch API)
    if (formCep) {
        formCep.addEventListener("submit", function (evento) {
            evento.preventDefault();

            var cep = campoCep.value.replace(/\D/g, "");
            msgCep.textContent = "";
            resultado.innerHTML = "";

            if (cep.length !== 8) {
                msgCep.textContent = "Informe um CEP válido com 8 dígitos (ex: 90010-000).";
                msgCep.style.color = "#dc2626";
                return;
            }

            btnBuscarCep.textContent = "Buscando...";
            btnBuscarCep.disabled = true;

            fetch("https://viacep.com.br/ws/" + cep + "/json/")
                .then(function (resposta) {
                    if (!resposta.ok) {
                        throw new Error("Erro na requisição");
                    }
                    return resposta.json();
                })
                .then(function (dados) {
                    if (dados.erro) {
                        resultado.innerHTML = '<div class="resultado-erro">⚠️ CEP não encontrado. Verifique o número informado.</div>';
                        return;
                    }

                    resultado.innerHTML =
                        '<div class="resultado-cep">' +
                        "<p><strong>📍 Logradouro:</strong> " + (dados.logradouro || "Não informado") + "</p>" +
                        "<p><strong>🏙️ Bairro:</strong> " + (dados.bairro || "Não informado") + "</p>" +
                        "<p><strong>🏛️ Cidade / UF:</strong> " + dados.localidade + " / " + dados.uf + "</p>" +
                        "<p><strong>📮 CEP:</strong> " + dados.cep + "</p>" +
                        "</div>";

                    mostrarAviso("CEP localizado com sucesso!");
                })
                .catch(function () {
                    resultado.innerHTML = '<div class="resultado-erro">❌ Ocorreu um erro ao consultar o CEP. Tente novamente mais tarde.</div>';
                })
                .finally(function () {
                    btnBuscarCep.textContent = "Buscar CEP";
                    btnBuscarCep.disabled = false;
                });
        });
    }
});
