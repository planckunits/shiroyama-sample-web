import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export class ImageBox extends React.Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: 'img/shiroyama01.jpg',
        thumbnail: 'img/shiroyama01.jpg',
      },
      {
        original: 'img/shiroyama02.jpg',
        thumbnail: 'img/shiroyama02.jpg',
      },
      {
        original: 'img/shiroyama03.jpg',
        thumbnail: 'img/shiroyama03.jpg',
      },
    ]

    return (
      <div>
        <ImageGallery
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
        />
      </div>
    )
  }
}
