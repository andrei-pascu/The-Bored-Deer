
var currentPage = 0;
var getId = 0;
var currentId = 0;
//Navigation buttons click event
//Make current container bigger and show products
$('.products-nav').click(function() {
//Products small containers
  var produse = $(this).parents().parents().parents().siblings()
  .children(".products-align").children(".products-img");
//Current page number
  var currentNumber = $(this).parents().parents().parents().parents()
  .siblings(".main-story-aside").children(".nav-container")
  .children(".number-container").children(".number-current");

  if ($(this).parents().parents().parents()
  .siblings(".products-img-container").css('display') == 'flex') {
    $(currentNumber).css({'transform': 'rotateX(90deg)'});
    $(produse).css({'transform': 'rotateX(90deg)',transformOrigin:'bottom'});
    resetAngleMobile = setTimeout(function() {
      //Products animation Left
      $(produse).css({'transform': 'rotateX(0deg)',transformOrigin:'top'});
      $(currentNumber).css({'transform': 'rotateX(0deg)'});
     }, 500);
  }
});
//Deer  animation
$(document).ready(function() {
  var path1 = document.querySelector('#deer-body-1');
  var length1 = path1.getTotalLength();
  var path2 = document.querySelector('#deer-body-2');
  var length2 = path2.getTotalLength();
  var path3 = document.querySelector('#deer-eye-1');
  var length3 = path3.getTotalLength();
  var path4 = document.querySelector('#deer-eye-2');
  var length4 = path4.getTotalLength();
  var path5 = document.querySelector('#deer-eye-3');
  var length5 = path5.getTotalLength();
  var path6 = document.querySelector('#bubble');
  var length6 = path6.getTotalLength();
  var path7 = document.querySelector('#hello');
  var length7 = path7.getTotalLength();
  var path8 = document.querySelector('#human');
  var length8 = path8.getTotalLength();
  var path9 = document.querySelector('#virgula');
  var length9 = path9.getTotalLength();
  var path10 = document.querySelector('#i');
  var length10 = path10.getTotalLength();
  var path11 = document.querySelector('#am');
  var length11 = path11.getTotalLength();
  var path12 = document.querySelector('#the');
  var length12 = path12.getTotalLength();
  var path13 = document.querySelector('#the-');
  var length13 = path13.getTotalLength();
  var path14 = document.querySelector('#b');
  var length14 = path14.getTotalLength();
  var path15 = document.querySelector('#bb');
  var length15 = path15.getTotalLength();
  var path16 = document.querySelector('#ored');
  var length16 = path16.getTotalLength();
  var path17 = document.querySelector('#d');
  var length17 = path17.getTotalLength();
  var path18 = document.querySelector('#eer');
  var length18 = path18.getTotalLength();
  $('#bored-deer-deluxe').css({"opacity": "1"});
//Sun SVG fade in
  setTimeout(function() {
    $('#sun').fadeTo(2000, 1);
  }, 1500);
//Specific transform origin for Mozzilla for sun
  if (typeof InstallTrigger !== 'undefined') {
    $('#sun').css({"transform-origin": "65px 0px"});
  }
//Translate Tree svg
  setTimeout(function() {
    $('#tree').css({"transform": "translateX(-52%) translateY(10%) "+
      "rotateX(0deg)", "transition": "2s"});
  }, 3000);
//Animate DEER start (BODY)
  $('#deer-body-1').css({"stroke-dashoffset": length1,
    "stroke-dasharray": length1});
  setTimeout(function() {
    $('#deer-body-1').animate({"stroke-dashoffset": "0"}, 4000, "linear");
  }, 1000);
  $('#deer-body-2').css({"stroke-dashoffset": length2,
    "stroke-dasharray": length2});
  setTimeout(function() {
    $('#deer-body-2').animate({"stroke-dashoffset": "0"}, 4000, "linear");
  }, 1000);
  $('#deer-eye-1').css({"stroke-dashoffset": length3,
    "stroke-dasharray": length3});
  setTimeout(function() {
      $('#deer-eye-1').animate({"stroke-dashoffset": "0"}, 500, "linear");
  }, 4900);
  $('#deer-eye-2').css({"stroke-dashoffset": length4,
    "stroke-dasharray": length4});
  setTimeout(function() {
    $('#deer-eye-2')
        .animate({"stroke-dashoffset": "0"}, 500, "linear");
    }, 4900);
  $('#deer-eye-3').css({"stroke-dashoffset": length5,
    "stroke-dasharray": length5});
  setTimeout(function() {
    $('#deer-eye-3').animate({"stroke-dashoffset": "0"}, 500, "linear");
  }, 4900);
//Text box SVG start
  $('#bubble').css({"stroke-dashoffset": length6,
    "stroke-dasharray": length6});
  setTimeout(function() {
    $('#bubble').animate({"stroke-dashoffset": "0"}, 500, "linear");
  }, 5400);
  $('#hello').css({"stroke-dashoffset": length7,
    "stroke-dasharray": length7});
  setTimeout(function() {
    $('#hello').animate({"stroke-dashoffset": "0"}, 700, "linear");
  }, 5900);
  $('#human').css({"stroke-dashoffset": length8,
    "stroke-dasharray": length8});
  setTimeout(function() {
    $('#human').animate({"stroke-dashoffset": "0"}, 700, "linear");
  }, 6600);
  $('#virgula').css({"stroke-dashoffset": length9,
    "stroke-dasharray": length9});
  setTimeout(function() {
    $('#virgula').animate({"stroke-dashoffset": "0"}, 50, "linear");
  }, 7250);
  $('#i').css({"stroke-dashoffset": length10,
    "stroke-dasharray": length10});
  setTimeout(function() {
    $('#i').animate({"stroke-dashoffset": "0"}, 200, "linear");
  }, 7300);
  $('#am').css({"stroke-dashoffset": length11,
    "stroke-dasharray": length11});
  setTimeout(function() {
    $('#am').animate({"stroke-dashoffset": "0"}, 300, "linear");
  }, 7500);
  $('#the').css({"stroke-dashoffset": length12,
    "stroke-dasharray": length12});
  setTimeout(function() {
    $('#the').animate({"stroke-dashoffset": "0"}, 300, "linear");
  }, 7800);
  $('#the-').css({"stroke-dashoffset": length13,
    "stroke-dasharray": length13});
  setTimeout(function() {
    $('#the-').animate({"stroke-dashoffset": "0"}, 150, "linear");
  }, 7950);
//Text box SVG Fade --end--
  setTimeout(function() {
    $('#bubble').fadeOut(800);
    $('#hello').fadeOut(800);
    $('#human').fadeOut(800);
    $('#virgula').fadeOut(800);
    $('#i').fadeOut(800);
    $('#am').fadeOut(800);
    $('#the').fadeOut(800);
    $('#the-').fadeOut(800);
  }, 8100);
//"Bored Deer" Hand writing
  $('#b').css({"stroke-dashoffset": length14,
    "stroke-dasharray": length14});
  setTimeout(function() {
    $('#b').animate({"stroke-dashoffset": "0"}, 200, "linear");
  }, 8300);
  $('#bb').css({"stroke-dashoffset": length15,
    "stroke-dasharray": length15});
  setTimeout(function() {
    $('#bb').animate({"stroke-dashoffset": "0"}, 200, "linear");
  }, 8450);
  $('#ored').css({"stroke-dashoffset": length16,
    "stroke-dasharray": length16});
  setTimeout(function() {
    $('#ored').animate({"stroke-dashoffset": "0"}, 700, "linear");
  }, 8650);
  $('#d').css({"stroke-dashoffset": length17,
    "stroke-dasharray": length17});
  setTimeout(function() {
    $('#d').animate({"stroke-dashoffset": "0"}, 350, "linear");
  }, 9350);
  $('#eer').css({"stroke-dashoffset": length18,
    "stroke-dasharray": length18});
  setTimeout(function() {
    $('#eer').animate({"stroke-dashoffset": "0"}, 700, "linear");
  }, 9650);
});
//connect to XML DB
  var Connect = new XMLHttpRequest();
  Connect.open("GET", "ascend.xml", false);
  Connect.setRequestHeader("Content-Type", "text/xml");
  Connect.send(null);
  var xml = Connect.responseXML;
