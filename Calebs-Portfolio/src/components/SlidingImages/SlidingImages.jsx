import { useRef, useState, useEffect } from "react";
import "./SlidingImages.css";

export default function SlidingImages({ project }) {
  const [scrollPostition, setScrollPosition] = useState(1);
  const scrollLength = project.images.length;
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  function checkPosition() {
    if (scrollPostition === 1) {
      prevRef.current.disabled = true;
    } else if (scrollPostition === scrollLength) {
      nextRef.current.disabled = true;
    } else {
      nextRef.current.disabled = false;
      prevRef.current.disabled = false;
    }
  }

  function scroll(direction) {
    const newPosition = scrollPostition + direction;
    setScrollPosition(newPosition);
  }

  useEffect(() => {
    checkPosition();
  }, [scrollPostition]);

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <button
          className="slider__arrow slider__arrow_prev"
          ref={prevRef}
          onClick={scroll.bind(null, -1)}
        >
          &#10094;
        </button>
        <div className="slider__list">
          <img
            className="slider__image"
            src={project.images[scrollPostition - 1]}
            alt={project.project_name}
          />
        </div>
        <button
          className="slider__arrow slider__arrow_next"
          ref={nextRef}
          onClick={scroll.bind(null, 1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
