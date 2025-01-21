import React, { useState } from "react";
import { 
  Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, Grid, Container 
} from "@mui/material";

const MovieList = () => {
    const movies = [
        { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
        { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
        { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
        { title: "The Godfather Part II", genre: "Crime", releaseYear: 1974 },
        { title: "12 Angry Men", genre: "Drama", releaseYear: 1957 },
        { title: "Schindler's List", genre: "Biography", releaseYear: 1993 },
        { title: "The Lord of the Rings: The Return of the King", genre: "Fantasy", releaseYear: 2003 },
        { title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 },
        { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy", releaseYear: 2001 },
    ];
    
  const genres = ["All Genres", ...new Set(movies.map(movie => movie.genre))];
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const filteredMovies = selectedGenre === "All Genres"
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`Movie: ${title}`);
  };

  return (
    <Container maxWidth="md" sx={{ padding: "30px", textAlign: "center", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: "bold", color: "#333" }}>
        Movie List
      </Typography>

      {/* Genre Filter Dropdown */}
      <FormControl sx={{ minWidth: 250, marginBottom: 4, backgroundColor: "white", borderRadius: "5px" }}>
        <InputLabel>Filter by Genre</InputLabel>
        <Select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <MenuItem key={index} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Display Movies in 3 Columns */}
      <Grid container spacing={3} justifyContent="center">
        {filteredMovies.map((movie, index) => (
          <Grid item key={index} xs={12} sm={4} md={4}>
            <Card 
              sx={{
                maxWidth: 300, 
                cursor: "pointer",
                boxShadow: 3, 
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                backgroundColor: "white",
                borderRadius: "10px"
              }}
              onClick={() => handleMovieClick(movie.title)}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{movie.title}</Typography>
                <Typography color="textSecondary">{movie.genre}</Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>{movie.releaseYear}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;