# JavaScript y Manipulación del DOM

## 1. Introducción y Conceptos Básicos
JavaScript es un lenguaje de programación interpretado, orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
* **Arquitectura Cliente-Servidor:** JS se ejecuta del lado del cliente (en el navegador). Esto agiliza la navegación porque permite procesar datos y validar formularios sin tener que enviar peticiones al servidor y esperar su respuesta.
* **Implementación en HTML:**
    * **Inline:** Directamente en atributos de etiquetas HTML para eventos (ej. `<p onclick="...">`).
    * **Etiqueta `<script>`:** Código embebido dentro del `<head>` o `<body>`.
    * **Archivo externo:** Usando `<script src="script.js"></script>`. Es la mejor práctica porque permite reutilizar código, mejora el rendimiento (caché) y facilita el mantenimiento.
    * **Atributo `defer`:** Se añade a la etiqueta `<script>` en el `<head>` para garantizar que el HTML se cargue por completo antes de ejecutar el script, evitando que la página se bloquee.

## 2. Variables y Tipos de Datos
* **Declaración de variables:**
    * `var`: Forma tradicional. Tiene ámbito de función (permite redeclarar).
    * `let`: Ámbito de bloque. Permite reasignar valores, pero es más seguro que `var` y evita errores de alcance.
    * `const`: Ámbito de bloque. Declara constantes de solo lectura cuyo valor no puede ser reasignado una vez inicializado.
