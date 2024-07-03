document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('show'));
        dots.forEach(dot => dot.classList.remove('dotActive'));
        
        slides[index].classList.add('show');
        dots[index].classList.add('dotActive');
        currentSlide = index;
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
    
    const navBar = document.getElementsByClassName('navBar')[0];

    window.addEventListener('scroll', () => {
        navBar.classList.toggle('shrink', window.scrollY > 0);
    });
    
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let fromTop = window.scrollY + 1;
        
        sections.forEach(section => {
            let offset = section.offsetTop;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');
            
            if (fromTop >= offset && fromTop < offset + height) {
                links.forEach(link => {
                    link.classList.remove('linkActive');
                    document.querySelector(`.links a[href*=${id}] .link`).classList.add('linkActive');
                });
            }
        });
    }

    const links = document.querySelectorAll('.link');
    
    window.onscroll = updateActiveLink;
    
    links.forEach(link => {
        link.parentElement.addEventListener('click', () => {
            setTimeout(updateActiveLink, 100);
        });
    });
    
    updateActiveLink();
    
    const banners = document.querySelectorAll('.bann');
    
    banners.forEach(banner => {
        banner.querySelector('.bannCaption').style.display = 'none';
        
        banner.addEventListener('mouseover', () => {
            banner.querySelector('.bannCaption').style.display = 'block';
        });
        banner.addEventListener('mouseout', () => {
            banner.querySelector('.bannCaption').style.display = 'none';
        });
        
        banner.addEventListener('click', () => {
            console.log(`clicked : ${banner}`);
        });
    });
    
    const tags = document.querySelectorAll('.tag');
    const tagBoxes = document.querySelectorAll('.tag-box');
    
    tags.forEach((tag, index) => {
        tag.addEventListener('click', () => {
            tags.forEach(tag => tag.classList.remove('tag-active'));
            tag.classList.add('tag-active');
            
            tagBoxes.forEach(box => box.classList.remove('show-tag'));
            tagBoxes[index].classList.add('show-tag');
        });
    });
});
