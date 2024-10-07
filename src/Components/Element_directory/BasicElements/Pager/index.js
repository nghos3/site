import React from 'react';

const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Element directory</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Basic elements</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/divs/2/div-pager"
                            aria-current="page">pager</span></li>
                </ol>
            </nav>
        </div>
        <div class="dc-doc-page__controls dc-doc-page__controls_vertical">
            <div class="dc-controls dc-controls_vertical"><button aria-label="Reading mode"
                    class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-controls__control"
                    type="button"><span class="g-button__icon"><span class="g-button__icon-inner"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M4.5 3A1.5 1.5 0 0 0 3 4.5v1.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h1.75a.75.75 0 0 1 0 1.5H4.5ZM9 2.25a.75.75 0 0 1 .75-.75h1.75a3 3 0 0 1 3 3v1.75a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 11.5 3H9.75A.75.75 0 0 1 9 2.25ZM2.25 9a.75.75 0 0 1 .75.75v1.75A1.5 1.5 0 0 0 4.5 13h1.75a.75.75 0 0 1 0 1.5H4.5a3 3 0 0 1-3-3V9.75A.75.75 0 0 1 2.25 9Zm11.5 0a.75.75 0 0 1 .75.75v1.75a3 3 0 0 1-3 3H9.75a.75.75 0 0 1 0-1.5h1.75a1.5 1.5 0 0 0 1.5-1.5V9.75a.75.75 0 0 1 .75-.75Z"
                                    clip-rule="evenodd"></path>
                            </svg></span></span></button>
                <div class="dc-divider-control dc-controls__divider"></div><button aria-label="Helpful"
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>div-pager</span><button
                        class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-doc-page__share-button"
                        type="button"><span class="g-button__icon"><span class="g-button__icon-inner"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M9 9v2.665a.335.335 0 0 0 .55.257l4.72-3.934a.635.635 0 0 0 0-.976L9.55 3.078a.335.335 0 0 0-.55.257V6H7.5c-1.584 0-3.182.571-4.241 1.692-.9.951-1.549 2.446-1.31 4.723.65-1.026 1.365-1.837 2.201-2.413C5.198 9.278 6.323 9 7.5 9H9Zm-3 1.731c-1.162.396-2.165 1.337-3.151 3.106-.223.4-.64.663-1.098.663-.552 0-1.04-.376-1.143-.917C-.598 7.237 3.678 4.5 7.499 4.5V3.335a1.835 1.835 0 0 1 3.01-1.41l4.722 3.935a2.135 2.135 0 0 1 0 3.28l-4.721 3.935a1.835 1.835 0 0 1-3.01-1.41V10.5c-.533 0-1.03.07-1.5.231Z"
                                        clip-rule="evenodd"></path>
                                </svg></span></span></button></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <p>Pager. It contains a horizontal set of cards that can be scrolled page by page. It shows the main
                        page and the beginning of the next one.</p>
                    <h2 id="parameters"><a href="en/concepts/divs/2/div-pager#parameters" class="yfm-anchor"
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
                                <td><code>layout_mode</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Required parameter.</p>
                                    <p>Type of calculation of the main page width:</p>
                                    <li><code>fixed</code> — from the fixed width of the next page
                                        <code>neighbour_page_width</code>;</li>
                                    <li><code>percentage</code> — from the percentage value <code>page_width</code>.</li>
                                    <p></p>
                                    <p>The value has the type <code>div-pager-layout-mode</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                    <p>List of possible values:</p>
                                    <li><a href="en/concepts/divs/2/div-page-size#div-page-size">div-page-size</a></li>
                                    <li><a
                                            href="en/concepts/divs/2/div-neighbour-page-size#div-neighbour-page-size">div-neighbour-page-size</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>type</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Required parameter.</p>
                                    <p>The value must always be <code>pager</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>accessibility</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Accessibility settings.</p>
                                    <p>The value has the type <code>div-accessibility</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>alignment_horizontal</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Horizontal alignment of an element inside the parent element.</p>
                                    <p>Possible values: <code>left</code>, <code>center</code>, <code>right</code>,
                                        <code>start</code>, <code>end</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>alignment_vertical</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Vertical alignment of an element inside the parent element.</p>
                                    <p>Possible values: <code>top</code>, <code>center</code>, <code>bottom</code>,
                                        <code>baseline</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>alpha</code></td>
                                <td>
                                    <p><strong>number</strong></p>
                                    <p>Sets transparency of the entire element: <code>0</code> — completely transparent,
                                        <code>1</code> — opaque.</p>
                                    <p>Restriction for the value <code>x</code>:
                                        <code>x &gt;= 0.0 &amp;&amp; x &lt;= 1.0</code>.</p>
                                    <p>Default value: <code>1.0</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>animators</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Declaration of animators that can be used to change the value of variables over time.
                                    </p>
                                    <p>Functionality is under development.</p>
                                    <p>List of possible values:</p>
                                    <li><a
                                            href="en/concepts/divs/2/div-color-animator#div-color-animator">div-color-animator</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-number-animator#div-number-animator">div-number-animator</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>background</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Element background. It can contain multiple layers.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                    <p>List of possible values:</p>
                                    <li><a
                                            href="en/concepts/divs/2/div-linear-gradient#div-linear-gradient">div-linear-gradient</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-radial-gradient#div-radial-gradient">div-radial-gradient</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-image-background#div-image-background">div-image-background</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-solid-background#div-solid-background">div-solid-background</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-nine-patch-background#div-nine-patch-background">div-nine-patch-background</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>border</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Element stroke.</p>
                                    <p>The value has the type <code>div-border</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>column_span</code></td>
                                <td>
                                    <p><strong>int</strong></p>
                                    <p>Merges cells in a column of the <a href="en/concepts/divs/2/div-grid">grid</a>
                                        element.</p>
                                    <p>Restriction for the value <code>x</code>: <code>x &gt;= 0</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>default_item</code></td>
                                <td>
                                    <p><strong>int</strong></p>
                                    <p>Ordinal number of the pager element that will be opened by default.</p>
                                    <p>Restriction for the value <code>x</code>: <code>x &gt;= 0</code>.</p>
                                    <p>Default value: <code>0</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>disappear_actions</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Actions when an element disappears from the screen.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>extensions</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Extensions for additional processing of an element. The list of extensions is given
                                        in <a href="en/concepts/extensions">DivExtension</a>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>focus</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Parameters when focusing on an element or losing focus.</p>
                                    <p>The value has the type <code>div-focus</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>functions</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Custom functions.</p>
                                    <p>Available platforms: iOS.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>height</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Element height. For Android: if there is text in this or in a child element, specify
                                        height in <code>sp</code> to scale the element together with the text. To learn more
                                        about units of size measurement, see <a href="en/concepts/layout">Layout inside the
                                            card</a>.</p>
                                    <p>The value has the type <code>div-size</code>.</p>
                                    <p>Default value: <code>{`{"type": "wrap_content"}`}</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                    <p>List of possible values:</p>
                                    <li><a href="en/concepts/divs/2/div-fixed-size#div-fixed-size">div-fixed-size</a></li>
                                    <li><a
                                            href="en/concepts/divs/2/div-match-parent-size#div-match-parent-size">div-match-parent-size</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-wrap-content-size#div-wrap-content-size">div-wrap-content-size</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>id</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Element ID. It must be unique within the root element. It is used as
                                        <code>accessibilityIdentifier</code> on iOS.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>infinite_scroll</code></td>
                                <td>
                                    <p><strong>bool_int</strong></p>
                                    <p>Enables infinite scrolling of cards. Scrolling is looped: after the last card is
                                        displayed, it starts over again.</p>
                                    <p>Default value: <code>false</code>.</p>
                                    <p>Available platforms: Android, iOS.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>item_builder</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Sets collection elements dynamically using <code>data</code> and
                                        <code>prototypes</code>.</p>
                                    <p>The value has the type <code>div-collection-item-builder</code>.</p>
                                    <p>Available platforms: Android, iOS.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>item_spacing</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Spacing between elements.</p>
                                    <p>The value has the type <code>div-fixed-size</code>.</p>
                                    <p>Default value: <code>{`{"type": "fixed","value":0}`}</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>items</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Pager elements. Page-by-page transition options can be implemented using:</p>
                                    <li><code>div-action://set_current_item?id=&amp;item=</code> — set the current page with
                                        an ordinal number <code>item</code> inside an element, with the specified
                                        <code>id</code>;</li>
                                    <li><code>div-action://set_next_item?id=[&amp;overflow={`clamp|ring`}]</code> — go to the
                                        next page inside an element, with the specified <code>id</code>;</li>
                                    <li><code>div-action://set_previous_item?id=[&amp;overflow={`clamp|ring`}]</code> — go to
                                        the previous page inside an element, with the specified <code>id</code>.</li>
                                    <p></p>
                                    <p>The optional <code>overflow</code> parameter is used to set navigation when the first
                                        or last element is reached:</p>
                                    <li><code>clamp</code> — transition will stop at the border element;</li>
                                    <li><code>ring</code> — go to the beginning or end, depending on the current element.
                                    </li>
                                    <p></p>
                                    <p>By default, <code>clamp</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
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
                            <tr>
                                <td><code>layout_provider</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Provides element real size values after a layout cycle.</p>
                                    <p>The value has the type <code>div-layout-provider</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>margins</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>External margins from the element stroke.</p>
                                    <p>The value has the type <code>div-edge-insets</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>orientation</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Pager orientation.</p>
                                    <p>Possible values: <code>horizontal</code>, <code>vertical</code>.</p>
                                    <p>Default value: <code>horizontal</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>paddings</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Internal margins from the element stroke.</p>
                                    <p>The value has the type <code>div-edge-insets</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>page_transformation</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Page transformation during movement.</p>
                                    <p>The value has the type <code>div-page-transformation</code>.</p>
                                    <p>Available platforms: Android, iOS.</p>
                                    <p>List of possible values:</p>
                                    <li><a
                                            href="en/concepts/divs/2/div-page-transformation-slide#div-page-transformation-slide">div-page-transformation-slide</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-page-transformation-overlap#div-page-transformation-overlap">div-page-transformation-overlap</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>restrict_parent_scroll</code></td>
                                <td>
                                    <p><strong>bool_int</strong></p>
                                    <p>If the parameter is enabled, the pager won't transmit the scroll gesture to the
                                        parent element.</p>
                                    <p>Default value: <code>false</code>.</p>
                                    <p>Available platforms: Android, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>reuse_id</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Id for the div structure. Used for more optimal reuse of blocks. See <a
                                            href="en/concepts/reuse/reuse">reusing blocks</a></p>
                                    <p>Available platforms: Android, iOS.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>row_span</code></td>
                                <td>
                                    <p><strong>int</strong></p>
                                    <p>Merges cells in a string of the <a href="en/concepts/divs/2/div-grid">grid</a>
                                        element.</p>
                                    <p>Restriction for the value <code>x</code>: <code>x &gt;= 0</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>selected_actions</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>List of <a href="en/concepts/divs/2/div-action">actions</a> to be executed when
                                        selecting an element in <a href="en/concepts/divs/2/div-pager">pager</a>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>tooltips</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Tooltips linked to an element. A tooltip can be shown by
                                        <code>div-action://show_tooltip?id=</code>, hidden by
                                        <code>div-action://hide_tooltip?id=</code> where <code>id</code> — tooltip id.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>transform</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Applies the passed transformation to the element. Content that doesn't fit into the
                                        original view area is cut off.</p>
                                    <p>The value has the type <code>div-transform</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>transition_change</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Change animation. It is played when the position or size of an element changes in the
                                        new layout.</p>
                                    <p>The value has the type <code>div-change-transition</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                    <p>List of possible values:</p>
                                    <li><a
                                            href="en/concepts/divs/2/div-change-set-transition#div-change-set-transition">div-change-set-transition</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-change-bounds-transition#div-change-bounds-transition">div-change-bounds-transition</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>transition_in</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Appearance animation. It is played when an element with a new ID appears. To learn
                                        more about the concept of transitions, see <a
                                            href="en/concepts/interaction#animation/transition-animation">Animated
                                            transitions</a>.</p>
                                    <p>The value has the type <code>div-appearance-transition</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                    <p>List of possible values:</p>
                                    <li><a
                                            href="en/concepts/divs/2/div-appearance-set-transition#div-appearance-set-transition">div-appearance-set-transition</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-fade-transition#div-fade-transition">div-fade-transition</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-scale-transition#div-scale-transition">div-scale-transition</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-slide-transition#div-slide-transition">div-slide-transition</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>transition_out</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Disappearance animation. It is played when an element disappears in the new layout.
                                    </p>
                                    <p>The value has the type <code>div-appearance-transition</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                    <p>List of possible values:</p>
                                    <li><a
                                            href="en/concepts/divs/2/div-appearance-set-transition#div-appearance-set-transition">div-appearance-set-transition</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-fade-transition#div-fade-transition">div-fade-transition</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-scale-transition#div-scale-transition">div-scale-transition</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-slide-transition#div-slide-transition">div-slide-transition</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>transition_triggers</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Animation starting triggers. Default value:
                                        <code>[state_change, visibility_change]</code>.</p>
                                    <p>An array must not be empty.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>variable_triggers</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Triggers for changing variables within an element.</p>
                                    <p>Available platforms: Android, iOS.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>variables</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Definition of variables that can be used within this element. These variables,
                                        defined in the array, can only be used inside this element and its children.</p>
                                    <p>Available platforms: iOS, web, Android.</p>
                                    <p>List of possible values:</p>
                                    <li><a href="en/concepts/divs/2/string_variable#string_variable">string_variable</a>
                                    </li>
                                    <li><a href="en/concepts/divs/2/number_variable#number_variable">number_variable</a>
                                    </li>
                                    <li><a href="en/concepts/divs/2/integer_variable#integer_variable">integer_variable</a>
                                    </li>
                                    <li><a href="en/concepts/divs/2/boolean_variable#boolean_variable">boolean_variable</a>
                                    </li>
                                    <li><a href="en/concepts/divs/2/color_variable#color_variable">color_variable</a></li>
                                    <li><a href="en/concepts/divs/2/url_variable#url_variable">url_variable</a></li>
                                    <li><a href="en/concepts/divs/2/dict_variable#dict_variable">dict_variable</a></li>
                                    <li><a href="en/concepts/divs/2/array_variable#array_variable">array_variable</a></li>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>visibility</code></td>
                                <td>
                                    <p><strong>string</strong></p>
                                    <p>Element visibility.</p>
                                    <p>Possible values: <code>visible</code>, <code>invisible</code>, <code>gone</code>.</p>
                                    <p>Default value: <code>visible</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>visibility_action</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Tracking visibility of a single element. Not used if the
                                        <code>visibility_actions</code> parameter is set.</p>
                                    <p>The value has the type <code>div-visibility-action</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>visibility_actions</code></td>
                                <td>
                                    <p><strong>array</strong></p>
                                    <p>Actions when an element appears on the screen.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>width</code></td>
                                <td>
                                    <p><strong>object</strong></p>
                                    <p>Element width.</p>
                                    <p>The value has the type <code>div-size</code>.</p>
                                    <p>Default value: <code>{`{"type": "match_parent"}`}</code>.</p>
                                    <p>Available platforms: Android, iOS, web.</p>
                                    <p>List of possible values:</p>
                                    <li><a href="en/concepts/divs/2/div-fixed-size#div-fixed-size">div-fixed-size</a></li>
                                    <li><a
                                            href="en/concepts/divs/2/div-match-parent-size#div-match-parent-size">div-match-parent-size</a>
                                    </li>
                                    <li><a
                                            href="en/concepts/divs/2/div-wrap-content-size#div-wrap-content-size">div-wrap-content-size</a>
                                    </li>
                                    <p></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <details>
                        <summary>JSON</summary>
    
                        <div class="yfm-clipboard">
                            <pre><code class="hljs json">
                                {`{
                                    type*: "pager",
                                    accessibility: {
                                      description: "string",
                                      hint: "string",
                                      mode: "string",
                                      mute_after_action: "bool_int",
                                      state_description: "string",
                                      type: "string"
                                    },
                                    alignment_horizontal: "string",
                                    alignment_vertical: "string",
                                    alpha: "number",
                                    animators: [ div-animator, ... ],
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
                                    default_item: "int",
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
                                    infinite_scroll: "bool_int",
                                    item_builder: {
                                      data*: "raw_array",
                                      data_element_name: "string",
                                      prototypes*: [
                                        {
                                          div*: div,
                                          id: "string",
                                          selector: "bool_int"
                                        },
                                        ...
                                      ]
                                    },
                                    item_spacing: {
                                      type*: "fixed",
                                      unit: "string",
                                      value*: "int"
                                    },
                                    items: [ div, ... ],
                                    layout_mode*: div-pager-layout-mode,
                                    layout_provider: {
                                      height_variable_name: "string",
                                      width_variable_name: "string"
                                    },
                                    margins: {
                                      bottom: "int",
                                      end: "int",
                                      left: "int",
                                      right: "int",
                                      start: "int",
                                      top: "int",
                                      unit: "string"
                                    },
                                    orientation: "string",
                                    paddings: {
                                      bottom: "int",
                                      end: "int",
                                      left: "int",
                                      right: "int",
                                      start: "int",
                                      top: "int",
                                      unit: "string"
                                    },
                                    page_transformation: div-page-transformation,
                                    restrict_parent_scroll: "bool_int",
                                    reuse_id: "string",
                                    row_span: "int",
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
                            </code></pre>
    
                            <button class="yfm-clipboard-button" aria-label="Copy">
                                <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                    data-animation="357">
                                    <path fill="currentColor"
                                        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                    </path>
                                    <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                        visibility="hidden">
                                        <animate id="visibileAnimation-357" attributeName="visibility" from="hidden"
                                            to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                        <animate id="hideAnimation-357" attributeName="visibility" from="visible"
                                            to="hidden" dur="1s" begin="visibileAnimation-357.end+1" fill="freeze">
                                        </animate>
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/divs/2/div-input" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">input</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/divs/2/div-select" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">select</div><svg
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

export default Component;