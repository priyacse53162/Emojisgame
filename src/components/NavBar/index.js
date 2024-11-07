import './index.css'

const NavBar = props => {
  const {score, topscore, gameends} = props
  return (
    <div className="navbarContainer">
      <div className="navbarimageContainer">
        <img
          className="logoimage"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emojHeading">Emoji Game</h1>
      </div>
      {gameends ? (
        <div className="navbartextContainer" />
      ) : (
        <div className="navbartextContainer">
          <p className="scoretext">Score: {score}</p>
          <p className="scoretext">Top Score: {topscore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
