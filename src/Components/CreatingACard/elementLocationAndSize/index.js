import React from 'react';
import divSize from "./div-size.png";
import paddingMargin from './padding-margin.png';
import divAlignment from './div-alignment.png';
import './vendor.42f4d5e4.css';

const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/layout"
                            aria-current="page">Element location and size</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Element location and size</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/layout#size">Size</a>
                            <ul>
                                <li><a href="en/concepts/layout#size-types">Size types</a></li>
                                <li><a href="en/concepts/layout#size-units">Size measurement units</a></li>
                            </ul>
                        </li>
                        <li><a href="en/concepts/layout#margin">Element borders</a></li>
                        <li><a href="en/concepts/layout#alignment">Alignment</a></li>
                        <li><a href="en/concepts/layout#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="size"><a href="en/concepts/layout#size" class="yfm-anchor" aria-hidden="true"></a>Size</h2>
                    <h3 id="size-types"><a href="en/concepts/layout#size-types" class="yfm-anchor"
                            aria-hidden="true"></a>Size types</h3>
                    <p>You can adjust the size of the elements in the card using the <code>width</code> and
                        <code>height</code> parameters of the <code>container</code> element. They have one of the following
                        <a href="en/concepts/divs/2/div-size">size</a> values:</p>
                    <ul>
                        <li><a href="en/concepts/divs/2/div-match-parent-size">match_parent</a>: The default width value,
                            the element adjusts to the block containing it.</li>
                        <li><a href="en/concepts/divs/2/div-wrap-content-size">wrap_content</a>: The default height value,
                            the element adjusts to its content.</li>
                        <li><a href="en/concepts/divs/2/div-fixed-size">fixed</a>: The fixed size value.</li>
                    </ul>
                    <p>To make the element occupy half the height or be located at the bottom of the container, use
                        <code>match_parent</code>. The algorithm distributes space in the following order:</p>
                    <ol>
                        <li>The space is occupied by elements with the <code>fixed</code> and <code>wrap_content</code> size
                            values.</li>
                        <li>The remaining space is divided by elements with the <code>match_parent</code> size value. By
                            default, all elements with the <code>match_parent</code> size value divide the space equally or
                            distribute it according to the value of the <code>weight</code> parameter, if specified.</li>
                    </ol>
                    <p><img src={divSize} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22%24text%22%3A%22visible_text%22%2C%22id%22%3A%22visible_id%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22wrap_content%22%7D%2C%22margins%22%3A%7B%22top%22%3A8%2C%22right%22%3A24%2C%22left%22%3A24%7D%2C%22paddings%22%3A%7B%22top%22%3A4%2C%22bottom%22%3A4%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22text_color%22%3A%22%23000000%22%2C%22font_size%22%3A14%2C%22alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22text_alignment_horizontal%22%3A%22center%22%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22width%22%3A%7B%22type%22%3A%22wrap_content%22%7D%2C%22text%22%3A%22This+is+wrap_content+text%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%2C%22text%22%3A%22This+is+fixed+text+that+is+100dp+wide%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22text%22%3A%22This+is+match_parent+text%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h3 id="size-units"><a href="en/concepts/layout#size-units" class="yfm-anchor"
                            aria-hidden="true"></a>Size measurement units</h3>
                    <div class="yfm-note yfm-accent-info" note-type="info">
                        <p class="yfm-note-title" yfm2xliff-explicit="true">Note</p>
                        <div class="yfm-note-content">
                            <p>The <code>sp</code> measurement unit is used only in Android.</p>
                        </div>
                    </div>
                    <p>If the <code>fixed</code> type is used, the result depends on the measurement units:</p>
                    <ul>
                        <li><code>dp</code> (density-independent pixels): A standard size measurement unit that is used by
                            default and doesn't depend on the screen density.</li>
                        <li><code>sp</code> (scale-independent pixels): A measurement unit that depends on the text size
                            factor on a phone.</li>
                    </ul>
                    <p>If there is text in the element, specify the height in <code>sp</code>to make the block scale
                        together with the text. If the text doesn't fit, use <code>dp</code>.</p>
                    <h2 id="margin"><a href="en/concepts/layout#margin" class="yfm-anchor" aria-hidden="true"></a>Element
                        borders</h2>
                    <p>To define the element borders, the <code>paddings</code> and <code>margins</code> parameters of the
                        <code>container</code> element are used:</p>
                    <ul>
                        <li><code>paddings</code>: The distance from the card content to its borders.</li>
                        <li><code>margins</code>: The distance from the card borders to other elements and container
                            borders. It doesn't affect the size of the card itself.</li>
                    </ul>
                    <p><img src={paddingMargin} alt=""
                            width="600" yfm_patched="1" /></p>
                    <h2 id="alignment"><a href="en/concepts/layout#alignment" class="yfm-anchor"
                            aria-hidden="true"></a>Alignment</h2>
                    <p>The following parameters of the <code>container</code> element are used for horizontal and vertical
                        alignment inside elements:</p>
                    <ul>
                        <li><code>alignment_horizontal</code>: Horizontal alignment. It can have the <code>left</code>,
                            <code>center</code>, and <code>right</code> values. Inside a horizontally aligned container, you
                            can only align vertically, meaning apply <code>content_alignment_vertical</code> with the
                            <code>left</code> (default), <code>center</code>, or <code>right</code> values.</li>
                        <li><code>alignment_vertical</code>: Vertical alignment. It can have the <code>top</code>,
                            <code>center</code>, and <code>bottom</code> values. Inside a vertically aligned container, you
                            can align horizontally, meaning apply <code>content_alignment_horizontal</code> with the
                            <code>top</code> (default), <code>center</code>, or <code>bottom</code> values.</li>
                    </ul>
                    <p>If you specify the alignment inside a container, for example,
                        <code>content_alignment_horizontal</code>, the child elements inherit this parameter. If the values
                        are specified in the child elements, they will be overridden.</p>
                    <p><img src={divAlignment} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A12%2C%22line_height%22%3A15%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%2C%22width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A80%7D%2C%22paddings%22%3A%7B%22top%22%3A13%2C%22bottom%22%3A13%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22alignment_horizontal%22%3A%22left%22%2C%22text%22%3A%22left%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text%22%3A%22center%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_horizontal%22%3A%22right%22%2C%22text%22%3A%22right%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_horizontal%22%3A%22left%22%2C%22text%22%3A%22left%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text%22%3A%22center%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_horizontal%22%3A%22right%22%2C%22text%22%3A%22right%22%7D%2C%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22horizontal%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22alignment_vertical%22%3A%22top%22%2C%22text%22%3A%22top%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_vertical%22%3A%22center%22%2C%22text%22%3A%22center%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_vertical%22%3A%22bottom%22%2C%22text%22%3A%22bottom%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_vertical%22%3A%22top%22%2C%22text%22%3A%22top%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_vertical%22%3A%22center%22%2C%22text%22%3A%22center%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22alignment_vertical%22%3A%22bottom%22%2C%22text%22%3A%22bottom%22%7D%5D%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="troubleshooting"><a href="en/concepts/layout#troubleshooting" class="yfm-anchor"
                            aria-hidden="true"></a>Learn more</h2>
                    <p>Follow DivKit news in the Telegram channel: <a href="http://t.me/divkit_news" target="_blank"
                            rel="noreferrer noopener">http://t.me/divkit_news</a></p>
                    <p>You can also discuss topics of interest in the DivKit user community in Telegram: <a
                            href="https://t.me/divkit_community_ru" target="_blank"
                            rel="noreferrer noopener">https://t.me/divkit_community_ru</a></p>
                    <p><a href="https://github.com/divkit/divkit" target="_blank" rel="noreferrer noopener">DivKit
                            Repository</a></p>
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/location" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Element groups</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/visual" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Visual element design</div><svg
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