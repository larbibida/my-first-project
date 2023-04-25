let arrow = document.querySelector('.arrow-up');
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100){
    arrow.classList.add('active');
  }else{
    arrow.classList.remove('active');
  }
})


let hid = document.querySelector('.payment');
let btn = document.querySelector('.btn');
let button = document.querySelector('.button');
let hidd = document.querySelector('.all');
let butt = document.querySelector('.butt');

btn.addEventListener('click', () => {
  hidd.style.display = 'none';
  hid.style.display = 'flex';
})
button.addEventListener('click', () => {
  hidd.classList.add('hidden');
  hid.style.display = 'none';
  hidd.style.display = 'block';
}) 
