
// import react from "react"
// import Wrapper from "./components/Wrapper";
// import Hero from "./components/Hero";
// import Artish from "./components/Artish";
// import Navbar from "./components/Navbar";
// import Date from "./components/Date";
// import PopularEvents from "./components/PopularEvents";
// import OrganizersList from "./components/OrganizersList";
// import Box from "./components/Box";
// import Things from "./components/Things";
// import Newsletter from "./components/NewsLetter";
// import Footer from "./components/Footer";
// import DiscoverEvent from "./components/DiscoverEvent";
// import EventFilters from "./components/EventFilters";
// import Categories from "./components/Categories";
// import EventCurator from "./components/EventCurator";

// export default function App() {
//   return (
//     <div>
//       <Navbar/>
//     <Wrapper>
//     <Hero/>
//     <Categories/>
//       {/* <Start /> */}
//       <Artish/>
      
//       {/* <ComedyEvents /> */}
//       {/* <Navarti /> */}
//       {/* <Exhibitions /> */}
//       {/* <ExploreEvents /> */}
//       {/* <Events /> */}
//       <EventCurator/>
//       <Date/>
//       <PopularEvents/>
//      <OrganizersList/>
//      <DiscoverEvent/>
//      <Box/>
//        <Things/>

  
//     </Wrapper>
//     <EventFilters/>
//      <Newsletter/>
//       <Footer/>

//     </div>
    
//   );
// }





import react from "react"
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Artish from "./components/Artish";
import Navbar from "./components/Navbar";
import Date from "./components/Date";
import PopularEvents from "./components/PopularEvents";
import OrganizersList from "./components/OrganizersList";
import Box from "./components/Box";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import DiscoverEvent from "./components/DiscoverEvent";
import EventFilters from "./components/EventFilters";
import Categories from "./components/Categories";
import EventCurator from "./components/EventCurator";

export default function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Hero />
        <Categories />
        <Artish />
        <EventCurator />
        <Date />
        <PopularEvents />
        <Box />
        <OrganizersList />
      </Wrapper>
      <DiscoverEvent />
      <EventFilters />
      <Newsletter />
      <Footer />

    </div>

  );
}


