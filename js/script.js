
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

//  ==================== SHOWS DETALHES//
let aprofunda = document.getElementById('aprofunda')
let destaque = document.getElementById("destaque")
const show = document.getElementById("shows")
const listaShows = document.getElementById("lista-shows")  

let shows = [ 
  { artista: "Coldplay", cidade: "São Paulo", data: "10/03/2026" }, 
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" }, 
  { artista: "Beyoncé", cidade: "Belo Horizonte", data: "15/03/2026" },
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" },
  { artista: "Beyoncé", cidade: "Belo Horizonte", data: "15/03/2026" }, 
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" },
  { artista: "Beyoncé", cidade: "Belo Horizonte", data: "15/03/2026" },
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" },
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" },
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" },
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" },
  { artista: "Imagine Dragons", cidade: "Rio de Janeiro", data: "12/03/2026" }  
] 
 destaque.addEventListener('click', () =>{
    show.style.color = 'black'
    destaque.style.color = '#b48c56'
    aprofunda.innerHTML = '<h1>Próximos Shows</h1><p id="line"></p>'
    show.addEventListener('mouseenter', () =>{show.style.color = '#b48c56'})
    show.addEventListener('mouseout', ()=>{show.style.color = 'black'})
shows.forEach(show => { 
  const div = document.createElement("div") 
  div.classList.add('card') 
  div.innerHTML = ` 
    <div class="info"> 
      <h3>${show.artista}</h3> 
      <p>Cidade: ${show.cidade}</p> 
      <p>Data: ${show.data}</p> 
    </div> 
  ` 
  aprofunda.appendChild(div)
}) 
 })
    

//   ==================== PONTOS TURÍSTICAOS   //
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

  //   ==================== SOBRE   //