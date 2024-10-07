import './App.css';
import Navbar from './Components/navbar/navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AbsoluteEdgeInsets from './Components/Element_directory/Modifiers/absolute-edge-insets/index';
import Accessibility from './Components/Element_directory/Modifiers/accessibility/index';
import Action from './Components/Element_directory/Modifiers/action/index';
import Animation from './Components/Element_directory/Modifiers/animation/index';
import Aspect from './Components/Element_directory/Modifiers/aspect/index';
import Background from './Components/Element_directory/Modifiers/background/index';
import LinearBackground from './Components/Element_directory/Modifiers/background/linear-gradient/index';
import RadialBackground from './Components/Element_directory/Modifiers/background/radial-gradient/index';
import RadialBackgroundRadius from './Components/Element_directory/Modifiers/background/radial-gradient/radius/index';
import RadialBackgroundCenter from './Components/Element_directory/Modifiers/background/radial-gradient/center/index';
import RadialBackgroundFixedCenter from './Components/Element_directory/Modifiers/background/radial-gradient/center/fixed/index';
import RadialBackgroundRelativeCenter from './Components/Element_directory/Modifiers/background/radial-gradient/center/relative/index';
import RadialBackgroundRelativeRadius from './Components/Element_directory/Modifiers/background/radial-gradient/center/relative/index';
import ImageBackground from './Components/Element_directory/Modifiers/background/image-background/index';
import SolidlBackground from './Components/Element_directory/Modifiers/background/solid-background/index';
import NinePatchBackground from  './Components/Element_directory/Modifiers/background/nine-patch-background/index';
import Border from './Components/Element_directory/Modifiers/border/index';
import CornersRadius from './Components/Element_directory/Modifiers/corners-radius/index';
import Count from './Components/Element_directory/Modifiers/count/index';
import CountFixed from './Components/Element_directory/Modifiers/count/fixed/index';
import CountInfinity from './Components/Element_directory/Modifiers/count/infinity/index';
import Dimention from './Components/Element_directory/Modifiers/dimention/index';
import Drawable from  './Components/Element_directory/Modifiers/drawable/index';
import ShapeDrawable from  './Components/Element_directory/Modifiers/drawable/shapeDrawable/index';
import EdgeInsets from './Components/Element_directory/Modifiers/edge-insets/index';
import Extension from './Components/Element_directory/Modifiers/extension/index';
import Filter from './Components/Element_directory/Modifiers/filter/index';
import Blur from './Components/Element_directory/Modifiers/filter/blur/index';
import FilterRtlMirror from './Components/Element_directory/Modifiers/filter/filterRtlMirror/index';
import Focus from './Components/Element_directory/Modifiers/focus/index';
import IndicatorItemPlacement from './Components/Element_directory/Modifiers/indicatorItemPlacement/index';
import DefaultIndicatorItemPlacement from './Components/Element_directory/Modifiers/indicatorItemPlacement/defaultIndicatorItemPlacement/index';
import StretchIndicatorItemPlacement from './Components/Element_directory/Modifiers/indicatorItemPlacement/stretchIndicatorItemPlacement/index';
import PagerLayoutMode from './Components/Element_directory/Modifiers/pagerLayoutMode/index';
import PagerSize from './Components/Element_directory/Modifiers/pagerLayoutMode/pagerSize/index';
import NeighbourPageSize from './Components/Element_directory/Modifiers/pagerLayoutMode/neighbourPageSize/index';
import Patch from './Components/Element_directory/Modifiers/patch/index';
import PrecentageSize from './Components/Element_directory/Modifiers/percentageSize/index';
import Pivot from './Components/Element_directory/Modifiers/pivot/index';
import PivotFixed from './Components/Element_directory/Modifiers/pivot/fixed/index';
import PivotPercentage from './Components/Element_directory/Modifiers/pivot/percentage/index';
import Point from './Components/Element_directory/Modifiers/point/index';
import Shadow from './Components/Element_directory/Modifiers/sahdow/index';
import Shape from './Components/Element_directory/Modifiers/shape/index';
import RoundedRectangleShape from './Components/Element_directory/Modifiers/shape/roundedReactangle/index';
import Circle from './Components/Element_directory/Modifiers/shape/circle/index';
import Size from './Components/Element_directory/Modifiers/size/index';
import FixedSize from './Components/Element_directory/Modifiers/size/fixed/index';
import MatchParent from './Components/Element_directory/Modifiers/size/matchParent/index';
import WrapContent from './Components/Element_directory/Modifiers/size/wrapContent/index';
import Stroke from './Components/Element_directory/Modifiers/stroke/index';
import TextGradient from './Components/Element_directory/Modifiers/textGradient/index';
import TextRangeBackground from './Components/Element_directory/Modifiers/textRangeBackground/index';
import TextRangeBorder from './Components/Element_directory/Modifiers/textRangeBorder/index';
import Timer from './Components/Element_directory/Modifiers/timer/index';
import ToolTip from './Components/Element_directory/Modifiers/tooltip/index';
import Transform from './Components/Element_directory/Modifiers/transform/index'; 
import AppearanceTransition from './Components/Element_directory/Modifiers/transition/appearance/index';
import SetTransition from './Components/Element_directory/Modifiers/transition/appearance/set/index';
import FadeTransition from './Components/Element_directory/Modifiers/transition/appearance/fade/index';
import ScaleTransition from './Components/Element_directory/Modifiers/transition/appearance/scale/index';
import SlideTransition from './Components/Element_directory/Modifiers/transition/appearance/slide/index';
import ChangeTransition from './Components/Element_directory/Modifiers/changeTransition/indes';
import ChangeSetTransition from  './Components/Element_directory/Modifiers/changeTransition/changeSetTransition/index';
import ChangeBoundsTransition from './Components/Element_directory/Modifiers/changeTransition/changeBoundsTransition/index';
import Trigger from './Components/Element_directory/Modifiers/trigger/index';
import VisibilityAction from './Components/Element_directory/Modifiers/visibilityAction/index';
import FAQ from './Components/FAQ/index';

