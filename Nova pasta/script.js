// seu_script.js
document.getElementById('btn').addEventListener('click', function() {
    // Obter o valor da div para o corpo do e-mail
    var corpoEmail = document.getElementById('content').innerText;

    // Open the client desired
    var destinatario = 'kelwin_esechiel@hotmail.com'; 
    var assunto = 'Teste'; 
    var link = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpoEmail);

    window.location.href = link;
});

document.getElementById('btn').addEventListener('touch', function() {
    // Get the div value
    var corpoEmail = document.getElementById('content').innerText;

    // Open client email
    var destinatario = 'kelwin_esechiel@hotmail.com'; 
    var assunto = 'Teste'; 
    var link = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpoEmail);

    window.location.href = link;
});
