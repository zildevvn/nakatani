<?php get_header(); ?>
	<?php if(have_posts()) : ?><?php while(have_posts()) : the_post(); ?>
		<?php if ( get_field('nakatani') && !post_password_required() ) : ?>
			<?php get_template_part('inc/flexible'); ?>
		<?php else: ?>
		<div class="layout">
			<div class="wrap wysiwyg">
				<h1 class="h3"><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</div>
		</div>
		<?php endif; ?>
	<?php endwhile; ?><?php endif; ?>
<?php get_footer(); ?>