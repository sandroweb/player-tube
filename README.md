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