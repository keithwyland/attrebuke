var attr_a = [
  	'charset',
  	'coords',
  	'datasrc',
  	'datafld',
  	'methods',
  	'name',
  	'rev',
  	'shape',
  	'urn'
  ];
  
  var attr_area = [
  	'nohref'
  ];
  
  var attr_body = [
  	'alink',
  	'background',
  	'bgcolor',
  	'link',
  	'marginbottom',
  	'marginheight',
  	'marginleft',
  	'marginright',
  	'margintop',
  	'marginwidth',
  	'text',
  	'vlink'
  ];
  
  var attr_col = [
  	'align',
  	'charoff',
  	'valign',
  	'width'
  ];
  
  var attr_embed = [
  	'align',
  	'hspace',
  	'name',
  	'vspace'
  ];
  
  var attr_h1 = [
  	'align'
  ];
  
  var attr_h2 = attr_h1;
  var attr_h3 = attr_h1;
  var attr_h4 = attr_h1;
  var attr_h5 = attr_h1;
  var attr_h6 = attr_h1;
  var attr_p = attr_h1;
  var attr_div = attr_h1;
  
  var attr_head = [
  	'profile'
  ];
  
  var attr_hr = [
  	'align',
  	'color',
  	'noshade',
  	'size',
  	'width'
  ];
  
  var attr_html = [
  	'version'
  ];
  
  var attr_iframe = [
  	'longdesc',
  	'datasrc',
  	'datafld',
  	'align',
  	'allowtransparency',
  	'frameborder',
  	'haspace',
  	'marginheight',
  	'marginwidth',
  	'scrolling',
  	'vspace'
  ];
  
  var attr_img = [
  	'align',
  	'border',
  	'datasrc',
  	'datafld',
  	'hspace',
  	'longdesc',
  	'lowsrc',
  	'name',
  	'vspace'
  ];
  
  var attr_input = [
  	'usemap',
  	'datasrc',
  	'datafield',
  	'dataformatas',
  	'align',
  	'hspace',
  	'vspace'
  ];
  
  var attr_li = [
  	'type'
  ];
  
  var attr_link = [
  	'charset',
  	'methods',
  	'rev',
  	'urn',
  	'target'
  ];
  
  var attr_meta = [
  	'scheme'
  ];
  
  var attr_object = [
  	'archive',
  	'align',
  	'border',
  	'classid',
  	'code',
  	'codebase',
  	'codetype',
  	'datafld',
  	'dataformatas',
  	'datasrc',
  	'declare',
  	'hspace',
  	'standby',
  	'vspace'
  ];
  
  var attr_option = [
  	'name',
  	'datasrc',
  	'dataformatas'
  ];
  
  var attr_param = [
  	'datafld',
  	'type',
  	'valuetype'
  ];
  
  var attr_script = [
  	'event',
  	'for',
  	'language'
  ];
  
  var attr_table = [
    'align',
    'bgcolor',
    'background',
    'cellpadding',
    'cellspacing',
    'datapagesize',
    'frame',
    'rules',
    'summary',
    'width',
  ];
  
  var attr_td = [
  	'abbr',
  	'align',
  	'axis',
  	'bgcolor',
  	'background',
  	'char',
  	'charoff',
  	'height',
  	'nowrap',
  	'valign',
  	'width'
  ];
  
  var attr_th = attr_td;
  var attr_tr = attr_td;
  var attr_tbody = attr_td;
  var attr_tfoot = attr_td;
  var attr_thead = attr_td;

function remove_attr(all, attrAr) {
  gAll = document.getElementsByTagName(all);
  var i = gAll.length;
  var j;

  // Obsolete attribute groups
  
    

  	
  var attr_len = attrAr.length;

  while (i--) {
    j = attr_len;

    while (j--) { 
      gAll[i].removeAttribute(attrAr[j]);
    }

  }
}

remove_attr('a', attr_a);remove_attr('area', attr_area);remove_attr('body', attr_body);remove_attr('col', attr_col);remove_attr('embed', attr_embed);remove_attr('h1', attr_h1);remove_attr('h2', attr_h2);remove_attr('h3', attr_h3);remove_attr('h4', attr_h4);remove_attr('h5', attr_h5);remove_attr('h6', attr_h6);remove_attr('p', attr_p);remove_attr('div', attr_div);remove_attr('head', attr_head);remove_attr('hr', attr_hr);remove_attr('html', attr_html);remove_attr('iframe', attr_iframe);remove_attr('img', attr_img);remove_attr('input', attr_input);remove_attr('li', attr_li);remove_attr('link', attr_link);remove_attr('meta', attr_meta);remove_attr('object', attr_object);remove_attr('option', attr_option);remove_attr('param', attr_param);remove_attr('script', attr_script);remove_attr('table', attr_table);remove_attr('td', attr_td);remove_attr('th', attr_th);remove_attr('tr', attr_tr);remove_attr('tbody', attr_tbody);remove_attr('tfoot', attr_tfoot);remove_attr('thead', attr_thead);