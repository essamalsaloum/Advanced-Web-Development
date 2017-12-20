async function hasMostFollowers (...users) {
      let baseURL = 'https://api.github.com/users/';
      let urls = users.map(user => $.getJSON(baseURL + user));
      var res = await Promise.all(urls);
      return res;
}


hasMostFollowers('elie','tigarcia','colt').then(function(data){
    data.forEach(d=> console.log(d.name + ' ' + d.followers));
});
