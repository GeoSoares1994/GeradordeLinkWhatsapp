const whatsapp = document.querySelector('#phone');
const mensagem = document.querySelector('textarea');
const botaogerar = document.querySelector('.botao-gerar');
const mensagemerror = document.querySelector('#mensagem-error');


botaogerar.addEventListener('click', (e) => {
    e.preventDefault();
    const phone = whatsapp.value.trim();
    const message = mensagem.value.trim();
    if (phone) {
        
        const url = `https://api.whatsapp.com/send?phone=+55${phone}&text=${encodeURIComponent(message)}`;

        mensagemerror.innerHTML = `Link gerado: <a href="${url}" target="_blank">${url}</a>`;
        setTimeout(() => {
            mensagemerror.innerHTML = '';
        }, 10000);
    } else {
        mensagemerror.innerHTML = 'Por favor, insira um número de telefone válido.';
        setTimeout(() => {
            mensagemerror.innerHTML = '';
        }, 5000);
    }
});
