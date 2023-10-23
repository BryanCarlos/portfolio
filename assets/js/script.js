// evitando que ao clicar para enviar a mensagem, o evento padrão do submit permita que a página seja recarregada
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault
    alert('Mensagem enviada.')
})