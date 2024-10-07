import React from 'react';
import bridges from './bridges.png';
import grid2 from "./grid-2.png" ;
import grid1 from "./grid-1.png";
import pager from "./pager.png";
import pagerExample from "./pager-example.png";
import gallery from "./gallery.png";
import tabs from "./tabs.png";
import './vendor.42f4d5e4.css';

const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/location"
                            aria-current="page">Element groups</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Element groups</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/location#container">Container</a></li>
                        <li><a href="en/concepts/location#grid">Grid</a></li>
                        <li><a href="en/concepts/location#pager">Pager</a></li>
                        <li><a href="en/concepts/location#gallery">Gallery</a></li>
                        <li><a href="en/concepts/location#tabs">Tabs</a></li>
                        <li><a href="en/concepts/location#separator">Separator</a></li>
                        <li><a href="en/concepts/location#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="container"><a href="en/concepts/location#container" class="yfm-anchor"
                            aria-hidden="true"></a>Container</h2>
                    <p>The most basic element that is responsible for the position of child elements is <a
                            href="en/concepts/divs/2/div-container">container</a>. The elements in it are shown in the order
                        they are specified.</p>
                    <p>In the <code>orientation</code> parameter, the following types of element orientations are specified:
                    </p>
                    <ul>
                        <li>
                            <p><code>vertical</code>: For vertical orientation.</p>
                            <details class="yfm-cut">
                                <summary class="yfm-cut-title">View an interactive example</summary>
                                <div class="yfm-cut-content"> <iframe
                                        src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A12%2C%22line_height%22%3A15%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%2C%22paddings%22%3A%7B%22top%22%3A16%2C%22bottom%22%3A16%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22margins%22%3A%7B%22top%22%3A2%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A240%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22wrap_content%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22weight+%3D+1%22%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22wrap_content%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                        width="700" height="500" frameborder="1"></iframe>
                                </div>
                            </details>
                        </li>
                        <li>
                            <p><code>horizontal</code>: For horizontal orientation.</p>
                            <details class="yfm-cut">
                                <summary class="yfm-cut-title">View an interactive example</summary>
                                <div class="yfm-cut-content"> <iframe
                                        src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A12%2C%22line_height%22%3A15%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%2C%22paddings%22%3A%7B%22top%22%3A16%2C%22bottom%22%3A16%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22horizontal%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A60%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22wrap_content%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Weight+%3D+1%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22margins%22%3A%7B%22left%22%3A2%7D%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Weight+%3D+2%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A2%7D%2C%22margins%22%3A%7B%22left%22%3A2%7D%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22wrap_content%22%2C%22margins%22%3A%7B%22left%22%3A2%7D%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                        width="700" height="500" frameborder="1"></iframe>
                                </div>
                            </details>
                        </li>
                        <li>
                            <p><code>overlap</code>: With overlap.</p>
                            <details class="yfm-cut">
                                <summary class="yfm-cut-title">View an interactive example</summary>
                                <div class="yfm-cut-content"> <iframe
                                        src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A12%2C%22line_height%22%3A15%2C%22font_weight%22%3A%22medium%22%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22width%22%3A%7B%22type%22%3A%22wrap_content%22%7D%2C%22paddings%22%3A%7B%22top%22%3A8%2C%22bottom%22%3A8%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%2348000000%22%7D%5D%7D%2C%22image_block%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fyandex-app%2Fdiv_demo%2Fcontainers.png%22%2C%22scale_type%22%3A%22fill%22%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22overlap%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A150%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22image_block%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Upper-left+corner%22%2C%22alignment_horizontal%22%3A%22left%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Text+on+top%22%2C%22margins%22%3A%7B%22left%22%3A16%2C%22top%22%3A16%7D%2C%22paddings%22%3A%7B%22top%22%3A16%2C%22bottom%22%3A16%2C%22left%22%3A16%2C%22right%22%3A16%7D%2C%22alignment_horizontal%22%3A%22left%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Upper-right+corner%22%2C%22alignment_horizontal%22%3A%22right%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Lower-right+corner%22%2C%22alignment_vertical%22%3A%22bottom%22%2C%22alignment_horizontal%22%3A%22right%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                        width="700" height="500" frameborder="1"></iframe>
                                </div>
                            </details>
                            <p>In order for the element to occupy all the free space, its <a
                                    href="en/concepts/layout">width</a> must be <code>match_parent</code>. If there are
                                several such elements, they will divide the space equally or distribute it according to the
                                value of the <code>weight</code> parameter if specified.</p>
                            <p>The smaller the number of the element in the <code>items</code> array at
                                <code>orientation:"overlap"</code>, the lower its position. The zero element of the
                                container will be at the very bottom.</p>
                        </li>
                    </ul>
                    <h2 id="grid"><a href="en/concepts/location#grid" class="yfm-anchor" aria-hidden="true"></a>Grid</h2>
                    <p>The <a href="en/concepts/divs/2/div-grid">grid</a> element is used for the complex structure of the
                        table layout. You can use it to position elements in multiple columns and rows.</p>
                    <p><img src={bridges} alt="" width="300"
                            yfm_patched="1" /></p>
                    <p>You can merge cells in a row or a column:</p>
                    <ul>
                        <li><code>row_span</code>: Parameter for merging rows.</li>
                        <li><code>column_span</code>: Parameter for merging columns.</li>
                    </ul>
                    <p><img src={grid2} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_base%22%3A%7B%22type%22%3A%22text%22%2C%22paddings%22%3A%7B%22left%22%3A8%2C%22top%22%3A8%2C%22right%22%3A8%2C%22bottom%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22font_size%22%3A12%2C%22text_alignment_vertical%22%3A%22center%22%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22grid%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22grid%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22wrap_content%22%7D%2C%22alignment_horizontal%22%3A%22center%22%2C%22column_count%22%3A2%2C%22items%22%3A%5B%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A124%7D%2C%22margins%22%3A%7B%22right%22%3A4%2C%22bottom%22%3A4%7D%2C%22row_span%22%3A2%2C%22text%22%3A%221%22%7D%2C%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22margins%22%3A%7B%22bottom%22%3A4%7D%2C%22text%22%3A%222%22%7D%2C%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22margins%22%3A%7B%22bottom%22%3A4%7D%2C%22text%22%3A%223%22%7D%2C%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22column_span%22%3A2%2C%22text%22%3A%224%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <p>The element weight (<code>weight</code>) determines how much space an element occupies inside the
                        grid. It can be applied to both the width and height.</p>
                    <p><img src={grid1} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_base%22%3A%7B%22type%22%3A%22text%22%2C%22paddings%22%3A%7B%22left%22%3A8%2C%22top%22%3A8%2C%22right%22%3A8%2C%22bottom%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22font_size%22%3A12%2C%22text_alignment_vertical%22%3A%22center%22%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22grid%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22grid%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22value%22%3A240%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A160%7D%2C%22column_count%22%3A3%2C%22items%22%3A%5B%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22margins%22%3A%7B%22right%22%3A8%2C%22bottom%22%3A8%7D%2C%22text%22%3A%221%22%7D%2C%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A2%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22margins%22%3A%7B%22bottom%22%3A8%7D%2C%22column_span%22%3A2%2C%22text%22%3A%222%22%7D%2C%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A2%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22margins%22%3A%7B%22right%22%3A8%7D%2C%22column_span%22%3A2%2C%22text%22%3A%223%22%7D%2C%7B%22type%22%3A%22text_base%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A1%7D%2C%22text%22%3A%224%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="pager"><a href="en/concepts/location#pager" class="yfm-anchor" aria-hidden="true"></a>Pager</h2>
                    <p>The <a href="en/concepts/divs/2/div-pager">pager</a> element displays a horizontal set of cards,
                        where the main card is fully visible, and the neighboring ones are partially shown.</p>
                    <p><img src={pager} alt=""  width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A14%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22paddings%22%3A%7B%22top%22%3A4%2C%22bottom%22%3A4%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%23f1f1f1%22%7D%5D%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22items%22%3A%5B%7B%22type%22%3A%22pager%22%2C%22id%22%3A%22pager%22%2C%22item_spacing%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A8%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A300%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Page+1%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Page+2%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Page+3%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Page+4%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Page+5%22%7D%5D%2C%22layout_mode%22%3A%7B%22type%22%3A%22fixed%22%2C%22neighbour_page_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A16%7D%7D%2C%22paddings%22%3A%7B%22right%22%3A4%2C%22left%22%3A4%7D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <p>You can adjust the width of the main card in the <code>layout_mode</code> field:</p>
                    <ul>
                        <li><a href="en/concepts/divs/2/div-neighbour-page-size">fixed</a>: A fixed part of the adjacent
                            cards is shown, and the remaining space is taken up by the main card.</li>
                        <li><a href="en/concepts/divs/2/div-page-size">percentage</a>: The width of the main card is
                            indicated as a percentage of the width of the pager.</li>
                    </ul>
                    <p>You can use the pager along with an <a href="en/concepts/divs/2/div-indicator">indicator</a> to
                        display which card has been selected. The indicator can be positioned independently of the pager.
                        The appearance of the indicator can be changed: you can adjust the distances between indicators,
                        their shapes, colors, sizes, and switching animations.</p>
                    <p><img src={pagerExample} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A14%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22paddings%22%3A%7B%22top%22%3A4%2C%22bottom%22%3A4%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%23f1f1f1%22%7D%5D%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22items%22%3A%5B%7B%22type%22%3A%22indicator%22%2C%22active_item_color%22%3A%22%23000000%22%2C%22active_item_size%22%3A1.5%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A10%7D%2C%22margins%22%3A%7B%22top%22%3A10%2C%22bottom%22%3A10%7D%2C%22space_between_centers%22%3A10%2C%22inactive_item_color%22%3A%22%23D0D1D9%22%2C%22pager_id%22%3A%22pager_with_indicator%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A2%7D%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A2%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A10%7D%7D%7D%2C%7B%22type%22%3A%22pager%22%2C%22id%22%3A%22pager_with_indicator%22%2C%22item_spacing%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A8%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A300%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+0%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+1%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+2%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+3%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+4%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+5%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+6%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+7%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+8%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+9%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+10%22%7D%5D%2C%22layout_mode%22%3A%7B%22type%22%3A%22fixed%22%2C%22neighbour_page_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A16%7D%7D%2C%22paddings%22%3A%7B%22right%22%3A4%2C%22left%22%3A4%7D%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="gallery"><a href="en/concepts/location#gallery" class="yfm-anchor"
                            aria-hidden="true"></a>Gallery</h2>
                    <p>Pictures inside the <a href="en/concepts/divs/2/div-gallery">gallery</a> element can be any size or
                        content. They don't have to be the same type. The <code>item_spacing</code> parameter defines
                        spacing between gallery elements except for the first and last margins: they can be managed using
                        <code>paddings</code>.</p>
                    <p>The gallery height is set according to the height of the largest element.</p>
                    <p><img src={gallery} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A12%2C%22line_height%22%3A15%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%2C%22paddings%22%3A%7B%22top%22%3A4%2C%22bottom%22%3A4%2C%22left%22%3A8%2C%22right%22%3A8%7D%2C%22width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A80%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A104%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22gallery%22%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A120%7D%2C%22paddings%22%3A%7B%22left%22%3A16%2C%22right%22%3A16%7D%2C%22item_spacing%22%3A16%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+0%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+1%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+2%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+3%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+4%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="tabs"><a href="en/concepts/location#tabs" class="yfm-anchor" aria-hidden="true"></a>Tabs</h2>
                    <p>The <a href="en/concepts/divs/2/div-tabs">tabs</a> element is different from the gallery because it
                        has a header row. Only one page is visible at a time. You can switch to others by swiping.</p>
                    <p>The height of tabs is different on different platforms:</p>
                    <ul>
                        <li>On Android, the first tab is the original height. The height of the remaining tabs (from the
                            second to the last) is the same and is equal to their maximum value.</li>
                        <li>On iOS, all tabs are the original height.</li>
                    </ul>
                    <p><img src={tabs} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A28%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A184%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%7D%2C%22tab_container%22%3A%7B%22type%22%3A%22container%22%2C%22paddings%22%3A%7B%22left%22%3A16%2C%22right%22%3A16%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22tabs%22%2C%22height%22%3A%7B%22type%22%3A%22wrap_content%22%7D%2C%22tab_title_style%22%3A%7B%22animation_type%22%3A%22slide%22%7D%2C%22items%22%3A%5B%7B%22title%22%3A%22wrap_content%22%2C%22div%22%3A%7B%22type%22%3A%22tab_container%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+0%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%7D%5D%7D%7D%2C%7B%22title%22%3A%22wrap_content%22%2C%22div%22%3A%7B%22type%22%3A%22tab_container%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+1%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%7D%5D%7D%7D%2C%7B%22title%22%3A%22wrap_content%22%2C%22div%22%3A%7B%22type%22%3A%22tab_container%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+3%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%7D%5D%7D%7D%2C%7B%22title%22%3A%22wrap_content%22%2C%22div%22%3A%7B%22type%22%3A%22tab_container%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Item+3%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%7D%5D%7D%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="separator"><a href="en/concepts/location#separator" class="yfm-anchor"
                            aria-hidden="true"></a>Separator</h2>
                    <p>The <a href="en/concepts/divs/2/div-separator">separator</a> element is used to divide space between
                        elements. The separator orientation is defined in the <code>orientation</code> parameter:</p>
                    <ul>
                        <li><code>vertical</code>: Vertical.</li>
                        <li><code>horizontal</code>: Horizontal.</li>
                    </ul>
                    <p>To prevent the strip separating elements from being displayed, make the color of the
                        <code>separator</code> transparent.</p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22empty_block%22%3A%7B%22type%22%3A%22text%22%2C%22text%22%3A%22+%22%2C%22width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22paddings%22%3A%7B%22left%22%3A24%2C%22right%22%3A24%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22empty_block%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A2%7D%7D%2C%7B%22type%22%3A%22separator%22%2C%22delimiter_style%22%3A%7B%22color%22%3A%22%231e000000%22%7D%2C%22paddings%22%3A%7B%22top%22%3A12%2C%22bottom%22%3A12%7D%7D%2C%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22horizontal%22%2C%22items%22%3A%5B%7B%22type%22%3A%22empty_block%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A4%7D%7D%2C%7B%22type%22%3A%22separator%22%2C%22delimiter_style%22%3A%7B%22orientation%22%3A%22vertical%22%2C%22color%22%3A%22%231e000000%22%7D%2C%22height%22%3A%7B%22type%22%3A%22match_parent%22%2C%22value%22%3A64%7D%7D%2C%7B%22type%22%3A%22empty_block%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%2C%22weight%22%3A2%7D%7D%5D%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="troubleshooting"><a href="en/concepts/location#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">DivKit</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/layout" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Element location and size</div><svg
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