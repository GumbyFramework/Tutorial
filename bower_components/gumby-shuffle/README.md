Gumby Shuffle
=============

This module shuffles the order of a rows child columns according to specified media queries and associated sequences. For more detailed documentation please check out the [Gumby docs](http://gumbyframework.com).

Installation
------------

A bower package is available to install this module into your project. We recommend using this method to install Gumby and any extra UI modules, however you can alternatively move the individuals files into your project.

	$ bower install gumby-shuffle

Include gumby.shuffle.js in the same fashion as your other UI modules, after gumby.js and before gumby.init.js. In production you should minify JavaScript files into a single optimized gumby.min.js file, ensuring the order (gumby.js, UI modules, gumby.init.js) is retained. 

	<!--
	Include gumby.js followed by UI modules.
	Or concatenate and minify into a single file-->
	<script src="/bower_components/gumby/js/libs/gumby.js"></script>
	<script src="/bower_components/gumby/js/libs/ui/gumby.skiplink.js"></script>
	<script src="/bower_components/gumby/js/libs/ui/gumby.toggleswitch.js"></script>
	<script src="/bower_components/gumby-shuffle/gumby.shuffle.js"></script>
	<script src="/bower_components/gumby/js/libs/gumby.init.js"></script>
	
	<!-- In production minifiy and combine the above files into gumby.min.js -->
	<script src="js/gumby.min.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/main.js"></script>

Usage
-----

Using the shuffle module is simple. Add a `gumby-shuffle` attribute to any row containing any number of comma separated media query / sequence pairs. Media queries and their associated sequences should be separated with a pipe with sequences specified as a dash separated string of child indexes. The child columns will be reordered according to the sequence if the media query returns true.

	<!-- between 768px and 400px the child columns will be re-ordered to 1-0-2 -->
	<!-- <= 400px the child columns will be re-ordered to 2-1-0 -->
	<!-- otherwise default order will be restored -->
	<div class="row" 
		 gumby-shuffle="only screen and (max-width: 768px) and (min-width: 400px)|1-0-2,only screen and (max-width: 400px)|2-1-0">
		
		<div class="four columns">…</div>
		<div class="four columns">…</div>
		<div class="four columns">…</div>
	</div>
	
*The media queries are passed directly to [JavaScript's matchMedia function](https://developer.mozilla.org/en-US/docs/Web/API/window.matchMedia) which is not supported in <= IE9, but fear not, you can include [Paul Irish's polyfil](https://github.com/paulirish/matchMedia.js/) and all will be well*


**MIT Open Source License**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	
	
