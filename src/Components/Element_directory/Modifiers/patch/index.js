import React from 'react';

const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Element directory</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Modifiers</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/divs/2/div-patch"
                            aria-current="page">patch</span></li>
                </ol>
            </nav>
        </div>
        <div class="dc-doc-page__controls">
            <div class="dc-controls"><button aria-label="Reading mode"
                    class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-controls__control"
                    type="button"><span class="g-button__icon"><span class="g-button__icon-inner"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M4.5 3A1.5 1.5 0 0 0 3 4.5v1.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h1.75a.75.75 0 0 1 0 1.5H4.5ZM9 2.25a.75.75 0 0 1 .75-.75h1.75a3 3 0 0 1 3 3v1.75a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 11.5 3H9.75A.75.75 0 0 1 9 2.25ZM2.25 9a.75.75 0 0 1 .75.75v1.75A1.5 1.5 0 0 0 4.5 13h1.75a.75.75 0 0 1 0 1.5H4.5a3 3 0 0 1-3-3V9.75A.75.75 0 0 1 2.25 9Zm11.5 0a.75.75 0 0 1 .75.75v1.75a3 3 0 0 1-3 3H9.75a.75.75 0 0 1 0-1.5h1.75a1.5 1.5 0 0 0 1.5-1.5V9.75a.75.75 0 0 1 .75-.75Z"
                                    clip-rule="evenodd"></path>
                            </svg></span></span></button>
                <div class="dc-divider-control dc-divider-control_vertical dc-controls__divider"></div><button
                    aria-label="Helpful"
                    class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-feedback__control dc-feedback__control_view_regular dc-controls__control"
                    type="button"><span class="g-button__icon"><span class="g-button__icon-inner"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="m4 7 2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5 9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14 4 7Zm5.771 6.11-3.863-.455-.379-5.3 2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106l-.5-7Z"
                                    clip-rule="evenodd"></path>
                            </svg></span></span></button><button aria-label="Not helpful"
                    class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-feedback__control dc-feedback__control_view_regular dc-controls__control"
                    type="button"><span class="g-button__icon"><span class="g-button__icon-inner"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="m12 9-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7ZM6.229 2.89l3.863.455.379 5.3-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106l.5 7Z"
                                    clip-rule="evenodd"></path>
                            </svg></span></span></button>
            </div>
        </div>
        <div class="dc-doc-page__main">
            <main class="dc-doc-page__content">
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>div-patch</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/divs/2/div-patch#parameters">Parameters</a>
                            <ul>
                                <li><a href="en/concepts/divs/2/div-patch#change">change</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <p>Edits the element.</p>
                    <h2 id="parameters"><a href="en/concepts/divs/2/div-patch#parameters" class="yfm-anchor"
                            aria-hidden="true"></a>Parameters</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>changes</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Required parameter.</p>
                                    <p>Element changes.</p>
                                    <p>An array must not be empty.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>mode</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Procedure for applying changes:</p>
                                    <li><code>transactional</code> — if an error occurs during application of at least one
                                        element, the changes aren't applied.</li>
                                    <li><code>partial</code> — all possible changes are applied. If there are errors, they
                                        are reported.</li>
                                    <p></p>
                                    <p>Possible values: <code>transactional</code>, <code>partial</code>.</p>
                                    <p>Default value: <code>partial</code>.</p>
                                    <p>Available platforms: Android, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>on_applied_actions</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Actions after applying patch.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>on_failed_actions</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Actions after an error applying patch in transactional mode.</p>
                                    <p>Available platforms: Android, web.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="change"><a href="en/concepts/divs/2/div-patch#change" class="yfm-anchor"
                            aria-hidden="true"></a>change</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Required parameter.</p>
                                    <p>ID of an element to be replaced or removed.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>items</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Elements to be inserted. If the parameter isn't specified, the element will be
                                        removed.</p>
                                    <p>List of possible values:</p>
                                    <li><a href="en/concepts/divs/2/div-image#div-image">div-image</a></li>
                                    <li><a href="en/concepts/divs/2/div-gif-image#div-gif-image">div-gif-image</a></li>
                                    <li><a href="en/concepts/divs/2/div-text#div-text">div-text</a></li>
                                    <li><a href="en/concepts/divs/2/div-separator#div-separator">div-separator</a></li>
                                    <li><a href="en/concepts/divs/2/div-container#div-container">div-container</a></li>
                                    <li><a href="en/concepts/divs/2/div-grid#div-grid">div-grid</a></li>
                                    <li><a href="en/concepts/divs/2/div-gallery#div-gallery">div-gallery</a></li>
                                    <li><a href="en/concepts/divs/2/div-pager#div-pager">div-pager</a></li>
                                    <li><a href="en/concepts/divs/2/div-tabs#div-tabs">div-tabs</a></li>
                                    <li><a href="en/concepts/divs/2/div-state#div-state">div-state</a></li>
                                    <li><a href="en/concepts/divs/2/div-custom#div-custom">div-custom</a></li>
                                    <li><a href="en/concepts/divs/2/div-indicator#div-indicator">div-indicator</a></li>
                                    <li><a href="en/concepts/divs/2/div-slider#div-slider">div-slider</a></li>
                                    <li><a href="en/concepts/divs/2/div-input#div-input">div-input</a></li>
                                    <li><a href="en/concepts/divs/2/div-select#div-select">div-select</a></li>
                                    <li><a href="en/concepts/divs/2/div-video#div-video">div-video</a></li>
                                    <p></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <details>
                        <summary>JSON</summary>
    
                        <div class="yfm-clipboard">
                         <pre>
                            {`{
                                changes*: [
                                  {
                                    id*: "string",
                                    items: [ div, ... ]
                                  },
                                  ...
                                ],
                                mode: "string",
                                on_applied_actions: [
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
                                on_failed_actions: [
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
                              }
                              `}
                         </pre>
    
                            <button class="yfm-clipboard-button" aria-label="Copy">
                                <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                    data-animation="86">
                                    <path fill="currentColor"
                                        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                    </path>
                                    <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                        visibility="hidden">
                                        <animate id="visibileAnimation-86" attributeName="visibility" from="hidden"
                                            to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                        <animate id="hideAnimation-86" attributeName="visibility" from="visible" to="hidden"
                                            dur="1s" begin="visibileAnimation-86.end+1" fill="freeze"></animate>
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </details>
                </div>
                <div class="dc-doc-page__feedback">
                    <div class="dc-feedback__container dc-feedback__container_view_wide">
                        <div class="dc-feedback__container-col dc-feedback__container-col_view_wide">
                            <h3 class="dc-feedback__title dc-feedback__title_view_wide">Was the article helpful?</h3>
                            <div class="dc-feedback__controls dc-feedback__controls_view_wide"><button
                                    class="g-button g-button_view_normal g-button_size_m g-button_pin_round-round dc-feedback__control dc-feedback__control_view_wide"
                                    type="button"><span class="g-button__icon g-button__icon_side_start"><span
                                            class="g-button__icon-inner"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                height="20" fill="none" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="m4 7 2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5 9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14 4 7Zm5.771 6.11-3.863-.455-.379-5.3 2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106l-.5-7Z"
                                                    clip-rule="evenodd"></path>
                                            </svg></span></span><span class="g-button__text">Yes</span></button><button
                                    class="g-button g-button_view_normal g-button_size_m g-button_pin_round-round dc-feedback__control dc-feedback__control_view_wide"
                                    type="button"><span class="g-button__icon g-button__icon_side_start"><span
                                            class="g-button__icon-inner"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                height="20" fill="none" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="m12 9-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7ZM6.229 2.89l3.863.455.379 5.3-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106l.5 7Z"
                                                    clip-rule="evenodd"></path>
                                            </svg></span></span><span class="g-button__text">No</span></button></div>
                        </div>
                    </div>
                </div>
            </main>
            <div class="dc-nav-toc-panel dc-doc-page__toc-nav-panel">
                <div class="dc-nav-toc-panel__content">
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_left">
                        <div class="dc-nav-toc-panel__control-hint">Previous</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/divs/2/div-neighbour-page-size"
                                target="_self" class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">neighbour-page-size</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/divs/2/div-percentage-size"
                                target="_self" class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">percentage-size</div><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dc-doc-layout__desktop-only"></div>
    </div>);
}

export default Component