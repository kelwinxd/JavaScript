  fetch('https://api.github.com/users/kelwinxd')
  .then(res => res.json())
 .then(r => {const obj = r.repos_url
   fetch(obj).then(resp => resp.json()).then(e => console.log(e[2]))
    })




    //Simulating a posting with a API
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const options = {
      method: 'POST',//POST, GET, PUT, DELETE, HEAD
      headers: {
        "Content-Type": "application/text; charset=utf-8",
      },
      body: '{"title":"javascript"}',
      
    }
    
    fetch(url, options)
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });

    //CORS

//Cross-Origin Resource Sharing manage how must to be the resource sharing 
//between different origins