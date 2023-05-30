import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import TrendingTop from "./components/TrendingTop";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import TabCaro from "./components/TabCaro";
import Tre from "./components/Tre";
import TrendingBar from "./components/TrendingBar";

function index() {
  // const [carouselData, setCarouselData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/art") // Replace with your API endpoint
  //     .then((response) => {
  //       setCarouselData(response.data[0].Trending);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching carousel data:", error);
  //     });
  // }, []);

  let myJson = {
    art: [
      {
        video: [
          {
            id: "1",
            title: "Dream votrex",
            by: "rem_seen",
            items: "3,700",
            volume: "0.078 ETH",
          },
        ],
        Trending: [
          {
            id: "1",
            title: "open edition",
            floor: "0.42",
            image: "#",
            image2: "#",
            volume: "167 ETH",
          },
          {
            id: "2",
            title: "Creepy posters",
            floor: "0.17",
            image: "#",
            image2: "#",
            volume: "78 ETH",
          },
          {
            id: "3",
            title: "Pudgy Rods",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "45 ETH",
          },
          {
            id: "4",
            title: "Gemesis",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "76 ETH",
          },
          {
            id: "5",
            title: "Memo Angeles Presents",
            floor: "0.02",
            image: "#",
            image2: "#",
            volume: "98 ETH",
          },
          {
            id: "6",
            title: "terminal",
            floor: "0.142",
            image: "#",
            image2: "#",
            volume: "177 ETH",
          },
          {
            id: "7",
            title: "edition",
            floor: "0.472",
            image: "#",
            image2: "#",
            volume: "67 ETH",
          },
          {
            id: "8",
            title: "membership",
            floor: "2.42",
            image: "#",
            image2: "#",
            volume: "89 ETH",
          },
          {
            id: "9",
            title: "gaming",
            floor: "8.09",
            image: "#",
            image2: "#",
            volume: "47 ETH",
          },
          {
            id: "10",
            title: "lawless",
            floor: "0.52",
            image: "#",
            image2: "#",
            volume: "17 ETH",
          },
        ],
      },
    ],
    Gaming: [
      {
        video: [
          {
            id: "1",
            title: "Genesis",
            by: "Gorjnh34",
            items: "89,900",
            volume: "0.278 ETH",
          },
        ],
        Trending: [
          {
            id: "1",
            title: "open edition",
            floor: "0.42",
            image: "#",
            image2: "#",
            volume: "167 ETH",
          },
          {
            id: "2",
            title: "Creepy posters",
            floor: "0.17",
            image: "#",
            image2: "#",
            volume: "78 ETH",
          },
          {
            id: "3",
            title: "Pudgy Rods",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "45 ETH",
          },
          {
            id: "4",
            title: "Gemesis",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "76 ETH",
          },
          {
            id: "5",
            title: "Memo Angeles Presents",
            floor: "0.02",
            image: "#",
            image2: "#",
            volume: "98 ETH",
          },
          {
            id: "6",
            title: "terminal",
            floor: "0.142",
            image: "#",
            image2: "#",
            volume: "177 ETH",
          },
          {
            id: "7",
            title: "edition",
            floor: "0.472",
            image: "#",
            image2: "#",
            volume: "67 ETH",
          },
          {
            id: "8",
            title: "membership",
            floor: "2.42",
            image: "#",
            image2: "#",
            volume: "89 ETH",
          },
          {
            id: "9",
            title: "gaming",
            floor: "8.09",
            image: "#",
            image2: "#",
            volume: "47 ETH",
          },
          {
            id: "10",
            title: "lawless",
            floor: "0.52",
            image: "#",
            image2: "#",
            volume: "17 ETH",
          },
        ],
      },
    ],
    Membership: [
      {
        video: [
          {
            id: "1",
            title: "Agoria",
            by: "Art_ram",
            items: "10,768",
            volume: "1.078 ETH",
          },
        ],
        Trending: [
          {
            id: "1",
            title: "open edition",
            floor: "0.42",
            image: "#",
            image2: "#",
            volume: "167 ETH",
          },
          {
            id: "2",
            title: "Creepy posters",
            floor: "0.17",
            image: "#",
            image2: "#",
            volume: "78 ETH",
          },
          {
            id: "3",
            title: "Pudgy Rods",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "45 ETH",
          },
          {
            id: "4",
            title: "Gemesis",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "76 ETH",
          },
          {
            id: "5",
            title: "Memo Angeles Presents",
            floor: "0.02",
            image: "#",
            image2: "#",
            volume: "98 ETH",
          },
          {
            id: "6",
            title: "terminal",
            floor: "0.142",
            image: "#",
            image2: "#",
            volume: "177 ETH",
          },
          {
            id: "7",
            title: "edition",
            floor: "0.472",
            image: "#",
            image2: "#",
            volume: "67 ETH",
          },
          {
            id: "8",
            title: "membership",
            floor: "2.42",
            image: "#",
            image2: "#",
            volume: "89 ETH",
          },
          {
            id: "9",
            title: "gaming",
            floor: "8.09",
            image: "#",
            image2: "#",
            volume: "47 ETH",
          },
          {
            id: "10",
            title: "lawless",
            floor: "0.52",
            image: "#",
            image2: "#",
            volume: "17 ETH",
          },
        ],
      },
    ],
    PFPs: [
      {
        video: [
          {
            id: "1",
            title: "sam vol",
            by: "sammy",
            items: "986",
            volume: "0.3 ETH",
          },
        ],
        Trending: [
          {
            id: "1",
            title: "open edition",
            floor: "0.42",
            image: "#",
            image2: "#",
            volume: "167 ETH",
          },
          {
            id: "2",
            title: "Creepy posters",
            floor: "0.17",
            image: "#",
            image2: "#",
            volume: "78 ETH",
          },
          {
            id: "3",
            title: "Pudgy Rods",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "45 ETH",
          },
          {
            id: "4",
            title: "Gemesis",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "76 ETH",
          },
          {
            id: "5",
            title: "Memo Angeles Presents",
            floor: "0.02",
            image: "#",
            image2: "#",
            volume: "98 ETH",
          },
          {
            id: "6",
            title: "terminal",
            floor: "0.142",
            image: "#",
            image2: "#",
            volume: "177 ETH",
          },
          {
            id: "7",
            title: "edition",
            floor: "0.472",
            image: "#",
            image2: "#",
            volume: "67 ETH",
          },
          {
            id: "8",
            title: "membership",
            floor: "2.42",
            image: "#",
            image2: "#",
            volume: "89 ETH",
          },
          {
            id: "9",
            title: "gaming",
            floor: "8.09",
            image: "#",
            image2: "#",
            volume: "47 ETH",
          },
          {
            id: "10",
            title: "lawless",
            floor: "0.52",
            image: "#",
            image2: "#",
            volume: "17 ETH",
          },
        ],
      },
    ],
    Photography: [
      {
        video: [
          {
            id: "1",
            title: "kittens",
            by: "eliyaz",
            items: "5894",
            volume: "00.754 ETH",
          },
        ],
        Trending: [
          {
            id: "1",
            title: "open edition",
            floor: "0.42",
            image: "#",
            image2: "#",
            volume: "167 ETH",
          },
          {
            id: "2",
            title: "Creepy posters",
            floor: "0.17",
            image: "#",
            image2: "#",
            volume: "78 ETH",
          },
          {
            id: "3",
            title: "Pudgy Rods",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "45 ETH",
          },
          {
            id: "4",
            title: "Gemesis",
            floor: "0.03",
            image: "#",
            image2: "#",
            volume: "76 ETH",
          },
          {
            id: "5",
            title: "Memo Angeles Presents",
            floor: "0.02",
            image: "#",
            image2: "#",
            volume: "98 ETH",
          },
          {
            id: "6",
            title: "terminal",
            floor: "0.142",
            image: "#",
            image2: "#",
            volume: "177 ETH",
          },
          {
            id: "7",
            title: "edition",
            floor: "0.472",
            image: "#",
            image2: "#",
            volume: "67 ETH",
          },
          {
            id: "8",
            title: "membership",
            floor: "2.42",
            image: "#",
            image2: "#",
            volume: "89 ETH",
          },
          {
            id: "9",
            title: "gaming",
            floor: "8.09",
            image: "#",
            image2: "#",
            volume: "47 ETH",
          },
          {
            id: "10",
            title: "lawless",
            floor: "0.52",
            image: "#",
            image2: "#",
            volume: "17 ETH",
          },
        ],
      },
    ],
  };
  //   console.log("data", myJson?.art);
  return (
    <div>
      <section className="flex flex-col">
        <NavBar />
        <div className="px-5 py-5 mx-5 my-4">
          <Tabs />
        </div>

        {/* <TabCaro /> */}
        <div className="px-5 py-5 mx-5 my-4">
          <TrendingBar />
          <TrendingTop />

          <Collections />
          <Tre />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default index;
