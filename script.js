const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[a] = b; //Добавляем ключ + значение в обект
personalMovieDB.movies[c] = d; //Добавляем ключ + значение в обект

console.log(personalMovieDB);
