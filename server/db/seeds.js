use movies_hub;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Pulp Fiction",
    genre: "thriller",
    rating: 18,
    releaseDate: "21 October 1994",
    runtime: 154,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Reservoir Dogs",
    genre: "thriller",
    rating: 18,
    releaseDate: "15 January 1993",
    runtime: 99,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Pulp Fiction",
    genre: "thriller",
    rating: 18,
    releaseDate: "21 October 1994",
    runtime: 154,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Jackie Brown",
    genre: "thriller",
    rating: 18,
    releaseDate: "10 April 1998",
    runtime: 154,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Kill Bill: Vol. 1",
    genre: "thriller",
    rating: 18,
    releaseDate: "17 October 2003",
    runtime: 111,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Kill Bill: Vol. 2",
    genre: "thriller",
    rating: 18,
    releaseDate: "23 April 2004",
    runtime: 137,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Inglourious Basterds",
    genre: "thriller",
    rating: 18,
    releaseDate: "19 August 2009",
    runtime: 153,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Django Unchained",
    genre: "thriller",
    rating: 18,
    releaseDate: "18 January 2013",
    runtime: 165,
    crew: {
      director: "Quentin Tarantino",
      producer: "Harvey Weinstein"
    }
  },
  {
    title: "The Hateful Eight",
    genre: "thriller",
    rating: 18,
    releaseDate: "8 January 2016",
    runtime: 168,
    crew: {
      director: "Quentin Tarantino",
      producer: "Harvey Weinstein"
    }
  }
])
