const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/projectrecipes"
);

const recipeSeed = [
    {
        title: 'Sweet and Spicy Grilled Shrimp',
        summary:
            'Basting shrimp on the grill with a sauce made with honey and chile-garlic sauce delivers flavorful results.',
        link:
            'https://www.allrecipes.com/recipe/223269/sweet-and-spicy-grilled-shrimp/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/1176395.jpg',
        author: 'By TheGoddessGiGi'
    },
    {
        title: 'Key West Chicken',
        summary:
            "This recipe from the Florida Keys is the best marinade for chicken, and it only takes 30 minutes from prep till you can grill! It's a great blend of flavors with honey, soy sauce, and lime juice.",
        link: 'https://www.allrecipes.com/recipe/25445/key-west-chicken/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/694150.jpg',
        author: 'By TINA B'
    },
    {
        title: 'No-Noodle Zucchini Lasagna',
        summary:
            'Thin slices of zucchini stand in for noodles in this lasagna. It is perfect in the summer with your garden-fresh veggies and herbs, or in the winter when you need a comforting meal.',
        link:
            'https://www.allrecipes.com/recipe/172958/no-noodle-zucchini-lasagna/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/6287281.jpg',
        author: 'By Jill Welch'
    },
    {
        title: 'Delicious Egg Salad for Sandwiches',
        summary: 'Make the perfect egg salad for sandwiches!',
        link:
            'https://www.allrecipes.com/recipe/147103/delicious-egg-salad-for-sandwiches/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/191517.jpg',
        author: 'By wifeyluvs2cook'
    },
    {
        title: 'Slow-Cooker Pepper Steak',
        summary:
            'Tasty strips of sirloin are seasoned with garlic powder, then slow cooked with onion, green pepper, and stewed tomatoes for this easy and comforting dinner.',
        link:
            'https://www.allrecipes.com/recipe/23567/slow-cooker-pepper-steak/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/496244.jpg',
        author: 'By MJWAGNER68'
    },
    {
        title: 'Pineapple Sticky Ribs',
        summary:
            'These savory pork ribs are baked in a sticky-sweet mixture of pineapple tidbits, apricot jam, and soy sauce to create a crowd-pleasing meal.',
        link:
            'https://www.allrecipes.com/recipe/255220/pineapple-sticky-ribs/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/4039350.jpg',
        author: 'By SUNKIST2'
    },
    {
        title: 'Best Ever Crab Cakes',
        summary:
            'A quick and easy crab cake that features buttery round crackers, tarragon, green onions, and red pepper flakes.',
        link:
            'https://www.allrecipes.com/recipe/82347/best-ever-crab-cakes/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/5103019.jpg',
        author: 'By LINDACHEK'
    },
    {
        title: 'Grilled Honey-Lemon Chicken',
        summary:
            'Lemon juice and zest, honey, and Dijon mustard add their flavors to a sweet and tangy marinade that will make basic grilled chicken breasts into a family-pleasing treat.',
        link:
            'https://www.allrecipes.com/recipe/228617/grilled-honey-lemon-chicken/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/2383467.jpg',
        author: 'By Autumn Pumpkin'
    },
    {
        title: 'Penne with Chicken and Asparagus',
        summary:
            'A light but super-tasty pasta dish, with fresh asparagus cooked in broth with sauteed garlic and seasoned chicken.',
        link:
            'https://www.allrecipes.com/recipe/90089/penne-with-chicken-and-asparagus/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/226134.jpg',
        author: 'By LAUREL B'
    },
    {
        title: 'Garlic Pork Roast',
        summary:
            'A pork roast is slow cooked with sweet potatoes, onion and garlic.',
        link: 'https://www.allrecipes.com/recipe/41444/garlic-pork-roast/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/3826427.jpg',
        author: 'By Brandy'
    },
    {
        title: 'Black Pepper Beef and Cabbage Stir Fry',
        summary:
            'A very simple Chinese stir-fry dish which is fabulous in taste. I saw my husband going for two additional servings of it and I had to remind him to leave some for the rest of the family! Serve with hot steamed rice.',
        link:
            'https://www.allrecipes.com/recipe/50233/black-pepper-beef-and-cabbage-stir-fry/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/5871172.jpg',
        author: 'By LI-ANN'
    },
    {
        title: 'Fish Tacos',
        summary:
            'Beer battered cod are the star of these fresh and tasty fish tacos, served in corn tortillas with shredded cabbage and a zesty white sauce.',
        link: 'https://www.allrecipes.com/recipe/53729/fish-tacos/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/4557502.jpg',
        author: 'By BREESE823'
    },
    {
        title: 'Kielbasa with Peppers and Potatoes',
        summary: 'Kielbasa cooked with red and yellow peppers and potatoes.',
        link:
            'https://www.allrecipes.com/recipe/85127/kielbasa-with-peppers-and-potatoes/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/2262242.jpg',
        author: 'By Jeff Maloney'
    },
    {
        title: 'Mediterranean Chicken',
        summary:
            'The lightness of white wine contrasts with plenty of garlic, onion and herbed tomatoes in this simmered chicken dish highlighted with the piquancy of Kalamata olives.',
        link:
            'https://www.allrecipes.com/recipe/15486/mediterranean-chicken/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/859251.jpg',
        author: 'By Robyn Webb'
    },
    {
        title: 'Grilled Cauliflower',
        summary:
            'Cut your head of cauliflower into slices and grill like steaks seasoned with seasoned salt and brown sugar for a new item for grilling season.',
        link:
            'https://www.allrecipes.com/recipe/229511/grilled-cauliflower/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/1007194.jpg',
        author: 'By ziola1039'
    },
    {
        title: 'Beer Can Chicken',
        summary:
            'This delicious whole chicken is barbequed on top of an open beer can for added juiciness and flavor.',
        link: 'https://www.allrecipes.com/recipe/214618/beer-can-chicken/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/701755.jpg',
        author: "By Hunter's Mom 2008"
    },
    {
        title: 'Mexican Zucchini Cheese Soup',
        summary:
            'This flavorful soup is made with chicken broth, zucchini, summer squash, and Velveeta®, spiced up with green chiles and topped with cilantro. Serve with warm tortillas.',
        link:
            'https://www.allrecipes.com/recipe/57544/mexican-zucchini-cheese-soup/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/6429605.jpg',
        author: 'By Always Cooking'
    },
    {
        title: 'California Chicken',
        summary:
            'Sauteed chicken topped with tomato, Monterey jack, and a crowning glory of silky avocado slices.',
        link: 'https://www.allrecipes.com/recipe/8613/california-chicken/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/420717.jpg',
        author: 'By Ingrid'
    },
    {
        title: 'North Carolina-Style Pulled Pork',
        summary:
            'Pork butt receives a vigorous, spicy rubdown, then is slowly smoked until tender. The meat is then pulled and simmered in a piquant vinegar sauce.',
        link:
            'https://www.allrecipes.com/recipe/25459/north-carolina-style-pulled-pork/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/31844.jpg',
        author: 'By Doug'
    },
    {
        title: "World's Best Honey Garlic Pork Chops",
        summary:
            'A quick and simple grilled pork chop that everyone will love featuring a simple and easy glaze of ketchup, honey, soy sauce, and garlic.',
        link:
            'https://www.allrecipes.com/recipe/235158/worlds-best-honey-garlic-pork-chops/',
        thumbnail:
            'https://images.media-allrecipes.com/userphotos/300x300/4519164.jpg',
        author: 'By John Chandler'
    }
];

db.Recipe
    .remove({})
    .then(() => db.Recipe.collection.insertMany(recipeSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
