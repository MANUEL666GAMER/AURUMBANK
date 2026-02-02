# Aurum Bank - Landing Page

## 📋 Descripción

Landing page profesional y elegante para Aurum Bank, diseñada para promocionar tres líneas de tarjetas de crédito premium dirigidas a personas de 35 a 40 años:

- **Aurum Vita** - El inicio de tu legado
- **Aurum Fides** - Confianza consolidada  
- **Aurum Legatum** - La excelencia hecha tradición

## 🎨 Características de Diseño

### Paleta de Colores
- **Dorado** (#D4AF37): Color principal que representa lujo y prestigio
- **Oscuro** (#1A1A2E): Base elegante y sofisticada
- **Burgundy** (#8B2C3F): Acento para la tarjeta Fides
- **Navy** (#2C3E6B): Acento para la tarjeta Legatum
- **Charcoal** (#2A2A2A): Para la tarjeta Vita

### Tipografía
- **Libre Baskerville**: Fuente serif para títulos y elementos destacados
- **Lato**: Fuente sans-serif para cuerpo de texto y contenido general

### Efectos Visuales
- Animaciones suaves de entrada y desplazamiento
- Efectos parallax en el hero
- Hover effects 3D en las tarjetas
- Transiciones fluidas entre secciones
- Contadores animados para estadísticas

## 📁 Estructura del Proyecto

```
aurum-bank/
├── index.html          # Estructura HTML principal
├── css/
│   └── styles.css      # Estilos CSS completos
├── js/
│   └── main.js         # Lógica JavaScript
└── README.md           # Esta documentación
```

## 🔧 Arquitectura Técnica

### HTML (index.html)
Estructura semántica organizada en secciones:
- **Navigation**: Barra de navegación fija con logo
- **Hero**: Sección principal con llamado a la acción
- **About**: Información sobre Aurum Bank
- **Cards**: Presentación de las tres tarjetas
- **Comparison**: Tabla comparativa de beneficios
- **Benefits**: Razones para elegir Aurum Bank
- **CTA**: Llamado a la acción principal
- **Contact**: Formulario de contacto
- **Footer**: Enlaces y información adicional

### CSS (css/styles.css)
Estilos organizados por módulos:
- Variables CSS para consistencia
- Sistema de diseño escalable
- Responsive design (mobile-first)
- Animaciones y transiciones
- Grid y Flexbox layouts

### JavaScript (js/main.js)
Módulos separados por funcionalidad:
- **Navigation**: Menú móvil y scroll behavior
- **ScrollAnimations**: Animaciones al hacer scroll
- **FormHandler**: Validación y envío de formularios
- **CardEffects**: Efectos 3D en tarjetas
- **CounterAnimation**: Animación de números
- **ParallaxEffect**: Efecto parallax

## 📱 Responsividad

El diseño es completamente responsive con breakpoints en:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Requisitos de las Tarjetas

### Aurum Vita
- Ingreso mínimo: $15,000 MXN mensuales
- Identificación oficial vigente
- Comprobante de domicilio

### Aurum Fides
- Ingreso mínimo: $25,000 MXN mensuales
- Historial crediticio sin atrasos recientes
- Identificación oficial vigente
- Comprobante de domicilio e ingresos

### Aurum Legatum
- Ingreso mensual mínimo: $25,000 MXN
- Buen historial crediticio
- Estabilidad laboral (mínimo 1 año)
- Identificación oficial y comprobantes vigentes

## 💳 Beneficios por Tarjeta

### Vita
- 2% cashback
- Sin anualidad el primer año
- Salas VIP nacionales
- Seguro de compra

### Fides
- 4% cashback en viajes y restaurantes
- Salas VIP internacionales ilimitado
- Concierge 24/7
- Seguro de viaje internacional

### Legatum
- 6% cashback en categorías premium
- Priority Pass ilimitado
- Concierge personal exclusivo
- Eventos privados y experiencias únicas

## 🚀 Cómo Usar

1. **Abrir el proyecto**:
   - Simplemente abre `index.html` en tu navegador
   - No requiere servidor local (100% estático)

2. **Personalización**:
   - Colores: Modificar variables CSS en `:root`
   - Contenido: Editar directamente en `index.html`
   - Funcionalidad: Ajustar módulos en `main.js`

3. **Despliegue**:
   - Puede ser desplegado en cualquier hosting estático
   - Compatible con GitHub Pages, Netlify, Vercel, etc.

## 🎨 Guía de Personalización

### Cambiar Colores
```css
:root {
  --color-gold: #TU_COLOR;
  --color-dark: #TU_COLOR;
  /* ... más variables */
}
```

### Modificar Animaciones
```css
/* En styles.css, buscar secciones de @keyframes */
@keyframes tuAnimacion {
  /* ... */
}
```

### Añadir Nueva Sección
```html
<section class="nueva-seccion">
  <div class="container">
    <!-- Tu contenido -->
  </div>
</section>
```

## 📊 Características Técnicas

- ✅ HTML5 semántico
- ✅ CSS3 moderno con variables
- ✅ JavaScript ES6+
- ✅ Diseño responsive
- ✅ Animaciones CSS y JavaScript
- ✅ Accesibilidad (ARIA labels)
- ✅ SEO optimizado
- ✅ Performance optimizado
- ✅ Cross-browser compatible

## 🔍 SEO y Accesibilidad

- Meta tags apropiados
- Estructura semántica HTML5
- ARIA labels para navegación
- Alt text en elementos visuales
- Jerarquía de headings correcta
- Contraste de colores accesible

## 📈 Optimizaciones

- Lazy loading de imágenes (implementable)
- Minificación de CSS/JS (para producción)
- Compresión de assets
- Carga asíncrona de fuentes
- Debounce en eventos de scroll

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Google Fonts (Libre Baskerville, Lato)

## 📄 Licencia

Este proyecto es propiedad de Aurum Bank.

## 👥 Público Objetivo

Personas de 35 a 40 años que:
- Buscan productos financieros premium
- Valoran el diseño y la elegancia
- Tienen estabilidad financiera
- Buscan beneficios exclusivos

## 🎯 Objetivos del Sitio

1. Presentar las tres líneas de tarjetas
2. Comunicar beneficios claramente
3. Facilitar el proceso de solicitud
4. Generar confianza y credibilidad
5. Capturar leads calificados

## 📞 Contacto

- Teléfono: 01 800 AURUM-00
- Email: contacto@aurumbank.com
- Chat: Disponible 24/7

---

**Desarrollado con atención al detalle y enfoque en la experiencia del usuario.**
