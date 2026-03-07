
const btnMenu = document.getElementById("btnMenu")
const menu = document.getElementById("menu")
window.onclick = e => { if (e.target == menu) menu.style.display = "none"; };

btnMenu.addEventListener('click', butt)

function butt(){
  menu.style.display = 'block'
}
function submenu(){
  menu.style.display = 'none'
}

let primeiro = document.getElementById("prim")
let segundo = document.getElementById("segu")
let terceiro = document.getElementById("terc")
let res = document.getElementById("resultado")
let moda_contente = document.getElementById("modal-content")
let fechar = document.querySelector(".close");
let moda_texto = document.getElementById("modal-texto")
fechar.onclick = () => { res.style.display = "none"; };
window.onclick = e => { if (e.target == res) res.style.display = "none"; };

primeiro.addEventListener('click', priclick)
segundo.addEventListener('click', suclick)
terceiro.addEventListener('click', teclck)

function priclick(){
  res.style.display = 'block'
  moda_texto.innerHTML = `<h3>
                        Matias Damasio. <br>
                        <img src="imagen/Matias Damasio.jpg" ><br>
                        Representando Angola em portugal e em muitos outros países lus&oacute;fonos...
                    </h3>`
  
}

function suclick(){
  res.style.display = 'block'
  moda_texto.innerHTML = `<h3>
                       Serra da leba.<br> 
                        <img src="imagen/montanha-serra-da-leba-Lubango-252.jpg" width="144px" height="147"><br>
                        conciderado um dos melhores pontus turistico de Angola...</h3>`
}

function teclck(){
  res.style.display = 'block'
  moda_texto.innerHTML = `<h3>
                        hotel-epic-sana<br> 
                        <img src="imagen/hotel-epic-sana.jpg" alt=""><br>
                        conciderado um hotel cinco estrelas...</h3>`
}


function processar(){
    var txt = window.document.getElementById("resresul")
    var res = window.document.getElementById("resultados")
    var provin = String(txt.value)
      switch (provin) {
        case 'Luanda':
            res.innerHTML = '<p>Luanda</p>'
            break;
      case 'Huambo':
            res.innerHTML = '<p>Huambo</p>'
            break;
        case 'Benguela':
            res.innerHTML = '<p>Benguela</p>'
            break;
        case 'Cuanza-sul':
            res.innerHTML = '<p>Cuanza-sul</p>'
            break;
        case 'Bié':
            res.innerHTML = '<p>Bi&eacute;</p>'
            break;
        case 'Cabinda':
            res.innerHTML = '<p>Cabinda</p>'
            break;
        case 'Cuando Cubango':
            res.innerHTML = '<p>Cuando Cubango</p>'
            break;
        case 'Namibe':
            res.innerHTML = '<p>Namibe</p>'
            break;
        default:
            res.innerHTML = '<p>Noa encontrado</p>'
            break;
      }
    
  }