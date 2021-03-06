'use strict';

var $filter = $('<div id="evil-list-filter">' +
                '<input class="header-search-input" type="text" placeholder="Filter Lists"/></div>');
$filter.find('input').on('keyup', function() {
  var $input = $(this);
  var query = new RegExp($input.val(), 'i');
  $('#board > .list').each(function(el, i) {
    var $list = $(this);

    var listName = $list.find('h2.list-header-name').text().trim();
    if (query.test(listName)) {
      $list.show();
    } else {
      $list.hide();
    }
  });
});

var domObserver = new MutationObserver(function(mutations) {
  if (!$('#header').find($filter).length) {
    $filter.insertAfter('#header .header-search');
  }
});

domObserver.observe(document.querySelector('#header'), { childList: true });
