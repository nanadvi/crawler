var crawler = require('./rss.js');
var sources = {
  "Argentina" : [
    'http://www.buenosairesherald.com/articles/rss.aspx',
    'http://contenidos.lanacion.com.ar/herramientas/rss-origen=2',
    'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=30',
    'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=272',
    'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=28',
  ],
  "Belize" : [
    'http://amandala.com.bz/news/feed/',
  ],
  "Bolivia" : [
    "http://elmundo.com.bo/elmundo/nacional",
    "http://elmundo.com.bo/elmundo/policial",
    "http://www.la-razon.com/",
    "http://www.prensa.com/rss/section/1000500/",
    "http://www.prensa.com/rss/section/1000300/",
    "http://www.prensa.com/rss/section/561/",
    "http://www.prensa.com/rss/section/562/"
  ],
  "Brazil" : [
    "http://rss.uol.com.br/feed/noticias.xml",
    
  ]

};
