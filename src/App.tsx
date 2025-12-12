import Hero from './components/Hero';
import Manifest from './components/Manifest';
import Product from './components/Product';
import InSitu from './components/InSitu';
import Partners from './components/Partners';
import Contacts from './components/Contacts';

// Import Assets (We will place them in src/assets next step)
import heroImg from './assets/buddha_head_hero.jpg';
import textureImg from './assets/concrete_texture_macro.png';

// Carousel Images
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.JPG';
import img4 from './assets/4.JPG';
// Vertical Interior
import v1 from './assets/1.1.jpg';
import v2 from './assets/1.2.webp';
import v3 from './assets/1.3.webp';
import v4 from './assets/1.4.webp';

// Horizontal Interior
import h1 from './assets/2.1.jpg';
import h2 from './assets/2.2.PNG';
import h3 from './assets/2.3.PNG';
import h4 from './assets/2.4.PNG';
import h5 from './assets/2.5.PNG';

function App() {
  return (
    <main className="bg-[#121212] min-h-screen text-white overflow-hidden relative">
      <div className="texture-overlay fixed inset-0 z-50 pointer-events-none mix-blend-overlay"></div>
      <Hero imageSrc={heroImg} />
      <Manifest textureSrc={textureImg} />
      <Product productImages={[img1, img2, img3, img4]} />
      <InSitu
        verticalImages={[v1, v2, v3, v4]}
        horizontalImages={[h1, h2, h3, h4, h5]}
      />
      <Partners />
      <Contacts />
    </main>
  );
}

export default App;
