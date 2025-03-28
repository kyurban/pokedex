async function fetchData() {

    try {
        var pokemonName = document.querySelector(".pokemon-input").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (pokemonName === "") {
            alert("Please enter a Pokemon name")
        }

        if(!response.ok) {
            throw new Error("Could not fetch data.")
        }

        const data = await response.json();

        //sprite image
        const sprite = data.sprites.front_default;
        var spriteImage = document.querySelector("#pokemon-sprite");
        spriteImage.src = sprite;
        spriteImage.style.display = "block";

        // types
        const pokemonTypes = data.types;
        var array = [];
        for (i = 0; i < data.types.length; i++) {
            array[i] = (pokemonTypes[i].type.name)
        }
        console.log(array)
        var type = document.querySelector('.types');
        type.textContent = "Type(s): " + array.join(", ");

        //height
        const pokemonHeight = data.height;
        var height = document.querySelector('.height');
        height.textContent = "Height: " + pokemonHeight*10 + " cm";

        //weight
        const pokemonWeight = data.weight;
        var weight = document.querySelector('.weight');
        weight.textContent = "Weight: " + pokemonWeight + " lbs";
    }
    catch(error) {
        console.log(error)
    }
}



