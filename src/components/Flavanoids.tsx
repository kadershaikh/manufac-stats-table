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

function Flavanoids({ data }: Props) {
  // Calculate Flavanoids values for each class
  const class1Flavanoids = data
    .filter((item) => item.Alcohol === 1)
    .map((item) => item.Flavanoids);
  const class2Flavanoids = data
    .filter((item) => item.Alcohol === 2)
    .map((item) => item.Flavanoids);
    const class3Flavanoids = data
    .filter((item) => item.Alcohol === 2)
    .map((item) => item.Flavanoids);

  // find mean, median, and mode for flavanoids of each class
  const class1FlavanoidMean = findMean(class1Flavanoids).toFixed(3);
  const class2FlavanoidMean = findMean(class2Flavanoids).toFixed(3);
  const class3FlavanoidMean = findMean(class3Flavanoids).toFixed(3);
  const class1FlavanoidMedian = findMedian(class1Flavanoids).toFixed(3);
  const class2FlavanoidMedian = findMedian(class2Flavanoids).toFixed(3);
  const class3FlavanoidMedian = findMedian(class3Flavanoids).toFixed(3);
  const class1FlavanoidMode = findMode(class1Flavanoids)?.toFixed(3);
  const class2FlavanoidMode = findMode(class2Flavanoids)?.toFixed(3);
  const class3FlavanoidMode = findMode(class3Flavanoids)?.toFixed(3);
 
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
          <td className='borderClass'>Flavanoids Mean</td>
          <td className='borderClass'>{class1FlavanoidMean}</td>
          <td className='borderClass'>{class2FlavanoidMean}</td>
          <td className='borderClass'>{class3FlavanoidMean}</td>
        </tr>
        <tr>
          <td className='borderClass'>Flavanoids Median</td>
          <td className='borderClass'>{class1FlavanoidMedian}</td>
          <td className='borderClass'>{class2FlavanoidMedian}</td>
          <td className='borderClass'>{class3FlavanoidMedian}</td>
        </tr>
        <tr>
          <td className='borderClass'>Flavanoids Mode</td>
          <td className='borderClass'>{class1FlavanoidMode == null ? 'NA' : class1FlavanoidMode}</td>
          <td className='borderClass'>{class2FlavanoidMode == null ? 'NA' : class2FlavanoidMode}</td>
          <td className='borderClass'>{class3FlavanoidMode == null ? 'NA' : class3FlavanoidMode}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Flavanoids;
