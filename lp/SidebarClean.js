(function () {
    'use strict';	
   var garbage_collector = {
      name: 'Clean Sidebar',
      version: '1.0',
      description: 'Remove items from Sidebar'
    };
		Lampa.Listener.follow('app',(e)=>{
        if(e.type == 'ready'){
			setTimeout(function(){
				$("[data-action=mytorrents]").eq(0).remove();
				$("[data-action=feed]").eq(0).remove();
			},10); 
        }
    });

})();