const Router = createBrowserRouter(createRoutesFromElements(<Route errorElement={<>err</>}>
  <Route path="/" element={<>gg</>} />
  <Route path="/element-directory/modifiers/absolute-edge-insets" element={<AbsoluteEdgeInsets />} />
  <Route path="/element-directory/modifiers/accessibility" element={<Accessibility />} />
  <Route path="/element-directory/modifiers/action" element={<Action />} />
  <Route path="/element-directory/modifiers/animation" element={<Animation />} />
  <Route path="/element-directory/modifiers/aspect" element={<Aspect/>} />
  <Route path="/element-directory/modifiers/background" element={<Background/>} />
  <Route path="/element-directory/modifiers/background/linear-gradient" element={<LinearBackground/>} />
  <Route path="/element-directory/modifiers/background/radial-gradient" element={<RadialBackground/>} />
  <Route path="/element-directory/modifiers/background/radial-gradient/radius" element={<RadialBackgroundRadius/>} />
  <Route path="/element-directory/modifiers/background/radial-gradient/radius/relative" element={<RadialBackgroundRelativeRadius/>} />
  <Route path="/element-directory/modifiers/background/radial-gradient/center" element={<RadialBackgroundCenter/>} />
  <Route path="/element-directory/modifiers/background/radial-gradient/center/relative" element={<RadialBackgroundRelativeCenter/>} />
  <Route path="/element-directory/modifiers/background/radial-gradient/center/fixed" element={<RadialBackgroundFixedCenter/>} />
  <Route path="/element-directory/modifiers/background/image-background" element={<ImageBackground/>} />
  <Route path="/element-directory/modifiers/background/solid-background" element={<SolidlBackground/>} />
  <Route path="/element-directory/modifiers/background/nine-patch-background" element={<NinePatchBackground/>} />
  <Route path="/element-directory/modifiers/border" element={<Border/>} />
  <Route path="/element-directory/modifiers/corners-radius" element={<CornersRadius/>} />
  <Route path="/element-directory/modifiers/count" element={<Count/>} />
  <Route path="/element-directory/modifiers/count/fixed" element={<CountFixed/>} />
  <Route path="/element-directory/modifiers/count/infinity" element={<CountInfinity/>} />
  <Route path="/element-directory/modifiers/dimention" element={<Dimention/>} />
  <Route path="/element-directory/modifiers/drawable" element={<Drawable />} />
  <Route path="/element-directory/modifiers/drawable/shape-drawable" element={<ShapeDrawable />} />
  <Route path='/element-directory/modifiers/edge-insets' element={<EdgeInsets />} />       
  <Route path='/element-directory/modifiers/extension' element={<Extension />} />
  <Route path='/element-directory/modifiers/filter' element={<Filter />} />
  <Route path='/element-directory/modifiers/filter/blur' element={<Blur />} />
  <Route path='/element-directory/modifiers/filter/filter-rtl-mirror' element={<FilterRtlMirror />} />
  <Route path='/element-directory/modifiers/focus' element={<Focus />} />
  <Route path='/element-directory/modifiers/indicator-item-placement' element={<IndicatorItemPlacement />} />
  <Route path="/element-directory/modifiers/indicator-item-placement/default-indicator-item-placement" element={<DefaultIndicatorItemPlacement />}/>
  <Route path="/element-directory/modifiers/indicator-item-placement/stretch-indicator-item-placement" element={<StretchIndicatorItemPlacement />} />
  <Route path="/element-directory/modifiers/pager-layout-mode" element={<PagerLayoutMode />} />
  <Route path="/element-directory/modifiers/pager-layout-mode/pager-size" element={<PagerSize />} />
  <Route path="/element-directory/modifiers/pager-layout-mode/neighbour-page-size" element={<NeighbourPageSize />} /> 
  <Route path="/element-directory/modifiers/patch" element={<Patch />} />
  <Route path="/element-directory/modifiers/percentage-size" element={<PrecentageSize />} />
  <Route path='/element-directory/modifiers/pivot' element={<Pivot />} />
  <Route path='/element-directory/modifiers/pivot/fixed' element={<PivotFixed />} />
  <Route path='/element-directory/modifiers/pivot/percentage' element={<PivotPercentage />} />
  <Route path='/element-directory/modifiers/point' element={<Point />} />
  <Route path='/element-directory/modifiers/shadow' element={<Shadow />} />
  <Route path='/element-directory/modifiers/shape' element={<Shape />} />
  <Route path='/element-directory/modifiers/shape/rounded-rectangle' element={<RoundedRectangleShape />} />
  <Route path='/element-directory/modifiers/shape/circle' element={<Circle />} />
  <Route path='/element-directory/modifiers/size' element={<Size />} />
  <Route path='/element-directory/modifiers/size/fixed' element={<FixedSize />} />
  <Route path='/element-directory/modifiers/size/match-parent' element={<MatchParent />} />
  <Route path='/element-directory/modifiers/size/wrap-content' element={<WrapContent />} />
  <Route path='/element-directory/modifiers/stroke' element={<Stroke />} />
  <Route path='/element-directory/modifiers/text-gradient' element={<TextGradient />} />
  <Route path='/element-directory/modifiers/text-range-background' element={<TextRangeBackground />} />
  <Route path='/element-directory/modifiers/text-range-border' element={<TextRangeBorder />} />
  <Route path='/element-directory/modifiers/timer' element={<Timer />} />
  <Route path='/element-directory/modifiers/tooltip' element={<ToolTip />} />
  <Route path='/element-directory/modifiers/transform' element={<Transform />} />
  <Route path='/element-directory/modifiers/transition/appearance' element={<AppearanceTransition />} />
  <Route path='/element-directory/modifiers/transition/appearance/set' element={<SetTransition />} />
  <Route path='/element-directory/modifiers/transition/appearance/fade' element={<FadeTransition />} />
  <Route path='/element-directory/modifiers/transition/appearance/scale' element={<ScaleTransition />} />
  <Route path='/element-directory/modifiers/transition/appearance/slide' element={<SlideTransition />} />
  <Route path='/element-directory/modifiers/change-transition' element={<ChangeTransition />} />
  <Route path='/element-directory/modifiers/change-transition/change-set-transition' element={<ChangeSetTransition />} />
  <Route path='/element-directory/modifiers/change-transition/change-bounds-transition' element={<ChangeBoundsTransition />} />
  <Route path='/element-directory/modifiers/trigger' element={<Trigger />} />
  <Route path='/element-directory/modifiers/visibility-action' element={<VisibilityAction />} />
  <Route path='/element-directory/modifiers/faq' element={<FAQ />} />
</Route>));

function App() {
  return (
      <div className="App g-root dc-root_wide-format g-root_theme_light">
        <Navbar />
        <RouterProvider router={Router} />
      </div>
   
  );
}

export default App;
