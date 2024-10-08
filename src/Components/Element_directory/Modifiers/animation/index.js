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
              <span class="dc-breadcrumbs__text">Modifiers</span>
            </li>
            <li class="dc-breadcrumbs__item">
              <span
                class="dc-breadcrumbs__text"
                href="en/concepts/divs/2/div-animation"
                aria-current="page"
              >
                animation
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <div class="dc-doc-page__controls dc-doc-page__controls_vertical">
        <div class="dc-controls dc-controls_vertical">
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
          <div class="dc-divider-control dc-controls__divider"></div>
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
            <span>div-animation</span>
            <button
              class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-doc-page__share-button"
              type="button"
            >
              <span class="g-button__icon">
                <span class="g-button__icon-inner">
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
                      d="M9 9v2.665a.335.335 0 0 0 .55.257l4.72-3.934a.635.635 0 0 0 0-.976L9.55 3.078a.335.335 0 0 0-.55.257V6H7.5c-1.584 0-3.182.571-4.241 1.692-.9.951-1.549 2.446-1.31 4.723.65-1.026 1.365-1.837 2.201-2.413C5.198 9.278 6.323 9 7.5 9H9Zm-3 1.731c-1.162.396-2.165 1.337-3.151 3.106-.223.4-.64.663-1.098.663-.552 0-1.04-.376-1.143-.917C-.598 7.237 3.678 4.5 7.499 4.5V3.335a1.835 1.835 0 0 1 3.01-1.41l4.722 3.935a2.135 2.135 0 0 1 0 3.28l-4.721 3.935a1.835 1.835 0 0 1-3.01-1.41V10.5c-.533 0-1.03.07-1.5.231Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
          </h1>
          <div class="dc-doc-page__page-contributors"></div>
          <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
            <p>Element animation parameters.</p>
            <h2 id="parameters">
              <a
                href="en/concepts/divs/2/div-animation#parameters"
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
                    <code>name</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>Required parameter.</p>
                    <p>Animation type.</p>
                    <p>
                      Possible values: <code>fade</code>, <code>translate</code>
                      , <code>scale</code>,<code>native</code>, <code>set</code>
                      , <code>no_animation</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>duration</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Animation duration in milliseconds.</p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>
                      Default value: <code>300</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>end_value</code>
                  </td>
                  <td>
                    <p>
                      <strong>number</strong>
                    </p>
                    <p>Final value of an animation.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>interpolator</code>
                  </td>
                  <td>
                    <p>
                      <strong>string</strong>
                    </p>
                    <p>
                      Animation speed nature. When the value is set to{" "}
                      <code>spring</code> — animation of damping fluctuations
                      cut to 0.7 with the <code>damping=1</code> parameter.
                      Other options correspond to the Bezier curve:
                    </p>
                    <li>
                      <code>linear</code> — cubic-bezier(0, 0, 1, 1);
                    </li>
                    <li>
                      <code>ease</code> — cubic-bezier(0.25, 0.1, 0.25, 1);
                    </li>
                    <li>
                      <code>ease_in</code> — cubic-bezier(0.42, 0, 1, 1);
                    </li>
                    <li>
                      <code>ease_out</code> — cubic-bezier(0, 0, 0.58, 1);
                    </li>
                    <li>
                      <code>ease_in_out</code> — cubic-bezier(0.42, 0, 0.58, 1).
                    </li>
                    <p></p>
                    <p>
                      Possible values: <code>linear</code>, <code>ease</code>,{" "}
                      <code>ease_in</code>,<code>ease_out</code>,{" "}
                      <code>ease_in_out</code>, <code>spring</code>.
                    </p>
                    <p>
                      Default value: <code>spring</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>items</code>
                  </td>
                  <td>
                    <p>
                      <strong>array</strong>
                    </p>
                    <p>Animation elements.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>repeat</code>
                  </td>
                  <td>
                    <p>
                      <strong>object</strong>
                    </p>
                    <p>Number of animation repetitions.</p>
                    <p>
                      The value has the type <code>div-count</code>.
                    </p>
                    <p>Default value: </p>
                    <p>Available platforms: Android, iOS, web.</p>
                    <p>List of possible values:</p>
                    <li>
                      <a href="en/concepts/divs/2/div-infinity-count#div-infinity-count">
                        div-infinity-count
                      </a>
                    </li>
                    <li>
                      <a href="en/concepts/divs/2/div-fixed-count#div-fixed-count">
                        div-fixed-count
                      </a>
                    </li>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>start_delay</code>
                  </td>
                  <td>
                    <p>
                      <strong>int</strong>
                    </p>
                    <p>Delay in milliseconds before animation starts.</p>
                    <p>
                      Restriction for the value <code>x</code>:{" "}
                      <code>x &gt;= 0</code>.
                    </p>
                    <p>
                      Default value: <code>0</code>.
                    </p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>start_value</code>
                  </td>
                  <td>
                    <p>
                      <strong>number</strong>
                    </p>
                    <p>Starting value of an animation.</p>
                    <p>Available platforms: Android, iOS, web.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <details>
              <summary>JSON</summary>

              <div class="yfm-clipboard">
                <pre>{`{
  duration: "int",
  end_value: "number",
  interpolator: "string",
  items: [ div-animation, ... ],
  name*: "string",
  repeat: div-count,
  start_delay: "int",
  start_value: "number"
}
`}</pre>

                <button class="yfm-clipboard-button" aria-label="Copy">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    class="yfm-clipboard-icon"
                    data-animation="85"
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
                        id="visibileAnimation-85"
                        attributeName="visibility"
                        from="hidden"
                        to="visible"
                        dur="0.2s"
                        fill="freeze"
                        begin=""
                      ></animate>
                      <animate
                        id="hideAnimation-85"
                        attributeName="visibility"
                        from="visible"
                        to="hidden"
                        dur="1s"
                        begin="visibileAnimation-85.end+1"
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
                    navigate("/element-directory/modifiers/action")
                  }
                  target="_self"
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
                  <div class="dc-nav-toc-panel__control-name">action</div>
                </a>
              </div>
            </div>
            <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
              <div class="dc-nav-toc-panel__control-hint">Next</div>
              <div class="dc-nav-toc-panel__control-text">
                <a
                  onClick={() =>
                    navigate("/element-directory/modifiers/aspect")
                  }
                  class="dc-nav-toc-panel__link"
                  data-router-shallow="true"
                >
                  <div class="dc-nav-toc-panel__control-name">aspect</div>
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
