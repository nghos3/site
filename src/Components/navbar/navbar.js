import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const RenderItems = ({ items }) => {
  const [openItems, setOpenItems] = useState([]);
  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log(item);
    if (openItems.includes(item.name)) {
      const tempOpenItems = [...openItems];
      tempOpenItems.splice(tempOpenItems.indexOf(item.name), 1);
      setOpenItems(tempOpenItems);
    } else {
      setOpenItems([...openItems, item.name]);
    }
  };

  console.log(openItems);
  return (
    <ul className="dc-toc__list" aria-labelledby={uuidv4()}>
      {items.map((item) => (
        <li
          id={uuidv4()}
          className="dc-toc__list-item dc-toc__list-item_main  dc-toc__list-item_opened"
        >
          {item.children && (
            <button
              className="dc-toc-item__text dc-toc-item__text_clicable"
              aria-expanded="true"
              aria-label={`Drop-down ${item.name}`}
              list
              onClick={() => handleClick(item)}
            >
              {openItems.includes(item.name) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="dc-toggle-arrow dc-toggle-arrow_type_horizontal dc-toggle-arrow_open dc-toggle-arrow_thin dc-toc-item__icon"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ): (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="dc-toggle-arrow dc-toggle-arrow_open dc-toggle-arrow_thin dc-toc-item__icon"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
              {!item.path && <span>{item.name}</span>}
              {item.path && (
                <span
                  onClick={() => navigate(item.path)}
                  target="_self"
                  className="dc-toc-item__link"
                  data-router-shallow="true"
                >
                  <div className="dc-toc-item__text dc-toc-item__text_clicable">
                    <span>{item.name}</span>
                  </div>
                </span>
              )}
            </button>
          )}
          {!item.children && (
            <span
              onClick={() => navigate(item.path)}
              target="_self"
              className="dc-toc-item__link"
              data-router-shallow="true"
            >
              <div className="dc-toc-item__text dc-toc-item__text_clicable">
                <span>{item.name}</span>
              </div>
            </span>
          )}
          {item.children &&
            item.children.length > 0 &&
            openItems.includes(item.name) && (
              <RenderItems items={item.children} />
            )}
        </li>
      ))}
    </ul>
  );
};

