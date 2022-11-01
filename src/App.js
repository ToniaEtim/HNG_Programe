import ProfileSection from "./components/ProfileSection";
import LinkSection from "./components/LinkSection";
import SocialLoginSection from "./components/SocialLoginSection";
import FooterSection from "./components/FooterSection";
function App() {
  return (
    <div id="container">
      <div id="content">
        <ProfileSection />
        <LinkSection />
        <SocialLoginSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
