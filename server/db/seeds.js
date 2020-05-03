use movies_hub;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Pulp Fiction",
    genre: "Thriller",
    rating: 18,
    releaseDate: "21 October 1994",
    runtime: 154,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    },
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "Reservoir Dogs",
    genre: "Thriller",
    rating: 18,
    releaseDate: "15 January 1993",
    runtime: 99,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    },
    plot: "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant."
  },
  {
    title: "Pulp Fiction",
    genre: "Thriller",
    rating: 18,
    releaseDate: "21 October 1994",
    runtime: 154,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    },
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "Jackie Brown",
    genre: "Thriller",
    rating: 18,
    releaseDate: "10 April 1998",
    runtime: 154,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    },
    plot: "A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life."
  },
  {
    title: "Kill Bill: Vol. 1",
    genre: "Thriller",
    rating: 18,
    releaseDate: "17 October 2003",
    runtime: 111,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    },
  plot: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her."
  },
  {
    title: "Kill Bill: Vol. 2",
    genre: "Thriller",
    rating: 18,
    releaseDate: "23 April 2004",
    runtime: 137,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    },
  plot: "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
  },
  {
    title: "Inglourious Basterds",
    genre: "Thriller",
    rating: 18,
    releaseDate: "19 August 2009",
    runtime: 153,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    },
  plot: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
  },
  {
    title: "Django Unchained",
    genre: "Thriller",
    rating: 18,
    releaseDate: "18 January 2013",
    runtime: 165,
    crew: {
      director: "Quentin Tarantino",
      producer: "Harvey Weinstein"
    },
  plot: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
  },
  {
    title: "The Hateful Eight",
    genre: "Thriller",
    rating: 18,
    releaseDate: "8 January 2016",
    runtime: 168,
    crew: {
      director: "Quentin Tarantino",
      producer: "Harvey Weinstein"
    },
  plot: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters."
  }
]);
