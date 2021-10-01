const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'salmon';
    document.body.classList.toggle('biru-muda');
}





// Make Button Use Javascript (Random Color)

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const h = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ h +')';
});


const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    document.body.style.backgroundColor = 'rgb('+ r +',100,100)'
});


// Mouse
document.body.addEventListener('mousemove', function(event) {

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)'

});




