//DARKMODE
const check = document.querySelector("#check");

function darkmode() {
    const darkelement = document.body;
    if (check.checked) {
        darkelement.classList.add("dark");
        localStorage.setItem("dark-mode", "true");
    } else {
        darkelement.classList.remove("dark");
        localStorage.setItem("dark-mode", "false");
    }
}

addEventListener("DOMContentLoaded", () => {
    const darkModeStatus = localStorage.getItem("dark-mode");
    
    if (darkModeStatus === "true") {
        check.checked = true;
    } else {
        check.checked = false;
    }
    
    darkmode(); 
});

check.addEventListener("change", darkmode);

// CHATBOT + DIGITAÇÃO
const respostaEl = document.getElementById("resposta");

function digitarTexto(texto, callback) {
    respostaEl.textContent = "";
    respostaEl.style.opacity = "1";
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < texto.length) {
            respostaEl.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            if (callback) callback();
        }
    }, 30);
}

const boasVindas = "Olá! Bem vindo ao meu portifólio. Clique em uma pergunta para me conhecer melhor!";
digitarTexto(boasVindas);

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
                resposta = "Falo português (nativo), inglês (nível C2) e japonês (N5, quase encaminhando para N4). Além desses, tenho grande vontade de aprender italiano, alemão e francês futuramente!";
                break;
            case "futuro":
                resposta = "Para o meu futuro, penso em cursar uma faculdade de economia ou contabilidade no Japão. Falando sobre profissões, ainda não me decidi, mas áreas envolvendo programação ou valores me interessam.";
                break;
            default:
                resposta = "Boa pergunta! Me pergunte algo sobre mim que eu te conto!";
        }

        respostaEl.style.opacity = "0";
        setTimeout(() => digitarTexto(resposta), 270);
    });
});

// ANIMAÇÃO DOS CÍRCULOS
const circulos = document.querySelectorAll('.progresso-circulo');
circulos.forEach(circulo => {
    const progresso = circulo.getAttribute('data-progresso');
    const progressoPath = circulo.querySelector('.circulo-progresso');
    const offset = 100 - progresso;
    setTimeout(() => {
        progressoPath.style.strokeDashoffset = offset;
    }, 500);
});

//modal soft skills

function abrirModal() {
    document.getElementById('modal1').showModal();
}

function fechar() {
    document.getElementById('modal1').close();
}

//modal hard skills

function abrirModal2() {
    document.getElementById('modal2').showModal();
}

function fechar2() {
    document.getElementById('modal2').close();
}

//mascaras

function mascara_telefone()
        {
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) 
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }


