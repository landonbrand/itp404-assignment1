// task 1

var reviewsData = {
  data: [
    {
      id: 1,
      attributes: {
        'review-title': 'Terrible!',
        'stars': 1,
        'cost': 'high'
      }
    },
    {
      id: 2,
      attributes: {
        'review-title': 'Decent place',
        'stars': 3,
        'cost': 'average'
      }
    },
    {
      id: 3,
      attributes: {
        'review-title': 'I would come again',
        'stars': 3.5,
        'cost': 'average'
      }
    },
    {
      id: 4,
      attributes: {
        'review-title': 'So good, and cheap!',
        'stars': 4,
        'cost': 'low-average'
      }
    },
    {
      id: 5,
      attributes: {
        'review-title': 'Good, but pricey!',
        'stars': 4,
        'cost': 'high'
      }
    }
  ]
};

function extractReviews(reviewData) {
  arr = reviewData.data
  var newArr = arr.map(function(old){
    var extracted = {
      id: old.id,
      title: old.attributes['review-title'],
      stars: old.attributes.stars,
      cost: old.attributes.cost
    };
    return extracted;
  });
  return newArr;
}

console.log(extractReviews(reviewsData));


// task 2


var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];

function findGoodReviews(reviews) {
  var filtered = reviews.filter(function(x){
    return x.title.toLowerCase().includes("good");
  });
  return filtered;
}

console.log(findGoodReviews(reviews));


// task 3


var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];

function classifyReviewsByCost(reviews) {
  var obj = {};
  var classified = reviews.map(el => el.cost).reduce(function(previousValue, currentValue, currentIndex, array){
    if(obj[currentValue] != null){
      obj[currentValue] += 1;
    } else{
      obj[currentValue] = 1;
    }
    return currentValue;
  }, 0);
  return obj;
}

console.log(classifyReviewsByCost(reviews));
