// Base de dados do IMDB extraido pelo arquivo py que o gemini fez ~ 1000 filmes
const filmesDropdown = [
    {
        "titulo": "Guardians of the Galaxy",
        "diretor": "James Gunn",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Prometheus",
        "diretor": "Ridley Scott",
        "ano": 2012,
        "genero": "Adventure,Mystery,Sci-Fi"
    },
    {
        "titulo": "Split",
        "diretor": "M. Night Shyamalan",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Sing",
        "diretor": "Christophe Lourdelet",
        "ano": 2016,
        "genero": "Animation,Comedy,Family"
    },
    {
        "titulo": "Suicide Squad",
        "diretor": "David Ayer",
        "ano": 2016,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Great Wall",
        "diretor": "Yimou Zhang",
        "ano": 2016,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "La La Land",
        "diretor": "Damien Chazelle",
        "ano": 2016,
        "genero": "Comedy,Drama,Music"
    },
    {
        "titulo": "Mindhorn",
        "diretor": "Sean Foley",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "The Lost City of Z",
        "diretor": "James Gray",
        "ano": 2016,
        "genero": "Action,Adventure,Biography"
    },
    {
        "titulo": "Passengers",
        "diretor": "Morten Tyldum",
        "ano": 2016,
        "genero": "Adventure,Drama,Romance"
    },
    {
        "titulo": "Fantastic Beasts and Where to Find Them",
        "diretor": "David Yates",
        "ano": 2016,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Hidden Figures",
        "diretor": "Theodore Melfi",
        "ano": 2016,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "Rogue One",
        "diretor": "Gareth Edwards",
        "ano": 2016,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Moana",
        "diretor": "Ron Clements",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Colossal",
        "diretor": "Nacho Vigalondo",
        "ano": 2016,
        "genero": "Action,Comedy,Drama"
    },
    {
        "titulo": "The Secret Life of Pets",
        "diretor": "Chris Renaud",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Hacksaw Ridge",
        "diretor": "Mel Gibson",
        "ano": 2016,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "Jason Bourne",
        "diretor": "Paul Greengrass",
        "ano": 2016,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "Lion",
        "diretor": "Garth Davis",
        "ano": 2016,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Arrival",
        "diretor": "Denis Villeneuve",
        "ano": 2016,
        "genero": "Drama,Mystery,Sci-Fi"
    },
    {
        "titulo": "Gold",
        "diretor": "Stephen Gaghan",
        "ano": 2016,
        "genero": "Adventure,Drama,Thriller"
    },
    {
        "titulo": "Manchester by the Sea",
        "diretor": "Kenneth Lonergan",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Hounds of Love",
        "diretor": "Ben Young",
        "ano": 2016,
        "genero": "Crime,Drama,Horror"
    },
    {
        "titulo": "Trolls",
        "diretor": "Walt Dohrn",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Independence Day: Resurgence",
        "diretor": "Roland Emmerich",
        "ano": 2016,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Paris pieds nus",
        "diretor": "Dominique Abel",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "Bahubali: The Beginning",
        "diretor": "S.S. Rajamouli",
        "ano": 2015,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Dead Awake",
        "diretor": "Phillip Guzman",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Bad Moms",
        "diretor": "Jon Lucas",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "Assassin's Creed",
        "diretor": "Justin Kurzel",
        "ano": 2016,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Why Him?",
        "diretor": "John Hamburg",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "Nocturnal Animals",
        "diretor": "Tom Ford",
        "ano": 2016,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "X-Men: Apocalypse",
        "diretor": "Bryan Singer",
        "ano": 2016,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Deadpool",
        "diretor": "Tim Miller",
        "ano": 2016,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Resident Evil: The Final Chapter",
        "diretor": "Paul W.S. Anderson",
        "ano": 2016,
        "genero": "Action,Horror,Sci-Fi"
    },
    {
        "titulo": "Captain America: Civil War",
        "diretor": "Anthony Russo",
        "ano": 2016,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Interstellar",
        "diretor": "Christopher Nolan",
        "ano": 2014,
        "genero": "Adventure,Drama,Sci-Fi"
    },
    {
        "titulo": "Doctor Strange",
        "diretor": "Scott Derrickson",
        "ano": 2016,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Magnificent Seven",
        "diretor": "Antoine Fuqua",
        "ano": 2016,
        "genero": "Action,Adventure,Western"
    },
    {
        "titulo": "5- 25- 77",
        "diretor": "Patrick Read Johnson",
        "ano": 2007,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Sausage Party",
        "diretor": "Greg Tiernan",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Moonlight",
        "diretor": "Barry Jenkins",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Don't Fuck in the Woods",
        "diretor": "Shawn Burkett",
        "ano": 2016,
        "genero": "Horror"
    },
    {
        "titulo": "The Founder",
        "diretor": "John Lee Hancock",
        "ano": 2016,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "Lowriders",
        "diretor": "Ricardo de Montreuil",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Pirates of the Caribbean: On Stranger Tides",
        "diretor": "Rob Marshall",
        "ano": 2011,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Miss Sloane",
        "diretor": "John Madden",
        "ano": 2016,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Fallen",
        "diretor": "Scott Hicks",
        "ano": 2016,
        "genero": "Adventure,Drama,Fantasy"
    },
    {
        "titulo": "Star Trek Beyond",
        "diretor": "Justin Lin",
        "ano": 2016,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Last Face",
        "diretor": "Sean Penn",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Star Wars: Episode VII - The Force Awakens",
        "diretor": "J.J. Abrams",
        "ano": 2015,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Underworld: Blood Wars",
        "diretor": "Anna Foerster",
        "ano": 2016,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Mother's Day",
        "diretor": "Garry Marshall",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "John Wick",
        "diretor": "Chad Stahelski",
        "ano": 2014,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "The Dark Knight",
        "diretor": "Christopher Nolan",
        "ano": 2008,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Silence",
        "diretor": "Martin Scorsese",
        "ano": 2016,
        "genero": "Adventure,Drama,History"
    },
    {
        "titulo": "Don't Breathe",
        "diretor": "Fede Alvarez",
        "ano": 2016,
        "genero": "Crime,Horror,Thriller"
    },
    {
        "titulo": "Me Before You",
        "diretor": "Thea Sharrock",
        "ano": 2016,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Their Finest",
        "diretor": "Lone Scherfig",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Sully",
        "diretor": "Clint Eastwood",
        "ano": 2016,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Batman v Superman: Dawn of Justice",
        "diretor": "Zack Snyder",
        "ano": 2016,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Autopsy of Jane Doe",
        "diretor": "André Øvredal",
        "ano": 2016,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "The Girl on the Train",
        "diretor": "Tate Taylor",
        "ano": 2016,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Fifty Shades of Grey",
        "diretor": "Sam Taylor-Johnson",
        "ano": 2015,
        "genero": "Drama,Romance,Thriller"
    },
    {
        "titulo": "The Prestige",
        "diretor": "Christopher Nolan",
        "ano": 2006,
        "genero": "Drama,Mystery,Sci-Fi"
    },
    {
        "titulo": "Kingsman: The Secret Service",
        "diretor": "Matthew Vaughn",
        "ano": 2014,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Patriots Day",
        "diretor": "Peter Berg",
        "ano": 2016,
        "genero": "Drama,History,Thriller"
    },
    {
        "titulo": "Mad Max: Fury Road",
        "diretor": "George Miller",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Wakefield",
        "diretor": "Robin Swicord",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Deepwater Horizon",
        "diretor": "Peter Berg",
        "ano": 2016,
        "genero": "Action,Drama,Thriller"
    },
    {
        "titulo": "The Promise",
        "diretor": "Terry George",
        "ano": 2016,
        "genero": "Drama,History"
    },
    {
        "titulo": "Allied",
        "diretor": "Robert Zemeckis",
        "ano": 2016,
        "genero": "Action,Drama,Romance"
    },
    {
        "titulo": "A Monster Calls",
        "diretor": "J.A. Bayona",
        "ano": 2016,
        "genero": "Drama,Fantasy"
    },
    {
        "titulo": "Collateral Beauty",
        "diretor": "David Frankel",
        "ano": 2016,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Zootopia",
        "diretor": "Byron Howard",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Pirates of the Caribbean: At World's End",
        "diretor": "Gore Verbinski",
        "ano": 2007,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Avengers",
        "diretor": "Joss Whedon",
        "ano": 2012,
        "genero": "Action,Sci-Fi"
    },
    {
        "titulo": "Inglourious Basterds",
        "diretor": "Quentin Tarantino",
        "ano": 2009,
        "genero": "Adventure,Drama,War"
    },
    {
        "titulo": "Pirates of the Caribbean: Dead Man's Chest",
        "diretor": "Gore Verbinski",
        "ano": 2006,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Ghostbusters",
        "diretor": "Paul Feig",
        "ano": 2016,
        "genero": "Action,Comedy,Fantasy"
    },
    {
        "titulo": "Inception",
        "diretor": "Christopher Nolan",
        "ano": 2010,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Captain Fantastic",
        "diretor": "Matt Ross",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "The Wolf of Wall Street",
        "diretor": "Martin Scorsese",
        "ano": 2013,
        "genero": "Biography,Comedy,Crime"
    },
    {
        "titulo": "Gone Girl",
        "diretor": "David Fincher",
        "ano": 2014,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Furious Seven",
        "diretor": "James Wan",
        "ano": 2015,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "Jurassic World",
        "diretor": "Colin Trevorrow",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Live by Night",
        "diretor": "Ben Affleck",
        "ano": 2016,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "Avatar",
        "diretor": "James Cameron",
        "ano": 2009,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Hateful Eight",
        "diretor": "Quentin Tarantino",
        "ano": 2015,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "The Accountant",
        "diretor": "Gavin O'Connor",
        "ano": 2016,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Prisoners",
        "diretor": "Denis Villeneuve",
        "ano": 2013,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Warcraft",
        "diretor": "Duncan Jones",
        "ano": 2016,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Help",
        "diretor": "Tate Taylor",
        "ano": 2011,
        "genero": "Drama"
    },
    {
        "titulo": "War Dogs",
        "diretor": "Todd Phillips",
        "ano": 2016,
        "genero": "Comedy,Crime,Drama"
    },
    {
        "titulo": "Avengers: Age of Ultron",
        "diretor": "Joss Whedon",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Nice Guys",
        "diretor": "Shane Black",
        "ano": 2016,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "Kimi no na wa",
        "diretor": "Makoto Shinkai",
        "ano": 2016,
        "genero": "Animation,Drama,Fantasy"
    },
    {
        "titulo": "The Void",
        "diretor": "Jeremy Gillespie",
        "ano": 2016,
        "genero": "Horror,Mystery,Sci-Fi"
    },
    {
        "titulo": "Personal Shopper",
        "diretor": "Olivier Assayas",
        "ano": 2016,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "The Departed",
        "diretor": "Martin Scorsese",
        "ano": 2006,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Legend",
        "diretor": "Brian Helgeland",
        "ano": 2015,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "Thor",
        "diretor": "Kenneth Branagh",
        "ano": 2011,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Martian",
        "diretor": "Ridley Scott",
        "ano": 2015,
        "genero": "Adventure,Drama,Sci-Fi"
    },
    {
        "titulo": "Contratiempo",
        "diretor": "Oriol Paulo",
        "ano": 2016,
        "genero": "Crime,Mystery,Thriller"
    },
    {
        "titulo": "The Man from U.N.C.L.E.",
        "diretor": "Guy Ritchie",
        "ano": 2015,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Hell or High Water",
        "diretor": "David Mackenzie",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "The Comedian",
        "diretor": "Taylor Hackford",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "The Legend of Tarzan",
        "diretor": "David Yates",
        "ano": 2016,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "All We Had",
        "diretor": "Katie Holmes",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Ex Machina",
        "diretor": "Alex Garland",
        "ano": 2014,
        "genero": "Drama,Mystery,Sci-Fi"
    },
    {
        "titulo": "The Belko Experiment",
        "diretor": "Greg McLean",
        "ano": 2016,
        "genero": "Action,Horror,Thriller"
    },
    {
        "titulo": "12 Years a Slave",
        "diretor": "Steve McQueen",
        "ano": 2013,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "The Bad Batch",
        "diretor": "Ana Lily Amirpour",
        "ano": 2016,
        "genero": "Romance,Sci-Fi"
    },
    {
        "titulo": "300",
        "diretor": "Zack Snyder",
        "ano": 2006,
        "genero": "Action,Fantasy,War"
    },
    {
        "titulo": "Harry Potter and the Deathly Hallows: Part 2",
        "diretor": "David Yates",
        "ano": 2011,
        "genero": "Adventure,Drama,Fantasy"
    },
    {
        "titulo": "Office Christmas Party",
        "diretor": "Josh Gordon",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "The Neon Demon",
        "diretor": "Nicolas Winding Refn",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Dangal",
        "diretor": "Nitesh Tiwari",
        "ano": 2016,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "10 Cloverfield Lane",
        "diretor": "Dan Trachtenberg",
        "ano": 2016,
        "genero": "Drama,Horror,Mystery"
    },
    {
        "titulo": "Finding Dory",
        "diretor": "Andrew Stanton",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Miss Peregrine's Home for Peculiar Children",
        "diretor": "Tim Burton",
        "ano": 2016,
        "genero": "Adventure,Drama,Family"
    },
    {
        "titulo": "Divergent",
        "diretor": "Neil Burger",
        "ano": 2014,
        "genero": "Adventure,Mystery,Sci-Fi"
    },
    {
        "titulo": "Mike and Dave Need Wedding Dates",
        "diretor": "Jake Szymanski",
        "ano": 2016,
        "genero": "Adventure,Comedy,Romance"
    },
    {
        "titulo": "Boyka: Undisputed IV",
        "diretor": "Todor Chapkanov",
        "ano": 2016,
        "genero": "Action"
    },
    {
        "titulo": "The Dark Knight Rises",
        "diretor": "Christopher Nolan",
        "ano": 2012,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "The Jungle Book",
        "diretor": "Jon Favreau",
        "ano": 2016,
        "genero": "Adventure,Drama,Family"
    },
    {
        "titulo": "Transformers: Age of Extinction",
        "diretor": "Michael Bay",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Nerve",
        "diretor": "Henry Joost",
        "ano": 2016,
        "genero": "Adventure,Crime,Mystery"
    },
    {
        "titulo": "Mamma Mia!",
        "diretor": "Phyllida Lloyd",
        "ano": 2008,
        "genero": "Comedy,Family,Musical"
    },
    {
        "titulo": "The Revenant",
        "diretor": "Alejandro González Iñárritu",
        "ano": 2015,
        "genero": "Adventure,Drama,Thriller"
    },
    {
        "titulo": "Fences",
        "diretor": "Denzel Washington",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Into the Woods",
        "diretor": "Rob Marshall",
        "ano": 2014,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "The Shallows",
        "diretor": "Jaume Collet-Serra",
        "ano": 2016,
        "genero": "Drama,Horror,Thriller"
    },
    {
        "titulo": "Whiplash",
        "diretor": "Damien Chazelle",
        "ano": 2014,
        "genero": "Drama,Music"
    },
    {
        "titulo": "Furious 6",
        "diretor": "Justin Lin",
        "ano": 2013,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "The Place Beyond the Pines",
        "diretor": "Derek Cianfrance",
        "ano": 2012,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "No Country for Old Men",
        "diretor": "Ethan Coen",
        "ano": 2007,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "The Great Gatsby",
        "diretor": "Baz Luhrmann",
        "ano": 2013,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Shutter Island",
        "diretor": "Martin Scorsese",
        "ano": 2010,
        "genero": "Mystery,Thriller"
    },
    {
        "titulo": "Brimstone",
        "diretor": "Martin Koolhoven",
        "ano": 2016,
        "genero": "Mystery,Thriller,Western"
    },
    {
        "titulo": "Star Trek",
        "diretor": "J.J. Abrams",
        "ano": 2009,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Diary of a Wimpy Kid",
        "diretor": "Thor Freudenthal",
        "ano": 2010,
        "genero": "Comedy,Family"
    },
    {
        "titulo": "The Big Short",
        "diretor": "Adam McKay",
        "ano": 2015,
        "genero": "Biography,Comedy,Drama"
    },
    {
        "titulo": "Room",
        "diretor": "Lenny Abrahamson",
        "ano": 2015,
        "genero": "Drama"
    },
    {
        "titulo": "Django Unchained",
        "diretor": "Quentin Tarantino",
        "ano": 2012,
        "genero": "Drama,Western"
    },
    {
        "titulo": "Ah-ga-ssi",
        "diretor": "Chan-wook Park",
        "ano": 2016,
        "genero": "Drama,Mystery,Romance"
    },
    {
        "titulo": "The Edge of Seventeen",
        "diretor": "Kelly Fremon Craig",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Watchmen",
        "diretor": "Zack Snyder",
        "ano": 2009,
        "genero": "Action,Drama,Mystery"
    },
    {
        "titulo": "Superbad",
        "diretor": "Greg Mottola",
        "ano": 2007,
        "genero": "Comedy"
    },
    {
        "titulo": "Inferno",
        "diretor": "Ron Howard",
        "ano": 2016,
        "genero": "Action,Adventure,Crime"
    },
    {
        "titulo": "The BFG",
        "diretor": "Steven Spielberg",
        "ano": 2016,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "The Hunger Games",
        "diretor": "Gary Ross",
        "ano": 2012,
        "genero": "Adventure,Sci-Fi,Thriller"
    },
    {
        "titulo": "White Girl",
        "diretor": "Elizabeth Wood",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Sicario",
        "diretor": "Denis Villeneuve",
        "ano": 2015,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Twin Peaks: The Missing Pieces",
        "diretor": "David Lynch",
        "ano": 2014,
        "genero": "Drama,Horror,Mystery"
    },
    {
        "titulo": "Aliens vs Predator - Requiem",
        "diretor": "Colin Strause",
        "ano": 2007,
        "genero": "Action,Horror,Sci-Fi"
    },
    {
        "titulo": "Pacific Rim",
        "diretor": "Guillermo del Toro",
        "ano": 2013,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Crazy, Stupid, Love.",
        "diretor": "Glenn Ficarra",
        "ano": 2011,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Scott Pilgrim vs. the World",
        "diretor": "Edgar Wright",
        "ano": 2010,
        "genero": "Action,Comedy,Fantasy"
    },
    {
        "titulo": "Hot Fuzz",
        "diretor": "Edgar Wright",
        "ano": 2007,
        "genero": "Action,Comedy,Mystery"
    },
    {
        "titulo": "Mine",
        "diretor": "Fabio Guaglione",
        "ano": 2016,
        "genero": "Thriller,War"
    },
    {
        "titulo": "Free Fire",
        "diretor": "Ben Wheatley",
        "ano": 2016,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "X-Men: Days of Future Past",
        "diretor": "Bryan Singer",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Jack Reacher: Never Go Back",
        "diretor": "Edward Zwick",
        "ano": 2016,
        "genero": "Action,Adventure,Crime"
    },
    {
        "titulo": "Casino Royale",
        "diretor": "Martin Campbell",
        "ano": 2006,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "Twilight",
        "diretor": "Catherine Hardwicke",
        "ano": 2008,
        "genero": "Drama,Fantasy,Romance"
    },
    {
        "titulo": "Now You See Me 2",
        "diretor": "Jon M. Chu",
        "ano": 2016,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Woman in Gold",
        "diretor": "Simon Curtis",
        "ano": 2015,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "13 Hours",
        "diretor": "Michael Bay",
        "ano": 2016,
        "genero": "Action,Drama,History"
    },
    {
        "titulo": "Spectre",
        "diretor": "Sam Mendes",
        "ano": 2015,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "Nightcrawler",
        "diretor": "Dan Gilroy",
        "ano": 2014,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Kubo and the Two Strings",
        "diretor": "Travis Knight",
        "ano": 2016,
        "genero": "Animation,Adventure,Family"
    },
    {
        "titulo": "Beyond the Gates",
        "diretor": "Jackson Stewart",
        "ano": 2016,
        "genero": "Adventure,Horror"
    },
    {
        "titulo": "Her",
        "diretor": "Spike Jonze",
        "ano": 2013,
        "genero": "Drama,Romance,Sci-Fi"
    },
    {
        "titulo": "Frozen",
        "diretor": "Chris Buck",
        "ano": 2013,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Tomorrowland",
        "diretor": "Brad Bird",
        "ano": 2015,
        "genero": "Action,Adventure,Family"
    },
    {
        "titulo": "Dawn of the Planet of the Apes",
        "diretor": "Matt Reeves",
        "ano": 2014,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Tropic Thunder",
        "diretor": "Ben Stiller",
        "ano": 2008,
        "genero": "Action,Comedy"
    },
    {
        "titulo": "The Conjuring 2",
        "diretor": "James Wan",
        "ano": 2016,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "Ant-Man",
        "diretor": "Peyton Reed",
        "ano": 2015,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Bridget Jones's Baby",
        "diretor": "Sharon Maguire",
        "ano": 2016,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "The VVitch: A New-England Folktale",
        "diretor": "Robert Eggers",
        "ano": 2015,
        "genero": "Horror,Mystery"
    },
    {
        "titulo": "Cinderella",
        "diretor": "Kenneth Branagh",
        "ano": 2015,
        "genero": "Drama,Family,Fantasy"
    },
    {
        "titulo": "Realive",
        "diretor": "Mateo Gil",
        "ano": 2016,
        "genero": "Sci-Fi"
    },
    {
        "titulo": "Forushande",
        "diretor": "Asghar Farhadi",
        "ano": 2016,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Love",
        "diretor": "Gaspar Noé",
        "ano": 2015,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Billy Lynn's Long Halftime Walk",
        "diretor": "Ang Lee",
        "ano": 2016,
        "genero": "Drama,War"
    },
    {
        "titulo": "Crimson Peak",
        "diretor": "Guillermo del Toro",
        "ano": 2015,
        "genero": "Drama,Fantasy,Horror"
    },
    {
        "titulo": "Drive",
        "diretor": "Nicolas Winding Refn",
        "ano": 2011,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "Trainwreck",
        "diretor": "Judd Apatow",
        "ano": 2015,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Light Between Oceans",
        "diretor": "Derek Cianfrance",
        "ano": 2016,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Below Her Mouth",
        "diretor": "April Mullen",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Spotlight",
        "diretor": "Tom McCarthy",
        "ano": 2015,
        "genero": "Crime,Drama,History"
    },
    {
        "titulo": "Morgan",
        "diretor": "Luke Scott",
        "ano": 2016,
        "genero": "Horror,Sci-Fi,Thriller"
    },
    {
        "titulo": "Warrior",
        "diretor": "Gavin O'Connor",
        "ano": 2011,
        "genero": "Action,Drama,Sport"
    },
    {
        "titulo": "Captain America: The First Avenger",
        "diretor": "Joe Johnston",
        "ano": 2011,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Hacker",
        "diretor": "Akan Satayev",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Into the Wild",
        "diretor": "Sean Penn",
        "ano": 2007,
        "genero": "Adventure,Biography,Drama"
    },
    {
        "titulo": "The Imitation Game",
        "diretor": "Morten Tyldum",
        "ano": 2014,
        "genero": "Biography,Drama,Thriller"
    },
    {
        "titulo": "Central Intelligence",
        "diretor": "Rawson Marshall Thurber",
        "ano": 2016,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "Edge of Tomorrow",
        "diretor": "Doug Liman",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "A Cure for Wellness",
        "diretor": "Gore Verbinski",
        "ano": 2016,
        "genero": "Drama,Fantasy,Horror"
    },
    {
        "titulo": "Snowden",
        "diretor": "Oliver Stone",
        "ano": 2016,
        "genero": "Biography,Drama,Thriller"
    },
    {
        "titulo": "Iron Man",
        "diretor": "Jon Favreau",
        "ano": 2008,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Allegiant",
        "diretor": "Robert Schwentke",
        "ano": 2016,
        "genero": "Action,Adventure,Mystery"
    },
    {
        "titulo": "X: First Class",
        "diretor": "Matthew Vaughn",
        "ano": 2011,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Raw (II)",
        "diretor": "Julia Ducournau",
        "ano": 2016,
        "genero": "Drama,Horror"
    },
    {
        "titulo": "Paterson",
        "diretor": "Jim Jarmusch",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Bridesmaids",
        "diretor": "Paul Feig",
        "ano": 2011,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "The Girl with All the Gifts",
        "diretor": "Colm McCarthy",
        "ano": 2016,
        "genero": "Drama,Horror,Thriller"
    },
    {
        "titulo": "San Andreas",
        "diretor": "Brad Peyton",
        "ano": 2015,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Spring Breakers",
        "diretor": "Harmony Korine",
        "ano": 2012,
        "genero": "Drama"
    },
    {
        "titulo": "Transformers",
        "diretor": "Michael Bay",
        "ano": 2007,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Old Boy",
        "diretor": "Spike Lee",
        "ano": 2013,
        "genero": "Action,Drama,Mystery"
    },
    {
        "titulo": "Thor: The Dark World",
        "diretor": "Alan Taylor",
        "ano": 2013,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Gods of Egypt",
        "diretor": "Alex Proyas",
        "ano": 2016,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Captain America: The Winter Soldier",
        "diretor": "Anthony Russo",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Monster Trucks",
        "diretor": "Chris Wedge",
        "ano": 2016,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "A Dark Song",
        "diretor": "Liam Gavin",
        "ano": 2016,
        "genero": "Drama,Horror"
    },
    {
        "titulo": "Kick-Ass",
        "diretor": "Matthew Vaughn",
        "ano": 2010,
        "genero": "Action,Comedy"
    },
    {
        "titulo": "Hardcore Henry",
        "diretor": "Ilya Naishuller",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Cars",
        "diretor": "John Lasseter",
        "ano": 2006,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "It Follows",
        "diretor": "David Robert Mitchell",
        "ano": 2014,
        "genero": "Horror,Mystery"
    },
    {
        "titulo": "The Girl with the Dragon Tattoo",
        "diretor": "David Fincher",
        "ano": 2011,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "We're the Millers",
        "diretor": "Rawson Marshall Thurber",
        "ano": 2013,
        "genero": "Comedy,Crime"
    },
    {
        "titulo": "American Honey",
        "diretor": "Andrea Arnold",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "The Lobster",
        "diretor": "Yorgos Lanthimos",
        "ano": 2015,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Predators",
        "diretor": "Nimród Antal",
        "ano": 2010,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Maleficent",
        "diretor": "Robert Stromberg",
        "ano": 2014,
        "genero": "Action,Adventure,Family"
    },
    {
        "titulo": "Rupture",
        "diretor": "Steven Shainberg",
        "ano": 2016,
        "genero": "Horror,Sci-Fi,Thriller"
    },
    {
        "titulo": "Pan's Labyrinth",
        "diretor": "Guillermo del Toro",
        "ano": 2006,
        "genero": "Drama,Fantasy,War"
    },
    {
        "titulo": "A Kind of Murder",
        "diretor": "Andy Goddard",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Apocalypto",
        "diretor": "Mel Gibson",
        "ano": 2006,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Mission: Impossible - Rogue Nation",
        "diretor": "Christopher McQuarrie",
        "ano": 2015,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "The Huntsman: Winter's War",
        "diretor": "Cedric Nicolas-Troyan",
        "ano": 2016,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "The Perks of Being a Wallflower",
        "diretor": "Stephen Chbosky",
        "ano": 2012,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Jackie",
        "diretor": "Pablo Larraín",
        "ano": 2016,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "The Disappointments Room",
        "diretor": "D.J. Caruso",
        "ano": 2016,
        "genero": "Drama,Horror,Thriller"
    },
    {
        "titulo": "The Grand Budapest Hotel",
        "diretor": "Wes Anderson",
        "ano": 2014,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "The Host",
        "diretor": "Andrew Niccol",
        "ano": 2013,
        "genero": "Action,Adventure,Romance"
    },
    {
        "titulo": "Fury",
        "diretor": "David Ayer",
        "ano": 2014,
        "genero": "Action,Drama,War"
    },
    {
        "titulo": "Inside Out",
        "diretor": "Pete Docter",
        "ano": 2015,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Rock Dog",
        "diretor": "Ash Brannon",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Terminator Genisys",
        "diretor": "Alan Taylor",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Percy Jackson & the Olympians: The Lightning Thief",
        "diretor": "Chris Columbus",
        "ano": 2010,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Les Misérables",
        "diretor": "Tom Hooper",
        "ano": 2012,
        "genero": "Drama,Musical,Romance"
    },
    {
        "titulo": "Children of Men",
        "diretor": "Alfonso Cuarón",
        "ano": 2006,
        "genero": "Drama,Sci-Fi,Thriller"
    },
    {
        "titulo": "20th Century Women",
        "diretor": "Mike Mills",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Spy",
        "diretor": "Paul Feig",
        "ano": 2015,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "The Intouchables",
        "diretor": "Olivier Nakache",
        "ano": 2011,
        "genero": "Biography,Comedy,Drama"
    },
    {
        "titulo": "Bonjour Anne",
        "diretor": "Eleanor Coppola",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Kynodontas",
        "diretor": "Yorgos Lanthimos",
        "ano": 2009,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Straight Outta Compton",
        "diretor": "F. Gary Gray",
        "ano": 2015,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "The Amazing Spider-Man 2",
        "diretor": "Marc Webb",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Conjuring",
        "diretor": "James Wan",
        "ano": 2013,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "The Hangover",
        "diretor": "Todd Phillips",
        "ano": 2009,
        "genero": "Comedy"
    },
    {
        "titulo": "Battleship",
        "diretor": "Peter Berg",
        "ano": 2012,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Rise of the Planet of the Apes",
        "diretor": "Rupert Wyatt",
        "ano": 2011,
        "genero": "Action,Drama,Sci-Fi"
    },
    {
        "titulo": "Lights Out",
        "diretor": "David F. Sandberg",
        "ano": 2016,
        "genero": "Horror"
    },
    {
        "titulo": "Norman: The Moderate Rise and Tragic Fall of a New York Fixer",
        "diretor": "Joseph Cedar",
        "ano": 2016,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Birdman or (The Unexpected Virtue of Ignorance)",
        "diretor": "Alejandro González Iñárritu",
        "ano": 2014,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Black Swan",
        "diretor": "Darren Aronofsky",
        "ano": 2010,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Dear White People",
        "diretor": "Justin Simien",
        "ano": 2014,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Nymphomaniac: Vol. I",
        "diretor": "Lars von Trier",
        "ano": 2013,
        "genero": "Drama"
    },
    {
        "titulo": "Teenage Mutant Ninja Turtles: Out of the Shadows",
        "diretor": "Dave Green",
        "ano": 2016,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Knock Knock",
        "diretor": "Eli Roth",
        "ano": 2015,
        "genero": "Drama,Horror,Thriller"
    },
    {
        "titulo": "Dirty Grandpa",
        "diretor": "Dan Mazer",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "Cloud Atlas",
        "diretor": "Tom Tykwer",
        "ano": 2012,
        "genero": "Drama,Sci-Fi"
    },
    {
        "titulo": "X-Men Origins: Wolverine",
        "diretor": "Gavin Hood",
        "ano": 2009,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Satanic",
        "diretor": "Jeffrey G. Hunt",
        "ano": 2016,
        "genero": "Horror"
    },
    {
        "titulo": "Skyfall",
        "diretor": "Sam Mendes",
        "ano": 2012,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "The Hobbit: An Unexpected Journey",
        "diretor": "Peter Jackson",
        "ano": 2012,
        "genero": "Adventure,Fantasy"
    },
    {
        "titulo": "21 Jump Street",
        "diretor": "Phil Lord",
        "ano": 2012,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "Sing Street",
        "diretor": "John Carney",
        "ano": 2016,
        "genero": "Comedy,Drama,Music"
    },
    {
        "titulo": "Ballerina",
        "diretor": "Eric Summer",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Oblivion",
        "diretor": "Joseph Kosinski",
        "ano": 2013,
        "genero": "Action,Adventure,Mystery"
    },
    {
        "titulo": "22 Jump Street",
        "diretor": "Phil Lord",
        "ano": 2014,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "Zodiac",
        "diretor": "David Fincher",
        "ano": 2007,
        "genero": "Crime,Drama,History"
    },
    {
        "titulo": "Everybody Wants Some!!",
        "diretor": "Richard Linklater",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "Iron Man Three",
        "diretor": "Shane Black",
        "ano": 2013,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Now You See Me",
        "diretor": "Louis Leterrier",
        "ano": 2013,
        "genero": "Crime,Mystery,Thriller"
    },
    {
        "titulo": "Sherlock Holmes",
        "diretor": "Guy Ritchie",
        "ano": 2009,
        "genero": "Action,Adventure,Crime"
    },
    {
        "titulo": "Death Proof",
        "diretor": "Quentin Tarantino",
        "ano": 2007,
        "genero": "Thriller"
    },
    {
        "titulo": "The Danish Girl",
        "diretor": "Tom Hooper",
        "ano": 2015,
        "genero": "Biography,Drama,Romance"
    },
    {
        "titulo": "Hercules",
        "diretor": "Brett Ratner",
        "ano": 2014,
        "genero": "Action,Adventure"
    },
    {
        "titulo": "Sucker Punch",
        "diretor": "Zack Snyder",
        "ano": 2011,
        "genero": "Action,Fantasy"
    },
    {
        "titulo": "Keeping Up with the Joneses",
        "diretor": "Greg Mottola",
        "ano": 2016,
        "genero": "Action,Comedy"
    },
    {
        "titulo": "Jupiter Ascending",
        "diretor": "Lana Wachowski",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Masterminds",
        "diretor": "Jared Hess",
        "ano": 2016,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "Iris",
        "diretor": "Jalil Lespert",
        "ano": 2016,
        "genero": "Thriller"
    },
    {
        "titulo": "Busanhaeng",
        "diretor": "Sang-ho Yeon",
        "ano": 2016,
        "genero": "Action,Drama,Horror"
    },
    {
        "titulo": "Pitch Perfect",
        "diretor": "Jason Moore",
        "ano": 2012,
        "genero": "Comedy,Music,Romance"
    },
    {
        "titulo": "Neighbors 2: Sorority Rising",
        "diretor": "Nicholas Stoller",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "The Exception",
        "diretor": "David Leveaux",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Man of Steel",
        "diretor": "Zack Snyder",
        "ano": 2013,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Choice",
        "diretor": "Ross Katz",
        "ano": 2016,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Ice Age: Collision Course",
        "diretor": "Mike Thurmeier",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "The Devil Wears Prada",
        "diretor": "David Frankel",
        "ano": 2006,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "The Infiltrator",
        "diretor": "Brad Furman",
        "ano": 2016,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "There Will Be Blood",
        "diretor": "Paul Thomas Anderson",
        "ano": 2007,
        "genero": "Drama,History"
    },
    {
        "titulo": "The Equalizer",
        "diretor": "Antoine Fuqua",
        "ano": 2014,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "Lone Survivor",
        "diretor": "Peter Berg",
        "ano": 2013,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "The Cabin in the Woods",
        "diretor": "Drew Goddard",
        "ano": 2012,
        "genero": "Horror"
    },
    {
        "titulo": "The House Bunny",
        "diretor": "Fred Wolf",
        "ano": 2008,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "She's Out of My League",
        "diretor": "Jim Field Smith",
        "ano": 2010,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Inherent Vice",
        "diretor": "Paul Thomas Anderson",
        "ano": 2014,
        "genero": "Comedy,Crime,Drama"
    },
    {
        "titulo": "Alice Through the Looking Glass",
        "diretor": "James Bobin",
        "ano": 2016,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Vincent N Roxxy",
        "diretor": "Gary Michael Schultz",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "The Fast and the Furious: Tokyo Drift",
        "diretor": "Justin Lin",
        "ano": 2006,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "How to Be Single",
        "diretor": "Christian Ditter",
        "ano": 2016,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "The Blind Side",
        "diretor": "John Lee Hancock",
        "ano": 2009,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "La vie d'Adèle",
        "diretor": "Abdellatif Kechiche",
        "ano": 2013,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Babadook",
        "diretor": "Jennifer Kent",
        "ano": 2014,
        "genero": "Drama,Horror"
    },
    {
        "titulo": "The Hobbit: The Battle of the Five Armies",
        "diretor": "Peter Jackson",
        "ano": 2014,
        "genero": "Adventure,Fantasy"
    },
    {
        "titulo": "Harry Potter and the Order of the Phoenix",
        "diretor": "David Yates",
        "ano": 2007,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Snowpiercer",
        "diretor": "Bong Joon Ho",
        "ano": 2013,
        "genero": "Action,Drama,Sci-Fi"
    },
    {
        "titulo": "The 5th Wave",
        "diretor": "J Blakeson",
        "ano": 2016,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Stakelander",
        "diretor": "Dan Berk",
        "ano": 2016,
        "genero": "Action,Horror"
    },
    {
        "titulo": "The Visit",
        "diretor": "M. Night Shyamalan",
        "ano": 2015,
        "genero": "Comedy,Horror,Thriller"
    },
    {
        "titulo": "Fast Five",
        "diretor": "Justin Lin",
        "ano": 2011,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "Step Up",
        "diretor": "Anne Fletcher",
        "ano": 2006,
        "genero": "Crime,Drama,Music"
    },
    {
        "titulo": "Lovesong",
        "diretor": "So Yong Kim",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "RocknRolla",
        "diretor": "Guy Ritchie",
        "ano": 2008,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "In Time",
        "diretor": "Andrew Niccol",
        "ano": 2011,
        "genero": "Action,Sci-Fi,Thriller"
    },
    {
        "titulo": "The Social Network",
        "diretor": "David Fincher",
        "ano": 2010,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "The Last Witch Hunter",
        "diretor": "Breck Eisner",
        "ano": 2015,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Victor Frankenstein",
        "diretor": "Paul McGuigan",
        "ano": 2015,
        "genero": "Drama,Horror,Sci-Fi"
    },
    {
        "titulo": "A Street Cat Named Bob",
        "diretor": "Roger Spottiswoode",
        "ano": 2016,
        "genero": "Biography,Comedy,Drama"
    },
    {
        "titulo": "Green Room",
        "diretor": "Jeremy Saulnier",
        "ano": 2015,
        "genero": "Crime,Horror,Thriller"
    },
    {
        "titulo": "Blackhat",
        "diretor": "Michael Mann",
        "ano": 2015,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Storks",
        "diretor": "Nicholas Stoller",
        "ano": 2016,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "American Sniper",
        "diretor": "Clint Eastwood",
        "ano": 2014,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "Dallas Buyers Club",
        "diretor": "Jean-Marc Vallée",
        "ano": 2013,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Lincoln",
        "diretor": "Steven Spielberg",
        "ano": 2012,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "Rush",
        "diretor": "Ron Howard",
        "ano": 2013,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "Before I Wake",
        "diretor": "Mike Flanagan",
        "ano": 2016,
        "genero": "Drama,Fantasy,Horror"
    },
    {
        "titulo": "Silver Linings Playbook",
        "diretor": "David O. Russell",
        "ano": 2012,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Tracktown",
        "diretor": "Alexi Pappas",
        "ano": 2016,
        "genero": "Drama,Sport"
    },
    {
        "titulo": "The Fault in Our Stars",
        "diretor": "Josh Boone",
        "ano": 2014,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Blended",
        "diretor": "Frank Coraci",
        "ano": 2014,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Fast & Furious",
        "diretor": "Justin Lin",
        "ano": 2009,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "Looper",
        "diretor": "Rian Johnson",
        "ano": 2012,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "White House Down",
        "diretor": "Roland Emmerich",
        "ano": 2013,
        "genero": "Action,Drama,Thriller"
    },
    {
        "titulo": "Pete's Dragon",
        "diretor": "David Lowery",
        "ano": 2016,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Spider-Man 3",
        "diretor": "Sam Raimi",
        "ano": 2007,
        "genero": "Action,Adventure"
    },
    {
        "titulo": "The Three Musketeers",
        "diretor": "Paul W.S. Anderson",
        "ano": 2011,
        "genero": "Action,Adventure,Romance"
    },
    {
        "titulo": "Stardust",
        "diretor": "Matthew Vaughn",
        "ano": 2007,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "American Hustle",
        "diretor": "David O. Russell",
        "ano": 2013,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "Jennifer's Body",
        "diretor": "Karyn Kusama",
        "ano": 2009,
        "genero": "Comedy,Horror"
    },
    {
        "titulo": "Midnight in Paris",
        "diretor": "Woody Allen",
        "ano": 2011,
        "genero": "Comedy,Fantasy,Romance"
    },
    {
        "titulo": "Lady Macbeth",
        "diretor": "William Oldroyd",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Joy",
        "diretor": "David O. Russell",
        "ano": 2015,
        "genero": "Drama"
    },
    {
        "titulo": "The Dressmaker",
        "diretor": "Jocelyn Moorhouse",
        "ano": 2015,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Café Society",
        "diretor": "Woody Allen",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Insurgent",
        "diretor": "Robert Schwentke",
        "ano": 2015,
        "genero": "Adventure,Sci-Fi,Thriller"
    },
    {
        "titulo": "Seventh Son",
        "diretor": "Sergei Bodrov",
        "ano": 2014,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Demain tout commence",
        "diretor": "Hugo Gélin",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "The Theory of Everything",
        "diretor": "James Marsh",
        "ano": 2014,
        "genero": "Biography,Drama,Romance"
    },
    {
        "titulo": "This Is the End",
        "diretor": "Evan Goldberg",
        "ano": 2013,
        "genero": "Comedy,Fantasy"
    },
    {
        "titulo": "About Time",
        "diretor": "Richard Curtis",
        "ano": 2013,
        "genero": "Comedy,Drama,Fantasy"
    },
    {
        "titulo": "Step Brothers",
        "diretor": "Adam McKay",
        "ano": 2008,
        "genero": "Comedy"
    },
    {
        "titulo": "Clown",
        "diretor": "Jon Watts",
        "ano": 2014,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Star Trek Into Darkness",
        "diretor": "J.J. Abrams",
        "ano": 2013,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Zombieland",
        "diretor": "Ruben Fleischer",
        "ano": 2009,
        "genero": "Adventure,Comedy,Horror"
    },
    {
        "titulo": "Hail, Caesar!",
        "diretor": "Ethan Coen",
        "ano": 2016,
        "genero": "Comedy,Mystery"
    },
    {
        "titulo": "Slumdog Millionaire",
        "diretor": "Danny Boyle",
        "ano": 2008,
        "genero": "Drama"
    },
    {
        "titulo": "The Twilight Saga: Breaking Dawn - Part 2",
        "diretor": "Bill Condon",
        "ano": 2012,
        "genero": "Adventure,Drama,Fantasy"
    },
    {
        "titulo": "American Wrestler: The Wizard",
        "diretor": "Alex Ranarivelo",
        "ano": 2016,
        "genero": "Drama,Sport"
    },
    {
        "titulo": "The Amazing Spider-Man",
        "diretor": "Marc Webb",
        "ano": 2012,
        "genero": "Action,Adventure"
    },
    {
        "titulo": "Ben-Hur",
        "diretor": "Timur Bekmambetov",
        "ano": 2016,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Sleight",
        "diretor": "J.D. Dillard",
        "ano": 2016,
        "genero": "Action,Drama,Sci-Fi"
    },
    {
        "titulo": "The Maze Runner",
        "diretor": "Wes Ball",
        "ano": 2014,
        "genero": "Action,Mystery,Sci-Fi"
    },
    {
        "titulo": "Criminal",
        "diretor": "Ariel Vromen",
        "ano": 2016,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Wanted",
        "diretor": "Timur Bekmambetov",
        "ano": 2008,
        "genero": "Action,Crime,Fantasy"
    },
    {
        "titulo": "Florence Foster Jenkins",
        "diretor": "Stephen Frears",
        "ano": 2016,
        "genero": "Biography,Comedy,Drama"
    },
    {
        "titulo": "Collide",
        "diretor": "Eran Creevy",
        "ano": 2016,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "Black Mass",
        "diretor": "Scott Cooper",
        "ano": 2015,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "Creed",
        "diretor": "Ryan Coogler",
        "ano": 2015,
        "genero": "Drama,Sport"
    },
    {
        "titulo": "Swiss Army Man",
        "diretor": "Dan Kwan",
        "ano": 2016,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "The Expendables 3",
        "diretor": "Patrick Hughes",
        "ano": 2014,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "What We Do in the Shadows",
        "diretor": "Jemaine Clement",
        "ano": 2014,
        "genero": "Comedy,Fantasy,Horror"
    },
    {
        "titulo": "Southpaw",
        "diretor": "Antoine Fuqua",
        "ano": 2015,
        "genero": "Drama,Sport"
    },
    {
        "titulo": "Hush",
        "diretor": "Mike Flanagan",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Bridge of Spies",
        "diretor": "Steven Spielberg",
        "ano": 2015,
        "genero": "Drama,History,Thriller"
    },
    {
        "titulo": "The Lego Movie",
        "diretor": "Phil Lord",
        "ano": 2014,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "Everest",
        "diretor": "Baltasar Kormákur",
        "ano": 2015,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Pixels",
        "diretor": "Chris Columbus",
        "ano": 2015,
        "genero": "Action,Comedy,Family"
    },
    {
        "titulo": "Robin Hood",
        "diretor": "Ridley Scott",
        "ano": 2010,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "The Wolverine",
        "diretor": "James Mangold",
        "ano": 2013,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "John Carter",
        "diretor": "Andrew Stanton",
        "ano": 2012,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Keanu",
        "diretor": "Peter Atencio",
        "ano": 2016,
        "genero": "Action,Comedy"
    },
    {
        "titulo": "The Gunman",
        "diretor": "Pierre Morel",
        "ano": 2015,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Steve Jobs",
        "diretor": "Danny Boyle",
        "ano": 2015,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Whisky Galore",
        "diretor": "Gillies MacKinnon",
        "ano": 2016,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Grown Ups 2",
        "diretor": "Dennis Dugan",
        "ano": 2013,
        "genero": "Comedy"
    },
    {
        "titulo": "The Age of Adaline",
        "diretor": "Lee Toland Krieger",
        "ano": 2015,
        "genero": "Drama,Fantasy,Romance"
    },
    {
        "titulo": "The Incredible Hulk",
        "diretor": "Louis Leterrier",
        "ano": 2008,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Couples Retreat",
        "diretor": "Peter Billingsley",
        "ano": 2009,
        "genero": "Comedy"
    },
    {
        "titulo": "Absolutely Anything",
        "diretor": "Terry Jones",
        "ano": 2015,
        "genero": "Comedy,Sci-Fi"
    },
    {
        "titulo": "Magic Mike",
        "diretor": "Steven Soderbergh",
        "ano": 2012,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Minions",
        "diretor": "Kyle Balda",
        "ano": 2015,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "The Black Room",
        "diretor": "Rolfe Kanefsky",
        "ano": 2016,
        "genero": "Horror"
    },
    {
        "titulo": "Bronson",
        "diretor": "Nicolas Winding Refn",
        "ano": 2008,
        "genero": "Action,Biography,Crime"
    },
    {
        "titulo": "Despicable Me",
        "diretor": "Pierre Coffin",
        "ano": 2010,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "The Best of Me",
        "diretor": "Michael Hoffman",
        "ano": 2014,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Invitation",
        "diretor": "Karyn Kusama",
        "ano": 2015,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "Zero Dark Thirty",
        "diretor": "Kathryn Bigelow",
        "ano": 2012,
        "genero": "Drama,History,Thriller"
    },
    {
        "titulo": "Tangled",
        "diretor": "Nathan Greno",
        "ano": 2010,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "The Hunger Games: Mockingjay - Part 2",
        "diretor": "Francis Lawrence",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Vacation",
        "diretor": "John Francis Daley",
        "ano": 2015,
        "genero": "Adventure,Comedy"
    },
    {
        "titulo": "Taken",
        "diretor": "Pierre Morel",
        "ano": 2008,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "Pitch Perfect 2",
        "diretor": "Elizabeth Banks",
        "ano": 2015,
        "genero": "Comedy,Music"
    },
    {
        "titulo": "Monsters University",
        "diretor": "Dan Scanlon",
        "ano": 2013,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Elle",
        "diretor": "Paul Verhoeven",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Mechanic: Resurrection",
        "diretor": "Dennis Gansel",
        "ano": 2016,
        "genero": "Action,Adventure,Crime"
    },
    {
        "titulo": "Tusk",
        "diretor": "Kevin Smith",
        "ano": 2014,
        "genero": "Comedy,Drama,Horror"
    },
    {
        "titulo": "The Headhunter's Calling",
        "diretor": "Mark Williams",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Atonement",
        "diretor": "Joe Wright",
        "ano": 2007,
        "genero": "Drama,Mystery,Romance"
    },
    {
        "titulo": "Harry Potter and the Deathly Hallows: Part 1",
        "diretor": "David Yates",
        "ano": 2010,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Shame",
        "diretor": "Steve McQueen",
        "ano": 2011,
        "genero": "Drama"
    },
    {
        "titulo": "Hanna",
        "diretor": "Joe Wright",
        "ano": 2011,
        "genero": "Action,Drama,Thriller"
    },
    {
        "titulo": "The Babysitters",
        "diretor": "David Ross",
        "ano": 2007,
        "genero": "Drama"
    },
    {
        "titulo": "Pride and Prejudice and Zombies",
        "diretor": "Burr Steers",
        "ano": 2016,
        "genero": "Action,Horror,Romance"
    },
    {
        "titulo": "300: Rise of an Empire",
        "diretor": "Noam Murro",
        "ano": 2014,
        "genero": "Action,Drama,Fantasy"
    },
    {
        "titulo": "London Has Fallen",
        "diretor": "Babak Najafi",
        "ano": 2016,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "The Curious Case of Benjamin Button",
        "diretor": "David Fincher",
        "ano": 2008,
        "genero": "Drama,Fantasy,Romance"
    },
    {
        "titulo": "Sin City: A Dame to Kill For",
        "diretor": "Frank Miller",
        "ano": 2014,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "The Bourne Ultimatum",
        "diretor": "Paul Greengrass",
        "ano": 2007,
        "genero": "Action,Mystery,Thriller"
    },
    {
        "titulo": "Srpski film",
        "diretor": "Srdjan Spasojevic",
        "ano": 2010,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "The Purge: Election Year",
        "diretor": "James DeMonaco",
        "ano": 2016,
        "genero": "Action,Horror,Sci-Fi"
    },
    {
        "titulo": "3 Idiots",
        "diretor": "Rajkumar Hirani",
        "ano": 2009,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Zoolander 2",
        "diretor": "Ben Stiller",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "World War Z",
        "diretor": "Marc Forster",
        "ano": 2013,
        "genero": "Action,Adventure,Horror"
    },
    {
        "titulo": "Mission: Impossible - Ghost Protocol",
        "diretor": "Brad Bird",
        "ano": 2011,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "Let Me Make You a Martyr",
        "diretor": "Corey Asraf",
        "ano": 2016,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Filth",
        "diretor": "Jon S. Baird",
        "ano": 2013,
        "genero": "Comedy,Crime,Drama"
    },
    {
        "titulo": "The Longest Ride",
        "diretor": "George Tillman Jr.",
        "ano": 2015,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The imposible",
        "diretor": "J.A. Bayona",
        "ano": 2012,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Kick-Ass 2",
        "diretor": "Jeff Wadlow",
        "ano": 2013,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "Folk Hero & Funny Guy",
        "diretor": "Jeff Grace",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "Oz the Great and Powerful",
        "diretor": "Sam Raimi",
        "ano": 2013,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Brooklyn",
        "diretor": "John Crowley",
        "ano": 2015,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Coraline",
        "diretor": "Henry Selick",
        "ano": 2009,
        "genero": "Animation,Family,Fantasy"
    },
    {
        "titulo": "Blue Valentine",
        "diretor": "Derek Cianfrance",
        "ano": 2010,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Thinning",
        "diretor": "Michael J. Gallagher",
        "ano": 2016,
        "genero": "Thriller"
    },
    {
        "titulo": "Silent Hill",
        "diretor": "Christophe Gans",
        "ano": 2006,
        "genero": "Adventure,Horror,Mystery"
    },
    {
        "titulo": "Dredd",
        "diretor": "Pete Travis",
        "ano": 2012,
        "genero": "Action,Sci-Fi"
    },
    {
        "titulo": "Hunt for the Wilderpeople",
        "diretor": "Taika Waititi",
        "ano": 2016,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "Big Hero 6",
        "diretor": "Don Hall",
        "ano": 2014,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "Carrie",
        "diretor": "Kimberly Peirce",
        "ano": 2013,
        "genero": "Drama,Horror"
    },
    {
        "titulo": "Iron Man 2",
        "diretor": "Jon Favreau",
        "ano": 2010,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Demolition",
        "diretor": "Jean-Marc Vallée",
        "ano": 2015,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Pandorum",
        "diretor": "Christian Alvart",
        "ano": 2009,
        "genero": "Action,Horror,Mystery"
    },
    {
        "titulo": "Olympus Has Fallen",
        "diretor": "Antoine Fuqua",
        "ano": 2013,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "I Am Number Four",
        "diretor": "D.J. Caruso",
        "ano": 2011,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Jagten",
        "diretor": "Thomas Vinterberg",
        "ano": 2012,
        "genero": "Drama"
    },
    {
        "titulo": "The Proposal",
        "diretor": "Anne Fletcher",
        "ano": 2009,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Get Hard",
        "diretor": "Etan Cohen",
        "ano": 2015,
        "genero": "Comedy,Crime"
    },
    {
        "titulo": "Just Go with It",
        "diretor": "Dennis Dugan",
        "ano": 2011,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Revolutionary Road",
        "diretor": "Sam Mendes",
        "ano": 2008,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Town",
        "diretor": "Ben Affleck",
        "ano": 2010,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "The Boy",
        "diretor": "William Brent Bell",
        "ano": 2016,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "Denial",
        "diretor": "Mick Jackson",
        "ano": 2016,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Predestination",
        "diretor": "Michael Spierig",
        "ano": 2014,
        "genero": "Drama,Mystery,Sci-Fi"
    },
    {
        "titulo": "Goosebumps",
        "diretor": "Rob Letterman",
        "ano": 2015,
        "genero": "Adventure,Comedy,Family"
    },
    {
        "titulo": "Sherlock Holmes: A Game of Shadows",
        "diretor": "Guy Ritchie",
        "ano": 2011,
        "genero": "Action,Adventure,Crime"
    },
    {
        "titulo": "Salt",
        "diretor": "Phillip Noyce",
        "ano": 2010,
        "genero": "Action,Crime,Mystery"
    },
    {
        "titulo": "Enemy",
        "diretor": "Denis Villeneuve",
        "ano": 2013,
        "genero": "Mystery,Thriller"
    },
    {
        "titulo": "District 9",
        "diretor": "Neill Blomkamp",
        "ano": 2009,
        "genero": "Action,Sci-Fi,Thriller"
    },
    {
        "titulo": "The Other Guys",
        "diretor": "Adam McKay",
        "ano": 2010,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "American Gangster",
        "diretor": "Ridley Scott",
        "ano": 2007,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "Marie Antoinette",
        "diretor": "Sofia Coppola",
        "ano": 2006,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "2012",
        "diretor": "Roland Emmerich",
        "ano": 2009,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Harry Potter and the Half-Blood Prince",
        "diretor": "David Yates",
        "ano": 2009,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Argo",
        "diretor": "Ben Affleck",
        "ano": 2012,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "Eddie the Eagle",
        "diretor": "Dexter Fletcher",
        "ano": 2016,
        "genero": "Biography,Comedy,Drama"
    },
    {
        "titulo": "The Lives of Others",
        "diretor": "Florian Henckel von Donnersmarck",
        "ano": 2006,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Pet",
        "diretor": "Carles Torrens",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Paint It Black",
        "diretor": "Amber Tamblyn",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Macbeth",
        "diretor": "Justin Kurzel",
        "ano": 2015,
        "genero": "Drama,War"
    },
    {
        "titulo": "Forgetting Sarah Marshall",
        "diretor": "Nicholas Stoller",
        "ano": 2008,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Giver",
        "diretor": "Phillip Noyce",
        "ano": 2014,
        "genero": "Drama,Romance,Sci-Fi"
    },
    {
        "titulo": "Triple 9",
        "diretor": "John Hillcoat",
        "ano": 2016,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Perfetti sconosciuti",
        "diretor": "Paolo Genovese",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Angry Birds",
        "diretor": "Clay Kaytis",
        "ano": 2016,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "Moonrise Kingdom",
        "diretor": "Wes Anderson",
        "ano": 2012,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "Hairspray",
        "diretor": "Adam Shankman",
        "ano": 2007,
        "genero": "Comedy,Drama,Family"
    },
    {
        "titulo": "Safe Haven",
        "diretor": "Lasse Hallström",
        "ano": 2013,
        "genero": "Drama,Romance,Thriller"
    },
    {
        "titulo": "Focus",
        "diretor": "Glenn Ficarra",
        "ano": 2015,
        "genero": "Comedy,Crime,Drama"
    },
    {
        "titulo": "Ratatouille",
        "diretor": "Brad Bird",
        "ano": 2007,
        "genero": "Animation,Comedy,Family"
    },
    {
        "titulo": "Stake Land",
        "diretor": "Jim Mickle",
        "ano": 2010,
        "genero": "Drama,Horror,Sci-Fi"
    },
    {
        "titulo": "The Book of Eli",
        "diretor": "Albert Hughes",
        "ano": 2010,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Cloverfield",
        "diretor": "Matt Reeves",
        "ano": 2008,
        "genero": "Action,Horror,Sci-Fi"
    },
    {
        "titulo": "Point Break",
        "diretor": "Ericson Core",
        "ano": 2015,
        "genero": "Action,Crime,Sport"
    },
    {
        "titulo": "Under the Skin",
        "diretor": "Jonathan Glazer",
        "ano": 2013,
        "genero": "Drama,Horror,Sci-Fi"
    },
    {
        "titulo": "I Am Legend",
        "diretor": "Francis Lawrence",
        "ano": 2007,
        "genero": "Drama,Horror,Sci-Fi"
    },
    {
        "titulo": "Men in Black 3",
        "diretor": "Barry Sonnenfeld",
        "ano": 2012,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Super 8",
        "diretor": "J.J. Abrams",
        "ano": 2011,
        "genero": "Mystery,Sci-Fi,Thriller"
    },
    {
        "titulo": "Law Abiding Citizen",
        "diretor": "F. Gary Gray",
        "ano": 2009,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Up",
        "diretor": "Pete Docter",
        "ano": 2009,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Maze Runner: The Scorch Trials",
        "diretor": "Wes Ball",
        "ano": 2015,
        "genero": "Action,Sci-Fi,Thriller"
    },
    {
        "titulo": "Carol",
        "diretor": "Todd Haynes",
        "ano": 2015,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Imperium",
        "diretor": "Daniel Ragussis",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Youth",
        "diretor": "Paolo Sorrentino",
        "ano": 2015,
        "genero": "Comedy,Drama,Music"
    },
    {
        "titulo": "Mr. Nobody",
        "diretor": "Jaco Van Dormael",
        "ano": 2009,
        "genero": "Drama,Fantasy,Romance"
    },
    {
        "titulo": "City of Tiny Lights",
        "diretor": "Pete Travis",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Savages",
        "diretor": "Oliver Stone",
        "ano": 2012,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "(500) Days of Summer",
        "diretor": "Marc Webb",
        "ano": 2009,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Movie 43",
        "diretor": "Elizabeth Banks",
        "ano": 2013,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Gravity",
        "diretor": "Alfonso Cuarón",
        "ano": 2013,
        "genero": "Drama,Sci-Fi,Thriller"
    },
    {
        "titulo": "The Boy in the Striped Pyjamas",
        "diretor": "Mark Herman",
        "ano": 2008,
        "genero": "Drama,War"
    },
    {
        "titulo": "Shooter",
        "diretor": "Antoine Fuqua",
        "ano": 2007,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "The Happening",
        "diretor": "M. Night Shyamalan",
        "ano": 2008,
        "genero": "Sci-Fi,Thriller"
    },
    {
        "titulo": "Bone Tomahawk",
        "diretor": "S. Craig Zahler",
        "ano": 2015,
        "genero": "Adventure,Drama,Horror"
    },
    {
        "titulo": "Magic Mike XXL",
        "diretor": "Gregory Jacobs",
        "ano": 2015,
        "genero": "Comedy,Drama,Music"
    },
    {
        "titulo": "Easy A",
        "diretor": "Will Gluck",
        "ano": 2010,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Exodus: Gods and Kings",
        "diretor": "Ridley Scott",
        "ano": 2014,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Chappie",
        "diretor": "Neill Blomkamp",
        "ano": 2015,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "The Hobbit: The Desolation of Smaug",
        "diretor": "Peter Jackson",
        "ano": 2013,
        "genero": "Adventure,Fantasy"
    },
    {
        "titulo": "Half of a Yellow Sun",
        "diretor": "Biyi Bandele",
        "ano": 2013,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Anthropoid",
        "diretor": "Sean Ellis",
        "ano": 2016,
        "genero": "Biography,History,Thriller"
    },
    {
        "titulo": "The Counselor",
        "diretor": "Ridley Scott",
        "ano": 2013,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Viking",
        "diretor": "Andrey Kravchuk",
        "ano": 2016,
        "genero": "Action,Drama,History"
    },
    {
        "titulo": "Whiskey Tango Foxtrot",
        "diretor": "Glenn Ficarra",
        "ano": 2016,
        "genero": "Biography,Comedy,Drama"
    },
    {
        "titulo": "Trust",
        "diretor": "David Schwimmer",
        "ano": 2010,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Birth of the Dragon",
        "diretor": "George Nolfi",
        "ano": 2016,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "Elysium",
        "diretor": "Neill Blomkamp",
        "ano": 2013,
        "genero": "Action,Drama,Sci-Fi"
    },
    {
        "titulo": "The Green Inferno",
        "diretor": "Eli Roth",
        "ano": 2013,
        "genero": "Adventure,Horror"
    },
    {
        "titulo": "Godzilla",
        "diretor": "Gareth Edwards",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Bourne Legacy",
        "diretor": "Tony Gilroy",
        "ano": 2012,
        "genero": "Action,Adventure,Mystery"
    },
    {
        "titulo": "A Good Year",
        "diretor": "Ridley Scott",
        "ano": 2006,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Friend Request",
        "diretor": "Simon Verhoeven",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Deja Vu",
        "diretor": "Tony Scott",
        "ano": 2006,
        "genero": "Action,Sci-Fi,Thriller"
    },
    {
        "titulo": "Lucy",
        "diretor": "Luc Besson",
        "ano": 2014,
        "genero": "Action,Sci-Fi,Thriller"
    },
    {
        "titulo": "A Quiet Passion",
        "diretor": "Terence Davies",
        "ano": 2016,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Need for Speed",
        "diretor": "Scott Waugh",
        "ano": 2014,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Jack Reacher",
        "diretor": "Christopher McQuarrie",
        "ano": 2012,
        "genero": "Action,Crime,Mystery"
    },
    {
        "titulo": "The Do-Over",
        "diretor": "Steven Brill",
        "ano": 2016,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "True Crimes",
        "diretor": "Alexandros Avranas",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "American Pastoral",
        "diretor": "Ewan McGregor",
        "ano": 2016,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "The Ghost Writer",
        "diretor": "Roman Polanski",
        "ano": 2010,
        "genero": "Mystery,Thriller"
    },
    {
        "titulo": "Limitless",
        "diretor": "Neil Burger",
        "ano": 2011,
        "genero": "Mystery,Sci-Fi,Thriller"
    },
    {
        "titulo": "Spectral",
        "diretor": "Nic Mathieu",
        "ano": 2016,
        "genero": "Action,Mystery,Sci-Fi"
    },
    {
        "titulo": "P.S. I Love You",
        "diretor": "Richard LaGravenese",
        "ano": 2007,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Zipper",
        "diretor": "Mora Stephens",
        "ano": 2015,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Midnight Special",
        "diretor": "Jeff Nichols",
        "ano": 2016,
        "genero": "Drama,Mystery,Sci-Fi"
    },
    {
        "titulo": "Don't Think Twice",
        "diretor": "Mike Birbiglia",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Alice in Wonderland",
        "diretor": "Tim Burton",
        "ano": 2010,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Chuck",
        "diretor": "Philippe Falardeau",
        "ano": 2016,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "I, Daniel Blake",
        "diretor": "Ken Loach",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "The Break-Up",
        "diretor": "Peyton Reed",
        "ano": 2006,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Loving",
        "diretor": "Jeff Nichols",
        "ano": 2016,
        "genero": "Biography,Drama,Romance"
    },
    {
        "titulo": "Fantastic Four",
        "diretor": "Josh Trank",
        "ano": 2015,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Survivalist",
        "diretor": "Stephen Fingleton",
        "ano": 2015,
        "genero": "Drama,Sci-Fi,Thriller"
    },
    {
        "titulo": "Colonia",
        "diretor": "Florian Gallenberger",
        "ano": 2015,
        "genero": "Drama,Romance,Thriller"
    },
    {
        "titulo": "The Boy Next Door",
        "diretor": "Rob Cohen",
        "ano": 2015,
        "genero": "Mystery,Thriller"
    },
    {
        "titulo": "The Gift",
        "diretor": "Joel Edgerton",
        "ano": 2015,
        "genero": "Mystery,Thriller"
    },
    {
        "titulo": "Dracula Untold",
        "diretor": "Gary Shore",
        "ano": 2014,
        "genero": "Action,Drama,Fantasy"
    },
    {
        "titulo": "In the Heart of the Sea",
        "diretor": "Ron Howard",
        "ano": 2015,
        "genero": "Action,Adventure,Biography"
    },
    {
        "titulo": "Idiocracy",
        "diretor": "Mike Judge",
        "ano": 2006,
        "genero": "Adventure,Comedy,Sci-Fi"
    },
    {
        "titulo": "The Expendables",
        "diretor": "Sylvester Stallone",
        "ano": 2010,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "Evil Dead",
        "diretor": "Fede Alvarez",
        "ano": 2013,
        "genero": "Fantasy,Horror"
    },
    {
        "titulo": "Sinister",
        "diretor": "Scott Derrickson",
        "ano": 2012,
        "genero": "Horror,Mystery"
    },
    {
        "titulo": "Wreck-It Ralph",
        "diretor": "Rich Moore",
        "ano": 2012,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Snow White and the Huntsman",
        "diretor": "Rupert Sanders",
        "ano": 2012,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Pan",
        "diretor": "Joe Wright",
        "ano": 2015,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Transformers: Dark of the Moon",
        "diretor": "Michael Bay",
        "ano": 2011,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Juno",
        "diretor": "Jason Reitman",
        "ano": 2007,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "A Hologram for the King",
        "diretor": "Tom Tykwer",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Money Monster",
        "diretor": "Jodie Foster",
        "ano": 2016,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "The Other Woman",
        "diretor": "Nick Cassavetes",
        "ano": 2014,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Enchanted",
        "diretor": "Kevin Lima",
        "ano": 2007,
        "genero": "Animation,Comedy,Family"
    },
    {
        "titulo": "The Intern",
        "diretor": "Nancy Meyers",
        "ano": 2015,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Little Miss Sunshine",
        "diretor": "Jonathan Dayton",
        "ano": 2006,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Bleed for This",
        "diretor": "Ben Younger",
        "ano": 2016,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "Clash of the Titans",
        "diretor": "Louis Leterrier",
        "ano": 2010,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Finest Hours",
        "diretor": "Craig Gillespie",
        "ano": 2016,
        "genero": "Action,Drama,History"
    },
    {
        "titulo": "Tron",
        "diretor": "Joseph Kosinski",
        "ano": 2010,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Hunger Games: Catching Fire",
        "diretor": "Francis Lawrence",
        "ano": 2013,
        "genero": "Action,Adventure,Mystery"
    },
    {
        "titulo": "All Good Things",
        "diretor": "Andrew Jarecki",
        "ano": 2010,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Kickboxer: Vengeance",
        "diretor": "John Stockwell",
        "ano": 2016,
        "genero": "Action"
    },
    {
        "titulo": "The Last Airbender",
        "diretor": "M. Night Shyamalan",
        "ano": 2010,
        "genero": "Action,Adventure,Family"
    },
    {
        "titulo": "Sex Tape",
        "diretor": "Jake Kasdan",
        "ano": 2014,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "What to Expect When You're Expecting",
        "diretor": "Kirk Jones",
        "ano": 2012,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Moneyball",
        "diretor": "Bennett Miller",
        "ano": 2011,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "Ghost Rider",
        "diretor": "Mark Steven Johnson",
        "ano": 2007,
        "genero": "Action,Fantasy,Thriller"
    },
    {
        "titulo": "Unbroken",
        "diretor": "Angelina Jolie",
        "ano": 2014,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "Immortals",
        "diretor": "Tarsem Singh",
        "ano": 2011,
        "genero": "Action,Drama,Fantasy"
    },
    {
        "titulo": "Sunshine",
        "diretor": "Danny Boyle",
        "ano": 2007,
        "genero": "Adventure,Sci-Fi,Thriller"
    },
    {
        "titulo": "Brave",
        "diretor": "Mark Andrews",
        "ano": 2012,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Män som hatar kvinnor",
        "diretor": "Niels Arden Oplev",
        "ano": 2009,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "Adoration",
        "diretor": "Anne Fontaine",
        "ano": 2013,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Drop",
        "diretor": "Michaël R. Roskam",
        "ano": 2014,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "She's the Man",
        "diretor": "Andy Fickman",
        "ano": 2006,
        "genero": "Comedy,Romance,Sport"
    },
    {
        "titulo": "Daddy's Home",
        "diretor": "Sean Anders",
        "ano": 2015,
        "genero": "Comedy,Family"
    },
    {
        "titulo": "Let Me In",
        "diretor": "Matt Reeves",
        "ano": 2010,
        "genero": "Drama,Horror,Mystery"
    },
    {
        "titulo": "Never Back Down",
        "diretor": "Jeff Wadlow",
        "ano": 2008,
        "genero": "Action,Drama,Sport"
    },
    {
        "titulo": "Grimsby",
        "diretor": "Louis Leterrier",
        "ano": 2016,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Moon",
        "diretor": "Duncan Jones",
        "ano": 2009,
        "genero": "Drama,Mystery,Sci-Fi"
    },
    {
        "titulo": "Megamind",
        "diretor": "Tom McGrath",
        "ano": 2010,
        "genero": "Animation,Action,Comedy"
    },
    {
        "titulo": "Gangster Squad",
        "diretor": "Ruben Fleischer",
        "ano": 2013,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Blood Father",
        "diretor": "Jean-François Richet",
        "ano": 2016,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "He's Just Not That Into You",
        "diretor": "Ken Kwapis",
        "ano": 2009,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Kung Fu Panda 3",
        "diretor": "Alessandro Carloni",
        "ano": 2016,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "The Rise of the Krays",
        "diretor": "Zackary Adler",
        "ano": 2015,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "Handsome Devil",
        "diretor": "John Butler",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Winter's Bone",
        "diretor": "Debra Granik",
        "ano": 2010,
        "genero": "Drama"
    },
    {
        "titulo": "Horrible Bosses",
        "diretor": "Seth Gordon",
        "ano": 2011,
        "genero": "Comedy,Crime"
    },
    {
        "titulo": "Mommy",
        "diretor": "Xavier Dolan",
        "ano": 2014,
        "genero": "Drama"
    },
    {
        "titulo": "Hellboy II: The Golden Army",
        "diretor": "Guillermo del Toro",
        "ano": 2008,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Beautiful Creatures",
        "diretor": "Richard LaGravenese",
        "ano": 2013,
        "genero": "Drama,Fantasy,Romance"
    },
    {
        "titulo": "Toni Erdmann",
        "diretor": "Maren Ade",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "The Lovely Bones",
        "diretor": "Peter Jackson",
        "ano": 2009,
        "genero": "Drama,Fantasy,Thriller"
    },
    {
        "titulo": "The Assassination of Jesse James by the Coward Robert Ford",
        "diretor": "Andrew Dominik",
        "ano": 2007,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "Don Jon",
        "diretor": "Joseph Gordon-Levitt",
        "ano": 2013,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Bastille Day",
        "diretor": "James Watkins",
        "ano": 2016,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "2307: Winter's Dream",
        "diretor": "Joey Curtis",
        "ano": 2016,
        "genero": "Sci-Fi"
    },
    {
        "titulo": "Free State of Jones",
        "diretor": "Gary Ross",
        "ano": 2016,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "Mr. Right",
        "diretor": "Paco Cabezas",
        "ano": 2015,
        "genero": "Action,Comedy,Romance"
    },
    {
        "titulo": "The Secret Life of Walter Mitty",
        "diretor": "Ben Stiller",
        "ano": 2013,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "Dope",
        "diretor": "Rick Famuyiwa",
        "ano": 2015,
        "genero": "Comedy,Crime,Drama"
    },
    {
        "titulo": "Underworld Awakening",
        "diretor": "Måns Mårlind",
        "ano": 2012,
        "genero": "Action,Fantasy,Horror"
    },
    {
        "titulo": "Antichrist",
        "diretor": "Lars von Trier",
        "ano": 2009,
        "genero": "Drama,Horror"
    },
    {
        "titulo": "Friday the 13th",
        "diretor": "Marcus Nispel",
        "ano": 2009,
        "genero": "Horror"
    },
    {
        "titulo": "Taken 3",
        "diretor": "Olivier Megaton",
        "ano": 2014,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "Total Recall",
        "diretor": "Len Wiseman",
        "ano": 2012,
        "genero": "Action,Adventure,Mystery"
    },
    {
        "titulo": "X-Men: The Last Stand",
        "diretor": "Brett Ratner",
        "ano": 2006,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Escort",
        "diretor": "Will Slocombe",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Whole Truth",
        "diretor": "Courtney Hunt",
        "ano": 2016,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Night at the Museum: Secret of the Tomb",
        "diretor": "Shawn Levy",
        "ano": 2014,
        "genero": "Adventure,Comedy,Family"
    },
    {
        "titulo": "Love & Other Drugs",
        "diretor": "Edward Zwick",
        "ano": 2010,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Interview",
        "diretor": "Evan Goldberg",
        "ano": 2014,
        "genero": "Comedy"
    },
    {
        "titulo": "The Host",
        "diretor": "Bong Joon Ho",
        "ano": 2006,
        "genero": "Comedy,Drama,Horror"
    },
    {
        "titulo": "Megan Is Missing",
        "diretor": "Michael Goi",
        "ano": 2011,
        "genero": "Drama,Horror,Thriller"
    },
    {
        "titulo": "WALL·E",
        "diretor": "Andrew Stanton",
        "ano": 2008,
        "genero": "Animation,Adventure,Family"
    },
    {
        "titulo": "Knocked Up",
        "diretor": "Judd Apatow",
        "ano": 2007,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Source Code",
        "diretor": "Duncan Jones",
        "ano": 2011,
        "genero": "Mystery,Romance,Sci-Fi"
    },
    {
        "titulo": "Lawless",
        "diretor": "John Hillcoat",
        "ano": 2012,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "Unfriended",
        "diretor": "Levan Gabriadze",
        "ano": 2014,
        "genero": "Drama,Horror,Mystery"
    },
    {
        "titulo": "American Reunion",
        "diretor": "Jon Hurwitz",
        "ano": 2012,
        "genero": "Comedy"
    },
    {
        "titulo": "The Pursuit of Happyness",
        "diretor": "Gabriele Muccino",
        "ano": 2006,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Relatos salvajes",
        "diretor": "Damián Szifron",
        "ano": 2014,
        "genero": "Comedy,Drama,Thriller"
    },
    {
        "titulo": "The Ridiculous 6",
        "diretor": "Frank Coraci",
        "ano": 2015,
        "genero": "Comedy,Western"
    },
    {
        "titulo": "Frantz",
        "diretor": "François Ozon",
        "ano": 2016,
        "genero": "Drama,History,War"
    },
    {
        "titulo": "Viral",
        "diretor": "Henry Joost",
        "ano": 2016,
        "genero": "Drama,Horror,Sci-Fi"
    },
    {
        "titulo": "Gran Torino",
        "diretor": "Clint Eastwood",
        "ano": 2008,
        "genero": "Drama"
    },
    {
        "titulo": "Burnt",
        "diretor": "John Wells",
        "ano": 2015,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Tall Men",
        "diretor": "Jonathan Holbrook",
        "ano": 2016,
        "genero": "Fantasy,Horror,Thriller"
    },
    {
        "titulo": "Sleeping Beauty",
        "diretor": "Julia Leigh",
        "ano": 2011,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Vampire Academy",
        "diretor": "Mark Waters",
        "ano": 2014,
        "genero": "Action,Comedy,Fantasy"
    },
    {
        "titulo": "Sweeney Todd: The Demon Barber of Fleet Street",
        "diretor": "Tim Burton",
        "ano": 2007,
        "genero": "Drama,Horror,Musical"
    },
    {
        "titulo": "Solace",
        "diretor": "Afonso Poyart",
        "ano": 2015,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Insidious",
        "diretor": "James Wan",
        "ano": 2010,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "Popstar: Never Stop Never Stopping",
        "diretor": "Akiva Schaffer",
        "ano": 2016,
        "genero": "Comedy,Music"
    },
    {
        "titulo": "The Levelling",
        "diretor": "Hope Dickson Leach",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Public Enemies",
        "diretor": "Michael Mann",
        "ano": 2009,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "Boyhood",
        "diretor": "Richard Linklater",
        "ano": 2014,
        "genero": "Drama"
    },
    {
        "titulo": "Teenage Mutant Ninja Turtles",
        "diretor": "Jonathan Liebesman",
        "ano": 2014,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Eastern Promises",
        "diretor": "David Cronenberg",
        "ano": 2007,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "The Daughter",
        "diretor": "Simon Stone",
        "ano": 2015,
        "genero": "Drama"
    },
    {
        "titulo": "Pineapple Express",
        "diretor": "David Gordon Green",
        "ano": 2008,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "The First Time",
        "diretor": "Jon Kasdan",
        "ano": 2012,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Gone Baby Gone",
        "diretor": "Ben Affleck",
        "ano": 2007,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "The Heat",
        "diretor": "Paul Feig",
        "ano": 2013,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "L'avenir",
        "diretor": "Mia Hansen-Løve",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Anna Karenina",
        "diretor": "Joe Wright",
        "ano": 2012,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Regression",
        "diretor": "Alejandro Amenábar",
        "ano": 2015,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Ted 2",
        "diretor": "Seth MacFarlane",
        "ano": 2015,
        "genero": "Adventure,Comedy,Romance"
    },
    {
        "titulo": "Pain & Gain",
        "diretor": "Michael Bay",
        "ano": 2013,
        "genero": "Comedy,Crime,Drama"
    },
    {
        "titulo": "Blood Diamond",
        "diretor": "Edward Zwick",
        "ano": 2006,
        "genero": "Adventure,Drama,Thriller"
    },
    {
        "titulo": "Devil's Knot",
        "diretor": "Atom Egoyan",
        "ano": 2013,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "Child 44",
        "diretor": "Daniel Espinosa",
        "ano": 2015,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "The Hurt Locker",
        "diretor": "Kathryn Bigelow",
        "ano": 2008,
        "genero": "Drama,History,Thriller"
    },
    {
        "titulo": "Green Lantern",
        "diretor": "Martin Campbell",
        "ano": 2011,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "War on Everyone",
        "diretor": "John Michael McDonagh",
        "ano": 2016,
        "genero": "Action,Comedy"
    },
    {
        "titulo": "The Mist",
        "diretor": "Frank Darabont",
        "ano": 2007,
        "genero": "Horror"
    },
    {
        "titulo": "Escape Plan",
        "diretor": "Mikael Håfström",
        "ano": 2013,
        "genero": "Action,Crime,Mystery"
    },
    {
        "titulo": "Love, Rosie",
        "diretor": "Christian Ditter",
        "ano": 2014,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "The DUFF",
        "diretor": "Ari Sandel",
        "ano": 2015,
        "genero": "Comedy"
    },
    {
        "titulo": "The Age of Shadows",
        "diretor": "Jee-woon Kim",
        "ano": 2016,
        "genero": "Action,Drama,Thriller"
    },
    {
        "titulo": "The Hunger Games: Mockingjay - Part 1",
        "diretor": "Francis Lawrence",
        "ano": 2014,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "We Need to Talk About Kevin",
        "diretor": "Lynne Ramsay",
        "ano": 2011,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "Love & Friendship",
        "diretor": "Whit Stillman",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Mortal Instruments: City of Bones",
        "diretor": "Harald Zwart",
        "ano": 2013,
        "genero": "Action,Fantasy,Horror"
    },
    {
        "titulo": "Seven Pounds",
        "diretor": "Gabriele Muccino",
        "ano": 2008,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The King's Speech",
        "diretor": "Tom Hooper",
        "ano": 2010,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Hunger",
        "diretor": "Steve McQueen",
        "ano": 2008,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Jumper",
        "diretor": "Doug Liman",
        "ano": 2008,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Toy Story 3",
        "diretor": "Lee Unkrich",
        "ano": 2010,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Tinker Tailor Soldier Spy",
        "diretor": "Tomas Alfredson",
        "ano": 2011,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "Resident Evil: Retribution",
        "diretor": "Paul W.S. Anderson",
        "ano": 2012,
        "genero": "Action,Horror,Sci-Fi"
    },
    {
        "titulo": "Dear Zindagi",
        "diretor": "Gauri Shinde",
        "ano": 2016,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Genius",
        "diretor": "Michael Grandage",
        "ano": 2016,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Pompeii",
        "diretor": "Paul W.S. Anderson",
        "ano": 2014,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Life of Pi",
        "diretor": "Ang Lee",
        "ano": 2012,
        "genero": "Adventure,Drama,Fantasy"
    },
    {
        "titulo": "Hachi: A Dog's Tale",
        "diretor": "Lasse Hallström",
        "ano": 2009,
        "genero": "Drama,Family"
    },
    {
        "titulo": "10 Years",
        "diretor": "Jamie Linden",
        "ano": 2011,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "I Origins",
        "diretor": "Mike Cahill",
        "ano": 2014,
        "genero": "Drama,Romance,Sci-Fi"
    },
    {
        "titulo": "Live Free or Die Hard",
        "diretor": "Len Wiseman",
        "ano": 2007,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "The Matchbreaker",
        "diretor": "Caleb Vetter",
        "ano": 2016,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Funny Games",
        "diretor": "Michael Haneke",
        "ano": 2007,
        "genero": "Crime,Drama,Horror"
    },
    {
        "titulo": "Ted",
        "diretor": "Seth MacFarlane",
        "ano": 2012,
        "genero": "Comedy,Fantasy"
    },
    {
        "titulo": "RED",
        "diretor": "Robert Schwentke",
        "ano": 2010,
        "genero": "Action,Comedy,Crime"
    },
    {
        "titulo": "Australia",
        "diretor": "Baz Luhrmann",
        "ano": 2008,
        "genero": "Adventure,Drama,Romance"
    },
    {
        "titulo": "Faster",
        "diretor": "George Tillman Jr.",
        "ano": 2010,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "The Neighbor",
        "diretor": "Marcus Dunstan",
        "ano": 2016,
        "genero": "Crime,Horror,Thriller"
    },
    {
        "titulo": "The Adjustment Bureau",
        "diretor": "George Nolfi",
        "ano": 2011,
        "genero": "Romance,Sci-Fi,Thriller"
    },
    {
        "titulo": "The Hollars",
        "diretor": "John Krasinski",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Judge",
        "diretor": "David Dobkin",
        "ano": 2014,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "Closed Circuit",
        "diretor": "John Crowley",
        "ano": 2013,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Transformers: Revenge of the Fallen",
        "diretor": "Michael Bay",
        "ano": 2009,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "La tortue rouge",
        "diretor": "Michael Dudok de Wit",
        "ano": 2016,
        "genero": "Animation,Fantasy"
    },
    {
        "titulo": "The Book of Life",
        "diretor": "Jorge R. Gutiérrez",
        "ano": 2014,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Incendies",
        "diretor": "Denis Villeneuve",
        "ano": 2010,
        "genero": "Drama,Mystery,War"
    },
    {
        "titulo": "The Heartbreak Kid",
        "diretor": "Bobby Farrelly",
        "ano": 2007,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Happy Feet",
        "diretor": "George Miller",
        "ano": 2006,
        "genero": "Animation,Comedy,Family"
    },
    {
        "titulo": "Entourage",
        "diretor": "Doug Ellin",
        "ano": 2015,
        "genero": "Comedy"
    },
    {
        "titulo": "The Strangers",
        "diretor": "Bryan Bertino",
        "ano": 2008,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "Noah",
        "diretor": "Darren Aronofsky",
        "ano": 2014,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Neighbors",
        "diretor": "Nicholas Stoller",
        "ano": 2014,
        "genero": "Comedy"
    },
    {
        "titulo": "Nymphomaniac: Vol. II",
        "diretor": "Lars von Trier",
        "ano": 2013,
        "genero": "Drama"
    },
    {
        "titulo": "Wild",
        "diretor": "Jean-Marc Vallée",
        "ano": 2014,
        "genero": "Adventure,Biography,Drama"
    },
    {
        "titulo": "Grown Ups",
        "diretor": "Dennis Dugan",
        "ano": 2010,
        "genero": "Comedy"
    },
    {
        "titulo": "Blair Witch",
        "diretor": "Adam Wingard",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "The Karate Kid",
        "diretor": "Harald Zwart",
        "ano": 2010,
        "genero": "Action,Drama,Family"
    },
    {
        "titulo": "Dark Shadows",
        "diretor": "Tim Burton",
        "ano": 2012,
        "genero": "Comedy,Fantasy,Horror"
    },
    {
        "titulo": "Friends with Benefits",
        "diretor": "Will Gluck",
        "ano": 2011,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "The Illusionist",
        "diretor": "Neil Burger",
        "ano": 2006,
        "genero": "Drama,Mystery,Romance"
    },
    {
        "titulo": "The A-Team",
        "diretor": "Joe Carnahan",
        "ano": 2010,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "The Guest",
        "diretor": "Adam Wingard",
        "ano": 2014,
        "genero": "Thriller"
    },
    {
        "titulo": "The Internship",
        "diretor": "Shawn Levy",
        "ano": 2013,
        "genero": "Comedy"
    },
    {
        "titulo": "Paul",
        "diretor": "Greg Mottola",
        "ano": 2011,
        "genero": "Adventure,Comedy,Sci-Fi"
    },
    {
        "titulo": "This Beautiful Fantastic",
        "diretor": "Simon Aboud",
        "ano": 2016,
        "genero": "Comedy,Drama,Fantasy"
    },
    {
        "titulo": "The Da Vinci Code",
        "diretor": "Ron Howard",
        "ano": 2006,
        "genero": "Mystery,Thriller"
    },
    {
        "titulo": "Mr. Church",
        "diretor": "Bruce Beresford",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Hugo",
        "diretor": "Martin Scorsese",
        "ano": 2011,
        "genero": "Adventure,Drama,Family"
    },
    {
        "titulo": "The Blackcoat's Daughter",
        "diretor": "Oz Perkins",
        "ano": 2015,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Body of Lies",
        "diretor": "Ridley Scott",
        "ano": 2008,
        "genero": "Action,Drama,Romance"
    },
    {
        "titulo": "Knight of Cups",
        "diretor": "Terrence Malick",
        "ano": 2015,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Mummy: Tomb of the Dragon Emperor",
        "diretor": "Rob Cohen",
        "ano": 2008,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Boss",
        "diretor": "Ben Falcone",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "Hands of Stone",
        "diretor": "Jonathan Jakubowicz",
        "ano": 2016,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "El secreto de sus ojos",
        "diretor": "Juan José Campanella",
        "ano": 2009,
        "genero": "Drama,Mystery,Romance"
    },
    {
        "titulo": "True Grit",
        "diretor": "Ethan Coen",
        "ano": 2010,
        "genero": "Adventure,Drama,Western"
    },
    {
        "titulo": "We Are Your Friends",
        "diretor": "Max Joseph",
        "ano": 2015,
        "genero": "Drama,Music,Romance"
    },
    {
        "titulo": "A Million Ways to Die in the West",
        "diretor": "Seth MacFarlane",
        "ano": 2014,
        "genero": "Comedy,Romance,Western"
    },
    {
        "titulo": "Only for One Night",
        "diretor": "Chris Stokes",
        "ano": 2016,
        "genero": "Thriller"
    },
    {
        "titulo": "Rules Don't Apply",
        "diretor": "Warren Beatty",
        "ano": 2016,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Ouija: Origin of Evil",
        "diretor": "Mike Flanagan",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Percy Jackson: Sea of Monsters",
        "diretor": "Thor Freudenthal",
        "ano": 2013,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Fracture",
        "diretor": "Gregory Hoblit",
        "ano": 2007,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Oculus",
        "diretor": "Mike Flanagan",
        "ano": 2013,
        "genero": "Horror,Mystery"
    },
    {
        "titulo": "In Bruges",
        "diretor": "Martin McDonagh",
        "ano": 2008,
        "genero": "Comedy,Crime,Drama"
    },
    {
        "titulo": "This Means War",
        "diretor": "McG",
        "ano": 2012,
        "genero": "Action,Comedy,Romance"
    },
    {
        "titulo": "Lída Baarová",
        "diretor": "Filip Renc",
        "ano": 2016,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "The Road",
        "diretor": "John Hillcoat",
        "ano": 2009,
        "genero": "Adventure,Drama"
    },
    {
        "titulo": "Lavender",
        "diretor": "Ed Gass-Donnelly",
        "ano": 2016,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Deuces",
        "diretor": "Jamal Hill",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Conan the Barbarian",
        "diretor": "Marcus Nispel",
        "ano": 2011,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Fighter",
        "diretor": "David O. Russell",
        "ano": 2010,
        "genero": "Action,Biography,Drama"
    },
    {
        "titulo": "August Rush",
        "diretor": "Kirsten Sheridan",
        "ano": 2007,
        "genero": "Drama,Music"
    },
    {
        "titulo": "Chef",
        "diretor": "Jon Favreau",
        "ano": 2014,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Eye in the Sky",
        "diretor": "Gavin Hood",
        "ano": 2015,
        "genero": "Drama,Thriller,War"
    },
    {
        "titulo": "Eagle Eye",
        "diretor": "D.J. Caruso",
        "ano": 2008,
        "genero": "Action,Mystery,Thriller"
    },
    {
        "titulo": "The Purge",
        "diretor": "James DeMonaco",
        "ano": 2013,
        "genero": "Horror,Sci-Fi,Thriller"
    },
    {
        "titulo": "PK",
        "diretor": "Rajkumar Hirani",
        "ano": 2014,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Ender's Game",
        "diretor": "Gavin Hood",
        "ano": 2013,
        "genero": "Action,Sci-Fi"
    },
    {
        "titulo": "Indiana Jones and the Kingdom of the Crystal Skull",
        "diretor": "Steven Spielberg",
        "ano": 2008,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Paper Towns",
        "diretor": "Jake Schreier",
        "ano": 2015,
        "genero": "Drama,Mystery,Romance"
    },
    {
        "titulo": "High-Rise",
        "diretor": "Ben Wheatley",
        "ano": 2015,
        "genero": "Drama"
    },
    {
        "titulo": "Quantum of Solace",
        "diretor": "Marc Forster",
        "ano": 2008,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "The Assignment",
        "diretor": "Walter Hill",
        "ano": 2016,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "How to Train Your Dragon",
        "diretor": "Dean DeBlois",
        "ano": 2010,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "Lady in the Water",
        "diretor": "M. Night Shyamalan",
        "ano": 2006,
        "genero": "Drama,Fantasy,Mystery"
    },
    {
        "titulo": "The Fountain",
        "diretor": "Darren Aronofsky",
        "ano": 2006,
        "genero": "Drama,Sci-Fi"
    },
    {
        "titulo": "Cars 2",
        "diretor": "John Lasseter",
        "ano": 2011,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "31",
        "diretor": "Rob Zombie",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Final Girl",
        "diretor": "Tyler Shields",
        "ano": 2015,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "Chalk It Up",
        "diretor": "Hisonni Johnson",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "The Man Who Knew Infinity",
        "diretor": "Matt Brown",
        "ano": 2015,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Unknown",
        "diretor": "Jaume Collet-Serra",
        "ano": 2011,
        "genero": "Action,Mystery,Thriller"
    },
    {
        "titulo": "Self/less",
        "diretor": "Tarsem Singh",
        "ano": 2015,
        "genero": "Action,Mystery,Sci-Fi"
    },
    {
        "titulo": "Mr. Brooks",
        "diretor": "Bruce A. Evans",
        "ano": 2007,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Tramps",
        "diretor": "Adam Leon",
        "ano": 2016,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Before We Go",
        "diretor": "Chris Evans",
        "ano": 2014,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Captain Phillips",
        "diretor": "Paul Greengrass",
        "ano": 2013,
        "genero": "Biography,Drama,Thriller"
    },
    {
        "titulo": "The Secret Scripture",
        "diretor": "Jim Sheridan",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Max Steel",
        "diretor": "Stewart Hendler",
        "ano": 2016,
        "genero": "Action,Adventure,Family"
    },
    {
        "titulo": "Hotel Transylvania 2",
        "diretor": "Genndy Tartakovsky",
        "ano": 2015,
        "genero": "Animation,Comedy,Family"
    },
    {
        "titulo": "Hancock",
        "diretor": "Peter Berg",
        "ano": 2008,
        "genero": "Action,Crime,Drama"
    },
    {
        "titulo": "Sisters",
        "diretor": "Jason Moore",
        "ano": 2015,
        "genero": "Comedy"
    },
    {
        "titulo": "The Family",
        "diretor": "Luc Besson",
        "ano": 2013,
        "genero": "Comedy,Crime,Thriller"
    },
    {
        "titulo": "Zack and Miri Make a Porno",
        "diretor": "Kevin Smith",
        "ano": 2008,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Ma vie de Courgette",
        "diretor": "Claude Barras",
        "ano": 2016,
        "genero": "Animation,Comedy,Drama"
    },
    {
        "titulo": "Man on a Ledge",
        "diretor": "Asger Leth",
        "ano": 2012,
        "genero": "Action,Crime,Thriller"
    },
    {
        "titulo": "No Strings Attached",
        "diretor": "Ivan Reitman",
        "ano": 2011,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Rescue Dawn",
        "diretor": "Werner Herzog",
        "ano": 2006,
        "genero": "Adventure,Biography,Drama"
    },
    {
        "titulo": "Despicable Me 2",
        "diretor": "Pierre Coffin",
        "ano": 2013,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "A Walk Among the Tombstones",
        "diretor": "Scott Frank",
        "ano": 2014,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "The World's End",
        "diretor": "Edgar Wright",
        "ano": 2013,
        "genero": "Action,Comedy,Sci-Fi"
    },
    {
        "titulo": "Yoga Hosers",
        "diretor": "Kevin Smith",
        "ano": 2016,
        "genero": "Comedy,Fantasy,Horror"
    },
    {
        "titulo": "Seven Psychopaths",
        "diretor": "Martin McDonagh",
        "ano": 2012,
        "genero": "Comedy,Crime"
    },
    {
        "titulo": "Beowulf",
        "diretor": "Robert Zemeckis",
        "ano": 2007,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "Jack Ryan: Shadow Recruit",
        "diretor": "Kenneth Branagh",
        "ano": 2014,
        "genero": "Action,Drama,Thriller"
    },
    {
        "titulo": "1408",
        "diretor": "Mikael Håfström",
        "ano": 2007,
        "genero": "Fantasy,Horror"
    },
    {
        "titulo": "The Gambler",
        "diretor": "Rupert Wyatt",
        "ano": 2014,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Prince of Persia: The Sands of Time",
        "diretor": "Mike Newell",
        "ano": 2010,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "The Spectacular Now",
        "diretor": "James Ponsoldt",
        "ano": 2013,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "A United Kingdom",
        "diretor": "Amma Asante",
        "ano": 2016,
        "genero": "Biography,Drama,Romance"
    },
    {
        "titulo": "USS Indianapolis: Men of Courage",
        "diretor": "Mario Van Peebles",
        "ano": 2016,
        "genero": "Action,Drama,History"
    },
    {
        "titulo": "Turbo Kid",
        "diretor": "François Simard",
        "ano": 2015,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "Mama",
        "diretor": "Andrés Muschietti",
        "ano": 2013,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Orphan",
        "diretor": "Jaume Collet-Serra",
        "ano": 2009,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "To Rome with Love",
        "diretor": "Woody Allen",
        "ano": 2012,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Fantastic Mr. Fox",
        "diretor": "Wes Anderson",
        "ano": 2009,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Inside Man",
        "diretor": "Spike Lee",
        "ano": 2006,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "I.T.",
        "diretor": "John Moore",
        "ano": 2016,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "127 Hours",
        "diretor": "Danny Boyle",
        "ano": 2010,
        "genero": "Adventure,Biography,Drama"
    },
    {
        "titulo": "Annabelle",
        "diretor": "John R. Leonetti",
        "ano": 2014,
        "genero": "Horror,Mystery,Thriller"
    },
    {
        "titulo": "Wolves at the Door",
        "diretor": "John R. Leonetti",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Suite Française",
        "diretor": "Saul Dibb",
        "ano": 2014,
        "genero": "Drama,Romance,War"
    },
    {
        "titulo": "The Imaginarium of Doctor Parnassus",
        "diretor": "Terry Gilliam",
        "ano": 2009,
        "genero": "Adventure,Fantasy,Mystery"
    },
    {
        "titulo": "G.I. Joe: The Rise of Cobra",
        "diretor": "Stephen Sommers",
        "ano": 2009,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Christine",
        "diretor": "Antonio Campos",
        "ano": 2016,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "Man Down",
        "diretor": "Dito Montiel",
        "ano": 2015,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Crawlspace",
        "diretor": "Phil Claydon",
        "ano": 2016,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Shut In",
        "diretor": "Farren Blackburn",
        "ano": 2016,
        "genero": "Drama,Horror,Thriller"
    },
    {
        "titulo": "The Warriors Gate",
        "diretor": "Matthias Hoene",
        "ano": 2016,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Grindhouse",
        "diretor": "Robert Rodriguez",
        "ano": 2007,
        "genero": "Action,Horror,Thriller"
    },
    {
        "titulo": "Disaster Movie",
        "diretor": "Jason Friedberg",
        "ano": 2008,
        "genero": "Comedy"
    },
    {
        "titulo": "Rocky Balboa",
        "diretor": "Sylvester Stallone",
        "ano": 2006,
        "genero": "Drama,Sport"
    },
    {
        "titulo": "Diary of a Wimpy Kid: Dog Days",
        "diretor": "David Bowers",
        "ano": 2012,
        "genero": "Comedy,Family"
    },
    {
        "titulo": "Jane Eyre",
        "diretor": "Cary Joji Fukunaga",
        "ano": 2011,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Fool's Gold",
        "diretor": "Andy Tennant",
        "ano": 2008,
        "genero": "Action,Adventure,Comedy"
    },
    {
        "titulo": "The Dictator",
        "diretor": "Larry Charles",
        "ano": 2012,
        "genero": "Comedy"
    },
    {
        "titulo": "The Loft",
        "diretor": "Erik Van Looy",
        "ano": 2014,
        "genero": "Mystery,Romance,Thriller"
    },
    {
        "titulo": "Bacalaureat",
        "diretor": "Cristian Mungiu",
        "ano": 2016,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "You Don't Mess with the Zohan",
        "diretor": "Dennis Dugan",
        "ano": 2008,
        "genero": "Action,Comedy"
    },
    {
        "titulo": "Exposed",
        "diretor": "Gee Malik Linton",
        "ano": 2016,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Maudie",
        "diretor": "Aisling Walsh",
        "ano": 2016,
        "genero": "Biography,Drama,Romance"
    },
    {
        "titulo": "Horrible Bosses 2",
        "diretor": "Sean Anders",
        "ano": 2014,
        "genero": "Comedy,Crime"
    },
    {
        "titulo": "A Bigger Splash",
        "diretor": "Luca Guadagnino",
        "ano": 2015,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Melancholia",
        "diretor": "Lars von Trier",
        "ano": 2011,
        "genero": "Drama"
    },
    {
        "titulo": "The Princess and the Frog",
        "diretor": "Ron Clements",
        "ano": 2009,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Unstoppable",
        "diretor": "Tony Scott",
        "ano": 2010,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "Flight",
        "diretor": "Robert Zemeckis",
        "ano": 2012,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Home",
        "diretor": "Tim Johnson",
        "ano": 2015,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "La migliore offerta",
        "diretor": "Giuseppe Tornatore",
        "ano": 2013,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Mean Dreams",
        "diretor": "Nathan Morlando",
        "ano": 2016,
        "genero": "Thriller"
    },
    {
        "titulo": "42",
        "diretor": "Brian Helgeland",
        "ano": 2013,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "21",
        "diretor": "Robert Luketic",
        "ano": 2008,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Begin Again",
        "diretor": "John Carney",
        "ano": 2013,
        "genero": "Drama,Music"
    },
    {
        "titulo": "Out of the Furnace",
        "diretor": "Scott Cooper",
        "ano": 2013,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "Vicky Cristina Barcelona",
        "diretor": "Woody Allen",
        "ano": 2008,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Kung Fu Panda",
        "diretor": "Mark Osborne",
        "ano": 2008,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "Barbershop: The Next Cut",
        "diretor": "Malcolm D. Lee",
        "ano": 2016,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Terminator Salvation",
        "diretor": "McG",
        "ano": 2009,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Freedom Writers",
        "diretor": "Richard LaGravenese",
        "ano": 2007,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "The Hills Have Eyes",
        "diretor": "Alexandre Aja",
        "ano": 2006,
        "genero": "Horror"
    },
    {
        "titulo": "Changeling",
        "diretor": "Clint Eastwood",
        "ano": 2008,
        "genero": "Biography,Drama,Mystery"
    },
    {
        "titulo": "Remember Me",
        "diretor": "Allen Coulter",
        "ano": 2010,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Koe no katachi",
        "diretor": "Naoko Yamada",
        "ano": 2016,
        "genero": "Animation,Drama,Romance"
    },
    {
        "titulo": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
        "diretor": "Miguel Arteta",
        "ano": 2014,
        "genero": "Comedy,Family"
    },
    {
        "titulo": "Locke",
        "diretor": "Steven Knight",
        "ano": 2013,
        "genero": "Drama"
    },
    {
        "titulo": "The 9th Life of Louis Drax",
        "diretor": "Alexandre Aja",
        "ano": 2016,
        "genero": "Mystery,Thriller"
    },
    {
        "titulo": "Horns",
        "diretor": "Alexandre Aja",
        "ano": 2013,
        "genero": "Drama,Fantasy,Horror"
    },
    {
        "titulo": "Indignation",
        "diretor": "James Schamus",
        "ano": 2016,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Stanford Prison Experiment",
        "diretor": "Kyle Patrick Alvarez",
        "ano": 2015,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "Diary of a Wimpy Kid: Rodrick Rules",
        "diretor": "David Bowers",
        "ano": 2011,
        "genero": "Comedy,Family"
    },
    {
        "titulo": "Mission: Impossible III",
        "diretor": "J.J. Abrams",
        "ano": 2006,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "En man som heter Ove",
        "diretor": "Hannes Holm",
        "ano": 2015,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Dragonball Evolution",
        "diretor": "James Wong",
        "ano": 2009,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Red Dawn",
        "diretor": "Dan Bradley",
        "ano": 2012,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "One Day",
        "diretor": "Lone Scherfig",
        "ano": 2011,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Life as We Know It",
        "diretor": "Greg Berlanti",
        "ano": 2010,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "28 Weeks Later",
        "diretor": "Juan Carlos Fresnadillo",
        "ano": 2007,
        "genero": "Drama,Horror,Sci-Fi"
    },
    {
        "titulo": "Warm Bodies",
        "diretor": "Jonathan Levine",
        "ano": 2013,
        "genero": "Comedy,Horror,Romance"
    },
    {
        "titulo": "Blue Jasmine",
        "diretor": "Woody Allen",
        "ano": 2013,
        "genero": "Drama"
    },
    {
        "titulo": "G.I. Joe: Retaliation",
        "diretor": "Jon M. Chu",
        "ano": 2013,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Wrath of the Titans",
        "diretor": "Jonathan Liebesman",
        "ano": 2012,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Shin Gojira",
        "diretor": "Hideaki Anno",
        "ano": 2016,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Saving Mr. Banks",
        "diretor": "John Lee Hancock",
        "ano": 2013,
        "genero": "Biography,Comedy,Drama"
    },
    {
        "titulo": "Transcendence",
        "diretor": "Wally Pfister",
        "ano": 2014,
        "genero": "Drama,Mystery,Romance"
    },
    {
        "titulo": "Rio",
        "diretor": "Carlos Saldanha",
        "ano": 2011,
        "genero": "Animation,Adventure,Comedy"
    },
    {
        "titulo": "Equals",
        "diretor": "Drake Doremus",
        "ano": 2015,
        "genero": "Drama,Romance,Sci-Fi"
    },
    {
        "titulo": "Babel",
        "diretor": "Alejandro González Iñárritu",
        "ano": 2006,
        "genero": "Drama"
    },
    {
        "titulo": "The Tree of Life",
        "diretor": "Terrence Malick",
        "ano": 2011,
        "genero": "Drama,Fantasy"
    },
    {
        "titulo": "The Lucky One",
        "diretor": "Scott Hicks",
        "ano": 2012,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Piranha 3D",
        "diretor": "Alexandre Aja",
        "ano": 2010,
        "genero": "Comedy,Horror,Thriller"
    },
    {
        "titulo": "50/50",
        "diretor": "Jonathan Levine",
        "ano": 2011,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Intent",
        "diretor": "Femi Oyeniran",
        "ano": 2016,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "This Is 40",
        "diretor": "Judd Apatow",
        "ano": 2012,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Real Steel",
        "diretor": "Shawn Levy",
        "ano": 2011,
        "genero": "Action,Drama,Family"
    },
    {
        "titulo": "Sex and the City",
        "diretor": "Michael Patrick King",
        "ano": 2008,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Rambo",
        "diretor": "Sylvester Stallone",
        "ano": 2008,
        "genero": "Action,Thriller,War"
    },
    {
        "titulo": "Planet Terror",
        "diretor": "Robert Rodriguez",
        "ano": 2007,
        "genero": "Action,Comedy,Horror"
    },
    {
        "titulo": "Concussion",
        "diretor": "Peter Landesman",
        "ano": 2015,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "The Fall",
        "diretor": "Tarsem Singh",
        "ano": 2006,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "The Ugly Truth",
        "diretor": "Robert Luketic",
        "ano": 2009,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Bride Wars",
        "diretor": "Gary Winick",
        "ano": 2009,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Sleeping with Other People",
        "diretor": "Leslye Headland",
        "ano": 2015,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Snakes on a Plane",
        "diretor": "David R. Ellis",
        "ano": 2006,
        "genero": "Action,Adventure,Crime"
    },
    {
        "titulo": "What If",
        "diretor": "Michael Dowse",
        "ano": 2013,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "How to Train Your Dragon 2",
        "diretor": "Dean DeBlois",
        "ano": 2014,
        "genero": "Animation,Action,Adventure"
    },
    {
        "titulo": "RoboCop",
        "diretor": "José Padilha",
        "ano": 2014,
        "genero": "Action,Crime,Sci-Fi"
    },
    {
        "titulo": "In Dubious Battle",
        "diretor": "James Franco",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Hello, My Name Is Doris",
        "diretor": "Michael Showalter",
        "ano": 2015,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Ocean's Thirteen",
        "diretor": "Steven Soderbergh",
        "ano": 2007,
        "genero": "Crime,Thriller"
    },
    {
        "titulo": "Slither",
        "diretor": "James Gunn",
        "ano": 2006,
        "genero": "Comedy,Horror,Sci-Fi"
    },
    {
        "titulo": "Contagion",
        "diretor": "Steven Soderbergh",
        "ano": 2011,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Il racconto dei racconti - Tale of Tales",
        "diretor": "Matteo Garrone",
        "ano": 2015,
        "genero": "Drama,Fantasy,Horror"
    },
    {
        "titulo": "I Am the Pretty Thing That Lives in the House",
        "diretor": "Oz Perkins",
        "ano": 2016,
        "genero": "Thriller"
    },
    {
        "titulo": "Bridge to Terabithia",
        "diretor": "Gabor Csupo",
        "ano": 2007,
        "genero": "Adventure,Drama,Family"
    },
    {
        "titulo": "Coherence",
        "diretor": "James Ward Byrkit",
        "ano": 2013,
        "genero": "Mystery,Sci-Fi,Thriller"
    },
    {
        "titulo": "Notorious",
        "diretor": "George Tillman Jr.",
        "ano": 2009,
        "genero": "Biography,Crime,Drama"
    },
    {
        "titulo": "Goksung",
        "diretor": "Hong-jin Na",
        "ano": 2016,
        "genero": "Drama,Fantasy,Horror"
    },
    {
        "titulo": "The Expendables 2",
        "diretor": "Simon West",
        "ano": 2012,
        "genero": "Action,Adventure,Thriller"
    },
    {
        "titulo": "The Girl Next Door",
        "diretor": "Gregory Wilson",
        "ano": 2007,
        "genero": "Crime,Drama,Horror"
    },
    {
        "titulo": "Perfume: The Story of a Murderer",
        "diretor": "Tom Tykwer",
        "ano": 2006,
        "genero": "Crime,Drama,Fantasy"
    },
    {
        "titulo": "The Golden Compass",
        "diretor": "Chris Weitz",
        "ano": 2007,
        "genero": "Adventure,Family,Fantasy"
    },
    {
        "titulo": "Centurion",
        "diretor": "Neil Marshall",
        "ano": 2010,
        "genero": "Action,Adventure,Drama"
    },
    {
        "titulo": "Scouts Guide to the Zombie Apocalypse",
        "diretor": "Christopher Landon",
        "ano": 2015,
        "genero": "Action,Comedy,Horror"
    },
    {
        "titulo": "17 Again",
        "diretor": "Burr Steers",
        "ano": 2009,
        "genero": "Comedy,Drama,Family"
    },
    {
        "titulo": "No Escape",
        "diretor": "John Erick Dowdle",
        "ano": 2015,
        "genero": "Action,Thriller"
    },
    {
        "titulo": "Superman Returns",
        "diretor": "Bryan Singer",
        "ano": 2006,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "The Twilight Saga: Breaking Dawn - Part 1",
        "diretor": "Bill Condon",
        "ano": 2011,
        "genero": "Adventure,Drama,Fantasy"
    },
    {
        "titulo": "Precious",
        "diretor": "Lee Daniels",
        "ano": 2009,
        "genero": "Drama"
    },
    {
        "titulo": "The Sea of Trees",
        "diretor": "Gus Van Sant",
        "ano": 2015,
        "genero": "Drama"
    },
    {
        "titulo": "Good Kids",
        "diretor": "Chris McCoy",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "The Master",
        "diretor": "Paul Thomas Anderson",
        "ano": 2012,
        "genero": "Drama"
    },
    {
        "titulo": "Footloose",
        "diretor": "Craig Brewer",
        "ano": 2011,
        "genero": "Comedy,Drama,Music"
    },
    {
        "titulo": "If I Stay",
        "diretor": "R.J. Cutler",
        "ano": 2014,
        "genero": "Drama,Fantasy,Music"
    },
    {
        "titulo": "The Ticket",
        "diretor": "Ido Fluk",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Detour",
        "diretor": "Christopher Smith",
        "ano": 2016,
        "genero": "Thriller"
    },
    {
        "titulo": "The Love Witch",
        "diretor": "Anna Biller",
        "ano": 2016,
        "genero": "Comedy,Horror"
    },
    {
        "titulo": "Talladega Nights: The Ballad of Ricky Bobby",
        "diretor": "Adam McKay",
        "ano": 2006,
        "genero": "Action,Comedy,Sport"
    },
    {
        "titulo": "The Human Centipede (First Sequence)",
        "diretor": "Tom Six",
        "ano": 2009,
        "genero": "Horror"
    },
    {
        "titulo": "Super",
        "diretor": "James Gunn",
        "ano": 2010,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "The Siege of Jadotville",
        "diretor": "Richie Smyth",
        "ano": 2016,
        "genero": "Action,Drama,Thriller"
    },
    {
        "titulo": "Up in the Air",
        "diretor": "Jason Reitman",
        "ano": 2009,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "The Midnight Meat Train",
        "diretor": "Ryûhei Kitamura",
        "ano": 2008,
        "genero": "Horror,Mystery"
    },
    {
        "titulo": "The Twilight Saga: Eclipse",
        "diretor": "David Slade",
        "ano": 2010,
        "genero": "Adventure,Drama,Fantasy"
    },
    {
        "titulo": "Transpecos",
        "diretor": "Greg Kwedar",
        "ano": 2016,
        "genero": "Thriller"
    },
    {
        "titulo": "What's Your Number?",
        "diretor": "Mark Mylod",
        "ano": 2011,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Riddick",
        "diretor": "David Twohy",
        "ano": 2013,
        "genero": "Action,Sci-Fi,Thriller"
    },
    {
        "titulo": "Triangle",
        "diretor": "Christopher Smith",
        "ano": 2009,
        "genero": "Fantasy,Mystery,Thriller"
    },
    {
        "titulo": "The Butler",
        "diretor": "Lee Daniels",
        "ano": 2013,
        "genero": "Biography,Drama"
    },
    {
        "titulo": "King Cobra",
        "diretor": "Justin Kelly",
        "ano": 2016,
        "genero": "Crime,Drama"
    },
    {
        "titulo": "After Earth",
        "diretor": "M. Night Shyamalan",
        "ano": 2013,
        "genero": "Action,Adventure,Sci-Fi"
    },
    {
        "titulo": "Kicks",
        "diretor": "Justin Tipping",
        "ano": 2016,
        "genero": "Adventure"
    },
    {
        "titulo": "Me and Earl and the Dying Girl",
        "diretor": "Alfonso Gomez-Rejon",
        "ano": 2015,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "The Descendants",
        "diretor": "Alexander Payne",
        "ano": 2011,
        "genero": "Comedy,Drama"
    },
    {
        "titulo": "Sex and the City 2",
        "diretor": "Michael Patrick King",
        "ano": 2010,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "The Kings of Summer",
        "diretor": "Jordan Vogt-Roberts",
        "ano": 2013,
        "genero": "Adventure,Comedy,Drama"
    },
    {
        "titulo": "Death Race",
        "diretor": "Paul W.S. Anderson",
        "ano": 2008,
        "genero": "Action,Sci-Fi,Thriller"
    },
    {
        "titulo": "That Awkward Moment",
        "diretor": "Tom Gormican",
        "ano": 2014,
        "genero": "Comedy,Romance"
    },
    {
        "titulo": "Legion",
        "diretor": "Scott Stewart",
        "ano": 2010,
        "genero": "Action,Fantasy,Horror"
    },
    {
        "titulo": "End of Watch",
        "diretor": "David Ayer",
        "ano": 2012,
        "genero": "Crime,Drama,Thriller"
    },
    {
        "titulo": "3 Days to Kill",
        "diretor": "McG",
        "ano": 2014,
        "genero": "Action,Drama,Thriller"
    },
    {
        "titulo": "Lucky Number Slevin",
        "diretor": "Paul McGuigan",
        "ano": 2006,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Trance",
        "diretor": "Danny Boyle",
        "ano": 2013,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Into the Forest",
        "diretor": "Patricia Rozema",
        "ano": 2015,
        "genero": "Drama,Sci-Fi,Thriller"
    },
    {
        "titulo": "The Other Boleyn Girl",
        "diretor": "Justin Chadwick",
        "ano": 2008,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "I Spit on Your Grave",
        "diretor": "Steven R. Monroe",
        "ano": 2010,
        "genero": "Crime,Horror,Thriller"
    },
    {
        "titulo": "Custody",
        "diretor": "James Lapine",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "Inland Empire",
        "diretor": "David Lynch",
        "ano": 2006,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "L'odyssée",
        "diretor": "Jérôme Salle",
        "ano": 2016,
        "genero": "Adventure,Biography"
    },
    {
        "titulo": "The Walk",
        "diretor": "Robert Zemeckis",
        "ano": 2015,
        "genero": "Adventure,Biography,Crime"
    },
    {
        "titulo": "Wrecker",
        "diretor": "Micheal Bafaro",
        "ano": 2015,
        "genero": "Action,Horror,Thriller"
    },
    {
        "titulo": "The Lone Ranger",
        "diretor": "Gore Verbinski",
        "ano": 2013,
        "genero": "Action,Adventure,Western"
    },
    {
        "titulo": "Texas Chainsaw 3D",
        "diretor": "John Luessenhop",
        "ano": 2013,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Disturbia",
        "diretor": "D.J. Caruso",
        "ano": 2007,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "Rock of Ages",
        "diretor": "Adam Shankman",
        "ano": 2012,
        "genero": "Comedy,Drama,Musical"
    },
    {
        "titulo": "Scream 4",
        "diretor": "Wes Craven",
        "ano": 2011,
        "genero": "Horror,Mystery"
    },
    {
        "titulo": "Queen of Katwe",
        "diretor": "Mira Nair",
        "ano": 2016,
        "genero": "Biography,Drama,Sport"
    },
    {
        "titulo": "My Big Fat Greek Wedding 2",
        "diretor": "Kirk Jones",
        "ano": 2016,
        "genero": "Comedy,Family,Romance"
    },
    {
        "titulo": "Dark Places",
        "diretor": "Gilles Paquet-Brenner",
        "ano": 2015,
        "genero": "Drama,Mystery,Thriller"
    },
    {
        "titulo": "Amateur Night",
        "diretor": "Lisa Addario",
        "ano": 2016,
        "genero": "Comedy"
    },
    {
        "titulo": "It's Only the End of the World",
        "diretor": "Xavier Dolan",
        "ano": 2016,
        "genero": "Drama"
    },
    {
        "titulo": "The Skin I Live In",
        "diretor": "Pedro Almodóvar",
        "ano": 2011,
        "genero": "Drama,Thriller"
    },
    {
        "titulo": "Miracles from Heaven",
        "diretor": "Patricia Riggen",
        "ano": 2016,
        "genero": "Biography,Drama,Family"
    },
    {
        "titulo": "Annie",
        "diretor": "Will Gluck",
        "ano": 2014,
        "genero": "Comedy,Drama,Family"
    },
    {
        "titulo": "Across the Universe",
        "diretor": "Julie Taymor",
        "ano": 2007,
        "genero": "Drama,Fantasy,Musical"
    },
    {
        "titulo": "Let's Be Cops",
        "diretor": "Luke Greenfield",
        "ano": 2014,
        "genero": "Comedy"
    },
    {
        "titulo": "Max",
        "diretor": "Boaz Yakin",
        "ano": 2015,
        "genero": "Adventure,Family"
    },
    {
        "titulo": "Your Highness",
        "diretor": "David Gordon Green",
        "ano": 2011,
        "genero": "Adventure,Comedy,Fantasy"
    },
    {
        "titulo": "Final Destination 5",
        "diretor": "Steven Quale",
        "ano": 2011,
        "genero": "Horror,Thriller"
    },
    {
        "titulo": "Endless Love",
        "diretor": "Shana Feste",
        "ano": 2014,
        "genero": "Drama,Romance"
    },
    {
        "titulo": "Martyrs",
        "diretor": "Pascal Laugier",
        "ano": 2008,
        "genero": "Horror"
    },
    {
        "titulo": "Selma",
        "diretor": "Ava DuVernay",
        "ano": 2014,
        "genero": "Biography,Drama,History"
    },
    {
        "titulo": "Underworld: Rise of the Lycans",
        "diretor": "Patrick Tatopoulos",
        "ano": 2009,
        "genero": "Action,Adventure,Fantasy"
    },
    {
        "titulo": "Taare Zameen Par",
        "diretor": "Aamir Khan",
        "ano": 2007,
        "genero": "Drama,Family,Music"
    },
    {
        "titulo": "Take Me Home Tonight",
        "diretor": "Michael Dowse",
        "ano": 2011,
        "genero": "Comedy,Drama,Romance"
    },
    {
        "titulo": "Resident Evil: Afterlife",
        "diretor": "Paul W.S. Anderson",
        "ano": 2010,
        "genero": "Action,Adventure,Horror"
    },
    {
        "titulo": "Project X",
        "diretor": "Nima Nourizadeh",
        "ano": 2012,
        "genero": "Comedy"
    },
    {
        "titulo": "Secret in Their Eyes",
        "diretor": "Billy Ray",
        "ano": 2015,
        "genero": "Crime,Drama,Mystery"
    },
    {
        "titulo": "Hostel: Part II",
        "diretor": "Eli Roth",
        "ano": 2007,
        "genero": "Horror"
    },
    {
        "titulo": "Step Up 2: The Streets",
        "diretor": "Jon M. Chu",
        "ano": 2008,
        "genero": "Drama,Music,Romance"
    },
    {
        "titulo": "Search Party",
        "diretor": "Scot Armstrong",
        "ano": 2014,
        "genero": "Adventure,Comedy"
    },
    {
        "titulo": "Nine Lives",
        "diretor": "Barry Sonnenfeld",
        "ano": 2016,
        "genero": "Comedy,Family,Fantasy"
    }
];


