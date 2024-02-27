import React from 'react'
import { Parallax } from 'react-parallax'
import Header from './Header'


function Home() {
  return (
    <div>
      <div className='parallax'>
      <Parallax strength={800} bgImage='src/assets/mountain.jpg'>
            <div className="content">
              {/* <div className="text-content">Parallax</div> */}
            </div>
      </Parallax>
    </div>
      <div class="taaj-palace-info">
  <h2>EXPERIENCE LUXURY, EXPERIENCE TAAJ PALACE</h2>
  <p>Best banquet in Kathmandu</p>
  <p>Located at Golfutar Main Rd (1.8 km northeast from Narayan Gopal Chowk on the way to Budhanilkantha Temple), Taaj Palace Banquet & Event Venue is the ideal location for all events in Kathmandu, from intimate ceremonies to lavish receptions.</p>
  <p>Our unmatched, neoclassical-architecture-inspired, venue features a number of amenities that separates it from others. The venue offers spacious 10k sqft indoor function rooms, and 12k sqft of outdoor space for weddings, meetings, conferences, product launches, concerts, and celebratory functions.</p>
</div><br /><br />
    

<br />
<div>
  <h1>LOCATION OF OUR BANQUET</h1>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.895763370767!2d85.22172097520516!3d27.689616376192816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb239011ef4015%3A0x6368f7462e64debb!2sGreen%20Land%20Banquet!5e0!3m2!1sen!2snp!4v1707991793665!5m2!1sen!2snp" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

    </div>
  )
}

export default Home
