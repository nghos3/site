import React from 'react';
import emptyStateAnim from './empty-state-anim.gif';
const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/interaction"
                            aria-current="page">Actions with elements</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Actions with elements</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/interaction#states">Sets of states</a>
                            <ul>
                                <li><a href="en/concepts/interaction#empty">Empty state</a></li>
                                <li><a href="en/concepts/interaction#nested">Nested states</a></li>
                            </ul>
                        </li>
                        <li><a href="en/concepts/interaction#visibility">Actions when appearing</a></li>
                        <li><a href="en/concepts/interaction#loading-data">Loading more data</a></li>
                        <li><a href="en/concepts/interaction#switch-elements">Switching elements</a>
                            <ul>
                                <li><a href="en/concepts/interaction#scroll-to-the-end-or-to-the-start-of-gallery">Scroll to
                                        the end or to the start of gallery</a></li>
                                <li><a
                                        href="en/concepts/interaction#scroll-of-gallery-several-dp-forward-or-backward,-as-well-as-up-to-a-specific-value">Scroll
                                        of gallery several dp forward or backward, as well as up to a specific value</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="en/concepts/interaction#managing-tooltips">Managing tooltips</a></li>
                        <li><a href="en/concepts/interaction#variables-values">Changing the values of variables</a></li>
                        <li><a href="en/concepts/interaction#saving-variables-to-persistent-variable-storage">Saving
                                variables to persistent variable storage</a></li>
                        <li><a href="en/concepts/interaction#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <p>When the user taps the card, <a href="en/concepts/divs/2/div-action">action</a> calls the event
                        specified in <code>url</code>.</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
      <span class="hljs-attr">"actions"</span>: [{
        <span class="hljs-attr">"log_id"</span>: <span class="hljs-string">"&lt;unique_id&gt;"</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"div-action://&lt;action_description&gt;?other/parameters"</span>
      }]
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="3">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-3" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-3" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-3.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>url</code></p>
                                </td>
                                <td>
                                    <p>An event that is triggered by tapping the card.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>log_id</code></p>
                                </td>
                                <td>
                                    <p>Logging ID. It must be unique within a single card.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>You can open the menu by tapping using the special <code>menu_items</code> parameter. If at least one
                        action in the array has a <code>menu_items</code> field, tapping the element will show a menu, and
                        all other fields will be ignored.</p>
                    <p>A separate type of action are actions that are triggered only by a long tap
                        (<code>longtap-actions</code>).</p>
                    <h2 id="states"><a href="en/concepts/interaction#states" class="yfm-anchor" aria-hidden="true"></a>Sets
                        of states</h2>
                    <p>The <a href="en/concepts/divs/2/div-state">state</a> element switches the appearance of content. You
                        can use it to add:</p>
                    <ul>
                        <li>Buttons that change their state (for example, the like icon when tapped).</li>
                        <li>Content that can be expanded (for example, a bridge card or a geo block).</li>
                    </ul>
                    <p>One picture changes to another, but the user sees it as an interaction.</p>
                    <p>To switch to a different state, use <code>url</code>:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://set_state?state_id=&lt;div_data_state_id/div_id/state_id&gt;&amp;temporary=&lt;bool&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="74">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-74" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-74" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-74.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>The path is formed from the hierarchy root:</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>state_id</code></p>
                                </td>
                                <td>
                                    <p>The path of the state inside <code>state</code> that needs to be activated. Set in
                                        <code>div_data_state_id/div_id/state_id</code> format.</p>
                                    <p>Can be hierarchical:
                                        <code>div_data_state_id/div_id_1/state_id_1/../div_id_n/state_id_n</code><br />
                                        Consists of:</p>
                                    <ul>
                                        <li><code>div_data_state_id</code>: <code>state_id</code> numeric value of the
                                            <code>state</code> object in <a href="en/concepts/divs/2/div-data">data</a>.
                                        </li>
                                        <li><code>div_id</code>: <code>div_id</code> value of the <code>state</code> object.
                                        </li>
                                        <li><code>state_id</code>: <code>state_id</code> value of the <code>state</code>
                                            object in <a href="en/concepts/divs/2/div-state">state</a>.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>temporary</code></p>
                                </td>
                                <td>
                                    <p>Indicates a state change:</p>
                                    <ul>
                                        <li><code>true</code>: The change is temporary and when the element is re-created,
                                            the state will change back to the initial one (default value).</li>
                                        <li><code>false</code>: The state change is permanent.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22text_block%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22font_size%22%3A+14%2C%0A++++++%22text_alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_color%22%3A+%22%231ABC9C%22%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22top%22%3A+4%2C%0A++++++++%22bottom%22%3A+4%2C%0A++++++++%22left%22%3A+8%2C%0A++++++++%22right%22%3A+8%0A++++++%7D%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+200%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%2334495E%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+6%0A++++++%7D%0A++++%7D%2C%0A++++%22image_block%22%3A+%7B%0A++++++%22type%22%3A+%22image%22%2C%0A++++++%22image_url%22%3A+%22https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F2455156%2F-6559907909362846873%2Fsmart_crop_516x290%22%2C%0A++++++%22scale_type%22%3A+%22fill%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+6%0A++++++%7D%0A++++%7D%2C%0A++++%22container_block%22%3A+%7B%0A++++++%22type%22%3A+%22container%22%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%231ABC9C%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22left%22%3A+16%2C%0A++++++++%22right%22%3A+16%2C%0A++++++++%22top%22%3A+8%2C%0A++++++++%22bottom%22%3A+8%0A++++++%7D%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22state%22%2C%0A++++++++++%22div_id%22%3A+%22sample%22%2C%0A++++++++++%22states%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22state_id%22%3A+%22first%22%2C%0A++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++%22text%22%3A+%22This+is+first+state%22%2C%0A++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++%7B%0A++++++++++++++++++++%22log_id%22%3A+%22switch_state2%22%2C%0A++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fsample%2Fsecond%22%0A++++++++++++++++++%7D%0A++++++++++++++++%5D%0A++++++++++++++%7D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22state_id%22%3A+%22second%22%2C%0A++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++%22text%22%3A+%22This+is+second+state%22%2C%0A++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++%7B%0A++++++++++++++++++++%22log_id%22%3A+%22switch_state2%22%2C%0A++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fsample%2Ffirst%22%0A++++++++++++++++++%7D%0A++++++++++++++++%5D%0A++++++++++++++%7D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h3 id="empty"><a href="en/concepts/interaction#empty" class="yfm-anchor" aria-hidden="true"></a>Empty
                        state</h3>
                    <p>If you need to hide a block, don't add a <code>div</code> field, but specify
                        <code>"state_id":&nbsp;"empty"</code>.</p>
                    <p><img src={emptyStateAnim}
                            alt="" width="360" yfm_patched="1" /></p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%22templates%22%3A%7B%22text_block%22%3A%7B%22type%22%3A%22text%22%2C%22%24text%22%3A%22visible_text%22%2C%22id%22%3A%22visible_id%22%2C%22width%22%3A%7B%22type%22%3A%22match_parent%22%7D%2C%22height%22%3A%7B%22type%22%3A%22fixed%22%2C%22value%22%3A88%7D%2C%22border%22%3A%7B%22corner_radius%22%3A16%7D%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%233F28C3%22%7D%5D%2C%22margins%22%3A%7B%22left%22%3A24%2C%22right%22%3A24%7D%2C%22text_color%22%3A%22%23ffffff%22%2C%22font_size%22%3A14%2C%22text_alignment_vertical%22%3A%22center%22%2C%22text_alignment_horizontal%22%3A%22center%22%7D%7D%2C%22card%22%3A%7B%22log_id%22%3A%22sample_card%22%2C%22states%22%3A%5B%7B%22state_id%22%3A0%2C%22div%22%3A%7B%22type%22%3A%22container%22%2C%22orientation%22%3A%22vertical%22%2C%22margins%22%3A%7B%22top%22%3A32%7D%2C%22items%22%3A%5B%7B%22type%22%3A%22state%22%2C%22div_id%22%3A%22sample%22%2C%22states%22%3A%5B%7B%22state_id%22%3A%22visible%22%2C%22div%22%3A%7B%22type%22%3A%22text_block%22%2C%22id%22%3A%22sample_button%22%2C%22text%22%3A%22The+button+is+visible%22%2C%22transition_out%22%3A%7B%22type%22%3A%22fade%22%2C%22duration%22%3A500%7D%2C%22transition_in%22%3A%7B%22type%22%3A%22fade%22%2C%22duration%22%3A500%7D%2C%22actions%22%3A%5B%7B%22log_id%22%3A%22switch_visible%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fsample%2Fempty%22%7D%5D%7D%7D%2C%7B%22state_id%22%3A%22empty%22%7D%5D%7D%2C%7B%22type%22%3A%22text%22%2C%22text_alignment_horizontal%22%3A%22center%22%2C%22alignment_horizontal%22%3A%22center%22%2C%22width%22%3A%7B%22type%22%3A%22wrap_content%22%7D%2C%22paddings%22%3A%7B%22left%22%3A12%2C%22bottom%22%3A12%2C%22right%22%3A12%2C%22top%22%3A12%7D%2C%22margins%22%3A%7B%22top%22%3A16%7D%2C%22text%22%3A%22Make+button+visible%22%2C%22text_color%22%3A%22%23000000%22%2C%22font_weight%22%3A%22medium%22%2C%22background%22%3A%5B%7B%22type%22%3A%22solid%22%2C%22color%22%3A%22%230e000000%22%7D%5D%2C%22border%22%3A%7B%22corner_radius%22%3A6%7D%2C%22actions%22%3A%5B%7B%22log_id%22%3A%22switch_visible%22%2C%22url%22%3A%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fsample%2Fvisible%22%7D%5D%7D%5D%7D%7D%5D%7D%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h3 id="nested"><a href="en/concepts/interaction#nested" class="yfm-anchor"
                            aria-hidden="true"></a>Nested states</h3>
                    <p>If multiple states are nested in each other, write the full path from the root to switch between
                        them:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://set_state?state_id=[root state id]/[element div_id]/[state state_id]
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="181">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-181" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-181" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-181.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22text_block%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22font_size%22%3A+14%2C%0A++++++%22text_alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_alignment_vertical%22%3A+%22center%22%2C%0A++++++%22alignment_horizontal%22%3A+%22center%22%2C%0A++++++%22text_color%22%3A+%22%231ABC9C%22%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22top%22%3A+4%2C%0A++++++++%22bottom%22%3A+4%2C%0A++++++++%22left%22%3A+8%2C%0A++++++++%22right%22%3A+8%0A++++++%7D%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+200%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22background%22%3A+%5B%0A++++++++%7B%0A++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++%22color%22%3A+%22%2334495E%22%0A++++++++%7D%0A++++++%5D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+6%0A++++++%7D%0A++++%7D%2C%0A++++%22image_block%22%3A+%7B%0A++++++%22type%22%3A+%22image%22%2C%0A++++++%22image_url%22%3A+%22https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F2455156%2F-6559907909362846873%2Fsmart_crop_516x290%22%2C%0A++++++%22scale_type%22%3A+%22fill%22%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22height%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+100%0A++++++%7D%2C%0A++++++%22border%22%3A+%7B%0A++++++++%22corner_radius%22%3A+6%0A++++++%7D%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22state%22%2C%0A++++++++++%22div_id%22%3A+%22sample%22%2C%0A++++++++++%22states%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22state_id%22%3A+%22first%22%2C%0A++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++%22text%22%3A+%22This+is+first+state%22%2C%0A++++++++++++++++%22actions%22%3A+%5B%7B%0A++++++++++++++++++%22log_id%22%3A+%22switch_state1%22%2C%0A++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fsample%2Fsecond%22%0A++++++++++++++++%7D%5D%0A++++++++++++++%7D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22state_id%22%3A+%22second%22%2C%0A++++++++++++++%22div%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22text_block%22%2C%0A++++++++++++++++%22text%22%3A+%22This+is+second+state%22%2C%0A++++++++++++++++%22actions%22%3A+%5B%7B%0A++++++++++++++++++%22log_id%22%3A+%22switch_state1%22%2C%0A++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_state%3Fstate_id%3D0%2Fsample%2Ffirst%22%0A++++++++++++++++%7D%5D%0A++++++++++++++%7D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="visibility"><a href="en/concepts/interaction#visibility" class="yfm-anchor"
                            aria-hidden="true"></a>Actions when appearing</h2>
                    <p><a href="en/concepts/divs/2/div-visibility-action">visibility</a> elements are triggered when an
                        element is shown on the screen.</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
      <span class="hljs-attr">"visibility_actions"</span>: [
        {
          <span class="hljs-attr">"log_id"</span>:<span class="hljs-string">"content_01_visibility"</span>,
          <span class="hljs-attr">"visibility_percentage"</span>: <span class="hljs-number">100</span>,
          <span class="hljs-attr">"visibility_duration"</span>: <span class="hljs-number">1000</span>,
          <span class="hljs-attr">"url"</span>: <span class="hljs-string">"div-action://none"</span>
        }
      ]
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="196">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-196" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-196" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-196.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>visibility_percentage</code></p>
                                </td>
                                <td>
                                    <p>Percentage of the element's visible area.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>visibility_duration</code></p>
                                </td>
                                <td>
                                    <p>The minimum time of its visibility.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="loading-data"><a href="en/concepts/interaction#loading-data" class="yfm-anchor"
                            aria-hidden="true"></a>Loading more data</h2>
                    <p>To load more data in the form of a <a href="en/concepts/divs/2/div-patch">patch</a> and update the
                        current element, specify the <code>download</code> action:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://download?url=&lt;patch_url&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="243">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-243" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-243" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-243.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>url</code></p>
                                </td>
                                <td>
                                    <p>URL to get the patch.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Response format:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
      <span class="hljs-attr">"patch"</span>: {
        <span class="hljs-comment">// data in patch format</span>
      },
      <span class="hljs-attr">"templates"</span>: {
        <span class="hljs-comment">// templates that can be used in the patch section</span>
      }
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="275">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-275" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-275" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-275.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="yfm-note yfm-accent-info" note-type="info">
                        <p class="yfm-note-title" yfm2xliff-explicit="true">Note</p>
                        <div class="yfm-note-content">
                            <p>To use patches on Android platform you should provide implementation of
                                <code>DivDownloader</code> to your <code>DivConfiguration</code>.</p>
                        </div>
                    </div>
                    <h2 id="switch-elements"><a href="en/concepts/interaction#switch-elements" class="yfm-anchor"
                            aria-hidden="true"></a>Switching elements</h2>
                    <p>To navigate inside <a href="en/concepts/divs/2/div-gallery">gallery</a>, <a
                            href="en/concepts/divs/2/div-pager">pager</a>, and <a
                            href="en/concepts/divs/2/div-tabs">tabs</a>, specify an action:</p>
                    <ul>
                        <li><code>set_current_item</code>: For the current element.</li>
                        <li><code>set_next_item</code>: For the next element.</li>
                        <li><code>set_previous_item</code>: For the previous element.</li>
                    </ul>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://set_current_item?id=&lt;div_id&gt;&amp;item=&lt;item_index&gt;
    div-action://set_next_item?id=&lt;div_id&gt;&amp;overflow=&lt;clamp|ring&gt;
    div-action://set_previous_item?id=&lt;div_id&gt;&amp;overflow=&lt;clamp|ring&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="309">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-309" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-309" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-309.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>id</code></p>
                                </td>
                                <td>
                                    <p>ID of the element in which the current one must be switched.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>item</code></p>
                                </td>
                                <td>
                                    <p>The index of the item to be set as current.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>overflow</code></p>
                                </td>
                                <td>
                                    <p>Specifies how navigation will occur when the boundary elements are reached:</p>
                                    <ul>
                                        <li><code>clamp</code>: Transition will stop at the boundary element (default
                                            value).</li>
                                        <li><code>ring</code>: Transition will be to the beginning or the end depending on
                                            the current element.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="scroll-to-the-end-or-to-the-start-of-gallery"><a
                            href="en/concepts/interaction#scroll-to-the-end-or-to-the-start-of-gallery" class="yfm-anchor"
                            aria-hidden="true"></a>Scroll to the end or to the start of gallery</h3>
                    <p>To navigate to the end or to the start of <a href="en/concepts/divs/2/div-gallery">gallery</a>
                        specify the action:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://scroll_to_start?id=&lt;div_id&gt;
    div-action://scroll_to_end?id=&lt;div_id&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="380">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-380" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-380" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-380.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>id</code></p>
                                </td>
                                <td>
                                    <p>ID of the element in which the current one must be switched.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>If the items inside the <code>gallery</code> are larger than the <code>gallery</code> itself, the
                        <code>scroll_to_end</code> action will navigate to the end of the last item.</p>
                    <h3 id="scroll-of-gallery-several-dp-forward-or-backward,-as-well-as-up-to-a-specific-value"><a
                            href="en/concepts/interaction#scroll-of-gallery-several-dp-forward-or-backward,-as-well-as-up-to-a-specific-value"
                            class="yfm-anchor" aria-hidden="true"></a>Scroll of gallery several dp forward or backward, as
                        well as up to a specific value</h3>
                    <p>To scroll <a href="en/concepts/divs/2/div-gallery">gallery</a> several dp forward or backward specify
                        actions:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://scroll_forward?id=&lt;div_id&gt;&amp;step=&lt;dp_count&gt;&amp;overflow=&lt;clamp|ring&gt;
    div-action://scroll_backward?id=&lt;div_id&gt;&amp;step=&lt;dp_count&gt;&amp;overflow=&lt;clamp|ring&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="418">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-418" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-418" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-418.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>To scroll <a href="en/concepts/divs/2/div-gallery">gallery</a> to a specific value specify action:
                    </p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://scroll_to_position?id=&lt;div_id&gt;&amp;step=&lt;dp_count&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="422">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-422" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-422" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-422.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>id</code></p>
                                </td>
                                <td>
                                    <p>ID of the element in which the current one must be switched.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>step</code></p>
                                </td>
                                <td>
                                    <p>Position in <a href="https://en.wikipedia.org/wiki/Device-independent_pixel"
                                            target="_blank" rel="noreferrer noopener">dp</a>, to which you need to scroll or
                                        how much you need to scroll the gallery, depending on the action.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>overflow</code></p>
                                </td>
                                <td>
                                    <p>Specifies how navigation will occur when the boundary elements are reached:</p>
                                    <ul>
                                        <li><code>clamp</code>: Transition will stop at the boundary element (default
                                            value).</li>
                                        <li><code>ring</code>: Transition will be to the beginning or the end depending on
                                            the current element.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="managing-tooltips"><a href="en/concepts/interaction#managing-tooltips" class="yfm-anchor"
                            aria-hidden="true"></a>Managing tooltips</h2>
                    <p>To show or hide tooltips, specify the <code>show_tooltip</code> or <code>hide_tooltip</code> action:
                    </p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://show_tooltip?id=&lt;tooltip_id&gt;
    div-action://hide_tooltip?id=&lt;tooltip_id&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="493">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-493" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-493" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-493.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>id</code></p>
                                </td>
                                <td>
                                    <p>Tooltip ID.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="variables-values"><a href="en/concepts/interaction#variables-values" class="yfm-anchor"
                            aria-hidden="true"></a>Changing the values of variables</h2>
                    <p>To change the value of variables, specify the <code>set_variable</code> action:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://set_variable?name=&lt;variable_name&gt;&amp;value=&lt;new_value&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="528">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-528" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-528" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-528.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>name</code></p>
                                </td>
                                <td>
                                    <p>Variable name.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>value</code></p>
                                </td>
                                <td>
                                    <p>New value.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="saving-variables-to-persistent-variable-storage"><a
                            href="en/concepts/interaction#saving-variables-to-persistent-variable-storage"
                            class="yfm-anchor" aria-hidden="true"></a>Saving variables to persistent variable storage</h2>
                    <p>To save a variable to the persistent storage, use the <code>set_stored_value</code> action.</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://set_stored_value?name=&lt;variable_name&gt;&amp;value=&lt;new_value&gt;&amp;type=&lt;variable_type&gt;&amp;lifetyme=&lt;lifetime_in_sec&gt;
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="575">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-575" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-575" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-575.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Parameter</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>name</code></p>
                                </td>
                                <td>
                                    <p>Variable name.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>value</code></p>
                                </td>
                                <td>
                                    <p>Value to save.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>type</code></p>
                                </td>
                                <td>
                                    <p>Type of the variable. Should be one of <code>string</code>, <code>number</code>,
                                        <code>integer</code>, <code>url</code>, <code>color</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>lifetyme</code></p>
                                </td>
                                <td>
                                    <p>Lifetime of the variable in seconds.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>To retrieve the value of a saved variable, use a valuable expression.</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">{`@{getStoredStringValue(name, default)}
    @{getStoredNumberValue(name, default)}
    @{getStoredIntegerValue(name, default)}
    @{getStoredUrlValue(name, default)}
    @{getStoredColorValue(name, default)}`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="643">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-643" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-643" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-643.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>The <code>name</code> parameter is the name of the stored variable, and <code>default</code> is the
                        value to return if the variable does not exist or has expired.</p>
                    <h2 id="troubleshooting"><a href="en/concepts/interaction#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/video" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Video</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/templates" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Templates</div><svg
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