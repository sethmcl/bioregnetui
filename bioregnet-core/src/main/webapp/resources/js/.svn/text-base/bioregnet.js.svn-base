var Manager;

(function ($) {

  $(function () {
    Manager = new AjaxSolr.Manager({
      // This is the HTTP Solr server providing access
      // to the partciular corpus index we wish to
      // search over within the application.
      solrUrl: 'http://eil.stanford.edu:8080/solr_publications/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      id: 'result',
      target: '#docs'
    }));
    
    Manager.addWidget(new AjaxSolr.PagerWidget({
      id: 'pager',
      target: '#pager',
      prevLabel: '&lt;',
      nextLabel: '&gt;',
      innerWindow: 1,
      renderHeader: function (perPage, offset, total) {
        $('#pager-header').html($('<span/>').text('displaying ' + 
          Math.min(total, offset + 1) + ' to ' + Math.min(total, offset + perPage) + ' of ' + total));
      }
    }));
    
    var fields = [ 'hasDescriptor_meta', 'hasQualifier_meta', 'hasAuthor_meta', 'JournalTitle_meta'];// add & 'organisations', 'exchanges' to initiate these fields. 
    for (var i = 0, l = fields.length; i < l; i++) {
      Manager.addWidget(new AjaxSolr.TagcloudWidget({
        id: fields[i],
        target: '#' + fields[i],
        field: fields[i]
      }));
    }
    
    Manager.addWidget(new AjaxSolr.CurrentSearchWidget({
      id: 'currentsearch',
      target: '#selection'
    }));
    /*
     * The text widget is replaced by the autocompleyewidget
    Manager.addWidget(new AjaxSolr.TextWidget({
      id: 'text',
      target: '#search'
    }));
    */
    
    Manager.addWidget(new AjaxSolr.AutocompleteWidget({
      id: 'text',
      target: '#search',
      fields: [ 'hasDescriptor_meta', 'hasQualifier_meta' ] 
    }));
    /*
    // We do not currently need this widget
    Manager.addWidget(new AjaxSolr.CountryCodeWidget({
      id: 'countries',
      target: '#countries',
      field: 'countryCodes'
    }));
    // We do not currently need this widget
    Manager.addWidget(new AjaxSolr.CalendarWidget({
      id: 'calendar',
      target: '#calendar',
      field: 'date'
    }));*/
    /**
     * This is the Bioportal Ontology Autocompletion Widget.
     */
    Manager.addWidget(new AjaxSolr.BioportalFormCompleteWidget({
      id: 'bp_form_complete',
      target: '#search',
      fields: [ 'hasDescriptor_meta', 'hasQualifier_meta' ] 
    }));

    //We set the Manager to use ParameterHashStore for maintaining previous application
    //states. This exposes bookmark states to the user so he/she can move between application 
    //states with the browser’s navigation buttons.
    Manager.setStore(new AjaxSolr.ParameterHistoryStore());
    
    //We now must list the parameters that our widgets allow the user to change
    Manager.store.exposed = [ 'fq', 'q', 'start' ];
    
    Manager.init();
    Manager.store.addByValue('q', '*:*');
    var params = {
      facet: true,
      'facet.field': [ 'hasDescriptor_meta', 'JournalTitle_meta', 'hasQualifier_meta', 'hasAuthor_meta' ], //'hasFullText_text', 'hasAbstract_text'
      'facet.limit': 20,
      'facet.mincount': 1,
      'f.topics.facet.limit': 50,
      // We do not currently need these facet configurations.
      //'f.countryCodes.facet.limit': -1,
      //'facet.date': 'date',
      //'facet.date.start': '1987-02-26T00:00:00.000Z/DAY',
      //'facet.date.end': '1987-10-20T00:00:00.000Z/DAY+1DAY',
      //'facet.date.gap': '+1DAY',
      'json.nl': 'map'
    };
    for (var name in params) {
      Manager.store.addByValue(name, params[name]);
    } 
    Manager.doRequest();
  });

  /*$.fn.showIf = function (condition) {
    if (condition) {
      return this.show();
    }
    else {
      return this.hide();
    }
  }*/

})(jQuery);
