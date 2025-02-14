
import DetailsComponent from "./Deatails/Screen";
import ResourcesComponent from "./Resources/Screen";

import SEOComponent from "./SEO/Screen";


const chaperContentTabs = [
  {
    name: "Details",
    Component: DetailsComponent
  },
  {
    name: "Resources",
    Component: ResourcesComponent,
  },
  {
    name: "SEO",
    Component: SEOComponent,
  },

];

export default { chaperContentTabs };
