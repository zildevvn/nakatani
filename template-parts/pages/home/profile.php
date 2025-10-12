<?php 
    $profile = nkt_translate('profile', 'home');
?>
<section class="nkt-profile">
    <div class="nkt-profile-warp"> 
        <div class="nkt-profile__thumbnail"> 
            <img src="<?= TEMPLATE_DIRECTORY_URL ?>/assets/images/home/img-profile.jpg" alt="img-profile"/>
        </div>

        <div class="nkt-profile__content"> 
            <h2><?= $profile['lable'] ?></h2>
            <p class="name"> <?= $profile ['name'] ?> </p>
            <div class="profile-bio">
                <?php foreach ($profile['bio'] as $paragraph): ?>
                    <p><?= esc_html($paragraph) ?></p>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>