(function ($) {
  "use strict";

  const nktMenuMobile = () => {
    const btnOpen = $('.header-main .btn-open-menu');
    const btnClose = $('.header-main .btn-close-menu');
    const menuMobile = $('.header-main .header-mobile');

    btnOpen.on('click', function (e) {
        e.preventDefault();
        menuMobile.addClass('has-show');
        $('body').addClass('menu-open');
    });

    btnClose.on('click', function (e) {
        e.preventDefault();
        menuMobile.removeClass('has-show');   
        $('body').removeClass('menu-open');
    });
  };

  $(document).ready(function () {
    nktMenuMobile();
  });

})(jQuery);
