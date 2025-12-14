import styles from "./Icon.module.css";
import { IconProps } from "./types";


export default function Icon(props: IconProps ) {
    const {width, height, alt, src, className} = props;
    const style = {
        'width': `${width}`,
        'height': `${height}`,
        'display' : 'block',
    }
    return <img 
                style={style}
                alt={alt}
                src={src}
                className={styles[className]}
            />
}