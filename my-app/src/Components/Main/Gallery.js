import React from "react";
import PhotoAlbum from "react-photo-album";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {

  return (
    <div className="Gallery" id="Gallery">
      <h1>Gallery</h1>
      <PhotoAlbum />
      <Carousel>
        <div>
          <img src="src/images/dikaseva-8o4W9LZv6eo-unsplash.jpg" alt="" />
          <p className="legend">Photo 1</p>
        </div>
        <div>
          <img src="src/images/sven-V7WkmXntA8M-unsplash.jpg" alt="" />
          <p className="legend">Photo 2</p>
        </div>
        <div>
          <img src="src/images/wexor-tmg-L-2p8fapOA8-unsplash.jpg" alt="" />
          <p className="legend">Photo 3</p>
        </div>
      </Carousel>
    </div>
  );
}
 
export default Gallery;