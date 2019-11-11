export default {
  search: function(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {
        return response.json();
      })
      .then(data => data)
      .catch(error => {
        console.log('Error: ', error);
      });
  },
};
