axios.get('https://corsproxy.io/?https%3A%2F%2Fmedium.com%2Ffeed%2F%40ViniCaetanoBR')
  .then(res => {
    
    var a = res.data;
    console.log(a)
    const data = xml2js(a, { compact: true, spaces: 2,explicitArray : false})
    console.log(data)
    
    console.log("Nome: " + data.rss.channel.title._cdata)
    console.log("Link: " + data['rss'].channel.link._text)
    for (let index = 0; index < 5; index++) {
        console.log("Título post: " + data['rss']['channel']['item'][index]['title']['_cdata'])
        var node = document.getElementById('blog-container');

        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'jumbotron jumbotron-fluid')

        var newContainer = document.createElement('div')
        newContainer.setAttribute('class', 'container')
        newDiv.appendChild(newContainer);

        var breakLine = document.createElement('br');
        newDiv.appendChild(breakLine);
        
        var newAnchor = document.createElement('a');
        newAnchor.setAttribute('href',  data['rss']['channel']['item'][index]['link']['_text'])
        newContainer.appendChild(newAnchor)

        var newText = document.createElement('h1');
        newText.setAttribute('class', 'display-4')
        newText.appendChild(document.createTextNode(data['rss']['channel']['item'][index]['title']['_cdata']));
        newAnchor.appendChild(newText)
        node.appendChild(newDiv);

        
        
        

        // newContainer = document.createElement('div');
        // newNode.appendChild(document.createTextNode('Título post: ' + data['rss']['channel']['item'][index]['title']['_cdata']));
        // newNode.setAttribute('class', 'display-4')
        // node.appendChild(newNode);


        // document.write("<h1>Título post: " + data['rss']['channel']['item'][index]['title']['_cdata'] + "</h1>")
        console.log("Link post: " + data['rss']['channel']['item'][index]['link']['_text'])
    }
    
    
    
  });
