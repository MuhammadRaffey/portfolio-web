import AboutMe from "./component/about-me";
import { aboutMe } from "../../data/page-data";
function page() {
  return (
    <div>
      <link rel="shortcut icon" href="src/app/favicon.ico" type="image/x-icon">
      <AboutMe data={aboutMe} />
    </div>
  );
}

export default page;
