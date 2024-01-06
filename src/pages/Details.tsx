import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { ConfigProvider, Select, theme } from "antd";
import { useState } from "react";
import "./Details.css";

const CreateListing: React.FC = () => {
  const [includes, setIncludes] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [condition, setCondition] = useState("");

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }

  const options = years.map((year) => {
    return {
      value: JSON.stringify(year),
      label: JSON.stringify(year),
    };
  });

  options.unshift({
    value: "Unknown",
    label: "Unknown",
  });

  const handleIncludesChange = (e: any) => {
    setIncludes(e);
  };

  const handleProductionYearChange = (e: any) => {
    setProductionYear(e);
  };

  const handleConditionChange = (e: any) => {
    setCondition(e);
  };

  return (
    <IonCard style={{ width: "100%", height: 500 }}>
      <IonItem>
        <IonLabel>INCLUDES</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Select
            style={{ width: "100%" }}
            options={[
              { value: "Naked (N/A)", label: "Naked (N/A)" },
              { value: "Card (Papers)", label: "Card (Papers)" },
              { value: "Box", label: "Box" },
              {
                value: "Full Set - Card & Box",
                label: "Full Set - Card & Box",
              },
            ]}
            onChange={handleIncludesChange}
            value={includes}
          />
        </ConfigProvider>
      </IonItem>
      <IonItem>
        <IonLabel>YEAR OF PRODUCTION</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Select
            style={{ width: "100%" }}
            defaultValue={"Unknown"}
            options={options}
            onChange={handleProductionYearChange}
            value={productionYear}
          />
        </ConfigProvider>
      </IonItem>
      <IonItem>
        <IonLabel>CONDITION</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Select
            style={{ width: "100%" }}
            defaultValue={"Unknown"}
            options={[
              {
                value: "Unworn",
                label: "Unworn",
              },
              {
                value: "Pre-Owned (Like New)",
                label: "Pre-Owned (Like New)",
              },
              {
                value: "Pre-Owned (Used)",
                label: "Pre-Owned (Used)",
              },
            ]}
            onChange={handleConditionChange}
            value={condition}
          />
        </ConfigProvider>
      </IonItem>
    </IonCard>
  );
};

export default CreateListing;
