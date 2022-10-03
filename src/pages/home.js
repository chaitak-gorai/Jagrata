import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/footer";
import Header from "../components/header";
import GooglePlay from "../assets/images/google-play-logo.jpg";
import ApplePlay from "../assets/images/apple.png";
import First from "../assets/images/choose.jpg";
import Second from "../assets/images/happy.jpg";
import Third from "../assets/images/deli.jpg";
// import "../components/style.css"
import Mob1 from "../assets/images/mob1.png";
import Mob2 from "../assets/images/mob2.png";
import Mob3 from "../assets/images/mob3.png";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  return (
    <div className="Home">
      <Header />
      <Container fluid="sm">
        <div className="text-center">
          <h1 className="text-6xl text-center font-bold mb-4 pt-32">
            got deliver <br />
            everything you need.
          </h1>
          <h2 className="text-lg text-center font-bold">
            Register in our app , and get started in no time.
          </h2>
          <div className="flex justify-center py-12">
            <div className="w-60 h-32">      
              <Image className="w-20 h-16 mr-6" src={GooglePlay} />
              <Image className="w-20 h-16" size={20} src={ApplePlay} />
            </div>
          </div>
          <div className=" flex py-12 justify-center">
            <Image className="w-full h-auto lg:w-3/12 md:w-3/12" src={Mob2} />
            <Image className="w-full h-auto lg:w-3/12 md:w-3/12" src={Mob1} />
            <Image className="w-full h-auto lg:w-3/12 md:w-3/12" src={Mob3} />
          </div>
        </div>
        {/* <button className={`bg-[#3498db] p-[10px] text-[white] rounded-md hover:bg-[red] hover:text-[#3498db]`} onClick={()=>{changeDir(ROUTES.About)}}>Go To About</button> */}
      </Container>
      <section className="bg-image bg-cover bg-no-repeat bg-center bg-fixed py-40">
        <Container fluid="sm">
          <h2 className="text-6xl text-center font-bold mb-8 pt-12 text-white">Groceries</h2>
          <h3 className="text-xl text-center font-regular text-white w-6/12 m-auto pb-12 tracking-wide">
            Let go off your hectic grocery shopping. Now order groceries with us and save time with
            our quick delivery services.
          </h3>
        </Container>
      </section>
      <section className="bg-image1 bg-cover bg-no-repeat bg-center bg-fixed py-40">
        <Container fluid="sm">
          <h2 className="text-6xl text-center font-bold mb-8 pt-12 text-white">Medicines</h2>
          <h3 className="text-xl text-center font-regular text-white w-6/12 m-auto mb-2 tracking-wide">
            When you do not feel well.Order Medicines with quick delivery & hassle free experience.
          </h3>
          <p className="text-md text-center font-regular text-white w-6/12 m-auto pb-12 tracking-wide">
            (You can upload your prescription)
          </p>
        </Container>
      </section>
      <section className="bg-image2 bg-cover bg-no-repeat bg-center bg-fixed py-40">
        <Container fluid="sm">
          <h2 className="text-6xl text-center font-bold mb-8 pt-12 text-white">Food & Beverages</h2>
          <h3 className="text-xl text-center font-extralight text-white w-6/12 m-auto pb-12 tracking-wide">
            When you are Hungry, Do not Worryorder your favourite food with us.
          </h3>
        </Container>
      </section>
      <section className="bg-image3 bg-cover bg-no-repeat bg-center bg-fixed py-40">
        <Container fluid="sm">
          <h2 className="text-6xl text-center font-bold mb-8 pt-12 text-white">Pet Supplies</h2>
          <h3 className="text-xl text-center font-regular text-white w-6/12 m-auto pb-12 tracking-wide">
            Make your Pets Strong & Healthy
          </h3>
        </Container>
      </section>
      <section className="bg-image4 bg-cover bg-no-repeat bg-center bg-fixed py-40">
        <Container fluid="sm">
          <h2 className="text-6xl text-center font-bold mb-8 pt-12 text-white">Fish & Meat</h2>
          <h3 className="text-xl text-center font-regular text-white w-6/12 m-auto pb-12 tracking-wide">
            Have a Hygienic experience while ordering Meat. We will best quality Luscious Fish &
            Meat.
          </h3>
        </Container>
      </section>
      <section className="bg-image5 bg-cover bg-no-repeat bg-center bg-fixed py-40">
        <Container fluid="sm">
          <h2 className="text-6xl text-center font-bold mb-8 pt-12 text-white">Custom Delivery</h2>
          <h3 className="text-xl text-center font-regular text-white w-6/12 m-auto pb-12 tracking-wide">
            As a part of the Gravity Bites Services, Gravity Bites also gives you an option to avail
            the Pick Up and Drop Off Services being provided by our Delivery Partners.
          </h3>
        </Container>
      </section>
      <section className="pb-20 pt-6 bg-[#dddddd]">
        <Container fluid="sm">
          <div>
            <h3 className="text-2xl text-black-500 font-bold mb-4 text-center">
              Delivery Partner you can count on
            </h3>
          </div>
          <Row className="mt-24">
            <Col sm={4}>
              <div className="w-80  m-auto shadow-xl rounded-3xl mb-4 bg-[#f3f3f3]">
                <Image src={First} className="w-full h-72 rounded-t-3xl" alt="..." />
                <div className="px-4 py-8  text-center">
                  <h5 className="text-2xl text-black-500 font-bold mb-4 text-center">
                    Choose what you want
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="w-80 m-auto shadow-xl rounded-3xl  mb-4 scale-125 bg-[#f3f3f3]">
                <Image src={Second} className="w-full h-72 rounded-t-3xl" alt="..." />
                <div className="px-4 py-8  text-center">
                  <h5 className="text-2xl text-black-500 font-bold  mb-4 text-center">
                    See real-time updates
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="w-80  m-auto shadow-xl rounded-3xl  mb-4 bg-[#f3f3f3]">
                <Image src={Third} className="w-full h-72 rounded-t-3xl" alt="..." />
                <div className="px-4 py-8 text-center">
                  <h5 className="text-2xl text-black-500 font-bold  mb-4 text-center">
                    Get you items same-day
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-image6 bg-cover bg-no-repeat bg-center bg-fixed py-40">
        <Container fluid="sm">
          <h2 className="text-6xl text-center font-bold mb-8 pt-12 text-white">Store</h2>
          <h3 className="text-xl text-center font-regular text-white w-6/12 m-auto pb-12 tracking-wide">
            Get your product Delivered with minimum commission and get instant payments t&c applied.
          </h3>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
