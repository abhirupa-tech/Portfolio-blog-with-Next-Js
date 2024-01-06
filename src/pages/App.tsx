import IntroductionSection from "./HomePageBlog/HomePage";
import { Body, GlobalStyle } from "./index.styles";
import MentorshipSection from "./MentorshipSection/MentorshipSection";
import FooterSection from "./FooterSection/FooterSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <IntroductionSection />
      <MentorshipSection />
      <FooterSection />
    </>
    
  );
}

export default App;