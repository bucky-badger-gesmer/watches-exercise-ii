import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { ConfigProvider, Input, theme } from "antd";
import { useState } from "react";

const Price: React.FC = () => {
  const [listPrice, setListPrice] = useState<number>(0);

  const handleInput = (e: any) => {
    const newValue = e.target.value;
    if (newValue === "" || /^[0-9]+(\.[0-9]+)?$/.test(newValue)) {
      setListPrice(newValue);
    }
  };

  const formatUSD = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      // You can add more options as needed
    }).format(amount);
  };

  return (
    <IonCard style={{ width: "100%", height: 500 }}>
      <IonItem>
        <IonLabel>YOUR PROCEEDS</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Input suffix={<strong>USDC</strong>} onChange={handleInput} />
        </ConfigProvider>
      </IonItem>
      <IonItem>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <IonLabel>LIST PRICE</IonLabel>
          <h3>
            <strong>{formatUSD(2.5 * listPrice)}</strong>
          </h3>
        </div>
      </IonItem>
    </IonCard>
  );
};

export default Price;
