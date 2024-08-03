async function clonePage() {
    const url = document.getElementById('urlInput').value;
    try {
        const response = await fetch(`http://localhost:3000/clone?url=${encodeURIComponent(url)}`);
        const text = await response.text();
        document.getElementById('clonedContent').innerHTML = text;
    } catch (error) {
        console.error('Erro ao clonar a página:', error);
        alert('Não foi possível clonar a página. Verifique a URL e tente novamente.');
    }
}
