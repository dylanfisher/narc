// Primary Javascript file

var narc = {};
narc.lightbox_open = false;

$(function(){

  $(window).resize(function(){
    narc.checkImageOverflow();
  });

  $('.shape-wrapper .scene').each(function(){
    var rand = Math.floor(Math.random()*20)+1;
    $(this).addClass('animate' + rand);

    var rotateX = Math.floor(Math.random()*360);
    var rotateY = Math.floor(Math.random()*360);
    $(this).css({transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY +'deg)'});
  });

  $('.entry-content .shape').hover(function(){
    $(this).closest('.shape-wrapper').addClass('active');
  }, function(){
    $(this).closest('.shape-wrapper').removeClass('active');
  });

  $('.shape').click(function(){
    narc.open_lightbox('1');
    var imgs = $(this).closest('.shape').find('img').clone().addClass('shape');
    var lightboxStuff = [];
    lightboxStuff.push.apply(lightboxStuff, imgs);
    lightboxStuff = narc.shuffle(lightboxStuff);
    $(lightboxStuff).appendTo($('.lightbox-content'));
  });

  $(document).on('click', '.lightbox-1 img', function(){
    narc.open_lightbox('2');

    $('.lightbox-1 img').removeClass('active');
    $(this).addClass('active');

    $('.lightbox-1 img').each(function(){
      var url = $(this).attr('data-size-large');
      var img;

      if(url.length){
        if($(this).hasClass('active')){
          img = '<img class="shape active" src="' + url + '">';
        } else {
          img = '<img class="shape" src="' + url + '">';
        }
      }

      $(img).appendTo($('.lightbox-2 .lightbox-content'));
    });

    $('.lightbox-2 .lightbox-content').imagesLoaded( function() {
      narc.checkImageOverflow();
    });
  });

  $(document).on('click', '.lightbox-2 img', function(){
    $(this).removeClass('active').nextWrap().addClass('active');
    narc.checkImageOverflow();
  });

  // Close top lightbox on click
  $(document).on('click.close-lightbox', function(e){
    if(!$(e.target).closest('.shape').length){
      narc.close_lightbox();
    }
  });

  // Close top lightbox with escape key
  $(document).keyup(function(e) {
    if (e.keyCode == 27){
      narc.close_lightbox();
    }
  });

  narc.forceRedraw();

  $('.title span').hover(function(){
    $('body').addClass('category-wrapper-hover');
    $(this).closest('.category-wrapper').addClass('active');
  }, function(){
    $('body').removeClass('category-wrapper-hover');
    $(this).closest('.category-wrapper').removeClass('active');
  });

});

narc.open_lightbox = function(num){
  $('body').addClass('lightbox-open').prepend('<div class="lightbox lightbox-' + num + '"><div class="lightbox-content-wrapper"><div class="lightbox-content"></div></div></div>');
  $('.lightbox').transition({opacity: 1}, 200);
  if(num == '2'){
    $('body').addClass('lightbox-2-open');
  }
};

narc.close_lightbox = function(){
  if($('.lightbox').length){
    $('.lightbox').first().transition({opacity: 0}, 200, function(){
      $('.lightbox').first().remove();
    });
    $('body').removeClass('lightbox-2-open');
    if(!$('.lightbox').length){
      $('body').removeClass('lightbox-open');
    }
  } else {
    $('body').removeClass('lightbox-open');
  }
};

narc.isLightboxOpen = function(){
  if($('.lightbox').length){
    narc.lightbox_open = true;
    return true;
  } else {
    narc.lightbox_open = false;
    return false;
  }
};

narc.isLightbox2Open = function(){
  if($('.lightbox-2-open').length){
    return true;
  } else {
    return false;
  }
};

narc.shuffle = function(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

narc.forceRedraw = function(){
  $('.entry-content .shape').css({transform: 'scale3d(1, 1, 1)'});
  window.setInterval(function(){
    $('.entry-content .shape').css({transform: 'scale3d(1, 1, 1)'});
  }, 100);
};

narc.checkImageOverflow = function(){
  if(narc.isLightbox2Open()){
    if($('.lightbox-2 img.active').height() > $(window).height()){
      $('.lightbox-2 .lightbox-content').css({transform: 'translate(0, 0)', position: 'static'});
    } else {
      $('.lightbox-2 .lightbox-content').css({transform: '', position: ''});
    }
  }
};


//
// jQuery plugins and extensions
//

(function($){
  // jQuery nextWrap and prevWrap selectors.
  // Usage: $('.element').nextWrap()
  $.fn.nextWrap = function( selector ) {
    var $next = $(this).next( selector );
    if ( ! $next.length ) {
      $next = $(this).parent().children( selector ).first();
    }
    return $next;
  };

  $.fn.prevWrap = function( selector ) {
    var $previous = $(this).prev( selector );
    if ( ! $previous.length ) {
      $previous = $(this).parent().children( selector ).last();
    }
    return $previous;
  };
}(jQuery));
