let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Thay đổi slide mỗi 3 giây
}

function moveSlide(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex-1].style.display = 'block';  
}
function toggleTheme() {
    const root = document.documentElement;
    if (root.style.getPropertyValue('--bg-color') === '#f0f0f0') {
        // Giao diện Tối
        root.style.setProperty('--bg-color', '#333');
        root.style.setProperty('--text-color', '#f0f0f0');
        root.style.setProperty('--header-bg-color', '#222');
        root.style.setProperty('--header-text-color', '#fff');
        root.style.setProperty('--box-shadow', 'rgba(255, 255, 255, 0.1)');
    } else {
        // Giao diện Sáng (mặc định)
        root.style.setProperty('--bg-color', '#f0f0f0');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--header-bg-color', 'rgb(189, 189, 189)');
        root.style.setProperty('--header-text-color', '#000');
        root.style.setProperty('--box-shadow', 'rgba(0, 0, 0, 0.1)');
    }
}

