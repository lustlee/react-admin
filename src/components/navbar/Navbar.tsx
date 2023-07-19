import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
        <span>aramushiadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/16628785/pexels-photo-16628785/free-photo-of-fashion-love-woman-dark.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar-Usershttps://unsplash.com/photos/qcyOBGLsGJM"
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
