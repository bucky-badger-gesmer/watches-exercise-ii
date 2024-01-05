import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import "./Photos.css";

const Photos: React.FC = () => {
  const [photo, setPhoto] = useState<string>();

  const takePicture = async () => {
    try {
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      setPhoto(cameraPhoto.webPath);
    } catch (error) {
      console.error("Error taking photo", error);
    }
  };

  return (
    <IonCard style={{ width: "100%" }}>
      <IonItem>
        <IonLabel>PHOTO TIPS</IonLabel>
        <ul>
          <li>Clean the watch thoroughly</li>
          <li>Capture all angles of the watch</li>
          <li>Capture photos in natural daylight or a lightbox</li>
        </ul>
      </IonItem>
      <IonItem>
        {/* <IonButton onClick={takePicture}>Take Photo</IonButton>
        {photo && <IonImg src={photo} />} */}
        <div className="square" onClick={takePicture}>
          <span className="icon">+</span>
        </div>
      </IonItem>
    </IonCard>
  );
};

export default Photos;
