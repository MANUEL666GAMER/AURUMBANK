# Aurum Bank - Sitio Web de Tarjetas de Crédito

## Cambios Realizados

He corregido el HTML y CSS para que las imágenes de las tarjetas se muestren correctamente:

### Principales Correcciones:

1. **Hero Section (Sección Principal)**
   - Corregí la estructura HTML para que cada tarjeta tenga su propia imagen
   - Las tres tarjetas ahora se muestran correctamente con efecto de flotación
   - Las imágenes se integran perfectamente con los estilos de sombra y animación

2. **Sección de Tarjetas**
   - Reemplacé las tarjetas CSS por imágenes reales
   - Ahora usa `<img>` tags para mostrar las tarjetas
   - Mantiene todos los efectos hover y transiciones elegantes

3. **CSS Mejorado**
   - Nuevos estilos para `.hero-card-image` que se ajustan perfectamente
   - Estilos para `.card-image-real` con efectos 3D al hover
   - Responsive design mejorado para dispositivos móviles

## Estructura de Archivos

Tu proyecto debe tener la siguiente estructura:

```
aurum-bank/
├── index.html
├── styles.css
├── main.js
└── img/
    └── TARJETAS/
        ├── legatum-tarj.png
        ├── fides-tarj.png
        └── vita-tarj.png
```

## Cómo Usar las Imágenes

1. Crea una carpeta llamada `img` en la raíz de tu proyecto
2. Dentro de `img`, crea una carpeta llamada `TARJETAS`
3. Coloca tus tres imágenes de tarjetas con estos nombres:
   - `legatum-tarj.png` (Tarjeta negra/oscura)
   - `fides-tarj.png` (Tarjeta burgundy/roja)
   - `vita-tarj.png` (Tarjeta azul/navy)

## Recomendaciones para las Imágenes

- **Tamaño recomendado**: 800x500 píxeles (proporción 16:10)
- **Formato**: PNG con transparencia o JPG
- **Resolución**: Al menos 72 DPI para web
- **Peso**: Optimiza las imágenes para web (máximo 200KB por imagen)

## Características del Diseño

✅ Tres secciones hero con animaciones flotantes
✅ Tarjetas de crédito con efecto 3D al hover
✅ Diseño completamente responsive
✅ Navegación fija con efecto scroll
✅ Animaciones suaves con CSS
✅ Formulario de contacto funcional
✅ Tabla de comparación de tarjetas

## Navegadores Compatibles

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Instalación

1. Descarga todos los archivos
2. Organiza las imágenes según la estructura mencionada
3. Abre `index.html` en tu navegador
4. ¡Disfruta tu sitio web premium!

## Personalización

Si quieres cambiar colores u otros estilos, edita las variables CSS en `styles.css`:

```css
:root {
  --color-gold: #D4AF37;
  --color-dark: #1A1A2E;
  /* ... más variables */
}
```

## Soporte

Si tienes alguna pregunta o necesitas más ajustes, no dudes en preguntar.

---

© 2026 Aurum Bank - Todos los derechos reservados