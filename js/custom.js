$('.left-menu-link').click(function() {
    $(".left-menu-link").next('.collapse').collapse('hide');
    $(this).next('.collapse').collapse('toggle');
    
    if($(this).parent('.menu-parent').hasClass('active')){
      $(this).parent('.menu-parent').toggleClass('active');
    }else{
      $(".menu-parent").removeClass('active');
      $(this).parent('.menu-parent').addClass('active');
    }
    
    if($(this).find(".toggleIco").hasClass('fa-chevron-down')){
      $(this).find('.toggleIco').toggleClass('fa-chevron-left fa-chevron-down');
    }
    else{
      $(".toggleIco").removeClass('fa-chevron-down').addClass('fa-chevron-left');
      $(this).find('.toggleIco').toggleClass('fa-chevron-left fa-chevron-down');
    }
  });

  $('.hamburger-lines').click(function() {
    $(".logo-normal, .logo-small").toggle();
    $(".sidebar-main").toggleClass("collapsedLeftPanel");
    $(".top-header-left-sec").toggleClass("collapsedTopLeftPanel");
  });
  
  $('.sub-menu-link').click(function() {
    $(".sub-menu-link").next('.collapse').collapse('hide');
    $(this).next('.collapse').collapse('toggle');

     $(".toggleIco").removeClass('fa-chevron-down').addClass('fa-chevron-left');
      $(this).find('.toggleIco').toggleClass('fa-chevron-left fa-chevron-down');
  });
  