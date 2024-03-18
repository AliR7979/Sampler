// Because everyone screams! user interaction
$(function(){
    var list = $('ul'),
        listItem = list.find('li');
    
    listItem.on('click', function(){
      $(this).toggleClass('checked');
      listItem.not('.checked').length ? list.removeClass('complete') : list.addClass('complete');
    });
    
    $('button').on('click', function(){
      listItem.addClass('checked');
      list.addClass('complete');
    });
  });