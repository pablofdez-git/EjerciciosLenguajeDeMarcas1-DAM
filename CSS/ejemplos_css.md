# 📂 CATÁLOGO DE EJEMPLOS PRÁCTICOS CSS (1º DAM)

> Aquí tienes estructuras HTML y CSS listas para copiar y pegar. Lee la descripción de cada una para saber en qué parte del examen te pueden ser útiles.

---

## 1. MENÚ DE NAVEGACIÓN (NAV BAR)
> **¿Para qué sirve?** Crea una barra horizontal en la parte superior de la página, ideal para poner los enlaces principales de la web (Inicio, Contacto...). Los elementos se ponen en fila, pierden los puntos de lista y cambian de color al pasar el ratón por encima.

**HTML:**
~~~html
<nav class="navbar">
  <ul class="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Acerca de</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
~~~

**CSS:**
~~~css
.navbar {
  background-color: #333;
  padding: 10px;
}

.menu {
  list-style-type: none; /* Quita los puntos */
  display: flex;         /* Los pone en fila horizontal */
  justify-content: center; /* Centra el menú */
  gap: 20px;             /* Separación entre enlaces */
  margin: 0;
  padding: 0;
}

.menu a {
  text-decoration: none; /* Quita el subrayado */
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease; /* Transición suave */
}

.menu a:hover {
  background-color: #1f5899; /* Cambia fondo al pasar el ratón */
}
~~~

---

## 2. TABLA CON EFECTO CEBRA Y ENCABEZADOS
> **¿Para qué sirve?** Muestra datos estructurados en filas y columnas de forma profesional. Los bordes se fusionan para no verse dobles, el encabezado resalta en otro color y las filas van alternando su color (efecto cebra) para que no te pierdas al leer.

**HTML:**
~~~html
<table class="styled-table">
  <caption><b>Tabla 1.</b> Lista de Productos</caption>
  <thead>
    <tr>
      <th>Nº</th>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Zapatos de piel</td>
      <td>39,99 €</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Camiseta</td>
      <td>15,00 €</td>
    </tr>
  </tbody>
</table>
~~~

**CSS:**
~~~css
.styled-table {
  width: 100%;
  border-collapse: collapse; /* Fusiona los bordes */
  margin: 20px 0;
  font-family: Arial, sans-serif;
}

.styled-table th, .styled-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

.styled-table th {
  background-color: #8B4513; /* Fondo del encabezado */
  color: white;
  text-transform: uppercase;
}

/* Efecto Cebra para las filas */
.styled-table tbody tr:nth-child(odd) {
  background-color: #4B0082; /* Color impares */
  color: white;
}

.styled-table tbody tr:nth-child(even) {
  background-color: white; /* Color pares */
  color: #4B0082;
}
~~~

---

## 3. FORMULARIO CON ESTILOS
> **¿Para qué sirve?** Diseña una caja para que el usuario introduzca datos (como registrarse o iniciar sesión). Los campos de texto ocupan todo el ancho, tienen bordes redondeados, se iluminan de color al hacer clic para escribir (focus) y tiene un botón final llamativo.

**HTML:**
~~~html
<div class="contenedor-formulario">
  <h2>Crear cuenta</h2>
  <form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre">

    <label for="correo">Correo electrónico</label>
    <input type="email" id="correo" name="correo">

    <label for="pass">Contraseña</label>
    <input type="password" id="pass" name="pass">

    <button type="submit" class="btn-enviar">Crear tu cuenta</button>
  </form>
</div>
~~~

**CSS:**
~~~css
.contenedor-formulario {
  width: 400px;
  margin: 0 auto; /* Centra el formulario en la pantalla */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

label {
  display: block; /* Pone el texto del label justo encima del input */
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"], input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #AAAAAA;
  border-radius: 5px;
}

/* Efecto Focus al hacer clic dentro para escribir */
input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus {
  border-color: #CA5F07; /* Cambia a naranja */
  outline: none;         /* Quita el reborde azul por defecto */
}

.btn-enviar {
  background-color: #FFD904;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
}
~~~

---

## 4. CAJAS ALINEADAS (FLEXBOX) - TARJETAS
> **¿Para qué sirve?** Organiza elementos (como tarjetas de productos, deportes, servicios o noticias) uno al lado del otro. Gracias a Flexbox, se reparten bien el espacio y, si la pantalla se hace pequeña, las cajas bajan automáticamente a la siguiente línea en vez de aplastarse.

**HTML:**
~~~html
<section class="seccion-cajas">
  <div class="container-flex">

    <div class="caja-info">
      <h2>Atletismo</h2>
      <a href="#" class="btn">Más info</a>
    </div>

    <div class="caja-info">
      <h2>Vela</h2>
      <a href="#" class="btn">Más info</a>
    </div>

    <div class="caja-info">
      <h2>Ciclismo</h2>
      <a href="#" class="btn">Más info</a>
    </div>

  </div>
</section>
~~~

**CSS:**
~~~css
.container-flex {
  display: flex;
  justify-content: space-around; /* Reparte el espacio equitativamente */
  align-items: center;
  flex-wrap: wrap; /* MAGIA: Bajan de línea si no caben (responsivo) */
  gap: 20px;
  padding: 40px;
}

.caja-info {
  width: 250px;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2); /* Pequeña sombra para dar volumen */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra el contenido interior verticalmente */
}

