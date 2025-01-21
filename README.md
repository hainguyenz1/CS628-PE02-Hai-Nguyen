# CS628-PE02-Hai-Nguyen
The program is a React-based movie list application that allows users to filter movies by genre and view details dynamically. It consists of two main components: App.js, which sets up the Material-UI theme and renders the MovieList.js component, and MovieList.js, which manages the movie list and user interactions.

- Input
The program takes a predefined list of movies as input, where each movie has three properties: * Title * Genre * Release Year.

Additionally, there is a dropdown menu for filtering movies by genre. By choosing a genre, the list of movies will be dynamically updated to show movies with the selected genre only.

User can also view a movie title alert by clicking in each movie card.

- Process
Upon initialization, the program loads a predefined list of movies, each containing a title, genre, and release year. A useState hook is used to store the currently selected genre, allowing dynamic filtering. The genre selection is handled using a dropdown (Select component), which updates the state upon user interaction. If "All Genres" is selected, all movies are displayed; otherwise, only movies matching the selected genre appear.

- Output
The program displays a list of movie cards, each containing the title, genre, and release year. When a genre is selected, only the relevant movies appear.
