import Card from './Card';
import AssignmentIcon from '../Assets/AssignmentIcon';
import CoursesIcon from '../Assets/CoursesIcon';
import AttendanceIcon from '../Assets/AttendanceIcon';
import ResultsIcon from '../Assets/ResultsIcon';

const Dashboard = () => {
  return (
    <div style={dashboardStyle}>
      <Card title="Assignments" icon={<AssignmentIcon />} />
      <Card title="Courses" icon={<CoursesIcon />} />
      <Card title="Attendance" icon={<AttendanceIcon />} />
      <Card title="Results" icon={<ResultsIcon />} />

      <Card title="Announcements" description="Sometimes we make the process more complicated than we need to. We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be. We make the journey by taking each day step by step and then repeating it again and again until we reach our destination.

Joseph B. Wirthlin"/>
    </div>
  );
};

const dashboardStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between', 
  padding: '20px',
  maxWidth: '800px', 
  margin: 'auto',
};

export default Dashboard;
