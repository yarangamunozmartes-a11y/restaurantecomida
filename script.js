// Manejo estético de pestañas dinámicas
function changeTab(paneId) {
    document.querySelectorAll('.tab-content').forEach(pane => pane.classList.remove('active'));
    document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(paneId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Configuración de la API Exclusiva de WhatsApp
// Reemplaza con el número de teléfono del administrador o dueño del restaurante
const numeroRestaurante = "51999888777"; 

function sendOrder(plateName, price) {
    // Texto persuasivo y directo que llega directo al WhatsApp de tu negocio
    const textoMensaje = `¡Hola! Acabo de ver el menú en la web y deseo reservar una mesa / solicitar el siguiente plato del día: "${plateName}" (Valor: S/. ${price.toFixed(2)}). Por favor, confímenme el espacio y el tiempo estimado de preparación. ¡Gracias!`;
    
    // Creación de enlace limpio
    const urlWhatsApp = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(textoMensaje)}`;
    
    // Redirección inmediata en pestaña limpia
    window.open(urlWhatsApp, '_blank');
}