//Subcategory clicked
  var currentDb = 0;
//Next 2 variables store a number for XML db to
//skip the first 0/10/20 etc... entries basically changing the page
  var currentDbPage = 0;
  var currentDbPagePath = 0;
//Store all XML tags that contain <currentDb> tag
  var storeDb = [];
//Get this products-add parent attr name
  var double = 0;
//Storedb.length => helps finding the total number of pages  for a certain prod
  var totalSize = 0;
//Price change
  var lessMore = 0;
  var price = 0;
  var priceTotal = 0;
//QUantity
//Nr of products before event
  var nrProducts = 0;
//Nr of products after event
  var nrProductsTotal = 0;
$('.products').click(function(e) {
//Reset currentDbPagePath
    currentDbPagePath = 0;
//GET curent section(of 4 big sections) index
  var sectionL = $(this).parent().parent().parent().attr('id');
  var sectionLoc = sectionL.slice(19,20);
//SPECIFY path to XML
  if ($(e.target).is('#scoped')) {
    currentDb = 'scoped';
  } else if ($(e.target).is('#no-scope')) {
    currentDb = 'noscope';
  } else if ($(e.target).is('#scopes')) {
    currentDb = 'scopes';
  } else if ($(e.target).is('#arrows')) {
    currentDb = 'arrows';
  } else if ($(e.target).is('#compound')) {
    currentDb = 'compound';
  } else if ($(e.target).is('#crossbow')) {
    currentDb = 'crossbow';
  } else if ($(e.target).is('#quivers')) {
    currentDb = 'quivers';
  } else if ($(e.target).is('#fixed')) {
    currentDb = 'fixed';
  } else if ($(e.target).is('#folded')) {
    currentDb = 'folded';
  } else if ($(e.target).is('#carbon')) {
    currentDb = 'carbon';
  } else if ($(e.target).is('#stainless')) {
    currentDb = 'stainless';
  } else if ($(e.target).is('#multi')) {
    currentDb = 'multi';
  } else if ($(e.target).is('#ghill')) {
    currentDb = 'ghill';
  } else if ($(e.target).is('#screen')) {
    currentDb = 'screen';
  } else if ($(e.target).is('#scents')) {
    currentDb = 'scents';
  } else if ($(e.target).is('#scentsr')) {
    currentDb = 'scentsr';
  } else if ($(e.target).is('#jackm')) {
    currentDb = 'jackm';
  } else if ($(e.target).is('#jackf')) {
    currentDb = 'jackf';
  } else if ($(e.target).is('#jackk')) {
    currentDb = 'jackk';
  } else if ($(e.target).is('#jackw')) {
    currentDb = 'jackw';
  } else if ($(e.target).is('#jacks')) {
    currentDb = 'jacks';
  } else if ($(e.target).is('#trsm')) {
    currentDb = 'trsm';
  } else if ($(e.target).is('#trsf')) {
    currentDb = 'trsf';
  } else if ($(e.target).is('#trsk')) {
    currentDb = 'trsk';
  } else if ($(e.target).is('#trsw')) {
    currentDb = 'trsw';
  } else if ($(e.target).is('#trss')) {
    currentDb = 'trss';
  } else if ($(e.target).is('#bootm')) {
    currentDb = 'bootm';
  } else if ($(e.target).is('#bootf')) {
    currentDb = 'bootf';
  } else if ($(e.target).is('#bootk')) {
    currentDb = 'bootk';
  } else if ($(e.target).is('#mask')) {
    currentDb = 'mask';
  } else if ($(e.target).is('#flap')) {
    currentDb = 'flap';
  } else if ($(e.target).is('#cap')) {
    currentDb = 'cap';
  } else if ($(e.target).is('#full')) {
    currentDb = 'full';
  } else if ($(e.target).is('#mitten')) {
    currentDb = 'mitten';
  } else if ($(e.target).is('#finger')) {
    currentDb = 'finger';
  } else if ($(e.target).is('#falcon')) {
    currentDb = 'falcon';
  } else if ($(e.target).is('#backs')) {
    currentDb = 'backs';
  } else if ($(e.target).is('#backl')) {
    currentDb = 'backl';
  } else if ($(e.target).is('#hand')) {
    currentDb = 'hand';
  } else if ($(e.target).is('#headlamp')) {
    currentDb = 'headlamp';
  } else if ($(e.target).is('#mountable')) {
    currentDb = 'mountable';
  } else if ($(e.target).is('#wpurificators')) {
    currentDb = 'wpurificators';
  } else if ($(e.target).is('#thermos')) {
    currentDb = 'thermos';
  } else if ($(e.target).is('#flint')) {
    currentDb = 'flint';
  } else if ($(e.target).is('#fire')) {
    currentDb = 'fire';
  } else if ($(e.target).is('#lighter')) {
    currentDb = 'lighter';
  }
//ITERATE through path tags that contain currentDb and store them in an array
//Get all entries in category
  $(xml).find('path').each(function(){
    if($(this).html() == currentDb) {
      storeDb.push($(this).parent());
    }
  });
//ITERATE and fill all products div with XML info
  getFunct = function() {
    totalSize = storeDb.length;
    setTimeout(function() {
      for(i=0;i<10;i++) {
        if (currentDbPagePath <= storeDb.length) {
//currentDbPagePath is added in case the page changes,
//adding +10 to i for every page changed
          currentDbPage = i+currentDbPagePath;
//Bind current PRIMARY KEY to div as attribute
          $('#product-'+sectionLoc+'-'+i)
            .attr('name', $(storeDb[currentDbPage]).prop("tagName"));
          $('#product-'+sectionLoc+'-'+i+' .products-image img')
            .attr('src', $(storeDb[currentDbPage]).children('image').html());
          $('#product-'+sectionLoc+'-'+i+' .products-description').empty()
            .append($(storeDb[currentDbPage]).children('description').html());
          $('#product-'+sectionLoc+'-'+i+' .products-price').empty()
            .append(($(storeDb[currentDbPage]).children('price').html())+'  $');
          if ($('#product-'+sectionLoc+'-'+i+' .products-description')
            .text().length < 1) {
            $('#product-'+sectionLoc+'-'+i).css({'display': 'none'});
          } else {
            $('#product-'+sectionLoc+'-'+i).css({'display': 'flex'});
          }
        }
      }
//Empty array to get a clean start on every new iteration
    storeDb = [];
    }, 490);
  }
  getFunct();
//Add current page number to navigation bar and GET total number of pages
  $(this).parent().parent().siblings('.main-story-aside')
    .children('.nav-container').children('.number-container')
      .children('.number-current').html(1);
  $(this).parent().parent().siblings('.main-story-aside')
    .children('.nav-container').children('.number-container')
      .children('.number-max').html(parseInt((totalSize-1)/10)+1);
//products-nav.click END
 });
 //VIEW product details
  $('.products-image, .products-description, .products-price')
    .click(function() {
    var noXPath = $(xml).find($(this).parent().attr('name'))
      .children('image').html();
    var xPath = noXPath.replace(".jpg","x.jpg");
    $('#cart-container').attr('name', ($(this).parent().attr('name')));
//$(xml).find($(this).parent().attr('name')) ==
//GET attribute that is the same as XML primary key entry
    $('#full-product').css({'transform':'rotateY(0deg)'});
    $('#full-product-img img').empty().attr('src', xPath);
    $('#full-product-description p').empty().append($(xml).
      find($(this).parent().attr('name')).children('description').html());
    $('#full-product-overview p').empty().append($(xml).
      find($(this).parent().attr('name')).children('overview').html());
    $('#full-product-specifications p').empty().append($(xml).
      find($(this).parent().attr('name')).children('specifications').html());
  });
 //ADD products to cart
  $('.products-add').click(function() {
//Store price before same div in overided in cart section
    var keepPrice = parseInt($('.checkout-product[name='+double+']:last')
    .children('.checkout-description-price').html());
//GET attribute that coincides with the XML entry
    double = ($(this).parent().attr("name"));
    $('#checkout').css({'transform':'rotateY(0deg)'});
//Create new <div> in CART cointainer
    $('#checkout-container-1').prepend('<div class="checkout-product" name='
      +double+'><div class="checkout-container-img"><img/></div>'+
      '<div class="checkout-description-description"></div>'+
      '<div class="checkout-description-quantity">'+
      '<div class="less"> < </div><p>1</p><div class="more"> > </div></div>'+
      '<div class="checkout-description-price"></div>'+
      '<div class="checkout-description-remove">'+
      '<p class="checkout-dollar">$</p>'+
      '<div><p class="removep">Remove</p></div></div></div>');
//ADD XML info to div + add attr of price for increase
    $('.checkout-product[name='+double+'] .checkout-description-description ')
      .append($(xml).find($(this).parent().attr('name'))
        .children('description').html());
    $('.checkout-product[name='+double+'] .checkout-description-price')
      .append($(xml).find($(this).parent().attr('name'))
        .children('price').html()).attr('price', ($(xml).find($(this)
          .parent().attr('name')).children('price').html()));
    $('.checkout-product[name='+double+'] .checkout-container-img img')
      .attr('src', ($(xml).find($(this)
        .parent().attr('name')).children('image').html()));
//CHECK for doubles and remove 1 of them => eq(1)= remove old eq(0) =remove new
    var keepQuantity = parseInt($('.checkout-product[name='+double+']:last')
      .children('.checkout-description-quantity').children('p').html());
    if($('.checkout-product[name='+double+']')
      .siblings('.checkout-product[name='+double+']').length == 2) {
      $('.checkout-product[name='+double+']').siblings('.checkout-product[name='
        +double+']').eq(0).children('.checkout-description-price')
          .empty().html(keepPrice);
      $('.checkout-product[name='+double+']').siblings('.checkout-product[name='
        +double+']').eq(0).children('.checkout-description-quantity')
          .children('p').html(keepQuantity);
      $('.checkout-product[name='+double+']').siblings('.checkout-product[name='
        +double+']').eq(1).remove();
    } else {
      nrProducts = parseInt($('#chekout-products-nr p').html());
      $('#chekout-products-nr p').html(parseInt(nrProducts+1));
      $('#cart-button-2 p').html(parseInt(nrProducts+1));
      priceTotal = parseInt($('#checkout-price-total p').html());
      $('#checkout-price-total p').html(parseInt(($(xml).find($(this).parent()
        .attr('name')).children('price').html()))+priceTotal);
    }
//Add to products total and products total price
//Add to this products and this products price
    $('.more').unbind("click").on('click', function() {
      priceTotal = parseInt($('#checkout-price-total p').html());
      price = parseInt($(this).parent()
        .siblings('.checkout-description-price').attr('price'));
      lessMore = parseInt($(this).parent()
        .siblings('.checkout-description-price').html());
      lessMore += parseInt($(this).parent()
        .siblings('.checkout-description-price').attr('price'));
      $(this).parent().siblings('.checkout-description-price').html(lessMore);
      $('#checkout-price-total p').html(priceTotal+price);
      $(this).siblings('p').html(lessMore/price);
      nrProductsTotal = parseInt($('#chekout-products-nr p').html());
      $('#chekout-products-nr p').html(nrProductsTotal+1);
      $('#cart-button-2 p').html(nrProductsTotal+1);
    });
//Extract from products total and products total price
//Extract from this products and this products price
    $('.less').unbind("click").on('click',function() {
      priceTotal = parseInt($('#checkout-price-total p').html());
      price = parseInt($(this).parent()
        .siblings('.checkout-description-price').attr('price'));
      lessMore = parseInt($(this).parent()
        .siblings('.checkout-description-price').html());
//if current price = original price do nothing
      if(lessMore == price) {
        lessMore = price;
      } else {
        lessMore -= parseInt($(this).parent()
          .siblings('.checkout-description-price').attr('price'));
        $('#checkout-price-total p').html(priceTotal-price);
        $(this).siblings('p').html(lessMore/price);
        nrProductsTotal = parseInt($('#chekout-products-nr p').html());
        $('#chekout-products-nr p').html(nrProductsTotal-1);
        $('#cart-button-2 p').html(nrProductsTotal-1);
      }
      $(this).parent().siblings('.checkout-description-price').html(lessMore);
    });
  });
