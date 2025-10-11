<?php 
    $copyright    = get_field('copyright_ft', 'option');
    $logo         = get_field('logo_footer', 'option');
    $socials      = get_field('socials_ft', 'option');
    $sub_text     = get_field('sub_text_ft', 'option');
    $information  = get_field('information_ft', 'option');
    $work_hours   = get_field('work_hours', 'option');
    $payment      = get_field('payment', 'option');
    // echo "<pre>";
    // echo print_r($socials) information_ft;
    // echo "</pre>";
?>

<footer class="main-footer">
    <div class="main-footer-top w-100"> 
        <div class="main-footer-top__bg"> 
            <img src="<?= TEMPLATE_DIRECTORY_URL ?>/assets/images/bg-top-footer.jpg" alt="bg-footer-top"/>
        </div>
        <div class="container"> 
            <h2>Information</h2>
            <div class="main-footer-top-inner d-flex"> 
                <?php if(!empty($information)): ?>
                    <?php 
                        $address = $information['address'] ? : '';
                        $tel     = $information['tel'] ? : '';
                        $fax     = $information['fax'] ? : '';
                        $email   = $information['email'] ? : '';
                        $closed_days = $work_hours['closed_days'] ? : '';
                        $lunch       = $work_hours['lunch'] ? : '';
                        $dinner      = $work_hours['dinner'] ? : '';
                        $classed = 'info-item w-100 d-flex align-items-center';
                    ?>
                    <div class="main-footer__information d-flex flex-wrap"> 
                        <?php if(!empty($address)): ?>
                            <div class="<?=  $classed ?> address"> 
                                <div class="info-item__title">
                                    <span></span>
                                    <p>Address</p>
                                </div>

                                <p class="info-item__content"> 
                                    <?= $address ?>
                                </p>
                            </div>
                        <?php endif; ?>  
                        
                        <?php if(!empty($tel)): ?>
                            <div class="<?=  $classed ?> tel"> 
                                <div class="info-item__title">
                                    <span></span>
                                    <p>Tel</p>
                                </div>

                                <p class="info-item__content"> 
                                    <a href="tel:<?= $tel ?>"> <?= $tel ?> </a>
                                </p>
                            </div>
                        <?php endif; ?>  

                        <?php if(!empty($fax)): ?>
                            <div class="<?=  $classed ?> fax"> 
                                <div class="info-item__title">
                                    <span></span>
                                    <p>Fax</p>
                                </div>

                                <p class="info-item__content"> 
                                    <?= $fax ?>
                                </p>
                            </div>
                        <?php endif; ?> 

                        <?php if(!empty($email)): ?>
                            <div class="<?=  $classed ?> email"> 
                                <div class="info-item__title">
                                    <span></span>
                                    <p>Email</p>
                                </div>

                                <p class="info-item__content"> 
                                    <a href="mailto:<?= $email ?>"> <?= $email ?> </a>
                                </p>
                            </div>
                        <?php endif; ?> 

                        <?php if(!empty($closed_days)): ?>
                            <div class="<?=  $classed ?> closed_days"> 
                                <div class="info-item__title">
                                    <span></span>
                                    <p>Closed</p>
                                </div>

                                <p class="info-item__content"> 
                                    <?= $closed_days ?>
                                </p>
                            </div>
                        <?php endif; ?> 

                        <?php if(!empty($lunch) || !empty($dinner)): ?>
                            <div class="<?=  $classed ?> closed_days"> 
                                <div class="info-item__title">
                                    <span></span>
                                    <p>Opening hours</p>
                                </div>

                                <div class="info-item__content"> 
                                    <?php if(!empty($lunch)): ?>
                                        <div class="item"> 
                                            <span class="w-100 d-flex">Lunch</span>
                                            <span class="w-100 d-flex"> <?= $lunch ?> </span>
                                        </div>
                                    <?php endif;?>
                                    
                                    <?php if(!empty($dinner)): ?>
                                        <div class="item"> 
                                            <span class="w-100 d-flex">Dinner</span>
                                            <span class="w-100 d-flex"> <?= $dinner ?> </span>
                                        </div>
                                    <?php endif;?>
                                </div>
                            </div>    
                        <?php endif; ?> 

                        <?php if(!empty($payment)): ?>
                            <div class="<?=  $classed ?> payment"> 
                                <div class="info-item__title">
                                    <span></span>
                                    <p>Accepted payment methods</p>
                                </div>

                                <p class="info-item__content"> 
                                    <?= $payment ?>
                                </p>
                            </div>
                        <?php endif; ?> 
                    </div>
                <?php endif;?>
                
                <div class="main-footer__map"> 
                    <iframe loading="lazy" src="https://maps.google.com/maps?q=27%20rue%20Pierre%20Leroux%2075007%20PARIS%20FRANCE&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="27 rue Pierre Leroux 75007 PARIS FRANCE" aria-label="27 rue Pierre Leroux 75007 PARIS FRANCE"></iframe>
                </div>
            </div>
        </div>
    </div>

    <div class="main-footer-bottom"> 
        <div class="container"> 
            <div class="main-footer-bottom-inner d-flex align-items-center flex-wrap flex-sm-nowrap"> 
                <div class="d-flex align-items-end"> 
                    <?php if($logo): ?>
                        <a href="/" class="main-footer__logo d-flex">
                            <img src="<?= $logo ?>" alt="logo footer">
                        </a>
                    <?php endif;?> 

                    <?php if ($socials): ?>
                        <ul class="main-footer__socials d-flex align-items-center p-0 m-0">
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
                                    <a href="<?= esc_url($social['link']) ?>" target="_blank" class="d-flex text-decoration-none">
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
                </div>

                <?php if (has_nav_menu('primary-menu')): ?>
                    <div class="main-footer__menu"> 
                        <?php 
                            wp_nav_menu([
                                'theme_location' => 'primary-menu',
                                'menu_id'        => 'primary-menu',
                                'menu_class'     => 'primary-menu d-flex align-items-center p-0 m-0',
                                'bootstrap'      => true,
                                'container_class' => 'menu-container',
                                'items_wrap'      => '<ul id="%1$s" class="%2$s navbar-nav">%3$s</ul>'
                            ]);
                        ?>
                    </div>
                <?php endif;?>                          
            </div>

            <?php if(!empty($sub_text)): ?>
                <div class="main-footer_sub-text"> <?= $sub_text ?> </div>
            <?php endif;?>  

            <?php if ($copyright) { ?>
                <p class="main-footer__copyright"> <?= str_replace('{{YEAR}}', date('Y'), $copyright) ?></p>
            <?php } ?>
        </div>
    </div>
</footer>