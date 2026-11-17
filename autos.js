/* =====================================================================
   VITRINA CÁCERES MOTORS · AQUÍ SE EDITAN LOS AUTOS
   ---------------------------------------------------------------------
   CÓMO AGREGAR UN AUTO
   1. Sube sus fotos a la carpeta  autos/  (ej: autos/yaris-2018-1.jpg).
   2. Copia el bloque de ejemplo del final (desde { hasta },),
      pégalo dentro de la lista AUTOS y cambia los datos.
   3. Guarda. La página se actualiza sola en 1 o 2 minutos.

   CONSIGNACIÓN O VENTA DIRECTA
   - modalidad: "consignacion"  → aparece en la vitrina de consignación
                                  y ocupa uno de los 10 cupos
   - modalidad: "directa"       → auto propio, aparece en "Compra y venta directa"

   CÓMO QUITAR O MARCAR UN AUTO
   - Reservado:  estado: "reservado"
   - Vendido:    estado: "vendido"   (deja de ocupar cupo)
   - Quitarlo:   borra su bloque completo { ... },

   REGLAS SIMPLES
   - Textos siempre entre comillas "así".
   - Números sin puntos:  precio: 6000000   km: 98000
   - Cada bloque termina con una coma  },
   ===================================================================== */

window.CM_CONFIG = {
  cupos: 10,                 // cupos de la vitrina de consignación
  mostrarCuposVacios: true,  // true = muestra los cupos libres "Tu auto aquí"
  whatsapp: "56945542520"    // número para las consultas (sin + ni espacios)
};

window.AUTOS = [

  {
    marca: "Mazda",
    modelo: "3 Axela",
    anio: 2017,
    precio: 5500000,
    km: 90000,
    motor: "Skyactiv bencinero automático",
    color: "Gris",
    ubicacion: "Iquique",
    regimen: "Zona franca",
    modalidad: "directa",
    estado: "disponible",
    fotos: [
      "autos/mazda3-axela-2017-1.jpg",
      "autos/mazda3-axela-2017-2.jpg",
      "autos/mazda3-axela-2017-3.jpg",
      "autos/mazda3-axela-2017-4.jpg",
      "autos/mazda3-axela-2017-5.jpg",
      "autos/mazda3-axela-2017-6.jpg",
      "autos/mazda3-axela-2017-7.jpg",
      "autos/mazda3-axela-2017-8.jpg",
      "autos/mazda3-axela-2017-9.jpg"
    ],
    detalles: [
      "Hatchback 5 puertas",
      "Motor Skyactiv: rendimiento y bajo consumo",
      "Pantalla multimedia con perilla de mando",
      "Volante multifunción",
      "Llantas de aleación, alerón y antena tipo aleta",
      "Se vende con factura · pago por transferencia o efectivo"
    ]
  },

  {
    marca: "Jeep",
    modelo: "Cherokee Limited",
    anio: 2015,
    precio: 6000000,
    km: 98000,
    motor: "2.4 automático",
    color: "Blanco",
    ubicacion: "Iquique",
    regimen: "",             // "Zona franca", "Liberado", "Nacional" o "" para no mostrar
    modalidad: "directa",    // "directa" (auto propio) o "consignacion"
    estado: "vendido",       // "disponible", "reservado" o "vendido"
    fotos: [
      "img/cherokee-frontal.jpg",
      "img/cherokee-lateral.jpg",
      "img/cherokee-trasera.jpg",
      "img/cherokee-tablero.jpg",
      "img/cherokee-asientos.jpg",
      "img/cherokee-puertas.jpg"
    ],
    detalles: [
      "Full cuero con asientos calefaccionados",
      "Pantalla táctil con Bluetooth y cámara de retroceso",
      "Control crucero y encendido con botón",
      "Portalón eléctrico, sensores y barras de techo",
      "Sello verde · uso solo en ciudad"
    ]
  },

  {
    marca: "Subaru",
    modelo: "Impreza",
    anio: 2007,
    precio: 2400000,
    km: 177394,
    motor: "Eco Turbo",
    color: "Negro",
    ubicacion: "Iquique",
    regimen: "",
    modalidad: "directa",
    estado: "vendido",
    fotos: [
      "autos/subaru-impreza-2007-1.jpg"
    ],
    detalles: [
      "Hatchback",
      "Revisión técnica y permiso de circulación al día",
      "Vendido en $2.400.000, un 20% sobre lo que pidió su dueña"
    ]
  },

  /* ---------- MODELO PARA COPIAR (está desactivado) ----------
  {
    marca: "Toyota",
    modelo: "Yaris Sport",
    anio: 2018,
    precio: 7500000,
    km: 85000,
    motor: "1.5 mecánico",
    color: "Gris",
    ubicacion: "Iquique",
    regimen: "Liberado",
    modalidad: "consignacion",
    estado: "disponible",
    fotos: [
      "autos/yaris-2018-1.jpg",
      "autos/yaris-2018-2.jpg"
    ],
    detalles: [
      "Único dueño",
      "Mantenciones al día"
    ]
  },
  ------------------------------------------------------------- */

];
