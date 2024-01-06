import { IonCard, IonItem, IonLabel } from "@ionic/react";
import { ConfigProvider, Select, theme } from "antd";

const CreateListing: React.FC = () => {
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

  return (
    <IonCard style={{ width: "100%" }}>
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
          />
        </ConfigProvider>
      </IonItem>
    </IonCard>
  );
};

export default CreateListing;
