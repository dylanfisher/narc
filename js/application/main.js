// Primary Javascript file

var narc = {};
narc.lightbox_open = false;

$(function(){

  $('.shape-wrapper .scene').each(function(){
    var rand = Math.floor(Math.random()*20)+1;
    $(this).addClass('animate' + rand);
  });

  $('.shape').click(function(){
    narc.open_lightbox('1');
    var imgs = $(this).closest('.shape').find('img');
    imgs = narc.shuffle(imgs.clone());
    imgs.appendTo($('.lightbox-content'));
  });

  $(document).on('click', '.lightbox-1 img', function(){
    narc.open_lightbox('2');
    $(this).clone().appendTo($('.lightbox-2 .lightbox-content'));
  });

  // Close top lightbox on click
  $(document).on('click.close-lightbox', function(e){
    if(!$(e.target).closest('img').length){
      narc.close_lightbox();
    }
  });

  // Close top lightbox with escape key
  $(document).keyup(function(e) {
    if (e.keyCode == 27){
      narc.close_lightbox();
    }
  });

});

narc.open_lightbox = function(num){
  $('body').addClass('lightbox-open').prepend('<div class="lightbox lightbox-' + num + '"><div class="lightbox-content-wrapper"><div class="lightbox-content"></div></div></div>');
};

narc.close_lightbox = function(){
  if($('.lightbox').length){
    $('.lightbox').first().remove();
    if(!$('.lightbox').length){
      $('body').removeClass('lightbox-open');
    }
  } else {
    $('body').removeClass('lightbox-open');
  }
};

narc.shuffle = function(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};
