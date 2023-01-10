import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  //LINKS
  var linkMail = "mailto:niamorweb@skiff.com";
  var linkGitHub = "https://github.com/niamorweb";


  return (
    <div className="App">
      <Header
        linkMail={linkMail}
        linkGitHub={linkGitHub}
      />

      <video
        className="fixed z-[-1] w-[100vw] h-[100vh] object-cover "
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src="../portfolio/assets/videos/bg2.mp4" type="video/mp4" />
      </video>


      <Intro />
      <Content />

      <Footer  linkGitHub={linkGitHub} />
    </div>
  );
}

export default App;
