import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { ConfigProvider, Input, theme } from "antd";

const Price: React.FC = () => {
  return (
    <IonCard style={{ width: "100%", height: 500 }}>
      <IonItem>
        <IonLabel>YOUR PROCEEDS</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Input suffix={<strong>USDC</strong>} />
        </ConfigProvider>
      </IonItem>
      <IonItem>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <IonLabel>LIST PRICE</IonLabel>
          <h3>18,250 USDC</h3>
        </div>
      </IonItem>
    </IonCard>
  );
};

export default Price;
