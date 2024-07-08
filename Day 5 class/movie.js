class movie{
    constructor(title,studio,rating="PG"){
        this.title= title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(movies){
        function moviefilter(movies){
            return movies.rating === "PG"
        }
        var output = movies.filter(moviefilter);
        return output;

    }
}
const CasinoRoyalee = new movie("CasinoRoyale","Eon production","PG13")
let movies=[
     new movie("Bhagubali", "abc production", "PG"),
     new movie("kutti","xyz","PG"),
     new movie("Leo","sdg","PG"),
     new movie("kushi", "frd","PG4"),
    CasinoRoyalee

]
console.log(movie.getPG(movies))

/**
 * Output:

[
  movie { title: 'Bhagubali', studio: 'abc production', rating: 'PG' },
  movie { title: 'kutti', studio: 'xyz', rating: 'PG' },
  movie { title: 'Leo', studio: 'sdg', rating: 'PG' }
]
 */