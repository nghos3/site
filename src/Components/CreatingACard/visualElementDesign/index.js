import React from 'react';
import alpha from './alpha.png';
import divBackground from './div-background.png';


const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/visual"
                            aria-current="page">Visual element design</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Visual element design</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/visual#alpha">Transparency</a></li>
                        <li><a href="en/concepts/visual#background">Background</a></li>
                        <li><a href="en/concepts/visual#button">Border</a></li>
                        <li><a href="en/concepts/visual#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="alpha"><a href="en/concepts/visual#alpha" class="yfm-anchor" aria-hidden="true"></a>Transparency
                    </h2>
                    <p>You can set the transparency of an element by specifying the value of the <code>alpha</code>
                        parameter from 0 to 1:</p>
                    <ul>
                        <li><code>0</code>: Completely transparent.</li>
                        <li><code>0.5</code>: Translucent.</li>
                        <li><code>1</code>: Opaque.</li>
                    </ul>
                    <p><img src={alpha} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22margins%22%3A%7B%22bottom%22%3A24%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22margins%22%3A%7B%22bottom%22%3A12%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22image%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A200%7D%2C%22image_url%22%3A%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fyandex-app%2Fdiv_demo%2Fcontainers.png%22%7D%2C%7B%22type%22%3A%22image%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A200%7D%2C%22alpha%22%3A0.5%2C%22image_url%22%3A%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fyandex-app%2Fdiv_demo%2Fcontainers.png%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="background"><a href="en/concepts/visual#background" class="yfm-anchor"
                            aria-hidden="true"></a>Background</h2>
                    <p>All visual elements can have a background set in <a
                            href="en/concepts/divs/2/div-background">background</a>. Background types:</p>
                    <ul>
                        <li><a href="en/concepts/divs/2/div-linear-gradient">linear-gradient</a>: Linear gradient.</li>
                        <li><a href="en/concepts/divs/2/div-radial-gradient">radial-gradient</a>: Radial gradient.</li>
                        <li><a href="en/concepts/divs/2/div-solid-background">solid</a>: Solid color.</li>
                        <li><a href="en/concepts/divs/2/div-image-background">image</a>: Image.</li>
                        <li><a href="en/concepts/divs/2/div-nine-patch-background">nine-patch-image</a>: <a
                                href="https://developer.android.com/studio/write/draw9patch" target="_blank"
                                rel="noreferrer noopener">Nine patch</a> image.</li>
                    </ul>
                    <p>You can add several different backgrounds superimposed on each other to the array. In this case, the
                        top-level background must be partially translucent, otherwise the lower layers won't be visible.</p>
                    <p><img src={divBackground} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A184%7D%2C%22paddings%22%3A%7B%22left%22%3A16%2C%22right%22%3A16%2C%22bottom%22%3A16%7D%2C%22margins%22%3A%7B%22left%22%3A24%2C%22right%22%3A24%2C%22bottom%22%3A16%7D%2C%22text_alignment_vertical%22%3A%22bottom%22%2C%22font_size%22%3A15%2C%22line_height%22%3A20%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A150%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%23C4C4C4%22%2C%22angle%22%3A270%7D%5D%2C%22text_alignment_vertical%22%3A%22bottom%22%2C%22text%22%3A%22Solid+background%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A150%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22gradient%22%2C%22colors%22%3A%5B%22%230fff%22%2C%22%23000%22%5D%2C%22angle%22%3A270%7D%5D%2C%22text_alignment_vertical%22%3A%22bottom%22%2C%22text%22%3A%22Gradient%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A150%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fyandex-app%2Fdiv_demo%2Fcontainers.png%22%7D%5D%2C%22text_alignment_vertical%22%3A%22bottom%22%2C%22text%22%3A%22Image%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A150%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fyandex-app%2Fdiv_demo%2Fcontainers.png%22%7D%2C%7B%22type%22%3A%22gradient%22%2C%22colors%22%3A%5B%22%230fff%22%2C%22%23000%22%5D%2C%22angle%22%3A270%7D%5D%2C%22text_alignment_vertical%22%3A%22bottom%22%2C%22text%22%3A%22Gradient+and+image%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="700" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="button"><a href="en/concepts/visual#button" class="yfm-anchor" aria-hidden="true"></a>Border
                    </h2>
                    <p>You can use the <code>border</code> parameter to set the border, the color and width, rounded
                        corners, and a shadow:</p>
                    <ol>
                        <li>Add an element, for example, <a href="en/concepts/divs/2/div-text">text</a>.</li>
                        <li>Add a <a href="en/concepts/divs/2/div-border">border</a> and round the corners using the
                            <code>corner_radius</code> parameter.</li>
                        <li>Add <a href="en/concepts/divs/2/div-background">fill</a>.</li>
                        <li>Add an <a href="en/concepts/interaction">action</a> to perform when tapped to the resulting
                            button.</li>
                    </ol>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22%24text%22%3A%22visible_text%22%2C%22id%22%3A%22visible_id%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A88%7D%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%2C%22margins%22%3A%7B%22top%22%3A8%2C%22right%22%3A24%2C%22left%22%3A24%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22text_color%22%3A%22%23000000%22%2C%22font_size%22%3A14%2C%22text_alignment_vertical%22%3A%22center%22%2C%22text_alignment_horizontal%22%3A%22center%22%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Shadow%22%2C%22border%22%3A%7B%22has_shadow%22%3A1%7D%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Corner+radius+16dp%22%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Stroke+8dp%22%2C%22border%22%3A%7B%22stroke%22%3A%7B%22color%22%3A%22%233F28C3%22%2C%22width%22%3A8%7D%7D%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Set%22%2C%22border%22%3A%7B%22stroke%22%3A%7B%22color%22%3A%22%233F28C3%22%2C%22width%22%3A8%7D%2C%22corner_radius%22%3A16%2C%22has_shadow%22%3A1%7D%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="troubleshooting"><a href="en/concepts/visual#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/layout" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Element location and size</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/image" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Image properties</div><svg
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