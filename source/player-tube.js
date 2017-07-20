/*global jQuery, window, YT*/
/*jslint this*/
(function ($, win, doc) {

    'use strict';

    /* To debug the video in console:
     * https://developers.google.com/youtube/iframe_api_reference
     * window.playersTube.getPlayerById('youtubeVideoId').getVolume();
     */

    $.fn.playerTube = function (options) {
        options = options || {};
        win.playersTube = win.playersTube || {};
        win.playersTube.videos = win.playersTube.videos || [];

        var content = $(this),
            videoId = content.attr('video-id'),
            videoName = 'video' + videoId.toLowerCase(),
            videoWidth = content.attr('video-width') || '100%',
            videoHeight = content.attr('video-height') || '100%',
            showMosaic = content.attr('video-show-mosaic'),
            showControls = content.attr('video-show-controls'),
            showInfo = content.attr('video-show-info'),
            autoPlay = content.attr('video-auto-play'),
            mutted = content.attr('video-mute'),
            loop = content.attr('video-loop'),
            list = content.attr('video-list'),
            interval = null,
            playerIndex = win.playersTube.length,
            callbackStateChange = 'onYouTubePlayer' + playerIndex + 'StateChange';

        function getEventObject(type, object) {
            object = object || {};
            object.type = type;
            object.player = content.player;
            object.videoId = videoId;
            object.listId = list;
            return object;
        }

        function onYouTubeIframeAPIReady() {
            win.youtubePlayerLoaded = true;
            win.playersTube.videos[videoName].buildYoutube();
        }

        function getPlayerById(id) {
            return win.playersTube.videos['video' + id.toLowerCase()].content.player;
        }

        win.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

        win.playersTube.getPlayerById = getPlayerById;

        win[callbackStateChange] = function (s) {
            win.playersTube.videos[videoName].onStateChange(s);
        };

        showMosaic = showMosaic || 0;
        showControls = showControls || 0;
        showInfo = showInfo || 0;
        autoPlay = autoPlay || 0;
        mutted = mutted || 0;
        loop = loop || 0;
        list = list || undefined;

        function stopUpdateCallback() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }

        function onUpdate() {
            if (doc.getElementById(videoName) === null) {
                stopUpdateCallback();
            }

            if (content.player && content.player.getDuration) {
                var currentTime = content.player.getCurrentTime(),
                    totalTime = content.player.getDuration(),
                    percentViewed = currentTime / totalTime * 100;

                if (options.onUpdate !== undefined) {
                    options.onUpdate(getEventObject('onupdate', {
                        type: 'onupdate',
                        player: content.player,
                        currentTime: currentTime,
                        totalTime: totalTime,
                        percentViewed: percentViewed
                    }));
                }
            }
        }

        function startUpdateCallback() {
            if (interval === null) {
                interval = setInterval(onUpdate, 50);
                onUpdate();
            }
        }

        function onStateChange(s) {
            switch (s) {
            case -1:
                stopUpdateCallback();
                break;
            case 0:
                stopUpdateCallback();
                if (options.onFinished !== undefined) {
                    options.onFinished(getEventObject('onfinished'));
                }
                if (parseInt(loop, 10) === 1) {
                    content.player.playVideo();
                }
                break;
            case 1:
                if (options.onPlay !== undefined) {
                    options.onPlay(getEventObject('onplay'));
                }
                startUpdateCallback();
                break;
            case 2:
                stopUpdateCallback();
                if (options.onPaused !== undefined) {
                    options.onPaused(getEventObject('onpaused'));
                }
                break;
            case 3:
                startUpdateCallback();
                if (options.onBuffering !== undefined) {
                    options.onBuffering(getEventObject('onbuffering'));
                }
                break;
            }
        }

        function buildYoutube() {
            content.player = new YT.Player(videoName, {
                height: videoHeight,
                width: videoWidth,
                videoId: videoId,
                origin: win.location.protocol + '//' + win.location.host,
                playerVars: {
                    controls: showControls,
                    showinfo: showInfo,
                    playsinline: 0,
                    autoplay: autoPlay,
                    list: list,
                    rel: showMosaic
                },
                events: {
                    onReady: function (event) {
                        if (options.onReady !== undefined) {
                            options.onReady(getEventObject('onready'));
                        }
                        if (parseInt(mutted, 10) === 1) {
                            content.player.mute();
                        }
                        return event;
                    },
                    onStateChange: function (event) {
                        onStateChange(event.data);
                        return event;
                    },
                    onError: function (e) {
                        if (options.onError !== undefined) {
                            options.onError(getEventObject('onerror', e));
                        }
                    }
                }
            });
        }

        function loadPlayer() {
            var tag = doc.createElement('script'),
                firstScriptTag = doc.getElementsByTagName('script')[0];

            tag.src = win.location.protocol + "//www.youtube.com/iframe_api";
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        function init() {
            content.html($('<div />').attr('id', videoName));

            if (win.youtubePlayerLoaded === true) {
                buildYoutube();
            } else {
                loadPlayer();
            }
        }

        init();

        win.playersTube.videos[videoName] = {
            content: content,
            buildYoutube: buildYoutube,
            onStateChange: onStateChange
        };
    };

}(jQuery, window, document));