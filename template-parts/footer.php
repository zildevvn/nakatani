<?php 
    $logo      = get_theme_mod('custom_logo');
    $copyright = get_field('copyright_ft', 'option');
    $author    = get_field('author_ft', 'option');
    $socials   = get_field('socials_ft', 'option');
    $desc      = get_field('desc_ft', 'option');
    $img_w_link  = get_field('img_ft', 'option');
?>

<footer class="main-footer">
    <div class="container"> 
        <div class="main-footer-top"> 
            <div class="main-footer-top-inner d-flex justify-content-between flex-wrap flex-lg-nowrap">
                <div class="main-footer-top__left d-flex flex-wrap flex-sm-nowrap"> 
                    <div class="main-footer__logo"> 
                        <a href="/" class="link-logo d-flex">
                            <?php echo wp_get_attachment_image($logo, 'full', false, array('class' => 'logo', 'alt' => get_bloginfo('name'))); ?>
                        </a>

                        <?php if(!empty($img_w_link)): ?>
                            <div class="main-footer__img"> 
                                <?php if(!empty($img_w_link['descriptions'])): ?>
                                    <p><?= $img_w_link['descriptions']  ?></p>
                                <?php endif;?>   

                                <div class="warp"> 
                                    <?php if(!empty($img_w_link['image'])): ?>
                                        <img src="<?= $img_w_link['image'] ?>" alt="footer image" />
                                    <?php endif;?> 

                                    <?php if(!empty($img_w_link['image'])): ?>
                                        <a href="<?= $img_w_link['link']['url'] ?>" target="<?= $img_w_link['link']['target'] ?>">
                                            <?= $img_w_link['link']['title'] ?>
                                        </a>
                                    <?php endif;?>
                                </div>
                            </div>
                        <?php endif;?>    
                    </div>

                    <?php if (has_nav_menu('quick-links-menu')): ?> 
                        <div class="main-footer__menu"> 
                            <?php
                                wp_nav_menu([
                                    'theme_location'  => 'quick-links-menu',
                                    'menu_class'      => 'quick-links-menu',
                                    'container_class' => 'menu-container',
                                    'bootstrap'       => true,
                                    'items_wrap'      => '<ul id="%1$s" class="%2$s navbar-nav">%3$s</ul>'
                                ]);
                            ?>
                        </div>
                    <?php endif; ?>
                </div>

                <div class="main-footer-top__right d-flex justify-content-md-end justify-content-start flex-wrap flex-sm-nowrap"> 
                    <?php if ($socials): ?>
                        <ul class="main-footer__socials d-flex justify-content-md-end justify-content-start">
                            <?php foreach ($socials as $social) {
                                $icon_url = $social['icon'];
                                $icon_ext = pathinfo($icon_url, PATHINFO_EXTENSION);
                                $icon_path = str_replace(
                                    wp_get_upload_dir()['baseurl'], 
                                    wp_get_upload_dir()['basedir'], 
                                    $icon_url
                                );
                                ?>
                                <li class="main-footer__socials-item <?= $social['name'] ?>">
                                    <a href="<?= esc_url($social['link']) ?>" target="_blank">
                                        <?php if ($icon_ext === 'svg' && file_exists($icon_path)) : ?>
                                            <?php echo file_get_contents($icon_path); ?>
                                        <?php else: ?>
                                            <img src="<?= esc_url($icon_url) ?>" alt="<?= esc_attr($social['name']) ?>">
                                        <?php endif; ?>
                                    </a>
                                </li>
                            <?php } ?>
                        </ul>
                    <?php endif; ?>


                    <?php if(!empty($desc)): ?>
                        <div class="main-footer__desc"> 
                            <?=  $desc ?>
                        </div>
                    <?php endif;?> 
                </div>
            </div>
        </div>
        <div class="main-footer-bottom"> 
            <div class="main-footer-bottom-inner d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap"> 
                <div class="main-footer-bottom__left d-flex align-items-center flex-wrap flex-md-nowrap"> 
                    <?php if ($copyright) { ?>
                        <p class="main-footer__copyright"> <?= str_replace('{{YEAR}}', date('Y'), $copyright) ?></p>
                    <?php } ?>

                    <?php if (has_nav_menu('terms-menu')): ?> 
                        <div class="main-footer__terms-menu"> 
                            <?php
                                wp_nav_menu([
                                    'theme_location'  => 'terms-menu',
                                    'menu_class'      => 'terms-menu',
                                    'container_class' => 'menu-container',
                                    'bootstrap'       => true,
                                    'items_wrap'      => '<ul id="%1$s" class="%2$s navbar-nav">%3$s</ul>'
                                ]);
                            ?>
                        </div>
                    <?php endif; ?> 
                </div>

                <?php if(!empty($author)): ?>
                    <p class="main-footer__author"> 
                        <?=  $author ?>
                    </p>
                <?php endif;?>    
            </div>
        </div>
    </div>
</footer>