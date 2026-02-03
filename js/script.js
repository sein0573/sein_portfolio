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
const detail = document.getElementById('modal-detail');
const closeBtn = document.querySelector('.close');

const viewer = document.getElementById('img-viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerClose = document.querySelector('.img-close');
const modalImgs = document.querySelectorAll('.modal-img');


cards.forEach(card=>{
  card.addEventListener('click', ()=>{
    title.textContent = card.dataset.title;
    desc.textContent = card.dataset.desc;
    img.src = card.dataset.img;
    role.textContent = "🛠 사용 기술 : " + card.dataset.role;
    detail.textContent = card.dataset.detail;
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

// 모달 이미지 클릭 → 크게 보기
img.addEventListener('click', ()=>{
    viewer.style.display = 'flex';
    viewerImg.src = img.src;
});


// X 버튼
viewerClose.addEventListener('click', ()=>{
    viewer.style.display = 'none';
});

// 바깥 클릭 시 닫기
viewer.addEventListener('click', (e)=>{
    if(e.target === viewer){
        viewer.style.display = 'none';
    }
});