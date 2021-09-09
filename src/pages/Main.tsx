import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
// import { withRouter } from 'react-router';
import { Content, Subjects } from '../components/Content';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../hooks';
import { s4 } from '../utils/data';

interface Props {
  subject: Subjects[] | null;
  setGrade: React.Dispatch<React.SetStateAction<String | null>>;
}

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
