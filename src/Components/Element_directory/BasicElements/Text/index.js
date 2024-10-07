import React from "react";
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();
  return (
    <div class="dc-doc-layout__center">
      <div class="dc-doc-page__breadcrumbs">
        <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
          <ol class="dc-breadcrumbs__items">
            <li class="dc-breadcrumbs__item">
              <span class="dc-breadcrumbs__text">Element directory</span>
            </li>
            <li class="dc-breadcrumbs__item">
              <span class="dc-breadcrumbs__text">Basic elements</span>
            </li>
            <li class="dc-breadcrumbs__item">
              <span
                class="dc-breadcrumbs__text"
                href="en/concepts/divs/2/div-text"
                aria-current="page"
              >
                text
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <div class="dc-doc-page__controls">
        <div class="dc-controls">
          <button
            aria-label="Reading mode"
            class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-controls__control"
            type="button"
          >
            <span class="g-button__icon">
              <span class="g-button__icon-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M4.5 3A1.5 1.5 0 0 0 3 4.5v1.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h1.75a.75.75 0 0 1 0 1.5H4.5ZM9 2.25a.75.75 0 0 1 .75-.75h1.75a3 3 0 0 1 3 3v1.75a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 11.5 3H9.75A.75.75 0 0 1 9 2.25ZM2.25 9a.75.75 0 0 1 .75.75v1.75A1.5 1.5 0 0 0 4.5 13h1.75a.75.75 0 0 1 0 1.5H4.5a3 3 0 0 1-3-3V9.75A.75.75 0 0 1 2.25 9Zm11.5 0a.75.75 0 0 1 .75.75v1.75a3 3 0 0 1-3 3H9.75a.75.75 0 0 1 0-1.5h1.75a1.5 1.5 0 0 0 1.5-1.5V9.75a.75.75 0 0 1 .75-.75Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
          <div class="dc-divider-control dc-divider-control_vertical dc-controls__divider"></div>
          <button
            aria-label="Helpful"
            class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-feedback__control dc-feedback__control_view_regular dc-controls__control"
            type="button"
          >
            <span class="g-button__icon">
              <span class="g-button__icon-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="m4 7 2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5 9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14 4 7Zm5.771 6.11-3.863-.455-.379-5.3 2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106l-.5-7Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
          <button
            aria-label="Not helpful"
            class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-feedback__control dc-feedback__control_view_regular dc-controls__control"
            type="button"
          >
            <span class="g-button__icon">
              <span class="g-button__icon-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="m12 9-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7ZM6.229 2.89l3.863.455.379 5.3-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106l.5 7Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="dc-doc-page__main">
        <main class="dc-doc-page__content">
          <h1 class="dc-doc-page-title dc-doc-page__title">
            <span>div-text</span>
          </h1>
          <div class="dc-doc-page__page-contributors"></div>
          <div class="dc-doc-page__content-mini-toc yfm">
            <ul>
              <li>
                <a href="en/concepts/divs/2/div-text#parameters">Parameters</a>
                <ul>
                  <li>
                    <a href="en/concepts/divs/2/div-text#range">range</a>
                  </li>
                  <li>
                    <a href="en/concepts/divs/2/div-text#image">image</a>
                  </li>
                  <li>
                    <a href="en/concepts/divs/2/div-text#accessibility">
                      accessibility
                    </a>
                  </li>
                  <li>
                    <a href="en/concepts/divs/2/div-text#ellipsis">ellipsis</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
            <p>Text.</p>
            <h2 id="parameters">
              <a
                href="en/concepts/divs/2/div-text#parameters"
                class="yfm-anchor"
                aria-hidden="true"
              ></a>
              Parameters
            </h2>
            <table>
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>text</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>Text.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>type</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>
                      The value must always be <code>text</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>accessibility</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Accessibility settings.</p>
                    <p>
                      The value has the type <code>div-accessibility</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>action</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      One action when clicking on an element. Not used if the{" "}
                      <code>actions</code>
                      parameter is set.
                    </p>
                    <p>
                      The value has the type <code>div-action</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>action_animation</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Click animation. The web only supports the following
                      values: <code>fade</code>,<code>scale</code>,{" "}
                      <code>native</code>, <code>no_animation</code> and
                      <code>set</code>.
                    </p>
                    <p>
                      The value has the type <code>div-animation</code>.
                    </p>
                    <p>
                      Default value:
                      <code>{`{"name": "fade", "start_value": 1, "end_value": 0.6, "duration": 100 }`}</code>
                      .
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Multiple actions when clicking on an element.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>alignment_horizontal</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Horizontal alignment of an element inside the parent
                      element.
                    </p>
                    <p>
                      Possible values: <code>left</code>, <code>center</code>,{" "}
                      <code>right</code>,<code>start</code>, <code>end</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>alignment_vertical</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Vertical alignment of an element inside the parent
                      element.
                    </p>
                    <p>
                      Possible values: <code>top</code>, <code>center</code>,{" "}
                      <code>bottom</code>,<code>baseline</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>alpha</code>
                  </td>
                  <td>
                    <p>
                      <strong>number</strong>
                    </p>
                    <p>
                      Sets transparency of the entire element: <code>0</code> —
                      completely transparent,
                      <code>1</code> — opaque.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:
                      <code>x &gt;= 0.0 &amp;&amp; x &lt;= 1.0</code>.
                    </p>
                    <p>
                      Default value: <code>1.0</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>animators</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      Declaration of animators that can be used to change the
                      value of variables over time.
                    </p>
                    <p>Functionality is under development.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-color-animator#div-color-animator">
                        div-color-animator
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-number-animator#div-number-animator">
                        div-number-animator
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>auto_ellipsize</code>
                  </td>
                  <td>
                    <p>
                      <strong>bool_int</strong>
                    </p>
                    <p>Automatic text cropping to fit the container size.</p>
                    <p>Available platforms: Android, web, Flutter.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>background</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Element background. It can contain multiple layers.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-linear-gradient#div-linear-gradient">
                        div-linear-gradient
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-radial-gradient#div-radial-gradient">
                        div-radial-gradient
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-image-background#div-image-background">
                        div-image-background
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-solid-background#div-solid-background">
                        div-solid-background
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-nine-patch-background#div-nine-patch-background">
                        div-nine-patch-background
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>border</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Element stroke.</p>
                    <p>
                      The value has the type <code>div-border</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>column_span</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>
                      Merges cells in a column of the{" "}
                      <a href="en/concepts/divs/2/div-grid">grid</a>
                      element.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>disappear_actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Actions when an element disappears from the screen.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>doubletap_actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Action when double-clicking on an element.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>ellipsis</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Text cropping marker. It is displayed when text size
                      exceeds the limit on the number of lines.
                    </p>
                    <p>
                      The value has the type <code>ellipsis</code>.
                    </p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>extensions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      Extensions for additional processing of an element. The
                      list of extensions is given in{" "}
                      <a href="en/concepts/extensions">DivExtension</a>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>focus</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Parameters when focusing on an element or losing focus.
                    </p>
                    <p>
                      The value has the type <code>div-focus</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>focused_text_color</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Text color when focusing on the element.</p>
                    <p>
                      Valid formats: <code>#RGB</code>, <code>#ARGB</code>,{" "}
                      <code>#RRGGBB</code>,<code>#AARRGGBB</code>.
                    </p>
                    <p>Available platforms: Android, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_family</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Font family:</p>
                    <li>
                      <code>text</code> — a standard text font;
                    </li>
                    <li>
                      <code>display</code> — a family of fonts with a large font
                      size.
                    </li>
                    <p></p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_feature_settings</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      List of OpenType font features. The format matches the CSS
                      attribute "font-feature-settings". Learn more:
                      https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_size</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Font size.</p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>
                      Default value: <code>12</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_size_unit</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Possible values: <code>dp</code>, <code>sp</code>,{" "}
                      <code>px</code>.
                    </p>
                    <p>
                      Default value: <code>sp</code>.
                    </p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_weight</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Style.</p>
                    <p>
                      Possible values: <code>light</code>, <code>medium</code>,{" "}
                      <code>regular</code>,<code>bold</code>.
                    </p>
                    <p>
                      Default value: <code>regular</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_weight_value</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Style. Numeric value.</p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt; 0</code>.
                    </p>
                    <p>Available platforms: iOS, Android, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>functions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Custom functions.</p>
                    <p>Available platforms: iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>height</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Element height. For Android: if there is text in this or
                      in a child element, specify height in <code>sp</code> to
                      scale the element together with the text. To learn more
                      about units of size measurement, see{" "}
                      <a href="en/concepts/layout">Layout inside the card</a>.
                    </p>
                    <p>
                      The value has the type <code>div-size</code>.
                    </p>
                    <p>
                      Default value: <code>{`{"type": "wrap_content"}`}</code>.
                    </p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-fixed-size#div-fixed-size">
                        div-fixed-size
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-match-parent-size#div-match-parent-size">
                        div-match-parent-size
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-wrap-content-size#div-wrap-content-size">
                        div-wrap-content-size
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Element ID. It must be unique within the root element. It
                      is used as
                      <code>accessibilityIdentifier</code> on iOS.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>images</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Images embedded in text.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>layout_provider</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Provides element real size values after a layout cycle.
                    </p>
                    <p>
                      The value has the type <code>div-layout-provider</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>letter_spacing</code>
                  </td>
                  <td>
                    <p>
                      <strong>number</strong>
                    </p>
                    <p>Spacing between characters.</p>
                    <p>
                      Default value: <code>0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>line_height</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Line spacing of the text.</p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>longtap_actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      Action when long-clicking an element. Doesn't work on
                      devices that don't support touch gestures.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>margins</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>External margins from the element stroke.</p>
                    <p>
                      The value has the type <code>div-edge-insets</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>max_lines</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>
                      Maximum number of lines not to be cropped when breaking
                      the limits.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>min_hidden_lines</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>
                      Minimum number of cropped lines when breaking the limits.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>paddings</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Internal margins from the element stroke.</p>
                    <p>
                      The value has the type <code>div-edge-insets</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>ranges</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      A character range in which additional style parameters can
                      be set. Defined by mandatory <code>start</code> and{" "}
                      <code>end</code> fields.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>reuse_id</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Id for the div structure. Used for more optimal reuse of
                      blocks. See{" "}
                      <a href="en/concepts/reuse/reuse">reusing blocks</a>
                    </p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>row_span</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>
                      Merges cells in a string of the{" "}
                      <a href="en/concepts/divs/2/div-grid">grid</a>
                      element.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>selectable</code>
                  </td>
                  <td>
                    <p>
                      <strong>bool_int</strong>
                    </p>
                    <p>Ability to select and copy text.</p>
                    <p>
                      Default value: <code>false</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>selected_actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      List of{" "}
                      <a href="en/concepts/divs/2/div-action">actions</a> to be
                      executed when selecting an element in{" "}
                      <a href="en/concepts/divs/2/div-pager">pager</a>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>strike</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Strikethrough.</p>
                    <p>
                      Possible values: <code>none</code>, <code>single</code>.
                    </p>
                    <p>
                      Default value: <code>none</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>text_alignment_horizontal</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Horizontal text alignment.</p>
                    <p>
                      Possible values: <code>left</code>, <code>center</code>,{" "}
                      <code>right</code>,<code>start</code>, <code>end</code>.
                    </p>
                    <p>
                      Default value: <code>start</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>text_alignment_vertical</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Vertical text alignment.</p>
                    <p>
                      Possible values: <code>top</code>, <code>center</code>,{" "}
                      <code>bottom</code>,<code>baseline</code>.
                    </p>
                    <p>
                      Default value: <code>top</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>text_color</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Text color. Not used if the <code>text_gradient</code>{" "}
                      parameter is set.
                    </p>
                    <p>
                      Valid formats: <code>#RGB</code>, <code>#ARGB</code>,{" "}
                      <code>#RRGGBB</code>,<code>#AARRGGBB</code>.
                    </p>
                    <p>
                      Default value: <code>#FF000000</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>text_gradient</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Gradient text color.</p>
                    <p>
                      The value has the type <code>div-text-gradient</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-linear-gradient#div-linear-gradient">
                        div-linear-gradient
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-radial-gradient#div-radial-gradient">
                        div-radial-gradient
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>text_shadow</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Parameters of the shadow applied to the text.</p>
                    <p>
                      The value has the type <code>div-shadow</code>.
                    </p>
                    <p>Available platforms: Android, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>tighten_width</code>
                  </td>
                  <td>
                    <p>
                      <strong>bool_int</strong>
                    </p>
                    <p>
                      Set text width to maximal line width, works only with
                      wrap_content width with constrained=true and max_size set
                    </p>
                    <p>
                      Default value: <code>false</code>.
                    </p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>tooltips</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      Tooltips linked to an element. A tooltip can be shown by
                      <code>div-action://show_tooltip?id=</code>, hidden by
                      <code>div-action://hide_tooltip?id=</code> where{" "}
                      <code>id</code> — tooltip id.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>transform</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Applies the passed transformation to the element. Content
                      that doesn't fit into the original view area is cut off.
                    </p>
                    <p>
                      The value has the type <code>div-transform</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>transition_change</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Change animation. It is played when the position or size
                      of an element changes in the new layout.
                    </p>
                    <p>
                      The value has the type <code>div-change-transition</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-change-set-transition#div-change-set-transition">
                        div-change-set-transition
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-change-bounds-transition#div-change-bounds-transition">
                        div-change-bounds-transition
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>transition_in</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Appearance animation. It is played when an element with a
                      new ID appears. To learn more about the concept of
                      transitions, see{" "}
                      <a href="en/concepts/interaction#animation/transition-animation">
                        Animated transitions
                      </a>
                      .
                    </p>
                    <p>
                      The value has the type{" "}
                      <code>div-appearance-transition</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-appearance-set-transition#div-appearance-set-transition">
                        div-appearance-set-transition
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-fade-transition#div-fade-transition">
                        div-fade-transition
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-scale-transition#div-scale-transition">
                        div-scale-transition
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-slide-transition#div-slide-transition">
                        div-slide-transition
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>transition_out</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Disappearance animation. It is played when an element
                      disappears in the new layout.
                    </p>
                    <p>
                      The value has the type{" "}
                      <code>div-appearance-transition</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-appearance-set-transition#div-appearance-set-transition">
                        div-appearance-set-transition
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-fade-transition#div-fade-transition">
                        div-fade-transition
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-scale-transition#div-scale-transition">
                        div-scale-transition
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-slide-transition#div-slide-transition">
                        div-slide-transition
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>transition_triggers</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      Animation starting triggers. Default value:
                      <code>[state_change, visibility_change]</code>.
                    </p>
                    <p>An array must not be empty.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>truncate</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Parameter is deprecated.</p>
                    <p>
                      Text cropping method. Use <code>ellipsis</code> instead.
                    </p>
                    <p>
                      Possible values: <code>none</code>, <code>start</code>,{" "}
                      <code>end</code>,<code>middle</code>.
                    </p>
                    <p>
                      Default value: <code>end</code>.
                    </p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>underline</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Underline.</p>
                    <p>
                      Possible values: <code>none</code>, <code>single</code>.
                    </p>
                    <p>
                      Default value: <code>none</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>variable_triggers</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Triggers for changing variables within an element.</p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>variables</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      Definition of variables that can be used within this
                      element. These variables, defined in the array, can only
                      be used inside this element and its children.
                    </p>
                    <p>Available platforms: iOS, web, Android.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/string_variable#string_variable">
                        string_variable
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/number_variable#number_variable">
                        number_variable
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/integer_variable#integer_variable">
                        integer_variable
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/boolean_variable#boolean_variable">
                        boolean_variable
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/color_variable#color_variable">
                        color_variable
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/url_variable#url_variable">
                        url_variable
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/dict_variable#dict_variable">
                        dict_variable
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/array_variable#array_variable">
                        array_variable
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>visibility</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Element visibility.</p>
                    <p>
                      Possible values: <code>visible</code>,{" "}
                      <code>invisible</code>, <code>gone</code>.
                    </p>
                    <p>
                      Default value: <code>visible</code>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>visibility_action</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Tracking visibility of a single element. Not used if the
                      <code>visibility_actions</code> parameter is set.
                    </p>
                    <p>
                      The value has the type <code>div-visibility-action</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>visibility_actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Actions when an element appears on the screen.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>width</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Element width.</p>
                    <p>
                      The value has the type <code>div-size</code>.
                    </p>
                    <p>
                      Default value: <code>{`{"type": "match_parent"}`}</code>.
                    </p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-fixed-size#div-fixed-size">
                        div-fixed-size
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-match-parent-size#div-match-parent-size">
                        div-match-parent-size
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-wrap-content-size#div-wrap-content-size">
                        div-wrap-content-size
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 id="range">
              <a
                href="en/concepts/divs/2/div-text#range"
                class="yfm-anchor"
                aria-hidden="true"
              ></a>
              range
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>end</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>
                      Ordinal number of the last character to be included in the
                      range.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt; 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>start</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>
                      Ordinal number of a character which the range begins from.
                      The first character has a number <code>0</code>.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Action when clicking on text.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>alignment_vertical</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Vertical text range alignment within a string.</p>
                    <p>
                      Possible values: <code>top</code>, <code>center</code>,{" "}
                      <code>bottom</code>,<code>baseline</code>.
                    </p>
                    <p>Available platforms: Android.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>background</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Character range background.</p>
                    <p>
                      The value has the type{" "}
                      <code>div-text-range-background</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-solid-background#div-solid-background">
                        div-solid-background
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>border</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Character range border.</p>
                    <p>
                      The value has the type <code>div-text-range-border</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_family</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Font family:</p>
                    <li>
                      <code>text</code> — a standard text font;
                    </li>
                    <li>
                      <code>display</code> — a family of fonts with a large font
                      size.
                    </li>
                    <p></p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_feature_settings</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      List of OpenType font features. The format matches the CSS
                      attribute "font-feature-settings". Learn more:
                      https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_size</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Font size.</p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_size_unit</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Unit of measurement:</p>
                    <li>
                      <code>px</code> — a physical pixel.
                    </li>
                    <li>
                      <code>dp</code> — a logical pixel that doesn't depend on
                      screen density.
                    </li>
                    <li>
                      <code>sp</code> — a logical pixel that depends on the font
                      size on a device. Specify height in <code>sp</code>. Only
                      available on Android.
                    </li>
                    <p></p>
                    <p>
                      Possible values: <code>dp</code>, <code>sp</code>,{" "}
                      <code>px</code>.
                    </p>
                    <p>
                      Default value: <code>sp</code>.
                    </p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_weight</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Style.</p>
                    <p>
                      Possible values: <code>light</code>, <code>medium</code>,{" "}
                      <code>regular</code>,<code>bold</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>font_weight_value</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Style. Numeric value.</p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt; 0</code>.
                    </p>
                    <p>Available platforms: iOS, web, Android.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>letter_spacing</code>
                  </td>
                  <td>
                    <p>
                      <strong>number</strong>
                    </p>
                    <p>Spacing between characters.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>line_height</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>
                      Line spacing of the text. Units specified in{" "}
                      <code>font_size_unit</code>.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>strike</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Strikethrough.</p>
                    <p>
                      Possible values: <code>none</code>, <code>single</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>text_color</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Text color.</p>
                    <p>
                      Valid formats: <code>#RGB</code>, <code>#ARGB</code>,{" "}
                      <code>#RRGGBB</code>,<code>#AARRGGBB</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>text_shadow</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      Parameters of the shadow applied to the character range.
                    </p>
                    <p>
                      The value has the type <code>div-shadow</code>.
                    </p>
                    <p>Available platforms: Android, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>top_offset</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>
                      Top margin of the character range. Units specified in{" "}
                      <code>font_size_unit</code>.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>underline</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Underline.</p>
                    <p>
                      Possible values: <code>none</code>, <code>single</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 id="image">
              <a
                href="en/concepts/divs/2/div-text#image"
                class="yfm-anchor"
                aria-hidden="true"
              ></a>
              image
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>start</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>
                      A symbol to insert prior to an image. To insert an image
                      at the end of the text, specify the number of the last
                      character plus one.
                    </p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>url</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>Image URL.</p>
                    <p>The value must be a valid URL.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>accessibility</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>
                      The value has the type <code>accessibility</code>.
                    </p>
                    <p>Available platforms: Android.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>alignment_vertical</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Vertical text image alignment within a string.</p>
                    <p>
                      Possible values: <code>top</code>, <code>center</code>,{" "}
                      <code>bottom</code>,<code>baseline</code>.
                    </p>
                    <p>
                      Default value: <code>center</code>.
                    </p>
                    <p>Available platforms: Android.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>height</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Image height.</p>
                    <p>
                      The value has the type <code>div-fixed-size</code>.
                    </p>
                    <p>
                      Default value:{" "}
                      <code>{`{"type": "fixed","value":20}`}</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>preload_required</code>
                  </td>
                  <td>
                    <p>
                      <strong>bool_int</strong>
                    </p>
                    <p>Background image must be loaded before the display.</p>
                    <p>
                      Default value: <code>false</code>.
                    </p>
                    <p>Available platforms: web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>tint_color</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>New color of a contour image.</p>
                    <p>
                      Valid formats: <code>#RGB</code>, <code>#ARGB</code>,{" "}
                      <code>#RRGGBB</code>,<code>#AARRGGBB</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>tint_mode</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Blend mode of the color specified in{" "}
                      <code>tint_color</code>.
                    </p>
                    <p>
                      Possible values: <code>source_in</code>,{" "}
                      <code>source_atop</code>,<code>darken</code>,{" "}
                      <code>lighten</code>, <code>multiply</code>,
                      <code>screen</code>.
                    </p>
                    <p>
                      Default value: <code>source_in</code>.
                    </p>
                    <p>Available platforms: Android, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>width</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Image width.</p>
                    <p>
                      The value has the type <code>div-fixed-size</code>.
                    </p>
                    <p>
                      Default value:{" "}
                      <code>{`{"type": "fixed","value":20}`}</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 id="accessibility">
              <a
                href="en/concepts/divs/2/div-text#accessibility"
                class="yfm-anchor"
                aria-hidden="true"
              ></a>
              accessibility
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>description</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Element description. It is used as the main description
                      for screen reading applications.
                    </p>
                    <p>Available platforms: Android.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>type</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Element role. Used to correctly identify an element by the
                      accessibility service. For example, the <code>list</code>{" "}
                      element is used to group list elements into one element.
                    </p>
                    <p>
                      Possible values: <code>none</code>, <code>button</code>,{" "}
                      <code>image</code>,<code>text</code>, <code>auto</code>.
                    </p>
                    <p>
                      Default value: <code>auto</code>.
                    </p>
                    <p>Available platforms: Android.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 id="ellipsis">
              <a
                href="en/concepts/divs/2/div-text#ellipsis"
                class="yfm-anchor"
                aria-hidden="true"
              ></a>
              ellipsis
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>text</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>Marker text.</p>
                    <p>Available platforms: Android, iOS.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>actions</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Actions when clicking on a crop marker.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>images</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Images embedded in a crop marker.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>ranges</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>
                      Character ranges inside a crop marker with different text
                      styles.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <details>
              <summary>JSON</summary>

              <div class="yfm-clipboard">
                <pre>
                  <code class="hljs json">
                    {`{
                                    type*: "text",
                                    accessibility: {
                                      description: "string",
                                      hint: "string",
                                      mode: "string",
                                      mute_after_action: "bool_int",
                                      state_description: "string",
                                      type: "string"
                                    },
                                    action: {
                                      download_callbacks: {
                                        on_fail_actions: [ div-action, ... ],
                                        on_success_actions: [ div-action, ... ]
                                      },
                                      is_enabled: "bool_int",
                                      log_id*: "string",
                                      log_url: "string",
                                      menu_items: [
                                        {
                                          action: div-action,
                                          actions: [ div-action, ... ],
                                          text*: "string"
                                        },
                                        ...
                                      ],
                                      payload: "object",
                                      referer: "string",
                                      scope_id: "string",
                                      target: "string",
                                      typed: div-action-typed,
                                      url: "string"
                                    },
                                    action_animation: {
                                      duration: "int",
                                      end_value: "number",
                                      interpolator: "string",
                                      items: [ div-animation, ... ],
                                      name*: "string",
                                      repeat: div-count,
                                      start_delay: "int",
                                      start_value: "number"
                                    },
                                    actions: [
                                      {
                                        download_callbacks: {
                                          on_fail_actions: [ div-action, ... ],
                                          on_success_actions: [ div-action, ... ]
                                        },
                                        is_enabled: "bool_int",
                                        log_id*: "string",
                                        log_url: "string",
                                        menu_items: [
                                          {
                                            action: div-action,
                                            actions: [ div-action, ... ],
                                            text*: "string"
                                          },
                                          ...
                                        ],
                                        payload: "object",
                                        referer: "string",
                                        scope_id: "string",
                                        target: "string",
                                        typed: div-action-typed,
                                        url: "string"
                                      },
                                      ...
                                    ],
                                    alignment_horizontal: "string",
                                    alignment_vertical: "string",
                                    alpha: "number",
                                    animators: [ div-animator, ... ],
                                    auto_ellipsize: "bool_int",
                                    background: [ div-background, ... ],
                                    border: {
                                      corner_radius: "int",
                                      corners_radius: {
                                        bottom-left: "int",
                                        bottom-right: "int",
                                        top-left: "int",
                                        top-right: "int"
                                      },
                                      has_shadow: "bool_int",
                                      shadow: {
                                        alpha: "number",
                                        blur: "int",
                                        color: "string",
                                        offset*: {
                                          x*: {
                                            unit: "string",
                                            value*: "number"
                                          },
                                          y*: {
                                            unit: "string",
                                            value*: "number"
                                          }
                                        }
                                      },
                                      stroke: {
                                        color*: "string",
                                        unit: "string",
                                        width: "number"
                                      }
                                    },
                                    column_span: "int",
                                    disappear_actions: [
                                      {
                                        disappear_duration: "int",
                                        download_callbacks: {
                                          on_fail_actions: [
                                            {
                                              download_callbacks: div-download-callbacks,
                                              is_enabled: "bool_int",
                                              log_id*: "string",
                                              log_url: "string",
                                              menu_items: [
                                                {
                                                  action: div-action,
                                                  actions: [ div-action, ... ],
                                                  text*: "string"
                                                },
                                                ...
                                              ],
                                              payload: "object",
                                              referer: "string",
                                              scope_id: "string",
                                              target: "string",
                                              typed: div-action-typed,
                                              url: "string"
                                            },
                                            ...
                                          ],
                                          on_success_actions: [
                                            {
                                              download_callbacks: div-download-callbacks,
                                              is_enabled: "bool_int",
                                              log_id*: "string",
                                              log_url: "string",
                                              menu_items: [
                                                {
                                                  action: div-action,
                                                  actions: [ div-action, ... ],
                                                  text*: "string"
                                                },
                                                ...
                                              ],
                                              payload: "object",
                                              referer: "string",
                                              scope_id: "string",
                                              target: "string",
                                              typed: div-action-typed,
                                              url: "string"
                                            },
                                            ...
                                          ]
                                        },
                                        is_enabled: "bool_int",
                                        log_id*: "string",
                                        log_limit: "int",
                                        payload: "object",
                                        referer: "string",
                                        scope_id: "string",
                                        typed: div-action-typed,
                                        url: "string",
                                        visibility_percentage: "int"
                                      },
                                      ...
                                    ],
                                    doubletap_actions: [
                                      {
                                        download_callbacks: {
                                          on_fail_actions: [ div-action, ... ],
                                          on_success_actions: [ div-action, ... ]
                                        },
                                        is_enabled: "bool_int",
                                        log_id*: "string",
                                        log_url: "string",
                                        menu_items: [
                                          {
                                            action: div-action,
                                            actions: [ div-action, ... ],
                                            text*: "string"
                                          },
                                          ...
                                        ],
                                        payload: "object",
                                        referer: "string",
                                        scope_id: "string",
                                        target: "string",
                                        typed: div-action-typed,
                                        url: "string"
                                      },
                                      ...
                                    ],
                                    ellipsis: {
                                      actions: [
                                        {
                                          download_callbacks: {
                                            on_fail_actions: [ div-action, ... ],
                                            on_success_actions: [ div-action, ... ]
                                          },
                                          is_enabled: "bool_int",
                                          log_id*: "string",
                                          log_url: "string",
                                          menu_items: [
                                            {
                                              action: div-action,
                                              actions: [ div-action, ... ],
                                              text*: "string"
                                            },
                                            ...
                                          ],
                                          payload: "object",
                                          referer: "string",
                                          scope_id: "string",
                                          target: "string",
                                          typed: div-action-typed,
                                          url: "string"
                                        },
                                        ...
                                      ],
                                      images: [
                                        {
                                          accessibility: {
                                            description: "string",
                                            type: "string"
                                          },
                                          alignment_vertical: "string",
                                          height: {
                                            type*: "fixed",
                                            unit: "string",
                                            value*: "int"
                                          },
                                          preload_required: "bool_int",
                                          start*: "int",
                                          tint_color: "string",
                                          tint_mode: "string",
                                          url*: "string",
                                          width: {
                                            type*: "fixed",
                                            unit: "string",
                                            value*: "int"
                                          }
                                        },
                                        ...
                                      ],
                                      ranges: [
                                        {
                                          actions: [
                                            {
                                              download_callbacks: {
                                                on_fail_actions: [ div-action, ... ],
                                                on_success_actions: [ div-action, ... ]
                                              },
                                              is_enabled: "bool_int",
                                              log_id*: "string",
                                              log_url: "string",
                                              menu_items: [
                                                {
                                                  action: div-action,
                                                  actions: [ div-action, ... ],
                                                  text*: "string"
                                                },
                                                ...
                                              ],
                                              payload: "object",
                                              referer: "string",
                                              scope_id: "string",
                                              target: "string",
                                              typed: div-action-typed,
                                              url: "string"
                                            },
                                            ...
                                          ],
                                          alignment_vertical: "string",
                                          background: div-text-range-background,
                                          border: {
                                            corner_radius: "int",
                                            stroke: {
                                              color*: "string",
                                              unit: "string",
                                              width: "number"
                                            }
                                          },
                                          end*: "int",
                                          font_family: "string",
                                          font_feature_settings: "string",
                                          font_size: "int",
                                          font_size_unit: "string",
                                          font_weight: "string",
                                          font_weight_value: "int",
                                          letter_spacing: "number",
                                          line_height: "int",
                                          start*: "int",
                                          strike: "string",
                                          text_color: "string",
                                          text_shadow: {
                                            alpha: "number",
                                            blur: "int",
                                            color: "string",
                                            offset*: {
                                              x*: {
                                                unit: "string",
                                                value*: "number"
                                              },
                                              y*: {
                                                unit: "string",
                                                value*: "number"
                                              }
                                            }
                                          },
                                          top_offset: "int",
                                          underline: "string"
                                        },
                                        ...
                                      ],
                                      text*: "string"
                                    },
                                    extensions: [
                                      {
                                        id*: "string",
                                        params: "object"
                                      },
                                      ...
                                    ],
                                    focus: {
                                      background: [ div-background, ... ],
                                      border: {
                                        corner_radius: "int",
                                        corners_radius: {
                                          bottom-left: "int",
                                          bottom-right: "int",
                                          top-left: "int",
                                          top-right: "int"
                                        },
                                        has_shadow: "bool_int",
                                        shadow: {
                                          alpha: "number",
                                          blur: "int",
                                          color: "string",
                                          offset*: {
                                            x*: {
                                              unit: "string",
                                              value*: "number"
                                            },
                                            y*: {
                                              unit: "string",
                                              value*: "number"
                                            }
                                          }
                                        },
                                        stroke: {
                                          color*: "string",
                                          unit: "string",
                                          width: "number"
                                        }
                                      },
                                      next_focus_ids: {
                                        down: "string",
                                        forward: "string",
                                        left: "string",
                                        right: "string",
                                        up: "string"
                                      },
                                      on_blur: [
                                        {
                                          download_callbacks: {
                                            on_fail_actions: [ div-action, ... ],
                                            on_success_actions: [ div-action, ... ]
                                          },
                                          is_enabled: "bool_int",
                                          log_id*: "string",
                                          log_url: "string",
                                          menu_items: [
                                            {
                                              action: div-action,
                                              actions: [ div-action, ... ],
                                              text*: "string"
                                            },
                                            ...
                                          ],
                                          payload: "object",
                                          referer: "string",
                                          scope_id: "string",
                                          target: "string",
                                          typed: div-action-typed,
                                          url: "string"
                                        },
                                        ...
                                      ],
                                      on_focus: [
                                        {
                                          download_callbacks: {
                                            on_fail_actions: [ div-action, ... ],
                                            on_success_actions: [ div-action, ... ]
                                          },
                                          is_enabled: "bool_int",
                                          log_id*: "string",
                                          log_url: "string",
                                          menu_items: [
                                            {
                                              action: div-action,
                                              actions: [ div-action, ... ],
                                              text*: "string"
                                            },
                                            ...
                                          ],
                                          payload: "object",
                                          referer: "string",
                                          scope_id: "string",
                                          target: "string",
                                          typed: div-action-typed,
                                          url: "string"
                                        },
                                        ...
                                      ]
                                    },
                                    focused_text_color: "string",
                                    font_family: "string",
                                    font_feature_settings: "string",
                                    font_size: "int",
                                    font_size_unit: "string",
                                    font_weight: "string",
                                    font_weight_value: "int",
                                    functions: [
                                      {
                                        arguments*: [
                                          {
                                            name*: "string",
                                            type*: "string"
                                          },
                                          ...
                                        ],
                                        body*: "string",
                                        name*: "string",
                                        return_type*: "string"
                                      },
                                      ...
                                    ],
                                    height: div-size,
                                    id: "string",
                                    images: [
                                      {
                                        accessibility: {
                                          description: "string",
                                          type: "string"
                                        },
                                        alignment_vertical: "string",
                                        height: {
                                          type*: "fixed",
                                          unit: "string",
                                          value*: "int"
                                        },
                                        preload_required: "bool_int",
                                        start*: "int",
                                        tint_color: "string",
                                        tint_mode: "string",
                                        url*: "string",
                                        width: {
                                          type*: "fixed",
                                          unit: "string",
                                          value*: "int"
                                        }
                                      },
                                      ...
                                    ],
                                    layout_provider: {
                                      height_variable_name: "string",
                                      width_variable_name: "string"
                                    },
                                    letter_spacing: "number",
                                    line_height: "int",
                                    longtap_actions: [
                                      {
                                        download_callbacks: {
                                          on_fail_actions: [ div-action, ... ],
                                          on_success_actions: [ div-action, ... ]
                                        },
                                        is_enabled: "bool_int",
                                        log_id*: "string",
                                        log_url: "string",
                                        menu_items: [
                                          {
                                            action: div-action,
                                            actions: [ div-action, ... ],
                                            text*: "string"
                                          },
                                          ...
                                        ],
                                        payload: "object",
                                        referer: "string",
                                        scope_id: "string",
                                        target: "string",
                                        typed: div-action-typed,
                                        url: "string"
                                      },
                                      ...
                                    ],
                                    margins: {
                                      bottom: "int",
                                      end: "int",
                                      left: "int",
                                      right: "int",
                                      start: "int",
                                      top: "int",
                                      unit: "string"
                                    },
                                    max_lines: "int",
                                    min_hidden_lines: "int",
                                    paddings: {
                                      bottom: "int",
                                      end: "int",
                                      left: "int",
                                      right: "int",
                                      start: "int",
                                      top: "int",
                                      unit: "string"
                                    },
                                    ranges: [
                                      {
                                        actions: [
                                          {
                                            download_callbacks: {
                                              on_fail_actions: [ div-action, ... ],
                                              on_success_actions: [ div-action, ... ]
                                            },
                                            is_enabled: "bool_int",
                                            log_id*: "string",
                                            log_url: "string",
                                            menu_items: [
                                              {
                                                action: div-action,
                                                actions: [ div-action, ... ],
                                                text*: "string"
                                              },
                                              ...
                                            ],
                                            payload: "object",
                                            referer: "string",
                                            scope_id: "string",
                                            target: "string",
                                            typed: div-action-typed,
                                            url: "string"
                                          },
                                          ...
                                        ],
                                        alignment_vertical: "string",
                                        background: div-text-range-background,
                                        border: {
                                          corner_radius: "int",
                                          stroke: {
                                            color*: "string",
                                            unit: "string",
                                            width: "number"
                                          }
                                        },
                                        end*: "int",
                                        font_family: "string",
                                        font_feature_settings: "string",
                                        font_size: "int",
                                        font_size_unit: "string",
                                        font_weight: "string",
                                        font_weight_value: "int",
                                        letter_spacing: "number",
                                        line_height: "int",
                                        start*: "int",
                                        strike: "string",
                                        text_color: "string",
                                        text_shadow: {
                                          alpha: "number",
                                          blur: "int",
                                          color: "string",
                                          offset*: {
                                            x*: {
                                              unit: "string",
                                              value*: "number"
                                            },
                                            y*: {
                                              unit: "string",
                                              value*: "number"
                                            }
                                          }
                                        },
                                        top_offset: "int",
                                        underline: "string"
                                      },
                                      ...
                                    ],
                                    reuse_id: "string",
                                    row_span: "int",
                                    selectable: "bool_int",
                                    selected_actions: [
                                      {
                                        download_callbacks: {
                                          on_fail_actions: [ div-action, ... ],
                                          on_success_actions: [ div-action, ... ]
                                        },
                                        is_enabled: "bool_int",
                                        log_id*: "string",
                                        log_url: "string",
                                        menu_items: [
                                          {
                                            action: div-action,
                                            actions: [ div-action, ... ],
                                            text*: "string"
                                          },
                                          ...
                                        ],
                                        payload: "object",
                                        referer: "string",
                                        scope_id: "string",
                                        target: "string",
                                        typed: div-action-typed,
                                        url: "string"
                                      },
                                      ...
                                    ],
                                    strike: "string",
                                    text*: "string",
                                    text_alignment_horizontal: "string",
                                    text_alignment_vertical: "string",
                                    text_color: "string",
                                    text_gradient: div-text-gradient,
                                    text_shadow: {
                                      alpha: "number",
                                      blur: "int",
                                      color: "string",
                                      offset*: {
                                        x*: {
                                          unit: "string",
                                          value*: "number"
                                        },
                                        y*: {
                                          unit: "string",
                                          value*: "number"
                                        }
                                      }
                                    },
                                    tighten_width: "bool_int",
                                    tooltips: [
                                      {
                                        animation_in: {
                                          duration: "int",
                                          end_value: "number",
                                          interpolator: "string",
                                          items: [ div-animation, ... ],
                                          name*: "string",
                                          repeat: div-count,
                                          start_delay: "int",
                                          start_value: "number"
                                        },
                                        animation_out: {
                                          duration: "int",
                                          end_value: "number",
                                          interpolator: "string",
                                          items: [ div-animation, ... ],
                                          name*: "string",
                                          repeat: div-count,
                                          start_delay: "int",
                                          start_value: "number"
                                        },
                                        div*: div,
                                        duration: "int",
                                        id*: "string",
                                        offset: {
                                          x*: {
                                            unit: "string",
                                            value*: "number"
                                          },
                                          y*: {
                                            unit: "string",
                                            value*: "number"
                                          }
                                        },
                                        position*: "string"
                                      },
                                      ...
                                    ],
                                    transform: {
                                      pivot_x: div-pivot,
                                      pivot_y: div-pivot,
                                      rotation: "number"
                                    },
                                    transition_change: div-change-transition,
                                    transition_in: div-appearance-transition,
                                    transition_out: div-appearance-transition,
                                    transition_triggers: [ "string", ... ],
                                    truncate: "string",
                                    underline: "string",
                                    variable_triggers: [
                                      {
                                        actions*: [
                                          {
                                            download_callbacks: {
                                              on_fail_actions: [ div-action, ... ],
                                              on_success_actions: [ div-action, ... ]
                                            },
                                            is_enabled: "bool_int",
                                            log_id*: "string",
                                            log_url: "string",
                                            menu_items: [
                                              {
                                                action: div-action,
                                                actions: [ div-action, ... ],
                                                text*: "string"
                                              },
                                              ...
                                            ],
                                            payload: "object",
                                            referer: "string",
                                            scope_id: "string",
                                            target: "string",
                                            typed: div-action-typed,
                                            url: "string"
                                          },
                                          ...
                                        ],
                                        condition*: "bool_int",
                                        mode: "string"
                                      },
                                      ...
                                    ],
                                    variables: [ div-variable, ... ],
                                    visibility: "string",
                                    visibility_action: {
                                      download_callbacks: {
                                        on_fail_actions: [
                                          {
                                            download_callbacks: div-download-callbacks,
                                            is_enabled: "bool_int",
                                            log_id*: "string",
                                            log_url: "string",
                                            menu_items: [
                                              {
                                                action: div-action,
                                                actions: [ div-action, ... ],
                                                text*: "string"
                                              },
                                              ...
                                            ],
                                            payload: "object",
                                            referer: "string",
                                            scope_id: "string",
                                            target: "string",
                                            typed: div-action-typed,
                                            url: "string"
                                          },
                                          ...
                                        ],
                                        on_success_actions: [
                                          {
                                            download_callbacks: div-download-callbacks,
                                            is_enabled: "bool_int",
                                            log_id*: "string",
                                            log_url: "string",
                                            menu_items: [
                                              {
                                                action: div-action,
                                                actions: [ div-action, ... ],
                                                text*: "string"
                                              },
                                              ...
                                            ],
                                            payload: "object",
                                            referer: "string",
                                            scope_id: "string",
                                            target: "string",
                                            typed: div-action-typed,
                                            url: "string"
                                          },
                                          ...
                                        ]
                                      },
                                      is_enabled: "bool_int",
                                      log_id*: "string",
                                      log_limit: "int",
                                      payload: "object",
                                      referer: "string",
                                      scope_id: "string",
                                      typed: div-action-typed,
                                      url: "string",
                                      visibility_duration: "int",
                                      visibility_percentage: "int"
                                    },
                                    visibility_actions: [
                                      {
                                        download_callbacks: {
                                          on_fail_actions: [
                                            {
                                              download_callbacks: div-download-callbacks,
                                              is_enabled: "bool_int",
                                              log_id*: "string",
                                              log_url: "string",
                                              menu_items: [
                                                {
                                                  action: div-action,
                                                  actions: [ div-action, ... ],
                                                  text*: "string"
                                                },
                                                ...
                                              ],
                                              payload: "object",
                                              referer: "string",
                                              scope_id: "string",
                                              target: "string",
                                              typed: div-action-typed,
                                              url: "string"
                                            },
                                            ...
                                          ],
                                          on_success_actions: [
                                            {
                                              download_callbacks: div-download-callbacks,
                                              is_enabled: "bool_int",
                                              log_id*: "string",
                                              log_url: "string",
                                              menu_items: [
                                                {
                                                  action: div-action,
                                                  actions: [ div-action, ... ],
                                                  text*: "string"
                                                },
                                                ...
                                              ],
                                              payload: "object",
                                              referer: "string",
                                              scope_id: "string",
                                              target: "string",
                                              typed: div-action-typed,
                                              url: "string"
                                            },
                                            ...
                                          ]
                                        },
                                        is_enabled: "bool_int",
                                        log_id*: "string",
                                        log_limit: "int",
                                        payload: "object",
                                        referer: "string",
                                        scope_id: "string",
                                        typed: div-action-typed,
                                        url: "string",
                                        visibility_duration: "int",
                                        visibility_percentage: "int"
                                      },
                                      ...
                                    ],
                                    width: div-size
                                  }
                                  `}
                  </code>
                </pre>

                <button class="yfm-clipboard-button" aria-label="Copy">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    class="yfm-clipboard-icon"
                    data-animation="873"
                  >
                    <path
                      fill="currentColor"
                      d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      fill="transparent"
                      stroke-width="1.5"
                      d="M9.5 13l3 3l5 -5"
                      visibility="hidden"
                    >
                      <animate
                        id="visibileAnimation-873"
                        attributeName="visibility"
                        from="hidden"
                        to="visible"
                        dur="0.2s"
                        fill="freeze"
                        begin=""
                      ></animate>
                      <animate
                        id="hideAnimation-873"
                        attributeName="visibility"
                        from="visible"
                        to="hidden"
                        dur="1s"
                        begin="visibileAnimation-873.end+1"
                        fill="freeze"
                      ></animate>
                    </path>
                  </svg>
                </button>
              </div>
            </details>
          </div>
          <div class="dc-doc-page__feedback">
            <div class="dc-feedback__container dc-feedback__container_view_wide">
              <div class="dc-feedback__container-col dc-feedback__container-col_view_wide">
                <h3 class="dc-feedback__title dc-feedback__title_view_wide">
                  Was the article helpful?
                </h3>
                <div class="dc-feedback__controls dc-feedback__controls_view_wide">
                  <button
                    class="g-button g-button_view_normal g-button_size_m g-button_pin_round-round dc-feedback__control dc-feedback__control_view_wide"
                    type="button"
                  >
                    <span class="g-button__icon g-button__icon_side_start">
                      <span class="g-button__icon-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="m4 7 2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5 9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14 4 7Zm5.771 6.11-3.863-.455-.379-5.3 2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106l-.5-7Z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <span class="g-button__text">Yes</span>
                  </button>
                  <button
                    class="g-button g-button_view_normal g-button_size_m g-button_pin_round-round dc-feedback__control dc-feedback__control_view_wide"
                    type="button"
                  >
                    <span class="g-button__icon g-button__icon_side_start">
                      <span class="g-button__icon-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="m12 9-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7ZM6.229 2.89l3.863.455.379 5.3-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106l.5 7Z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <span class="g-button__text">No</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div class="dc-nav-toc-panel dc-doc-page__toc-nav-panel">
          <div class="dc-nav-toc-panel__content">
            <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_left">
              <div class="dc-nav-toc-panel__control-hint">Previous</div>
              <div class="dc-nav-toc-panel__control-text">
                <a
                  onClick={() =>
                    navigate("/element-directory/basic-elements/tabs")
                  }
                  class="dc-nav-toc-panel__link"
                  data-router-shallow="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="dc-nav-toc-panel__control-name">tabs</div>
                </a>
              </div>
            </div>
            <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
              <div class="dc-nav-toc-panel__control-hint">Next</div>
              <div class="dc-nav-toc-panel__control-text">
                <a
                  onClick={() =>
                    navigate("/element-directory/basic-elements/video")
                  }
                  class="dc-nav-toc-panel__link"
                  data-router-shallow="true"
                >
                  <div class="dc-nav-toc-panel__control-name">video</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dc-doc-layout__desktop-only"></div>
    </div>
  );
};

export default Component;
