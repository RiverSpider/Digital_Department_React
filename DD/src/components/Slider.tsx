import { useState } from "react";
import Review from "./Review";
import './Slider.modules.css';

interface Review {
  ReviewH: string;
  ReviewText: string;
  ReviewName: string;
  ReviewW: string;
  Avatar: string;
}

const reviews: Review[] = [
  {
    ReviewH: "What our customer are saying",
    ReviewText:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    ReviewName: "Edward Newgate",
    ReviewW: "Founder Circle",
    Avatar: "src/assets/images/Avatar.png",
  },
  {
    ReviewH: "What our customer are saying",
    ReviewText: "One Piece is real",
    ReviewName: "Edward Newgate",
    ReviewW: "Founder Circle",
    Avatar: "src/assets/images/EdwardNewgate.jpg",
  },
  {
    ReviewH: "What our customer are saying",
    ReviewText: "I Drive (2016)",
    ReviewName: "RyanGosling",
    ReviewW: "Ken",
    Avatar: "src/assets/images/RyanGosling.jpg",
  },
  {
    ReviewH: "What our customer are saying",
    ReviewText: "789",
    ReviewName: "Edward Newgate",
    ReviewW: "Founder Circle",
    Avatar: "src/assets/images/Avatar.png",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index + 1);
    if (index > reviews.length - 1) {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    setIndex(index - 1);
    if (index < 0) {
      setIndex(reviews.length - 1);
    }
  };

  return (
    <div className="slider">
      <Review {...reviews[index]} />
      {index === 0 ? (
        <div className="arrowbackDis"  />
      ) : (
        <div className="arrowback" onClick={prevSlide} />
      )}
      {index === reviews.length - 1 ? (
        <div className="arrowforwardDis" />
      ) : (
        <div className="arrowforward" onClick={nextSlide} />
      )}
      <div className="sliderimg">
      </div>
    </div>
  );
}