.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 15px;
  background-color: red;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
~~~

---

## 5. BANNER SUPERIOR CON IMAGEN DE FONDO
> **¿Para qué sirve?** Crea una cabecera grande o "Hero Banner" muy vistosa. Pone una imagen que cubre todo el fondo de la sección sin deformarse, oscurece un poco la zona y coloca un título perfectamente centrado en el medio.

**HTML:**
~~~html
<header class="top-banner">
  <h1 class="top-title">Título Principal de la Web</h1>
</header>
~~~

**CSS:**
~~~css
.top-banner {
  background-image: url('images/top-background.png'); /* CAMBIA LA RUTA A TU IMAGEN */
  background-size: cover;      /* Obliga a la imagen a ocupar todo el fondo */
  background-position: center; /* Centra la imagen para que no se corte por arriba */
  height: 300px;               /* Altura total del banner */
  display: flex;               /* Usamos Flexbox para centrar el H1 */
  justify-content: center;     /* Centrado horizontal */
  align-items: center;         /* Centrado vertical */
  color: white;                /* Letra blanca para que contraste */
  text-shadow: 2px 2px 4px black; /* Sombrita al texto para que se lea mejor sobre la imagen */
}
~~~

---

## 6. PIE DE PÁGINA (FOOTER) - NORMAL O FIJO
> **¿Para qué sirve?** Coloca la franja final de la página web (normalmente con derechos de autor y enlaces legales). Tienes comentado el código por si te piden que se quede "pegado" fijamente abajo del todo aunque hagas scroll en la página.

**HTML:**
~~~html
<footer class="footer">
  <p class="small">Mi Sitio Web &copy; 2024 - Creado en el examen de 1º DAM</p>
</footer>
~~~

**CSS:**
~~~css
.footer {
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 15px;

  /* DESCOMENTA ESTO SI TE PIDEN QUE ESTÉ FIJO (siempre visible abajo) */
  /*
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  */
}

/* IMPORTANTE: Si fijas el footer, pon esto al body para que el footer no tape el último texto de la web */
/*
body {
  padding-bottom: 60px;
}
*/
~~~
---

## 7. MENÚ CON LOGO A LA IZQUIERDA Y BANDERA A LA DERECHA
> **¿Para qué sirve?** El examen del año pasado pide una barra superior que tiene una imagen (logo) a la izquierda, el menú en el centro, y otra imagen (bandera) a la derecha. Esto se hace con un Flexbox y `space-between`.

**HTML:**
~~~html
<nav class="navbar">
  <div class="container-nav">
    <img class="logo" src="images/nav-logo.png" alt="Logo">
    <ul class="menu-central">
      <li><a href="#">Deportes</a></li>
      <li><a href="#">Sobre España</a></li>
      <li><a href="#">Equipo</a></li>
    </ul>
    <img class="flag" src="images/nav-spainFlag.png" alt="Bandera">
  </div>
</nav>
~~~

**CSS:**
~~~css
.navbar {
  background-color: #f8f9fa; /* Color de fondo del menú */
  padding: 10px 0;
}

.container-nav {
  display: flex;
  justify-content: space-between; /* Separa los 3 elementos: Izquierda, Centro, Derecha */
  align-items: center;            /* Centra todo verticalmente */
  max-width: 1200px;              /* Ancho máximo para que no se estire infinito */
  margin: 0 auto;                 /* Centra el contenedor en la pantalla */
  padding: 0 20px;
}

.menu-central {
  list-style: none;
  display: flex;
  gap: 20px;
}

.menu-central a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
~~~

---

## 8. CAJAS CON DISTINTAS IMÁGENES DE FONDO (MÚLTIPLES CLASES)
> **¿Para qué sirve?** En el examen hay una sección de "Deportes" donde cada caja tiene la clase general `sport-box` (para el tamaño y forma) pero también una clase específica como `athletics` o `sailing` para ponerle una imagen de fondo distinta a cada una.

**HTML:**
~~~html
<div class="sport-box athletics">
  <h2>Atletismo</h2>
</div>
<div class="sport-box sailing">
  <h2>Vela</h2>
</div>
~~~

**CSS:**
~~~css
/* Estilos que comparten TODAS las cajas */
.sport-box {
  width: 250px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Pone el texto (h2) abajo del todo */
  padding-bottom: 20px;
  color: white;
  background-size: cover;
  background-position: center;
}

/* Estilos ESPECÍFICOS para cada caja (solo cambia la imagen) */
.athletics {
  background-image: url('images/sports-athletics.png');
}

.sailing {
  background-image: url('images/sports-sailing.png');
}
~~~
