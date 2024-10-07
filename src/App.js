import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AbsoluteEdgeInsets from "./Components/Element_directory/Modifiers/absolute-edge-insets/index";
import Accessibility from "./Components/Element_directory/Modifiers/accessibility/index";
import Action from "./Components/Element_directory/Modifiers/action/index";
import Animation from "./Components/Element_directory/Modifiers/animation/index";
import Aspect from "./Components/Element_directory/Modifiers/aspect/index";
import Background from "./Components/Element_directory/Modifiers/background/index";
import LinearBackground from "./Components/Element_directory/Modifiers/background/linear-gradient/index";
import RadialBackground from "./Components/Element_directory/Modifiers/background/radial-gradient/index";
import RadialBackgroundRadius from "./Components/Element_directory/Modifiers/background/radial-gradient/radius/index";
import RadialBackgroundCenter from "./Components/Element_directory/Modifiers/background/radial-gradient/center/index";
import RadialBackgroundFixedCenter from "./Components/Element_directory/Modifiers/background/radial-gradient/center/fixed/index";
import RadialBackgroundRelativeCenter from "./Components/Element_directory/Modifiers/background/radial-gradient/center/relative/index";
import RadialBackgroundRelativeRadius from "./Components/Element_directory/Modifiers/background/radial-gradient/center/relative/index";
import ImageBackground from "./Components/Element_directory/Modifiers/background/image-background/index";
import SolidlBackground from "./Components/Element_directory/Modifiers/background/solid-background/index";
import NinePatchBackground from "./Components/Element_directory/Modifiers/background/nine-patch-background/index";
import Border from "./Components/Element_directory/Modifiers/border/index";
import CornersRadius from "./Components/Element_directory/Modifiers/corners-radius/index";
import Count from "./Components/Element_directory/Modifiers/count/index";
import CountFixed from "./Components/Element_directory/Modifiers/count/fixed/index";
import CountInfinity from "./Components/Element_directory/Modifiers/count/infinity/index";
import Dimention from "./Components/Element_directory/Modifiers/dimention/index";
import Drawable from "./Components/Element_directory/Modifiers/drawable/index";
import ShapeDrawable from "./Components/Element_directory/Modifiers/drawable/shapeDrawable/index";
import EdgeInsets from "./Components/Element_directory/Modifiers/edge-insets/index";
import Extension from "./Components/Element_directory/Modifiers/extension/index";
import Filter from "./Components/Element_directory/Modifiers/filter/index";
import Blur from "./Components/Element_directory/Modifiers/filter/blur/index";
import FilterRtlMirror from "./Components/Element_directory/Modifiers/filter/filterRtlMirror/index";
import Focus from "./Components/Element_directory/Modifiers/focus/index";
import IndicatorItemPlacement from "./Components/Element_directory/Modifiers/indicatorItemPlacement/index";
import DefaultIndicatorItemPlacement from "./Components/Element_directory/Modifiers/indicatorItemPlacement/defaultIndicatorItemPlacement/index";
import StretchIndicatorItemPlacement from "./Components/Element_directory/Modifiers/indicatorItemPlacement/stretchIndicatorItemPlacement/index";
import PagerLayoutMode from "./Components/Element_directory/Modifiers/pagerLayoutMode/index";
import PagerSize from "./Components/Element_directory/Modifiers/pagerLayoutMode/pagerSize/index";
import NeighbourPageSize from "./Components/Element_directory/Modifiers/pagerLayoutMode/neighbourPageSize/index";
import Patch from "./Components/Element_directory/Modifiers/patch/index";
import PrecentageSize from "./Components/Element_directory/Modifiers/percentageSize/index";
import Pivot from "./Components/Element_directory/Modifiers/pivot/index";
import PivotFixed from "./Components/Element_directory/Modifiers/pivot/fixed/index";
import PivotPercentage from "./Components/Element_directory/Modifiers/pivot/percentage/index";
import Point from "./Components/Element_directory/Modifiers/point/index";
import Shadow from "./Components/Element_directory/Modifiers/sahdow/index";
import Shape from "./Components/Element_directory/Modifiers/shape/index";
import RoundedRectangleShape from "./Components/Element_directory/Modifiers/shape/roundedReactangle/index";
import Circle from "./Components/Element_directory/Modifiers/shape/circle/index";
import Size from "./Components/Element_directory/Modifiers/size/index";
import FixedSize from "./Components/Element_directory/Modifiers/size/fixed/index";
import MatchParent from "./Components/Element_directory/Modifiers/size/matchParent/index";
import WrapContent from "./Components/Element_directory/Modifiers/size/wrapContent/index";
import Stroke from "./Components/Element_directory/Modifiers/stroke/index";
import TextGradient from "./Components/Element_directory/Modifiers/textGradient/index";
import TextRangeBackground from "./Components/Element_directory/Modifiers/textRangeBackground/index";
import TextRangeBorder from "./Components/Element_directory/Modifiers/textRangeBorder/index";
import Timer from "./Components/Element_directory/Modifiers/timer/index";
import ToolTip from "./Components/Element_directory/Modifiers/tooltip/index";
import Transform from "./Components/Element_directory/Modifiers/transform/index";
import AppearanceTransition from "./Components/Element_directory/Modifiers/transition/appearance/index";
import SetTransition from "./Components/Element_directory/Modifiers/transition/appearance/set/index";
import FadeTransition from "./Components/Element_directory/Modifiers/transition/appearance/fade/index";
import ScaleTransition from "./Components/Element_directory/Modifiers/transition/appearance/scale/index";
import SlideTransition from "./Components/Element_directory/Modifiers/transition/appearance/slide/index";
import ChangeTransition from "./Components/Element_directory/Modifiers/changeTransition/indes";
import ChangeSetTransition from "./Components/Element_directory/Modifiers/changeTransition/changeSetTransition/index";
import ChangeBoundsTransition from "./Components/Element_directory/Modifiers/changeTransition/changeBoundsTransition/index";
import Trigger from "./Components/Element_directory/Modifiers/trigger/index";
import VisibilityAction from "./Components/Element_directory/Modifiers/visibilityAction/index";
import FAQ from "./Components/FAQ/index";
import Customizations from "./Components/Customizations/index";

