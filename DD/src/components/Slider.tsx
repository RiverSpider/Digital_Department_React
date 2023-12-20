import { useState } from "react";
import Review from "./Review";
import './Slider.modules.css';

interface Review {
  reviewH: string;
  reviewText: string;
  reviewName: string;
  reviewW: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    reviewH: "What our customer are saying",
    reviewText:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    reviewName: "Edward Newgate",
    reviewW: "Founder Circle",
    avatar: "src/assets/images/Avatar.png",
  },
  {
    reviewH: "What our customer are saying",
    reviewText: "One Piece is real",
    reviewName: "Edward Newgate",
    reviewW: "Founder Circle",
    avatar: "src/assets/images/EdwardNewgate.jpg",
  },
  {
    reviewH: "What our customer are saying",
    reviewText: "I Drive (2016)",
    reviewName: "RyanGosling",
    reviewW: "Ken",
    avatar: "src/assets/images/RyanGosling.jpg",
  },
  {
    reviewH: "What our customer are saying",
    reviewText: "789",
    reviewName: "Edward Newgate",
    reviewW: "Founder Circle",
    avatar: "src/assets/images/Avatar.png",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const sliderImages = ["sliderimg1", "sliderimg2", "sliderimg3", "sliderimg4",];

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

  const currentImageClassName = sliderImages[index % sliderImages.length];

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

      <div className={currentImageClassName}>
      </div>
    </div>
  );
}