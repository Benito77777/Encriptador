var palabraEncriptada = "";
var palabraDesencriptada = "";
var textoEncriptado;
var palabraIngresada;
var letra_a;
var letra_b;
var letra_c;
var letra_d;
var letra_e;
var letra_f;
var letra_g;
var letra_h;
var letra_i;
var letra_j;
var letra_k;
var letra_l;
var letra_m;
var letra_n;
var letra_ñ;
var letra_o;
var letra_p;
var letra_q;
var letra_r;
var letra_s;
var letra_t;
var letra_u;
var letra_v;
var letra_w;
var letra_x;
var letra_y;
var letra_z;
var letra_espacio;
var a = "ai";
var b = "l9";
var c = "v1";
var d = "fs";
var e = "enter";
var f = "cs";
var g = "99";
var h = "gg";
var i = "imes";
var j = "bd";
var k = "vf";
var l = "sc";
var m = "v7";
var n = "lu";
var ñ = "01";
var o = "ober";
var p = "bf";
var q = "bc";
var r = "ol";
var s = "t2";
var t = "v3";
var u = "ufat";
var v = "ye";
var w = "wd";
var x = "bw";
var y = "mn";
var z = "b3";
var espacio = "77";
var encriptar = document.getElementById("botonEncriptar");
var desencriptar = document.getElementById("botonDesencriptar");
var copiar = document.getElementById("botonCopiar");
var textoParaEncriptar = document.getElementById("textoParaEncriptar");
var texto_Encriptado = document.getElementById("textoencriptado");


encriptar.addEventListener("click", function() {
     let palabraIngresadaConAcentos = textoParaEncriptar.value;
     palabraIngresada = palabraIngresadaConAcentos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
     for (let ciclo = 0; ciclo < palabraIngresada.length; ciclo++) {
        let letra = palabraIngresada.charAt(ciclo);
        
        if (letra.toLowerCase() === "a") {
            palabraEncriptada += a;
        }
        if (letra.toLowerCase() === "b") {
            palabraEncriptada += b;
        }
        if (letra.toLowerCase() === "c") {
            palabraEncriptada += c;
        }
        if (letra.toLowerCase() === "d") {
            palabraEncriptada += d;
        }
        if (letra.toLowerCase() === "e") {
            palabraEncriptada += e;
        }
        if (letra.toLowerCase() === "f") {
            palabraEncriptada += f;
        }
        if (letra.toLowerCase() === "g") {
            palabraEncriptada += g;
        }
        if (letra.toLowerCase() === "h") {
            palabraEncriptada += h;
        }
        if (letra.toLowerCase() === "i") {
            palabraEncriptada += i;
        }
        if (letra.toLowerCase() === "j") {
            palabraEncriptada += j;
        }
        if (letra.toLowerCase() === "k") {
            palabraEncriptada += k;
        }
        if (letra.toLowerCase() === "l") {
            palabraEncriptada += l;
        }
        if (letra.toLowerCase() === "m") {
            palabraEncriptada += m;
        }
        if (letra.toLowerCase() === "n") {
            palabraEncriptada += n;
        }
        if (letra.toLowerCase() === "ñ") {
            palabraEncriptada += ñ;
        }
        if (letra.toLowerCase() === "o") {
            palabraEncriptada += o;
        }
        if (letra.toLowerCase() === "p") {
            palabraEncriptada += p;
        }
        if (letra.toLowerCase() === "q") {
            palabraEncriptada += q;
        }
        if (letra.toLowerCase() === "r") {
            palabraEncriptada += r;
        }
        if (letra.toLowerCase() === "s") {
            palabraEncriptada += s;
        }
        if (letra.toLowerCase() === "t") {
            palabraEncriptada += t;
        }
        if (letra.toLowerCase() === "u") {
            palabraEncriptada += u;
        }
        if (letra.toLowerCase() === "v") {
            palabraEncriptada += v;
        }
        if (letra.toLowerCase() === "w") {
            palabraEncriptada += w;
        }
        if (letra.toLowerCase() === "x") {
            palabraEncriptada += x;
        }
        if (letra.toLowerCase() === "y") {
            palabraEncriptada += y;
        }
        if (letra.toLowerCase() === "z") {
            palabraEncriptada += z;
        }
        if (letra === " ") {
            palabraEncriptada += espacio;
        }
    }
    texto_Encriptado.value = palabraEncriptada;
    palabraEncriptada = "";
    
});


