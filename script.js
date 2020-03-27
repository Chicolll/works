window.addEventListener('scroll', function(){
  var c = document.getElementById('section1');
  var bounding = c.getBoundingClientRect();
  if (
  	bounding.top <= 60
  ) {
  	console.log('In the viewport!');


    var pos = $('#date').offset();
    $('.post').each(function () {
        if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
            var newDescr = $(this).find('.description').text();
            var oldDescr = $( "#date" ).html();

            $('#date').html(newDescr);
            if(newDescr !== oldDescr) {
                $( "#date" ).css('opacity', 0.4).animate({ 'opacity': '1',}, 500);
            return;
            }
        }
    });
  } else {
  	console.log('Not in the viewport... whomp whomp');
    var pos = $('#date').offset();
    $('.post').each(function () {
        if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
            var newDescr = '';
            var oldDescr = $( "#date" ).html();

            $('#date').html(newDescr);
            if(newDescr !== oldDescr) {
                $( "#date" ).css('opacity', 0.2).animate({ 'opacity': '1',}, 50);
            return;
            }
        }
    });

  }

})



function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

}
