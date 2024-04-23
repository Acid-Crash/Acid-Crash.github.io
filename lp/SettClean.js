(function () {
    'use strict';	
   var garbage_collector = {
      name: 'SettingsCleanup',
      version: '1.0',
      description: 'Remove items from Settings'
    };
		Lampa.Listener.follow('app',(e)=>{
        if(e.type == 'ready'){
			setTimeout(function(){
				$("[data-component=parser]").eq(0).remove();
				$("[data-component=server]").eq(0).remove();
			},10); 
        }
    });

})();
