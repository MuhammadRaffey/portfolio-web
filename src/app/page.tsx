import AboutMe from "./component/about-me";
import { aboutMe } from "../../data/page-data";
function page() {
  return (
    <div>
      <AboutMe data={aboutMe} />
    </div>
  );
}

export default page;
