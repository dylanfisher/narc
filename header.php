<!DOCTYPE html>
<html class="no-js" data-root="<?php echo get_bloginfo('template_url'); ?>">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php wp_title( '-', true, 'right' ); echo esc_html( get_bloginfo('name'), 1 ) ?></title>
    <meta name="description" content="<?php echo get_bloginfo('description') ?>">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width">
    <link id="favicon" rel="icon" type="image/png" href="<?php echo get_bloginfo('template_url'); ?>/images/favicon.png?2">
    <link rel="stylesheet" type="text/css" href="<?php echo  bloginfo('stylesheet_url'); ?>" />
    <link rel="stylesheet" type="text/css" href="<?php echo  get_bloginfo('template_url'); ?>/css/build/minified/application.css" />
    <script src="<?php echo get_bloginfo('template_url'); ?>/js/modernizr-2.6.2.min.js"></script>
  <?php wp_head() // For plugins ?>
  </head>
  <body <?php body_class() ?>>
    <!--[if lte IE 9]>
      <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
    <div class="wrapper">
    <header>
      <!-- <h1 id="site-title"><?php bloginfo('name') ?></h1> -->
    </header>
