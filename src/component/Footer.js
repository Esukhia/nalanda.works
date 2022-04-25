import React from 'react'
import {prayer} from '../helper/prayerMarquee'

function Footer() {
  return (
    <footer style={{ zIndex: 999 }}>
      <marquee>{prayer}</marquee>
    </footer>
  );
}

export default Footer