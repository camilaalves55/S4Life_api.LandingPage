document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider li');
    const primeiroBotao = document.querySelector('.primeiroBotao');
    const segundoBotao = document.querySelector('.segundoBotao');
    const button = document.getElementById('handleSubmit');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Mostra o primeiro slide ao carregar a página
    showSlide(currentSlide);

    // Adiciona eventos de clique aos botões de navegação
    primeiroBotao.addEventListener('click', nextSlide);
    segundoBotao.addEventListener('click', prevSlide);
});



button.onclick = async function(e) {
    e.preventDefault();
    let nome       = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data        = {nome,email}

    const response = await fetch('http://localhost:3000/api/store/s4life', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
        alert("Sucesso")
    } else {
        alert('Não');
    }
}