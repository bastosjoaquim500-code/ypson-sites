
java.lang.Object 
 | 
 +--java.net.ServerSocket 
import java.net.*; 
import java.io.*; 
public class Servidor{ 
 public static void main(String[] args) throws IOException{ 
 ServerSocket serverSocket = null; 
 try { 
 serverSocket = new ServerSocket(4445); 
 }catch (IOException e) { 
 System.err.println("O servidor nao pode ouvir a porta"); 
 System.exit(1); 
 } 
 
 Socket clientSocket = null; 
 try { 
 System.out.println("Servidor esperando conexão!"); 
 clientSocket = serverSocket.accept(); 
 }catch (IOException e){ 
 System.err.println("A conexao falhou!"); 
 System.exit(1); 
 } 
 PrintWriter out = new PrintWriter ( clientSocket.getOutputStream(),true); 
 BufferedReader in = new BufferedReader( 
 new InputStreamReader(clientSocket.getInputStream())); 
 out.println(in.readLine()); 
} 
} 
import java.io.*; 
import java.net.*; 
public class EchoClient { 
 public static void main(String[] args) throws IOException { 
 Socket echoSocket = null; 
 PrintWriter out = null; 
 BufferedReader in = null; 
 try { 
 echoSocket = new Socket("127.0.0.1", 4445); 
 out = new PrintWriter(echoSocket.getOutputStream(), true); 
 in = new BufferedReader( 
 new InputStreamReader(echoSocket.getInputStream())); 
 } catch (UnknownHostException e) { 
 System.err.println("Host desconhecido"); 
 System.exit(1); 
 } catch (IOException e) { 
 System.err.println("Nao foi possivel estabeler uma conexao."); 
 System.exit(1); 
 } 
 for(int vc=0; vc<args.length; vc++) { 
 out.println(args[vc]); 
 System.out.println("echo: " + in.readLine()); 
 } 
 out.close(); 
 in.close(); 
 echoSocket.close(); 
 } 
} 
class validator {

    constructor() {
         this.validator =[
            'data-min-length',

            ]
    }
    //iniciar todas as validações de todos os campos
    validate(form){

        //pega os inputs
        let inputs = form.getElementByIdTagName('input');


        //HTMLCollection  
        let imputsArray = [...inputs];

        //loop nos inputs e validações meadiante oa que for encontrado
      inputsArray.forEach(function(input){
       

        //loop em todos as validacoes existentes
        for(let i = 0; this.validations.length > i; i++){
            //verfica se a validação actual existe no input
            if(input.getAtribute(this.validations[i]) |=null){

                //limpando a string para virar um método
                let method = this.validations[i].replace('data-','').replace('-','-');
                //valor do input
                let value - input.getAttribute(this.validations[i]);
                //invocar o método
                this[method](input, value);
            }
        }

      }, this);
    }

    //verfica se um input tem número minimo de caracteres
    minlength(input, minValue){
        let inputLenght = input.value.length;

        let errorMessage = 'o campo precisa ter pelo menos ${minValue} caracteres';
        if(inputLenght < minValue){
            this.printMessager(input, errorMessage);
        }
    }
    // metodos para inprimir menssagens de erro na tela
    printMessager(input, msg){
        let template = document.querySelector('.error-validation').cloneMode(true);

        template.textcontent = msg;

        let inputParent = input.parentNode;

        template.classList.remover('template');
        inputParent.appendChild(template);
    }
}


