
jQuery(document).ready(function() {
    
  	/*Start: Prevent the default white background on blur of top navigation */
  	$(".dropdown-menu li a").mousedown(function() {
  		var dropdown = $(this).parents('.dropdown');
  		var link = dropdown.children(':first-child');
  		link.css('background-color', "#2E3436");
  		link.css('color', 'white');
  	});
  	/*End: Prevent the default white background on blur of top navigation */

    
    // intro_height=$("#intro").height();
    // // intro_top=$("#intro").position().top;
    // $('.intro_pics').height(intro_height);
    // // $('.intro_pics').position.top=intro_top;
    // 
            
    if (manifest){
        if (manifest.templates) {
            $.ajax(manifest.templates)
            .done(function(data){
                for( var pkg in manifest.packages) {
                    var package = manifest.packages[pkg];
                    $(package.destination).html($(data).filter(package.source).text());
                }
            });
        }
    }
    
});

