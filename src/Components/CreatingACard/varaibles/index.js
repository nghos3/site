import React from 'react';
const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/variables"
                            aria-current="page">Variables</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Variables</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/variables#types">Data types</a></li>
                        <li><a href="en/concepts/variables#global">Non-local variables</a></li>
                        <li><a href="en/concepts/variables#modify">Changing the values of variables</a></li>
                        <li><a href="en/concepts/variables#actions">Running actions when changing variable values</a></li>
                        <li><a href="en/concepts/variables#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <p>To use variables, declare them in a separate <code>variables</code> block in the card root. When
                        declaring a variable, specify the following parameters:</p>
                    <ul>
                        <li><code>name</code>: The name, can consist of Latin characters in different cases, digits, and
                            <code>_</code> and <code>.</code> symbols. It can't start with a digit or a dot.</li>
                        <li><code>type</code>: The type of variable. See <a href="en/concepts/variables#types">Data
                                types</a>.</li>
                        <li><code>value</code>: The default value.</li>
                    </ul>
                    <p>For example:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
        <span class="hljs-attr">"variables"</span>: [
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"subscribed"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"boolean"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-literal">true</span>
            }
        ],
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="23">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-23" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-23" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-23.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h2 id="types"><a href="en/concepts/variables#types" class="yfm-anchor" aria-hidden="true"></a>Data
                        types</h2>
                    <p>Supported data types:</p>
                    <ul>
                        <li>Boolean: <code>boolean</code></li>
                        <li>String: <code>string</code></li>
                        <li>Integer: <code>integer</code></li>
                        <li>Floating-point number: <code>number</code></li>
                        <li>Color: <code>color</code></li>
                        <li>Link to the resource: <code>url</code></li>
                        <li>Dictionary: <code>dict</code></li>
                        <li>Array: <code>array</code></li>
                    </ul>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">Examples of declaring variables</summary>
                        <div class="yfm-cut-content">
                            <div class="yfm-clipboard">
                                <pre><code class="hljs json">{`{
        <span class="hljs-attr">"variables"</span>: [
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"subscribed"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"boolean"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-literal">true</span>
            },
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"likes"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"integer"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-number">0</span>
            },
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"black"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"color"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-string">"#f000"</span>
            },
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"username"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"string"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-string">"unknown"</span>
            }
        ],
        <span class="hljs-attr">"states"</span>: [ ... ]
    }`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="77">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-77" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-77" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-77.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </details>
                    <h2 id="global"><a href="en/concepts/variables#global" class="yfm-anchor"
                            aria-hidden="true"></a>Non-local variables</h2>
                    <p>Variables declared in the card are considered local, and other cards don't have access to them.
                        However, there may be cases when multiple cards must use one shared variable. In this case, it is
                        acceptable to refer to undeclared variables. When trying to receive their values, the runtime
                        environment can find these variables in <code>DivContext</code> if they are declared in it. In
                        addition, the variables' values can be both read from the card and written in it.</p>
                    <p>Example of working with non-local variables on Android:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">**import** com.yandex.div.**data**.Variable
    ...
    
    **val** divContext: DivContext = provideYourDivContext()
    divContext.divComponent.globalVariableController.putOrUpdate(
        Variable.StringVariable(name = "user_name", defaultValue = "undefined"),
        Variable.BooleanVariable(name = "dark_theme", defaultValue = true),
        ...
    )
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="89">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-89" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-89" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-89.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h2 id="modify"><a href="en/concepts/variables#modify" class="yfm-anchor"
                            aria-hidden="true"></a>Changing the values of variables</h2>
                    <p>To change the value of a variable declared in the card, the <code>set_variable</code><a
                            href="en/concepts/interaction">action</a> can be used.</p>
                    <p>For example:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">div-action://set_variable?name=common_text_size&amp;value=17
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="99">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-99" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-99" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-99.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>To set the value for a variable, you can use <a href="en/concepts/expressions">calculated
                            expressions</a> and <a href="en/concepts/functions">built-in functions</a>.</p>
                    <p>You can also change the values of variables using the SDK (in Android using
                        <code>DivView#setVariable</code> ). The type of a new value must match the variable type, otherwise
                        the value can't be applied.</p>
                    <p>Examples:</p>
                    <ul>
                        <li>
                            <p>Change the value of a floating-point variable:</p>
    
                            <div class="yfm-clipboard">
                                <pre><code class="hljs">div-action://set_variable?name=price&amp;value=3.889
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="114">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-114" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-114" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-114.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li>
                            <p>Change the value of a boolean variable:</p>
                            <ul>
                                <li><code>true</code> value:
                                    <code>div-action://set_variable?name=is_liked&amp;value=1</code></li>
                                <li><code>false</code> value:
                                    <code>div-action://set_variable?name=is_liked&amp;value=0</code></li>
                            </ul>
                        </li>
                        <li>
                            <p>Change the <code>color</code> type variable to green:</p>
    
                            <div class="yfm-clipboard">
                                <pre><code class="hljs">{`div-action://set_variable?name=color_variable&amp;value=@{encodeUri('#ff00ff00')}`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="137">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-137" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-137" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-137.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <h2 id="actions"><a href="en/concepts/variables#actions" class="yfm-anchor"
                            aria-hidden="true"></a>Running actions when changing variable values</h2>
                    <p>When changing the variable value (except for updating all properties where the variable is used), any
                        number of <a href="en/concepts/interaction">actions</a> can be run. Add the trigger description in
                        <code>variable_triggers</code>:</p>
                    <ul>
                        <li>
                            <p><code>condition</code>: A condition for running the action. It can contain a boolean
                                expression using variables or trigger events.</p>
                        </li>
                        <li>
                            <p><code>mode</code>: Determines when the condition is checked:</p>
                            <ul>
                                <li><code>on_condition</code>: The action is triggered if the condition is met when a
                                    variable's value changes (the condition was not met before).</li>
                                <li><code>on_variable</code>: The action is triggered each time the condition is met when
                                    the variable's value changes.</li>
                            </ul>
                        </li>
                        <li>
                            <p><code>actions</code>: Describes <a href="en/concepts/interaction">actions</a> that must be
                                run when the condition is met.</p>
                        </li>
                    </ul>
                    <p>Limitations:</p>
                    <ul>
                        <li>Conditions that don't contain variables (such as <code>"condition": "@{1 == 1}"</code>) or
                            contain functions that don't depend on variables <strong>won't work</strong>, because variables
                            determine when to run the condition check.</li>
                        <li>The trigger won't start if the compared entities in the condition have different types (for
                            example, if a boolean variable is compared with an <code>integer</code> variable).</li>
                    </ul>
                    <p>For example:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
        <span class="hljs-attr">"states"</span>: { ... },
        <span class="hljs-attr">"variables"</span>: { ... },
        <span class="hljs-attr">"variable_triggers"</span>: [
            {
                <span class="hljs-attr">"condition"</span>: <span class="hljs-string">"@{liked}"</span>,
                <span class="hljs-attr">"actions"</span>: [
                    {
                        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"div-action://set_variable?name=total_likes&amp;value=@{sum(total_likes, 1)}"</span>
                    }
                ]
            },
            {
                <span class="hljs-attr">"condition"</span>: <span class="hljs-string">"@{subscribed &amp;&amp; !liked}"</span>,
                <span class="hljs-attr">"mode"</span>: <span class="hljs-string">"on_condition"</span>,
                <span class="hljs-attr">"actions"</span>: [
                    {
                        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"div-action://set_state?state_id=0/subscriptions/expanded"</span>
                    },
                    {
                        <span class="hljs-attr">"log_id"</span>: <span class="hljs-string">"common_posts_shown"</span>,
                        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"div-action://set_state?state_id=0/common_posts/collapsed"</span>
                    }
                ]
            },
            {
                <span class="hljs-attr">"condition"</span>: <span class="hljs-string">"@{total_likes &gt; 100 || user_name == 'John'}"</span>,
                <span class="hljs-attr">"mode"</span>: <span class="hljs-string">"on_variable"</span>,
                <span class="hljs-attr">"actions"</span>: [ ... ]
            }
      ]
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="193">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-193" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-193" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-193.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>In the example above, the first trigger runs the action that increases the <code>total_likes</code>
                        variable value each time the <code>liked</code> variable value changes from <code>false</code> to
                        <code>true</code> . The second trigger follows the same logic.</p>
                    <p>Because of the <code>"mode": "on_variable"</code> parameter, the third trigger is started every time
                        the variables' values are changed and the <code>condition</code> is met.</p>
                    <h2 id="troubleshooting"><a href="en/concepts/variables#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/templates" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Templates</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/expressions" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Calculated expressions</div><svg
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