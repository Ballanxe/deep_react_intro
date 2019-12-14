import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };
  static getDerivedStateFromProps({ media }) {
    // This is used to filter data of the request
    // We are getting just the large images
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    // return the piece of state you want to merge with current state
    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    })
  }

    render(){
        const { photos, active } = this.state;
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;