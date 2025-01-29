
import DetailsComponent from "../../Chapters/ChapterContent/Deatails/Screen";
import ResourcesComponent from "../../Chapters/ChapterContent/Resources/Screen";

import SEOComponent from "../../Chapters/ChapterContent/SEO/Screen";


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
    Component:SEOComponent,
  },
  
];

export default { chaperContentTabs };
