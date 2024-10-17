const menu = document.getElementById('nv');
const seta = document.getElementById('seta');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

seta.addEventListener('click', () =>{
    menu.classList.toggle('hidden');
    seta.classList.toggle('hidden');
})

window.addEventListener("scroll", function()
{
    img1.classList.toggle('giro1', window.scrollY > 0);
    img1.classList.toggle('giro2', window.scrollY > 10);
    img1.classList.toggle('giro3', window.scrollY > 20);
    img1.classList.toggle('giro4', window.scrollY > 30);
    img1.classList.toggle('giro5', window.scrollY > 40);
    img1.classList.toggle('giro6', window.scrollY > 50);
    img1.classList.toggle('giro7', window.scrollY > 60);
    img1.classList.toggle('giro8', window.scrollY > 70);
    img1.classList.toggle('giro9', window.scrollY > 80);
    img1.classList.toggle('giro10', window.scrollY > 90);
    img1.classList.toggle('giro11', window.scrollY > 100);
    img1.classList.toggle('giro12', window.scrollY > 110);
    img1.classList.toggle('giro13', window.scrollY > 120);
    img1.classList.toggle('giro14', window.scrollY > 130);
    img1.classList.toggle('giro15', window.scrollY > 140);
    img1.classList.toggle('giro16', window.scrollY > 150);
    img1.classList.toggle('giro17', window.scrollY > 160);
    img1.classList.toggle('giro18', window.scrollY > 170);
    img1.classList.toggle('giro19', window.scrollY > 180);
    img1.classList.toggle('giro20', window.scrollY > 190);
    img1.classList.toggle('giro21', window.scrollY > 200);
    img1.classList.toggle('giro22', window.scrollY > 210);
    img1.classList.toggle('giro23', window.scrollY > 220);
    img1.classList.toggle('giro24', window.scrollY > 230);
    img1.classList.toggle('giro25', window.scrollY > 240);
    img1.classList.toggle('giro26', window.scrollY > 250);
    img1.classList.toggle('giro27', window.scrollY > 260);
    img1.classList.toggle('giro28', window.scrollY > 270);
    img1.classList.toggle('giro29', window.scrollY > 280);
    img1.classList.toggle('giro30', window.scrollY > 290);
    img1.classList.toggle('giro31', window.scrollY > 300);
    img1.classList.toggle('giro32', window.scrollY > 310);
    img1.classList.toggle('giro33', window.scrollY > 320);
    img1.classList.toggle('giro34', window.scrollY > 330);
    img1.classList.toggle('giro35', window.scrollY > 340);
    img1.classList.toggle('giro36', window.scrollY > 350);
    img1.classList.toggle('giro37', window.scrollY > 360);
    img2.classList.toggle('fixar', window.scrollY > 330);
});
