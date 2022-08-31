const movies = {
    movieName: 'Queens Gambit',
    category: 'drama'
};
console.log(typeof movies);
console.log(Object.keys(movies))
console.log(Object.values(movies))
console.log(Object.entries(movies))
movies.category

const {category, rating} = movies;
const [firstrating, secondrating,fourthrating] = movies.ratings
console.log(category);
console.log(firstrating);
console.log(fourthrating)
console.log(9 == '9');

// function functionName() {
//     let parameterName = 'Hello';
//     let integer = 3;
//     console.log(parameterName[0]);
//     console.log(typeof integer);
// }
// functionName();