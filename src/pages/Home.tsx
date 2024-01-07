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
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, close } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import "@ionic/react/css/ionic-swiper.css";
import { useRef, useState } from "react";
import "swiper/css";
import Photos, { UserPhoto } from "../components/Photos";
import Price from "../components/Price";
import Details from "./Details";
import "./Home.css";

const Home: React.FC = () => {
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);
  const [includes, setIncludes] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [condition, setCondition] = useState("");
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const [listPrice, setListPrice] = useState<string>("");

  const modal = useRef<HTMLIonModalElement>(null);

  const handleSlideChange = (swiper: any) => {
    const currentSlideIndex = swiper.realIndex;

    if (currentSlideIndex > prevSlideIndex) {
      console.log("Swiped Right", currentSlideIndex, prevSlideIndex);
    } else if (currentSlideIndex < prevSlideIndex) {
      console.log("Swiped Left", currentSlideIndex, prevSlideIndex);
    }

    setPrevSlideIndex(currentSlideIndex);
  };

  const takePicture = async () => {
    try {
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
      const fileName = Date.now() + ".jpeg";
      const newPhotos = [
        {
          filepath: fileName,
          webviewPath: cameraPhoto.webPath,
        },
        ...photos,
      ];
      setPhotos(newPhotos);
    } catch (error) {
      console.error("Error taking photo", error);
    }
  };

  console.log("POOPY", listPrice);

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
            <Details
              setIncludes={setIncludes}
              setProductionYear={setProductionYear}
              setCondition={setCondition}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Photos photos={photos} setPhotos={setPhotos} />
          </SwiperSlide>
          <SwiperSlide>
            <Price listPrice={listPrice} setListPrice={setListPrice} />
          </SwiperSlide>
        </Swiper>
        <IonModal
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={0.75}
          breakpoints={[0, 0.75]}
        >
          <div className="block">
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton>
                    <IonIcon slot="icon-only" icon={chevronBack} />
                  </IonButton>
                </IonButtons>
                <IonTitle style={{ textAlign: "center" }}>
                  REVIEW LISTING
                </IonTitle>
                <IonButtons slot="end">
                  <IonButton>
                    <IonIcon slot="icon-only" icon={close} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent>
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
                    <IonRow>
                      <IonCol size="12">
                        <div className="watchInfoContainer">
                          <div>
                            <p>YEAR</p>
                            <h3
                              style={{ color: "white", fontWeight: "bolder" }}
                            >
                              {productionYear}
                            </h3>
                          </div>
                          <div>
                            <p>INCULDES</p>
                            <h3
                              style={{ color: "white", fontWeight: "bolder" }}
                            >
                              {includes}
                            </h3>
                          </div>
                          <div>
                            <p>CONDITION</p>
                            <h3
                              style={{ color: "white", fontWeight: "bolder" }}
                            >
                              {condition}
                            </h3>
                          </div>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        {photos.length > 0 &&
                          photos.map((photo) => {
                            return (
                              <div className="squarePhoto">
                                <IonImg src={photo.webviewPath} />
                              </div>
                            );
                          })}
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 20,
                          }}
                        >
                          <IonLabel>LIST PRICE</IonLabel>
                          <h3 style={{ color: "white", fontWeight: "bolder" }}>
                            <strong>{listPrice}</strong>
                          </h3>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonContent>
            <IonButton
              style={{ width: "100%", marginTop: "auto" }}
              color="light"
            >
              SUBMIT
            </IonButton>
          </div>
        </IonModal>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            color="light"
            style={{ width: "100%" }}
            id="open-modal"
            disabled={
              includes === "" ||
              productionYear === "" ||
              condition === "" ||
              photos.length < 3 ||
              listPrice === ""
            }
          >
            NEXT
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
