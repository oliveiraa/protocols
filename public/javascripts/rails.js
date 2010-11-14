<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- GitHub lives! -->
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <title>GitHub - Server Error</title>
    <style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

body {
  background-color: white;
  font: 13.34px helvetica, arial, freesans, clean, sans-serif;
  *font-size: small;
  text-align: center;
}

table {
  font-size: inherit;
  font: 100%;
}

select,
input,
textarea {
  font: 99% helvetica, arial, freesans, sans-serif;
}

input.text {
  padding: 1px 0;
}

optgroup {
  margin-top: .5em;
}

pre,
code {
  font: 115% Monaco, "Courier New", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", monospace;
  *font-size: 100%;
/*  line-height: 1.5em;*/
}

body * {
  line-height: 1.4em;
}

img {
  border: 0;
}

/* links */

a {
  color: #4183c4; /* blue */
  text-decoration: none;
}

a.action {
  color: #d00; /* red */
  text-decoration: underline;
}

a.action span {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.clear {
  clear: both;
}

.sparkline {
  display: none;
}

img.help {
  vertical-align: middle;
}

.notification {
  background: #FFFBE2 none repeat scroll 0%;
  border: 1px solid #FFE222;
  padding: 1em;
  margin: 1em;
  font-weight: bold;
}

.error_box {
  background: #FFEBE8 none repeat scroll 0%;
  border: 1px solid #DD3C10;
  padding: 1em;
  font-weight: bold;
}

body {
  text-align: center;
}

.site {
  width: 74.213em; /* 13.34px/em = 990px */
  margin: 0 auto;
}

#header {
  background: #fcfcfc url(http://github.s3.amazonaws.com/media/header_bg.png) 0 100% repeat-x;
  height: 6.82em;
}

  #header a {
    color: #fff;
  }

  #header a:hover {
    text-decoration: none;
  }

  #header .logo {
    padding-top: 2em;
    float: left;
  }

  /* actions */

  #header .actions {
    float: right;
    color: #444;
    font-size: 110%;
    margin-top: 2.3em;
  }

    #header .actions a  {
      color: #444;
      margin-left: 1.5em;
      padding: .4em;
    }

    #header .actions a:hover {
      text-decoration: none;
      background-color: #dcdcdc;
    }

  /* basic */

  #header.basic {
    border-bottom: 5px solid #ddd;
    margin-bottom: 1em;
  }

  /* userbox */

  #header .userbox {
    background: #EAF2F5;
    padding: .5em;
    border: 1px solid #ddd;
    float: right;
    margin-top: 1.6em;
    width: 25em;
  }

    #header .userbox .gravatar {
      float: left;
    }

      #header .userbox .gravatar img {
        border: 1px solid #d0d0d0; /* gray */
        padding: 2px;
        background-color: white;
        margin-right: .7em;
      }

    #header .userbox .top {
      overflow: hidden;
    }

      #header .userbox .top .name {
        float: left;
        overflow: hidden;
        font-weight: bold;
        margin-right: .5em;
      }

      #header .userbox .top .name a {
        color: #000;
      }

      #header .userbox .top .links {
        font-size: 85%;
        margin-top: .2em;
        float: right;
        text-align: right;
      }

        #header .userbox .top .links a {
          color: #4183c4;
        }

        #header .userbox .top .links a:hover {
          text-decoration: underline;
        }

    #header .userbox .bottom {
      overflow: hidden;
    }
      #header .userbox .inbox {
        float: left;
        margin-top: .7em;
        background: url('/images/modules/inbox/message.png') 0 .1em no-repeat;
        padding-left: 20px;
        cursor: pointer;
      }

        #header .userbox .inbox a {
          color: #4183c4; /* blue */
        }

      #header .userbox .bottom .select {
        float: right;
        margin-top: .5em;
      }

        #header .userbox .bottom .select select {
          border: 1px solid #bbb;
          padding: 1px;
          background-color: #f0f0f0;
        }

        #header .userbox .bottom .select option {
          padding-left: 3px;
          margin-right: 3px;
          margin-top: 2px;
        }

  #repo_faves {
    width: 16em;
  }

#main {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  margin: 0 auto -8.6em;
}

.push {
  height: 8.6em;
  padding-bottom: 4em;
}

#footer {
  height: 8.6em;
  background: #bbccd9 url(http://github.s3.amazonaws.com/media/footer_bg.png) 0 0 repeat-x;
  overflow: hidden;
  color: #cadcea;
}

  #footer a {
    color: white;
    text-decoration: underline;
  }

  #footer .info {
    padding: 2.9em 0 3.3em 0;
    float: left;
  }

    #footer .info .links {
      padding-bottom: .4em;
      border-bottom: 3px solid #5c8ab3;
    }

    #footer .info .company {
      padding-top: .4em;
    }

  #footer .sponsor {
    padding: 2.75em 0 1em 0;
    float: right;
    width: 25em;
  }

    #footer .sponsor img {
      float: right;
      margin: .5em .5em 0 0;
    }

    #footer .sponsor a {
      text-decoration: none;
    }

    #footer .sponsor div {
      float: right;
      font-size: 0.9em;
      margin-top: 0.7em;
    }

      #footer .sponsor span {
        font-size: 60%;
        position: relative;
        top: -.75em;
      }

#error {
  margin-top: 2em;
  text-align: center;
}

  #error h1 {
    font-size: 140%;
    margin-top: 1em;
  }

  #error ul {
    padding-left: 1em;
  }

  #error .status500,
  #error .status404 {
    width: 32em;
    margin: 0 auto;
    text-align: left;
  }

    #error .status500 p,
    #error .status404 p {
      font-weight: bold;
    }

  #error .maintenance {
    text-align: center;
  }

    #error .maintenance p {
      text-align: center;
      font-weight: bold;
    }

    </style>
 </head>
  <body>
    <div id="main">
      <div id="header" class="basic">

        <div class="site">
          <div class="logo">
            <a href="/"><img src="http://github.s3.amazonaws.com/media/logov3.png" alt="git-hub" /></a>
          </div>
        </div>
      </div>

      <div class="site">
        <div id="error" class="status404">
          <img src="http://github.s3.amazonaws.com/media/octocat_construction.gif" alt="Octocat is sad" width="243" height="219" />
          <div class="maintenance">
            <h1>Sorry, we're down for maintenance</h1>
            <p>Don't worry, we'll be back before you know it!</p>
            <p>Check <a href="http://status.github.com">status.github.com</a> for details.</p>
          </div>
        </div>
      </div>

      <div class="push"></div>
    </div>

    <div id="footer">
      <div class="site">

        <div class="info">
          &copy;
          2010
          GitHub Inc.
          All rights reserved.
       </div>
     </div>
    </div>

    <script type="text/javascript">
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
    var pageTracker = _gat._getTracker("UA-3769691-2");
    pageTracker._initData();
    pageTracker._trackPageview();
    </script>

  </body>
</html>
