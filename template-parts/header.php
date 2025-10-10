<?php $header_bg_gray = get_field('header_bg_gray'); ?>

<header id="site-header" class="header <?= ($header_bg_gray || is_404()) ? 'header_bg_gray' : '' ?>">
    <div class="container">
        <div class="header__inner">
            <div class="header__branding">
                <?php
                $custom_logo_id = get_theme_mod('custom_logo');
                $logo_url = wp_get_attachment_url($custom_logo_id);

                if ($logo_url && str_ends_with($logo_url, '.svg')) {
                    $svg_path = get_attached_file($custom_logo_id);
                    if (file_exists($svg_path)) {
                        echo '<a href="/" class="custom-logo-link">';
                        echo file_get_contents($svg_path);
                        echo '</a>';
                    }
                } elseif (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    ?>
                    <h1 class="header__title">
                        <a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="header__logo-link">
                            <?php bloginfo('name'); ?>
                        </a>
                    </h1>
                <?php } ?>
            </div>

            <div class="d-flex align-items-center header__right">
                <div id="site-navigation" class="header__nav">
                    <?php
                    if (has_nav_menu('primary-menu')) {
                        wp_nav_menu([
                            'theme_location' => 'primary-menu',
                            'menu_id' => 'primary-menu',
                            'menu_class' => 'primary-menu',
                            'bootstrap' => true,
                            'container_class' => 'menu-container',
                            'items_wrap' => '<ul id="%1$s" class="%2$s navbar-nav">%3$s</ul>'
                        ]);
                    }
                    ?>
                </div>

                <div class="d-flex items-center header__actions">
                    <div id="header__search" class="header__search">
                        <?= nakatani_svg_icon('search-icon') ?>
                    </div>
                    <div id="header__hamberger" class="d-block d-lg-none header__hamberger">
                        <span id="hamberger-icon"><?= nakatani_svg_icon('hamberger-icon') ?></span>
                        <span id="close-menu-icon"><?= nakatani_svg_icon('menu-close-icon') ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>