//CHANGE page -previous page-
  $('.arrow-up-svg-container').click(function() {
    var arrow = $(this);
    var sectionL = $(this).parent().parent().parent().parent().attr('id');
    var sectionLoc = sectionL.slice(19,20);
//if=> DISABLE click if this is the first page
    if(currentDbPagePath == 0) {
      currentDbPagePath = 0;
    } else {
      currentDbPagePath -= 10;
        $(xml).find('path').each(function(){
          if($(this).html() == currentDb) {
            storeDb.push($(this).parent());
          }
        });
      $(".products-img").css({'transform': 'rotateX(90deg)',
        transformOrigin:'top'});
      $(this).parent().siblings('.number-container').children('.number-current')
        .css({'transform': 'rotateX(90deg)'});
        getFunct();
      setTimeout(function() {
        $(".products-img").css({'transform': 'rotateX(0deg)',
          transformOrigin:'bottom'});
        $(arrow).parent().siblings('.number-container')
          .children('.number-current').css({'transform': 'rotateX(0deg)'})
            .html((currentDbPagePath)/10+1);
      }, 500);
    }
  });
//CHANGE page -next page-
  $('.arrow-down-svg-container').click(function() {
//STORE this in variable because of setTimeout
    var arrow = $(this);
    var sectionL = $(this).parent().parent().parent().parent().attr('id');
    var sectionLoc = sectionL.slice(19,20);
    $(xml).find('path').each(function() {
      if($(this).html() == currentDb) {
        storeDb.push($(this).parent());
      }
    });
//IF => disable click if last page is accesed
    if((currentDbPagePath+10)>=storeDb.length) {
      currentDbPagePath = currentDbPagePath;
      storeDb = [];
    } else {
      currentDbPagePath += 10;
      $(".products-img").css({'transform': 'rotateX(90deg)',
        transformOrigin:'bottom'});
        $(this).parent().siblings('.number-container')
          .children('.number-current').css({'transform': 'rotateX(90deg)'});
      getFunct();
      setTimeout(function() {
         $(".products-img").css({'transform': 'rotateX(0deg)',
          transformOrigin:'top', 'transition-duration': '0.3s'});
           $(arrow).parent().siblings('.number-container')
            .children('.number-current').css({'transform': 'rotateX(0deg)'})
              .html((currentDbPagePath)/10+1);
      }, 500);
    }
  });
/////////////////////WINDOW
// }
//REMOVE cart entry
  $('.visible-scrollbar').on('click','.checkout-description-remove div p',
  function() {
    $(this).parent().parent().parent().remove();
    priceTotal = parseInt($('#checkout-price-total p').html());
    $('#checkout-price-total p').html((priceTotal) - (parseInt($(this)
      .parent().parent().siblings('.checkout-description-price').html())));
    var nrProductsRemove = parseInt($(this).parent().parent()
      .siblings('.checkout-description-quantity').children('p').html());
    nrProductsTotal = parseInt($('#chekout-products-nr p').html());
    $('#chekout-products-nr p').html(nrProductsTotal-nrProductsRemove);
    $('#cart-button-2 p').html(nrProductsTotal-nrProductsRemove);
  });
  $('#final-step-button').click(function() {
    $('#product-quantity').html($('#chekout-products-nr').html());
    $('#total-price').html($('#checkout-price-total').html());
  });
  $('#full-product-svg').click(function() {
    double = $('#cart-container').attr('name');
    $('.products-img[name='+double+']')
      .children('.products-add').trigger('click');
  });
  $('#full-product-img').click(function() {
    zoom = $('#full-product-img img').attr('src');
    $('#wrapper-zoom').css({'transform':'rotateY(0deg) rotateX(0deg)'});
    $('#wrapper-zoom').css({'background-image': 'url('+zoom+')'});
  });
  $('#close-zoom').click(function() {
    $('#wrapper-zoom').css({'transform':'rotateY(90deg) rotateX(-90deg)'});
  });
