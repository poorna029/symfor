import "./index.css"

function Home() {
  return (
   <div className="main">
        <header className="foodie_header">

          {/* logo */}

          <div >
            <h1 className="logo_heading">&#127828; Foodieland</h1>
          </div>

          


          {/* navbar section */}

          <nav className="navbar_section">
            <ul className="nav_style">
              <li>Home</li>

              <li>Recipes</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>About Us</li>
              
            </ul>
          </nav>

          {/* social contact section */}

          <div className="social_contact">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          </div>
          

        </header>
        <hr className="header_hr" />
        <main>

        </main>
        <footer>

        </footer>
      </div>
  )
}

export default Home