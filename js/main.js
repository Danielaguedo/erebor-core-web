document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const texts = [
        "Iniciando servidores en Nodo Arequipa...",
        "Calibrando sistemas CNC...",
        "Cargando módulos de automatización...",
        "EREBOR CORE: Sistema Operativo. Estado: CONSTRUCCIÓN."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pausa al terminar de escribir
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500); // Pausa antes de escribir el siguiente
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    type();
});