import React from 'react';
const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/templates"
                            aria-current="page">Templates</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Templates</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/templates#description">Description</a></li>
                        <li><a href="en/concepts/templates#example">Examples</a></li>
                        <li><a href="en/concepts/templates#restiriction">Usage features</a></li>
                        <li><a href="en/concepts/templates#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="description"><a href="en/concepts/templates#description" class="yfm-anchor"
                            aria-hidden="true"></a>Description</h2>
                    <p>Templates are required to get rid of code duplication and not to describe each card from scratch.
                        When using a template, you can specify and override all fields of the parent element.</p>
                    <p>If you often create cards with the same or similar content, save them as templates.</p>
                    <p>Templates help you:</p>
                    <ul>
                        <li>
                            <p>Spend less time creating cards.</p>
                        </li>
                        <li>
                            <p>Reduce the size of incoming JSON.</p>
                        </li>
                        <li>
                            <p>Reduce the number of possible errors and typos when creating cards.</p>
                        </li>
                    </ul>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">Without a template</summary>
                        <div class="yfm-cut-content">
                            <div class="yfm-clipboard">
                                <pre><code class="hljs json">{`{
      <span class="hljs-attr">"states"</span>: {
        <span class="hljs-attr">"state1"</span>: {
          <span class="hljs-attr">"data"</span>: {
            <span class="hljs-attr">"type"</span>: <span class="hljs-string">"container"</span>,
            <span class="hljs-attr">"direction"</span>: <span class="hljs-string">"vertical"</span>,
            <span class="hljs-attr">"paddings"</span>: {
              <span class="hljs-attr">"left"</span>: <span class="hljs-number">4</span>,
              <span class="hljs-attr">"top"</span>: <span class="hljs-number">4</span>,
              <span class="hljs-attr">"right"</span>: <span class="hljs-number">4</span>,
              <span class="hljs-attr">"bottom"</span>: <span class="hljs-number">4</span>
            },
            <span class="hljs-attr">"items"</span>: [
              {
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"image"</span>,
                <span class="hljs-attr">"width"</span>: {
                  <span class="hljs-attr">"type"</span>: <span class="hljs-string">"fixed"</span>,
                  <span class="hljs-attr">"value"</span>: <span class="hljs-string">"40"</span>,
                  <span class="hljs-attr">"unit"</span>: <span class="hljs-string">"dp"</span>
                },
                <span class="hljs-attr">"height"</span>: {
                  <span class="hljs-attr">"type"</span>: <span class="hljs-string">"fixed"</span>,
                  <span class="hljs-attr">"value"</span>: <span class="hljs-string">"40"</span>,
                  <span class="hljs-attr">"unit"</span>: <span class="hljs-string">"dp"</span>
                },
                <span class="hljs-attr">"image_url"</span>: <span class="hljs-string">"https://image.storage.net/icon.png"</span>
              },
              {
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"text"</span>,
                <span class="hljs-attr">"font_size"</span>: <span class="hljs-number">16</span>,
                <span class="hljs-attr">"text"</span>: <span class="hljs-string">"Hello, World!"</span>
              }
            ]
          }
        }
      }
    }`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="34">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-34" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-34" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-34.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </details>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">With a template</summary>
                        <div class="yfm-cut-content">
                            <div class="yfm-clipboard">
                                <pre><code class="hljs json">{`{
      <span class="hljs-attr">"templates"</span>: {
        <span class="hljs-attr">"image-with-text"</span>: {
          <span class="hljs-attr">"type"</span>: <span class="hljs-string">"container"</span>,
          <span class="hljs-attr">"direction"</span>: <span class="hljs-string">"vertical"</span>,
          <span class="hljs-attr">"paddings"</span>: {
            <span class="hljs-attr">"left"</span>: <span class="hljs-number">4</span>,
            <span class="hljs-attr">"top"</span>: <span class="hljs-number">4</span>,
            <span class="hljs-attr">"right"</span>: <span class="hljs-number">4</span>,
            <span class="hljs-attr">"bottom"</span>: <span class="hljs-number">4</span>
          },
          <span class="hljs-attr">"items"</span>: [
            {
              <span class="hljs-attr">"type"</span>: <span class="hljs-string">"image"</span>,
              <span class="hljs-attr">"width"</span>: {
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"fixed"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-string">"40"</span>,
                <span class="hljs-attr">"unit"</span>: <span class="hljs-string">"dp"</span>
              },
              <span class="hljs-attr">"height"</span>: {
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"fixed"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-string">"40"</span>,
                <span class="hljs-attr">"unit"</span>: <span class="hljs-string">"dp"</span>
              },
              <span class="hljs-attr">"$image_url"</span>: <span class="hljs-string">"icon_url"</span>
            },
            {
              <span class="hljs-attr">"type"</span>: <span class="hljs-string">"text"</span>,
              <span class="hljs-attr">"font_size"</span>: <span class="hljs-number">16</span>,
              <span class="hljs-attr">"$text"</span>: <span class="hljs-string">"title_text"</span>
            }
          ]
        }
      },
      <span class="hljs-attr">"states"</span>: {
        <span class="hljs-attr">"state1"</span>: {
          <span class="hljs-attr">"data"</span>: {
            <span class="hljs-attr">"type"</span>: <span class="hljs-string">"image-with-text"</span>,
            <span class="hljs-attr">"icon_url"</span>: <span class="hljs-string">"https://image.storage.net/icon.png"</span>,
            <span class="hljs-attr">"title_text"</span>: <span class="hljs-string">"Hello, World!"</span>
          }
        }
      }
    }`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="42">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-42" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-42" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-42.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </details>
                    <h2 id="example"><a href="en/concepts/templates#example" class="yfm-anchor"
                            aria-hidden="true"></a>Examples</h2>
                    <p>Templates can be used in complex elements (for example, in a container with child elements). To
                        change the fields of the child elements, they need to be renamed in the parameters:
                        <code>$field_name_in_element: new_field_name</code></p>
                    <p>Edit the <code>gallery_item</code> element type with the <code>item_image_url</code> field.</p>
                    <p><strong>Renaming example</strong></p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
      <span class="hljs-attr">"templates"</span>: {
        <span class="hljs-attr">"gallery_item"</span>: <span class="hljs-string">"container"</span>,
        &lt;...&gt;
        <span class="hljs-attr">"items"</span>: [
          {
            <span class="hljs-attr">"type"</span>: <span class="hljs-string">"image"</span>,
            <span class="hljs-attr">"$image_url"</span>: <span class="hljs-string">"item_image_url"</span>
          }
        ]
      }
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="57">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-57" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-57" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-57.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p><strong>Usage example</strong></p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
      <span class="hljs-attr">"type"</span>: <span class="hljs-string">"gallery"</span>,
      &lt;...&gt;
      <span class="hljs-attr">"items"</span>: [
        {
          <span class="hljs-attr">"type"</span>: <span class="hljs-string">"gallery_item"</span>,
          <span class="hljs-attr">"item_image_url"</span>: <span class="hljs-string">"https://&lt;...&gt;"</span>
        }
      ]
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="61">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-61" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-61" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-61.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h2 id="restiriction"><a href="en/concepts/templates#restiriction" class="yfm-anchor"
                            aria-hidden="true"></a>Usage features</h2>
                    <p>Templates can be inherited from each other. They are subject to the same rules as when creating a
                        regular template.</p>
                    <p>Template restrictions:</p>
                    <ul>
                        <li>You can't use system names in template and variable names. For example, you can't create a
                            <code>container</code> template or a <code>text</code> field.</li>
                        <li>You can create templates of only basic visual elements.</li>
                        <li>The template must have a <code>type</code> field.</li>
                    </ul>
                    <h2 id="troubleshooting"><a href="en/concepts/templates#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/interaction" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Actions with elements</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/variables" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Variables</div><svg
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