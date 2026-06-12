/// ==========================================
// 1. DARK MODE
// ==========================================
const check = document.querySelector("#check");

function darkmode() {
    if (!check) return; // Evita erros se o elemento não existir na página
    const darkelement = document.body;
    const isChecked = check.checked;
    
    darkelement.classList.toggle("dark", isChecked);
    localStorage.setItem("dark-mode", isChecked ? "true" : "false");
}

document.addEventListener("DOMContentLoaded", () => {
    if (check) {
        const darkModeStatus = localStorage.getItem("dark-mode");
        check.checked = darkModeStatus === "true";
        darkmode(); 
        check.addEventListener("change", darkmode);
    }
});

// ==========================================
// 2. CHATBOT + DIGITAÇÃO (CORRIGIDO)
// ==========================================
const respostaEl = document.getElementById("resposta");
let idIntervalo; // Controla o tempo e impede bugs ao clicar rápido

function digitarTexto(texto, callback) {
    clearInterval(idIntervalo); // Limpa qualquer digitação que já estava acontecendo
    
    respostaEl.textContent = "";
    respostaEl.style.opacity = "1";
    let i = 0;
    
    idIntervalo = setInterval(() => {
        if (i < texto.length) {
            respostaEl.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(idIntervalo);
            if (callback) callback();
        }
    }, 30);
}

// Executa a mensagem inicial assim que a estrutura do site carregar
document.addEventListener("DOMContentLoaded", () => {
    const boasVindas = "Olá! Bem vindo ao meu portifólio. Clique em uma pergunta para me conhecer melhor!";
    digitarTexto(boasVindas);
});

document.querySelectorAll(".pergunta1").forEach(botao => {
    botao.addEventListener("click", () => {
        const id = botao.id;
        let resposta = "";

        switch (id) {
            case "quem-sou":
                resposta = "Eu sou Arthur Rodrigues Pelisson, tenho 17 anos e estou cursando o Ensino Médio no Colégio Cotemig, Unidade Barroca, em Belo Horizonte.";
                break;
            case "hobbies":
                resposta = "Gosto de correr de kart, tocar piano, jogar videogames e xadrez, acampar, assistir lives e criar pequenos jogos 3D usando Unity.";
                break;
            case "idiomas":
                resposta = "Falo português (nativo), inglês (nível C2) e japonês (N4). Além desses, tenho grande vontade de aprender italiano, alemão e francês futuramente!";
                break;
            case "futuro":
                resposta = "Para o meu futuro, penso em cursar uma faculdade de economia ou contabilidade. Falando sobre profissões, penso em trabalhar na área de setor privado ou mercado financeiro.";
                break;
            default:
                resposta = "Boa pergunta! Me pergunte algo sobre mim que eu te conto!";
        }

        respostaEl.style.opacity = "0";
        // Removemos o setTimeout antigo para evitar conflitos de tempo ao clicar rápido
        digitarTexto(resposta);
    });
});

// ==========================================
// 3. ANIMAÇÃO DOS CÍRCULOS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const circulos = document.querySelectorAll('.progresso-circulo');
    circulos.forEach(circulo => {
        const progresso = circulo.getAttribute('data-progresso');
        const progressoPath = circulo.querySelector('.circulo-progresso');
        
        if (progressoPath) {
            const offset = 100 - progresso;
            setTimeout(() => {
                progressoPath.style.strokeDashoffset = offset;
            }, 500);
        }
    });
});

// ==========================================
// 4. MODAIS (SOFT SKILLS E HARD SKILLS)
// ==========================================
function abrirModal() {
    document.getElementById('modal1').showModal();
}

function fechar() {
    document.getElementById('modal1').close();
}

function abrirModal2() {
    document.getElementById('modal2').showModal();
}

function fechar2() {
    document.getElementById('modal2').close();
}

// ==========================================
// 5. MÁSCARA DE TELEFONE
// ==========================================
function mascara_telefone() {
    const inputTel = document.getElementById("telefone");
    if (!inputTel) return;

    let tel = inputTel.value.replace(/\D/g, ""); // Remove tudo que não for número
    
    if (tel.length > 11) {
        tel = tel.slice(0, 11); // Limita ao máximo de 11 dígitos (celular com DDD)
    }

    // Aplica a formatação progressiva baseada no tamanho do texto
    if (tel.length > 6) {
        inputTel.value = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
    } else if (tel.length > 2) {
        inputTel.value = `(${tel.slice(0, 2)}) ${tel.slice(2)}`;
    } else if (tel.length > 0) {
        inputTel.value = `(${tel}`;
    } else {
        inputTel.value = "";
    }
}

