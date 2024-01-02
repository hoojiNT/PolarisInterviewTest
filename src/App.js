import logo from "./logo.svg";
import "@shopify/polaris/build/esm/styles.css";
import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Page,
  LegacyCard,
  Button,
  Layout,
  FormLayout,
  TextField,
  Card,
  Icon,
  Divider,
} from "@shopify/polaris";
import { CirclePlusMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import Option from "./Option";
import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  const [opts, setOpts] = useState([]);
  const [campaign, setCampaign] = useState("");
  const [des, setDes] = useState("");
  const [title, setTitle] = useState("");

  const addHandler = () => {
    let newOpt = {
      title: "",
      subTitle: "",
      label: "",
      quantity: 0,
      discountType: "none",
    };
    setOpts([...opts, newOpt]);
  };

  const { handleSubmit, control, register } = useForm({
    mode: "onChange",
  });
  return (
    <div className="App">
      <AppProvider i18n={enTranslations}>
        <Page title="Create volumn discount">
          <Layout>
            <Layout.Section>
              <LegacyCard title="General">
                <FormLayout>
                  <div className="px-4 pb-4">
                    <TextField
                      label="Campaign"
                      onChange={setCampaign}
                      placeholder=""
                      autoComplete="off"
                      value={campaign}
                    />
                    <TextField
                      label="Title"
                      onChange={(e) => setTitle(e)}
                      autoComplete="off"
                      value={title}
                    />
                    <TextField
                      label="Description"
                      onChange={setDes}
                      autoComplete="off"
                      value={des}
                    />
                  </div>
                </FormLayout>
              </LegacyCard>
            </Layout.Section>

            <Layout.Section variant="oneThird">
              <LegacyCard title="Preview" sectioned>
                <p className="">Buy more and save</p>
              </LegacyCard>
            </Layout.Section>
            <Layout.Section>
              <LegacyCard title="Volumn discount rule">
                {opts.forEach((opt, idx) => (
                  <Option {...opt} key={idx} {...register(`opt.${idx}`)} />
                ))}
                <div className="px-4 pb-4">
                  <Divider />
                  <Button
                    icon={<Icon source={CirclePlusMinor} />}
                    onClick={addHandler}
                    fullWidth
                  ></Button>
                </div>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </Page>
      </AppProvider>
    </div>
  );
}

export default App;
