import React, { useEffect } from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import OurCommitment from "../components/OurCommitment";

export default function HomePage() {
      useEffect(()=>{
          window.scrollTo({top:0,behavior:'smooth'});
          })
  return (
       <div>
        <Hero/>
        <WhyChooseUs/>
        <OurCommitment/>
        </div>
     
  );


}
