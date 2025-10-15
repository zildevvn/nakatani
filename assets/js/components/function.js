

(function ($) {
    "use strict";

    const nktLanguage = () => {
        const $languageSwitchers = $('.language-switcher-desktop');
    
        function initLanguageSwitcher() {
            if ($(window).width() <= 768) return;
            
            $languageSwitchers.each(function() {
                const $switcher = $(this);
                const $dropdown = $switcher.find('.language-dropdown');
                const $languageItems = $switcher.find('.language-item');
                
                $switcher.on('mouseenter', function() {
                    $dropdown.css({
                        'opacity': '1',
                        'visibility': 'visible',
                        'transform': 'translateY(4px) scale(1)'
                    });
                });
                
                $switcher.on('mouseleave', function() {
                    $dropdown.css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'transform': 'translateY(-10px)'
                    });
                });
                
                $languageItems.on('click', function(e) {
                    e.preventDefault();
                    const newLangName = $(this).text();
                    $switcher.find('.current-language').text(newLangName);
                    
                    window.location.href = $(this).attr('href');
                });
            });
        }
    
        initLanguageSwitcher();

        let isDesktop = $(window).width() > 768;
        $(window).on('resize', function() {
            const nowDesktop = $(window).width() > 768;
            if (!isDesktop && nowDesktop) {
                initLanguageSwitcher();
            }
            isDesktop = nowDesktop;
        });

    }

    const nktInfoFooter = () => {
        let maxWidth = 0;

        $('.info-item__title').each(function() {
            var thisWidth = $(this).outerWidth(); 
            if (thisWidth > maxWidth) {
                maxWidth = thisWidth;
            }
        });
        $('.info-item__title').css('min-width', maxWidth + 'px');
    }

    const nktHeroSlider = () => {
        const swiper = new Swiper('.nkt-hero__slider', {
            loop: true,
            speed: 1000,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    const nktaboutCarousel = () => {
        const swiper = new Swiper('.nkt-about_carousel', {
            loop: true,
            speed: 8000,
            effect: 'side',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                375: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                },
                1600: {
                    slidesPerView: 7,
                    spaceBetween: 24,
                }
            }
        });
    }

    

    const nktScrollWineItem = () => { 
        $('.cate-item').on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            const targetSection = $this.data('cate');
            const $targetElement = $('#' + targetSection);
            
            if (!$targetElement.length) return;
            
            const headerHeight = $('header').outerHeight() || 80;
            const categoriesHeight = $('.nkt-list-categories__list').outerHeight() || 80;
            const targetPosition = $targetElement.offset().top - headerHeight -categoriesHeight - 90;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active state
            $('.cate-item').removeClass('active');
            $this.addClass('active');
        });
    };
    
    $(document).ready(function () {
       nktInfoFooter()
       nktLanguage()
       nktHeroSlider()
       nktaboutCarousel()
       nktScrollWineItem()
    })
})(jQuery); 