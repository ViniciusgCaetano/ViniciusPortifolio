import axios from "axios";
import  xml2json from "xml-js";

axios.get('https://medium.com/feed/@ViniCaetanoBR')
  .then(res => {
    
    var a = res.data;
    const data = xml2json.xml2js(a, { compact: true, spaces: 2,explicitArray : false})
    const myjs = xml2json.xml2json(a, { compact: true, spaces: 2, explicitArray : false})
    console.log(myjs)
    console.log("Nome: " + data.rss.channel.title._cdata)
    console.log("Link: " + data['rss'].channel.link._text)
    console.log("Título post: " + data['rss']['channel']['item'][0]['title']['_cdata'])
    console.log("Nome: " + data.rss.channel.title._cdata)
    // const obj = JSON.parse(data);
    
  });
