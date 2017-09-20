var rss = require('./rss.js');
var crawler = require('./crawler.js')

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

function driver(){
  for(var key in sources){
    if(sources[key]){
      for(var link = 0; link < sources[key].length; link++ ){
        try{
          rss.fetch(sources[key][link], rss.parse)
        }
        catch(FeedParserException){
          console.log(FeedParserException.message);
          console.log("CALLING CRAWLER")
        }
        finally{
          try{
            crawler.start(sources[key][link])
          }
          catch(e){
            console.log(e)
          }
        }
      }
    }
  }
};

if (require.main === module) {
  driver();
};
