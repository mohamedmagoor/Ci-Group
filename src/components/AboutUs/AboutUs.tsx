import React from 'react'
import styles from "./AboutUs.module.css"

export default function AboutUs() {
  return <>
  <div style={{paddingTop:'108px'}} className="about-us">
    <h3 className='ps-5 pt-4 text-center text-md-start' style={{fontSize:'50px',color:'#48AE9E',fontWeight:'700'}}>About Us</h3>
    <div className={styles.secLandPicContent}>
      <div className={styles.firstContent}>
      We are CI Group (Comprehensive International Group) with over 18 years of experience in general contracting and construction.

      </div>
      <p className={styles.largePg} style={{fontSize:'24px',fontWeight:'500',paddingInline:'40px',textTransform:'capitalize'}}>The General Manager of (CI) Group, Engineer Islam Adel graduated from Higher Technological Institute in 2002. He established this company in 2004 after careful study and with great ambition and<br></br> determination.<br></br>
Since 2004, our company is one of the largest companies in Egypt specialized in the design and <br></br> implementation of all general contracting works, as well as the supply and installation of all<br></br> requirements for villas, apartments, and private offices.<br></br>
CI Group is much more than a typical supplying or designing company. Our experts elevate the <br></br> experience of creation and implementation to higher levels that leave a perfect impression on all <br></br> visitors to your place.<br></br>
The planning and design must reflect attention to the details that will help create a sense of trust and<br></br> comfort.
</p>

    </div>
  </div>
  <div className="our-services">
    <div className="row">
      
      <div className="col-md-6 p-5">
        <h3 className='text-center text-md-start' style={{fontWeight:'900',fontSize:'50px'}}>Services</h3>
        <p style={{fontSize:'24px',fontWeight:'500',textTransform:'capitalize'}}>Many services that you need during the construction and renovation periods like:
A general contracting, including Plumping, Electricity, Partitions, Ceilings, Painting, Flooring, Gypsum Board, Doors, Windows, Lighting, Air conditioning, Decoration Accessory, Furniture, kitchens, dressing rooms...etc.
All work is done under the supervision of our architects to ensure we stick to quality and safety standards.</p>
      </div>
      <div className="col-md-6 p-5">
        <h3 className='text-center text-md-start' style={{fontWeight:'900',fontSize:'50px'}}>Why Do You Need Us?

</h3>
        <p style={{fontSize:'24px',fontWeight:'500',textTransform:'capitalize'}}>Many services that you need during the construction and renovation periods like:
A general contracting, including Plumping, Electricity, Partitions, Ceilings, Painting, Flooring, Gypsum Board, Doors, Windows, Lighting, Air conditioning, Decoration Accessory, Furniture, kitchens, dressing rooms...etc.
All work is done under the supervision of our architects to ensure we stick to quality and safety standards.</p>
      </div>
    </div>
  </div>
  
  
  </>
}
