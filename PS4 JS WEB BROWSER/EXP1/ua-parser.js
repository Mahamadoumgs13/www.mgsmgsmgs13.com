/*!
 * UAParser.js v0.7.22
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(i,s){"use strict"
var e="model",o="name",r="type",a="vendor",n="version",d="mobile",t="tablet",l="smarttv",w={extend:function(i,s){var e={}
for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o]
return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},u={rgx:function(i,s){for(var e,o,r,a,n,d,t=0;t<s.length&&!n;){var l=s[t],w=s[t+1]
for(e=o=0;e<l.length&&!n;)if(n=l[e++].exec(i))for(r=0;r<w.length;r++)d=n[++o],"object"==typeof(a=w[r])&&a.length>0?2==a.length?"function"==typeof a[1]?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?"function"!=typeof a[1]||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):void 0:this[a[0]]=d?a[1].call(this,d,a[2]):void 0:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):void 0):this[a]=d||void 0
t+=2}},str:function(i,s){for(var e in s)if("object"==typeof s[e]&&s[e].length>0){for(var o=0;o<s[e].length;o++)if(w.has(s[e][o],i))return"?"===e?void 0:e}else if(w.has(s[e],i))return"?"===e?void 0:e
return i}},c={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},b={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[o,n],[/(opios)[\/\s]+([\w\.]+)/i],[[o,"Opera Mini"],n],[/\s(opr)\/([\w\.]+)/i],[[o,"Opera"],n],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[o,n],[/(konqueror)\/([\w\.]+)/i],[[o,"Konqueror"],n],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[o,"IE"],n],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[o,"Edge"],n],[/(yabrowser)\/([\w\.]+)/i],[[o,"Yandex"],n],[/(Avast)\/([\w\.]+)/i],[[o,"Avast Secure Browser"],n],[/(AVG)\/([\w\.]+)/i],[[o,"AVG Secure Browser"],n],[/(puffin)\/([\w\.]+)/i],[[o,"Puffin"],n],[/(focus)\/([\w\.]+)/i],[[o,"Firefox Focus"],n],[/(opt)\/([\w\.]+)/i],[[o,"Opera Touch"],n],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[o,"UCBrowser"],n],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],n],[/(windowswechat qbcore)\/([\w\.]+)/i],[[o,"WeChat(Win) Desktop"],n],[/(micromessenger)\/([\w\.]+)/i],[[o,"WeChat"],n],[/(brave)\/([\w\.]+)/i],[[o,"Brave"],n],[/(qqbrowserlite)\/([\w\.]+)/i],[o,n],[/(QQ)\/([\d\.]+)/i],[o,n],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[o,n],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[o,n],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[o,n],[/(MetaSr)[\/\s]?([\w\.]+)/i],[o],[/(LBBROWSER)/i],[o],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[n,[o,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[n,[o,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[o,n],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[n,[o,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[o,/(.+)/,"$1 WebView"],n],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[o,/(.+(?:g|us))(.+)/,"$1 $2"],n],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[n,[o,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[o,"Sailfish Browser"],n],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[o,n],[/(dolfin)\/([\w\.]+)/i],[[o,"Dolphin"],n],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[o,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[o,"Chrome"],n],[/(coast)\/([\w\.]+)/i],[[o,"Opera Coast"],n],[/fxios\/([\w\.-]+)/i],[n,[o,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[n,[o,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[n,o],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[o,"GSA"],n],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[o,[n,u.str,c.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[o,n],[/(navigator|netscape)\/([\w\.-]+)/i],[[o,"Netscape"],n],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[o,n]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[e,a,[r,t]],[/applecoremedia\/[\w\.]+ \((ipad)/],[e,[a,"Apple"],[r,t]],[/(apple\s{0,1}tv)/i],[[e,"Apple TV"],[a,"Apple"],[r,l]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[a,e,[r,t]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[e,[a,"Amazon"],[r,t]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[e,u.str,c.device.amazon.model],[a,"Amazon"],[r,d]],[/android.+aft([bms])\sbuild/i],[e,[a,"Amazon"],[r,l]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[e,a,[r,d]],[/\((ip[honed|\s\w*]+);/i],[e,[a,"Apple"],[r,d]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[a,e,[r,d]],[/\(bb10;\s(\w+)/i],[e,[a,"BlackBerry"],[r,d]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[e,[a,"Asus"],[r,t]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[a,"Sony"],[e,"Xperia Tablet"],[r,t]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[a,"Sony"],[r,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[a,e,[r,"console"]],[/android.+;\s(shield)\sbuild/i],[e,[a,"Nvidia"],[r,"console"]],[/(playstation\s[34portablevi]+)/i],[e,[a,"Sony"],[r,"console"]],[/(sprint\s(\w+))/i],[[a,u.str,c.device.sprint.vendor],[e,u.str,c.device.sprint.model],[r,d]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[a,[e,/_/g," "],[r,d]],[/(nexus\s9)/i],[e,[a,"HTC"],[r,t]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i],[e,[a,"Huawei"],[r,d]],[/android.+(bah2?-a?[lw]\d{2})/i],[e,[a,"Huawei"],[r,t]],[/(microsoft);\s(lumia[\s\w]+)/i],[a,e,[r,d]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[e,[a,"Microsoft"],[r,"console"]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[a,"Microsoft"],[r,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[e,[a,"Motorola"],[r,d]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[e,[a,"Motorola"],[r,t]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[a,w.trim],[e,w.trim],[r,l]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[a,"Samsung"],[r,l]],[/\(dtv[\);].+(aquos)/i],[e,[a,"Sharp"],[r,l]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[a,"Samsung"],e,[r,t]],[/smart-tv.+(samsung)/i],[a,[r,l],e],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[a,"Samsung"],e,[r,d]],[/sie-(\w*)/i],[e,[a,"Siemens"],[r,d]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[a,"Nokia"],e,[r,d]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[e,[a,"Acer"],[r,t]],[/android.+([vl]k\-?\d{3})\s+build/i],[e,[a,"LG"],[r,t]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[a,"LG"],e,[r,t]],[/(lg) netcast\.tv/i],[a,e,[r,l]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[e,[a,"LG"],[r,d]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[a,e,[r,t]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[e,[a,"Lenovo"],[r,t]],[/(lenovo)[_\s-]?([\w-]+)/i],[a,e,[r,d]],[/linux;.+((jolla));/i],[a,e,[r,d]],[/((pebble))app\/[\d\.]+\s/i],[a,e,[r,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[a,e,[r,d]],[/crkey/i],[[e,"Chromecast"],[a,"Google"],[r,l]],[/android.+;\s(glass)\s\d/i],[e,[a,"Google"],[r,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[e,[a,"Google"],[r,t]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[e,[a,"Google"],[r,d]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]?[\w\s]+))\s+build/i],[[e,/_/g," "],[a,"Xiaomi"],[r,d]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]?[\w\s]+))\s+build/i],[[e,/_/g," "],[a,"Xiaomi"],[r,t]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[e,[a,"Meizu"],[r,d]],[/(mz)-([\w-]{2,})/i],[[a,"Meizu"],e,[r,d]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[e,[a,"OnePlus"],[r,d]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[e,[a,"RCA"],[r,t]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[e,[a,"Dell"],[r,t]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[e,[a,"Verizon"],[r,t]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[a,"Barnes & Noble"],e,[r,t]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[e,[a,"NuVision"],[r,t]],[/android.+;\s(k88)\sbuild/i],[e,[a,"ZTE"],[r,t]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[e,[a,"Swiss"],[r,d]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[e,[a,"Swiss"],[r,t]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[e,[a,"Zeki"],[r,t]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[a,"Dragon Touch"],e,[r,t]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[e,[a,"Insignia"],[r,t]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[e,[a,"NextBook"],[r,t]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[a,"Voice"],e,[r,d]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[a,"LvTel"],e,[r,d]],[/android.+;\s(PH-1)\s/i],[e,[a,"Essential"],[r,d]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[e,[a,"Envizen"],[r,t]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[a,e,[r,t]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[e,[a,"MachSpeed"],[r,t]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[a,e,[r,t]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[e,[a,"Rotor"],[r,t]],[/android.+(KS(.+))\s+build/i],[e,[a,"Amazon"],[r,t]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[a,e,[r,t]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[r,w.lowerize],a,e],[/[\s\/\(](smart-?tv)[;\)]/i],[[r,l]],[/(android[\w\.\s\-]{0,9});.+build/i],[e,[a,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[n,[o,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[n,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[o,n],[/rv\:([\w\.]{1,9}).+(gecko)/i],[n,o]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[o,n],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[o,[n,u.str,c.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[o,"Windows"],[n,u.str,c.os.windows.version]],[/\((bb)(10);/i],[[o,"BlackBerry"],n],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[o,n],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[o,"Symbian"],n],[/\((series40);/i],[o],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[o,"Firefox OS"],n],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[o,n],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[o,"Chromium OS"],n],[/(sunos)\s?([\w\.\d]*)/i],[[o,"Solaris"],n],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[o,n],[/(haiku)\s(\w+)/i],[o,n],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[n,/_/g,"."],[o,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[o,"Mac OS"],[n,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[o,n]]},m=function(s,e){if("object"==typeof s&&(e=s,s=void 0),!(this instanceof m))return new m(s,e).getResult()
var o=s||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),r=e?w.extend(b,e):b
return this.getBrowser=function(){var i={name:void 0,version:void 0}
return u.rgx.call(i,o,r.browser),i.major=w.major(i.version),i},this.getCPU=function(){var i={architecture:void 0}
return u.rgx.call(i,o,r.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0}
return u.rgx.call(i,o,r.device),i},this.getEngine=function(){var i={name:void 0,version:void 0}
return u.rgx.call(i,o,r.engine),i},this.getOS=function(){var i={name:void 0,version:void 0}
return u.rgx.call(i,o,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=i,this},this}
m.VERSION="0.7.22",m.BROWSER={NAME:o,MAJOR:"major",VERSION:n},m.CPU={ARCHITECTURE:"architecture"},m.DEVICE={MODEL:e,VENDOR:a,TYPE:r,CONSOLE:"console",MOBILE:d,SMARTTV:l,TABLET:t,WEARABLE:"wearable",EMBEDDED:"embedded"},m.ENGINE={NAME:o,VERSION:n},m.OS={NAME:o,VERSION:n},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports.UAParser=m):"function"==typeof define&&define.amd?define((function(){return m})):i&&(i.UAParser=m)
var p=i&&(i.jQuery||i.Zepto)
if(p&&!p.ua){var h=new m
p.ua=h.getResult(),p.ua.get=function(){return h.getUA()},p.ua.set=function(i){h.setUA(i)
var s=h.getResult()
for(var e in s)p.ua[e]=s[e]}}})("object"==typeof window?window:this)
