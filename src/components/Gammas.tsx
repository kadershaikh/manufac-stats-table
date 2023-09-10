import { findMean, findMedian, findMode } from '../utils/utils'; 
import '../index.css'

interface WineData {
  Alcohol: number,
  "Malic Acid": number,
  Ash: any,
  "Alcalinity of ash": number,
  Magnesium: number,
  "Total phenols": number,
  Flavanoids: any,
  "Nonflavanoid phenols": any,
  Proanthocyanins: string,
  "Color intensity": any,
  Hue: number,
  "OD280/OD315 of diluted wines": any,
  Unknown: number
}

interface Props {
  data: WineData[];
}

function Gammas({ data }: Props) {
  // Calculate Gamma values for each class
  const class1Gamma = data
  .filter((item) => item.Alcohol === 1)
  .map((item) => (item.Ash * item.Hue) / item.Magnesium);
  const class2Gamma = data
  .filter((item) => item.Alcohol === 2)
  .map((item) => (item.Ash * item.Hue) / item.Magnesium);
  const class3Gamma = data
  .filter((item) => item.Alcohol === 3)
  .map((item) => (item.Ash * item.Hue) / item.Magnesium);

  const class1GammaMean = findMean(class1Gamma).toFixed(3);
  const class2GammaMean = findMean(class2Gamma).toFixed(3);
  const class3GammaMean = findMean(class3Gamma).toFixed(3);
  const class1GammaMedian = findMedian(class1Gamma).toFixed(3);
  const class2GammaMedian = findMedian(class2Gamma).toFixed(3);
  const class3GammaMedian = findMedian(class3Gamma).toFixed(3);
  const class1GammaMode = findMode(class1Gamma)?.toFixed(3);
  const class2GammaMode = findMode(class2Gamma)?.toFixed(3);
  const class3GammaMode = findMode(class3Gamma)?.toFixed(3);
 
  return (
    <table>
      <thead>
        <tr>
          <th className='borderClass'>Measure</th>
          <th className='borderClass'>Class 1</th>
          <th className='borderClass'>Class 2</th>
          <th className='borderClass'>Class 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='borderClass'>Gamma Mean</td>
          <td className='borderClass'>{class1GammaMean}</td>
          <td className='borderClass'>{class2GammaMean}</td>
          <td className='borderClass'>{class3GammaMean}</td>
        </tr>
        <tr>
          <td className='borderClass'>Gamma Median</td>
          <td className='borderClass'>{class1GammaMedian}</td>
          <td className='borderClass'>{class2GammaMedian}</td>
          <td className='borderClass'>{class3GammaMedian}</td>
        </tr>
        <tr>
          <td className='borderClass'>Gamma Mode</td>
          <td className='borderClass'>{class1GammaMode == null ? 'NA' : class1GammaMode}</td>
          <td className='borderClass'>{class2GammaMode == null ? 'NA' : class2GammaMode}</td>
          <td className='borderClass'>{class3GammaMode == null ? 'NA' : class3GammaMode}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Gammas;
