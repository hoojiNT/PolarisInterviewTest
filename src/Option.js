import {
  Layout,
  FormLayout,
  TextField,
  Card,
  Icon,
  Select,
} from "@shopify/polaris";
import { useState } from "react";
import { useController } from "react-hook-form";
const Option = (props) => {
  const [discountType, setDiscountType] = useState();
  const handleChangeDiscount = (e) => {
    setDiscountType(e);
  };
  const { field, fieldState } = useController(props)
  return (
    <div className="p-6"> ádsadasd
      {/* <div className="grid grid-cols-3">
        <TextField
          label="Title"
          onChange={() => {}}
          placeholder=""
          autoComplete="off"
        />
        <TextField
          label="Subtitle"
          onChange={() => {}}
          placeholder=""
          autoComplete="off"
        />
        <TextField
          label="Label"
          onChange={() => {}}
          placeholder=""
          autoComplete="off"
        />
        <TextField
          label="Quantity"
          onChange={() => {}}
          placeholder=""
          autoComplete="off"
          type="number"
        />
        <Select
          label="Discount type"
          options={[
            { label: "None", value: "none" },
            { label: "% discount", value: "discount" },
          ]}
          onChange={handleChangeDiscount}
          value={discountType}
        />
        <TextField
          label="Amount"
          onChange={() => {}}
          suffix="%"
          placeholder=""
          autoComplete="off"
        />
      </div> */}
    </div>
  );
};
export default Option;
