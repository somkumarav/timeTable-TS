import { Subjects } from './Content';

interface Props {
  subjects: Subjects[];
  setCurrentPeriod: React.Dispatch<React.SetStateAction<string | null>>;
}

const days = [
  { id: 1, day: 'Monday', shortDay: 'MON' },
  { id: 2, day: 'Tuesday', shortDay: 'TUE' },
  { id: 3, day: 'Wednesday', shortDay: 'WED' },
  { id: 4, day: 'Thursday', shortDay: 'THU' },
  { id: 5, day: 'Friday', shortDay: 'FRI' },
  { id: 6, day: 'Saturday', shortDay: 'SAT' },
];

export const Table: React.FC<Props> = ({ subjects, setCurrentPeriod }) => {
  return (
    <div className="Table">
      <div className="table-content"></div>
      <div className="table-row">
        <div className="table-row-item">
          <span>HOUR</span>
          <span>DAY</span>
        </div>

        <div className="table-row-item">
          <span>I</span>
          <span>9:15AM - 10:00AM</span>
        </div>
        <div className="table-row-item">
          <span>II</span>
          <span>10:15AM - 11:00AM</span>
        </div>
        <div className="table-row-item">
          <span>III</span>
          <span>11:15AM - 12:00PM</span>
        </div>
        <div className="table-row-item">
          <span>IV</span>
          <span>12:15PM - 1:00PM</span>
        </div>
        <div className="table-row-item">
          <span>V</span>
          <span>2:00PM - 3:00PM</span>
        </div>
      </div>

      {/*  */}
      {days.map((item) => {
        return (
          <div key={item.id} className="table-row">
            <div className="table-row-item">{item.shortDay}</div>
            {subjects.map((subItem) => {
              return (
                subItem.periods.includes(parseInt(`${item.id}1`)) && (
                  <div
                    key={item.id}
                    className="table-row-item class"
                    onClick={() => setCurrentPeriod(subItem.subject)}
                  >
                    {subItem.subject}
                  </div>
                )
              );
            })}
            {subjects.map((subItem) => {
              return (
                subItem.periods.includes(parseInt(`${item.id}2`)) && (
                  <div
                    key={item.id}
                    className="table-row-item class"
                    onClick={() => setCurrentPeriod(subItem.subject)}
                  >
                    {subItem.subject}
                  </div>
                )
              );
            })}
            {subjects.map((subItem) => {
              return (
                subItem.periods.includes(parseInt(`${item.id}3`)) && (
                  <div
                    key={item.id}
                    className="table-row-item class"
                    onClick={() => setCurrentPeriod(subItem.subject)}
                  >
                    {subItem.subject}
                  </div>
                )
              );
            })}
            {subjects.map((subItem) => {
              return (
                subItem.periods.includes(parseInt(`${item.id}4`)) && (
                  <div
                    key={item.id}
                    className="table-row-item class"
                    onClick={() => setCurrentPeriod(subItem.subject)}
                  >
                    {subItem.subject}
                  </div>
                )
              );
            })}
            {subjects.map((subItem) => {
              return (
                subItem.periods.includes(parseInt(`${item.id}5`)) && (
                  <div
                    key={item.id}
                    className="table-row-item class"
                    onClick={() => setCurrentPeriod(subItem.subject)}
                  >
                    {subItem.subject}
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