* **Tipos Primitivos:** `Number` (enteros y decimales), `String` (texto), `Boolean` (true/false), `Null` (ausencia intencional de valor), `Undefined` (variable declarada pero sin valor asignado).
* **Tipos No Primitivos:** `Object` (colección de propiedades), `Array` (colección ordenada), `Function`, `Date`, `RegExp` (expresiones regulares).
* **Mostrar variables (Strings):**
    * **Concatenación:** Uso del operador `+` (ej. `"Hola " + nombre`).
    * **Plantillas de cadena (Template Literals):** Uso de backticks o acento grave ( `` ` `` ) y `${}` (ej. `` `Hola ${nombre}` ``).

## 3. Interacción, Depuración y Conversión (Métodos Nativos)
* **Interacción y Registro:**
    * `prompt()`: Muestra un cuadro de diálogo para que el usuario ingrese datos (texto).
    * `alert()`: Muestra un cuadro emergente de advertencia/mensaje.
    * `console.log()`: Imprime mensajes en la consola del navegador (ideal para depurar sin molestar al usuario).
* **Conversión y Formato Numérico:**
    * `parseInt()`: Convierte una cadena de texto en un número entero.
    * `parseFloat()`: Convierte una cadena de texto en un número decimal (punto flotante).
    * `isNaN()`: Determina si un valor NO es un número (*Not a Number*).
    * `toFixed(n)`: Formatea un número dejándolo con `n` decimales fijos a la derecha del punto.

## 4. Operadores
* **Aritméticos:** `+`, `-`, `*`, `/`, `%` (Módulo o resto).
* **Combinados:** `++` (incremento), `--` (decremento), `+=`, `-=`, `*=`, `/=`, `%=`.
* **Lógicos:** `&&` (AND), `||` (OR), `!` (NOT).
* **Comparación:** `==` (igual valor), `===` (igual valor y tipo estricto), `!=` (diferente), `!==` (diferente estricto), `<`, `>`, `<=`, `>=`.

## 5. Estructuras de Control y Bucles
* **Condicionales:** `if`, `else if`, `else`. (Las llaves `{}` son opcionales si solo hay una línea, pero es buena práctica ponerlas siempre).
* **Switch:** Evalúa una expresión y ejecuta el bloque `case` coincidente. Se debe usar `break` para salir, o `default` si no hay coincidencias.
* **Bucles:**
    * `for`: Se usa cuando se conoce el número exacto de iteraciones (ej. `for(let i=0; i<5; i++)`).
    * `while`: Repite el bloque mientras la condición sea verdadera.
    * `do-while`: Se ejecuta al menos una vez antes de comprobar la condición.
* **Interrupciones:** * `break` (sale del bucle por completo).
    * `continue` (salta esa iteración concreta y pasa a la siguiente).
    * *Nota:* Su uso excesivo se desaconseja porque dificulta la legibilidad.

## 6. Funciones
Son bloques de código reutilizables. Pueden devolver valores usando `return`.
* **Tradicionales:** `function saludar(nombre) { return "Hola " + nombre; }` (Se pueden llamar desde cualquier parte).
* **Anónimas:** No tienen nombre y suelen asignarse a variables. `let saludar = function(nombre) { ... }` (Útiles para contextos específicos).
* **De Flecha (Arrow Functions):** Forma más concisa de escribir funciones anónimas. `let saludar = (nombre) => { ... }`

## 7. Arrays y Strings (Métodos Útiles)
* **Arrays:** Colecciones ordenadas (los índices empiezan en 0).
    * `push()` / `pop()`: Añade al final / Elimina y devuelve el último.
    * `splice()`: Cambia el contenido eliminando o agregando elementos.
    * `concat()`, `join()`, `reverse()`, `sort()`, `forEach()`, `toString()`.
* **Strings:**
    * `toUpperCase()`, `toLowerCase()`, `indexOf()`, `lastIndexOf()`, `slice()`, `replace()`, `split()`, `trim()`.
* **Caracteres de escape útiles:** `\'` (comilla simple), `\"` (comilla doble), `\\` (barra), `\n` (salto de línea), `\t` (tabulación).

## 8. El DOM (Document Object Model)
Representación en forma de árbol del documento HTML. Permite acceder y modificar etiquetas desde JS a través del objeto `document`.
* **Selección de Elementos:**
    * `document.getElementById('id')`: Devuelve un único elemento por su ID.
    * `document.getElementsByClassName('clase')`: Devuelve una colección de elementos.
    * `document.getElementsByTagName('etiqueta')`: Devuelve una colección por tipo de etiqueta.
    * `document.querySelector('selectorCSS')`: Devuelve el PRIMER elemento que coincida (ej. `#id`, `.clase`).
    * `document.querySelectorAll('selectorCSS')`: Devuelve TODOS los elementos coincidentes.
* **Modificación de Elementos:**
    * `document.write("texto")`: Escribe contenido directo en el HTML. **Cuidado:** No se recomienda porque puede sobreescribir todo el documento existente.
    * `element.innerHTML`: Obtiene/modifica el contenido HTML interno de una etiqueta.
    * `element.textContent`: Obtiene/modifica el contenido de texto plano.
    * `element.setAttribute('atributo', 'valor')`: Establece el valor de un atributo.
    * `element.removeAttribute('atributo')`: Elimina un atributo especificado.
    * `element.style.propiedad = 'valor'`: Modifica estilos CSS en línea (ej. `element.style.color = "blue"`).
* **Creación y Eliminación:**
    * `document.createElement('etiqueta')`: Crea un nuevo elemento HTML.
    * `document.createAttribute('atributo')`: Crea un nuevo objeto de atributo.
    * `element.setAttributeNode(nuevoAtributo)`: Añade un objeto atributo creado a un elemento.
    * `element.appendChild(nodo)`: Añade un nodo al final de los hijos de un elemento.
    * `element.remove()`: Elimina un elemento del DOM.

## 9. Eventos
Permiten detectar acciones del usuario. La forma recomendada de añadirlos es mediante Listeners en JavaScript.
* **`addEventListener('evento', funcion)`:** Agrega un escuchador a un elemento. Se pueden usar funciones de flecha para un código más limpio.
    * *Ejemplo:* `document.getElementById('btn').addEventListener('click', () => { alert('Click!'); });`
* **Eventos mediante atributos HTML:** (No recomendados para proyectos grandes) `onclick`, `onmouseover`, `onkeydown`, etc.
* **Tipos de eventos comunes:**
    * **Ratón:** `click`, `dblclick`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`, `contextmenu` (clic derecho).
    * **Teclado:** `keydown` (al pulsar), `keyup` (al soltar), `keypress` (mantener).
    * **Formularios/Ventana:** `change` (al cambiar valor), `submit` (enviar formulario), `focus` (recibe foco), `blur` (pierde foco), `load` (recurso cargado), `scroll` (desplazamiento), `resize` (cambio tamaño ventana).

---

## 10. Extras útiles (Navegación DOM, JSON y Eventos)
*(Conceptos que suelen entrar en ejercicios prácticos y complementan el temario)*

* **Navegación por el DOM (Traversing):** Una vez tienes un elemento, puedes "moverte" a sus familiares sin usar `querySelector`:
    * `element.parentNode` o `element.parentElement`: Accede al nodo padre directo.
    * `element.children`: Devuelve una colección con los nodos hijos (solo etiquetas HTML).
    * `element.nextElementSibling` / `element.previousElementSibling`: Accede al elemento hermano inmediatamente anterior o posterior.
* **El objeto Event (`e`) y Prevención por defecto:** Cuando un evento se dispara, JS genera automáticamente un "objeto evento" que contiene información. Se suele pasar como parámetro `e` o `event` a la función.
    * `e.preventDefault()`: **Fundamental para formularios.** Cancela el comportamiento por defecto de una etiqueta. Si lo usas en el `submit` de un `<form>`, evitas que la página se recargue, permitiéndote validar los datos por JS.
    * `e.target`: Te dice exactamente qué elemento del HTML disparó el evento.
* **JSON (JavaScript Object Notation):** Es el estándar para enviar y recibir datos en la web (muy útil para futuros temas de persistencia o APIs).
    * `JSON.stringify(objeto)`: Convierte un objeto o array de JS en una cadena de texto plana (String).
    * `JSON.parse(string)`: Convierte una cadena de texto (que tenga formato JSON válido) de vuelta a un objeto/array de JS funcional.
* **`classList` para manipular clases CSS:** Es la forma recomendada moderna en lugar de sobreescribir atributos con `setAttribute`.
    * `element.classList.add('clase')`: Añade una clase al elemento sin borrar las que ya tiene.
    * `element.classList.remove('clase')`: Quita una clase.
    * `element.classList.toggle('clase')`: Si la tiene, se la quita; si no la tiene, se la pone (ideal para botones de "modo oscuro" o menús desplegables).

---

## 11. Hoja de Trucos de JS

### Javascript Array
    var num = [1, 2, 3, 4];
    num.at(1)               // 2
    num.push(5)             // Add element to the end: [1, 2, 3, 4, 5]
    num.pop()               // remove last element: [1, 2, 3]
    num.fill(1)             // fill every element: [1, 1, 1, 1]
    num.shift()             // remove first element: [2, 3, 4]
    num.unshift(5)          // Add element to beginning: [5, 1, 2, 3, 4 ]
    num.reverse()           // sort in descending order: [4, 3, 2, 1]
    num.includes(2)         // is array contains a specified value: true
    num.map( item => 2*item)          // Map elementsz; [2, 4, 6, 8]
    num.filter( item => item > 2)     // filter elemet: [3, 4]
    num.find(item => item > 2)        // Find element : 3(first match)
    num.every(item => item > 0)       // true
    num.findIndex(item => item === 2) // 1
    num.reduce( (prev, curr) => prev + curr, 0) // 10
    num.toString();         // convert to string
    num.join(" * ");        // join: "1 * 2 * 3 * 4"
    num.splice(2, 0, "i", "p"); // add elements : [1, 2, 'i', 'p', 3, 4]
    num.slice(1,4);         // slice elements from [1] to [4-1]
    num.sort();             // sort string alphabetically
    x.sort(function(a, b){return a - b});   // numeric sort
    x.sort(function(a, b){return b - a});   // numeric descending sort
    x.sort(function(a, b){return 0.5 - Math.random()}); // random sort

### Javascript Dates
    var d = new Date();

    Date("2017-06-23");                   // date declaration
    Date("2017");                         // is set to Jan 01
    Date("2017-06-23T12:00:00-09:45");    // YYYY-MM-DDTHH:MM:SSZ
    Date("June 23 2017");                 // long date format
    Date("Jun 23 2017 07:45:00 GMT+0530"); // time zone

    a = d.getDay();         // getting the weekday

    getDate();              // day as a number (1-31)
    getDay();               // weekday as a number (0-6)
    getFullYear();          // four digit year (yyyy)
    getHours();             // hour (0-23)
    getMilliseconds();      // milliseconds (0-999)
    getMinutes();           // minutes (0-59)
    getMonth();             // month (0-11)
    getSeconds();           // seconds (0-59)
    getTime();              // milliseconds since 1970

### Errors Handlings
    try {         // block of code to try
      undefinedFunction();
    }
    catch(err) {  // block to handle errors
      console.log(err.message);
    }

    // Input validation
    var x = document.getElementById("mynum").value;

    try {
      if(x == "")  throw "empty";         // error cases
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x > 10)   throw "too high";
    }
    catch(err) {                          // if there's an error
      document.write("Input is " + err);  // output error
      console.error(err);                 // write the error in console
    }
    finally {
      // executed regardless of the try / catch result
      document.write("</br />Done");
    }

### Javascript JSON
    var str = '{"names":[' +          // crate JSON object
      '{"first":"Hakuna","lastN":"Matata" },' +
      '{"first":"Jane","lastN":"Doe" },' +
      '{"first":"Air","last":"Jordan" }]}';

    myObj = JSON.parse(str);          // parse
    document.write(myObj.names[1].first); // access
    var myJSON = JSON.stringify(myObj);   // stringify
    localStorage.setItem("testJSON", myJSON); // storing data
    text = localStorage.getItem("testJSON");  // retrieving data

### Javascript Object
    var student = {                   // object name
      firstName:"Jane",               // list of properties and values
      lastName:"Doe",
      age:18,
      height:170,
      fullName : function() {         // object function
         return this.firstName + " " + this.lastName;
      }
    };
    student.age = 19;                 // setting value
    student[age]++;                   // incrementing
    name = student.fullName();        // call object function

### Javascript Events
    // Mouse
    onclick, oncontextmenu, ondblclick, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseover, onmouseout, onmouseup

    // Keyboard
    onkeydown, onkeypress, onkeyup

    // Frame
    onabort, onbeforeunload, onerror, onhashchange, onload, onpageshow, onpagehide, onresize, onscroll, onunload

    // Form
    onblur, onchange, onfocus, onfocusin, onfocusout, oninput, oninvalid, onreset, onsearch, onselect, onsubmit

    // Drag
    ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop

    // Animation
    animationend, animationiteration, animationstart

    // Media
    onabort, oncanplay, oncanplaythrough, ondurationchange, onended, onerror, onloadeddata, onloadedmetadata, onloadstart, onpause, onplay, onplaying, onprogress, onratechange, onseeked, onseeking, onstalled, onsuspend, ontimeupdate, onvolumechange, onwaiting

    // Miscellaneous
    transitionend, onmessage, onmousewheel, ononline, onoffline, onpopstate, onshow, onstorage, ontoggle, onwheel, ontouchcancel, ontouchend, ontouchmove, ontouchstart
