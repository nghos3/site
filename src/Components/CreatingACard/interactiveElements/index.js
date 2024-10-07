import React from 'react';
import sliderTrackStyle from  './slider-track-style.png';
import sliderWithCustomizedthumb from './slider-with-customized-thumb.png';
import sliderWithThumbtext from './slider-with-thumb-text.png';
import sliderwithTickMarks from './slider-with-tick-marks.png';
import sliderwithTwoThumbs from './slider-with-two-thumbs.png'
import slider from './slider.png';
import sliderThumbAction from './slider-thumb-actions.gif';

const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/clickables"
                            aria-current="page">Interactive elements</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Interactive elements</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/clickables#slider">Slider</a>
                            <ul>
                                <li><a href="en/concepts/clickables#scale">Scale</a></li>
                                <li><a href="en/concepts/clickables#thumb">Indicator</a></li>
                                <li><a href="en/concepts/clickables#tick-marks">Ticks</a></li>
                            </ul>
                        </li>
                        <li><a href="en/concepts/clickables#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="slider"><a href="en/concepts/clickables#slider" class="yfm-anchor" aria-hidden="true"></a>Slider
                    </h2>
                    <p>The <a href="en/concepts/divs/2/div-slider">slider</a> element is a scale that lets you select values
                        within a certain range. The scale can have one or two indicators.</p>
                    <p><img src={slider} alt=""
                            width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22slider%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22max_value%22%3A10%2C%22min_value%22%3A1%2C%22thumb_value%22%3A6%2C%22thumb_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22track_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%2C%22track_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h3 id="scale"><a href="en/concepts/clickables#scale" class="yfm-anchor" aria-hidden="true"></a>Scale
                    </h3>
                    <p>The scale style is configured in the <code>thumb_style</code> field.</p>
                    <p><img src={sliderWithCustomizedthumb}
                            alt="" width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22slider%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22margins%22%3A%7B%22top%22%3A16%2C%22left%22%3A16%2C%22right%22%3A16%7D%2C%22max_value%22%3A10%2C%22min_value%22%3A1%2C%22thumb_value%22%3A6%2C%22thumb_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A12%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A12%7D%7D%7D%2C%22track_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%2C%22track_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <p>You can change the scale's track style in the following fields:</p>
                    <ul>
                        <li><code>track_active_style</code>: Sets the left-side track style for scales with one indicator,
                            or the center-aligned track style for scales with two indicators.</li>
                        <li><code>track_inactive_style</code>: Sets the style for the rest of the scale.</li>
                    </ul>
                    <p><img src={sliderTrackStyle}
                            alt="" width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22slider%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22max_value%22%3A10%2C%22min_value%22%3A1%2C%22thumb_value%22%3A6%2C%22thumb_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22track_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%231974d2%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A10%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A2%7D%7D%7D%2C%22track_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h3 id="thumb"><a href="en/concepts/clickables#thumb" class="yfm-anchor"
                            aria-hidden="true"></a>Indicator</h3>
                    <p>You can add a second indicator using the <code>thumb_secondary_style</code> parameter.</p>
                    <p><img src={sliderwithTwoThumbs}
                            alt="" width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22variables%22%3A%5B%7B%22name%22%3A%22first_thumb_value%22%2C%22type%22%3A%22integer%22%2C%22value%22%3A3%7D%2C%7B%22name%22%3A%22second_thumb_value%22%2C%22type%22%3A%22integer%22%2C%22value%22%3A8%7D%5D%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22slider%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22max_value%22%3A10%2C%22min_value%22%3A1%2C%22thumb_value_variable%22%3A%22first_thumb_value%22%2C%22thumb_secondary_value_variable%22%3A%22second_thumb_value%22%2C%22thumb_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22thumb_secondary_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22track_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%2C%22track_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <p>To display the currently selected value on the indicator, set the <code>thumb_text_style</code>
                        field. You can set the text style for the second indicator in the
                        <code>thumb_secondary_text_style</code> field.</p>
                    <p><img src={sliderWithThumbtext}
                            alt="" width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22slider%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22max_value%22%3A10%2C%22min_value%22%3A1%2C%22thumb_value%22%3A6%2C%22thumb_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22thumb_text_style%22%3A%7B%22font_size%22%3A12%2C%22font_weight%22%3A%22bold%22%2C%22text_color%22%3A%22%23ffffff%22%7D%2C%22track_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%2C%22track_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <p>You can track changes in the value of indicators and perform actions when changes occur:</p>
                    <ul>
                        <li><code>thumb_value_changed_actions</code>: Actions triggered when the first indicator changes.
                        </li>
                        <li><code>thumb_value_secondary_changed_actions</code>: Actions triggered when the second indicator
                            changes.</li>
                    </ul>
                    <p>The indicator values can be accessed via <code>{`@{this.thumb_value}`}</code> and
                        <code>{`@{this.thumb_secondary_value}`}</code> in the action description.</p>
                    <p>In the following example, text transparency changes as the indicator moves:</p>
                    <p><img src={sliderThumbAction}
                            alt="" width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22variables%22%3A%5B%7B%22name%22%3A%22text_alpha%22%2C%22type%22%3A%22number%22%2C%22value%22%3A0.5%7D%2C%7B%22name%22%3A%22my_thumb_value%22%2C%22type%22%3A%22integer%22%2C%22value%22%3A0%7D%5D%2C%22variable_triggers%22%3A%5B%7B%22condition%22%3A%22%40%7Bmy_thumb_value+%3E%3D+0%7D%22%2C%22mode%22%3A%22on_variable%22%2C%22actions%22%3A%5B%7B%22log_id%22%3A%22change_text_alpha%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_variable%3Fname%3Dtext_alpha%26value%3D%40%7Bmy_thumb_value%7D%22%7D%5D%7D%5D%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22margins%22%3A%7B%22bottom%22%3A48%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22items%22%3A%5B%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fdivkit%2Foldbg.png%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22alpha%22%3A%22%40%7Bdiv%28text_alpha%2C+255.0%29%7D%22%7D%2C%7B%22type%22%3A%22slider%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22margins%22%3A%7B%22top%22%3A16%2C%22left%22%3A12%2C%22right%22%3A12%7D%2C%22max_value%22%3A255%2C%22min_value%22%3A0%2C%22thumb_value_variable%22%3A%22my_thumb_value%22%2C%22thumb_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%23FFCC00%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22track_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%23FFCC00%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%2C%22track_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h3 id="tick-marks"><a href="en/concepts/clickables#tick-marks" class="yfm-anchor"
                            aria-hidden="true"></a>Ticks</h3>
                    <p>You can add ticks to your slider scale:</p>
                    <ul>
                        <li><code>tick_mark_active_style</code>: Tick style for the selected range.</li>
                        <li><code>tick_mark_inactive_style</code>: Tick style outside the selected range.</li>
                    </ul>
                    <p><img src={sliderwithTickMarks}
                            alt="" width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22slider%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22max_value%22%3A10%2C%22min_value%22%3A1%2C%22thumb_value%22%3A6%2C%22thumb_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A3%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A32%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A100%7D%7D%7D%2C%22tick_mark_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A2%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A8%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A8%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A5%7D%7D%7D%2C%22tick_mark_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22stroke%22%3A%7B%22color%22%3A%22%23ffffff%22%2C%22width%22%3A2%7D%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A8%7D%2C%22item_width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A8%7D%2C%22corner_radius%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A5%7D%7D%7D%2C%22track_active_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2300b300%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%2C%22track_inactive_style%22%3A%7B%22type%22%3A%22shape_drawable%22%2C%22color%22%3A%22%2320000000%22%2C%22shape%22%3A%7B%22type%22%3A%22rounded_rectangle%22%2C%22item_height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A6%7D%7D%7D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="troubleshooting"><a href="en/concepts/clickables#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/text" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Text properties</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/animation" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Animation</div><svg
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