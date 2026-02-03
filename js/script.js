const toggleBtn = document.querySelector('.menu-toggle-btn');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
nav.classList.toggle('active'); // 🔹 active 클래스 토글
});

const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const desc = document.getElementById('modal-desc');
const img = document.getElementById('modal-img');
const role = document.getElementById('modal-role');

const closeBtn = document.querySelector('.close');

cards.forEach(card=>{
  card.addEventListener('click', ()=>{
    title.textContent = card.dataset.title;
    desc.textContent = card.dataset.desc;
    img.src = card.dataset.img;
    role.textContent = "사용 기술 : " + card.dataset.role;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', ()=>{
  modal.style.display = 'none';
});

window.addEventListener('click', (e)=>{
  if(e.target === modal){
    modal.style.display = 'none';
  }
});
