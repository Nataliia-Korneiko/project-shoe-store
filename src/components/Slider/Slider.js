import React from 'react';
import $ from 'jquery';
import photo01left from '../../img/slider/photo-01-left.jpg';
import photo01right from '../../img/slider/photo-01-right.jpg';
import photo02left from '../../img/slider/photo-02-left.jpg';
import photo02right from '../../img/slider/photo-02-right.jpg';
import photo03left from '../../img/slider/photo-03-left.jpg';
import photo03right from '../../img/slider/photo-03-right.jpg';
import photo04left from '../../img/slider/photo-04-left.jpg';
import photo04right from '../../img/slider/photo-04-right.jpg';
import photo05left from '../../img/slider/photo-05-left.jpg';
import photo05right from '../../img/slider/photo-05-right.jpg';

import './slider.css';

// --------------------Slider-------------------------------------

class Slider extends React.Component {
  state = {};

  componentDidMount() {
    let $slides;
    let interval;
    let $selectors;
    let $btns;
    let currentIndex;
    let nextIndex;
    const cycle = index => {
      let $currentSlide;
      let $nextSlide;
      let $currentSelector;
      let $nextSelector;
      nextIndex = index !== undefined ? index : nextIndex;
      $currentSlide = $($slides.get(currentIndex));
      $currentSelector = $($selectors.get(currentIndex));
      $nextSlide = $($slides.get(nextIndex));
      $nextSelector = $($selectors.get(nextIndex));
      $currentSlide.removeClass('active').css('z-index', '0');
      $nextSlide.addClass('active').css('z-index', '1');
      $currentSelector.removeClass('current');
      $nextSelector.addClass('current');
      currentIndex =
        index !== undefined
          ? nextIndex
          : currentIndex < $slides.length - 1
          ? currentIndex + 1
          : 0;

      nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
    };

    $(() => {
      currentIndex = 0;
      nextIndex = 1;

      $slides = $('.slide');
      $selectors = $('.selector');
      $btns = $('.btn');

      $slides.first().addClass('active');
      $selectors.first().addClass('current');

      interval = window.setInterval(cycle, 4000);

      $selectors.on('click', e => {
        const target = $selectors.index(e.target);
        if (target !== currentIndex) {
          window.clearInterval(interval);
          cycle(target);
          interval = window.setInterval(cycle, 4000);
        }
      });

      $btns.on('click', e => {
        window.clearInterval(interval);
        if ($(e.target).hasClass('prev')) {
          const target =
            currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
          cycle(target);
        } else if ($(e.target).hasClass('next')) {
          cycle();
        }
        interval = window.setInterval(cycle, 4000);
      });
    });
  }

  render() {
    return (
      <>
        <section className="slider__section">
          <div id="container" className="container">
            <ul id="slides">
              <li className="slide">
                <div className="slide__partial slide__left">
                  <img src={photo01left} />
                </div>
                <div className="slide__partial slide__right">
                  <img src={photo01right} />
                </div>
                <h1 className="title">
                  <span className="title__text">Nike</span>
                </h1>
              </li>
              <li className="slide">
                <div className="slide__partial slide__left">
                  <img src={photo02left} />
                </div>
                <div className="slide__partial slide__right">
                  <img src={photo02right} />
                </div>
                <h1 className="title">
                  <span className="title__text">Nike</span>
                </h1>
              </li>
              <li className="slide">
                <div className="slide__partial slide__left">
                  <img src={photo03left} />
                </div>
                <div className="slide__partial slide__right">
                  <img src={photo03right} />
                </div>
                <h1 className="title">
                  <span className="title__text">Nike</span>
                </h1>
              </li>
              <li className="slide">
                <div className="slide__partial slide__left">
                  <img src={photo04left} />
                </div>
                <div className="slide__partial slide__right">
                  <img src={photo04right} />
                </div>
                <h1 className="title">
                  <span className="title__text">Nike</span>
                </h1>
              </li>
              <li className="slide">
                <div className="slide__partial slide__left">
                  <img src={photo05left} />
                </div>
                <div className="slide__partial slide__right">
                  <img src={photo05right} />
                </div>
                <h1 className="title">
                  <span className="title__text">Nike</span>
                </h1>
              </li>
            </ul>
            <ul id="slide__select">
              <li className="btn prev">&#60;</li>
              <li className="selector" />
              <li className="selector" />
              <li className="selector" />
              <li className="selector" />
              <li className="selector" />
              <li className="btn next">&#62;</li>
            </ul>
            <div id="wrapper">
              <div id="share">
                <a
                  href="https://www.facebook.com/nike"
                  className="container twitter"
                >
                  <svg
                    preserveAspectRatio="xMinYMin meet"
                    viewBox="0 0 200 200"
                    className="circle"
                  >
                    <circle cx="100" cy="100" r="50" />
                  </svg>
                  <div className="social">
                    <i className="fa fa-facebook" />
                  </div>
                </a>
                <a
                  href="https://twitter.com/Nike"
                  className="container facebook"
                >
                  <svg
                    preserveAspectRatio="xMinYMin meet"
                    viewBox="0 0 200 200"
                    className="circle"
                  >
                    <circle cx="100" cy="100" r="50" />
                  </svg>
                  <div className="social">
                    <i className="fa fa-twitter" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/nike/?hl=ru"
                  className="container google"
                >
                  <svg
                    preserveAspectRatio="xMinYMin meet"
                    viewBox="0 0 200 200"
                    className="circle"
                  >
                    <circle cx="100" cy="100" r="50" />
                  </svg>
                  <div className="social">
                    <i className="fa fa-instagram" />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/user/nike?hl=ru"
                  className="container pinterest"
                >
                  <svg
                    preserveAspectRatio="xMinYMin meet"
                    viewBox="0 0 200 200"
                    className="circle"
                  >
                    <circle cx="100" cy="100" r="50" />
                  </svg>
                  <div className="social">
                    <i className="fa fa-youtube" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Slider;
