import React from 'react';
const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/expressions"
                            aria-current="page">Calculated expressions</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Calculated expressions</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/expressions#about">What is a calculated expression?</a></li>
                        <li><a href="en/concepts/expressions#syntax">Syntax of calculated expressions</a></li>
                        <li><a href="en/concepts/expressions#string_template">Template strings</a></li>
                        <li><a href="en/concepts/expressions#calculate">How the expression value is calculated</a></li>
                        <li><a href="en/concepts/expressions#types">Data types in expressions</a></li>
                        <li><a href="en/concepts/expressions#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="about"><a href="en/concepts/expressions#about" class="yfm-anchor" aria-hidden="true"></a>What is
                        a calculated expression?</h2>
                    <p>Almost any card property with the primitive <a href="en/concepts/variables#types">type</a> (such as
                        strings, numbers, and boolean expression) may refer to a calculated expression. The calculated part
                        of the expression is written using the <code>@{}</code> construction and may contain <a
                            href="en/concepts/variables">variables</a>, <a
                            href="en/concepts/expressions#syntax">operators</a>, and functions. View a list of supported
                        functions in <a href="en/concepts/functions">Embedded functions</a>.</p>
                    <p>For example:</p>
                    <ul>
                        <li>
                            <p>The <code>{`"font_size": "@{common_text_size}"</code> expression means the card font size
                                property is calculated based on the <code>common_text_size`}</code> variable value.</p>
                        </li>
                        <li>
                            <p>To increase the font size only for certain cards relative to the same
                                <code>common_text_size</code> variable, you can write the expression like this:</p>
    
                            <div class="yfm-clipboard">
                                <pre><code class="hljs">{`"font_size": "@{sum(common_text_size, extra_size}"`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="19">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-19" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-19" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-19.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <p>Now the expression adds up two variables' values using the built-in <code>sum</code>
                                function. The same expression can be written using the <code>+</code> operator:</p>
    
                            <div class="yfm-clipboard">
                                <pre><code class="hljs">{`"font_size": "@{common_text_size + extra_size}"`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="23">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-23" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-23" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-23.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div class="yfm-note yfm-accent-alert" note-type="alert">
                        <p class="yfm-note-title" yfm2xliff-explicit="true">Restriction</p>
                        <div class="yfm-note-content">
                            <p>You can't use expressions in card type properties, <a
                                    href="en/concepts/interaction">status</a> IDs, or the <code>variables</code><a
                                    href="en/concepts/variables">variable declaration</a> block.</p>
                        </div>
                    </div>
                    <h2 id="syntax"><a href="en/concepts/expressions#syntax" class="yfm-anchor"
                            aria-hidden="true"></a>Syntax of calculated expressions</h2>
                    <p>Calculated expressions support the following constructions:</p>
                    <ul>
                        <li>Logical operators: <code>==</code> , <code>!=</code> , <code>!</code> , <code>&gt;</code> ,
                            <code>&gt;=</code> , <code>&lt;</code> , <code>=</code> , <code>&amp;&amp;</code> ,
                            <code>||</code> .</li>
                        <li>Arithmetic operators: <code>+</code> , <code>-</code> , <code>*</code> , <code>/</code> ,
                            <code>%</code> .</li>
                        <li>Ternary operator: <code>counter &gt; 0 ? true : 'false'</code> .</li>
                        <li>The <code>!:</code> operator: <code>undefined_var !: fallback</code>. If the calculation of the
                            left side of the expression fails, then the right side is calculated.</li>
                        <li>Grouping logical expressions:
                            <code>logging_enabled &amp;&amp; (user_name == 'John' || user_email != '')</code> .</li>
                        <li><a href="en/concepts/functions">Function</a> calls: <code>mult(total_price, .83)</code></li>
                        <li>Using calculated parts within strings and string-type calculated expressions:
                            <code>"mail: @{'@{username}@ya.ru'}"</code> is converted to <code>mail: john@ya.ru</code></li>
                    </ul>
                    <h2 id="string_template"><a href="en/concepts/expressions#string_template" class="yfm-anchor"
                            aria-hidden="true"></a>Template strings</h2>
                    <p>Unlike other parameters, string parameters can contain multiple calculated parts, the values of which
                        are converted to a string and substituted in the specified places. For example:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">{`"url": "https://marketplace.yandex.ru/profile/@{user_name}/orders/@{order_id}"`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="85">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-85" attributeName="visibility" from="hidden" to="visible"
                                        dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-85" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-85.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>In a calculated expression, you can use template strings that contain a constant part and nested
                        calculated expressions:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">"url": "@{'https://marketplace.yandex.ru/profile/@{user_name}/orders/@{order_id}'}"
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
                    <h2 id="calculate"><a href="en/concepts/expressions#calculate" class="yfm-anchor"
                            aria-hidden="true"></a>How the expression value is calculated</h2>
                    <p>The calculated expression value must have the same type as the property of the card the expression is
                        used in. This means additional conversion of data types may be required when calculating an
                        expression.</p>
                    <p><strong>Calculating in string parameters</strong></p>
                    <p>Let's say the parameter value is set by the following expression:
                        <code>{`"text": "@{sum(var_a, 50)}"`}</code></p>
                    <p>First the <code>sum</code> function's argument values are calculated, and then the result of the
                        function.</p>
                    <p>The first argument is a link to a variable. To get its value, the variable is searched for first in
                        local and then in <code>DivContext</code> variables.</p>
                    <p>Let's say <code>var_a</code> is an integer variable whose value is <code>25</code>. The resulting
                        number is added to the other argument, and the function result is <code>75</code>. Then, in
                        accordance with the <code>text</code> property context, this result is converted to a string, and
                        the layout displays the text "75".</p>
                    <p><strong>Calculating in string parameters with strict format</strong></p>
                    <p>The color value can be set by a string with a specific format:
                        <code>{`"text_color": "#@{str_var}"`}</code></p>
                    <p>For such parameters, the string is converted to the parameter type: the result of the calculated
                        expression is first converted to a string and then to the parameter type.</p>
                    <p><strong>Calculating in fields with numeric values</strong></p>
                    <p>Numeric parameters, such as <code>text_size</code>, don't support converting strings to numbers.
                        That's why calculated expressions whose result matches the parameter type must be used in such
                        parameters. For example:</p>
                    <ul>
                        <li>Incorrect: <code>"text_size": "10"</code> , <code>{`"text_size": "@{str_var}"`}</code></li>
                        <li>Correct: <code>"text_size": "@{10}"</code> , <code>{`"text_size": "@{int_var}"`}</code></li>
                    </ul>
                    <p><strong>Calculating incorrect expressions</strong></p>
                    <p>Let's say the <code>height</code> parameter has the numeric type. The parameter value is set via the
                        <code>{`@{toInteger('@{var_a}@{var_b}')}`}</code> expression, where a <a
                            href="en/concepts/expressions#string_template">template string</a> with two variables is used.
                        The result of the calculation is converted to a number using the <code>toInteger</code><a
                            href="en/concepts/expressions">function</a>.</p>
                    <p>Possible errors when using this expression:</p>
                    <ol>
                        <li>Variables don't exist.</li>
                        <li>The <code>toInteger</code> function doesn't exist.</li>
                        <li>The function doesn't support the <code>String</code> type argument.</li>
                        <li>The value returned by the function is the incorrect type or violates the contract expected by
                            the <code>height</code> field.</li>
                    </ol>
                    <p>In all the situations listed above, the <code>height</code> value can't be calculated correctly, so
                        the following attempts to avoid errors are used:</p>
                    <ul>
                        <li>
                            <p>The attempt to calculate the expression with default variable values (for example, if the
                                <code>var_a</code> variable value changed from <code>1</code> to <code>one</code>, and the
                                <code>toInteger</code> function stopped working correctly.</p>
                        </li>
                        <li>
                            <p>The attempt to reuse the last successfully calculated value.</p>
                        </li>
                        <li>
                            <p>If there's no successfully calculated value, the expression takes the default parameter value
                                (in this case, <code>0</code>).</p>
                        </li>
                    </ul>
                    <h2 id="types"><a href="en/concepts/expressions#types" class="yfm-anchor" aria-hidden="true"></a>Data
                        types in expressions</h2>
                    <p>If variables are used in calculated expressions, then, depending on the situation, their values can
                        be converted to internal types of calculated expressions.</p>
                    <p>The variable value is converted to an internal type if:</p>
                    <ul>
                        <li>The variable is used in a template string</li>
                        <li>The variable is compared to the internal type value (the <code>{`@{subscribed == true}`}</code>
                            expression returns <code>true</code></li>
                    </ul>
                    <p>The variable value <strong>isn't converted</strong> to internal type if:</p>
                    <ul>
                        <li>The expression consists only of a link to the variable: <code>{`"color": "@{color_var}"`}</code>
                        </li>
                        <li>Two variables of the same type are compared: <code>{`@{color_var1 == color_var2}`}</code></li>
                    </ul>
                    <p>Example:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs json">{`{
        <span class="hljs-attr">"variables"</span>: [
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"is_delivered"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"boolean"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-literal">true</span>
            },
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"order_id"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"integer"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-number">17</span>
            },
            {
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"sum"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"number"</span>,
                <span class="hljs-attr">"value"</span>: <span class="hljs-number">381.3</span>
            }
        ],
        <span class="hljs-attr">"states"</span>: [
            ...
            {
                ...
                <span class="hljs-attr">"text"</span>: <span class="hljs-string">"Order#@{order_id} delivered: @{is_delivered} total: @{sum}"</span>
            }
            ...
        ]
    }`}
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="228">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-228" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-228" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-228.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>In this example, expressions with non-string types of variables are used in a string. In this case,
                        the variables' values are converted to strings. After calculating the variables' values, the
                        <code>text</code> parameter looks like this: <code>Order#17 delivered: true total: 381.3</code>.
                        Numeric variables were converted to a string without any changes, but the way the
                        <code>is_delivered</code> boolean variable is displayed changed, and it's displayed as
                        <code>true</code> instead of <code>1</code>.</p>
                    <p><strong>Internal types of calculated expressions</strong></p>
                    <ul>
                        <li><code>Integer</code> : Integer type. Range: <code>-2147483648..2147483647</code></li>
                        <li><code>Number</code> : Floating-point number. Range:
                            <code>4.9E-324..1.7976931348623157E308</code> (the Nan and Infinite values aren't supported)
                        </li>
                        <li><code>Boolean</code> : Boolean type. Possible values: <code>true</code> , <code>false</code> .
                        </li>
                        <li><code>String</code> : String.</li>
                        <li><code>DateTime</code> : Date and time.</li>
                    </ul>
                    <p><strong>Rules for conversion to internal types</strong></p>
                    <p>The values of string and numeric type variables are converted to the corresponding internal types.
                        For the remaining variables, the following rules apply:</p>
                    <ul>
                        <li>The <code>color</code> type is converted to a fixed-length string that looks like
                            <code>#ff001122</code>.</li>
                        <li>The <code>url</code> is converted to a corresponding string.</li>
                    </ul>
                    <p><strong>Operations on types</strong></p>
                    <ul>
                        <li>All values of the same type can be checked for equality (<code>==</code> , <code>!=</code> ).
                        </li>
                        <li>Comparison operations are available for numeric and <code>DateTime</code> types
                            (<code>&gt;</code> , <code>&gt;=</code> , <code>&lt;</code> , <code>=</code> ).</li>
                        <li>Numeric types support all arithmetic operators, but note that operations on different types lead
                            to errors. For example, the expression <code>@{3.81 + 5}</code> can't be calculated.</li>
                    </ul>
                    <h2 id="troubleshooting"><a href="en/concepts/expressions#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/variables" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Variables</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/functions" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Embedded functions</div><svg
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