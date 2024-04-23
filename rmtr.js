(function () {
    'use strict';
    Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
            e.object.activity.render().find('.view--trailer').remove();
        }
    });
})();
