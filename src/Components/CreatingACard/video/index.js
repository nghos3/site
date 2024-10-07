import React from 'react';
const Component = () => {
    return (<div class="dc-doc-layout__center">
        <div class="dc-doc-page__breadcrumbs">
            <nav class="dc-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="dc-breadcrumbs__items">
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text">Creating a card</span></li>
                    <li class="dc-breadcrumbs__item"><span class="dc-breadcrumbs__text" href="en/concepts/video"
                            aria-current="page">Video</span></li>
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
                <h1 class="dc-doc-page-title dc-doc-page__title"><span>Video</span></h1>
                <div class="dc-doc-page__page-contributors"></div>
                <div class="dc-doc-page__content-mini-toc yfm">
                    <ul>
                        <li><a href="en/concepts/video#params">Video element properties</a></li>
                        <li><a href="en/concepts/video#control">Playback control</a></li>
                        <li><a href="en/concepts/video#embed">How to connect a video player</a>
                            <ul>
                                <li><a href="en/concepts/video#default">Standard player</a></li>
                                <li><a href="en/concepts/video#custom">Custom player support</a></li>
                            </ul>
                        </li>
                        <li><a href="en/concepts/video#troubleshooting">Learn more</a></li>
                    </ul>
                </div>
                <div class="dc-doc-page__body dc-doc-page__body_text-size_m yfm">
                    <p>To add a video clip to the screen:</p>
                    <ul>
                        <li>Use a <a href="en/concepts/divs/2/div-video"><code>video</code></a> element.</li>
                        <li>Connect the player in your app. For more information, see <a href="en/concepts/video">How to
                                connect a video player</a>.</li>
                    </ul>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">View an interactive example</summary>
                        <div class="yfm-cut-content"><iframe
                                src="https://yastatic.net/s3/home/divkit/docs/1.0.4/index.html?json=%7B%0A++%22templates%22%3A+%7B%0A++++%22title%22%3A+%7B%0A++++++%22type%22%3A+%22text%22%2C%0A++++++%22font_size%22%3A+20%2C%0A++++++%22line_height%22%3A+24%2C%0A++++++%22font_weight%22%3A+%22bold%22%2C%0A++++++%22paddings%22%3A+%7B%0A++++++++%22left%22%3A+24%2C%0A++++++++%22right%22%3A+24%2C%0A++++++++%22bottom%22%3A+16%0A++++++%7D%0A++++%7D%2C%0A++++%22control_button%22%3A+%7B%0A++++++%22type%22%3A+%22image%22%2C%0A++++++%22scale%22%3A+%22fit%22%2C%0A++++++%22aspect%22%3A+%7B%0A++++++++%22ratio%22%3A+1%0A++++++%7D%2C%0A++++++%22width%22%3A+%7B%0A++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++%22value%22%3A+44%0A++++++%7D%0A++++%7D%0A++%7D%2C%0A++%22card%22%3A+%7B%0A++++%22log_id%22%3A+%22sample_card%22%2C%0A++++%22variables%22%3A+%5B%0A++++++%7B%0A++++++++%22name%22%3A+%22video_time%22%2C%0A++++++++%22type%22%3A+%22integer%22%2C%0A++++++++%22value%22%3A+0%0A++++++%7D%0A++++%5D%2C%0A++++%22states%22%3A+%5B%0A++++++%7B%0A++++++++%22state_id%22%3A+0%2C%0A++++++++%22div%22%3A+%7B%0A++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++%22orientation%22%3A+%22vertical%22%2C%0A++++++++++%22margins%22%3A+%7B%0A++++++++++++%22top%22%3A+24%2C%0A++++++++++++%22bottom%22%3A+24%0A++++++++++%7D%2C%0A++++++++++%22items%22%3A+%5B%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22title%22%2C%0A++++++++++++++%22text%22%3A+%22Video%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22video%22%2C%0A++++++++++++++%22id%22%3A+%22bears_video%22%2C%0A++++++++++++++%22video_sources%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22video_source%22%2C%0A++++++++++++++++++%22url%22%3A+%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fdivkit%2Fbears.mp4%22%2C%0A++++++++++++++++++%22mime_type%22%3A+%22video%2Fmp4%22%0A++++++++++++++++%7D%0A++++++++++++++%5D%2C%0A++++++++++++++%22repeatable%22%3A+false%2C%0A++++++++++++++%22margins%22%3A+%7B%0A++++++++++++++++%22bottom%22%3A+20%2C%0A++++++++++++++++%22top%22%3A+20%0A++++++++++++++%7D%2C%0A++++++++++++++%22autostart%22%3A+false%2C%0A++++++++++++++%22muted%22%3A+true%2C%0A++++++++++++++%22elapsed_time_variable%22%3A+%22video_time%22%2C%0A++++++++++++++%22height%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22fixed%22%2C%0A++++++++++++++++%22value%22%3A+320%0A++++++++++++++%7D%2C%0A++++++++++++++%22background%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22solid%22%2C%0A++++++++++++++++++%22color%22%3A+%22%23000000%22%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++%22type%22%3A+%22container%22%2C%0A++++++++++++++%22orientation%22%3A+%22horizontal%22%2C%0A++++++++++++++%22width%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22match_parent%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22height%22%3A+%7B%0A++++++++++++++++%22type%22%3A+%22wrap_content%22%0A++++++++++++++%7D%2C%0A++++++++++++++%22content_alignment_horizontal%22%3A+%22center%22%2C%0A++++++++++++++%22content_alignment_vertical%22%3A+%22center%22%2C%0A++++++++++++++%22items%22%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22control_button%22%2C%0A++++++++++++++++++%22image_url%22%3A+%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fdivkit%2Frewind_button.png%22%2C%0A++++++++++++++++++%22margins%22%3A+%7B%0A++++++++++++++++++++%22right%22%3A+20%0A++++++++++++++++++%7D%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22rewind%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fset_variable%3Fname%3Dvideo_time%26value%3D0%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22control_button%22%2C%0A++++++++++++++++++%22image_url%22%3A+%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fdivkit%2Fplay_button.png%22%2C%0A++++++++++++++++++%22margins%22%3A+%7B%0A++++++++++++++++++++%22right%22%3A+15%0A++++++++++++++++++%7D%2C%0A++++++++++++++++++%22paddings%22%3A+%7B%0A++++++++++++++++++++%22top%22%3A+3%2C%0A++++++++++++++++++++%22bottom%22%3A+3%0A++++++++++++++++++%7D%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22play%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fvideo%3Fid%3Dbears_video%26action%3Dstart%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B%0A++++++++++++++++++%22type%22%3A+%22control_button%22%2C%0A++++++++++++++++++%22image_url%22%3A+%22https%3A%2F%2Fyastatic.net%2Fs3%2Fhome%2Fdivkit%2Fpause_button.png%22%2C%0A++++++++++++++++++%22paddings%22%3A+%7B%0A++++++++++++++++++++%22top%22%3A+3%2C%0A++++++++++++++++++++%22bottom%22%3A+3%0A++++++++++++++++++%7D%2C%0A++++++++++++++++++%22actions%22%3A+%5B%0A++++++++++++++++++++%7B%0A++++++++++++++++++++++%22log_id%22%3A+%22pause%22%2C%0A++++++++++++++++++++++%22url%22%3A+%22div-action%3A%2F%2Fvideo%3Fid%3Dbears_video%26action%3Dpause%22%0A++++++++++++++++++++%7D%0A++++++++++++++++++%5D%0A++++++++++++++++%7D%0A++++++++++++++%5D%0A++++++++++++%7D%0A++++++++++%5D%0A++++++++%7D%0A++++++%7D%0A++++%5D%0A++%7D%0A%7D"
                                width="700" height="500" frameborder="1"></iframe>
                        </div>
                    </details>
                    <h2 id="params"><a href="en/concepts/video#params" class="yfm-anchor" aria-hidden="true"></a>Video
                        element properties</h2>
                    <p>In the example above:</p>
                    <ul>
                        <li><code>video_sources</code>: An array of variants with different MIME types for the same video.
                            The player selects the source that can be played on the platform.</li>
                        <li><code>repeatable</code>: Determines whether the video automatically repeats after playback is
                            complete.</li>
                        <li><code>autostart</code>: Determines whether playback starts automatically.</li>
                        <li><code>muted</code>: Determines whether the sound is muted during playback.</li>
                        <li><code>preview</code>: A line that contains a preview image in Base64 encoding that is displayed
                            until the player finishes rendering the first video frame.</li>
                        <li><code>elapsed_time_variable</code>: Contains the name of the variable that stores the current
                            position of video playback in milliseconds. When the variable value is changed from the outside,
                            the player follows the variable value to set the playback position.</li>
                        <li><code>height</code>: Video element container height.</li>
                        <li><code>width</code>: Video element container width.</li>
                    </ul>
                    <p>For a detailed description of the <code>video</code> element properties, see the element <a
                            href="en/concepts/divs/2/div-video">reference book</a>.</p>
                    <h2 id="control"><a href="en/concepts/video#control" class="yfm-anchor" aria-hidden="true"></a>Playback
                        control</h2>
                    <p>The <code>video</code> element only contains the player properties. All video playback control
                        elements are implemented by calling the <a href="en/concepts/interaction"><code>div-action</code>
                            actions</a>.</p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">Sample code for video playback start</summary>
                        <div class="yfm-cut-content">
                            <div class="yfm-clipboard">
                                <pre><code class="hljs json">{`{
      <span class="hljs-attr">"type"</span>: <span class="hljs-string">"image"</span>,
      <span class="hljs-attr">"scale"</span>: <span class="hljs-string">"fit"</span>,
      <span class="hljs-attr">"image_url"</span>: <span class="hljs-string">"https://sample_host/image.png"</span>,
      <span class="hljs-attr">"actions"</span>: [
        {
          <span class="hljs-attr">"log_id"</span>: <span class="hljs-string">"play"</span>,
          <span class="hljs-attr">"url"</span>: <span class="hljs-string">"div-action://video?id=new_video&amp;action=start"</span>
        }
      ]
    }`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="85">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-85" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-85" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-85.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </details>
                    <p>In this example, the video starts playing when you click the image. The <code>aiv-action</code>
                        action call parameters:</p>
                    <ul>
                        <li>
                            <p><code>path</code>: <code>video</code>: Indicates that the action is performed on a
                                <code>video</code> element.</p>
                        </li>
                        <li>
                            <p><code>id</code>: <code>new_video</code>: The ID of the video element the action is performed
                                on.</p>
                        </li>
                        <li>
                            <p><code>action</code>: <code>start</code>: The action that's performed over the video. In this
                                case, video playback starts. Supported <code>action</code> parameter values for the video
                                element:</p>
                            <ul>
                                <li><code>start</code></li>
                                <li><code>pause</code></li>
                            </ul>
                        </li>
                    </ul>
                    <h2 id="embed"><a href="en/concepts/video#embed" class="yfm-anchor" aria-hidden="true"></a>How to
                        connect a video player</h2>
                    <p>With DivKit, you can use a standard player or your own to. The latter comes in handy, for example,
                        when you want to play videos in a format that's not supported by the standard player.</p>
                    <h3 id="default"><a href="en/concepts/video#default" class="yfm-anchor" aria-hidden="true"></a>Standard
                        player</h3>
                    <p>By default, DivKit uses a standard player for all platforms except Android, where you need to connect
                        the player explicitly.</p>
                    <h4 id="android"><a href="en/concepts/video#android" class="yfm-anchor" aria-hidden="true"></a>Android
                    </h4>
                    <p>DivKit uses ExoPlayer as a standard player for Android.</p>
                    <p>Because ExoPlayer initialization is a <q>heavy</q> operation, the player is only connected when you
                        explicitly specify it in the <code>DivConfiguration</code> class. If you don't plan to use a video
                        player in your app, don't call the <code>.divPlayerFactory</code> method in the
                        <code>DivConfiguration</code> class builder.</p>
                    <p>To work with the standard player, pass <code>ExoDivPlayerFactory</code> from the
                        <code>com.yandex.div.video</code> package to the <code>DivConfiguration</code> builder as a
                        <code>.divPlayerFactory()</code> method argument.</p>
                    <p>The <code>DivConfiguration</code> class for supporting video will generally look like this:</p>
    
                    <div class="yfm-clipboard">
                        <pre><code class="hljs">DivConfiguration.Builder()
        .divPlayerFactory(ExoDivPlayerFactory())
        .build()
    </code></pre>
    
                        <button class="yfm-clipboard-button" aria-label="Copy">
                            <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon" data-animation="147">
                                <path fill="currentColor"
                                    d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                </path>
                                <path stroke="currentColor" fill="transparent" stroke-width="1.5" d="M9.5 13l3 3l5 -5"
                                    visibility="hidden">
                                    <animate id="visibileAnimation-147" attributeName="visibility" from="hidden"
                                        to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                    <animate id="hideAnimation-147" attributeName="visibility" from="visible" to="hidden"
                                        dur="1s" begin="visibileAnimation-147.end+1" fill="freeze"></animate>
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>If you don't connect the player in the <code>DivConfiguration</code> class, there will be an empty
                        block in place of and the same size as the player when rendering the screen with the
                        <code>video</code> element.</p>
                    <h4 id="other-platforms"><a href="en/concepts/video#other-platforms" class="yfm-anchor"
                            aria-hidden="true"></a>Other platforms</h4>
                    <p>On platforms other than Android, you don't need to explicitly call the
                        <code>.divPlayerFactory()</code> method to use the standard player. When creating a video element,
                        the platform-standard video player is used by default.</p>
                    <h3 id="custom"><a href="en/concepts/video#custom" class="yfm-anchor" aria-hidden="true"></a>Custom
                        player support</h3>
                    <p>To connect your own video player to DivKit, create a factory that provides a player and a view for it
                        at the request of the DivKit app. The factory must be a descendant of the
                        <code>DivPlayerFactory</code> class.</p>
                    <p>The video player created by the factory must implement the <code>DivPlayer</code> interface and thus
                        be a proxy for calls from DivKit. To take one example, here's how <code>DivPlayer</code> methods for
                        <code>ExoPlayer</code> are implemented in Kotlin.</p>
                    <details class="yfm-cut">
                        <summary class="yfm-cut-title">See sample code</summary>
                        <div class="yfm-cut-content">
                            <div class="yfm-clipboard">
                                <pre><code class="hljs csharp">{`val player: ExoPlayer <span class="hljs-keyword">by</span> lazy {
         SimpleExoPlayer.Builder(context).build()
         }
    
         <span class="hljs-function"><span class="hljs-keyword">override</span> fun <span class="hljs-title">play</span>(<span class="hljs-params"></span>)</span> {
         player.play()
         }
    
         <span class="hljs-function"><span class="hljs-keyword">override</span> fun <span class="hljs-title">pause</span>(<span class="hljs-params"></span>)</span> {
         player.pause()
         }
    
         <span class="hljs-function"><span class="hljs-keyword">override</span> fun <span class="hljs-title">seek</span>(<span class="hljs-params">toMs: Long</span>)</span> {
         player.seekTo(toMs)
         }
    
         <span class="hljs-function"><span class="hljs-keyword">override</span> fun <span class="hljs-title">setSource</span>(<span class="hljs-params">sourceVariants: List&lt;DivVideoSource&gt;, config: DivPlayerPlaybackConfig</span>)</span> {
         val mediaSource = sourceVariants.toMediaSource()
    
         player.setMediaSource(mediaSource)
         player.prepare()
         }
    
         <span class="hljs-function"><span class="hljs-keyword">override</span> fun <span class="hljs-title">release</span>(<span class="hljs-params"></span>)</span> {
         player.release()
         }`}
    </code></pre>
    
                                <button class="yfm-clipboard-button" aria-label="Copy">
                                    <svg width="16" height="16" viewBox="0 0 24 24" class="yfm-clipboard-icon"
                                        data-animation="171">
                                        <path fill="currentColor"
                                            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">
                                        </path>
                                        <path stroke="currentColor" fill="transparent" stroke-width="1.5"
                                            d="M9.5 13l3 3l5 -5" visibility="hidden">
                                            <animate id="visibileAnimation-171" attributeName="visibility" from="hidden"
                                                to="visible" dur="0.2s" fill="freeze" begin=""></animate>
                                            <animate id="hideAnimation-171" attributeName="visibility" from="visible"
                                                to="hidden" dur="1s" begin="visibileAnimation-171.end+1" fill="freeze">
                                            </animate>
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </details>
                    <h2 id="troubleshooting"><a href="en/concepts/video#troubleshooting" class="yfm-anchor"
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
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/animation" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div class="dc-nav-toc-panel__control-name">Animation</div>
                            </a></div>
                    </div>
                    <div class="dc-nav-toc-panel__control dc-nav-toc-panel__control_right">
                        <div class="dc-nav-toc-panel__control-hint">Next</div>
                        <div class="dc-nav-toc-panel__control-text"><a href="en/concepts/interaction" target="_self"
                                class="dc-nav-toc-panel__link" data-router-shallow="true">
                                <div class="dc-nav-toc-panel__control-name">Actions with elements</div><svg
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