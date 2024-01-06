import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, close } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "@ionic/react/css/ionic-swiper.css";
import { useState } from "react";
import { useHistory } from "react-router";
import "swiper/css";
import Photos from "../components/Photos";
import Price from "../components/Price";
import CreateListing from "./CreateListing";
import "./Home.css";

const Home: React.FC = () => {
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);
  const history = useHistory();

  const handleSlideChange = (swiper: any) => {
    const currentSlideIndex = swiper.realIndex;

    if (currentSlideIndex > prevSlideIndex) {
      console.log("Swiped Right", currentSlideIndex, prevSlideIndex);
    } else if (currentSlideIndex < prevSlideIndex) {
      console.log("Swiped Left", currentSlideIndex, prevSlideIndex);
    }

    setPrevSlideIndex(currentSlideIndex);
  };

  return (
    <IonPage style={{ justifyContent: "center", alignItems: "center" }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }}>CREATE LISTING</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ maxWidth: "740px" }}>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonImg src="https://cdn.watches.io/content/watch_images/606aba7a-a1f2-4c67-896b-4efa00cca11c" />
                </IonCol>
                <IonCol size="6">
                  <div style={{ color: "white" }}>
                    <p>Audemars Piguet</p>
                    <h2>
                      <strong>Royal Oak 'Jumbo' Extra-Thin</strong>
                    </h2>
                    <h3>
                      <strong>15202BA.OO.1240BA.01</strong>
                    </h3>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <ul className="tabs">
          <li
            style={{
              textDecoration: prevSlideIndex === 0 ? "underline" : "none",
            }}
          >
            DETAILS
          </li>
          <li
            style={{
              textDecoration: prevSlideIndex === 1 ? "underline" : "none",
            }}
          >
            PHOTOS
          </li>
          <li
            style={{
              textDecoration: prevSlideIndex === 2 ? "underline" : "none",
            }}
          >
            PRICE
          </li>
        </ul>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <CreateListing />
          </SwiperSlide>
          <SwiperSlide>
            <Photos />
          </SwiperSlide>
          <SwiperSlide>
            <Price />
          </SwiperSlide>
        </Swiper>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            color="light"
            style={{ width: "100%" }}
            onClick={() => {
              history.push("/review");
            }}
          >
            NEXT
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
