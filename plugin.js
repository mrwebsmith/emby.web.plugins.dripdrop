define([], function () {

    return function () {

        var self = this;

        self.name = 'DripDrop';
        self.type = 'soundeffects';
        self.id = 'dripsoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    };
});
