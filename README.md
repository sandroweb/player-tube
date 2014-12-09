<<<<<<< HEAD
# PlayerTube


### About
This jQuery plugin is helpful to add a YouTube video into your application using JavaScript.

I created this code based the [YouTube API](https://developers.google.com/youtube/iframe_api_reference?hl=pt-BR).


### Dependences

- [JQuery](https://jquery.com)


### Usage

To add a YouTube video in your application, the most params are setted in html tag. After, you'll need call your html tag using jQuery.

#### 1. Html tag
```
<div class="my-player" video-id="zdaTtlxUoOM"></div>
```

#### 2. jQuery call
```
$('.my-player').playerTube();
```


But, it's not only this!!!


### More html options

The html tag gives more options to customize.

#### video-show-mosaic
Type: `Number`	
Default: `0`	

`1` - To display the mosaic when the video is completed.	
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


### More js options


#### onReady
Type: `function`	
Default: `undefined`	

Call this method when the player is loaded.
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

Call this method when the video start play.
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

Call this method when the video is paused.
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

Call this method when the video is completed.
```
$('.my-player').playerTube({
	onFinished: function (e) {
		console.log(e.type, e);
	}
});
```


#### onUpdate
Type: `function`	
Default: `undefined`	

Call this method when the video is completed.
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

To you control the player with the YouTube Api methods and vars, you'll use this:
```
window.playersTube.getPlayerById('zdaTtlxUoOM').playVideo();
```


### Doubts
[sandro@sandrosantos.art.br](mailto:sandro@sandrosantos.art.br)
=======

>>>>>>> 405546ebb9362ed593983e81d50ca73f40c055f2
