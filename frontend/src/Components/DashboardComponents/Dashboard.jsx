import Card from './Card';
import AssignmentIcon from '../Assets/AssignmentIcon';
import CoursesIcon from '../Assets/CoursesIcon';
import AttendanceIcon from '../Assets/AttendanceIcon';
import ResultsIcon from '../Assets/ResultsIcon';

const Dashboard = () => {
  return (
    <div style={dashboardStyle}>
      <Card title="Assignments" icon={<AssignmentIcon />} to = {"/"}/>
      <Card title="Courses" icon={<CoursesIcon />} to={"/"}/>
      <Card title="Attendance" icon={<AttendanceIcon />} to={"/"}/>
      <Card title="Results" icon={<ResultsIcon />} to={"/"}/>
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