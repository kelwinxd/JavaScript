// seu_script.js
document.getElementById('btn').addEventListener('click', function() {
    // Obter o valor da div para o corpo do e-mail
    var corpoEmail = document.getElementById('content').innerText;

    // Abrir o cliente de e-mail com o destinatário e corpo preenchidos
    var destinatario = 'kelwin_esechiel@hotmail.com'; // Substitua pelo endereço de e-mail desejado
    var assunto = 'Teste'; // Substitua pelo assunto desejado
    var link = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpoEmail);

    window.location.href = link;
});

document.getElementById('btn').addEventListener('touch', function() {
    // Obter o valor da div para o corpo do e-mail
    var corpoEmail = document.getElementById('content').innerText;

    // Abrir o cliente de e-mail com o destinatário e corpo preenchidos
    var destinatario = 'kelwin_esechiel@hotmail.com'; // Substitua pelo endereço de e-mail desejado
    var assunto = 'Teste'; // Substitua pelo assunto desejado
    var link = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpoEmail);

    window.location.href = link;
});
