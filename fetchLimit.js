const get = (url, limit = 5) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })    
    .catch((e) => {
      limit--;
      if (limit === 0) {
        throw new Error(e);
      }
      get(url, limit);
    });
};

get("https://swapi.dev/api/people/1/").then((data) => console.log (data));
