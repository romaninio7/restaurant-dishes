import { IDishesList } from 'interfaces';
export const modalNode = document.querySelector('#modal');
export const getRandomDishURL = () => {
  const dishURLs = [
    'http://static.oprah.com/images/201302/orig/201302-orig-beautiful-chicken-600x411.jpg',
    'https://i.pinimg.com/564x/b4/09/33/b40933bf361ec47c1835cae89398275d.jpg',
    'https://dfperformance.net/wp-content/uploads/2018/02/salmon-dish-food-meal-46239-300x225.jpeg',
    'https://media-cdn.tripadvisor.com/media/photo-s/12/e9/62/e4/beautiful-chinese-dishes.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/14/2d/47/c6/the-content-of-the-royal.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/15/1c/31/04/how-tasty-this-loach.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/12/e9/63/59/be-adventurous-taste.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/15/47/b6/79/mixed-fruit-cocktail.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/12/e9/63/5e/the-most-tradional-food.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/15/d1/1a/44/seasonal-mixed-fruit.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/12/e9/62/88/we-offer-chinese-myanmar.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/15/47/b7/54/fried-fresh-mustard-leaves.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/15/47/b6/11/fried-pork-with-dry-chilli.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/8a/19/7d/banan-pancake-is-so-soft.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/8a/19/5e/chocolate-pancake-when.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/17/51/9d/46/pork-with-bamboo-shoot.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/12/e9/62/3b/cherry-brandy.jpg',
  ];
  return dishURLs[Math.floor(Math.random() * dishURLs.length)];
};

export const defaultDishesList: IDishesList[] = [
  {
    name: 'Chilli con carne',
    ingredients: [
      {
        name: 'Onion',
        weight: '100',
      },
      {
        name: 'pepper',
        weight: '35',
      },
      {
        name: 'garlic cloves',
        weight: '30',
      },
      {
        name: 'tomatoes',
        weight: '400',
      },
      {
        name: 'lean minced beef',
        weight: '400',
      },
      {
        name: 'red kidney beans',
        weight: '400',
      },
    ],
  },
  {
    name: 'Irish Spiced Beef',
    ingredients: [
      {
        name: 'fresh beef brisket',
        weight: '500',
      },
      {
        name: 'pepper',
        weight: '35',
      },
      {
        name: 'coarse sea salt',
        weight: '30',
      },
      {
        name: 'thyme',
        weight: '50',
      },
      {
        name: 'onion',
        weight: '200',
      },
      {
        name: 'dried rosemary, crushed',
        weight: '80',
      },
    ],
  },
  {
    name: 'Ultimate chocolate cake',
    ingredients: [
      {
        name: 'dark chocolate',
        weight: '200',
      },
      {
        name: 'plain flour',
        weight: '85',
      },
      {
        name: 'butter',
        weight: '200',
      },
      {
        name: 'golden caster sugar',
        weight: '200',
      },
      {
        name: 'buttermilk',
        weight: '75',
      },
      {
        name: 'cocoa powder',
        weight: '25',
      },
    ],
  },
  {
    name: 'Lemon drizzle cake',
    ingredients: [
      {
        name: 'unsalted butter, softened',
        weight: '225',
      },
      {
        name: 'caster sugar',
        weight: '225',
      },
      {
        name: 'eggs',
        weight: '300',
      },
      {
        name: 'self-raising flour',
        weight: '200',
      },
      {
        name: 'lemons juice',
        weight: '100',
      },
      {
        name: 'double cream',
        weight: '300',
      },
    ],
  },
  {
    name: 'Chilli con carne',
    ingredients: [
      {
        name: 'Onion',
        weight: '100',
      },
      {
        name: 'pepper',
        weight: '35',
      },
      {
        name: 'garlic cloves',
        weight: '30',
      },
      {
        name: 'tomatoes',
        weight: '400',
      },
      {
        name: 'lean minced beef',
        weight: '400',
      },
      {
        name: 'red kidney beans',
        weight: '400',
      },
    ],
  },
  {
    name: 'Irish Spiced Beef',
    ingredients: [
      {
        name: 'fresh beef brisket',
        weight: '500',
      },
      {
        name: 'pepper',
        weight: '35',
      },
      {
        name: 'coarse sea salt',
        weight: '30',
      },
      {
        name: 'thyme',
        weight: '50',
      },
      {
        name: 'onion',
        weight: '200',
      },
      {
        name: 'dried rosemary, crushed',
        weight: '80',
      },
    ],
  },
  {
    name: 'Ultimate chocolate cake',
    ingredients: [
      {
        name: 'dark chocolate',
        weight: '200',
      },
      {
        name: 'plain flour',
        weight: '85',
      },
      {
        name: 'butter',
        weight: '200',
      },
      {
        name: 'golden caster sugar',
        weight: '200',
      },
      {
        name: 'buttermilk',
        weight: '75',
      },
      {
        name: 'cocoa powder',
        weight: '25',
      },
    ],
  },
  {
    name: 'Lemon drizzle cake',
    ingredients: [
      {
        name: 'unsalted butter, softened',
        weight: '225',
      },
      {
        name: 'caster sugar',
        weight: '225',
      },
      {
        name: 'eggs',
        weight: '300',
      },
      {
        name: 'self-raising flour',
        weight: '200',
      },
      {
        name: 'lemons juice',
        weight: '100',
      },
      {
        name: 'double cream',
        weight: '300',
      },
    ],
  },
  {
    name: 'Chilli con carne',
    ingredients: [
      {
        name: 'Onion',
        weight: '100',
      },
      {
        name: 'pepper',
        weight: '35',
      },
      {
        name: 'garlic cloves',
        weight: '30',
      },
      {
        name: 'tomatoes',
        weight: '400',
      },
      {
        name: 'lean minced beef',
        weight: '400',
      },
      {
        name: 'red kidney beans',
        weight: '400',
      },
    ],
  },
  {
    name: 'Irish Spiced Beef',
    ingredients: [
      {
        name: 'fresh beef brisket',
        weight: '500',
      },
      {
        name: 'pepper',
        weight: '35',
      },
      {
        name: 'coarse sea salt',
        weight: '30',
      },
      {
        name: 'thyme',
        weight: '50',
      },
      {
        name: 'onion',
        weight: '200',
      },
      {
        name: 'dried rosemary, crushed',
        weight: '80',
      },
    ],
  },
  {
    name: 'Ultimate chocolate cake',
    ingredients: [
      {
        name: 'dark chocolate',
        weight: '200',
      },
      {
        name: 'plain flour',
        weight: '85',
      },
      {
        name: 'butter',
        weight: '200',
      },
      {
        name: 'golden caster sugar',
        weight: '200',
      },
      {
        name: 'buttermilk',
        weight: '75',
      },
      {
        name: 'cocoa powder',
        weight: '25',
      },
    ],
  },
  {
    name: 'Lemon drizzle cake',
    ingredients: [
      {
        name: 'unsalted butter, softened',
        weight: '225',
      },
      {
        name: 'caster sugar',
        weight: '225',
      },
      {
        name: 'eggs',
        weight: '300',
      },
      {
        name: 'self-raising flour',
        weight: '200',
      },
      {
        name: 'lemons juice',
        weight: '100',
      },
      {
        name: 'double cream',
        weight: '300',
      },
    ],
  },
];
