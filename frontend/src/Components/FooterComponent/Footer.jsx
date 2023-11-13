const Footer = () => {
    return (
      <footer style={footerStyle}>
        <div style={leftText}>
          <p>Copyright&copy; JigsAcademy Bengaluru India</p>
        </div>
        <div style={rightText}>
          <p>About Contact us</p>
        </div>
      </footer>
    );
  };
  
  const footerStyle = {
    background: '#896A53',
    color: '#ffffff',
    textAlign: 'center',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    marginTop: '2rem', // Adjust as needed
  };
  
  const leftText = {
    alignSelf: 'flex-end',
  };
  
  const rightText = {
    alignSelf: 'flex-start',  
  };
  
  export default Footer;
  