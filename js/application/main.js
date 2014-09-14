// Primary Javascript file

var narc = {};
narc.lightbox_open = false;

$(function(){

  $('.shape-wrapper .scene').each(function(){
    var rand = Math.floor(Math.random()*20)+1;
    $(this).addClass('animate' + rand);

    var rotateX = Math.floor(Math.random()*360);
    var rotateY = Math.floor(Math.random()*360);
    $(this).css({transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY +'deg)'});
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
    var data = $(this).attr('data-size-large');
    var img = '<img src="' + data + '">';
    $(img).appendTo($('.lightbox-2 .lightbox-content'));
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

});

narc.open_lightbox = function(num){
  $('body').addClass('lightbox-open').prepend('<div class="lightbox lightbox-' + num + '"><div class="lightbox-content-wrapper"><div class="lightbox-content"></div></div></div>');
  if(num == '2'){
    $('body').addClass('lightbox-2-open');
  }
};

narc.close_lightbox = function(){
  if($('.lightbox').length){
    $('.lightbox').first().remove();
    $('body').removeClass('lightbox-2-open');
    if(!$('.lightbox').length){
      $('body').removeClass('lightbox-open');
    }
  } else {
    $('body').removeClass('lightbox-open');
  }
  console.log('close_lightbox');
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

narc.shuffle = function(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

narc.forceRedraw = function(){
  $('.shape').css({transform: 'scale3d(1, 1, 1)'});
};
