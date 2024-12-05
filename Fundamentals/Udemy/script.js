const directors = [
    {
      id: 1,
      name: "Steven Spielberg",
      birthDate: "1946-12-18",
      genres: ["Aventura", "Drama", "Ficção Científica"],
      films: ["Jurassic Park", "E.T. - O Extraterrestre", "A Lista de Schindler"]
    },
    {
      id: 2,
      name: "Christopher Nolan",
      birthDate: "1970-07-30",
      genres: ["Ficção Científica", "Drama", "Ação"],
      films: ["A Origem", "Interestelar", "O Cavaleiro das Trevas"]
    },
    {
      id: 3,
      name: "Quentin Tarantino",
      birthDate: "1963-03-27",
      genres: ["Crime", "Drama", "Comédia"],
      films: ["Pulp Fiction", "Kill Bill: Volume 1", "Bastardos Inglórios"]
    }
  ];
  
function getMovies(){
    return directors
}

function getMovie(id){
    return directors.find((d) => d.id === id)
}



const movie = getMovie(2)

//desestruturando objetos
const {name,genres} = movie

const [firstGen, secondGen] = genres

//desestruturando arrays
console.log(firstGen,secondGen)


  