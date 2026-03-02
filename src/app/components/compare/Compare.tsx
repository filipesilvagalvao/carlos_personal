import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import styles from "./Compare.module.css"
export const Compare = ({before, after }:{before:string,after:string}) => {
  return (
    <figure className={styles.compare}>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={before} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={after} alt="Image two" />}
        />
    </figure>
  );
};