import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { ConfigProvider, theme } from "antd";
import "./Details.css";

interface DetailsProps {
  setIncludes: React.Dispatch<React.SetStateAction<string>>;
  setProductionYear: React.Dispatch<React.SetStateAction<string>>;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
}

const Details: React.FC<DetailsProps> = ({
  setIncludes,
  setProductionYear,
  setCondition,
}: DetailsProps) => {
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
    setIncludes(e.target.value);
  };

  const handleProductionYearChange = (e: any) => {
    setProductionYear(e.target.value);
  };

  const handleConditionChange = (e: any) => {
    setCondition(e.target.value);
  };

  return (
    <IonCard style={{ width: "100%" }}>
      <IonItem>
        <IonLabel>INCLUDES</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <select
            style={{ display: "flex", width: "100%" }}
            onChange={handleIncludesChange}
          >
            {[
              { value: "", label: "" },
              { value: "Naked (N/A)", label: "Naked (N/A)" },
              { value: "Card (Papers)", label: "Card (Papers)" },
              { value: "Box", label: "Box" },
              {
                value: "Full Set - Card & Box",
                label: "Full Set - Card & Box",
              },
            ].map((o) => (
              <option value={o.value}>{o.label}</option>
            ))}
          </select>
        </ConfigProvider>
      </IonItem>
      <IonItem>
        <IonLabel>YEAR OF PRODUCTION</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <select
            style={{ display: "flex", width: "100%" }}
            onChange={handleProductionYearChange}
          >
            {[{ value: "", label: "" }, ...options].map((o) => (
              <option value={o.value}>{o.label}</option>
            ))}
          </select>
        </ConfigProvider>
      </IonItem>
      <IonItem>
        <IonLabel>CONDITION</IonLabel>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <select
            style={{ display: "flex", width: "100%" }}
            onChange={handleConditionChange}
          >
            {[
              { value: "", label: "" },
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
            ].map((o) => (
              <option value={o.value}>{o.label}</option>
            ))}
          </select>
        </ConfigProvider>
      </IonItem>
    </IonCard>
  );
};

export default Details;
