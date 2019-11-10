export default {
  search: function(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => data)
      .catch(error => {
        console.error('Error: ', err);
      });
  },
};
