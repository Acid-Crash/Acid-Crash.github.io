(function () {
    'use strict';	
   var garbage_collector = {
      name: 'Clean Sidebar',
      version: '1.0',
      description: 'Remove items from Sidebar and Header'
    };
		Lampa.Listener.follow('app',(e)=>{
        if(e.type == 'ready'){
			setTimeout(function(){
				$("[data-action=relise]").eq(0).remove();
				$("[data-action=anime]").eq(0).remove();
				$("[data-action=mytorrents]").eq(0).remove();
				$("[data-action=feed]").eq(0).remove();
				$("[data-action=about]").eq(0).remove();
				$("[data-action=console]").eq(0).remove();
				$("[data-action=myperson]").eq(0).remove();
				$("[data-action=subscribes]").eq(0).remove();
				$('.head__actions > .head__action:not(.open--search):not(.open--settings)').remove();
			},10); 
        }
    });

})();
