// Cambiar pestañas
const tabs = document.querySelectorAll('.bottom-nav button');
const sections = document.querySelectorAll('section');
tabs.forEach(btn=>{
  btn.onclick = ()=>{
    tabs.forEach(b=>b.classList.remove('active'));
    sections.forEach(s=>s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  };
});

// Cargar tarjetas de ejemplo
const movies = [
  {title:"Avatar 2",img:"assets/posters/avatar.jpg",video:"https://www.w3schools.com/html/mov_bbb.mp4"},
  {title:"Oppenheimer",img:"assets/posters/oppenheimer.jpg",video:"https://www.w3schools.com/html/mov_bbb.mp4"},
  {title:"Barbie",img:"assets/posters/barbie.jpg",video:"https://www.w3schools.com/html/mov_bbb.mp4"},
];

function loadMovies() {
  const cont = document.getElementById('resultados');
  cont.innerHTML = '';
  movies.forEach(m=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `
      <img src="${m.img}">
      <div class="info">
        <h3>${m.title}</h3>
        <button>Ver ahora</button>
      </div>`;
    card.querySelector('button').onclick = ()=>openPlayer(m.video,m.title);
    cont.appendChild(card);
  });
}
loadMovies();

// Video player
const modal=document.getElementById('playerModal');
const player=document.getElementById('player');
document.getElementById('closePlayer').onclick=()=>{modal.classList.add('hidden');player.pause();};

function openPlayer(src,title){
  modal.classList.remove('hidden');
  player.src=src;
  player.play();
}
