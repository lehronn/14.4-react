//stworzenie klasy filmu, Movie. Przypisujemy pola obiektów z tablicy do poszczególnych
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {
          title: this.props.movie.title
        }),
        React.createElement(MovieDesc, {
          desc: this.props.movie.desc
        }),
        React.createElement('img', {
          src: this.props.movie.poster
        })
      )
    )
  }
});

//stworzenie tablicy z obiektami zawierającymi informacje o filmach.
var movies = [{
    id: 0,
    title: 'Król Lew',
    desc: 'Film o królu sawanny.',
    poster: 'http://1.fwcdn.pl/po/68/78/6878/7389475.3.jpg'
  },
  {
    id: 1,
    title: 'Pulp Fiction',
    desc: 'Film o prawdziwych królach sawanny.',
    poster: 'http://1.fwcdn.pl/po/10/39/1039/7517880.3.jpg'
  },
  {
    id: 2,
    title: 'Hateful Eight',
    desc: 'Film o tym, jak to było w kolebce wolności i demokracji. Część II.',
    poster: 'http://1.fwcdn.pl/po/41/92/714192/7715662.3.jpg'
  },
  {
    id: 3,
    title: 'Django',
    desc: 'Film o tym, jak to było w kolebce wolności i demokracji. Część I.',
    poster: 'http://1.fwcdn.pl/po/05/41/620541/7517014.3.jpg'
  }
];

//tworzenie poszczególnych komponentów.
var MovieTitle = React.createClass({
  propTypes:{
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
    render: function() {
      return (
        React.createElement('h3', {}, this.props.desc)
      )
    }
});

//mapujemy każdy kolejny obiekt z tablicy movies. przypisujemy pole z id do parametru key i tak jak klasa definiuje obiekty z tablicy movie (na wejściu funkcji zwane) do movie (klasa).
var moviesElements = movies.map(function(movie) {
  return (
    React.createElement(Movie, {key: movie.id, movie: movie})
  )
});

//MovieList składa się z elementów listy
var MovieList = React.createClass({
  render: function() {
    return (
      React.createElement('ul', {}, moviesElements)
    )
  }
});

//tworzymy div z h1 i MovieList.
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
  );

//renderowanie element do diva app.
ReactDOM.render(element, document.getElementById('app'));
