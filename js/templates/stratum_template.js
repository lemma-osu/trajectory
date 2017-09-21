(function (window) {
    'use strict';

    function StratumTemplate() {
        this.defaultTemplate =
            '<div id="stratum-{{index}}" class="column">' +
            '  <span class="modal-link">' +
            '    {{alias}}' +
            '  </span>' +
            '  <ul class="list" id="stratum-{{index}}-data">' +
            '    <li>All</li>' +
            '  </ul>' +
            '</div>';
    }

    StratumTemplate.prototype.show = function(data) {
        var view = this.defaultTemplate;
        view = view.replace(/{{index}}/g, data.index);
        view = view.replace(/{{alias}}/g, data.stratum.alias);
        return view;
    };

    // Export to window
    window.app = window.app || {};
    window.app.StratumTemplate = StratumTemplate;
})(window);
