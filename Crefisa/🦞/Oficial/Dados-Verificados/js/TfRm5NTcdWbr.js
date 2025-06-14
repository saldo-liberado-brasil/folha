// script.js

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function startAnimation() {
    const cpfInput = document.getElementById('cpfUsuario');
    const cpfErro = document.getElementById('cpfErro');
    const redScreen = document.getElementById('red-screen');

    if (validarCPF(cpfInput.value)) {
        cpfErro.style.display = 'none';
        redScreen.style.display = 'block'; // Exibe a div

        // Adiciona a classe 'show-loading' após 1 segundo
        setTimeout(function() {
            redScreen.style.opacity = '1'; // Gradualmente aumenta a opacidade
            var loading = document.getElementById('loading');
            loading.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o loading
            setTimeout(function() {
                loading.style.opacity = '1'; // Gradualmente aumenta a opacidade do loading
            }, 100); // Adiciona um pequeno atraso para garantir a animação
        }, 300); // Adiciona um pequeno atraso para garantir a animação

        // Redireciona para menu.html após 6 segundos
        setTimeout(function() {
            window.location.href = '../Dados-Verificados/index.html';
        }, 4000); // 6 segundos
    } else {
        cpfErro.style.display = 'block';
        cpfInput.style.borderColor = 'red';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    window.location.href = '../Dados-Verificados/index.html'; // Redireciona após fechar o pop-up
}
