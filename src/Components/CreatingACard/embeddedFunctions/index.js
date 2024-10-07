import React from 'react';
const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/functions"
                            aria-current="page">Embedded functions</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Embedded functions</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/functions#std">Type conversion</a></li>
                        <li><a href="en/concepts/functions#math">Mathematical operations</a></li>
                        <li><a href="en/concepts/functions#strings">String operations</a></li>
                        <li><a href="en/concepts/functions#colors">Color operations</a></li>
                        <li><a href="en/concepts/functions#datetime">Date and time operations</a></li>
                        <li><a href="en/concepts/functions#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <h2 id="std"><a href="en/concepts/functions#std" class="yfm-anchor" aria-hidden="true"></a>Type
                        conversion</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Function</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toBoolean(integer) boolean</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to a boolean.<br />
                                        Returns <code>true</code> if the argument is <code>1</code>, <code>false</code> if
                                        the argument is <code>0</code>, or an error otherwise.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toBoolean(string) boolean</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to a boolean.<br />
                                        Returns <code>true</code> if the argument is <code>"true"</code>, <code>false</code>
                                        if the argument is <code>"false"</code>, or an error otherwise.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toInteger(boolean) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to an integer.<br />
                                        Returns <code>1</code> if the argument is <code>true</code> and <code>1</code> if
                                        the argument is <code>false</code>.</p>
                                    <br />
                                    <p>Argument: <code>boolean</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toInteger(number) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to an integer. Rounds down the result.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: <code>number</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toInteger(string) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to an integer.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toNumber(integer) number</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to a floating-point number.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toNumber(string) number</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to a floating-point number.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toString(boolean) string</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to a string.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>boolean</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toString(integer) string</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to a string.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toString(number) string</code></p>
                                </td>
                                <td>
                                    <p>Converts the argument to a string.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>number</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>encodeUri(string) string</code></p>
                                </td>
                                <td>
                                    <p>Encodes the string in <code>application/x-www-form-urlencoded</code> format.<br />
                                        Returns the encoded <code>string</code> value.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>decodeUri(string) string</code></p>
                                </td>
                                <td>
                                    <p>Decodes the <code>application/x-www-form-urlencoded</code> string.<br />
                                        Returns the decoded <code>string</code> value.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="math"><a href="en/concepts/functions#math" class="yfm-anchor"
                            aria-hidden="true"></a>Mathematical operations</h2>
                    <p>Mathematical operations</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Function</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>div(integer, integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Calculates the quotient of the first number divided by the second. Rounds down the
                                        result. For example: <code>div(5,2)</code> → <code>2</code>.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>integer</code> dividend. 2 — <code>integer</code> divisor.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>div(number, number) number</code></p>
                                </td>
                                <td>
                                    <p>Calculates the quotient of the first number divided by the second.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>number</code> dividend. 2 — <code>number</code> divisor.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>mod(integer, integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Calculates the remainder of the first number divided by the second.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>integer</code> dividend. 2 — <code>integer</code> divisor.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>mul(vararg integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Calculates the product of the arguments.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: multiple <code>integer</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>mul(vararg number) number</code></p>
                                </td>
                                <td>
                                    <p>Calculates the product of the arguments.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Arguments: Multiple <code>number</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>sub(vararg integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Calculates the difference of the arguments.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>integer</code> value to subtract the other arguments from. Other
                                        arguments — One or more <code>integer</code> values to be subtracted from Argument
                                        1.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>sub(vararg number) number</code></p>
                                </td>
                                <td>
                                    <p>Calculates the difference of the arguments.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>number</code> value to subtract the other arguments from. Other
                                        arguments — One or more <code>number</code> values to be subtracted from Argument 1.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>sum(vararg integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Calculates the sum of the arguments.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: multiple <code>integer</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>sum(vararg number) number</code></p>
                                </td>
                                <td>
                                    <p>Calculates the sum of the arguments.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Arguments: Multiple <code>number</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>abs(number) number</code></p>
                                </td>
                                <td>
                                    <p>Calculates the absolute value of the argument.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Argument: <code>number</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>abs(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Calculates the absolute value of the argument.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>max(vararg number) number</code></p>
                                </td>
                                <td>
                                    <p>Finds the argument with the highest value.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Arguments: Multiple <code>number</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>max(vararg integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Finds the argument with the highest value.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: multiple <code>integer</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>min(vararg integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Finds the argument with the lowest value.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: multiple <code>integer</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>min(vararg number) number</code></p>
                                </td>
                                <td>
                                    <p>Finds the argument with the lowest value.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Arguments: Multiple <code>number</code> values.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>maxNumber() number</code></p>
                                </td>
                                <td>
                                    <p>Finds the <code>number</code> argument with the highest value.<br />
                                        Returns a <code>number</code>.</p>
                                    <p>No arguments.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>maxInteger() integer</code></p>
                                </td>
                                <td>
                                    <p>Finds the <code>integer</code> argument with the highest value.<br />
                                        Returns an <code>integer</code>.</p>
                                    <p>No arguments.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>minNumber() number</code></p>
                                </td>
                                <td>
                                    <p>Finds the <code>number</code> argument with the lowest value.<br />
                                        Returns a <code>number</code>.</p>
                                    <p>No arguments.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>minInteger() integer</code></p>
                                </td>
                                <td>
                                    <p>Finds the <code>integer</code> argument with the lowest value.<br />
                                        Returns an <code>integer</code>.</p>
                                    <p>No arguments.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>round(number) number</code></p>
                                </td>
                                <td>
                                    <p>Rounds the argument. For example, 1.49 → 1.0, 1.5 → 2.0.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Argument: <code>number</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>floor(number) number</code></p>
                                </td>
                                <td>
                                    <p>Rounds the argument down. For example, 1.49 → 1.0, 1.5 → 1.0.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Argument: <code>number</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>ceil(number) number</code></p>
                                </td>
                                <td>
                                    <p>Rounds the argument up. For example, 1.49 → 2.0, 1.5 → 2.0.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Argument: <code>number</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>signum(number) number</code></p>
                                </td>
                                <td>
                                    <p>Finds the sign of the argument.<br />
                                        Returns <code>-1.0</code> for negative values, <code>0.0</code> for zero, and
                                        <code>1.0</code> for positive values.</p>
                                    <br />
                                    <p>Argument: <code>number</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>signum(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Finds the sign of the argument.<br />
                                        Returns <code>-1</code> for negative values, <code>0</code> for zero, and
                                        <code>1</code> for positive values.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>copySign(number, number) number</code></p>
                                </td>
                                <td>
                                    <p>Gets the number with the magnitude of the first argument and the sign of the second
                                        argument.<br />
                                        Returns a <code>number</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>number</code> value to copy the magnitude from. 2 —
                                        <code>number</code> value to copy the sign from.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>copySign(integer, integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the number with the magnitude of the first argument and the sign of the second
                                        argument.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>integer</code> value to copy the magnitude from. 2 —
                                        <code>integer</code> value to copy the sign from.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="strings"><a href="en/concepts/functions#strings" class="yfm-anchor"
                            aria-hidden="true"></a>String operations</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Function</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>len(string) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the length of the specified string.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>contains(string, string) boolean</code></p>
                                </td>
                                <td>
                                    <p>Determines whether the string (Argument 1) contains the specified substring (Argument
                                        2).<br />
                                        Returns a <code>boolean</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>string</code> to search. 2 — <code>string</code>
                                        substring to search for.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>substring(string, integer, integer) string</code></p>
                                </td>
                                <td>
                                    <p>Gets the part of the string (Argument 1) located in the range defined by Arguments 2
                                        and 3.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>string</code>. 2 — <code>integer</code> value of the
                                        copied substring's left index. 3 — <code>integer</code> value of the copied
                                        substring's right index.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>replaceAll(string, string, string) string</code></p>
                                </td>
                                <td>
                                    <p>Finds and replaces all occurrences of the substring (Argument 2) in the source string
                                        (Argument 1) with the string specified in Argument 3.<br />
                                        Returns a <code>string</code> copy of the source string with all the matches
                                        replaced.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>string</code> to search. 2 — <code>string</code>
                                        substring to search for. 3 — Replacement <code>string</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>index(string, string) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the index of the first occurrence of the substring (Argument 2) in the string
                                        (Argument 1).<br />
                                        Returns an <code>integer</code>: the index of the first occurrence or
                                        <code>-1</code> if the substring is not found.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>string</code> to search. 2 — <code>string</code>
                                        substring to search for.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>lastIndex(string, string) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the index of the last occurrence of the substring (Argument 2) in the string
                                        (Argument 1).<br />
                                        Returns an <code>integer</code>: the index of the last occurrence or <code>-1</code>
                                        if the substring is not found.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>string</code> to search. 2 — <code>string</code>
                                        substring to search for.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>trim(string) string</code></p>
                                </td>
                                <td>
                                    <p>Trims whitespace from both ends of the specified string.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>trimLeft(string) string</code></p>
                                </td>
                                <td>
                                    <p>Trims whitespace from the beginning of the specified string.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>trimRight(string) string</code></p>
                                </td>
                                <td>
                                    <p>Trims whitespace from the end of the specified string.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toUpperCase(string) string</code></p>
                                </td>
                                <td>
                                    <p>Converts the specified string to uppercase.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>toLowerCase(string) string</code></p>
                                </td>
                                <td>
                                    <p>Converts the specified string to lowercase.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>padStart(string, integer, string) string</code></p>
                                </td>
                                <td>
                                    <p>Pads the beginning of the string with the specified characters until it reaches the
                                        specified length.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>string</code>. 2 — <code>integer</code> value of the
                                        required string length. 3 — <code>string</code> to pad the beginning of the source
                                        string with.</p>
                                    <br />
                                    <p>For example: <code>{`"@{padStart('0', 4, '12')}"`}</code> → <code>"1210"</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>padStart(integer, integer, string) string</code></p>
                                </td>
                                <td>
                                    <p>Converts the number to a string and pads the beginning of the resulting string with
                                        the specified characters until it reaches the specified length.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>integer</code>. 2 — <code>integer</code> value of the
                                        required string length. 3 — <code>string</code> to pad the beginning of the
                                        resulting string with.</p>
                                    <br />
                                    <p>For example: <code>{`"@{padStart(0, 4, '12')}"`}</code> → <code>"1210"</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>padEnd(string, integer, string) string</code></p>
                                </td>
                                <td>
                                    <p>Pads the end of the string with the specified characters until it reaches the
                                        specified length.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>string</code>. 2 — <code>integer</code> value of the
                                        required string length. 3 — <code>string</code> to pad the end of the source string
                                        with.</p>
                                    <br />
                                    <p>For example: <code>{`"@{padEnd('0', 4, '12')}"`}</code> → <code>"0121"</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>padEnd(integer, integer, string) string</code></p>
                                </td>
                                <td>
                                    <p>Converts the number to a string and pads the end of the resulting string with the
                                        specified characters until it reaches the specified length.<br />
                                        Returns a <code>string</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — Source <code>integer</code>. 2 — <code>integer</code> value of the
                                        required string length. 3 — <code>string</code> to pad the end of the resulting
                                        string with.</p>
                                    <br />
                                    <p>For example: <code>{`"@{padEnd(0, 4, '12')}"`}</code> → <code>"0121"</code></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="colors"><a href="en/concepts/functions#colors" class="yfm-anchor" aria-hidden="true"></a>Color
                        operations</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Function</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getColorAlpha(string) number</code></p>
                                </td>
                                <td>
                                    <p>Gets the alpha component of the specified color.<br />
                                        Returns a <code>number</code> in the range from <code>0.0</code> to
                                        <code>1.0</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> hex color value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getColorRed(string) number</code></p>
                                </td>
                                <td>
                                    <p>Gets the red component of the specified color.<br />
                                        Returns a <code>number</code> in the range from <code>0.0</code> to
                                        <code>1.0</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> hex color value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getColorGreen(string) number</code></p>
                                </td>
                                <td>
                                    <p>Gets the green component of the specified color.<br />
                                        Returns a <code>number</code> in the range from <code>0.0</code> to
                                        <code>1.0</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> hex color value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getColorBlue(string) number</code></p>
                                </td>
                                <td>
                                    <p>Gets the blue component of the specified color.<br />
                                        Returns a <code>number</code> in the range from <code>0.0</code> to
                                        <code>1.0</code>.</p>
                                    <br />
                                    <p>Argument: <code>string</code> hex color value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setColorAlpha(string, number) string</code></p>
                                </td>
                                <td>
                                    <p>Sets the alpha value of the specified color.<br />
                                        Returns a <code>string</code> hex color value. For example,
                                        <code>'#FFAABBCC'</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>string</code> hex color value. 2 — <code>number</code> alpha
                                        value in the range from <code>0.0</code> to <code>1.0</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setColorRed(string, number) string</code></p>
                                </td>
                                <td>
                                    <p>Sets the red value of the specified color.<br />
                                        Returns a <code>string</code> hex color value. For example,
                                        <code>'#FFAABBCC'</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>string</code> hex color value. 2 — <code>number</code> red value
                                        in the range from <code>0.0</code> to <code>1.0</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setColorGreen(string, number) string</code></p>
                                </td>
                                <td>
                                    <p>Sets the green value of the specified color.<br />
                                        Returns a <code>string</code> hex color value. For example,
                                        <code>'#FFAABBCC'</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>string</code> hex color value. 2 — <code>number</code> green
                                        value in the range from <code>0.0</code> to <code>1.0</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setColorBlue(string, number) string</code></p>
                                </td>
                                <td>
                                    <p>Sets the blue value of the specified color.<br />
                                        Returns a <code>string</code> hex color value. For example,
                                        <code>'#FFAABBCC'</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>string</code> hex color value. 2 — <code>number</code> blue
                                        value in the range from <code>0.0</code> to <code>1.0</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>argb(number, number, number, number) string</code></p>
                                </td>
                                <td>
                                    <p>Creates a hex color code with the specified alpha, red, green, and blue values.<br />
                                        Returns a <code>string</code> hex color value. For example,
                                        <code>'#FFAABBCC'</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>number</code> alpha value in the range from <code>0.0</code> to
                                        <code>1.0</code>. 2 — <code>number</code> red value in the range from
                                        <code>0.0</code> to <code>1.0</code>. 3 — <code>number</code> green value in the
                                        range from <code>0.0</code> to <code>1.0</code>. 4 — <code>number</code> blue value
                                        in the range from <code>0.0</code> to <code>1.0</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>rgb(number, number, number) string</code></p>
                                </td>
                                <td>
                                    <p>Creates a hex color code with the specified red, green, and blue values. Sets the
                                        alpha component value to <code>1.0</code>.<br />
                                        Returns a <code>string</code> hex color value. For example,
                                        <code>'#FFAABBCC'</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — <code>number</code> red value in the range from <code>0.0</code> to
                                        <code>1.0</code>. 2 — <code>number</code> green value in the range from
                                        <code>0.0</code> to <code>1.0</code>. 3 — <code>number</code> blue value in the
                                        range from <code>0.0</code> to <code>1.0</code>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="datetime"><a href="en/concepts/functions#datetime" class="yfm-anchor"
                            aria-hidden="true"></a>Date and time operations</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Function</strong></p>
                                </td>
                                <td>
                                    <p><strong>Description</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>parseUnixTime(integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Creates a datetime value from the specified Unix timestamp.<br />
                                        Returns a <code>datetime</code>.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> number of seconds elapsed since midnight, January 1,
                                        1970, UTC.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>nowLocal() datetime</code></p>
                                </td>
                                <td>
                                    <p>Creates a datetime value for the current time.<br />
                                        Returns a <code>datetime</code>.</p>
                                    <p>No arguments.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>addMillis(datetime, milliseconds: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Adds the specified number of milliseconds to the original datetime.<br />
                                        Returns a <code>datetime</code>.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> number of
                                        milliseconds to add.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setYear(datetime, year: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Sets the year value of the original datetime.<br />
                                        Returns a <code>datetime</code> with the specified year value.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> year value.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setMonth(datetime, month: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Sets the month value of the original datetime.<br />
                                        Returns a <code>datetime</code> with the specified month value.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> month value
                                        from <code>1</code> to <code>12</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setDay(datetime, monthDay: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Sets the day of month value of the original datetime.<br />
                                        Returns a <code>datetime</code> with the specified day of month value.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> day of month
                                        value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setHours(datetime, hours: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Sets the hours value of the original datetime.<br />
                                        Returns a <code>datetime</code> with the specified hours value.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> hours value.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setMinutes(datetime, minutes: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Sets the minutes value of the original datetime.<br />
                                        Returns a <code>datetime</code> with the specified minutes value.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> minutes
                                        value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setSeconds(datetime, seconds: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Sets the seconds value of the original datetime.<br />
                                        Returns a <code>datetime</code> with the specified seconds value.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> seconds
                                        value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>setMillis(datetime, milliseconds: integer) datetime</code></p>
                                </td>
                                <td>
                                    <p>Sets the milliseconds value of the original datetime.<br />
                                        Returns a <code>datetime</code> with the specified milliseconds value.</p>
                                    <br />
                                    <p>Arguments: 1 — Original <code>datetime</code>. 2 — <code>integer</code> milliseconds
                                        value.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getYear(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the year value of the original datetime.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getMonth(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the month number value of the original datetime.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getDay(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the day of month value of the original datetime.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getDayOfWeek(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the day of week value of the original datetime, where <code>7</code> is
                                        Sunday.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getHours(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the hours value of the original datetime.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getMinutes(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the minutes value of the original datetime.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getSeconds(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the seconds value of the original datetime.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getMillis(datetime) integer</code></p>
                                </td>
                                <td>
                                    <p>Gets the milliseconds value of the original datetime.<br />
                                        Returns an <code>integer</code>.</p>
                                    <br />
                                    <p>Argument: Original <code>datetime</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalSeconds(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to <code>Dd HH:MM:SS</code> format (days,
                                        hours, minutes, seconds) and gets its seconds value.<br />
                                        Returns an <code>integer</code> in the range from <code>0</code> to <code>59</code>.
                                    </p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalSeconds(100000000)}`}</code> → <code>40</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalTotalSeconds(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to seconds and rounds the result down.<br />
                                        Returns an <code>integer</code> seconds value.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalTotalSeconds(100000000)}`}</code> → <code>100000</code>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalMinutes(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to <code>Dd HH:MM:SS</code> format (days,
                                        hours, minutes, seconds) and gets its minutes value.<br />
                                        Returns an <code>integer</code> in the range from <code>0</code> to <code>59</code>.
                                    </p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalMinutes(100000000)}`}</code> → <code>46</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalTotalMinutes(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to minutes and rounds the result down.<br />
                                        Returns an <code>integer</code> minutes value.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalTotalMinutes(100000000)}`}</code> → <code>1666</code>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalHours(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to <code>Dd HH:MM:SS</code> format (days,
                                        hours, minutes, seconds) and gets its hours value.<br />
                                        Returns an <code>integer</code> in the range from <code>0</code> to <code>23</code>.
                                    </p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalHours(100000000)}`}</code> → <code>3</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalTotalHours(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to hours and rounds the result down.<br />
                                        Returns an <code>integer</code> hours value.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalTotalHours(100000000)}`}</code> → <code>27</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalTotalDays(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to days and rounds the result down.<br />
                                        Returns an <code>integer</code> day value.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalTotalDays(1000000000)}`}</code> → <code>11</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><code>getIntervalTotalWeeks(integer) integer</code></p>
                                </td>
                                <td>
                                    <p>Converts the interval in milliseconds to weeks and rounds the result down.<br />
                                        Returns an <code>integer</code> week value.</p>
                                    <br />
                                    <p>Argument: <code>integer</code> interval duration in milliseconds.<br />
                                        <br />
                                    </p>
                                    <p>For example, <code>{`@{getIntervalTotalWeeks(1000000000)}`}</code> → <code>1</code></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="troubleshooting"><a href="en/concepts/functions#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/expressions" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Calculated expressions</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/reuse/reuse" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Reusing blocks</div><svg
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