// 1. Import *useState* and *useEffect* 


import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  // Detta är js eller ts land
  // 2. Create our *dogImage* variable as well aas the *setDogImage* function via *useState*
  // We'er setting the default value of image to null, so that while we wait for the fetch to complete, 
  // we don't attemt to render the image.

  let [dogImage, setDogImage] = useState(null);

  // 3. Create useEffect function. This handle our side effect, in this case fetching data from our API.
  useEffect(() => {
    // Fetching one dogImage
    //fetch("https://dog.ceo/api/breeds/image/random")
    // Fetching many dogs
    fetch("https://dog.ceo/api/breeds/image/random/18")
      .then((Response) => Response.json())
      // 4. Setting *dogImage* to the url that we recived from the responce above.
      .then((data) => setDogImage(data.message));

  }, []);


  // End js/ts-land
  return (
    // Detta är jsx-land
    <div className="App">
      {/* 5. Using *dogImage as the src for our image */}
      {/*dogImage && <img src={dogImage}></img>*/}

      {/* 6. Using dogImage as the src for our image and map() our dogs into img-tag */}
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))}
    </div>

    // End jsx-land
  );

}

export default App
