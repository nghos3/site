import React from 'react';
import actionAnimation from './action-animation.gif';
import changeBounds from './change-bounds.gif';
import fade from './fade.gif';
import scale from  './scale.gif';
import set from './set.gif';
import slide from './slide.gif';

const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item">
                        <span class="dc-breadcrumbs__text">Creating a card</span>
                    </li>
                    <li class="dc-breadcrumbs__item">
                        <span class="dc-breadcrumbs__text" href="en/concepts/animation" aria-current="page">Animation</span>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="dc-doc-page__controls">
            <div class="dc-controls">
                <button aria-label="Reading mode"
                    class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-controls__control"
                    type="button">
                    <span class="g-button__icon"><span class="g-button__icon-inner"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M4.5 3A1.5 1.5 0 0 0 3 4.5v1.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h1.75a.75.75 0 0 1 0 1.5H4.5ZM9 2.25a.75.75 0 0 1 .75-.75h1.75a3 3 0 0 1 3 3v1.75a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 11.5 3H9.75A.75.75 0 0 1 9 2.25ZM2.25 9a.75.75 0 0 1 .75.75v1.75A1.5 1.5 0 0 0 4.5 13h1.75a.75.75 0 0 1 0 1.5H4.5a3 3 0 0 1-3-3V9.75A.75.75 0 0 1 2.25 9Zm11.5 0a.75.75 0 0 1 .75.75v1.75a3 3 0 0 1-3 3H9.75a.75.75 0 0 1 0-1.5h1.75a1.5 1.5 0 0 0 1.5-1.5V9.75a.75.75 0 0 1 .75-.75Z"
                                    clip-rule="evenodd"></path>
                            </svg></span></span>
                </button>
                <div class="dc-divider-control dc-divider-control_vertical dc-controls__divider"></div>
                <button aria-label="Helpful"
                    class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-feedback__control dc-feedback__control_view_regular dc-controls__control"
                    type="button">
                    <span class="g-button__icon"><span class="g-button__icon-inner"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="m4 7 2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5 9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14 4 7Zm5.771 6.11-3.863-.455-.379-5.3 2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106l-.5-7Z"
                                    clip-rule="evenodd"></path>
                            </svg></span></span></button><button aria-label="Not helpful"
                    class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-control dc-feedback__control dc-feedback__control_view_regular dc-controls__control"
                    type="button">
                    <span class="g-button__icon"><span class="g-button__icon-inner"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="m12 9-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7ZM6.229 2.89l3.863.455.379 5.3-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106l.5 7Z"
                                    clip-rule="evenodd"></path>
                            </svg></span></span>
                </button>
            </div>
        </div>
        <div class="dc-doc-page__main">
            <main class="dc-doc-page__content">
                <h1 class="dc-doc-page-title dc-doc-page__title">
                    <span>Animation</span>
                </h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li>
                            <a href="en/concepts/animation#action-animation">Tap animation</a>
                        </li>
                        <li>
                            <a href="en/concepts/animation#transition-animation">Transition animation</a>
                        </li>
                        <li>
                            <a href="en/concepts/animation#change-transition-animation">Animated change of an element
                                position</a>
                        </li>
                        <li>
                            <a href="en/concepts/animation#troubleshooting">Learn more</a>
                        </li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="action-animation">
                        <a href="en/concepts/animation#action-animation" class="yfm-anchor" aria-hidden="true"></a>Tap
                        animation
                    </h2>
                    <p>
                        If an element has at least one tap action set, you can set up an
                        animation for it in the <code>action_animation</code> field. The
                        animation must be set to the <code>animation</code> type.
                    </p>
                    <p>
                        <img src={actionAnimation}
                            alt="" width="250" yfm_patched="1" />
                    </p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content">
                            <iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22button%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22left%22%3A+8%2C%0A++++++++%22right%22%3A+8%2C%0A++++++++%22bottom%22%3A+16%2C%0A++++++++%22top%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22%24color%22%3A+%22background_color%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22font_size%22%3A+18%2C%0A++++++%22font_weight%22%3A+%22medium%22%2C%0A++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++%22text_alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_color%22%3A+%22%2334495E%22%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++%22orientation%22%3A+%22horizontal%22%2C%0A++++++++++%22content_alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++%22items%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++%22background_color%22%3A+%22%231ABC9C%22%2C%0A++++++++++++++%22text%22%3A+%22FADE%22%2C%0A++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22log_id%22%3A+%22fade_button_press%22%2C%0A++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fanimation%2Ffade%22%0A++++++++++++++++%7D%0A++++++++++++++%5D%2C%0A++++++++++++++%22action_animation%22%3A+%7B%0A++++++++++++++++%22name%22%3A+%22fade%22%2C%0A++++++++++++++++%22start_value%22%3A+1%2C%0A++++++++++++++++%22end_value%22%3A+0.4%2C%0A++++++++++++++++%22duration%22%3A+500%2C%0A++++++++++++++++%22interpolator%22%3A+%22ease_in_out%22%0A++++++++++++++%7D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++%22background_color%22%3A+%22%232ECC71%22%2C%0A++++++++++++++%22text%22%3A+%22SCALE%22%2C%0A++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22log_id%22%3A+%22scale_button_press%22%2C%0A++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fanimation%2Fscale%22%0A++++++++++++++++%7D%0A++++++++++++++%5D%2C%0A++++++++++++++%22action_animation%22%3A+%7B%0A++++++++++++++++%22name%22%3A+%22scale%22%2C%0A++++++++++++++++%22start_value%22%3A+1%2C%0A++++++++++++++++%22end_value%22%3A+0.4%2C%0A++++++++++++++++%22duration%22%3A+500%2C%0A++++++++++++++++%22interpolator%22%3A+%22ease_in_out%22%0A++++++++++++++%7D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++%22background_color%22%3A+%22%23F1C40F%22%2C%0A++++++++++++++%22text%22%3A+%22SET%22%2C%0A++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22log_id%22%3A+%22set_button_press%22%2C%0A++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fanimation%2Fset%22%0A++++++++++++++++%7D%0A++++++++++++++%5D%2C%0A++++++++++++++%22action_animation%22%3A+%7B%0A++++++++++++++++%22name%22%3A+%22set%22%2C%0A++++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++++%7B%0A++++++++++++++++++++%22name%22%3A+%22fade%22%2C%0A++++++++++++++++++++%22start_value%22%3A+1%2C%0A++++++++++++++++++++%22end_value%22%3A+0.2%2C%0A++++++++++++++++++++%22duration%22%3A+300%2C%0A++++++++++++++++++++%22interpolator%22%3A+%22ease_in_out%22%0A++++++++++++++++++%7D%2C%0A++++++++++++++++++%7B%0A++++++++++++++++++++%22name%22%3A+%22scale%22%2C%0A++++++++++++++++++++%22start_value%22%3A+1%2C%0A++++++++++++++++++++%22end_value%22%3A+0.5%2C%0A++++++++++++++++++++%22duration%22%3A+500%2C%0A++++++++++++++++++++%22interpolator%22%3A+%22ease_in_out%22%0A++++++++++++++++++%7D%0A++++++++++++++++%5D%0A++++++++++++++%7D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="transition-animation">
                        <a href="en/concepts/animation#transition-animation" class="yfm-anchor"
                            aria-hidden="true"></a>Transition animation
                    </h2>
                    <p>
                        DivKit lets you set up a layout change with an automatic animation.
                        The layout change occurs in one of two cases:
                    </p>
                    <ul>
                        <li>Calling <code>DivView#setData(DivData, DivDataTag)</code>.</li>
                        <li>State switch.</li>
                    </ul>
                    <p>
                        For the elements that should be animated, set the <code>id</code> and
                        the required transition type:
                    </p>
                    <ul>
                        <li>
                            <code>transition_in</code>: The element transition type for elements
                            that weren't present in the old layout, but are present in the new
                            layout.
                        </li>
                        <li>
                            <code>transition_change</code>: The element transition type for
                            elements that are present in both old and new layouts. For example,
                            this can be used to change the position or dimensions of an element.
                        </li>
                        <li>
                            <code>transition_out</code>: The element transition type that makes
                            elements disappear if they are only present in the old layout.
                        </li>
                    </ul>
                    <p>
                        Transition animations use the
                        <a href="en/concepts/divs/2/div-appearance-transition">appearance-transition</a>
                        type.
                    </p>
                    <dl>
                        <dt><strong>Moving beyond the edge of an image</strong></dt>
                        <dd>
                            <p>
                                Use the
                                <a href="en/concepts/divs/2/div-slide-transition">slide-transition</a>
                                element.
                            </p>
                            <p>
                                <img src={slide} alt=""
                                    width="250" yfm_patched="1" />
                            </p>
                            <details class="yfm-cut">
                                <summary class="yfm-cut-title">
                                    View an interactive example
                                </summary>
                                <div class="yfm-cut-content">
                                    <iframe
                                        src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22text_block%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%2C%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%235d76cb%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22text_color%22%3A+%22%23ffffff%22%2C%0A++++++%22font_size%22%3A+18%2C%0A++++++%22alignment_vertical%22%3A+%22center%22%2C%0A++++++%22alignment_horizontal%22%3A+%22center%22%0A++++%7D%2C%0A++++%22button%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22top%22%3A+16%2C%0A++++++++%22right%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%231ABC9C%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22font_size%22%3A+14%2C%0A++++++%22font_weight%22%3A+%22medium%22%2C%0A++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++%22text_alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_color%22%3A+%22%23ffff%22%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++%22orientation%22%3A+%22vertical%22%2C%0A++++++++++%22margins%22%3A+%7B%0A++++++++++++%22top%22%3A+48%2C%0A++++++++++++%22bottom%22%3A+48%0A++++++++++%7D%2C%0A++++++++++%22items%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22state%22%2C%0A++++++++++++++%22div_id%22%3A+%22animation_demo_state%22%2C%0A++++++++++++++%22width%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22height%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22states%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22visible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22slide+-+animation%22%2C%0A++++++++++++++++++++%22id%22%3A+%22visible_id%22%2C%0A++++++++++++++++++++%22transition_out%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22slide%22%2C%0A++++++++++++++++++++++%22edge%22%3A+%22top%22%2C%0A++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++%7D%2C%0A++++++++++++++++++++%22transition_in%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22slide%22%2C%0A++++++++++++++++++++++%22edge%22%3A+%22top%22%2C%0A++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++%7D%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22invisible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22invisible%22%2C%0A++++++++++++++++++++%22alpha%22%3A+0%2C%0A++++++++++++++++++++%22id%22%3A+%22invisible_id%22%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++++++%22orientation%22%3A+%22horizontal%22%2C%0A++++++++++++++%22content_alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++%22margins%22%3A+%7B%0A++++++++++++++++%22top%22%3A+32%0A++++++++++++++%7D%2C%0A++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22HIDE%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_hide%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Finvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22SHOW%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_show%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Fvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                        width="700" height="500" frameborder="1"></iframe>
                                </div>
                            </details>
                        </dd>
                        <dt><strong>Changing transparency</strong></dt>
                        <dd>
                            <p>
                                Use the
                                <a href="en/concepts/divs/2/div-fade-transition">fade-transition</a>
                                element.
                            </p>
                            <p>
                                <img src={fade} alt=""
                                    width="250" yfm_patched="1" />
                            </p>
                            <details class="yfm-cut">
                                <summary class="yfm-cut-title">
                                    View an interactive example
                                </summary>
                                <div class="yfm-cut-content">
                                    <iframe
                                        src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22text_block%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%2C%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%235d76cb%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22text_color%22%3A+%22%23ffffff%22%2C%0A++++++%22font_size%22%3A+18%2C%0A++++++%22alignment_vertical%22%3A+%22center%22%2C%0A++++++%22alignment_horizontal%22%3A+%22center%22%0A++++%7D%2C%0A++++%22button%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22top%22%3A+16%2C%0A++++++++%22right%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%231ABC9C%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22font_size%22%3A+14%2C%0A++++++%22font_weight%22%3A+%22medium%22%2C%0A++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++%22text_alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_color%22%3A+%22%23ffff%22%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++%22orientation%22%3A+%22vertical%22%2C%0A++++++++++%22margins%22%3A+%7B%0A++++++++++++%22top%22%3A+48%2C%0A++++++++++++%22bottom%22%3A+48%0A++++++++++%7D%2C%0A++++++++++%22items%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22state%22%2C%0A++++++++++++++%22div_id%22%3A+%22animation_demo_state%22%2C%0A++++++++++++++%22width%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22height%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22states%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22visible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22fade+-+animation%22%2C%0A++++++++++++++++++++%22id%22%3A+%22visible_id%22%2C%0A++++++++++++++++++++%22transition_out%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22fade%22%2C%0A++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++%7D%2C%0A++++++++++++++++++++%22transition_in%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22fade%22%2C%0A++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++%7D%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22invisible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22invisible%22%2C%0A++++++++++++++++++++%22alpha%22%3A+0%2C%0A++++++++++++++++++++%22id%22%3A+%22invisible_id%22%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++++++%22orientation%22%3A+%22horizontal%22%2C%0A++++++++++++++%22content_alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++%22margins%22%3A+%7B%0A++++++++++++++++%22top%22%3A+32%0A++++++++++++++%7D%2C%0A++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22HIDE%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_hide%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Finvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22SHOW%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_show%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Fvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                        width="700" height="500" frameborder="1"></iframe>
                                </div>
                            </details>
                        </dd>
                        <dt><strong>Changing size</strong></dt>
                        <dd>
                            <p>
                                Use the
                                <a href="en/concepts/divs/2/div-scale-transition">scale-transition</a>
                                element.
                            </p>
                            <p>
                                <img src={scale} alt=""
                                    width="250" yfm_patched="1" />
                            </p>
                            <details class="yfm-cut">
                                <summary class="yfm-cut-title">
                                    View an interactive example
                                </summary>
                                <div class="yfm-cut-content">
                                    <iframe
                                        src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22text_block%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%2C%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%235d76cb%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22text_color%22%3A+%22%23ffffff%22%2C%0A++++++%22font_size%22%3A+18%2C%0A++++++%22alignment_vertical%22%3A+%22center%22%2C%0A++++++%22alignment_horizontal%22%3A+%22center%22%0A++++%7D%2C%0A++++%22button%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22top%22%3A+16%2C%0A++++++++%22right%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%231ABC9C%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22font_size%22%3A+14%2C%0A++++++%22font_weight%22%3A+%22medium%22%2C%0A++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++%22text_alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_color%22%3A+%22%23ffff%22%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++%22orientation%22%3A+%22vertical%22%2C%0A++++++++++%22margins%22%3A+%7B%0A++++++++++++%22top%22%3A+48%2C%0A++++++++++++%22bottom%22%3A+48%0A++++++++++%7D%2C%0A++++++++++%22items%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22state%22%2C%0A++++++++++++++%22div_id%22%3A+%22animation_demo_state%22%2C%0A++++++++++++++%22width%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22height%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22states%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22visible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22scale+-+animation%22%2C%0A++++++++++++++++++++%22id%22%3A+%22visible_id%22%2C%0A++++++++++++++++++++%22transition_out%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22scale%22%2C%0A++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++%7D%2C%0A++++++++++++++++++++%22transition_in%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22scale%22%2C%0A++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++%7D%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22invisible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22invisible%22%2C%0A++++++++++++++++++++%22alpha%22%3A+0%2C%0A++++++++++++++++++++%22id%22%3A+%22invisible_id%22%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++++++%22orientation%22%3A+%22horizontal%22%2C%0A++++++++++++++%22content_alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++%22margins%22%3A+%7B%0A++++++++++++++++%22top%22%3A+32%0A++++++++++++++%7D%2C%0A++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22HIDE%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_hide%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Finvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22SHOW%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_show%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Fvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                        width="700" height="500" frameborder="1"></iframe>
                                </div>
                            </details>
                        </dd>
                        <dt><strong>Combining multiple transitions</strong></dt>
                        <dd>
                            <p>
                                You can assign different kinds of transitions to one element by
                                combining them into a <code>set</code>. To do this, use
                                <a href="en/concepts/divs/2/div-appearance-set-transition">appearance-set-transition</a>.
                            </p>
                            <p>
                                <img src={set} alt=""
                                    width="250" yfm_patched="1" />
                            </p>
                            <details class="yfm-cut">
                                <summary class="yfm-cut-title">
                                    View an interactive example
                                </summary>
                                <div class="yfm-cut-content">
                                    <iframe
                                        src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22text_block%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%2C%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22top%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%235d76cb%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22text_color%22%3A+%22%23ffffff%22%2C%0A++++++%22font_size%22%3A+18%2C%0A++++++%22alignment_vertical%22%3A+%22center%22%2C%0A++++++%22alignment_horizontal%22%3A+%22center%22%0A++++%7D%2C%0A++++%22button%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22wrap_content%22%0A++++++%7D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22top%22%3A+16%2C%0A++++++++%22right%22%3A+16%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%2C%0A++++++%22margins%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+8%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%231ABC9C%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22font_size%22%3A+14%2C%0A++++++%22font_weight%22%3A+%22medium%22%2C%0A++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++%22text_alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_color%22%3A+%22%23ffff%22%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++%22orientation%22%3A+%22vertical%22%2C%0A++++++++++%22margins%22%3A+%7B%0A++++++++++++%22top%22%3A+48%2C%0A++++++++++++%22bottom%22%3A+48%0A++++++++++%7D%2C%0A++++++++++%22items%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22state%22%2C%0A++++++++++++++%22div_id%22%3A+%22animation_demo_state%22%2C%0A++++++++++++++%22width%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22height%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22states%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22visible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22set+-+animation%22%2C%0A++++++++++++++++++++%22id%22%3A+%22visible_id%22%2C%0A++++++++++++++++++++%22transition_out%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22set%22%2C%0A++++++++++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++++++++++%7B%0A++++++++++++++++++++++++++%22type%22%3A+%22slide%22%2C%0A++++++++++++++++++++++++++%22edge%22%3A+%22left%22%2C%0A++++++++++++++++++++++++++%22distance%22%3A+%7B%0A++++++++++++++++++++++++++++%22value%22%3A+80%0A++++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++%7B%0A++++++++++++++++++++++++++%22type%22%3A+%22fade%22%2C%0A++++++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++++++%7D%0A++++++++++++++++++++++%5D%0A++++++++++++++++++++%7D%2C%0A++++++++++++++++++++%22transition_in%22%3A+%7B%0A++++++++++++++++++++++%22type%22%3A+%22set%22%2C%0A++++++++++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++++++++++%7B%0A++++++++++++++++++++++++++%22type%22%3A+%22slide%22%2C%0A++++++++++++++++++++++++++%22edge%22%3A+%22left%22%2C%0A++++++++++++++++++++++++++%22distance%22%3A+%7B%0A++++++++++++++++++++++++++++%22value%22%3A+80%0A++++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++++++%7D%2C%0A++++++++++++++++++++++++%7B%0A++++++++++++++++++++++++++%22type%22%3A+%22fade%22%2C%0A++++++++++++++++++++++++++%22duration%22%3A+500%0A++++++++++++++++++++++++%7D%0A++++++++++++++++++++++%5D%0A++++++++++++++++++++%7D%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22state_id%22%3A+%22invisible%22%2C%0A++++++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++++++%22text%22%3A+%22invisible%22%2C%0A++++++++++++++++++++%22alpha%22%3A+0%2C%0A++++++++++++++++++++%22id%22%3A+%22invisible_id%22%0A++++++++++++++++++%7D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++++++%22orientation%22%3A+%22horizontal%22%2C%0A++++++++++++++%22content_alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++%22margins%22%3A+%7B%0A++++++++++++++++%22top%22%3A+32%0A++++++++++++++%7D%2C%0A++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22HIDE%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_hide%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Finvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22button%22%2C%0A++++++++++++++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++++++%22text%22%3A+%22SHOW%22%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22text_show%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fanimation_demo_state%2Fvisible%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                        width="700" height="500" frameborder="1"></iframe>
                                </div>
                            </details>
                        </dd>
                    </dl>
                    <h2 id="change-transition-animation">
                        <a href="en/concepts/animation#change-transition-animation" class="yfm-anchor"
                            aria-hidden="true"></a>Animated change of an element position
                    </h2>
                    <p>
                        Set up an animation that changes the position of an element in the
                        <code>transition_change</code> field. This animation will have the
                        <a href="en/concepts/divs/2/div-change-transition">change-transition</a>
                        type.
                    </p>
                    <p>
                        <img src={changeBounds} alt=""
                            width="250" yfm_patched="1" />
                    </p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content">
                            <iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22image_block%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fyandex-app%2Fdiv_demo%2Fcontainers.png%22%2C%22width%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A150%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A150%7D%2C%22margins%22%3A%7B%22left%22%3A16%2C%22right%22%3A16%2C%22bottom%22%3A16%7D%7D%2C%22button%22%3A%7B%22type%22%3A%22text%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22wrap_content%22%7D%2C%22paddings%22%3A%7B%22left%22%3A16%2C%22top%22%3A16%2C%22right%22%3A16%2C%22bottom%22%3A16%7D%2C%22margins%22%3A%7B%22left%22%3A24%2C%22right%22%3A24%7D%2C%22border%22%3A%7B%22corner_radius%22%3A8%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230E000000%22%7D%5D%2C%22font_size%22%3A14%2C%22font_weight%22%3A%22medium%22%2C%22text_alignment_vertical%22%3A%22center%22%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22text_color%22%3A%22%23000000%22%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22variables%22%3A%5B%7B%22name%22%3A%22change_state%22%2C%22type%22%3A%22boolean%22%2C%22value%22%3A0%7D%2C%7B%22name%22%3A%22state%22%2C%22type%22%3A%22boolean%22%2C%22value%22%3A0%7D%5D%2C%22variable_triggers%22%3A%5B%7B%22condition%22%3A%22%40%7Bchange_state+%26%26+state%7D%22%2C%22mode%22%3A%22on_variable%22%2C%22actions%22%3A%5B%7B%22log_id%22%3A%22update+change_state+flag%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_variable%3Fname%3Dchange_state%26value%3D0%22%7D%2C%7B%22log_id%22%3A%22update+change_state+flag%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_variable%3Fname%3Dstate%26value%3D0%22%7D%2C%7B%22log_id%22%3A%22change+state%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Ftransition_change_demo_state%2Fstate1%22%7D%5D%7D%2C%7B%22condition%22%3A%22%40%7Bchange_state+%26%26+%21state%7D%22%2C%22mode%22%3A%22on_variable%22%2C%22actions%22%3A%5B%7B%22log_id%22%3A%22update+change_state+flag%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_variable%3Fname%3Dchange_state%26value%3D0%22%7D%2C%7B%22log_id%22%3A%22update+state+variable%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_variable%3Fname%3Dstate%26value%3D1%22%7D%2C%7B%22log_id%22%3A%22change+state%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Ftransition_change_demo_state%2Fstate2%22%7D%5D%7D%5D%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22margins%22%3A%7B%22bottom%22%3A48%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22state%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A250%7D%2C%22div_id%22%3A%22transition_change_demo_state%22%2C%22states%22%3A%5B%7B%22state_id%22%3A%22state1%22%2C%22div%22%3A%7B%22type%22%3A%22image_block%22%2C%22id%22%3A%22image%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22alignment_vertical%22%3A%22top%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22transition_change%22%3A%7B%22type%22%3A%22change_bounds%22%2C%22duration%22%3A1000%7D%7D%7D%2C%7B%22state_id%22%3A%22state2%22%2C%22div%22%3A%7B%22type%22%3A%22image_block%22%2C%22id%22%3A%22image%22%2C%22alignment_horizontal%22%3A%22right%22%2C%22alignment_vertical%22%3A%22bottom%22%2C%22transition_change%22%3A%7B%22type%22%3A%22change_bounds%22%2C%22duration%22%3A1000%7D%7D%7D%5D%7D%2C%7B%22type%22%3A%22button%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22text%22%3A%22Test+Button%22%2C%22actions%22%3A%5B%7B%22log_id%22%3A%22set_state1%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_variable%3Fname%3Dchange_state%26value%3D1%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="troubleshooting">
                        <a href="en/concepts/animation#troubleshooting" class="yfm-anchor" aria-hidden="true"></a>Learn more
                    </h2>
                    <p>
                        Follow DivKit news in the Telegram channel:
                        <a href="http://t.me/divkit_news" target="_blank"
                            rel="noreferrer noopener">http://t.me/divkit_news</a>
                    </p>
                    <p>
                        You can also discuss topics of interest in the DivKit user community
                        in Telegram:
                        <a href="https://t.me/divkit_community_ru" target="_blank"
                            rel="noreferrer noopener">https://t.me/divkit_community_ru</a>
                    </p>
                    <p>
                        <a href="https://github.com/divkit/divkit" target="_blank" rel="noreferrer noopener">DivKit
                            Repository</a>
                    </p>
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
                                    type="button">
                                    <span class="g-button__icon g-button__icon_side_start"><span
                                            class="g-button__icon-inner"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                height="20" fill="none" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="m4 7 2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5 9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14 4 7Zm5.771 6.11-3.863-.455-.379-5.3 2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106l-.5-7Z"
                                                    clip-rule="evenodd"></path>
                                            </svg></span></span><span class="g-button__text">Yes</span></button><button
                                    class="g-button g-button_view_normal g-button_size_m g-button_pin_round-round dc-feedback__control dc-feedback__control_view_wide"
                                    type="button">
                                    <span class="g-button__icon g-button__icon_side_start"><span
                                            class="g-button__icon-inner"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                height="20" fill="none" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="m12 9-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7ZM6.229 2.89l3.863.455.379 5.3-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106l.5 7Z"
                                                    clip-rule="evenodd"></path>
                                            </svg></span></span><span class="g-button__text">No</span>
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
                            <a href="en/concepts/clickables" target="_self" class="dc-nav-toc-panel__link"
                                data-router-shallow="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="none" viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">
                                    Interactive elements
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text">
                            <a href="en/concepts/video" target="_self" class="dc-nav-toc-panel__link"
                                data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Video</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dc-doc-layout__desktop-only"></div>
    </div>);
}

export default Component;