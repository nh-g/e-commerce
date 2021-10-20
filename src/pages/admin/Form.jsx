// Project files
import fields from "../../utils/fields.json";
import InputField from "./InputField";

export default function Form({ editItem, onChange }) {
  const FormFields = fields.map((item, index) => (
    <InputField
      key={index}
      onChange={onChange}
      options={item}
      state={editItem[item.key]}
    />
  ));

  return <section>{FormFields}</section>;
}
