import { useEffect, useState } from 'react';
import { dayEnnum, monthEnnum } from '../utils/data';
import { Table } from './Table';
import { DisplayInfo } from './DisplayInfo';
import { NoData } from './NoData';

export interface Subjects {
  id: number;
  subject: string;
  subjectName: string;
  periods: number[];
  faculty: string;
  slot: string;
  code: string;
  googleClassRoomLink?: string;
  googleMeetLink?: string;
}

interface Props {
  data: Subjects[] | null;
}

export const Content: React.FC<Props> = ({ data }) => {
  const [allData, setAllData] = useState<Subjects[] | undefined>();
  const [currentPeriod, setCurrentPeriod] = useState<string | null>(null);
  const [subjectInfo, setSubjectInfo] = useState<Subjects | undefined>(
    undefined
  );

  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();

  useEffect(() => {
    if (data) {
      setAllData(data);
    } else {
      setAllData(undefined);
    }
  }, [data]);

  useEffect(() => {
    if (allData) {
      const data = allData.find((item) => item.subject === currentPeriod);
      setSubjectInfo(data);
    }
  }, [currentPeriod]);

  return (
    <div className="Content">
      <div className="content-left">
        <div className="content-left-header">
          <h2>Time Table</h2>
          <div className="content-left-header-dateinfo">
            <h4 className="content-left-header-dateinfo-day">
              {dayEnnum[day]},
            </h4>
            <h4 className="content-left-header-dateinfo-month">
              {today.getDate()} {monthEnnum[month]} {today.getFullYear()}
            </h4>
          </div>
        </div>
        {allData ? (
          <Table subjects={allData} setCurrentPeriod={setCurrentPeriod} />
        ) : (
          <NoData />
        )}
        {subjectInfo && <DisplayInfo subjectsInfo={subjectInfo} />}
      </div>
      <div className="content-left"></div>
    </div>
  );
};
