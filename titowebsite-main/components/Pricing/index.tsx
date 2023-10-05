"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Fade from 'react-reveal/Fade';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-36 md:py-40 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Des tarifs Simples et abordables"
          paragraph="Nous mettons à votre disposition des tarifs simple et abordable pour vous permettre de réaliser vos projets."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <Fade left>
            <PricingBox
                packageName="Montage youtube"
                price="350"
                link="youtube"
                duration={isMonthly ? "mo" : "yr"}
                subtitle="Livraison en 72h."
            >
              <OfferList text=" Un chef de projet " status="active" />
              <OfferList text=" 6O minutes de rush inclus " status="active" />
              <OfferList text=" Derush" status="active" />
              <OfferList text=" étalonnage " status="active" />
              <OfferList text=" sous-titrage " status="active" />
              <OfferList text=" Habillage " status="active" />
              <OfferList text=" Effet fx" status="active" />
            </PricingBox>


            <PricingBox
                packageName="Production vidéo"
                price="600"
                link="premium"
                duration={isMonthly ? "mo" : "yr"}
                subtitle="Livraison en 7 jours"
            >
              <OfferList text=" Un chef de projet " status="active" />
              <OfferList text=" captation video à partie de 2H de présence  " status="active" />
              <OfferList text=" post production  " status="active" />
            </PricingBox>

          <PricingBox
            packageName="Pack Event"
            link="short"
            price="2000"
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Livraison en 7 jours"
          >
            <OfferList text="Un chef de projet" status="active" />
            <OfferList text="captation photographique à partir de 2H de présence " status="active" />
            <OfferList text="post production des photos " status="active" />
          </PricingBox>






          </Fade>



        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>




  );
};

export default Pricing;
