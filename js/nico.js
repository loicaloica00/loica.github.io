// Objeto que contiene las respuestas del chatbot
const respuestas = {
    hola: "¡Hola! ¿En qué puedo ayudarte?",
    productos: "Tenemos una variedad de productos disponibles. ¿Hay algo en particular que estés buscando?",
    precios: "Nuestros precios varían dependiendo del producto. ¿Tienes alguna referencia en mente?",
    ubicacion: "Estamos ubicados en la calle Principal 123, Ciudad. ¿Necesitas direcciones más detalladas?",
    gracias: "¡De nada! ¿Hay algo más en lo que pueda ayudarte?",
    despedida: "Ha sido un placer ayudarte. ¡Que tengas un buen día!",
    default: "Lo siento, no entendí. ¿Podrías repetirlo de otra manera?"
  };
  
  // Función para procesar la entrada del usuario y generar una respuesta
  function procesarEntrada(entrada) {
    entrada = entrada.toLowerCase().trim(); // Convertir la entrada a minúsculas y eliminar espacios en blanco
  
    // Verificar si la entrada coincide con alguna respuesta predefinida
    if (entrada.includes("hola") || entrada.includes("buenos días") || entrada.includes("buenas tardes")) {
      return respuestas.hola;
    } else if (entrada.includes("productos") || entrada.includes("productos")) {
      return respuestas.productos;
    } else if (entrada.includes("precios") || entrada.includes("precio")) {
      return respuestas.precios;
    } else if (entrada.includes("ubicación") || entrada.includes("dirección")) {
      return respuestas.ubicacion;
    } else if (entrada.includes("gracias")) {
      return respuestas.gracias;
    } else if (entrada.includes("adios") || entrada.includes("hasta luego")) {
      return respuestas.despedida;
    } else {
      return respuestas.default;
    }
  }
  
  // Función para manejar la conversación del chatbot
  function conversar() {
    let userInput;
    let respuesta;
  
    do {
      userInput = prompt(respuesta ? respuesta + "\n" : "Escribe algo:");
      respuesta = procesarEntrada(userInput);
      alert(respuesta);
    } while (userInput && userInput.toLowerCase() !== "adios" && userInput.toLowerCase() !== "hasta luego");
  }
  
  // Iniciar la conversación
  conversar();
  