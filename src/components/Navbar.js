

function NavBar() {
  return (
  <div id="myNav" className="overlay">
    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
    <div className="overlay-content">
      <a href="html/index.html">Accueil</a>
      <a href="#">Connexion</a>
      <a href="#">Inscription</a>
      <a href="#">Profil</a>
      <a href="#">Contact</a>
    </div>
  </div>
  );
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}       



export default NavBar;
