import styles from "./Button.module.css";
import { ButtonProps } from "./types";

export default function Button(props: ButtonProps){
    const {text, onClick, disabled, type, className} = props;
    return <button 
                type={type}
                className={`${styles.button} ${styles[className]}`}
                onClick={onClick}
                disabled={disabled}
            >{text}</button>
}