"use client"
import Image from 'next/image'

import './style.css'

import Header from './component/Header'
import Section from './component/Section'

export default function Home() {
  return (
    <>
    <Header/>
    <Section
      title="Model S"
      description="Order Online for Touchless Delivery"
      backgroundImg={"bg-[url(./assets/images/model-s.jpg)]"}
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model Y"
      description="Order Online for Touchless Delivery"
      backgroundImg={"bg-[url(./assets/images/model-y.jpg)]"}
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model 3"
      description="Order Online for Touchless Delivery"
      backgroundImg={"bg-[url(./assets/images/model-3.jpg)]"}
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model X"
      description="Order Online for Touchless Delivery"
      backgroundImg={"bg-[url(./assets/images/model-x.jpg)]"}
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      /> 
      <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      
      backgroundImg={"bg-[url(./assets/images/solar-panel.jpg)]"}
      leftBtnText="Order now"
      rightBtnText="Learn More"
      />
       <Section
      title="Solar for New Roofs"
      description="Solar Roof costs less than a new Roof"
      backgroundImg={"bg-[url(./assets/images/solar-roof.jpg)]"}
      leftBtnText="Order now"
      rightBtnText="Learn More"
      />
       <Section
      title="Accessories"
      description=""
      backgroundImg={"bg-[url(./assets/images/accessories.jpg)]"}
      leftBtnText=""
      rightBtnText="Shop Now"
      />
    
    </>
  )
}
