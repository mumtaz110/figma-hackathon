import Header from "./components/Header";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import Newslater from "./components/Newslater"

export default function Home() {
  return (
    <div>
      <Header/>
      <NewArrivals/>
      <TopSelling/>
      <Newslater/>
      
    </div>
  );
}
