<?php
/*
Template Name: Home Page
*/
?>
<?php get_header() ?>
    <div class="content">
<?php the_post() ?>
      <div id="page-<?php the_ID() ?>" <?php post_class() ?>>
        <div class="entry-content">

        <?php $categories = get_categories(); ?>

        <?php
          foreach ($categories as $category):
        ?>
            <div class="category-wrapper">
              <div class="title-wrapper">
                <h2 class="title"><span><?php echo $category->name ?></span></h2>
              </div>

          <?php
              $args = array(
                'post_type' => 'post',
                'posts_per_page' => -1,
                'cat' => $category->term_id
              );
              $the_query = new WP_Query($args);
              if ( $the_query->have_posts() ):
                while ( $the_query->have_posts() ):
                  $the_query->the_post();

                  get_template_part('shape-maker');

                endwhile;
              endif;
              wp_reset_postdata();
          ?>

            </div>

        <?php
          endforeach;
        ?>

        </div>
      </div><!-- .post -->
    </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>
