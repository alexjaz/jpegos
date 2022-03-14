
<script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
<!-- or -->

<script src="https://unpkg.com/interactjs/dist/interact.min.js"></script>



<script>


// target elements with the "draggable" class
interact('.folder, .reader, .follow-page, .slide-starter, .starter, .vocab-reader, .first-page, .moon-page, .twitter-page, .podcast-page, .article-page, .second-page' )
  .draggable({
    // enable inertial throwing
    
    
    allowFrom: '.dragger-box',
  
   /* inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    */
    // enable autoScroll
    autoScroll: true,


    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
/*
      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      } */
    }
  })
  
  

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener




// add and remove click link color in MOON list

$('.moon-folder-list-link').on('click', function() {
$('.pyramide-folder-list-item').removeClass('rainbow');
$('.pyramide-folder-list-item').removeClass('rainbow-clicked');
$('.moon-folder-list-item').removeClass('rainbow');
$('.moon-folder-list-item').removeClass('rainbow-clicked');
  let myIndex = $(this).closest('.moon-folder-list-item').index();
  $('.moon-folder-list-item').eq(myIndex).addClass('rainbow');

});

// add and remove click link color in PYRAMIDE list

$('.pyramide-folder-list-link').on('click', function() {

$('.moon-folder-list-item').removeClass('rainbow');
$('.moon-folder-list-item').removeClass('rainbow-clicked');
$('.pyramide-folder-list-item').removeClass('rainbow');
$('.pyramide-folder-list-item').removeClass('rainbow-clicked');
  let myIndex = $(this).closest('.pyramide-folder-list-item').index();
  $('.pyramide-folder-list-item').eq(myIndex).addClass('rainbow');

});






//forward-button for Twitter account slider

var clicker = 0;

$('.follow-list-item').removeClass('active');
 $('.follow-list-item').eq(clicker).addClass('active');


$('.forward-button').on('click', function() {
$('.follow-list-item').removeClass('active');

if (clicker < ('.follow-list'.length-3)) {

clicker++;

  $('.follow-list-item').eq(clicker).addClass('active');
   }
   
   else {
   clicker = 0;
  $('.follow-list-item').eq(clicker).addClass('active');
   }

});


// previous-button for Twitter account slider

$('.previous-button').on('click', function() {
$('.follow-list-item').removeClass('active');

if (clicker < ('.follow-list'.length-2) && clicker >0) {

clicker--;

  $('.follow-list-item').eq(clicker).addClass('active');
   }
   
   else {
   clicker = ('.follow-list'.length-3);
   $('.follow-list-item').eq(clicker).addClass('active');
   }

});









// double-click choose right article from moon-page into reader


$('.moon-folder-list-link').on('dblclick', function() {
$('.pyramide-reader-item').removeClass('active');
$('.moon-reader-item').removeClass('active');
$('.reader').removeClass('close-reader');
  let myIndex = $(this).closest('.moon-folder-list-item').index();
  $('.moon-reader-item').eq(myIndex).addClass('active');
    $('.moon-folder-list-item').eq(myIndex).addClass('rainbow-clicked');

});


// double-click choose right article from pyramide-page into reader


$('.pyramide-folder-list-link').on('dblclick', function() {
$('.moon-reader-item').removeClass('active');
$('.pyramide-reader-item').removeClass('active');
$('.reader').removeClass('close-reader');
  let myIndex = $(this).closest('.pyramide-folder-list-item').index();
  $('.pyramide-reader-item').eq(myIndex).addClass('active');
    $('.pyramide-folder-list-item').eq(myIndex).addClass('rainbow-clicked');

});



// toggle folder icon to show or hide collection list MOON

$('.moon-link-arrow-down').on('click', function() {
 
  $('.moon-collection').toggleClass('active');
});

// toggle folder icon to show or hide collection list PYRAMIDE

$('.pyramide-link-arrow-down').on('click', function() {
 
  $('.pyramide-collection').toggleClass('active');
});






// closing follow-page on icon-click

$('.close-follow-page-icon').on('click', function() {
 
  $('.follow-page').addClass('close-follow-page');
});


// open second-page from desktop icon

$('.futurescam-icon, .start-link').on('click', function() {
 
  $('.second-page').removeClass('close-second');
});

// closing SECOND PAGE on red button

$('.second-icon').on('click', function() {
 
  $('.second-page').addClass('close-second');
});


