

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
            speed: 1000,
            effect: 'side',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
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

    $('.cate-item').on('click', function() {
        var targetSection = $(this).data('cate');
        var $targetElement = $('#' + targetSection);
        console.log("aa")
        console.log(targetSection)
        console.log($targetElement)
        
        if ($targetElement.length) {
            // Tính toán offset nếu có fixed header (ví dụ: 80px)
            var offset = 80;
            var targetPosition = $targetElement.offset().top - offset;
            
            $('html, body').animate({
                scrollTop: targetPosition
            }, 800, 'swing');
            
            // Update active state
            $('.cate-item').removeClass('active');
            $(this).addClass('active');
        }
    });

    }
    
    $(document).ready(function () {
       nktInfoFooter()
       nktLanguage()
       nktHeroSlider()
       nktaboutCarousel()
       nktScrollWineItem()
    })

// $(document).ready(function() {
//     var $stickyElement = $('main.wine-page .nkt-list-categories');
//     var $thumbnails = $stickyElement.find('.cate-item__thumbnail');
//     var $intro = $stickyElement.find('.nkt-list-categories__intro');
//     var $list = $stickyElement.find('.nkt-list-categories__list');
    
//     if (!$stickyElement.length) return;

//     // Sử dụng GSAP MatchMedia
//     gsap.matchMedia({
//         "(max-width: 767.98px)": function() {
            
//             function calculateStickyHeight() {
//                 var introHeight = $intro.outerHeight() || 0;
//                 var listHeight = $list.outerHeight() || 0;
//                 return 40 + introHeight + listHeight;
//             }
            
//             // Tạo scroll trigger
//             ScrollTrigger.create({
//                 trigger: $stickyElement[0],
//                 start: "top -35px",
//                 end: "max",
//                 toggleClass: { targets: $stickyElement[0], className: "has-sticky" },
//                 onEnter: function() {
//                     gsap.to($thumbnails, {
//                         height: 0,
//                         opacity: 0,
//                         margin: 0,
//                         padding: 0,
//                         duration: 0.3,
//                         ease: "power2.out"
//                     });
//                     gsap.to($stickyElement, {
//                         height: calculateStickyHeight(),
//                         duration: 0.3,
//                         ease: "power2.out"
//                     });
//                 },
//                 onLeaveBack: function() {
//                     gsap.to($thumbnails, {
//                         height: "auto",
//                         opacity: 1,
//                         margin: "",
//                         padding: "",
//                         duration: 0.3,
//                         ease: "power2.out"
//                     });
//                     gsap.to($stickyElement, {
//                         height: "auto",
//                         duration: 0.3,
//                         ease: "power2.out"
//                     });
//                 }
//             });
//         }
//     });
// });


// $(document).ready(function() {
//     var $stickyElement = $('main.wine-page .nkt-list-categories');
//     var $thumbnails = $stickyElement.find('.cate-item__thumbnail');
//     var $intro = $stickyElement.find('.nkt-list-categories__intro');
//     var $list = $stickyElement.find('.nkt-list-categories__list');
    
//     var originalHeight = $stickyElement.outerHeight();
//     var isSticky = false;
//     var isMobile = $(window).width() <= 767.98;
    
//     // Tính toán chiều cao khi sticky (40px + intro height + list height)
//     function calculateStickyHeight() {
//         var introHeight =  40;
//         var listHeight = 300;
//         return 40 + introHeight + listHeight;
//     }

   
    
//     // Tính toán trigger point an toàn
//     function getTriggerPoint() {
//         var elementOffset = $stickyElement.offset();
//         if (!elementOffset) return 0;
        
//         var topValue = parseInt($stickyElement.css('top')) || 0;
//         return elementOffset.top + topValue;
//     }
    
//     // Tạo animation
//     var hideThumbnails = gsap.to($thumbnails, {
//         height: 0,
//         opacity: 0,
//         margin: 0,
//         padding: 0,
//         duration: 0.3,
//         ease: "power2.out",
//         paused: true
//     });
    
//     var resizeSticky = gsap.to($stickyElement, {
//         height: calculateStickyHeight(),
//         duration: 0.3,
//         ease: "power2.out",
//         paused: true
//     });
    
//     function checkSticky() {
//         if (!$stickyElement.length) return;
        
//         var scrollTop = $(window).scrollTop();
//         var triggerPoint = getTriggerPoint();
//         var shouldBeSticky = scrollTop > triggerPoint;
        
//         if (shouldBeSticky !== isSticky && isMobile) {
//             isSticky = shouldBeSticky;
            
//             if (isSticky) {
//                 $stickyElement.addClass('has-sticky');
//                 hideThumbnails.play();
//                 resizeSticky.play();
//             } else {
//                 $stickyElement.removeClass('has-sticky');
//                 hideThumbnails.reverse();
//                 resizeSticky.reverse();
//             }
//         }
//     }
    
//     // Sử dụng GSAP ticker cho performance
//     gsap.ticker.add(checkSticky);
    
//     // Xử lý resize
//     function handleResize() {
//         if (!$stickyElement.length) return;
        
//         originalHeight = $stickyElement.outerHeight();
//         isMobile = $(window).width() <= 767.98;

//          let a = calculateStickyHeight();
//     console.log(a)
//     console.log("cascas");
        
//         // Reset nếu không phải mobile
//         if (!isMobile && isSticky) {
//             isSticky = false;
//             $stickyElement.removeClass('has-sticky');
//             hideThumbnails.reverse();
//             resizeSticky.reverse();
//         }
        
//         // Cập nhật animation values với chiều cao mới
//         resizeSticky.vars.height = calculateStickyHeight();
//     }
    
//     // Debounce resize để tối ưu performance
//     var resizeTimer;
//     $(window).on('resize', function() {
//         clearTimeout(resizeTimer);
//         resizeTimer = setTimeout(handleResize, 250);
//     });
// });

})(jQuery); 