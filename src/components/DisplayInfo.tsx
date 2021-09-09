import { Subjects } from './Content';
interface Props {
  subjectsInfo: Subjects;
}

export const DisplayInfo: React.FC<Props> = ({ subjectsInfo }) => {
  return (
    <div className="DisplayInfo">
      <div className="left-aside">
        <div className="display-header">
          <h3 className="display-header-subject">{subjectsInfo.subject}</h3>
          <h3 className="display-header-subject-name">
            {subjectsInfo.subjectName}.
          </h3>
        </div>

        <div className="display-body">
          <div className="display-body-item">
            <h3>Faculty</h3>
            <h4>{subjectsInfo.faculty}</h4>
          </div>
          <div className="display-body-item">
            <h3>Slot</h3>
            <h4>{subjectsInfo.slot}</h4>
          </div>
          <div className="display-body-item">
            <h3>Code</h3>
            <h4>{subjectsInfo.code}</h4>
          </div>
        </div>
      </div>

      <div className="right-aside">
        <div className="display-buttons">
          <a
            className="display-buttons-btn"
            href={subjectsInfo.googleClassRoomLink}
            rel="noreferrer"
            target="_blank"
          >
            ClassRoom
          </a>

          <a
            className="display-buttons-btn"
            href={subjectsInfo.googleMeetLink}
            rel="noreferrer"
            target="_blank"
          >
            Meet
          </a>
        </div>
      </div>
    </div>
  );
};
