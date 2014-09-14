<?php
  while( have_rows('cuboid') ): the_row();
    $color = get_sub_field('color');
    if(empty($color)){
      $color = '#BABABA';
    }

    $image = get_sub_field('image');
    $url = $image['url'];
    $size = 'medium';
    $size_large = 'large';
    $image_at_size = $image['sizes'][ $size ];
    $image_at_size_large = $image['sizes'][ $size_large ];

    $count++;
?>
    <?php if($count == 1) { ?>
      <div class="face ft">
        <div class="photon-shader" style="background-color: <?php echo $color ?>; background-image: url(<?php echo $image_at_size ?>);"><img src="<?php echo $image_at_size ?>" data-size-large="<?php echo $image_at_size_large ?>"></div>
      </div>
    <?php } elseif($count == 2) { ?>
      <div class="face bk">
        <div class="photon-shader" style="background-color: <?php echo $color ?>; background-image: url(<?php echo $image_at_size ?>);"><img src="<?php echo $image_at_size ?>" data-size-large="<?php echo $image_at_size_large ?>"></div>
      </div>
    <?php } elseif($count == 3) { ?>
      <div class="face rt">
        <div class="photon-shader" style="background-color: <?php echo $color ?>; background-image: url(<?php echo $image_at_size ?>);"><img src="<?php echo $image_at_size ?>" data-size-large="<?php echo $image_at_size_large ?>"></div>
      </div>
    <?php } elseif($count == 4) { ?>
      <div class="face lt">
        <div class="photon-shader" style="background-color: <?php echo $color ?>; background-image: url(<?php echo $image_at_size ?>);"><img src="<?php echo $image_at_size ?>" data-size-large="<?php echo $image_at_size_large ?>"></div>
      </div>
    <?php } elseif($count == 5) { ?>
      <div class="face bm">
        <div class="photon-shader" style="background-color: <?php echo $color ?>; background-image: url(<?php echo $image_at_size ?>);"><img src="<?php echo $image_at_size ?>" data-size-large="<?php echo $image_at_size_large ?>"></div>
      </div>
    <?php } elseif($count == 6) { ?>
      <div class="face tp">
        <div class="photon-shader" style="background-color: <?php echo $color ?>; background-image: url(<?php echo $image_at_size ?>);"><img src="<?php echo $image_at_size ?>" data-size-large="<?php echo $image_at_size_large ?>"></div>
      </div>
    <?php } ?>
<?php
  endwhile;
?>
