import React from "react";
import NavigationBar from "../navigation/NavigationBar";

const Movies = () => {
  // const [movies, setMovies] = React.useState([]);

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await (
  //         await fetch("https://api.sampleapis.com/movies/horror")
  //       ).json();

  //       setMovies(data);
  //     } catch (error) {
  //       alert(error?.message);
  //     }
  //   })();
  // }, []);

  // console.log(movies, "::::");

  return (
    <>
      <NavigationBar />
      <main>
        <h2>Movies</h2>
      </main>
    </>
  );
};

export default Movies;
