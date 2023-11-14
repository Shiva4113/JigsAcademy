import Card from './Card';
import InnerCard from './InnerCard';
import AssignmentIcon from '../Assets/AssignmentIcon';
import CoursesIcon from '../Assets/CoursesIcon';
import AttendanceIcon from '../Assets/AttendanceIcon';
import ResultsIcon from '../Assets/ResultsIcon';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div style={dashboardStyle}>
      <Card title="Assignments" icon={<AssignmentIcon />} />
      <Card title="Courses" icon={<CoursesIcon />} />
      <Card title="Attendance" icon={<AttendanceIcon />} />
      <Card title="Results" icon={<ResultsIcon />} />

      <Card title="Announcements" className="announcements-container" style={announcementsContainerStyle}>
        <InnerCard/>
        <InnerCard/>
        <InnerCard/>
        <InnerCard/>
      </Card>
    </div>
  );
};


const dashboardStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  maxWidth: '1000px',
  margin: 'auto',
  flexWrap: 'wrap',
  
};

const announcementsContainerStyle = {
  height: '400px',
  overflowY: 'scroll',
};

export default Dashboard;
