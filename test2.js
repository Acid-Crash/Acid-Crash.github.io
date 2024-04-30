(function () {

      Lampa.Settings.listener.follow('open',(e)=>{
        if(e.type == 'main'){
         setTimeout(function(){
        $('div[data-component="parental_control"]').remove();
        $('div[data-component="server"]').remove();
        $('div[data-component="parser"]').remove();
         },0);
        }
    });

})();
