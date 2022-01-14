import { useState, useEffect } from 'react';
import { Content, Subjects } from '../components/Content';
import { Sidebar } from '../components/Sidebar';
import { s4 } from '../utils/data';

export const Main: React.FC = () => {
  const [subjectData, setSubjectData] = useState<Subjects[] | null>(null);
  const [grade, setGrade] = useState<String | null>('s4-cse-b');

  useEffect(() => {
    console.log(grade);
    if (grade === 's4-cse-b') {
      setSubjectData(s4);
    } else {
      setSubjectData(null);
    }
  }, [grade]);

  return (
    <div className="Main">
      <Sidebar grade={grade} setGrade={setGrade} />
      <Content data={subjectData} />
    </div>
  );
};