desencriptar.addEventListener("click", function() {
    let textoEncriptado = textoParaEncriptar.value;
        let inicio = 0;
        let desde;
        for (let si = 0; si < textoEncriptado.length; si++) {

            //Busca palabras que contengan 2 caracteres
            desde = textoEncriptado.substring(inicio, si + 1);
            letra_a = desde.indexOf(a);
            if (letra_a != -1) {
                palabraDesencriptada += "a";
                si += 1;
                inicio += 2;
            }
            letra_b = desde.indexOf(b);
            if (letra_b != -1) {
                palabraDesencriptada += "b";
                si += 1;
                inicio += 2;
            }
            letra_c = desde.indexOf(c);
            if (letra_c != -1) {
                palabraDesencriptada += "c";
                si += 1;
                inicio += 2;
            }
            letra_d = desde.indexOf(d);
            if (letra_d != -1) {
                palabraDesencriptada += "d";
                si += 1;
                inicio += 2;
            }
            letra_f = desde.indexOf(f);
            if (letra_f != -1) {
                palabraDesencriptada += "f";
                si += 1;
                inicio += 2;
            }
            letra_g = desde.indexOf(g);
            if (letra_g != -1) {
                palabraDesencriptada += "g";
                si += 1;
                inicio += 2;
            }
            letra_h = desde.indexOf(h);
            if (letra_h != -1) {
                palabraDesencriptada += "h";
                si += 1;
                inicio += 2;
            }
            letra_j = desde.indexOf(j);
            if (letra_j != -1) {
                palabraDesencriptada += "j";
                si += 1;
                inicio += 2;
            }
            letra_k = desde.indexOf(k);
            if (letra_k != -1) {
                palabraDesencriptada += "k";
                si += 1;
                inicio += 2;
            }
            letra_l = desde.indexOf(l);
            if (letra_l != -1) {
                palabraDesencriptada += "l";
                si += 1;
                inicio += 2;
            }
            letra_m = desde.indexOf(m);
            if (letra_m != -1) {
                palabraDesencriptada += "m";
                si += 1;
                inicio += 2;
            }
            letra_n = desde.indexOf(n);
            if (letra_n != -1) {
                palabraDesencriptada += "n";
                si += 1;
                inicio += 2;
            }
            letra_ñ = desde.indexOf(ñ);
            if (letra_ñ != -1) {
                palabraDesencriptada += "ñ";
                si += 1;
                inicio += 2;
            }
            letra_p = desde.indexOf(p);
            if (letra_p != -1) {
                palabraDesencriptada += "p";
                si += 1;
                inicio += 2;
            }
            letra_q = desde.indexOf(q);
            if (letra_q != -1) {
                palabraDesencriptada += "q";
                si += 1;
                inicio += 2;
            }
            letra_r = desde.indexOf(r);
            if (letra_r != -1) {
                palabraDesencriptada += "r";
                si += 1;
                inicio += 2;
            }
            letra_s = desde.indexOf(s);
            if (letra_s != -1) {
                palabraDesencriptada += "s";
                si += 1;
                inicio += 2;
            }
            letra_t = desde.indexOf(t);
            if (letra_t != -1) {
                palabraDesencriptada += "t";
                si += 1;
                inicio += 2;
            }
            letra_v = desde.indexOf(v);
            if (letra_v != -1) {
                palabraDesencriptada += "v";
                si += 1;
                inicio += 2;
            }
            letra_w = desde.indexOf(w);
            if (letra_w != -1) {
                palabraDesencriptada += "w";
                si += 1;
                inicio += 2;
            }
            letra_x = desde.indexOf(x);
            if (letra_x != -1) {
                palabraDesencriptada += "x";
                si += 1;
                inicio += 2;
            }
            letra_y = desde.indexOf(y);
            if (letra_y != -1) {
                palabraDesencriptada += "y";
                si += 1;
                inicio += 2;
            }
            letra_z = desde.indexOf(z);
            if (letra_z != -1) {
                palabraDesencriptada += "z";
                si += 1;
                inicio += 2;
            }
            letra_espacio = desde.indexOf(espacio);
            if (letra_espacio != -1) {
                palabraDesencriptada += " ";
                si += 1;
                inicio += 2;
            }

            //Busca palabras que contengan 4 caracteres
            desde = textoEncriptado.substring(inicio, si + 3);
            letra_i = desde.indexOf(i);
            if (letra_i != -1) {
                palabraDesencriptada += "i";
                si += 3;
                inicio += 4;
            }
            letra_o = desde.indexOf(o);
            if (letra_o != -1) {
                palabraDesencriptada += "o";
                si += 3;
                inicio += 4;
            }
            letra_u = desde.indexOf(u);
            if (letra_u != -1) {
                palabraDesencriptada += "u";
                si += 3;
                inicio += 4;
            }

            //Busca palabras que contengan 5 caracteres
            desde = textoEncriptado.substring(inicio, si + 4);
            letra_e = desde.indexOf(e);
            if (letra_e != -1) {
                palabraDesencriptada += "e";
                si += 4;
                inicio += 5;
            }
            
        }
        palabraDesencriptada = palabraDesencriptada.charAt(0).toUpperCase() + palabraDesencriptada.slice(1);
        texto_Encriptado.value = palabraDesencriptada;
        palabraDesencriptada = "";
    });

    copiar.addEventListener("click", function() {
        texto_Encriptado.select();
        document.execCommand("copy");
        texto_Encriptado.setSelectionRange(0, 0);
        textoParaEncriptar.value = "";
        
    });

    function ajustarAltura() {
        var textarea = document.getElementById("textoParaEncriptar", "textoencriptado");
        textarea.style.height = "auto"; // Restaurar la altura automática
        
        // Calcular la altura deseada del textarea
        var alturaDeseada = textarea.scrollHeight + "px";
        
        // Establecer la altura del textarea según el contenido
        textarea.style.height = alturaDeseada;
      }
      
