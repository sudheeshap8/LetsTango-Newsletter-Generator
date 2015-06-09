var client = algoliasearch('JG5HMOGPPI', 'fa11de96782145087d25862cc906a849');
var index = client.initIndex('LetsTango');
var products = [];


$('#getMondayBtn').click(function () {
    console.log("hallo");
    $.ajax({
        url: '/monday',
        data: JSON.stringify({'name': "Sudheesh"}),
        //type: 'POST',
        success: function (data) {
            //console.log(data);
            $('#newsletter').html(data);
        }
    });
});

$('#newsletter').on('click', '.tile', function () {
    console.log('Clicked!');
    $('#productModal').modal();
});

$('#editBoxCloseBtn').on('click', function () {
    $('#edit-container').slideUp();
});


function renderProductList(productList) {
    $('#product-list-container').html('<div id="product-list" class="row"></div>');

    $(productList).each(function(index, product) {
        //console.log(product);
        var tile = $('<article class="col-md-3 tileContainer"><a href="javascript:;" class=""><div class="productTile">\
            <p class="productName">' + product.name +
            '</p><p class="productPrice">AED '+ product.price + '</p></div></article>');
        $('#product-list').append(tile);
        $(tile).data('item', product);
        
        console.log($(tile).data('item'));

    });

}

$('#generateBtn').click(function () {
    $.ajax({
        url: '/monday_nl',
        data: JSON.stringify(products),
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('html').html(data);
        } 

    });
});


$('.productsContainer').on('click', '.productTile', function (e) {
    // console.log("Selected");
    // console.log(products);

    // //e.preventDefault();
    // //e.stopPropagation();
    // products.push($(this).closest('article').data('item'));
    var item = $(this).closest('.tileContainer').data().item;
    var iframeSrc = 'http://www.letstango.com/product/' + item.url;
    
    $('#ltIframe').attr('src', iframeSrc);
    

    $('#edit-container').slideDown();
    console.log(item);

    $('#productEditPreview').append($(this).closest('.tileContainer').data());
});

$('#product-search').on('keyup', function () {
    var query = $(this).val();
    //var iframeSrc = 'http://www.letstango.com/search/#q=' + query + '&page=0&minReviewsCount=0&refinements=[]';
    //$('#ltIframe').attr('src', 'http://www.letstango.comx/');
    //setTimeout(function () {
        //$('#ltIframe').attr('src', iframeSrc);
        //console.log($('#ltIframe').attr('src'));
    //}, 50);

	// Callback example
	index.search(query, function searchDone(err, content) {
	  // err is either `null` or an `Error` object, with a `message` property
	  // content is either the result of the command or `undefined`

	  if (err) {
	    console.error(err);
	    return;
	  }

	  //console.log(content);
      // $('#product-list').text(content);
      renderProductList(content.hits);
	});

});

// // Promise example
// index.search('something')
//   .then(function searchSuccess(content) {
//     console.log(content);
//   })
//   .catch(function searchError(err) {
//     console.error(err);
//   })