import Container from "./Components/Element_directory/BasicElements/Container/index";
import Custom from "./Components/Element_directory/BasicElements/Custom/index";
import Data from "./Components/Element_directory/BasicElements/Data/index";
import Gallery from "./Components/Element_directory/BasicElements/Gallery/index";
import GifImage from "./Components/Element_directory/BasicElements/GifImage/index";
import Grid from "./Components/Element_directory/BasicElements/Grid/index";
import Image from "./Components/Element_directory/BasicElements/Image/index";
import Indicator from "./Components/Element_directory/BasicElements/Indicator/index";
import Input from "./Components/Element_directory/BasicElements/Input/index";
import Pager from "./Components/Element_directory/BasicElements/Pager/index";
import Select from "./Components/Element_directory/BasicElements/Select/index";
import Seperator from "./Components/Element_directory/BasicElements/Seperator/index";
import Slider from "./Components/Element_directory/BasicElements/Slider/index";
import State from "./Components/Element_directory/BasicElements/State/index";
import Tabs from "./Components/Element_directory/BasicElements/Tabs/index";
import Text from "./Components/Element_directory/BasicElements/Text/index";
import Video from "./Components/Element_directory/BasicElements/Video/index";
import TypicalStructure from './Components/Element_directory/TypicalStructure/index';
import Navigation from "./navigation";


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<>err</>}>
      <Route path="/" element={<>gg</>} />
      <Route
        path="/element-directory/modifiers/absolute-edge-insets"
        element={
          <Navigation>
            <AbsoluteEdgeInsets />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/accessibility"
        element={
          <Navigation>
            <Accessibility />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/action"
        element={
          <Navigation>
            <Action />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/animation"
        element={
          <Navigation>
            <Animation />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/aspect"
        element={
          <Navigation>
            <Aspect />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background"
        element={
          <Navigation>
            <Background />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/linear-gradient"
        element={
          <Navigation>
            <LinearBackground />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/radial-gradient"
        element={
          <Navigation>
            <RadialBackground />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/radial-gradient/radius"
        element={
          <Navigation>
            <RadialBackgroundRadius />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/radial-gradient/radius/relative"
        element={
          <Navigation>
            <RadialBackgroundRelativeRadius />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/radial-gradient/center"
        element={
          <Navigation>
            <RadialBackgroundCenter />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/radial-gradient/center/relative"
        element={
          <Navigation>
            <RadialBackgroundRelativeCenter />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/radial-gradient/center/fixed"
        element={
          <Navigation>
            <RadialBackgroundFixedCenter />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/image-background"
        element={
          <Navigation>
            <ImageBackground />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/solid-background"
        element={
          <Navigation>
            <SolidlBackground />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/background/nine-patch-background"
        element={
          <Navigation>
            <NinePatchBackground />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/border"
        element={
          <Navigation>
            <Border />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/corners-radius"
        element={
          <Navigation>
            <CornersRadius />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/count"
        element={
          <Navigation>
            <Count />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/count/fixed"
        element={
          <Navigation>
            <CountFixed />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/count/infinity"
        element={
          <Navigation>
            <CountInfinity />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/dimention"
        element={
          <Navigation>
            <Dimention />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/drawable"
        element={
          <Navigation>
            <Drawable />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/drawable/shape-drawable"
        element={
          <Navigation>
            <ShapeDrawable />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/edge-insets"
        element={
          <Navigation>
            <EdgeInsets />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/extension"
        element={
          <Navigation>
            <Extension />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/filter"
        element={
          <Navigation>
            <Filter />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/filter/blur"
        element={
          <Navigation>
            <Blur />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/filter/filter-rtl-mirror"
        element={
          <Navigation>
            <FilterRtlMirror />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/focus"
        element={
          <Navigation>
            <Focus />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/indicator-item-placement"
        element={
          <Navigation>
            <IndicatorItemPlacement />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/indicator-item-placement/default-indicator-item-placement"
        element={
          <Navigation>
            <DefaultIndicatorItemPlacement />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/indicator-item-placement/stretch-indicator-item-placement"
        element={
          <Navigation>
            <StretchIndicatorItemPlacement />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/pager-layout-mode"
        element={
          <Navigation>
            <PagerLayoutMode />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/pager-layout-mode/pager-size"
        element={
          <Navigation>
            <PagerSize />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/pager-layout-mode/neighbour-page-size"
        element={
          <Navigation>
            <NeighbourPageSize />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/patch"
        element={
          <Navigation>
            <Patch />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/percentage-size"
        element={
          <Navigation>
            <PrecentageSize />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/pivot"
        element={
          <Navigation>
            <Pivot />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/pivot/fixed"
        element={
          <Navigation>
            <PivotFixed />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/pivot/percentage"
        element={
          <Navigation>
            <PivotPercentage />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/point"
        element={
          <Navigation>
            <Point />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/shadow"
        element={
          <Navigation>
            <Shadow />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/shape"
        element={
          <Navigation>
            <Shape />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/shape/rounded-rectangle"
        element={
          <Navigation>
            <RoundedRectangleShape />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/shape/circle"
        element={
          <Navigation>
            <Circle />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/size"
        element={
          <Navigation>
            <Size />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/size/fixed"
        element={
          <Navigation>
            <FixedSize />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/size/match-parent"
        element={
          <Navigation>
            <MatchParent />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/size/wrap-content"
        element={
          <Navigation>
            <WrapContent />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/stroke"
        element={
          <Navigation>
            <Stroke />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/text-gradient"
        element={
          <Navigation>
            <TextGradient />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/text-range-background"
        element={
          <Navigation>
            <TextRangeBackground />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/text-range-border"
        element={
          <Navigation>
            <TextRangeBorder />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/timer"
        element={
          <Navigation>
            <Timer />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/tooltip"
        element={
          <Navigation>
            <ToolTip />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/transform"
        element={
          <Navigation>
            <Transform />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/transition/appearance"
        element={
          <Navigation>
            <AppearanceTransition />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/transition/appearance/set"
        element={
          <Navigation>
            <SetTransition />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/transition/appearance/fade"
        element={<FadeTransition />}
      />
      <Route
        path="/element-directory/modifiers/transition/appearance/scale"
        element={
          <Navigation>
            <ScaleTransition />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/transition/appearance/slide"
        element={
          <Navigation>
            <SlideTransition />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/change-transition"
        element={
          <Navigation>
            <ChangeTransition />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/change-transition/change-set-transition"
        element={
          <Navigation>
            <ChangeSetTransition />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/change-transition/change-bounds-transition"
        element={
          <Navigation>
            <ChangeBoundsTransition />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/trigger"
        element={
          <Navigation>
            <Trigger />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/modifiers/visibility-action"
        element={
          <Navigation>
            <VisibilityAction />
          </Navigation>
        }
      />
      <Route
        path="/faq"
        element={
          <Navigation>
            <FAQ />
          </Navigation>
        }
      />
      <Route
        path="/customizations"
        element={
          <Navigation>
            <Customizations />
          </Navigation>
        }
      />

      <Route
        path="/element-directory/basic-elements/container"
        element={
          <Navigation>
            <Container />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/custom"
        element={
          <Navigation>
            <Custom />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/data"
        element={
          <Navigation>
            <Data />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/gallery"
        element={
          <Navigation>
            <Gallery />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/gif-image"
        element={
          <Navigation>
            <GifImage />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/grid"
        element={
          <Navigation>
            <Grid />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/image"
        element={
          <Navigation>
            <Image />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/indicator"
        element={
          <Navigation>
            <Indicator />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/input"
        element={
          <Navigation>
            <Input />
            <Input />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/pager"
        element={
          <Navigation>
            <Pager />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/select"
        element={
          <Navigation>
            <Select />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/seperator"
        element={
          <Navigation>
            <Seperator />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/slider"
        element={
          <Navigation>
            <Slider />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/state"
        element={
          <Navigation>
            <State />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/tabs"
        element={
          <Navigation>
            <Tabs />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/text"
        element={
          <Navigation>
            <Text />
          </Navigation>
        }
      />
      <Route
        path="/element-directory/basic-elements/video"
        element={
          <Navigation>
            <Video />
          </Navigation>
        }
      />
      <Route path="/element-directory/typical-structure" element={
        <Navigation>
          <TypicalStructure />
        </Navigation>} />
    </Route>
  )
);

function App() {
  return (
    <div className="App g-root dc-root_wide-format g-root_theme_light">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