//END XML code
// skip intro + 1 question
$(document).ready(function() {
  $('.svg-animation-container').css("display", "none");
  setTimeout(function() {
      $('.text-box').fadeTo(600, 0);}, 10500);
  setTimeout(function() {
    $('#skip-intro').slideDown(500);
  }, 200);
  setTimeout(function() {
    $('#question1').fadeTo(250, 1);
  }, 200);
});
//Entry first question
  var questionreset;
  $('.question').mouseenter(function() {
    clearTimeout(questionreset);
    $('#question1').addClass("question-animation");
    $('#question2').addClass("question-animation");
    $('#question3').addClass("question-animation");
  });
  $('.question').mouseleave(function() {
    questionreset = setTimeout(function() {
      $('#question1').removeClass("question-animation");
      $('#question2').removeClass("question-animation");
      $('#question3').removeClass("question-animation");
    }, 3000);
  });
//question sequence START
  $('#question1').click(function() {
    $('#question1').css("display", "none");
    $('#one-third-1 div').fadeTo(350, 1);
  });
  $('#y1').click(function() {
    $('#one-third-1 div').css("display", "none");
    $('#question2').fadeTo(350, 1);
  });
  $('#n1').click(function() {
    $('#one-third-1 div').css("display", "none");
    $('#answer-n1').fadeTo(350, 1);
    setTimeout(function() {
      $('#answer-n1').css("display", "none");
      $('#one-third-1 div').fadeTo(50, 1);
    }, 2000);
  });
  $('#question2').click(function() {
    $('#question2').css("display", "none");
    $('#one-third-2 div').fadeTo(350, 1);
  });
  $('#n2').click(function() {
    $('#one-third-2 div').css("display", "none");
    $('#question3').fadeTo(350, 1);
  });
  var secondNo = 1;
  $('#y2').click(function() {
    if (secondNo === 1) {
      secondNo = 0;
      $('#one-third-2 div').css("display", "none");
      $('#answer-y2-1').fadeTo(350, 1);
      setTimeout(function() {
        $('#answer-y2-1').css("display", "none");
        $('#one-third-2 div').fadeTo(850, 1);
      }, 2000);
    } else {
      secondNo = 1;
      $('#one-third-2 div').css("display", "none");
      $('#answer-y2-2').fadeTo(350, 1);
      setTimeout(function(){
        $('#answer-y2-2').css("display", "none");
        $('#one-third-2 div').fadeTo(850, 1);
      }, 2000);
    }
  });
  var thirdNo = 1;
  $('#question3').click(function() {
    $('#question3').css("display", "none");
    $('#one-third-3 div').fadeTo(350, 1);
  });
  var thirdNo = 1;
  $('#n3').click(function() {
    if (thirdNo === 1) {
      thirdNo = 0;
      $('#one-third-3 div').css("display", "none");
      $('#answer-n3-1').fadeTo(350, 1);
      setTimeout(function(){
        $('#answer-n3-1').css("display", "none");
        $('#one-third-3 div').fadeTo(850, 1);
      }, 2000);
    } else {
      thirdNo = 1;
      $('#one-third-3 div').css("display", "none");
      $('#answer-n3-2').fadeTo(350, 1);
      setTimeout(function(){
        $('#answer-n3-2').css("display", "none");
        $('#one-third-3 div').fadeTo(850, 1);
      }, 2000);
    }
  });
  $('#skip-intro, #y3').click(function() {
    $('#deer-body-1, #deer-body-2, #deer-eye-1, #deer-eye-2, #deer-eye-3,'+
    +'#bubble, #hello, #human, #virgula, #i, #am, #the, #the-, #b, #bb, #ored,'+
    +'#d, #eer').css({"will-change": "auto"});
    $('#deer-eye-1, #deer-eye-2, #deer-eye-3')
      .css({'animation-play-state': 'paused'});
    $('#header-x').css({'transform': 'rotateX(90deg)'});
    $('.icon-container-1').css({'transform': 'rotateX(90deg)'});
    $('#skip-intro').css({'transform': 'rotateX(90deg)'});
    setTimeout(function() {
      $('#header-x').css("display", "none");
      $('.icon-container-1').css("display", "none");
      $('#deer-body-1').css("display", "none");
      $('.main-story').fadeTo(200, 1);
      $('.svg-animation-container').fadeTo(200, 1);
      setTimeout(function() {
        $('.parralax').css({'display': 'flex'});
        $('#cart-button').delay(400).fadeTo(1,0, function() {
          $('#cart-button').css({'display': 'flex'});
          $('#cart-button').delay(400).fadeTo(1000,1);
        });
      }, 300);
    }, 1100);
    if ( $(window).width() > 1000) {
      $('.main-container').css({'margin-bottom': '40em','height': 'auto'});
      $('#full-product-img').mouseenter(function() {
        $('#blur-full-product-img').css({'opacity':'1'});
      });
      $('#full-product-img').mouseleave(function() {
        $('#blur-full-product-img').css({'opacity':'0'});
      });
    } else {
      $('.main-container').css({'margin-bottom': '100vh'});
    }
  });
