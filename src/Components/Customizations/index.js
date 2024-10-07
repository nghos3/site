import React from 'react';
import './common.fd2f937e.css';
import './vendor.42f4d5e4.css';
import './katex.min.css';

const Component = () => {
    return (<div class="dc-doc-layout__center">
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
            <div class="dc-doc-page__content">
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Customization</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/extensions#ready">Available extensions</a></li>
                        <li><a href="en/concepts/extensions#connect">Connection</a>
                            <ul>
                                <li><a href="en/concepts/extensions#lottie">Lottie in an animated gif image</a></li>
                            </ul>
                        </li>
                        <li><a href="en/concepts/extensions#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    {`<p>The <a href="en/concepts/divs/2/div-extension">extension</a> element is a data block that is used to
                        change the behavior and display of elements. You can add an extension to any element.</p>
                    <p>Additional logic is described in the extension handler <code>DivExtensionHandler</code>.</p>
                    <h2 id="ready"><a href="en/concepts/extensions#ready" class="yfm-anchor"
                            aria-hidden="true"></a>Available extensions</h2>`}
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>ID</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                                <td>
                                    <p><strong>Source code</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>pinch-to-zoom</code></p>
                                </td>
                                <td>
                                    <p>Increases the element.</p>
                                </td>
                                <td>
                                    <p><a href="https://github.com/divkit/divkit/tree/main/client/android/div-pinch-to-zoom"
                                        target="_blank" rel="noreferrer noopener">Android</a><br />
                                        <a href="https://github.com/divkit/divkit/blob/main/client/ios/DivKitExtensions/ExtensionHandlers/PinchToZoomExtensionHandler.swift"
                                            target="_blank" rel="noreferrer noopener">iOS</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>lottie</code></p>
                                </td>
                                <td>
                                    <p>Connects <a href="https://lottiefiles.com/" target="_blank"
                                        rel="noreferrer noopener">lottie</a> animations to <a
                                            href="en/concepts/divs/2/div-gif-image">gif-image</a>.</p>
                                </td>
                                <td>
                                    <p>
                                        <a href="https://github.com/divkit/divkit/tree/main/client/android/div-lottie"
                                            target="_blank" rel="noreferrer noopener">Android</a><br />
                                        <a href="https://github.com/divkit/divkit/tree/main/client/ios/DivKitExtensions/Animations/Lottie"
                                            target="_blank" rel="noreferrer noopener">iOS</a><br />
                                            <a href="https://github.com/divkit/divkit/blob/main/client/web/divkit/src/extensions/lottie.ts"
                                                target="_blank" rel="noreferrer noopener">Web</a>
                                        </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="connect"><a href="en/concepts/extensions#connect" class="yfm-anchor"
                        aria-hidden="true"></a>Connection</h2>
                    <div class="yfm-tabs" data-diplodoc-group="defaultTabsGroup-kqb7hxah">
                        <div class="yfm-tab-list" role="tablist">
                            <div data-diplodoc-id="android" data-diplodoc-key="android" class="yfm-tab yfm-tab-group active"
                                role="tab" aria-controls="cu3cphb8" aria-selected="true" tabindex="0"
                                data-diplodoc-is-active="true">Android</div>
                            <div data-diplodoc-id="ios" data-diplodoc-key="ios" class="yfm-tab yfm-tab-group" role="tab"
                                aria-controls="uo9c9bx1" aria-selected="false" tabindex="-1"
                                data-diplodoc-is-active="false">iOS</div>
                        </div>
                        <div id="cu3cphb8" class="yfm-tab-panel active" role="tabpanel" aria-labelledby="android"
                            data-title="Android">
                            <p>build.gradle</p>

                            <div class="yfm-clipboard">
                                <pre><code class="hljs cpp">{`dependencies {
        implementation <span class="hljs-string">"com.yandex.div:div-pinch-to-zoom:$ {versions.divkit}"</span>
        implementation <span class="hljs-string">"com.airbnb.android:lottie:$ {versions.lottie}"</span>
        implementation <span class="hljs-string">"com.yandex.div:div-lottie:$ {versions.lottie}"</span>
                                    `}
                                </code></pre>

                            <button class="yfm-clipboard-button" aria-label="Copy">
                                <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                    data-animation="80">
                                    <path fill="currentColor"
                                        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                    </path>
                                    <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                        d="M9.5 13l3 3l5 -5" visibility="hidden">
                                        <animate id="visibileAnimation-80" attributeName="visibility" from="hidden"
                                            to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                        <animate id="hideAnimation-80" attributeName="visibility" from="visible"
                                            to="hidden" dur="1s" begin="visibileAnimation-80.end+1" fill="freeze">
                                        </animate>
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <p>In the code:</p>

                        <div class="yfm-clipboard">
                            <pre><code class="hljs cpp">{`val pinchToZoomConfiguration = DivPinchToZoomConfiguration.<span class="hljs-built_in">Builder</span>(<span class="hljs-keyword">this</span>)
                                    .<span class="hljs-built_in">host</span>(window)
                                    .<span class="hljs-built_in">dimColor</span>(<span class="hljs-number">0xFF808080</span>.<span class="hljs-built_in">toInt</span>())
                                    .<span class="hljs-built_in">build</span>()
                                val rawResProvider = object : DivLottieRawResProvider {
                                    <span class="hljs-keyword">override</span> fun <span class="hljs-built_in">provideRes</span>(url: String): Int? {
                                        <span class="hljs-keyword">if</span> (url == <span class="hljs-string">"res://love"</span>) <span class="hljs-keyword">return</span> R.raw.love_anim
                                        <span class="hljs-keyword">return</span> null
                                    }
                                    <span class="hljs-keyword">override</span> fun <span class="hljs-built_in">provideAssetFile</span>(url: String): String? {
                                        <span class="hljs-keyword">if</span> (url == <span class="hljs-string">"asset://banana"</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">"lottie/lottie_1.json"</span>
                                        <span class="hljs-keyword">return</span> null
                                    }
                                }
                                val divConfiguration = DivConfiguration.<span class="hljs-built_in">Builder</span>(<span class="hljs-built_in">DefaultDivImageLoader</span>(Container.imageManager))
                                    .<span class="hljs-built_in">experimentConfig</span>(experimentConfig)
                                    .<span class="hljs-built_in">actionHandler</span>(actionHandler)
                                    .<span class="hljs-built_in">divLogger</span>(logger)
                                    .<span class="hljs-built_in">extension</span>(<span class="hljs-built_in">DivPinchToZoomExtensionHandler</span>(pinchToZoomConfiguration))
                                    .<span class="hljs-built_in">extension</span>(<span class="hljs-built_in">DivLottieExtensionHandler</span>(rawResProvider))
                                    .<span class="hljs-built_in">build</span>()
                                val divContext = <span class="hljs-built_in">DivContext</span>(baseContext = <span class="hljs-keyword">this</span>, configuration = divConfiguration)
                                divView = <span class="hljs-built_in">DivView</span>(divContext)`}
                            </code></pre>

                            <button class="yfm-clipboard-button" aria-label="Copy">
                                <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                    data-animation="84">
                                    <path fill="currentColor"
                                        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                    </path>
                                    <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                        d="M9.5 13l3 3l5 -5" visibility="hidden">
                                        <animate id="visibileAnimation-84" attributeName="visibility" from="hidden"
                                            to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                        <animate id="hideAnimation-84" attributeName="visibility" from="visible"
                                            to="hidden" dur="1s" begin="visibileAnimation-84.end+1" fill="freeze">
                                        </animate>
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="uo9c9bx1" class="yfm-tab-panel" role="tabpanel" aria-labelledby="ios" data-title="iOS">
                        <p>Extension handlers must comply with the <code>DivExtensionHandler</code> protocol.</p>
                        <p>To connect the handler, pass it to <code>DivBlockModelingContext</code>:</p>

                        <div class="yfm-clipboard">
                            <pre><code class="hljs cpp">{`<span class="hljs-built_in">DivBlockModelingContext</span>(
                                    ...
                                    extensionHandlers: [
                                      <span class="hljs-built_in">PinchToZoomExtensionHandler</span>(overlayView: rootView),
                                      <span class="hljs-built_in">SomeExtensionHandler</span>()
                                    ]
                                  )`}
                            </code></pre>

                            <button class="yfm-clipboard-button" aria-label="Copy">
                                <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                    data-animation="93">
                                    <path fill="currentColor"
                                        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                    </path>
                                    <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                        d="M9.5 13l3 3l5 -5" visibility="hidden">
                                        <animate id="visibileAnimation-93" attributeName="visibility" from="hidden"
                                            to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                        <animate id="hideAnimation-93" attributeName="visibility" from="visible"
                                            to="hidden" dur="1s" begin="visibileAnimation-93.end+1" fill="freeze">
                                        </animate>
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <h3 id="lottie"><a href="en/concepts/extensions#lottie" class="yfm-anchor" aria-hidden="true"></a>Lottie
                    in an animated gif image</h3>
                <p>To connect the animation to a <a href="en/concepts/divs/2/div-gif-image">gif image</a>, fill in the
                    <code>extensions</code> array:</p>

                <div class="yfm-clipboard">
                    <pre><code class="hljs json">{`{
                            <span class="hljs-attr">"extensions"</span>: [
                              {
                                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"lottie"</span>,
                                <span class="hljs-attr">"params"</span>: {
                                  <span class="hljs-attr">"lottie_url"</span>: <span class="hljs-string">"https://assets9.lottiefiles.com/packages/lf20_edpg3c3s.json"</span>,
                                  <span class="hljs-attr">"repeat_count"</span>: <span class="hljs-number">3</span>,
                                  <span class="hljs-attr">"repeat_mode"</span>: <span class="hljs-string">"restart"</span>
                                }
                              }
                            ]
                          }`}
                    </code></pre>

                    <button class="yfm-clipboard-button" aria-label="Copy">
                        <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="102">
                            <path fill="currentColor"
                                d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                            </path>
                            <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                visibility="hidden">
                                <animate id="visibileAnimation-102" attributeName="visibility" from="hidden"
                                    to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                <animate id="hideAnimation-102" attributeName="visibility" from="visible" to="hidden"
                                    dur="1s" begin="visibileAnimation-102.end+1" fill="freeze"></animate>
                            </path>
                        </svg>
                    </button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p><strong>Parameters</strong></p>
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
                                <p>Extension ID.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><code>lottie_url</code></p>
                            </td>
                            <td>
                                {`<p>Mandatory URL to lottie json. It can work according to the
                                    <code>asset:*{address}</code> or <code>res:*{address}</code> schemes for embedded
                                    resources. Resource binding in these schemes occurs via the
                                    <code>DivLottieRawResProvider</code> dependency that is passed to
                                    <code>DivLottieExtensionHandler</code>.</p>`}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><code>repeat_count</code></p>
                            </td>
                            <td>
                                <p>The number of animation repetitions. Use the <code>-1</code> value for an infinite
                                    number of repetitions.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><code>repeat_mode</code></p>
                            </td>
                            <td>
                                <p>The action after the animation ends. It can have the values:</p>
                                <ul>
                                    <li><code>restart</code>: Animation restarts.</li>
                                    <li><code>reverse</code>: Animation is displayed frame-by-frame in the reverse
                                        order.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2 id="troubleshooting"><a href="en/concepts/extensions#troubleshooting" class="yfm-anchor"
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
    </div><div class="dc-nav-toc-panel dc-doc-page__toc-nav-panel">
            <div class="dc-nav-toc-panel__content">
                <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_left">
                    <div class="dc-nav-toc-panel__control-hint">Previous</div>
                    <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/divs/2/div-visibility-action"
                        target="_self" class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div class="dc-nav-toc-panel__control-name">visibility-action</div>
                    </a></div>
                </div>
                <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                    <div class="dc-nav-toc-panel__control-hint">Next</div>
                    <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/faq" target="_self"
                        class="dc-nav-toc-panel__link" data-router-shallow="true">
                        <div class="dc-nav-toc-panel__control-name">FAQ</div><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="none" viewBox="0 0 16 16">
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