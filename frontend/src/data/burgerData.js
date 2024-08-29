const burgerData = [
    {
      "id": 0,
      "name": "Tribute Burger",
      "restaurant": "Honest Burgers",
      "price":"200",
      "delay":"0.2",
      "web": "www.honestburgers.co.uk",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",
      "description": "A mouth-watering honest beef burger",
      "ingredients": [
        "beef",
        "american cheese",
        "burger sauce",
        "french mustard",
        "pickes",
        "onion",
        "lettuce"
      ],
    },
    {
      "id": 1,
      "name": "Pulled Mooshie",
      "restaurant": "Mooshies",
      "price":"150",
      "delay":"0.3",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "web": "www.veganburger.org",
      "description": "Spicy vegan burger with jackfruit",
      "ingredients": [
        "jackfruit",
        "coleslaw",
        "gluten free bun"
      ],
    },
    {
      "id": 2,
      "name": "Krabby Patty",
      "restaurant": "Krusty Krab",
      "web": "https://twitter.com/SpongeBob",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin-with-Egg:product-header-mobile?wid=768&hei=443&dpr=off",
      "price":"150",
      "delay":"0.4",
      "description": "The only people who don't like a Krabby Patty have never tasted one.",
      "ingredients": [
        "bun",
        "patty",
        "ketchup",
        "mustard",
        "pickles",
        "onions",
        "lettuce",
        "cheese",
        "tomato",
        "bun"
      ]
    },
    {
      "id": 3,
      "name": "The Good Burger",
      "restaurant": "Good Burger",
      "price":"170",
      "delay":"0.5",
      "web": "https://en.wikipedia.org/wiki/Good_Burger",
      "description": "Welcome to Good Burger, home of the Good Burger, can I take your order?",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "ingredients": [
        "bun",
        "tomato",
        "Ed's secret sauce",
        "lettuce",
        "onions",
        "cheese"
      ]
    },
    {
      "id": 4,
      "name": "Crunchy Nacho Burger",
      "restaurant": "Max Burgers",
      "web": "https://www.max.se/maten/meny/burgare/crunchy-nacho-burger/",
      "price":"110",
      "delay":"0.6",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-with-Egg-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=441&dpr=off",
      "description": "The best combination of crunchiness and softness, all in one single burger",
      "ingredients": [
        "sesame bun",
        "salsa",
        "cheddar",
        "nachos",
        "beef",
        "tomato",
        "pickled onion",
        "lettuce",
        "jalapeño mayonnaise"
      ]
    },
    {
      "id": 5,
      "name": "Barbie Burger",
      "restaurant": "Flower Burger",
      "price":"90",
      "delay":"0.7",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles:product-header-mobile?wid=768&hei=441&dpr=off",
      "web": "https://www.flowerburger.it/",
      "description": "From a pink explosion was born Barbie Burger, a special edition in partnership with Mattel",
      "ingredients": [
        "pink bun",
        "lentil and beetroot burger",
        "tomatoes",
        "gentilina salad",
        "barbie hummus",
        "barbie mayo"
      ]
    },
    {
      "id": 6,
      "name": "Curry On My Wayward Bun",
      "restaurant": "Bob's Burgers",
      "price":"160",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=443&dpr=off",
      "web": "https://bobs-burgers.fandom.com/wiki/Burger_of_the_Day",
      "description": "N/A",
      "ingredients": [
        "beef",
        "curry",
        "bun"
      ]
    },
    {
      "id": 7,
      "name": "MEISTER ALLER KLASSEN",
      "restaurant": "Burgermeister",
      "web": "https://burger-meister.de",
      "price":"150",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=443&dpr=off",
      "description": "Fast food ",
      "ingredients": [
        "2 x meat",
        "2 x cheese",
        "bacon",
        "barbequesauce",
        "jalapenos"
      ]
    },
    {
      "id": 8,
      "name": "Vegetarian Burger (Indian Style)",
      "restaurant": "Indian Burgers",
      "web": "https://www.cookwithmanali.com/vegetarian-burger-indian-style/",
      "price":"180",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:product-header-mobile?product-header-desktop&wid=768&hei=443&dpr=off",
      "description": "Indian style Vegetarian Burger aka Masala Burger!",
      "ingredients": [
        "american cheese",
        "burger sauce",
        "french mustard",
        "pickes",
        "onion",
        "Veggies"
      ]
    },
    {
      "id": 9,
      "name": "Fat Santa",
      "restaurant": "Sky City Hamilton",
      "web": "https://skycityhamilton.co.nz/eat-drink/eat-burger/",
      "price":"110",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-deluxe-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=441&dpr=off",
      "description": "A Christmas themed burger",
      "ingredients": [
        "chicken thigh",
        "champagne ham",
        "sage and onion stuffing",
        "gravy mash",
        "lettuce",
        "tomato",
        "cranberry sauce"
      ]
    },
    {
      "id": 10,
      "name": "Blondie",
      "restaurant": "Yankys",
      "web": "http://yankyslambton.co.za/menu/",
      "price":"270",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Filet-O-Fish-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "description": "Delicious steak burger",
      "ingredients": [
        "steak",
        "BBQ sauce",
        "bacon",
        "egg",
        "cheese",
        "lettuce",
        "tomato",
        "onion",
        "gerkins"
      ]
    },
    {
      "id": 11,
      "name": "Monster Burger",
      "restaurant": "Yankys",
      "web": "http://yankyslambton.co.za/menu/",
      "price":"250",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "description": "Massive meaty burger - the size of a dinner plate",
      "ingredients": [
        "250g patty",
        "bacon",
        "cheese",
        "2 eggs",
        "steak",
        "BBQ sauce",
        "lettuce",
        "tomato",
        "onion",
        "gerkins"
      ]
    },
    {
      "id": 12,
      "name": "Buffalo chicken burger",
      "restaurant": "Meat Mission",
      "web": "http://meatliquor.com/",
      "price":"190",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-mobile?wid=768&hei=441&dpr=off",
      "description": "Large, messy, super tasty buffalo chicken burger",
      "ingredients": [
        "Fried chicken breast",
        "House-made buffalo sauce",
        "Lettuce",
        "Red onions",
        "Blue cheese sauce"
      ]
    },
    {
      "id": 13,
      "name": "Cheatday Burger",
      "restaurant": "Burgeramt",
      "web": "https://www.burgeramt.com/",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "description": "Perfect when you need a day off from your workout routine",
      "price":"100",
      "ingredients": [
        "double beef",
        "chilli-cheese sauce",
        "2 slices cheddar cheese",
        "crispy bacon stripes",
        "nachos",
        "mayonnaise",
        "mustard"
      ]
    },
    {
      "id": 14,
      "name": "The Truffler (vegan)",
      "restaurant": "Byron Burgers",
      "web": "https://www.byron.co.uk/",
      "price":"160",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "description": "Beyond Meat patty, crispy onions, mushrooms, pickled red onions, lettuce American mustard, truffle ‘cheese’ fondue, truffle ‘mayo’",
      "ingredients": [
        "1/4 Beyond Meat patty",
        "crispy onions",
        "sauteed mushrooms",
        "pickled red onions",
        "lettuce",
        "American mustard",
        "truffle vegan cheese fondue",
        "truffle vegan mayo"
      ]
    },
    {
      "id": 15,
      "name": "Aloette Buger",
      "restaurant": "Aloette",
      "web": "https://aloetterestaurant.com/",
      "price":"260",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Filet-O-Fish-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "description": "Haute cuisine meets cravings for cheeseburgers.",
      "ingredients": [
        "6oz beef patty, served medium",
        "griddled beaufort cheese",
        "cheddar mayo",
        "shredded lettuce",
        "potato roll"
      ]
    },
    {
      "id": 16,
      "name": "BBQ Burger",
      "restaurant": "Fresh Plant Powered",
      "web": "https://freshplantpowered.com/",
      "price":"260",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:product-header-mobile?product-header-desktop&wid=768&hei=443&dpr=off",
      "description": "Vegan burger made from whole, natural ingredients.",
      "ingredients": [
        "house-made grain burger",
        "bbq sauce",
        "quinoa onion rings",
        "vegan garlic mayo",
        "napa cabbage",
        "banana chillies",
        "tomato",
        "lettuce"
      ]
    },
    {
      "id": 17,
      "name": "Carroll's Cheese Burger",
      "restaurant": "Carroll's Pub Worms",
      "price":"140",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",
      "web": "https://www.carrolls-pub-worms.de/",
      "description": "Tasty black angus beef burger.",
      "ingredients": [
        "Irish black angus beef",
        "tomato",
        "lettuce",
        "caramelized onions",
        "pickles",
        "cheddar cheese",
        "tomato relish"
      ]
    },
    {
      "id": 18,
      "name": "Mojitto Burger",
      "restaurant": "Burger King India",
      "price":"200",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "web": "www.mojitto.com",
      "description": "Burger a day keeps the fat away",
      "ingredients": [
        "bread",
        "maida",
        "chick",
        "patty"
      ]
    },
    {
      "id": 19,
      "name": "Double Slab Burger",
      "restaurant": "Slab Burgers",
      "web": "www.slabburgers.com",
      "price":"300",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:product-header-mobile?product-header-desktop&wid=768&hei=443&dpr=off",
      "description": "taste of hormone-free running cows",
      "ingredients": [
        "beef",
        "caramelized onions",
        "slab sauce",
        "pickles",
        "mushrooms",
        "tomato",
        "lettuce"
      ]
    },
    {
      "id": 20,
      "name": "Du Brown",
      "restaurant": "Du Brown Burger Café",
      "web": "https://www.dubrown.com/",
      "price":"340",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles:product-header-mobile?wid=768&hei=441&dpr=off",
      "description": "Home of the no bullshit burger",
      "ingredients": [
        "beef",
        "bacon",
        "caramelized onions",
        "cheddar cheese",
        "barbecue sauce",
        "onion rings",
        "jalepeños",
        "tomato",
        "lettuce",
        "chipote mayonaise"
      ]
    },
    {
      "id": 21,
      "name": "Melting Potes",
      "restaurant": "Melting Potes Nantes",
      "web": "https://www.meltingpotesnantes.com/",
      "description": "Home of the no bullshit burger",
      "price":"280",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:product-header-mobile?product-header-desktop&wid=768&hei=443&dpr=off",
      "ingredients": [
        "beef",
        "poutine",
        "raclette cheese",
        "honey mustard sauce",
        "goats cheese",
        "crispy onions"
      ]
    },
    {
      "id": 22,
      "name": "Big Fernand",
      "restaurant": "Big Fernand",
      "price":"199",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=443&dpr=off",
      "web": "https://bigfernand.com/",
      "description": "L'atelier du Hamburgé - The burger workshop",
      "ingredients": [
        "beef",
        "sundried tomates",
        "tatar sauce",
        "confit onions",
        "blue cheese",
        "smokey bacon"
      ]
    },
    {
      "id": 23,
      "name": "PNY Burger",
      "restaurant": "PNY Burger",
      "web": "https://pnyburger.com/",
      "price":"99",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "description": "Home of the no bullshit burger",
      "ingredients": [
        "beef",
        "poutine",
        "raclette cheese",
        "honey mustard sauce",
        "goats cheese",
        "crispy onions"
      ]
    },
    {
      "id": 24,
      "name": "231 East",
      "restaurant": "231 East Street",
      "price":"190",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "web": "https://www.231-east.fr/",
      "description": "True New York style burger in France",
      "ingredients": [
        "beef",
        "smoked bacon",
        "chicken",
        "veggie burgers",
        "brioche bun",
        "honey mustard sauce",
        "onion chutney",
        "pepper sauce",
        "avacado"
      ]
    },
    {
      "id": 25,
      "name": "Cajun Black Bean Burger",
      "restaurant": "The Chicago Diner",
      "price":"99",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:product-header-mobile?wid=768&hei=443&dpr=off",
      "web": "www.veggiediner.com",
      "description": "a hearty veggie burger with a kick that goes great with sweet potato fries",
      "ingredients": [
        "spicy black bean veggie patty",
        "sautéed onions",
        "mushrooms",
        "spinach",
        "tomato",
        "fried jalapeño",
        "cheddar sauce",
        "creole mustard"
      ]
    },
    {
      "id": 26,
      "name": "Hatch Green Chile Bacon Burger",
      "restaurant": "Whataburger",
      "web": "www.whataburger.com",
      "price":"240",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:product-header-mobile?product-header-desktop&wid=768&hei=443&dpr=off",
      "description": "burger with hatch green chiles, bacon and cheese",
      "ingredients": [
        "beef",
        "cheese",
        "bacon",
        "hatch green chiles",
        "mayonnaise"
      ]
    },
    {
      "id": 27,
      "name": "The Street Burgers and Coctail Bar Prague 1",
      "restaurant": "The Street",
      "price":"170",
      "image":"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles:product-header-mobile?wid=768&hei=441&dpr=off",
      "web": "www.thestreet.cz",
      "description": "American, Bar, International, European, Vegetarian Friendly",
      "ingredients": [
        "beef",
        "cheddar cheese",
        "blue cheese",
        "onion",
        "mozzarella",
        "bacon",
        "lettuce"
      ]
    }
  ]

  export default burgerData;