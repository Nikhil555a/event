// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Things from './components/Things'
// import Hero from './components/Hero'
// import Newsletter from './components/NewsLetter'
// import Box from './components/Box'
// import OrganizersList from './components/OrganizersList'
// import PopularEvents from './components/PopularEvents'
// import Artish from './components/Artish'
// import Date from './components/Date'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       <Artish/>
//       <Date/>
//       <PopularEvents/>
//       <OrganizersList/>
//       <Box/>
//       <Things/>
//       <Newsletter/>
//       <Footer/>
//     </div>
//   )
// }

// export default App






// import Start from "./Start";

// import Categories from "./Categories";
// import ComedyEvents from "./ComedyEvents";
// import Navarti from "./Navarti";
// import Exhibitions from "./Exhibitions";
// import ExploreEvents from "./ExploreEvents";
// import Events from "./Events";

import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Artish from "./components/Artish";
import Navbar from "./components/Navbar";
import Date from "./components/Date";
import PopularEvents from "./components/PopularEvents";
import OrganizersList from "./components/OrganizersList";
import Box from "./components/Box";
import Things from "./components/Things";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import DiscoverEvent from "./components/DiscoverEvent";
import EventFilters from "./components/EventFilters";
import Categories from "./components/Categories";
import EventCurator from "./components/EventCurator";

export default function App() {
  return (
    <div>
      <Navbar/>
    <Wrapper>
    <Hero/>
    <Categories/>
      {/* <Start /> */}
      <Artish/>
      
      {/* <ComedyEvents /> */}
      {/* <Navarti /> */}
      {/* <Exhibitions /> */}
      {/* <ExploreEvents /> */}
      {/* <Events /> */}
      <EventCurator/>
      <Date/>
      <PopularEvents/>
     <OrganizersList/>
     <DiscoverEvent/>
     <Box/>
       <Things/>

  
    </Wrapper>
    <EventFilters/>
     <Newsletter/>
      <Footer/>

    </div>
    
  );
}