//question sequence END
//PC BIG SCREEN
  if ($(window).width() > 1000) {
//Y/N animation
    var answerresetY;
    $('.answer-hovery').mouseenter(function() {
      clearTimeout(answerresetY);
      $('.answer-hovery').css({'transform': 'scale(2.2)','color': '#00B600'});
    });
    $('.answer-hovery').mouseleave(function() {
      answerresetY = setTimeout(function() {
        $('.answer-hovery').css({'transform': 'scale(1)','color': 'black'});
      }, 500);
    });
    var answerresetN;
    $('.answer-hovern').mouseenter(function() {
      clearTimeout(answerresetN);
      $('.answer-hovern').css({'transform': 'scale(2.2)','color': '#00B600'});
    });
    $('.answer-hovern').mouseleave(function() {
      answerresetN = setTimeout(function() {
        $('.answer-hovern').css({'transform': 'scale(1)','color': 'black'});
      }, 500);
    });
//Arrow nav hover change SVG fill and background color
    $('.arrow-up-svg').mouseenter(function() {
      $(this).css({'background-color': '#302014', 'fill': '#edc1a1'});
      $(this).parent().parent().siblings('.arrow-up-text')
        .css({'color':'#edc1a1'});
    });
    $('.arrow-up-svg').mouseleave(function() {
      $(this).css({'background-color': '#513622', 'fill': '#d68f59'});
      $(this).parent().parent().siblings('.arrow-up-text')
        .css({'color':'rgb(81, 54, 34)'});
    });
    $('.arrow-down-svg').mouseenter(function() {
      $(this).css({'background-color': '#302014', 'fill': '#edc1a1'});
      $(this).parent().parent().siblings('.arrow-down-text')
        .css({'color':'#edc1a1'});
    });
    $('.arrow-down-svg').mouseleave(function() {
      $(this).css({'background-color': '#513622', 'fill': '#d68f59'});
      $(this).parent().parent().siblings('.arrow-down-text')
        .css({'color':'rgb(81, 54, 34)'});
    });
//Aside funny description mouseover
    function mouseFunctionOn() {
      $('.main-story-aside').mouseenter(function() {
        $(this).children(".category-description-h").fadeTo(400, 1);
        $(this).children(".category-description").css("display", "none");
      });
    }
    function mouseFunctionOff() {
      $('.main-story-aside').mouseleave(function() {
        $(this).children(".category-description-h").css("display", "none");
        $(this).children(".category-description").fadeTo(400, 1);
      });
    }
    mouseFunctionOn();
    mouseFunctionOff();
// Drop-Down menu animation
    $('.products').mouseenter(function() {
//Height of navigation container on hover based of nr of children
      var hNumber = ($(this).children(".products-nav-container")
        .children().length)*1.28 + 2.25;
      $(this).stop().css({'height' : hNumber+'em'});
      $(':nth-child(2)', this,':nth-child(2)')
      .stop().fadeTo( 600, 1);
      $(':nth-child(1)', this,':nth-child(1)').stop().fadeTo(50, 1);
      $(':nth-child(2)', this,':nth-child(2)').not('.products-nav-container')
        .stop().fadeTo(300, 1);
      $(':nth-child(3)', this,':nth-child(3)').stop().fadeTo(400, 1);
      $(':nth-child(4)', this,':nth-child(4)').stop().fadeTo(500, 1);
      $(':nth-child(5)', this,':nth-child(5)').stop().fadeTo(600, 1);
      $(this).children().css({'background-color': '#ad754a'});
      $('.products-title', this).css({'transition-duration': '0.2s'});
      $('.products-title').mouseleave(function() {
        $(this).css({'background-color': '#ad754a'});
      });
    });
    $('.products').mouseleave(function() {
      $(':nth-child(2)', this,':nth-child(2)')
        .not('.products-title').stop().fadeTo(1000, 0);
      $(':nth-child(1)', this,':nth-child(1)')
        .not('.products-title').stop().fadeTo(0 + 500, 0);
      $(':nth-child(2)', this,':nth-child(2)').not('.products-title')
        .not('.products-nav-container').stop().fadeTo(0 + 350, 0);
      $(':nth-child(3)', this,':nth-child(3)')
        .not('.products-title').stop().fadeTo(0 + 250, 0);
      $(':nth-child(4)', this,':nth-child(4)')
        .not('.products-title').stop().fadeTo(0 + 100, 0);
      $(':nth-child(5)', this,':nth-child(5)')
        .not('.products-title').stop().fadeTo(0 + 50, 0);
      $(this).stop().css({"height" : "2em"});
      $(this).children('.products-title').css({'background-color':''});
      $('.products-title', this).css({'transition-duration': '1.5s',
        'transition-property': 'background-color'});
    });
//Highlight on hover nav button
    $('.products-nav').mouseenter(function() {
      $(this).css({'background-color': '#efa267'});
    });
    $('.products-nav').mouseleave(function() {
      $(this).css({'background-color': '#ad754a'});
    });
//Products List appear on click of Drop-Menu
    $(".products-container").on('click', ".products-nav-container", function() {
      var uncle01 = '#' + $(this)
        .parent().parent().parent().siblings().attr("id");
//Current big section (of 4)
      var clickIndexFirst =  $(this)
        .parent().parent().parent().parent().index() + 1 ;
      var currentArticle = "#main-story-article-" + clickIndexFirst;
      var currentProduct = ".products-container-" + clickIndexFirst;
      var currentAside = "#main-story-aside-" + clickIndexFirst;
      var currentProductImg = "#products-img-container-" + clickIndexFirst;
      var currentNavContainer = "#nav-container-" + clickIndexFirst;
      if ($(currentProductImg).css('display') == 'none') {
        $(currentProduct).css({'padding-top': '2em','opacity': '1'});
        $(currentArticle).css({'flex-direction': 'column'});
        $(currentAside).css({'width': '10%'});
        mouseFunctionOn()
        mouseFunctionOff()
//Aside description on hover funny quote off
        $(uncle01).off("mouseenter");
        $(uncle01).off("mouseleave");
//Current big section (of 4) -- get bigger
        $(this).parent().parent().parent().parent().css({"height" : '55%'});
//Siblings big section (of 4) -- get smaller
        $(this).parent().parent().parent().parent()
          .siblings().css({"height" : '15%'});
        setTimeout(function() {
          $(currentNavContainer).css({'display': 'flex', 'opacity': '1'});
          $(currentProductImg).css({'display': 'flex'});
          $(currentProductImg).fadeTo(400, 1);
        }, 800);
//Small add to cart SVG animation
        $('.products-add').mouseenter(function() {
          $('.schLine-1',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-2',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-3',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-4',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-5',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-6',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-7',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-8',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $('.schLine-9',this).stop().animate({"stroke-dashoffset": "0"}, 200);
          $(this).css({'background-color': '#57a557'});
        });
        $('.products-add').mouseleave(function() {
          $('.schLine-1',this).stop().animate({"stroke-dashoffset": "12"}, 200);
          $('.schLine-2',this).stop().animate({"stroke-dashoffset": "12"}, 200);
          $('.schLine-3',this).stop().animate({"stroke-dashoffset": "12"}, 200);
          $('.schLine-4',this).stop().animate({"stroke-dashoffset": "12"}, 200);
          $('.schLine-5',this).stop().animate({"stroke-dashoffset": "12"}, 200);
          $('.schLine-6',this).stop().animate({"stroke-dashoffset": "12"}, 200);
          $('.schLine-7',this).stop().animate({"stroke-dashoffset": "17"}, 200);
          $('.schLine-8',this).stop()
            .animate({"stroke-dashoffset":"16.5"}, 200);
          $('.schLine-9',this).stop().animate({"stroke-dashoffset": "15"}, 200);
          $(this).css({'background-color': 'rgba(66, 124, 66, 0.6)'});
        });
        $(this).parent().parent().parent().parent()
          .siblings(".main-story-section").children(".main-story-article")
            .children(".products-container").css({'opacity': '1'});
//Display none unused containers of products
        $(this).parent().parent().parent().parent().siblings()
          .children(".main-story-article").children(".products-img-container")
            .css("display", "none");
//Reset width of siblings aside
        $(this).parent().parent().parent().parent().siblings()
          .children(".main-story-aside").css({'width': '100%'});
//Rearange menu in siblings articles
        $(this).parent().parent().parent().parent()
          .siblings(".main-story-section").children(".main-story-article")
            .children().css({'padding-top': '1.5em','margin-bottom': '0em'});
//Arrow for next page container display none
        $(this).parent().parent().parent().parent().siblings()
          .children(".main-story-aside").children(".nav-container")
            .css({'display': 'none'});
//Better center the aside title
        $(this).parent().parent().parent().parent()
          .siblings(".main-story-section").children(".main-story-aside")
            .children(".category-description")
              .css({'padding-bottom': '1em','padding-top': '1em'});
      }
    });
// Products List White Hover over price description and image
    $('.products-image, .products-description, .products-price')
    .mouseenter(function() {
      $(this).css({'background-color': '#57a557'});
      $(this).siblings('.products-image, .products-description,.products-price')
        .css({'background-color': '#57a557'});
      $(this).siblings('.products-image').children().css({'opacity': '0.75'});
      $(this).children(".products-image img").css({'opacity': '0.75'});
    });
// Products List White Hover over price description and image
    $('.products-image, .products-description, .products-price')
    .mouseleave(function() {
        $(this).css({'background-color': 'rgba(66, 124, 66, 0.6)'});
        $(this)
          .siblings('.products-image,.products-description,.products-price')
            .css({'background-color': 'rgba(66, 124, 66, 0.6)'});
        $(this).siblings('.products-image').children().css({'opacity': '1'});
        $(this).children(".products-image img").css({'opacity': '1'});
      });
//Cart Top_Left animation prepare
    $('#cart-lines-1').css({"stroke-dashoffset": '7.305',
      "stroke-dasharray": '7.305'});
    $('#cart-lines-2').css({"stroke-dashoffset": '7.186',
      "stroke-dasharray": '7.186'});
    $('#cart-lines-3').css({"stroke-dashoffset": '7.108',
      "stroke-dasharray": '7.108'});
    $('#cart-lines-4').css({"stroke-dashoffset": '7.104',
      "stroke-dasharray": '7.104'});
    $('#cart-lines-5').css({"stroke-dashoffset": '7.519',
      "stroke-dasharray": '7.519'});
    $('#cart-lines-6').css({"stroke-dashoffset": '7.066',
      "stroke-dasharray": '7.066'});
    $('#cart-lines-33').css({"stroke-dashoffset": '17.439',
      "stroke-dasharray": '17.439'});
    $('#cart-lines-22').css({"stroke-dashoffset": '16.054',
      "stroke-dasharray": '16.054'});
    $('#cart-lines-11').css({"stroke-dashoffset": '15.178',
      "stroke-dasharray": '15.178'});
//Cart Top_Left animation
    $('#cart-button').mouseenter(function() {
      $('#cart-button-1, #cart-button-2, #cart-button')
        .css({'background-color': '#edc1a1'});
      $('#cart-lines-1,#cart-lines-2,#cart-lines-3,#cart-lines-4,'+
          '#cart-lines-5,#cart-lines-6,#cart-lines-33,#cart-lines-22,'+
            '#cart-lines-11').stop().animate({"stroke-dashoffset": "0"}, 200);
    });
    $('#cart-button').mouseleave(function() {
      $('#cart-button-1, #cart-button-2, #cart-button')
        .css({'background-color': '#91613d'});
      $('#cart-lines-1').stop().animate({"stroke-dashoffset": '7.305'}, 200);
      $('#cart-lines-2').stop().animate({"stroke-dashoffset": '7.186'}, 200);
      $('#cart-lines-3').stop().animate({"stroke-dashoffset": '7.108'}, 200);
      $('#cart-lines-4').stop().animate({"stroke-dashoffset": '7.104'}, 200);
      $('#cart-lines-5').stop().animate({"stroke-dashoffset": '7.519'}, 200);
      $('#cart-lines-6').stop().animate({"stroke-dashoffset": '7.066'}, 200);
      $('#cart-lines-33').stop().animate({"stroke-dashoffset": '17.439'}, 200);
      $('#cart-lines-22').stop().animate({"stroke-dashoffset": '16.054'}, 200);
      $('#cart-lines-11').stop().animate({"stroke-dashoffset": '15.178'}, 200);
    });
//Eye hover animation
//Eye location - products details
    $('#eye').mouseover(function() {
      $('#cut').stop().css({"stroke-dashoffset": "0"});
      $('#eye').css({'background-color': '#57a557'});
    });
    $('#eye').mouseleave(function() {
      $('#cut').stop().css({"stroke-dashoffset": '134.208'});
      $('#eye').css({'background-color': '#427c42'});
    });
//Big cart animation - product description page - reset animation
    $('#chLine-1').css({"stroke-dashoffset": '7.305',
      "stroke-dasharray": '7.305'});
    $('#chLine-2').css({"stroke-dashoffset": '7.186',
      "stroke-dasharray": '7.186'});
    $('#chLine-3').css({"stroke-dashoffset": '7.108',
      "stroke-dasharray": '7.108'});
    $('#chLine-4').css({"stroke-dashoffset": '7.104',
      "stroke-dasharray": '7.104'});
    $('#chLine-5').css({"stroke-dashoffset": '7.519',
      "stroke-dasharray": '7.519'});
    $('#chLine-6').css({"stroke-dashoffset": '7.066',
      "stroke-dasharray": '7.066'});
    $('#chLine-7').css({"stroke-dashoffset": '17.439',
      "stroke-dasharray": '17.439'});
    $('#chLine-8').css({"stroke-dashoffset": '16.054',
      "stroke-dasharray": '16.054'});
    $('#chLine-9').css({"stroke-dashoffset": '15.178',
      "stroke-dasharray": '15.178'});
//Big cart animation - product description page - animation
    $('#cart-container').mouseenter(function() {
      $('#full-product-svg, #full-product-cart-c')
        .css({'background-color': '#57a557'});
      for (i=1; i<10;i++) {
        $('#chLine-'+i).stop().animate({"stroke-dashoffset": "0"}, 200);
      }
    });
    $('#cart-container').mouseleave(function() {
      $('#full-product-svg, #full-product-cart-c')
        .css({'background-color': '#427c42'});
      $('#chLine-1').stop().animate({"stroke-dashoffset": '7.305'}, 200);
      $('#chLine-2').stop().animate({"stroke-dashoffset": '7.186'}, 200);
      $('#chLine-3').stop().animate({"stroke-dashoffset": '7.108'}, 200);
      $('#chLine-4').stop().animate({"stroke-dashoffset": '7.104'}, 200);
      $('#chLine-5').stop().animate({"stroke-dashoffset": '7.519'}, 200);
      $('#chLine-6').stop().animate({"stroke-dashoffset": '7.066'}, 200);
      $('#chLine-7').stop().animate({"stroke-dashoffset": '17.439'}, 200);
      $('#chLine-8').stop().animate({"stroke-dashoffset": '16.054'}, 200);
      $('#chLine-9').stop().animate({"stroke-dashoffset": '15.178'}, 200);
    });
// Deer icons from contact animation on hover
    var deerreset;
    $('#deer-icon-animation').mouseenter(function() {
      clearTimeout(deerreset);
      $('#bored-deer-icon1').css({'transform': 'rotateY(180deg) scale(1.2)'});
      $('#bored-deer-icon2').css({'transform': 'rotateY(0deg) scale(1.2)'});
    });
    $('#contact-2-1 h1').mouseleave(function() {
      deerreset = setTimeout(function() {
        $('#bored-deer-icon1').css({'transform': 'rotateY(0deg) scale(1)'});
        $('#bored-deer-icon2').css({'transform': 'rotateY(180deg) scale(1)'});
      }, 1000);
    });
// Phone animation
    var phonereset;
    $('#phone-container').mouseenter(function() {
      clearTimeout(phonereset);
      $('#phone').addClass('phone-jq');
    });
    $('#phone-container').mouseleave(function() {
      phonereset = setTimeout(function() {
        $('#phone').removeClass('phone-jq');
      }, 1000);
    });
//Adress Animation
    var adressreset;
    $('#adress-container').mouseenter(function() {
      clearTimeout(adressreset);
      $('#adress').addClass('adress-jq');
    });
    $('#adress-container').mouseleave(function() {
      adressreset = setTimeout(function() {
        $('#adress').removeClass('adress-jq');
      }, 1000);
    });
// Clock animation
    var clockreset;
    $('#contact-2-1 :nth-child(4)').mouseenter(function() {
      clearTimeout(clockreset);
      $('#minute-hand').addClass('minute-hand-jq');
      $('#hour-hand').addClass('hour-hand-jq');
      $('.minute-hand-jq').css({'animation-play-state':'running'});
      $('.hour-hand-jq').css({'animation-play-state':'running'});
    });
    $('#contact-2-1 :nth-child(4)').mouseleave(function() {
      clockreset = setTimeout(function(){
         $('.minute-hand-jq').css({'animation-play-state':'paused'});
         $('.hour-hand-jq').css({'animation-play-state':'paused'});
       }, 1000);
    });
// Geared Deer Aniamtion
    $('#geared-deer').mouseenter(function() {
      $('#left-gear, #right-gear').css({'animation-play-state':'running'});
    });
    $('#geared-deer').mouseleave(function() {
      $('#left-gear, #right-gear').css({'animation-play-state':'paused'});
    });
  // Newsletter & E-mail send to bored deer style buttons
    $('#contact-1-2-button, #contact-2-2-button').mouseenter(function() {
        $(this).css({'width': '70%', 'background-color': '#7ae87a'});
    });
    $('#contact-1-2-button, #contact-2-2-button').mouseleave(function() {
        $(this).css({'width': '50%', 'background-color': '#55a055'});
    });
//Eye hover animation
//Eye location - products cart
    $('#eye2').mouseover(function() {
      $('#cut2').stop().css({"stroke-dashoffset": "0"});
      $('#eye2').css({'background-color': '#57a557'});
    });
    $('#eye2').mouseleave(function() {
      $('#cut2').stop().css({"stroke-dashoffset": '134.208'});
      $('#eye2').css({'background-color': '#427c42'});
    });
    $('.products-img').click(function() {
      $(this).css({'transform': 'rotateX(-30deg) rotateY(-20deg)'+
        'translate(-50%, -20%) scale(1.5)'});
    });
// PHONE SMALL SCREEN
  } else {
//Product description open
    $('.products-image, .products-description, .products-price')
      .click(function() {
        $('#full-product').css({'transform': 'rotateY(0deg)'});
    });
// Products-nav click
// Products list appear
    $('.products-nav').click(function(e) {
      var clickIndexFirst =  $(this).parent().parent()
        .parent().parent().parent().index() + 1 ;
      var currentArticle = "#main-story-article-" + clickIndexFirst;
      var currentAside = "#main-story-aside-" + clickIndexFirst;
      var currentSection =   $(currentAside).parents(".main-story-section");
      var currentProduct = ".products-container-" + clickIndexFirst;
      var currentProductImg = "#products-img-container-" + clickIndexFirst;
      var currentNavContainer = "#nav-container-" + clickIndexFirst;
      var siblingsDropDown = $(currentArticle)
        .parents().siblings().children('.main-story-article')
          .children('.products-container').children('.products');
      var siblingsNavContainer = $(currentAside).parents().siblings()
        .children(".main-story-aside").children(".nav-container");
      var siblingsProductImg = $(currentAside).parents().siblings()
        .children(".main-story-article").children(".products-img-container");
      var siblingsArticle = $(currentArticle).parents().siblings()
        .children(".main-story-article");
      var siblingsAside =   $(currentAside).parents().siblings()
        .children(".main-story-aside");
      var siblingsSection = $(currentAside).parents()
        .siblings(".main-story-section");
//This Products list appear if they are not visible
      if ($(currentProductImg).css('display') == 'none') {
        $(currentNavContainer).css({'display': 'flex'});
        $(siblingsNavContainer).css({'display': 'none'});
        $(currentAside).css({'height':'10%','justify-content':'space-between'});
        $(currentArticle).css({'height': '90%'});
        $(currentSection).css({'height': '55%'});
        $(siblingsAside).css({'height': '40%','justify-content': 'center'});
        $(siblingsArticle).css({'height': '60%'});
        $(siblingsSection).css({'height': '15%'});
        $(siblingsProductImg).css({'display': 'none'});
        $(currentProductImg).css({'width': '95%'});
        $(currentProductImg).css({'display': 'flex',
          function() {
            $(currentProductImg).fadeTo(200, 1);
          }
        });
//Siblings Products list display none
      $(siblingsDropDown).css({'height': '3em'});
      $(siblingsDropDown).children(".products-nav-container")
        .children().css({'display': 'none'});
      }
    });
//Nav bar Arrow Ritght on click rotate product divs to left
    $('.arrow-up-svg-container').click(function() {
      var arrow = $(this);
      //Products animation Left
      $(this).parent().parent().parent().siblings(".main-story-article")
        .children(".products-img-container").children(".products-align")
          .children(".products-img")
            .css({'transform': 'rotateY(90deg)',transformOrigin:'left'});
      resetAngleProducts = setTimeout(function() {
        $(arrow).parent().parent().parent().siblings(".main-story-article")
          .children(".products-img-container").children(".products-align")
            .children(".products-img")
              .css({'transform': 'rotateY(0deg)',transformOrigin:'right'});
        $(arrow).parent().siblings(".number-container")
          .children(".number-current").css({'transform': 'rotateX(0deg)'});
       }, 500);
//Current Nr. animation Left
      $(this).parent().siblings(".number-container").children(".number-current")
        .css({'transform': 'rotateY(90deg)'});
    });
//Nav bar Arrow Ritght on click rotate product divs to right
    $('.arrow-down-svg-container').click(function() {
      var arrow = $(this);
      $(this).parent().parent().parent().siblings(".main-story-article")
        .children(".products-img-container").children(".products-align")
          .children(".products-img")
            .css({'transform': 'rotateY(90deg)',transformOrigin:'right'});
      resetAngleProducts = setTimeout(function() {
        $(arrow).parent().parent().parent().siblings(".main-story-article")
          .children(".products-img-container").children(".products-align")
            .children(".products-img").css({'transform': 'rotateY(0deg)',
              transformOrigin:'left'});
        $(arrow).parent().siblings(".number-container")
          .children(".number-current").css({'transform': 'rotateX(0deg)'});
      }, 500);
//Current page number animation
      $(this).parent().siblings(".number-container")
        .children(".number-current").css({'transform': 'rotateY(90deg)'});
    });

//Nav subcategory
    $('.products').click(function() {
      var hSpeed = ($(this).children(".products-nav-container")
        .children().length)*2 + 2;
      $('.products-nav').click(function() {
        $(this).parents().parents()
        .siblings(".main-story-aside")
        .children(".nav-container")
        .css({'display': 'flex', "opacity": '1'});
      });
//None coorection
      $(this).siblings().children(".products-nav-container")
        .css({'display': 'none', "opacity": '0'});
      $(this).siblings().children(".products-nav-container").children()
        .css({'display': 'none', "opacity": '0'});
      $(this).siblings().css({'height': '3em'});
// other display none
      $(this).parents().parents().parents().siblings(".main-story-section")
        .children(".main-story-article").children(".products-container")
          .children().css({'height': '3em'});
      $(this).parents().parents().parents()
        .siblings(".main-story-section").children(".main-story-article")
          .children(".products-container").children()
            .children('.products-nav-container')
              .css({'display': 'none', "opacity": '0'});
      $(this).parents().parents().parents().siblings(".main-story-section")
        .children(".main-story-article").children(".products-container")
          .children().children('.products-nav-container')
            .children().css({'display': 'none', "opacity": '0'});
      $(':nth-child(2)', this).stop().fadeTo( 100, 1);
      $(this).children('.products-nav-container')
        .children(':nth-child(1)').stop().fadeTo(100, 1);
      $(this).children('.products-nav-container').children(':nth-child(2)')
       .not('.products-nav-container').stop().fadeTo(400, 1);
      $(this).children('.products-nav-container')
        .children(':nth-child(3)').stop().fadeTo(700, 1);
      $(this).children('.products-nav-container')
        .children(':nth-child(4)').stop().fadeTo(850, 1);
      $(this).children('.products-nav-container')
        .children(':nth-child(5)').stop().fadeTo(1000, 1);
      $('.products-title', this).css({'transition-duration': '0.2s'});
    });
//End phone else
  }
// Checkout Open
  $('#full-product-svg, #full-product-cart-c, #cart-button').click(function() {
    $('#checkout').css({'transform': 'rotateY(0deg)'});
  });
// Final Step Open
  $('#final-step-button').click(function() {
    $('#final-step').css({'transform': 'rotateY(0deg)'});
  });
//Eye hover animation
//Eye location - final step
  $('#eye3').mouseover(function() {
    $('#cut3').stop().css({"stroke-dashoffset": "0"});
    $('#eye3').css({'background-color': '#57a557'});
  });
  $('#eye3').mouseleave(function() {
    $('#cut3').stop().css({"stroke-dashoffset": '134.208'});
    $('#eye3').css({'background-color': '#427c42'});
  });
  //Radio Inputs
  $('#radio-1').click(function() {
    $('#radio-1-c').css({'opacity': '1'});
    $('#radio-2-c').css({'opacity': '0'});
  });
  $('#radio-2').click(function() {
    $('#radio-2-c').css({'opacity': '1'});
    $('#radio-1-c').css({'opacity': '0'});
  });
// Newsletter Open
  $('#contact-2-2').click(function() {
    $('#newsletter').css({'transform': 'rotateY(0deg)'});
    $('#theBlur').css({'display': 'block'});
    setTimeout (function() {
      $('#theBlur').css({'opacity': '0.7'});
    }, 10);
  });
//Eye hover animation
//Eye location - nesletter
  $('#eye4').mouseover(function() {
    $('#cut4').stop().css({"stroke-dashoffset": "0"});
    $('#eye4').css({'background-color': '#57a557'});
  });
  $('#eye4').mouseleave(function() {
    $('#cut4').stop().css({"stroke-dashoffset": '134.208'});
    $('#eye4').css({'background-color': '#427c42'});
  });
// Product Description Navbar Animation
  $('#full-product-nav-1').mouseenter(function() {
    $('#full-product-nav-1').css({'background-color': 'rgb(237, 193, 161)'});
  });
  $('#full-product-nav-1').mouseleave(function() {
    $('#full-product-nav-1').css({'background-color': 'rgb(214, 143, 89)'});
  });
  $('#full-product-nav-2').mouseenter(function() {
    $('#full-product-nav-2').css({'background-color': 'rgb(237, 193, 161)'});
  });
  $('#full-product-nav-2').mouseleave(function() {
    $('#full-product-nav-2').css({'background-color': '#ad754a'});
  });
  $('#full-product-nav-2').click(function() {
    $('#full-product-nav-1').css({'width': '40%','background-color': '#ad754a'});
    $('#full-product-nav-2').css({'width': '60%'});
    $('#full-product-specifications').css({'display': 'flex'});
    $('#full-product-overview').css({'display': 'none'});
    $('#full-product-nav-1').mouseleave(function() {
      $('#full-product-nav-1').css({'background-color': '#ad754a'});
    });
    $('#full-product-nav-2').mouseleave(function() {
      $('#full-product-nav-2').css({'background-color': 'rgb(214, 143, 89)'});
    });
  });
  $('#full-product-nav-1').click(function() {
    $('#full-product-nav-1').css({'width': '60%'});
    $('#full-product-nav-2').css({'width': '40%','background-color':'#ad754a'});
    $('#full-product-specifications').css({'display': 'none'});
    $('#full-product-overview').css({'display': 'flex'});
    $('#full-product-nav-1').mouseleave(function() {
      $('#full-product-nav-1').css({'background-color': 'rgb(214, 143, 89)'});
    });
    $('#full-product-nav-2').mouseleave(function() {
      $('#full-product-nav-2').css({'background-color': '#ad754a'});
    });
  });
// Final Step Order Loading animation
  $('#final-button').click(function() {
    if ($('#adress-i').val().length > 10 && $('#name-i').val().length > 2 &&
          $('#phone-i').val().length > 9 && $('#email-i').val().length > 9 &&
            ($('#radio-1-c').css('opacity') == 1 ||
              $('#radio-2-c').css('opacity') == 1)) {
//Final step loading text animation
      $('#final-step-loading-c').css({'display': 'flex'});
      setTimeout(function() {
        $('#load-5').css({'display': 'flex'});
        $('#load-5').siblings().css({'display': 'none'});
      }, 1000);
      setTimeout(function() {
        $('#load-6').css({'display': 'flex'});
        $('#load-6').siblings().css({'display': 'none'});
      }, 2500);
      setTimeout(function() {
        $('#load-7').css({'display': 'flex'});
        $('#load-7').siblings().css({'display': 'none'});
      }, 4000);
      setTimeout(function() {
        $('#load-8').css({'display': 'flex'});
        $('#load-8').siblings().css({'display': 'none'});
      }, 5500);
      setTimeout(function() {
        $('#load-8').css({'display': 'none'});
        $('#final-step-loading-c').fadeTo(400, 0, function() {
          $('#final-step-loading-c').css({'display': 'none','opacity': '1'});
        });
        $(".products-img").css({'transform':
          'rotateX(0deg) rotateY(0deg) translate(0, 0) scale(1)'});
      }, 7000);
      setTimeout(function() {
        // Details Cart and Final Step Close
        $('#final-step').css({'transform': 'rotateY(90deg)'});
        $('#checkout').css({'transform': 'rotateY(90deg)'});
        $('#full-product').css({'transform': 'rotateY(90deg)'});
        $('#theBlur').css({'opacity': '0'});
          setTimeout(function() {
            $('#theBlur').css({'display': 'none'});
            $('#radio-1-c').css({'opacity': '0'});
            $('#radio-2-c').css({'opacity': '0'});
            var reset1 = document.getElementById('adress-i');
            var reset2 = document.getElementById('name-i');
            var reset3 = document.getElementById('phone-i');
            var reset4 = document.getElementById('email-i');
            reset1.value = '';
            reset2.value = '';
            reset3.value = '';
            reset4.value = '';
          }, 310);

        }, 7700);
        // Uncomplete form error - ok
        $('#error-1').css({'color': 'rgb(145, 97, 61)'});
    } else {
      // Uncomplete form error - bad
      $('#error-1').css({'display': 'flex'});
      setTimeout(function() {
          $('#error-1').css({'color': 'yellow'});
      }, 100);
          $('#final-button-place').css({'display': 'none', 'opacity':'0'});
      setTimeout(function() {
          $('#error-1').css({'color': 'rgb(145, 97, 61)'});
      }, 1500);
      setTimeout(function() {
          $('#error-1').css({'display': 'none'});
      }, 1950);
      setTimeout(function() {
        $('#final-button-place').css({'display': 'flex'});
      }, 2000);
      setTimeout(function() {
        $('#final-button-place').css({'opacity':'1'});
      }, 2050);
    }
  });
  $('#newsletter-button').click(function() {
    if ($('#news-i').val().length > 10) {
// Newsletter loading text animation
      $('#final-step-loading-c').css({'display': 'flex'});
      setTimeout(function() {
        $('#load-1').css({'display': 'flex'});
        $('#load-1').siblings().css({'display': 'none'});
      }, 1000);
      setTimeout(function() {
        $('#load-2').css({'display': 'flex'});
        $('#load-2').siblings().css({'display': 'none'});
      }, 2500);
      setTimeout(function() {
        $('#load-3').css({'display': 'flex'});
        $('#load-3').siblings().css({'display': 'none'});
      }, 4000);
      setTimeout(function() {
        $('#load-4').css({'display': 'flex'});
        $('#load-4').siblings().css({'display': 'none'});
      }, 5500);
      setTimeout(function() {
        $('#load-4').css({'display': 'none'});
        $('#final-step-loading-c').fadeTo(400, 0,
          function() {
            $('#final-step-loading-c').css({'display': 'none','opacity': '1'});
          });
      }, 7000);
      setTimeout(function() {
//Newsletter close
        $('#theBlur').css({'opacity': '0'});
        setTimeout(function() {
          $('#theBlur').css({'display': 'none'});
          var reset5 = document.getElementById('news-i');
          reset5.value = '';
        }, 310);
        $('#newsletter').css({'transform': 'rotateY(90deg)'});
        $(".products-img").css({'transform': 'rotateX(0deg)'+
          'rotateY(0deg) translate(0, 0) scale(1)'});
      }, 7600);
    } else {
      $('#newsletter-button').css({'background-color': 'red'});
      $('#newsletter-button section').css({'display': 'none'});
      $('#newsletter-button p').css({'display': 'flex'});
      setTimeout(function() {
        $('#newsletter-button').css({'background-color': '#427c42'});
        $('#newsletter-button p').css({'display': 'none'});
        $('#newsletter-button section').css({'display': 'flex'});
      }, 1000);
    }
  });
//Geared deer animation ((hover))
  $('#geared-deer').mouseenter(function() {
    $('.st000, .st111, .st222').css({'fill': '#f2d6c1'});
  });
  $('#geared-deer').mouseleave(function() {
    $('.st000, .st111, .st222').css({'fill': '#302014'});
  });
// Blur on Detail
  $('#cart-button, .products-img, .products-description, .products-price, #contact-2-2-button').click(function() {
    $('#theBlur').css({'display': 'block'});
    setTimeout (function() {
      $('#theBlur').css({'opacity': '0.7'});
    }, 10);
  });
//Close checkout, news, product-details, finnal-step
  $('#full-product-x-c, #checkout-close, #escape-final-button, #news-x').click(function() {
    $('#full-product, #checkout, #final-step, #newsletter')
      .css({'transform': 'rotateY(90deg)'});
    $(".products-img").css({'transform': 'rotateX(0deg)'+
      'rotateY(0deg) translate(0, 0) scale(1)'});
    $('#theBlur').css({'opacity': '0'});
    setTimeout (function() {
      $('#theBlur').css({'display': 'none'});
    }, 310);
  });