const selectAno = document.getElementById('filtroAno');
const selectGenero = document.getElementById('filtroGenero');
const containerFilmes = document.getElementById('listaFilmes');

function inicializarFiltros() {
    const anosUnicos = new Set();
    const generosUnicos = new Set();

    filmesDropdown.forEach(filme => {
        if (filme && filme.ano && filme.genero) {
            anosUnicos.add(filme.ano);

            filme.genero.split(',').forEach(g => generosUnicos.add(g.trim()));
        }
    });

    Array.from(anosUnicos).sort((a, b) => b - a).forEach(ano => {
        const opt = document.createElement('option');
        opt.value = ano;
        opt.textContent = ano;
        selectAno.appendChild(opt);
    });

    Array.from(generosUnicos).sort().forEach(genero => {
        const opt = document.createElement('option');
        opt.value = genero;
        opt.textContent = genero;
        selectGenero.appendChild(opt);
    });
}

function renderizarFilmes(lista) {
    containerFilmes.innerHTML = "";

    if (lista.length === 0) {
        containerFilmes.innerHTML = `<p class="sem-resultado">Nenhum filme corresponde aos critérios selecionados.</p>`;
        return;
    }

    lista.forEach(filme => {
        const card = document.createElement('div');
        card.className = 'card-filme';

        const badgesGenero = filme.genero.split(',')
            .map(g => `<span class="badge genero">${g.trim()}</span>`).join('');

        card.innerHTML = `
      <h2>${filme.titulo}</h2>
      <div class="badge-container">
        ${badgesGenero}
        <span class="badge ano">${filme.ano}</span>
      </div>
    `;
        containerFilmes.appendChild(card);
    });
}

function filtrarFilmes() {
    const anoSelecionado = selectAno.value;
    const generoSelecionado = selectGenero.value;

    const resultado = filmesDropdown.filter(filme => {
        if (!filme) return false;

        const bateAno = anoSelecionado === "" || filme.ano.toString() === anoSelecionado;

        const bateGenero = generoSelecionado === "" || filme.genero.includes(generoSelecionado);

        return bateAno && bateGenero;
    });

    renderizarFilmes(resultado);
}

selectAno.addEventListener('change', filtrarFilmes);
selectGenero.addEventListener('change', filtrarFilmes);

inicializarFiltros();
renderizarFilmes(filmesDropdown);