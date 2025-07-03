# 🎓 Juego de Preguntas Académicas

Un juego interactivo de preguntas y respuestas sobre diferentes materias académicas, diseñado para hacer el aprendizaje divertido y educativo.

visitalo -> [Juego Académico](https://juanpabloleonf.github.io/juego-academico/)

## 🚀 Características

- **Múltiples Categorías**: Juega con preguntas de diferentes materias como Ciencias, Química, Matemáticas, Español, Sociales y Biología.
- **Interfaz Atractiva**: Diseño moderno y responsivo que se adapta a diferentes dispositivos.
- **Sistema de Puntuación**: Obtén puntos por cada respuesta correcta.
- **Retroalimentación Inmediata**: Descubre si tu respuesta fue correcta al instante.
- **Progreso Visual**: Sigue tu avance a través de la barra de progreso.

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con animaciones y diseño responsivo)
- JavaScript Vanilla
- GitHub Actions para CI/CD

## 🎮 Cómo Jugar

1. **Selecciona una materia** de las mostradas en la rueda de categorías.
2. **Responde las preguntas** seleccionando una de las opciones proporcionadas.
3. **Sigue tu puntuación** en tiempo real.
4. **Completa todas las preguntas** para ver tu puntuación final.
5. **¡Juega de nuevo** para mejorar tus resultados o probar otra categoría!

## 🚀 Despliegue

El juego se despliega automáticamente a través de GitHub Pages cada vez que se realizan cambios en la rama `main`.

### Despliegue Local

Si deseas ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd proyecto-nicol
   ```

2. Abre el archivo `index.html` en tu navegador web favorito.

## 📝 Estructura del Proyecto

```
proyecto-nicol/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Configuración de GitHub Actions para CI/CD
├── index.html             # Página principal del juego
├── style.css              # Estilos del juego
├── functionality.js       # Lógica principal del juego
└── README.md              # Este archivo
```