# 3D Portfolio for ALX

This project is a 3D portfolio created using Three.js, CSS, and Tailwind CSS. It showcases your work in a visually engaging 3D environment.

## Features

- **Three.js Integration**: Utilizes the power of Three.js to create immersive 3D scenes.
- **Responsive Design**: Built with responsive design principles to ensure compatibility across various devices.
- **Tailwind CSS Styling**: Styled using Tailwind CSS for efficient and flexible styling.
- **Easy Customization**: Easily customize and add your own projects to the portfolio.

## Installation

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:

`bash`
npm install @react-three/fiber @react-tree/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

1. Start the development server:

npm start

2. Open your browser and navigate to `http://localhost:3000` to view the portfolio.

3. Customize the portfolio by adding your own projects. Refer to the documentation for Three.js, CSS, and Tailwind CSS for guidance.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.



## the structure
```
└── 📁project_3D_developer_portfolio-main
    └── .gitignore
    └── index.html
    └── package-lock.json
    └── package.json
    └── postcss.config.cjs
    └── 📁public
        └── 📁desktop_pc
            └── license.txt
            └── scene.bin
            └── scene.gltf
            └── 📁textures
                └── Material.002_baseColor.png
                └── Material.023_baseColor.jpeg
                └── Material.024_baseColor.jpeg
                └── Material.074_0_baseColor.png
                └── Material.074_10_baseColor.jpeg
                └── Material.074_11_baseColor.png
                └── Material.074_12_baseColor.jpeg
                └── Material.074_13_baseColor.png
                └── Material.074_14_baseColor.png
                └── Material.074_15_baseColor.png
                └── Material.074_16_baseColor.png
                └── Material.074_17_baseColor.png
                └── Material.074_18_baseColor.png
                └── Material.074_18_emissive.png
                └── Material.074_19_baseColor.png
                └── Material.074_1_baseColor.jpeg
                └── Material.074_20_baseColor.png
                └── Material.074_21_baseColor.png
                └── Material.074_22_baseColor.png
                └── Material.074_23_baseColor.png
                └── Material.074_24_baseColor.png
                └── Material.074_24_emissive.png
                └── Material.074_25_baseColor.jpeg
                └── Material.074_26_baseColor.png
                └── Material.074_27_baseColor.png
                └── Material.074_27_emissive.png
                └── Material.074_28_baseColor.png
                └── Material.074_29_baseColor.png
                └── Material.074_2_baseColor.jpeg
                └── Material.074_30_baseColor.png
                └── Material.074_31_baseColor.png
                └── Material.074_32_baseColor.jpeg
                └── Material.074_33_baseColor.png
                └── Material.074_34_baseColor.jpeg
                └── Material.074_35_baseColor.png
                └── Material.074_36_baseColor.jpeg
                └── Material.074_39_baseColor.jpeg
                └── Material.074_3_baseColor.png
                └── Material.074_40_baseColor.png
                └── Material.074_4_baseColor.png
                └── Material.074_4_emissive.png
                └── Material.074_5_baseColor.png
                └── Material.074_6_baseColor.png
                └── Material.074_7_baseColor.png
                └── Material.074_8_baseColor.png
                └── Material.074_9_baseColor.png
                └── Material.074_9_emissive.png
                └── Material.074_baseColor.png
                └── Material_baseColor.jpeg
                └── Material_metallicRoughness.png
                └── Tasten_2_baseColor.jpeg
        └── logo.svg
        └── 📁planet
            └── license.txt
            └── scene.bin
            └── scene.gltf
            └── 📁textures
                └── Clouds_baseColor.png
                └── Planet_baseColor.png
    └── README.md
    └── 📁src
        └── App.jsx
        └── 📁assets
            └── backend.png
            └── carrent.png
            └── close.svg
            └── 📁company
                └── meta.png
                └── shopify.png
                └── starbucks.png
                └── tesla.png
            └── creator.png
            └── github.png
            └── herobg.png
            └── index.js
            └── jobit.png
            └── logo.svg
            └── menu.svg
            └── mobile.png
            └── 📁tech
                └── css.png
                └── docker.png
                └── figma.png
                └── git.png
                └── html.png
                └── javascript.png
                └── mongodb.png
                └── nodejs.png
                └── reactjs.png
                └── redux.png
                └── tailwind.png
                └── threejs.svg
                └── typescript.png
            └── tripguide.png
            └── web.png
        └── 📁components
            └── About.jsx
            └── 📁canvas
                └── Ball.jsx
                └── Computers.jsx
                └── Earth.jsx
                └── index.js
                └── Stars.jsx
            └── Contact.jsx
            └── Experience.jsx
            └── Feedbacks.jsx
            └── Hero.jsx
            └── index.js
            └── Loader.jsx-
            └── Navbar.jsx
            └── Tech.jsx
            └── Works.jsx
        └── 📁constants
            └── index.js
        └── 📁hoc
            └── index.js
            └── SectionWrapper.jsx
        └── index.css
        └── main.jsx
        └── styles.js
        └── 📁utils
            └── motion.js
    └── tailwind.config.cjs
    └── vite.config.js
```
# end of readme file and start of a super detailed explanation of code

## component code example
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


