import React from 'react';
import divText from './div-text.png';
import range from './range.png';
import  rangeNews from './range-news.png';


const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/text"
                            aria-current="page">Text properties</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Text properties</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/text#text-properties">List of properties</a></li>
                        <li><a href="en/concepts/text#cut">Text cropping</a></li>
                        <li><a href="en/concepts/text#part">Applying a property to a part of a text</a></li>
                        <li><a href="en/concepts/text#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="text-properties"><a href="en/concepts/text#text-properties" class="yfm-anchor"
                            aria-hidden="true"></a>List of properties</h2>
                    <p>The <a href="en/concepts/divs/2/div-text">text</a> element uses the following properties to control
                        text display:</p>
                    <ul>
                        <li><code>font_size</code>: Size.</li>
                        <li><code>font_weight</code>: Weight.</li>
                        <li><code>text_color</code>: Color.</li>
                        <li><code>letter_spacing</code>: Spacing between letters.</li>
                        <li><code>line_height</code>: Line height.</li>
                        <li><code>max_lines</code>: Maximum number of lines.</li>
                        <li><code>text_alignment_vertical</code>/<code>text_alignment_horizontal</code>: Alignment types.
                        </li>
                        <li><code>strike</code>: Strikethrough.</li>
                        <li><code>underline</code>: Underline.</li>
                    </ul>
                    <p><img src={divText} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22font_size%22%3A15%2C%22line_height%22%3A20%2C%22text_color%22%3A%22%23000000%22%2C%22margins%22%3A%7B%22left%22%3A0%2C%22right%22%3A0%7D%2C%22paddings%22%3A%7B%22left%22%3A10%2C%22right%22%3A10%2C%22top%22%3A4%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22margins%22%3A%7B%22bottom%22%3A24%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22paddings%22%3A%7B%22top%22%3A16%2C%22bottom%22%3A16%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Change+the+text+size%22%2C%22font_size%22%3A22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Change+the+font+style%22%2C%22font_weight%22%3A%22bold%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Underline+text%22%2C%22underline%22%3A%22single%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Cross+out+text+%28strikethrough%29%22%2C%22strike%22%3A%22single%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Change+the+space+between+characters%22%2C%22letter_spacing%22%3A3%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Change+the+text+color%22%2C%22text_color%22%3A%22%233F28C3%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Change+the+alignment%22%2C%22text_alignment_horizontal%22%3A%22right%22%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Change+the+height+of+a+line%22%2C%22line_height%22%3A52%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22Set+the+maximum+number+of+lines+in+the+text.+Set+the+maximum+number+of+lines+in+the+text.+Set+the+maximum+number+of+lines+in+the+text.+Set+the+maximum+number+of+lines+in+the+text.+Set+the+maximum+number+of+lines+in+the+text.+Set+the+maximum+number+of+lines+in+the+text.+Set+the+maximum+number+of+lines+in+the+text.+Set+the+maximum+number+of+lines+in+the+text.%22%2C%22max_lines%22%3A2%7D%2C%7B%22type%22%3A%22text_block%22%2C%22text%22%3A%22You+can+highlight+and+copy+this+text%22%2C%22selectable%22%3A1%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="cut"><a href="en/concepts/text#cut" class="yfm-anchor" aria-hidden="true"></a>Text cropping</h2>
                    <p>Any text that goes outside the limit on the number of lines is cropped.</p>
                    <ul>
                        <li><code>max_lines</code>: The maximum number of lines that won't be cropped when exceeding the
                            limit.</li>
                        <li><code>min_hidden_lines</code>: The minimum number of cropped lines when exceeding the limit.
                        </li>
                        <li><code>ellipsis</code>: The marker for cropping text when exceeding the limits.</li>
                    </ul>
                    <p>By default, three dots are used, but the crop marker can be predefined via <code>ellipsis</code>.</p>
                    <p>If the total number of text lines is less than or equal to the sum of
                        <code>max_lines</code>&nbsp;+&nbsp;<code>min_hidden_lines</code>, the text isn't cropped. If the
                        total number of text lines exceeds this sum, the text is cropped to <code>max_lines</code> lines.
                    </p>
                    <blockquote>
                        <p><strong>Example.</strong> Parameter <code>max_lines&nbsp;=&nbsp;3</code> and parameter
                            <code>min_hidden_lines&nbsp;=&nbsp;4</code>. The total number of text lines is 7. The text won't
                            be cropped.</p>
                    </blockquote>
                    <h2 id="part"><a href="en/concepts/text#part" class="yfm-anchor" aria-hidden="true"></a>Applying a
                        property to a part of a text</h2>
                    <p>To change the formatting of a part of a text, use the <code>ranges</code> and <code>images</code>
                        properties:</p>
                    <ul>
                        <li><code>images</code>: The specified symbol is replaced with an image.</li>
                        <li><code>ranges</code>: The range that the specified formatting is applied to. You need to specify
                            the start (starting from 0) and the end of the range. Multiple <code>ranges</code> can overlap,
                            and the specified properties will be applied to all the ranges. You can make a selected part of
                            the text clickable using <a href="en/concepts/interaction">actions</a>.</li>
                    </ul>
                    <p><img src={range} alt=""
                            width="300" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22font_size%22%3A15%2C%22line_height%22%3A20%2C%22type%22%3A%22text%22%2C%22paddings%22%3A%7B%22left%22%3A24%2C%22right%22%3A24%7D%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22margins%22%3A%7B%22bottom%22%3A24%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text_block%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22margins%22%3A%7B%22left%22%3A0%2C%22right%22%3A0%7D%2C%22paddings%22%3A%7B%22left%22%3A4%2C%22right%22%3A4%2C%22top%22%3A16%2C%22bottom%22%3A16%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22max_lines%22%3A5%2C%22text_alignment_vertical%22%3A%22center%22%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22ranges%22%3A%5B%7B%22start%22%3A0%2C%22end%22%3A5%2C%22font_weight%22%3A%22bold%22%2C%22text_color%22%3A%22%233F28C3%22%7D%2C%7B%22start%22%3A12%2C%22end%22%3A17%2C%22underline%22%3A%22single%22%2C%22letter_spacing%22%3A5%7D%5D%2C%22images%22%3A%5B%7B%22start%22%3A71%2C%22url%22%3A%22https%3A%2F%2Favatars.mds.yandex.net%2Fget-bass%2F787408%2Fpoi_48x48_ee9550bc195fdc5d7c1d281ea5d8d776320345e0a67b0663c4fdde14e194393b.png%2Forig%22%7D%5D%2C%22text%22%3A%22Lorem+ipsum+dolor+sit+amet%2C+consectetur+adipiscing+elit%2C+sed+do+eiusmodtempor+incididunt+ut+labore+et+dolore+magna+aliqua.+Ut+enim+ad+minim+veniam%2C+quis+nostrud+exercitation+ullamco+laboris+nisi+ut+aliquip+ex+ea+commodo+consequat.+Duis+aute+irure+dolor+in+reprehenderit+in+voluptate+velit+esse+cillum+dolore+eu+fugiat+nulla+pariatur.%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <p>For example, you can apply one formatting to the text and another one to the source name using the
                        <code>range</code> property in the news text block.</p>
                    <p><img src={rangeNews} alt=""
                            width="300" yfm_patched="1"/></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++%22orientation%22%3A+%22vertical%22%2C%0A++++++++++%22items%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22text%22%2C%0A++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++%22width%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22wrap_content%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22paddings%22%3A+%7B%0A++++++++++++++++%22top%22%3A+10%2C%0A++++++++++++++++%22bottom%22%3A+10%2C%0A++++++++++++++++%22left%22%3A+18%2C%0A++++++++++++++++%22right%22%3A+18%0A++++++++++++++%7D%2C%0A++++++++++++++%22background%22%3A+%5B%7B%0A++++++++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++++++++%22color%22%3A+%22%2316161e%22%0A++++++++++++++%7D%5D%2C%0A++++++++++++++%22font_size%22%3A+18%2C%0A++++++++++++++%22font_weight%22%3A+%22light%22%2C%0A++++++++++++++%22text_color%22%3A+%22%23eeeeee%22%2C%0A++++++++++++++%22line_height%22%3A+22%2C%0A++++++++++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++++++++++%22text_alignment_horizontal%22%3A+%22left%22%2C%0A++++++++++++++%22ranges%22%3A+%5B%7B%0A++++++++++++++++%22start%22%3A+132%2C%0A++++++++++++++++%22end%22%3A+148%2C%0A++++++++++++++++%22font_size%22%3A+12%2C%0A++++++++++++++++%22font_weight%22%3A+%22bold%22%2C%0A++++++++++++++++%22text_color%22%3A+%22%23999999%22%0A++++++++++++++%7D%5D%2C%0A++++++++++++++%22text%22%3A+%22According+to+the+forecast%2C+on+Saturday%2C%5CnNovember+20%2C+up+to+a+quarter+of+the%5Cnmonthly+precipitation+norm+will+fall+in%5CnCentral+Russia.+TASS%22%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="troubleshooting"><a href="en/concepts/text#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/image" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Image properties</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/clickables" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Interactive elements</div><svg
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