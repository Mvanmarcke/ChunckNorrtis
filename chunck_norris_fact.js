function fetchPokemonJSON() {
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(pokemon) {
        console.log('data decoded from JSON:', pokemon);
  
        // Build a block of HTML
        const pokemonHtml = `
          <p><strong>${pokemon}</strong></p>
          <img src="https://image.noelshack.com/fichiers/2017/52/5/1514555202-risichucknorris.png" />
        `;
        document.querySelector('#pokemon').chunck_norris_fact.html = pokemonHtml;
      });
  }
  
  fetchPokemonJSON();