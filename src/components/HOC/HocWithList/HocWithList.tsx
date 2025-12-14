import styles from "./HocWithList.module.css";
import type { RootState } from '../../../features/store';
import { useSelector } from 'react-redux';

export default function HocWithList<K extends keyof RootState>(
  defaultText: string,
  Component: React.ComponentType<{list: any[]}>
) {
  const Inner = (props: {keyValue: K}) => {
    const {keyValue} = props;
    const data = useSelector((state: RootState) => state[keyValue]);
    if(data.length === 0) {
      return <div className={styles.text}>{defaultText}</div>
    }
    return <Component list={data}/>
  }
  return Inner;
}