const items = [
  // {
  //   name: 'Creating a card',
  //   path: '/creating-card',
  //   children: [
  //     {  name: 'Element groups', path: '/creating-card/element-groups' },
  //     {  name: 'Element location and size', path: '/creating-card/element-location-and-size' },
  //     {  name: 'Visual element design', path: '/creating-card/visual-element-design' },
  //     {  name: 'Image properties', path: '/creating-card/image-properties'},
  //     {  name: 'Text properties', path: '/creating-card/text-properties'},
  //     {  name: 'Interactive Elements', path: '/creating-card/interactive-elements'},
  //     {  name: 'Animation', path: '/creating-card/animation'},
  //     {  name: 'Video', path: '/creating-card/video'},
  //     {  name: 'Action with elements', path: '/creating-card/action-with-elements'},
  //     {  name: 'Templates', path: '/creating-card/templates'},
  //     {  name: 'Variables', path: '/creating-card/variables'},
  //     {  name: 'Calculated expressions',path: '/creating-card/calculated-expressions' },
  //     {  name: 'Embedded functions', path: '/creating-card/embedded-function'}
  //   ],
  // },{
  //     name: 'Advanced Mechanics',
  //   children: [
  //     {  name: 'Reusing Blocks', path: '/advanced-mechanics/reusing-blocks',
  //         children: [{name: 'Android', path: '/advanced-mechanics/reusing-blocks/android'}] }
  //   ],
  // },
  // {
  //     name: 'Demo',
  //   children: [
  //     {  name: 'iOS', path: '/demo/ios' },
  //     {  name: 'Android', path: '/demo/android'  },
  //     {  name: 'Web', path: '/demo/web'  },
  //     {  name: 'Flutter', path: '/demo/flutter'  }
  //   ],
  // },
  {
    name: "Element Directory",
    children: [
      { name: 'Typical Structure', path: "/element-directory/typical-structure" },
      {
        name: "Basic Elements",
        children: [
          {
            name: "container",
            path: "/element-directory/basic-elements/container",
          },
          { name: "custom", path: "/element-directory/basic-elements/custom" },
          { name: "data", path: "/element-directory/basic-elements/data" },
          {
            name: "gallery",
            path: "/element-directory/basic-elements/gallery",
          },
          {
            name: "gif-image",
            path: "/element-directory/basic-elements/gif-image",
          },
          { name: "grid", path: "/element-directory/basic-elements/grid" },
          { name: "image", path: "/element-directory/basic-elements/image" },
          {
            name: "indicator",
            path: "/element-directory/basic-elements/indicator",
          },
          { name: "input", path: "/element-directory/basic-elements/input" },
          { name: "pager", path: "/element-directory/basic-elements/pager" },
          { name: "select", path: "/element-directory/basic-elements/select" },
          {
            name: "seperator",
            path: "/element-directory/basic-elements/seperator",
          },
          { name: "slider", path: "/element-directory/basic-elements/slider" },
          { name: "state", path: "/element-directory/basic-elements/state" },
          { name: "tabs", path: "/element-directory/basic-elements/tabs" },
          { name: "text", path: "/element-directory/basic-elements/text" },
          { name: "video", path: "/element-directory/basic-elements/video" },
        ],
      },
      {
        name: "Modifiers",
        children: [
          {
            name: "absolute-edge-insets",
            path: "/element-directory/modifiers/absolute-edge-insets",
          },
          {
            name: "accessibility",
            path: "/element-directory/modifiers/accessibility",
          },
          { name: "action", path: "/element-directory/modifiers/action" },
          { name: "animation", path: "/element-directory/modifiers/animation" },
          { name: "aspect", path: "/element-directory/modifiers/aspect" },
          {
            name: "background",
            path: "/element-directory/modifiers/background",
            children: [
              {
                name: "linear-gradient",
                path: "/element-directory/modifiers/background/linear-gradient",
              },
              {
                name: "radial-gradient",
                path: "/element-directory/modifiers/background/radial-gradient",
                children: [
                  {
                    name: "radial-gradient-center",
                    path: "/element-directory/modifiers/background/radial-gradient/center",
                    children: [
                      {
                        name: "fixed-center",
                        path: "/element-directory/modifiers/background/radial-gradient/center/fixed",
                      },
                      {
                        name: "relative-center",
                        path: "/element-directory/modifiers/background/radial-gradient/center/relative",
                      },
                    ],
                  },
                  {
                    name: "radial-gradient-radius",
                    path: "/element-directory/modifiers/background/radial-gradient/radius",
                    children: [
                      {
                        name: "relative-radius",
                        path: "/element-directory/modifiers/background/radial-gradient/radius/relative",
                      },
                    ],
                  },
                ],
              },
              {
                name: "image-background",
                path: "/element-directory/modifiers/background/image-background",
              },
              {
                name: "solid-background",
                path: "/element-directory/modifiers/background/solid-background",
              },
              {
                name: "nine-patch-background",
                path: "/element-directory/modifiers/background/nine-patch-background",
              },
            ],
          },
          { name: "border", path: "/element-directory/modifiers/border" },
          {
            name: "corners-radius",
            path: "/element-directory/modifiers/corners-radius",
          },
          {
            name: "count",
            path: "/element-directory/modifiers/count",
            children: [
              {
                name: "count-infinity",
                path: "/element-directory/modifiers/count/infinity",
              },
              {
                name: "count-fixed",
                path: "/element-directory/modifiers/count/fixed",
              },
            ],
          },
          { name: "dimention", path: "/element-directory/modifiers/dimention" },
          {
            name: "drawable",
            path: "/element-directory/modifiers/drawable",
            children: [
              {
                name: "shape-drawable",
                path: "/element-directory/modifiers/drawable/shape-drawable",
              },
            ],
          },
          {
            name: "edge-inets",
            path: "/element-directory/modifiers/edge-insets",
          },
          { name: "extension", path: "/element-directory/modifiers/extension" },
          {
            name: "filter",
            path: "/element-directory/modifiers/filter",
            children: [
              {
                name: "blur",
                path: "/element-directory/modifiers/filter/blur",
              },
              {
                name: "filter-rtl-mirror",
                path: "/element-directory/modifiers/filter/filter-rtl-mirror",
              },
            ],
          },
          { name: "focus", path: "/element-directory/modifiers/focus" },
          {
            name: "indicator-item-placement",
            path: "/element-directory/modifiers/indicator-item-placement",
            children: [
              {
                name: "default-indicator-item-placement",
                path: "/element-directory/modifiers/indicator-item-placement/default-indicator-item-placement",
              },
              {
                name: "stretch-indicator-item-placement",
                path: "/element-directory/modifiers/indicator-item-placement/stretch-indicator-item-placement",
              },
            ],
          },
          {
            name: "pager-layout-mode",
            path: "/element-directory/modifiers/pager-layout-mode",
            children: [
              {
                name: "pager-size",
                path: "/element-directory/modifiers/pager-layout-mode/pager-size",
              },
              {
                name: "neighbour-page-size",
                path: "/element-directory/modifiers/pager-layout-mode/neighbour-page-size",
              },
            ],
          },
          { name: "patch", path: "/element-directory/modifiers/patch" },
          {
            name: "percentage-size",
            path: "/element-directory/modifiers/percentage-size",
          },
          {
            name: "pivot",
            path: "/element-directory/modifiers/pivot",
            children: [
              {
                name: "pivot-fixed",
                path: "/element-directory/modifiers/pivot/fixed",
              },
              {
                name: "pivot-percentage",
                path: "/element-directory/modifiers/pivot/percentage",
              },
            ],
          },
          { name: "point", path: "/element-directory/modifiers/point" },
          { name: "shadow", path: "/element-directory/modifiers/shadow" },
          {
            name: "shape",
            path: "/element-directory/modifiers/shape",
            children: [
              {
                name: "rounded-rectangle",
                path: "/element-directory/modifiers/shape/rounded-rectangle",
              },
              {
                name: "circle",
                path: "/element-directory/modifiers/shape/circle",
              },
            ],
          },
          {
            name: "size",
            path: "/element-directory/modifiers/size",
            children: [
              {
                name: "fixed",
                path: "/element-directory/modifiers/size/fixed",
              },
              {
                name: "match-parent",
                path: "/element-directory/modifiers/size/match-parent",
              },
              {
                name: "wrap-content",
                path: "/element-directory/modifiers/size/wrap-content",
              },
            ],
          },
          { name: "stroke", path: "/element-directory/modifiers/stroke" },
          {
            name: "text-gradient",
            path: "/element-directory/modifiers/text-gradient",
            children: [
              {
                name: "linear",
                path: "/element-directory/modifiers/background/linear-gradient",
              },
              {
                name: "radial",
                path: "/element-directory/modifiers/background/radial-gradient",
              },
            ],
          },
          {
            name: "text-range-background",
            path: "/element-directory/modifiers/text-range-background",
            children: [
              {
                name: "solid-background",
                path: "/element-directory/modifiers/background/solid-background",
              },
            ],
          },
          //     {name: "text-range-border", path: '/element-directory/modifiers/text-range-border'},
          //     {name: "timer", path: '/element-directory/modifiers/timer'},
          //     {name: "tooltip", path: '/element-directory/modifiers/tooltip'},
          //     {name: "transform", path: '/element-directory/modifiers/transform'},
          //     {name: "transition", path: '/element-directory/modifiers/transition'},
          //     {name: "change-bounds-transition", path: '/element-directory/modifiers/change-bounds-transition'},
          //     {name: "trigger", path: '/element-directory/modifiers/trigger'},
          //     {name: "visibility-action", path: '/element-directory/modifiers/visibility-action'},
        ],
      },
    ],
  },
  {
      name: 'Customizations',
       path: '/customizations'
  },
  {
      name: 'FAQ',
       path: '/faq'
  },
];

const Navbar = () => {
  return (
    <div className="dc-doc-layout__left">
      <div className="dc-doc-layout__toc">
        <nav className="dc-toc nav-bar">
          <div className="dc-toc__content dc-toc__content_offset_top">
            {/* {renderItems(items)} */}
            <RenderItems items={items} />
          </div>
          <div className="dc-toc__bottom"></div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
