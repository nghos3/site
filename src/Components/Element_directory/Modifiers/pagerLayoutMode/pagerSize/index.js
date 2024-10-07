import React from 'react';

const Component = () => {
    return (<main class="dc-doc-page__content">
        <h1 class="dc-doc-page-title dc-doc-page__title"><span>div-page-size</span><button
                class="g-button g-button_view_flat-secondary g-button_size_m g-button_pin_round-round dc-doc-page__share-button"
                type="button"><span class="g-button__icon"><span class="g-button__icon-inner"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M9 9v2.665a.335.335 0 0 0 .55.257l4.72-3.934a.635.635 0 0 0 0-.976L9.55 3.078a.335.335 0 0 0-.55.257V6H7.5c-1.584 0-3.182.571-4.241 1.692-.9.951-1.549 2.446-1.31 4.723.65-1.026 1.365-1.837 2.201-2.413C5.198 9.278 6.323 9 7.5 9H9Zm-3 1.731c-1.162.396-2.165 1.337-3.151 3.106-.223.4-.64.663-1.098.663-.552 0-1.04-.376-1.143-.917C-.598 7.237 3.678 4.5 7.499 4.5V3.335a1.835 1.835 0 0 1 3.01-1.41l4.722 3.935a2.135 2.135 0 0 1 0 3.28l-4.721 3.935a1.835 1.835 0 0 1-3.01-1.41V10.5c-.533 0-1.03.07-1.5.231Z"
                                clip-rule="evenodd"></path>
                        </svg></span></span></button></h1>
        <div class="dc-doc-page__page-contributors"></div>
        <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
            <p>Page width (%).</p>
            <h2 id="parameters"><a href="en/concepts/divs/2/div-page-size#parameters" className="yfm-anchor"
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
                        <td><code>page_width</code></td>
                        <td>
                            <p><strong>object</strong></p>
                            <p>Required parameter.</p>
                            <p>Page width as a percentage of the parent element width.</p>
                            <p>The value has the type <code>div-percentage-size</code>.</p>
                            <p>Available platforms: Android, iOS, web.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><code>type</code></td>
                        <td>
                            <p><strong>string</strong></p>
                            <p>Required parameter.</p>
                            <p>The value must always be <code>percentage</code>.</p>
                            <p>Available platforms: Android, iOS, web.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <details>
                <summary>JSON</summary>
    
                <div class="yfm-clipboard">
                 <pre>
                    {`{
                        type*: "percentage",
                        page_width*: {
                          type*: "percentage",
                          value*: "number"
                        }
                      }
                      `}
                 </pre>
    
                    <button class="yfm-clipboard-button" aria-label="Copy">
                        <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="37">
                            <path fill="currentColor"
                                d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                            </path>
                            <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                visibility="hidden">
                                <animate id="visibileAnimation-37" attributeName="visibility" from="hidden" to="visible"
                                    dur="0.2s" fill="freeze" begin=""></animate>
                                <animate id="hideAnimation-37" attributeName="visibility" from="visible" to="hidden"
                                    dur="1s" begin="visibileAnimation-37.end+1" fill="freeze"></animate>
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
    </main>);
}

export default Component