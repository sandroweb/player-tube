# PlayerTube


### About
This jQuery plugin is helpful to add a YouTube video into your application using JavaScript.

I created this code based on the [YouTube API](https://developers.google.com/youtube/iframe_api_reference?hl=pt-BR).

This plugin is also available on [Bower](http://bower.io/).
```
bower install player-tube
```


### Dependences

- [JQuery](https://jquery.com)


### Usage

To add a YouTube video in your application, first you have to create the HTML tag that will be the video container. In this tag you can set the video-id attribute (required), as other optionals. After, you'll need call your HTML tag using jQuery.

#### 1. Html tag
```
<div class="my-player" video-id="zdaTtlxUoOM"></div>
```

#### 2. jQuery call
```
$('.my-player').playerTube();
```


But, it's not only this!!!


### More HTML options

The HTML tag gives more options to customize.

#### video-show-mosaic
Type: `Number`	
Default: `0`	

`1` - To display the mosaic when the video ended.	
`<div class="my-player" video-id="zdaTtlxUoOM" video-show-mosaic="1"></div>`


#### video-show-controls
Type: `Number`	
Default: `0`	

`1` - To display the player controls.	
`<div class="my-player" video-id="zdaTtlxUoOM" video-show-controls="1"></div>`


#### video-show-info
Type: `Number`	
Default: `0`	

`1` - To display on top the infos about the video.	
`<div class="my-player" video-id="zdaTtlxUoOM" video-show-info="1"></div>`


#### video-auto-play
Type: `Number`	
Default: `0`	

`1` - Auto play the video when called the jQuery plugin.	
`<div class="my-player" video-id="zdaTtlxUoOM" video-auto-play="1"></div>`


#### video-mute
Type: `Number`	
Default: `0`	

`1` - To define video volume to zero.	
`<div class="my-player" video-id="zdaTtlxUoOM" video-mute="1"></div>`


#### video-loop
Type: `Number`	
Default: `0`	

`1` - Auto play the video when is completed.	
`<div class="my-player" video-id="zdaTtlxUoOM" video-loop="1"></div>`


#### video-list
Type: `String`	
Default: `undefined`

String of youtube list id.	
`<div class="my-player" video-id="zdaTtlxUoOM" video-list="UUifNHhodYK0S7A_QoxmsoCA"></div>`


### Events


#### onReady
Type: `function`	
Default: `undefined`	

This event is dispatched when the player is loaded.
```
$('.my-player').playerTube({
	onReady: function (e) {
		console.log(e.type, e);
	}
});
```


#### onPlay
Type: `function`	
Default: `undefined`	

This event is dispatched when the video start to play.
```
$('.my-player').playerTube({
	onPlay: function (e) {
		console.log(e.type, e);
	}
});
```


#### onPaused
Type: `function`	
Default: `undefined`	

This event is dispatched when the video is paused.
```
$('.my-player').playerTube({
	onPaused: function (e) {
		console.log(e.type, e);
	}
});
```


#### onFinished
Type: `function`	
Default: `undefined`	

This event is dispatched when the video is completed.
```
$('.my-player').playerTube({
	onFinished: function (e) {
		console.log(e.type, e);
	}
});
```


#### onBuffering
Type: `function`	
Default: `undefined`	

This event is dispatched when the video is loading.
```
$('.my-player').playerTube({
	onBuffering: function (e) {
		console.log(e.type, e);
	}
});
```


#### onUpdate
Type: `function`	
Default: `undefined`	

This event is dispatched when the video is playing. Providing some useful information about the video state.
```
$('.my-player').playerTube({
	onUpdate: function (e) {
		console.log(e.type);
		console.log('currentTime', e.currentTime);
		console.log('totalTime', e.totalTime);
		console.log('percentViewed', e.percentViewed);
	}
});
```


### To debug on console

To you control the player with the YouTube Api methods and vars, you can use this:
```
window.playersTube.getPlayerById('zdaTtlxUoOM').playVideo();
```


### Doubts
[sandro@sandrosantos.art.br](mailto:sandro@sandrosantos.art.br)


### You thinked that useful? Want help me?
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!">
<img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
</form>
