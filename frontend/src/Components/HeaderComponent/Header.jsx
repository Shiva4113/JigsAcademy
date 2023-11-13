import logo from '../Assets/booksIcon.png';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <a href="#"><img src={logo} alt="Logo" style={{ height: '64px', width: '64px' }} /></a>
      </div>
      <div style={textContainerStyle}>
        <h1 style={{ margin: '0' }}>Jigs Academy</h1>
      </div>
      <nav>
      {/* links? */}
      </nav>
    </header>
  );
};

const headerStyle = {
  background: '#F6E0A6',
  color: '#000000',
  textAlign: 'center',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  marginRight: '1rem',
};

const textContainerStyle = {
  flex: 1,
  textAlign: 'center', 
};

export default Header;
