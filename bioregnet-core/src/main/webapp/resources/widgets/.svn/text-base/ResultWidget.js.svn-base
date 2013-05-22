(function ($) {

AjaxSolr.ResultWidget = AjaxSolr.AbstractWidget.extend({
  start: 0,

  beforeRequest: function () {
    $(this.target).html($('<img/>').attr('src', 'images/ajax-loader.gif'));
  },

  facetLinks: function (facet_field, facet_values) {
    var links = [];
    if (facet_values) {
      for (var i = 0, l = facet_values.length; i < l; i++) {
        if (facet_values[i] !== undefined) {
          links = links.concat([
            facet_field + ':',
            $('<a href="#"></a>')
            .text(facet_values[i])
            .click(this.facetHandler(facet_field, facet_values[i]))
          ]);
        }
        else {
          links.push(AjaxSolr.theme('no_items_found'));
        }
      }
    }
    return links;
  },

  facetHandler: function (facet_field, facet_value) {
    var self = this;
    return function () {
      self.manager.store.remove('fq');
      self.manager.store.addByValue('fq', facet_field + ':' + AjaxSolr.Parameter.escapeValue(facet_value));
      self.doRequest();
      return false;
    };
  },

  afterRequest: function () {
    $(this.target).empty();
    for (var i = 0, l = this.manager.response.response.docs.length; i < l; i++) {
      var doc = this.manager.response.response.docs[i];
      //$(this.target).append(AjaxSolr.theme('result', doc, AjaxSolr.theme('snippet', doc)));
      $(this.target).append(this.template(doc));
      
      var items = [];
      //items = items.concat(this.facetLinks('topics', doc.hasAuthor_meta)); // add facet for Author metadata
      items = items.concat(this.facetLinks('hasDescriptor_meta', doc.hasDescriptor_meta)); // add facet for Descriptor metadata
      //items = items.concat(this.facetLinks('organisations', doc.organisations));// don't require organisations facet
      //items = items.concat(this.facetLinks('exchanges', doc.exchanges));// don't require exchanges facet
      //AjaxSolr.theme('list_items', '#links_' + doc.id, items);
      var $links = $('#links_' + doc.id);
      $links.empty();
      for (var j = 0, m = items.length; j < m; j++) {
        $links.append($('<li></li>').append(items[j]));
      }
    }
  },
  
  template: function (doc) {
    var snippet = '';
    if (doc.hasAbstract_text.length > 300) {
      snippet += 'PMED ID: ' + doc.id + ' ' + doc.hasAbstract_text.substring(0, 300);
      snippet += '<span style="display:none;">' + doc.hasAbstract_text.substring(300);
      snippet += '</span> <a href="#" class="more">more</a>';
    }
    else {
      snippet += '<b>PUBMED ID: ' + doc.id + '</b> ' + doc.hasAbstract_text;
    }
    var output = '<div><h2>' + doc.hasTitle_text + '</h2>';
    output += '<div><h3>' + doc.JournalTitle_meta + ' - ' + doc.type + '</h3>';
    output += '<div><h3>' + doc.hasAuthor_meta + '</h3>';
    output += '<p id="links_' + doc.hasDescriptor_meta + '" class="links"></p>';
    output += '<p>' + snippet + '</p></div>';
    return output;
  },

  init: function () {
    $(document).on('click', 'a.more', function () {
      var $this = $(this),
          span = $this.parent().find('span');

      if (span.is(':visible')) {
        span.hide();
        $this.text('more');
      }
      else {
        span.show();
        $this.text('less');
      }

      return false;
    });
  }
});

})(jQuery);