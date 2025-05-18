import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CV435JUL.js";
import {
  CommonModule,
  NgClass,
  __async,
  input,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-TTKC63AX.js";

// libs/ui/src/lib/components/video-player/video-player.component.ts
var _c0 = ["videoPlayer"];
var _c1 = (a0, a1, a2) => ({ "remove-width": a0, "exercise-img-player": a1, "modal-img": a2 });
function VideoPlayerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("remove-width", ctx_r1.isDash());
    \u0275\u0275property("src", ctx_r1.thumbnail, \u0275\u0275sanitizeUrl);
  }
}
function VideoPlayerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "source", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.videoSrc, \u0275\u0275sanitizeUrl);
  }
}
function VideoPlayerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-progress-bar", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("progress-dash", ctx_r1.isDash());
    \u0275\u0275advance();
    \u0275\u0275classProp("play-progress", ctx_r1.isPlaying());
    \u0275\u0275property("value", ctx_r1.progressValue());
  }
}
var VideoPlayerComponent = class _VideoPlayerComponent {
  constructor() {
    this.isModal = input(true);
    this.isDash = input(false);
    this.isPlaying = signal(false);
    this.progressValue = signal(0);
    this.mouseOver = signal(false);
  }
  ngAfterViewInit() {
    this.video = this.videoPlayer.nativeElement;
  }
  logVideoTime() {
    if (!this.isPlaying()) {
      return;
    }
    const currentTime = this.videoPlayer.nativeElement.currentTime;
    const duration = this.videoPlayer.nativeElement.duration;
    const percent = currentTime / duration * 100;
    this.progressValue.update(() => +percent.toFixed(1));
  }
  getIsModalIsPlayingStatus() {
    return !this.isModal() && !this.isPlaying();
  }
  onMouseEnter() {
    if (this.isModal())
      return;
    this.mouseOver.set(true);
    const interval = setInterval(() => {
      this.progressValue.update((value) => value + 50);
      if (this.progressValue() >= 100) {
        this.progressValue.set(100);
        clearInterval(interval);
      }
    }, 100);
    this.progressInterval = interval;
    this.hoverTimeout = setTimeout(() => {
      this.playVideo();
    }, 500);
  }
  onMouseLeave() {
    if (this.isModal()) {
      return;
    }
    this.progressValue.set(0);
    this.pauseVideo();
    clearTimeout(this.hoverTimeout);
    clearInterval(this.progressInterval);
  }
  // Play video on mouse enter
  playVideo() {
    return __async(this, null, function* () {
      if (!this.isModal() && !this.isPlaying()) {
        try {
          this.video.load();
          yield new Promise((resolve) => {
            this.video.addEventListener("canplay", () => resolve(), {
              once: true
            });
          });
          this.isPlaying.set(true);
          yield this.video.play();
          this.video.loop = true;
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      }
    });
  }
  // Pause video on mouse leave
  pauseVideo() {
    this.isPlaying.set(false);
    this.video.loop = false;
    this.video.pause();
  }
  togglePlay() {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  static {
    this.\u0275fac = function VideoPlayerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideoPlayerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoPlayerComponent, selectors: [["ui-video-player"]], viewQuery: function VideoPlayerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoPlayer = _t.first);
      }
    }, inputs: { videoSrc: "videoSrc", thumbnail: "thumbnail", isModal: [1, "isModal"], isDash: [1, "isDash"] }, decls: 8, vars: 17, consts: [["videoPlayer", ""], ["alt", "Video Thumbnail", 1, "exercise-img-player", 3, "src", "remove-width"], ["muted", "", "disablepictureinpicture", "", "controlslist", "nodownload nofullscreen noplaybackrate", "playsinline", "", 3, "timeupdate", "click", "controls", "preload", "poster", "ngClass"], ["type", "video/mp4", 3, "src"], [1, "progress-bar-wrapper", 3, "progress-dash"], ["alt", "Video Thumbnail", 1, "exercise-img-player", 3, "src"], [1, "progress-bar-wrapper"], ["mode", "determinate", 1, "progress-bar", 3, "value"]], template: function VideoPlayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275template(1, VideoPlayerComponent_Conditional_1_Template, 1, 3, "img", 1);
        \u0275\u0275elementStart(2, "video", 2, 0);
        \u0275\u0275listener("timeupdate", function VideoPlayerComponent_Template_video_timeupdate_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logVideoTime());
        })("click", function VideoPlayerComponent_Template_video_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.isModal() ? ctx.togglePlay() : "");
        });
        \u0275\u0275template(4, VideoPlayerComponent_Conditional_4_Template, 1, 1, "source", 3);
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Your browser does not support the video tag.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, VideoPlayerComponent_Conditional_7_Template, 2, 5, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("img-wrapper-player", !ctx.isModal())("reset-width-padding", ctx.isDash());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.getIsModalIsPlayingStatus() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("video-hidden", ctx.getIsModalIsPlayingStatus());
        \u0275\u0275property("controls", ctx.isModal())("preload", ctx.isModal() ? "auto" : "none")("poster", ctx.isModal() ? "" : ctx.thumbnail, \u0275\u0275sanitizeUrl)("ngClass", \u0275\u0275pureFunction3(13, _c1, ctx.isDash(), !ctx.isModal(), ctx.isModal()));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.videoSrc ? 4 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.mouseOver() ? 7 : -1);
      }
    }, dependencies: [CommonModule, NgClass, MatProgressBarModule, MatProgressBar], styles: [".img-wrapper-player[_ngcontent-%COMP%]{height:100%;width:100%;padding:8px}.exercise-img-player[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;z-index:1111}.reset-width-padding[_ngcontent-%COMP%]{width:100%;border-radius:8px;background:#fff;padding:4px;overflow:hidden}.remove-width[_ngcontent-%COMP%]{width:auto}.video-hidden[_ngcontent-%COMP%]{display:none}.progress-bar-wrapper[_ngcontent-%COMP%]{margin-right:-8px;margin-left:-8px}.progress-bar-wrapper.progress-dash[_ngcontent-%COMP%]{margin-right:-4px;margin-left:-4px;margin-top:-4px}.progress-bar-wrapper[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-track-color: rgba(255, 0, 0, 0)}.progress-bar-wrapper[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #ba1a1a}.progress-bar-wrapper[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-height: 2px}.progress-bar-wrapper[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{--mdc-linear-progress-track-height: 2px}.progress-bar-wrapper[_ngcontent-%COMP%]   .play-progress[_ngcontent-%COMP%]{--mdc-linear-progress-active-indicator-color: #415f91}video[_ngcontent-%COMP%]{--controls-opacity: 0}video[_ngcontent-%COMP%]:hover{--controls-opacity: 1}video[_ngcontent-%COMP%]::-moz-media-controls-panel{opacity:var(--controls-opacity);transition:opacity .3s ease}video[_ngcontent-%COMP%]::-webkit-media-controls-panel{opacity:var(--controls-opacity);transition:opacity .3s ease}video[_ngcontent-%COMP%]::-ms-controls{opacity:var(--controls-opacity);transition:opacity .3s ease}\n/*# sourceMappingURL=video-player.component-DHB4HOFC.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoPlayerComponent, { className: "VideoPlayerComponent", filePath: "libs/ui/src/lib/components/video-player/video-player.component.ts", lineNumber: 23 });
})();

export {
  VideoPlayerComponent
};
/**i18n:e33dda9241aa0d3f81605574177eca303a560132442e585b3107f4f1b4a47a86*/
//# sourceMappingURL=chunk-6KEP5RK3.js.map
