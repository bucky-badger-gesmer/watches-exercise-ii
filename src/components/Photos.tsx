import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { IonCard, IonImg, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import "./Photos.css";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

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
        {photos.length > 0 &&
          photos.map((photo) => {
            return (
              <div className="squarePhoto">
                <IonImg src={photo.webviewPath} />
              </div>
            );
          })}
        <div className="square" onClick={takePicture}>
          <span className="icon">+</span>
        </div>
      </IonItem>
    </IonCard>
  );
};

export default Photos;