let form = document.getElementById("registe-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

//que mostra as validações

submit.addEventListener('çlick', function(e){

    e.preventDefault();

    validator.validate(form);

});
$('.btn').click( function(){
    $('.menu-mobile').slideToggle()('show')
   // $('.btn').slideToggle('show')
});
http.listen(3000, function(){
    console.log('listening on port 3000')
})
$(function(){
    $('input').onkeydown(function(keycode){
        console.log(keycode)
    })
})

            (function() {
                'use strict';
                function k(a) {
                    var b = 0;
                    return function() {
                        return b < a.length ? {
                            done: !1,
                            value: a[b++]
                        } : {
                            done: !0
                        }
                    }
                }
                function l(a) {
                    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
                    if (b)
                        return b.call(a);
                    if (typeof a.length == "number")
                        return {
                            next: k(a)
                        };
                    throw Error(String(a) + " is not an iterable or ArrayLike");
                }
                var m = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
                    if (a == Array.prototype || a == Object.prototype)
                        return a;
                    a[b] = c.value;
                    return a
                }
                ;
                function n(a) {
                    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        if (c && c.Math == Math)
                            return c
                    }
                    throw Error("Cannot find global object");
                }
                var p = n(this);
                function q(a, b) {
                    if (b)
                        a: {
                            var c = p;
                            a = a.split(".");
                            for (var d = 0; d < a.length - 1; d++) {
                                var e = a[d];
                                if (!(e in c))
                                    break a;
                                c = c[e]
                            }
                            a = a[a.length - 1];
                            d = c[a];
                            b = b(d);
                            b != d && b != null && m(c, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                }
                q("Object.is", function(a) {
                    return a ? a : function(b, c) {
                        return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
                    }
                });
                q("Array.prototype.includes", function(a) {
                    return a ? a : function(b, c) {
                        var d = this;
                        d instanceof String && (d = String(d));
                        var e = d.length;
                        c = c || 0;
                        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                            var f = d[c];
                            if (f === b || Object.is(f, b))
                                return !0
                        }
                        return !1
                    }
                });
                q("String.prototype.includes", function(a) {
                    return a ? a : function(b, c) {
                        if (this == null)
                            throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
                        if (b instanceof RegExp)
                            throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
                        return this.indexOf(b, c || 0) !== -1
                    }
                });
                function r(a, b, c) {
                    a("https://csp.withgoogle.com/csp/proto/" + encodeURIComponent(b), JSON.stringify(c))
                }
                function t() {
                    var a;
                    if ((a = window.ppConfig) == null ? 0 : a.disableAllReporting)
                        return function() {}
                        ;
                    var b, c, d, e;
                    return (e = (b = window) == null ? void 0 : (c = b.navigator) == null ? void 0 : (d = c.sendBeacon) == null ? void 0 : d.bind(navigator)) != null ? e : u
                }
                function u(a, b) {
                    var c = new XMLHttpRequest;
                    c.open("POST", a);
                    c.send(b)
                }
                function v() {
                    var a = (w = Object.prototype) == null ? void 0 : w.__lookupGetter__("__proto__")
                      , b = x
                      , c = y;
                    return function() {
                        var d = a.call(this), e, f, g, h;
                        r(c, b, {
                            type: "ACCESS_GET",
                            origin: (f = window.location.origin) != null ? f : "unknown",
                            report: {
                                className: (g = d == null ? void 0 : (e = d.constructor) == null ? void 0 : e.name) != null ? g : "unknown",
                                stackTrace: (h = Error().stack) != null ? h : "unknown"
                            }
                        });
                        return d
                    }
                }
                function z() {
                    var a = (A = Object.prototype) == null ? void 0 : A.__lookupSetter__("__proto__")
                      , b = x
                      , c = y;
                    return function(d) {
                        d = a.call(this, d);
                        var e, f, g, h;
                        r(c, b, {
                            type: "ACCESS_SET",
                            origin: (f = window.location.origin) != null ? f : "unknown",
                            report: {
                                className: (g = d == null ? void 0 : (e = d.constructor) == null ? void 0 : e.name) != null ? g : "unknown",
                                stackTrace: (h = Error().stack) != null ? h : "unknown"
                            }
                        });
                        return d
                    }
                }
                function B(a, b) {
                    C(a.productName, b);
                    setInterval(function() {
                        C(a.productName, b)
                    }, a.periodicReportingRateMillis)
                }
                var D = "constructor __defineGetter__ __defineSetter__ hasOwnProperty __lookupGetter__ __lookupSetter__ isPrototypeOf propertyIsEnumerable toString valueOf __proto__ toLocaleString x_ngfn_x".split(" "), E = D.concat, F = navigator.userAgent.match(/Firefox\/([0-9]+)\./), G = (!F || F.length < 2 ? 0 : Number(F[1]) < 75) ? ["toSource"] : [], H;
                if (G instanceof Array)
                    H = G;
                else {
                    for (var I = l(G), J, K = []; !(J = I.next()).done; )
                        K.push(J.value);
                    H = K
                }
                var L = E.call(D, H)
                  , M = [];
                function C(a, b) {
                    for (var c = [], d = l(Object.getOwnPropertyNames(Object.prototype)), e = d.next(); !e.done; e = d.next())
                        e = e.value,
                        L.includes(e) || M.includes(e) || c.push(e);
                    e = Object.prototype;
                    d = [];
                    for (var f = 0; f < c.length; f++) {
                        var g = c[f];
                        d[f] = {
                            name: g,
                            descriptor: Object.getOwnPropertyDescriptor(Object.prototype, g),
                            type: typeof e[g]
                        }
                    }
                    if (d.length !== 0) {
                        c = l(d);
                        for (e = c.next(); !e.done; e = c.next())
                            M.push(e.value.name);
                        var h;
                        r(b, a, {
                            type: "SEAL",
                            origin: (h = window.location.origin) != null ? h : "unknown",
                            report: {
                                blockers: d
                            }
                        })
                    }
                }
                ;var N = Math.random()
                  , O = t()
                  , P = window.ppConfig;
                P && (P.disableAllReporting || P.deleteIsEnforced && P.sealIsEnforced || N < P.heartbeatRate && r(O, P.productName, {
                    origin: window.location.origin,
                    type: "HEARTBEAT"
                }));
                var y = t()
                  , Q = window.ppConfig;
                if (Q)
                    if (Q.deleteIsEnforced)
                        delete Object.prototype.__proto__;
                    else if (!Q.disableAllReporting) {
                        var x = Q.productName;
                        try {
                            var w, A;
                            Object.defineProperty(Object.prototype, "__proto__", {
                                enumerable: !1,
                                get: v(),
                                set: z()
                            })
                        } catch (a) {}
                    }
                (function() {
                    var a = t()
                      , b = window.ppConfig;
                    b && (b.sealIsEnforced ? Object.seal(Object.prototype) : b.disableAllReporting || (document.readyState !== "loading" ? B(b, a) : document.addEventListener("DOMContentLoaded", function() {
                        B(b, a)
                    })))
                }
                )();
            }