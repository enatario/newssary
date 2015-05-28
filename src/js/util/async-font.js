/*! FilamentGroup.com - v0.1.0 - 2014-07-24
* http://filamentgroup.com/
* Copyright (c) 2014 Filament Group *//*! EnhanceJS: a progressive enhancement boilerplate. Copyright 2014 @scottjehl, Filament Group, Inc. Licensed MIT */
(function( window, undefined ) {
  var filepath = 'http://apps.bostonglobe.com/common/font/';
  // Enable JS strict mode
  "use strict";
  // Define some variables to be used throughout this file
  var doc = window.document;
  // loadCSS: load a CSS file asynchronously. Included from https://github.com/filamentgroup/loadCSS/
  function loadCSS( href, before, media ){
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the first <script> element in the page.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
    var ss = window.document.createElement( "link" );
    var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
    var sheets = window.document.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = "only x";
    // inject link
    ref.parentNode.insertBefore( ss, ref );
    // This function sets the link's media back to `all` so that the stylesheet applies once it loads
    // It is designed to poll until document.styleSheets includes the new sheet.
    function toggleMedia(){
      var defined;
      for( var i = 0; i < sheets.length; i++ ){
        if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
          defined = true;
        }
      }
      if( defined ){
        ss.media = media || "all";
      }
      else {
        setTimeout( toggleMedia );
      }
    }
    toggleMedia();
    return ss;
  }
  /* Enhancements for qualified browsers - “Cutting the Mustard”
    Add your qualifications for major browser experience divisions here.
    For example, you might choose to only enhance browsers that support document.querySelector (IE8+, etc).
    Use case will vary.
    */
  if( !( "querySelector" in doc ) ){
    // basic browsers: last stop here!
    return;
  }
  /* Load custom fonts
    We prefer to load fonts asynchronously so that they do not block page rendering.
    To do this, a meta tag with a name matching the fontsWoffKey should have a content attribute referencing the path to this fonts file.
    NOTE: You may want to have logic here to choose between one of many font formats before loading it.
      For example, we often load WOFF, WOFF2, or Truetype. If so, just define meta tags for each
    */
  var supportsWoff2 = (function( win ){
    if( !( "FontFace" in win ) ) {
      return false;
    }
    // an empty woff2 with no glyphs
    var f = new win.FontFace( "t", 'url( "data:application/font-woff2," ) format( "woff2" )' );
    f.load().catch(function(){});
    return f.status === 'loading';
  })( window );

  // load font (woff)
  var ua = navigator.userAgent,
    fontFileUrl = filepath + "woff.css";
  if( supportsWoff2 ) {
    fontFileUrl = filepath + "woff2.css";
  // sometimes you have to do the bad thing.  ¯\_(ツ)_/¯
  //  ttf if non-chrome android webkit browser
  } else if( ua.indexOf( "Android" ) > -1 && ua.indexOf( "like Gecko" ) > -1 && ua.indexOf( "Chrome" ) === -1 ){
    fontFileUrl = filepath + 'ttf.css';
  }
  loadCSS( fontFileUrl );
}( this ));