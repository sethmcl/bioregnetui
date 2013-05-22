(function ($) {

AjaxSolr.theme.prototype.result = function (doc, snippet) {
  var output = '<div><h2>' + doc.hasTitle_text + '</h2>';
  output += '<div><h3>' + doc.JournalTitle_meta + ' - ' + doc.type + '</h3>';
  output += '<div><h4>' + doc.hasAuthor_meta + '</h4>';
  output += '<p id="links_' + doc.id + '" class="links"></p>'; //we can add possibly the hasDescriptor_meta or hasQualifier_meta here?
  output += '<p>' + snippet + '</p></div>';
  return output;
};

AjaxSolr.theme.prototype.snippet = function (doc) {
  var output = '';
  if (doc.hasAbstract_text.length > 300) {
    output += doc.hasAbstract_text.substring(0, 300);
    output += '<span style="display:none;">' + doc.hasAbstract_text.substring(300);
    output += '</span> <a href="#" class="more">more</a>';
  }
  else {
    output += doc.hasAbstract_text;
  }
  return output;
};

AjaxSolr.theme.prototype.tag = function (value, weight, handler) {
  return $('<a href="#" class="tagcloud_item"/>').text(value).addClass('tagcloud_size_' + weight).click(handler);
};

AjaxSolr.theme.prototype.facet_link = function (value, handler) {
  return $('<a href="#"/>').text(value).click(handler);
};

AjaxSolr.theme.prototype.no_items_found = function () {
  return 'no items found in current selection';
};

})(jQuery);
