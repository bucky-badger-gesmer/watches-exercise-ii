import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { ConfigProvider, Input, theme } from "antd";

interface PriceProps {
  listPrice: string;
  setListPrice: React.Dispatch<React.SetStateAction<string>>;
}

const Price: React.FC<PriceProps> = ({
  listPrice,
  setListPrice,
}: PriceProps) => {
  //   const [price, setPrice] = useState<number>(0);

  const handleInput = (e: any) => {
    const newValue = e.target.value;
    if (newValue === "" || /^[0-9]+(\.[0-9]+)?$/.test(newValue)) {
      //   setPrice(newValue);
      const newListPrice = formatUSD(2.5 * newValue);
      setListPrice(newListPrice);
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
            <strong>{listPrice}</strong>
          </h3>
        </div>
      </IonItem>
    </IonCard>
  );
};

export default Price;
