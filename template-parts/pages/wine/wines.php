<?php
// Get all wine categories
$wine_categories = get_terms([
    'taxonomy' => 'category-wine',
    'hide_empty' => true,
]);

foreach ($wine_categories as $category) : ?>
    <section class="wine-category-section section-relative">
        <h1 class="wine-category-title"><?= esc_html($category->name) ?></h1>
        
        <?php
        // CHỈ lấy wine types có liên quan đến category hiện tại
        $wine_types = get_terms([
            'taxonomy' => 'type-wine',
            'hide_empty' => true,
            // Thêm điều kiện để chỉ lấy types có posts trong category này
        ]);
        
        // Hoặc: Loop qua tất cả types nhưng kiểm tra xem có posts không
        $all_wine_types  = get_terms([
            'taxonomy' => 'type-wine',
            'hide_empty' => false, 
        ]);
        
        foreach ($all_wine_types  as $type) : 
            $wines = new WP_Query([
                'post_type' => 'wine',
                'posts_per_page' => -1,
                'tax_query' => [
                    'relation' => 'AND',
                    [
                        'taxonomy' => 'category-wine',
                        'field' => 'term_id', 
                        'terms' => $category->term_id,
                    ],
                    [
                        'taxonomy' => 'type-wine',
                        'field' => 'term_id',
                        'terms' => $type->term_id,
                    ]
                ],
                'orderby' => 'title',
                'order' => 'ASC'
            ]);
            
            if ($wines->have_posts()) : ?>
                <div class="wine-type-section">
                    <h2 class="wine-type-title"><?= esc_html($type->name) ?></h2>
                    <div class="wine-list">
                        <?php while ($wines->have_posts()) : $wines->the_post(); ?>
                            <?php the_title() ?>
                        <?php endwhile; ?>
                    </div>
                </div>
            <?php endif; 
            wp_reset_postdata();
        endforeach; ?>
    </section>
<?php endforeach; ?>