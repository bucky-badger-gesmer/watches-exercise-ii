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
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, close, watch } from "ionicons/icons";
import { useHistory } from "react-router";
import "./ReviewListing.css";

const ReviewListing: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage style={{ justifyContent: "center", alignItems: "center" }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              onClick={() => {
                history.goBack();
              }}
            >
              <IonIcon slot="icon-only" icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }}>REVIEW LISTING</IonTitle>
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
              <IonRow>
                <div className="watchInfoContainer">
                  <div>
                    <p>YEAR</p>
                    <h2 style={{ color: "white", fontWeight: "bolder" }}>
                      2022
                    </h2>
                  </div>
                  <div>
                    <p>INCULDES</p>
                    <h2 style={{ color: "white", fontWeight: "bolder" }}>
                      Card/Papers & Box
                    </h2>
                  </div>
                  <div>
                    <p>CONDITION</p>
                    <h2 style={{ color: "white", fontWeight: "bolder" }}>
                      Unworn
                    </h2>
                  </div>
                </div>
              </IonRow>
              <IonRow>
                <div className="square">
                  <IonIcon icon={watch} />
                </div>
                <div className="square">
                  <IonIcon icon={watch} />
                </div>
                <div className="square">
                  <IonIcon icon={watch} />
                </div>
              </IonRow>
              <IonRow>
                <div>
                  <p>LIST PRICE</p>
                  <h2 style={{ color: "white" }}>
                    <strong>18,250 USDC</strong>
                  </h2>
                </div>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonLabel>
            By continuing, you agree to our listing{" "}
            <a style={{ color: "inherit", textDecoration: "underline" }}>
              Terms & Conditions
            </a>
            .
          </IonLabel>
          <IonButton color="light" style={{ width: "100%" }}>
            SUBMIT
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ReviewListing;
