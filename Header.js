import logo from "../img/logo.jpg";

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-logo">
        <img src={logo} alt="" />
      </h1>
    </header>
  );
}

export default Header;
