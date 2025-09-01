const whatsapp = document.querySelector('#phone');
const mensagem = document.querySelector('textarea');
const botaogerar = document.querySelector('.botao-gerar');
const mensagemerror = document.querySelector('#mensagem-error');
const mensagemaviso = document.querySelector('#mensagem-aviso');



botaogerar.addEventListener('click', (e) => {
    e.preventDefault();
    const phone = whatsapp.value.trim();
    const message = mensagem.value.trim();
    if (phone) {
        
        const url = `https://api.whatsapp.com/send?phone=+55${phone}&text=${encodeURIComponent(message)}`;

        mensagemerror.innerHTML = `Link gerado: <a href="${url}" target="_blank">${url}</a>`;
        mensagemaviso.innerHTML = 'O link ficará disponível por 30 segundos.';
        setTimeout(() => {
            mensagemerror.innerHTML = '';
            mensagemaviso.innerHTML = '';
        }, 30000);
    } else {
        mensagemerror.innerHTML = 'Por favor, insira um número de telefone válido.';
        setTimeout(() => {
            mensagemerror.innerHTML = '';
        }, 5000);
    }
});

