import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    //getDerivedStateFromProps does exactly what it sounds like: it allows you to accept data from a parent and get state that is derived from it. In this case, we're removing the superfluous photos and just keeping the ones we want.getDerivedStateFromProps does exactly what it sounds like: it allows you to accept data from a parent and get state that is derived from it. In this case, we're removing the superfluous photos and just keeping the ones we want.
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index // + takes a string and turns it to a number.This process is called Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on)
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
