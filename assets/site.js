
const burger=document.querySelector('.burger');
const menu=document.querySelector('.mobile-menu');
function closeMenu(){menu?.classList.remove('open');burger?.setAttribute('aria-expanded','false');}
burger?.addEventListener('click',()=>{const open=menu.classList.toggle('open');burger.setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(!e.target.closest('.sitenav')||e.target.closest('.mobile-menu a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open')){closeMenu();burger.focus();}});
document.querySelectorAll('.carousel').forEach(car=>{
 const slides=[...car.querySelectorAll('.carousel-slide')];let cur=0;
 function move(direction){slides[cur].classList.remove('active');cur=(cur+direction+slides.length)%slides.length;slides[cur].classList.add('active');car.querySelector('.carousel-counter').textContent=`${cur+1} / ${slides.length}`;}
 car.querySelectorAll('[data-direction]').forEach(btn=>btn.addEventListener('click',()=>move(Number(btn.dataset.direction))));
 car.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}});
});
