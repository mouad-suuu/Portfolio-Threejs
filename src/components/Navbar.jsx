import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles'; 
import { navlinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      
      {/* The <nav> element represents the navigation bar. */}
      {/* className attribute dynamically applies CSS classes based on external styles and conditions. */}
      {/* ${styles.paddingX} adds horizontal padding defined in an external stylesheet. */}
      {/* w-full ensures the element spans the full width of its container. */}
      {/* flex allows for flexible layout and alignment of child elements. */}
      {/* items-center centers child elements vertically within the flex container. */}
      {/* py-5 provides padding on the top and bottom sides. */}
      {/* fixed positions the element relative to the viewport. */}
      {/* top-0 fixes the element to the top of the viewport. */}
      {/* z-20 sets the stack order of the element relative to other elements. */}
      {/* bg-primary applies the primary background color defined in an external stylesheet. */}
    </nav>
  );
};

export default Navbar;
