import ComminsionComponent from "./CourseTabs/Commision/Screen";
import ReviewComponent from "./CourseTabs/Review/Screen";
import CustomerComponent from "./CourseTabs/Customer/Screen";
import ChapterComponent from "./CourseTabs/Chapters/Screen";
import DetailComponent from "./CourseTabs/Detail/Screen";
import PromotionComponent from "./CourseTabs/Promotion/Screen";
import SettingsComponent from "./CourseTabs/Settings/Screen";

const courseTabs = [
  {
    name: "Commision",
    Component: ComminsionComponent
  },
  {
    name: "Reviews",
    Component: ReviewComponent,
  },
  {
    name: "Customer",
    Component: CustomerComponent,
  },
  {
    name: "Chapters",
    Component: ChapterComponent,
  },
  {
    name: "Promotion",
    Component: PromotionComponent,
  },
  {
    name: "Detail",
    Component: DetailComponent,
  },
  {
    name: "Settings",
    Component: SettingsComponent,
  },

];

export default { courseTabs };
