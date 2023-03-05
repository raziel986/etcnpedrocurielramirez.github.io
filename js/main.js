//Código en el lenguaje javascript

//Asignamos el boton a una variable
var btn = document.getElementById('btn-calcular');
var btn_limpiar = document.getElementById('btn-limpiar');
var btn_iniciar = document.getElementById('btn-iniciar');
var container = document.getElementsByClassName('container')[0]
var inicio = document.getElementsByClassName('inicio')[0]


//Acción para calcular (Se ejecuta al momento de hacer click en el boton)
btn.addEventListener('click', function () {
    //Asignamos lo valores de los campos a las variables a,b,c y resultado
    var a = document.getElementById('a').value,
        b = document.getElementById('b').value,
        c = document.getElementById('c').value,
        resultado = document.getElementById('resultado');

    //Validar que los campos no esten vacíos
    if (a === "" || b === "" || c === "") {
        resultado.innerHTML = `<div class="resolucion"><h3>Resultado</h3><p class="error">Error. Debe completar todos los campos</p></div>`
        btn.style.display = "none"
        btn_limpiar.style.display = "block"
        return
    }

    //Calcular la cantidad subradical
    var cant_subradical = (b * b) - 4 * a * c
    //Evaluamos que la cantidad subradical no sea negativa. en caso de ser negativa se muestra un mensaje
    if (cant_subradical < 0) {
        //Se carga el mensaje a la sección resultado
        resultado.innerHTML = `<div class="resolucion"><h3>Resultado</h3><p class="error">No existe solución real para esta ecuación</p></div>`
    } else {
        //Se declaran la variables x1 y x2
        var x1, x2;
        //Asignamos a la variable x1 el valor obtenido de la primera raiz
        x1 = (-1 * b + Math.sqrt(cant_subradical)) / (2 * a)
        //Asignamos a la varoable x2 el valor obtenido de la segunda raiz
        x2 = (-1 * b - Math.sqrt(cant_subradical)) / (2 * a)
        resultado.innerHTML = `
        <div class="resolucion">
            <details>
                <summary>Paso a paso</summary>
                <h4>Fórmula</h4>
                <p>
                    <code><strong>x</strong> = (-b ± √(b<sup>2</sup> - 4*a*c))/2*a</code>
                </p>
                <h4>Paso 1: Sustituimos los valores de A, B y C en la ecuación</h4>
                <p>
                    <code><strong>x</strong> = (-(${b}) ± √((${b})<sup>2</sup>-4*${a}*${c})))/(2*${a})</code>
                </p>
                <h4>Paso 2: Se obtiene la <strong>cantidad subradical</strong></h4>
                <p>
                    <code><strong>x</strong> = (-(${b}) ± √(${(b*b)}${eval_signo((-4*a*c))}))/${(2*a)}     <strong>=></strong>     <strong>x</strong> = (-(${b}) ± √${cant_subradical})/${(2*a)}</code>
                </p>
                <h4>Paso 3: Se calcula el valor de la raiz</h4>
                <p>
                    <code><strong>x</strong> = -(${b}) ± (${Math.sqrt(cant_subradical)}))/${(2*a)}</code>
                </p>
                <h4>Paso 4: Se obtienen los valores de x<sub>1</sub> (+) y x<sub>2</sub> (-)</h4>
                <p>
                    <code><strong>x<sub>1</sub></strong> = ((${-1*b})+(${Math.sqrt(cant_subradical)}))/${(2*a)}  <strong>=></strong>  <strong>x<sub>1</sub></strong> = ${(-1*b)+Math.sqrt(cant_subradical)}/${(2*a)}</code>
                </p>
                <br>
                <p>
                    <code><strong>x<sub>2</sub></strong> = ((${-1*b})-(${Math.sqrt(cant_subradical)}))/${(2*a)} <strong>=></strong>  <strong>x<sub>2</sub></strong> = ${(-1*b)-Math.sqrt(cant_subradical)}/${(2*a)}</code>
                </p>
            </details>
            <br>
            <h3>Resultado</h3>
            <span class="resultado" style="margin-right:20px;"><code><strong>x<sub>1</sub></strong> = ${x1}</code> </span><span class="resultado"><code><strong>x<sub>2</sub></strong> = ${x2}</code></span>
        </div>
        `
    }
    btn.style.display = "none"
    btn_limpiar.style.display = "block"
})

btn_iniciar.addEventListener('click', function () {
    btn_iniciar.style.display = "none"
    inicio.style.display = "none"
    btn.style.display = "block"
    container.style.display = "block"
})
btn_limpiar.addEventListener('click', function () {
    document.getElementById('a').value = ""
    document.getElementById('b').value = ""
    document.getElementById('c').value = ""
    document.getElementById('resultado').innerHTML = ""
    btn.style.display = "block"
    btn_limpiar.style.display = "none"
})

function eval_signo(expresion) {
    if (expresion > 0) {
        return `+ ${expresion}`
    }
    return `${expresion}`
}
