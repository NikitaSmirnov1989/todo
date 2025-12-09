import styles from "./InputField.module.css";
import Input from "../Input/Input";
import { InputFieldProps } from "./types";

export default function InputField(props: InputFieldProps){
    const {forValue, text, type, value, placeholder, onChange, className} = props;
    return <div className={`${styles.input_field} ${styles[className]}` }>
        <Input 
            placeholder={placeholder}
            value={value}
            type={type}
            id={forValue}
            onChange={onChange}
            className="add_task"
            />
        <label 
            className={styles.label}
            htmlFor={forValue}>
            {text}
        </label>
    </div>
};

