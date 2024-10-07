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