// open ARTICLE-page from desktop icon

$('.article-icon, .articles-link').on('click', function() {
 
  $('.article-page').removeClass('close-article');
});

// closing ARTICLE PAGE on red button

$('.article-red').on('click', function() {
 
  $('.article-page').addClass('close-article');
});

// open TWITTER-page from desktop icon

$('.twitter-icon').on('click', function() {
 
  $('.twitter-page').removeClass('hide');
});

// closing TWITTER PAGE on red button

$('.twitter-red').on('click', function() {
 
  $('.twitter-page').addClass('hide');
});

// open PODCAST-page from desktop icon

$('.podcast-icon').on('click', function() {
 
  $('.podcast-page').removeClass('hide');
});

// closing ARTICLE PAGE on red button

$('.podcast-red').on('click', function() {
 
  $('.podcast-page').addClass('hide');
});

// open ABOUT-page from link icon

$('.about-link').on('click', function() {
 
  $('.about-page').removeClass('hide');
});

// closing ABOUT PAGE on red button

$('.about-icon').on('click', function() {
 
  $('.about-page').addClass('hide');
});





//second-page moon-button opener

$('.moon-button').on('click', function() {
	$('.second-page-box').addClass('close-second-box');
  $('.moon-page-box').removeClass('close-moon-box');

});

//second-page pyramide-button opener

$('.pyramide-button').on('click', function() {
	$('.second-page-box').addClass('close-second-box');
  $('.pyramide-page-box').removeClass('close-pyramide-box');

});


// back to main menu - button, moon page to second page

$('.back-button-link').on('click', function() {
	$('.moon-page-box').addClass('close-moon-box');
  $('.pyramide-page-box').addClass('close-pyramide-box');
  $('.second-page-box').removeClass('close-second-box');

});



// Let's get started - button MOON

$('.get-started-moon').on('click', function() {
	$('.moon-page-box').addClass('close-moon-box');
  $('.moon-page-box-1').removeClass('close-moon-page-box-1');
 
});


// Let's get started - button PYRAMIDE

$('.get-started-pyramide').on('click', function() {
	$('.pyramide-page-box').addClass('close-pyramide-box');
  $('.pyramide-page-box-1').removeClass('close-pyramide-page-box-1');
 
});

// Back to Main menu - Moon page 1

$('.main-menu-button').on('click', function() {
	$('.moon-page-box-1').addClass('close-moon-page-box-1');
  $('.pyramide-page-box-1').addClass('close-pyramide-page-box-1');
  $('.second-page-box').removeClass('close-second-box');
 
});


// +- button on twitter page - COMMUNITY

$('.community-button').on('click', function() {
	$('.community-item').toggleClass('hide');
	$('.community-button').toggleClass('minus');
});

// +- button on twitter page - ARTISTS

$('.artists-button').on('click', function() {
	$('.artists-item').toggleClass('hide');
	$('.artists-button').toggleClass('minus');
});


// +- button on twitter page - INVESTORS

$('.investors-button').on('click', function() {
	$('.investors-item').toggleClass('hide');
	$('.investors-button').toggleClass('minus');
});

// +- button on twitter page - DEVELOPERS

$('.developer-button').on('click', function() {
	$('.developer-item').toggleClass('hide');
	$('.developer-button').toggleClass('minus');
});

// +- button on acrticle page - CRYPTO

$('.crypto-button').on('click', function() {
	$('.crypto-item').toggleClass('hide');
	$('.crypto-button').toggleClass('minus');
});

// +- button on acrticle page - NFT

$('.nft-button').on('click', function() {
	$('.nft-item').toggleClass('hide');
	$('.nft-button').toggleClass('minus');
});

// +- button on acrticle page - VOCAB

$('.vocab-button').on('click', function() {
	$('.vocab-item').toggleClass('hide');
	$('.vocab-button').toggleClass('minus');
});

// +- button on acrticle page - VIDEO

$('.video-button').on('click', function() {
	$('.video-item').toggleClass('hide');
	$('.video-button').toggleClass('minus');
});

// +- button on podcast page - 2021

$('.twoone-button').on('click', function() {
	$('.twoone-item').toggleClass('hide');
	$('.twoone-button').toggleClass('minus');
});


// +- button on podcast page - 2022

$('.twotwo-button').on('click', function() {
	$('.twotwo-item').toggleClass('hide');
	$('.twotwo-button').toggleClass('minus');
});

</script>

