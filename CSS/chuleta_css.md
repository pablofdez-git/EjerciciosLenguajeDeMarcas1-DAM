# 📘 MEGA CHULETA CSS - EXAMEN LENGUAJE DE MARCAS (1º DAM)

> **💡 CONSEJO:** Pulsa `Ctrl + F` durante el examen para buscar palabras clave como "sombra", "tabla", "flex" o "menu".

---

## 1. RESETEO BÁSICO (Para evitar márgenes del navegador)
Cópialo siempre al principio de tu CSS.

~~~css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* El padding y el borde no aumentan el width/height total */
}
~~~

---

## 2. SELECTORES CSS (Cómo apuntar a los elementos)
* **Etiqueta:** `p { ... }` (Todos los párrafos)
* **Clase:** `.destacado { ... }` (Elementos con `class="destacado"`)
* **ID:** `#cabecera { ... }` (Elemento con `id="cabecera"`)
* **Descendiente:** `div p { ... }` (Párrafos dentro de un div, a cualquier nivel)
* **Hijo directo:** `div > p { ... }` (Párrafos que sean hijos directos del div)
* **Hermano adyacente:** `h1 + p { ... }` (El primer párrafo que esté justo después de un h1)
* **Agrupación:** `h1, h2, h3 { ... }` (Aplica a los tres a la vez)

### Pseudo-clases útiles
* `:hover` -> Cuando el ratón pasa por encima.
* `:focus` -> Cuando haces clic en un input.
* `:nth-child(odd)` -> Elementos impares (ej. filas 1, 3, 5).
* `:nth-child(even)` -> Elementos pares (ej. filas 2, 4, 6).

---

## 3. PROPIEDADES DE TEXTO

~~~css
p {
    color: #333333;             /* Color del texto */
    font-family: Arial, sans-serif; /* Tipo de fuente */
    font-size: 16px;            /* Tamaño de fuente */
    font-weight: bold;          /* Grosor: normal, bold, 100-900 */
    text-align: center;         /* Alineación: left, right, center, justify */
    text-decoration: underline; /* Subrayado (underline), tachado (line-through), nada (none) */
    text-transform: uppercase;  /* Mayúsculas (uppercase), minúsculas (lowercase) */
    line-height: 1.5;           /* Altura entre líneas (interlineado) */
    letter-spacing: 2px;        /* Espacio entre las letras */
    word-spacing: 5px;          /* Espacio entre las palabras */
    text-indent: 30px;          /* Sangría (desplazamiento de la 1ª línea) */
}
~~~

---

## 4. MODELO DE CAJA Y FONDOS

~~~css
.caja {
    width: 300px;               /* Ancho */
    height: 200px;              /* Alto */
    margin: 20px auto;          /* Margen exterior. "auto" centra horizontalmente */
    padding: 15px 10px;         /* Margen interior (Arriba/Abajo 15px, Lados 10px) */
    border: 2px solid black;    /* Borde: grosor estilo color */
    border-radius: 10px;        /* Esquinas redondeadas */
    box-shadow: 5px 5px 10px gray; /* Sombra: eje-x eje-y difuminado color */

    /* FONDOS */
    background-color: #f4f4f4;
    background-image: url('imagen.jpg');
    background-size: cover;     /* Ajusta la imagen para cubrir toda la caja */
    background-position: center;/* Centra la imagen */
    background-repeat: no-repeat;/* Evita que se repita como mosaico */
}
~~~

---

## 5. TABLAS (Bordes y Efecto Cebra)

~~~css
table {
    width: 100%;
    border-collapse: collapse; /* FUSIONA LOS BORDES (Importante) */
    text-align: left;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #8B4513;
    color: white;
    text-transform: uppercase;
}
/* Filas pares e impares (Efecto Cebra) */
tbody tr:nth-child(odd) {
    background-color: #4B0082;
    color: white;
}
tbody tr:nth-child(even) {
    background-color: white;
    color: #4B0082;
}
~~~

---

## 6. MENÚS DE NAVEGACIÓN Y ENLACES

~~~css
/* Contenedor del menú */
ul.menu {
    list-style-type: none; /* Elimina las viñetas */
    display: flex;         /* Pone los elementos en fila */
    gap: 15px;             /* Separación entre elementos */
    background-color: #333;
    padding: 10px;
}

/* Enlaces del menú */
ul.menu a {
    text-decoration: none; /* Quita el subrayado */
    color: white;
    padding: 10px 15px;    /* Hace que parezca un botón */
    border-radius: 5px;
    transition: all 0.3s;  /* Transición suave */
}

/* Efecto Hover */
ul.menu a:hover {
    background-color: #1f5899;
    color: #fff;
}
~~~

---

## 7. FORMULARIOS

~~~css
input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #AAAAAA;
    border-radius: 5px;
    margin-bottom: 15px;
}

/* Efecto FOCUS (Al hacer clic en el input) */
input[type="text"]:focus {
    border-color: #CA5F07; /* Cambia de color */
    outline: none;         /* Quita el reborde azul por defecto del navegador */
}

button {
    background-color: #FFD904;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
~~~

---

## 8. POSICIONAMIENTO Y LAYOUT

### FLEXBOX (Aplicar al contenedor padre)
~~~css
.contenedor-flex {
    display: flex;
    flex-direction: row;     /* row (fila), column (columna) */
    justify-content: center; /* Horiz: center, space-between, space-around */
    align-items: center;     /* Vert: center, flex-start, stretch */
    flex-wrap: wrap;         /* Si no caben, bajan de línea */
    gap: 20px;               /* Espacio entre cajas */
}
~~~

### GRID (Cuadrículas)
~~~css
.contenedor-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 columnas de igual tamaño */
    gap: 10px;
}
~~~

---

## 9. TRUCOS RÁPIDOS PARA EL EXAMEN
~~~css
/* Centrar una caja con ancho definido */
.caja-centrada {
    margin: 0 auto;
    width: 80%;
}

/* Quitar viñetas de listas */
ul {
    list-style: none;
}

/* Hacer que las imágenes no se desborden de su caja */
img {
    max-width: 100%;
    height: auto;
}

/* Pie de página fijo abajo */
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
~~~
