// HTML'deki butonu JavaScript'e tanıtıyoruz
const buton = document.getElementById('renkButonu');

// Rastgele renk üreten fonksiyon
function rastgeleRenkUret() {
    const renkler = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'];
    const rastgeleIndeks = Math.floor(Math.random() * renkler.length);
    return renkler[rastgeleIndeks];
}

// Butona tıklandığında yapılacaklar
buton.addEventListener('click', function() {
    // Sayfanın arka plan rengini değiştiriyoruz
    document.body.style.backgroundColor = rastgeleRenkUret();
});
