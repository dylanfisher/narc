<?php
  if( have_rows('cube') ):
    echo '<div class="shape-wrapper shape-cuboid">';
    echo '<div class="scene">';
    echo '<div class="shape cuboid-1 cub-1">';
      get_template_part('shape-cube');
    echo '</div></div></div>';

  elseif( have_rows('cuboid') ):
    echo '<div class="shape-wrapper shape-cuboid-long">';
    echo '<div class="scene">';
    echo '<div class="shape cuboid-1 cub-1">';
      get_template_part('shape-cuboid');
    echo '</div></div></div>';

  elseif( have_rows('pyramid') ):
    echo '<div class="shape-wrapper shape-pyramid">';
    echo '<div class="scene">';
    echo '<div class="shape pyramid-1 pyr-1">';
      get_template_part('shape-pyramid');
    echo '</div></div></div>';

  elseif( have_rows('prism') ):
    echo '<div class="shape-wrapper shape-prism">';
    echo '<div class="scene">';
    echo '<div class="shape prism-1 pri-1">';
      get_template_part('shape-prism');
    echo '</div></div></div>';

  endif;
?>
