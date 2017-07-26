var GustCalendar=function(b,d,O,g,p,w){var c,z,u,o,C,M,L,a,h,B=0,q=0,S=0,i,k,l=this;w=w?w:0;var j=function(T){var U=[];for(var V=0;V<T.length;V++){U[V]=parseInt(T[V],10)}return U};if(null!=g){g=j(g.split("-"))}if(null!=p){p=j(p.split("-"))}(function(){c=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42448,83315,21200,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46496,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19415,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448];z=[31,28,31,30,31,30,31,31,30,31,30,31];u=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];o=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"];C=[0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758];M=["日","一","二","三","四","五","六","七","八","九","十"];L=["初","十","廿","卅"];a=["0101 元旦","0214 情人节","0308 妇女节","0312 植树节","0315 消费者权益日","0401 愚人节","0501 劳动节","0504 青年节","0512 护士节","0601 儿童节","0701 建党节","0801 建军节","0910 教师节","0928 孔子诞辰","1001 国庆节","1006 老人节","1024 联合国日","1224 平安夜","1225 圣诞节"];h=["0101 春节","0115 元宵节","0505 端午节","0707 七夕节","0715 中元节","0815 中秋节","0909 重阳节","1208 腊八节","1224 小年"]})();var e=function(V){var T,U=348;for(T=32768;T>8;T>>=1){U+=(c[V-1900]&T)?1:0}return(U+f(V))};var f=function(T){if(H(T)){return((c[T-1900]&65536)?30:29)}else{return(0)}};var H=function(T){return(c[T-1900]&15)};var J=function(U,T){return((c[U-1900]&(65536>>T))?30:29)};var K=function(U,T){if(T==1){return(((U%4==0)&&(U%100!=0)||(U%400==0))?29:28)}else{return(z[T])}};var R=function(V,U){var T=new Date((31556925974.7*(V-1900)+C[U]*60000)+Date.UTC(1900,0,6,2,5));return(T.getUTCDate())};var r=9,y=9,G=0;var N=function(U){var T;switch(U){case 10:T="初十";break;case 20:T="二十";break;break;case 30:T="三十";break;break;default:T=L[Math.floor(U/10)];T+=M[U%10]}return(T)};var n;var F=function(U){var T=["一","二","三","四","五","六","七","八","九","十","十一","十二"];return T[U-1]};var s=function(aa,ae){q=aa;B=ae;b.find(".console .year .label").text(d?(d.replace("yyyy",aa)):(aa+"年"));b.find(".console .month .label").text(O?(O.replace("@M",F(ae+1)).replace("MM",ae+1)):((ae+1)+"月"));var ai,af,ab;n=I(aa,ae);var ac=u[(aa-4)%12];var T=false,ag=false,Z=false,ao=false;if(null!=g){var al=g[0],V=g[1];T=(aa<al)||(aa==al&&ae+1<V);ag=(aa==al)&&(ae+1==V)}if(null!=p){var ak=p[0],U=p[1];Z=(aa>ak)||(aa==ak&&ae+1>U);ao=(aa==ak)&&(ae+1==U)}for(ai=0;ai<42;ai++){var W=i.find("#GD"+ai);var an=i.find("#SD"+ai)[0];var am=i.find("#LD"+ai)[0];var ah=n.firstWeek-w;if(ah<0){ah=5-ah}af=ai-ah;if(af>-1&&af<n.length){if((T||(ag&&(af+1)<g[2]))||(Z||(ao&&(af+1)>p[2]))){W.addClass("disable")}else{W.removeClass("disable")}an.innerHTML=af+1;W.attr("data-value",af+1);if(n[af].isToday){W.addClass("today")}else{W.removeClass("today")}if(n[af].lDay==1){am.innerHTML="<b>"+(n[af].isLeap?"闰":"")+n[af].lMonth+"月"+(J(n[af].lYear,n[af].lMonth)==29?"小":"大")+"</b>"}else{am.innerHTML=N(n[af].lDay)}var Y=null,X=null;ab=n[af].solarFestival;for(var aj=0;aj<h.length;aj++){if(parseInt(h[aj].substr(0,2))==(n[af].lMonth)){if(parseInt(h[aj].substr(2,4))==(n[af].lDay)){am.innerHTML=h[aj].substr(5);Y=h[aj].substr(5)}}if(12==(n[af].lMonth)){if(G==(n[af].lDay)){am.innerHTML="除夕";Y="除夕"}}}for(var aj=0;aj<a.length;aj++){if(parseInt(a[aj].substr(0,2))==(ae+1)){if(parseInt(a[aj].substr(2,4))==(af+1)){am.innerHTML=a[aj].substr(5);X=a[aj].substr(5)}}}if((ae+1)==5){if(r==0){if((af+1)==7){X="母亲节";am.innerHTML="母亲节"}}else{if(r<9){if((af+1)==((7-r)+8)){X="母亲节";am.innerHTML="母亲节"}}}}if((ae+1)==6){if(y==0){if((af+1)==14){X="父亲节";am.innerHTML="父亲节"}}else{if(y<9){if((af+1)==((7-y)+15)){X="父亲节";am.innerHTML="父亲节"}}}}if(ab.length<=0){ab=n[af].solarTerms;if(ab.length>0){ab=ab.fontcolor("limegreen")}}if(ab.length>0){am.innerHTML=ab;Y=ab}if((Y!=null)&&(X!=null)){am.innerHTML=Y+"/"+X}}else{W.addClass("disable");W.attr("data-value","");if(af<0){var ad=new Date(ae>0?aa:aa-1,ae>0?ae:12,0).getDate();an.innerHTML=ad+af+1;am.innerHTML=""}else{an.innerHTML=af-n.length+1;am.innerHTML=""}}}b.find(".date-grid.active").removeClass("active");if(null!=S){if(q==S.year&&B==S.month){b.find('.date-grid[data-value="'+S.date+'"]').addClass("active")}}l.onChange(q,B+1)};var m=new Date().getFullYear(),t=new Date().getMonth(),x=new Date().getDate();var v=function(ad){var X,T=0,af=0;var U=new Date(1900,0,31);var W=(ad-U)/86400000;var Y=W+40;var ae=14;for(X=1900;X<2050&&W>0;X++){af=e(X);W-=af;ae+=12}if(W<0){W+=af;X--;ae-=12}var aa=X;var V=X-1864;T=H(X);var ac=false;for(X=1;X<13&&W>0;X++){if(T>0&&X==(T+1)&&ac==false){--X;ac=true;af=f(aa)}else{af=J(aa,X)}if(ac==true&&X==(T+1)){ac=false}W-=af;if(ac==false){ae++}}if(W==0&&T>0&&X==T+1){if(ac){ac=false}else{ac=true;--X;--ae}}if(W<0){W+=af;--X;--ae}var Z=X;var ab=W+1;return{dayCyl:Y,monCyl:ae,year:aa,yearCyl:V,isLeap:ac,month:Z,day:ab}};var A=function(aa,T,Y,X,U,Z,W,V){return{isToday:false,sYear:aa,sMonth:T,sDay:Y,week:X,lYear:U,lMonth:Z,lDay:W,isLeap:V,lunarFestival:"",solarFestival:"",solarTerms:""}};var I=function(ah,Y){r=y=0;var ai,ab,af,U,ae=1,V,ag=0,aa,Z;var W=new Array(3);var X=0;var T=0;ai=new Date(ah,Y,1);var ad={};ad.length=K(ah,Y);ad.firstWeek=ai.getDay();if((Y+1)==5){r=ai.getDay()}if((Y+1)==6){y=ai.getDay()}for(var ac=0;ac<ad.length;ac++){if(ae>ag){ai=new Date(ah,Y,ac+1);ab=v(ai);af=ab.year;U=ab.month;ae=ab.day;V=ab.isLeap;ag=V?f(af):J(af,U);if(U==12){G=ag}if(X==0){T=U}W[X++]=ac-ae+1}ad[ac]=A(ah,Y+1,ac+1,M[(ac+ad.firstWeek)%7],af,U,ae++,V);if((ac+ad.firstWeek)%7==0){ad[ac].color="red"}}aa=R(ah,Y*2)-1;Z=R(ah,Y*2+1)-1;ad[aa].solarTerms=o[Y*2];ad[Z].solarTerms=o[Y*2+1];if((ad.firstWeek+12)%7==5){ad[12].solarFestival+="黑色星期五"}if(ah==m&&Y==t){ad[x-1].isToday=true}return ad};var E=function(){for(var X=0;X<6;X++){var W=document.createElement("div");if(X==5){W.className="date-grid-row last"}else{W.className="date-grid-row"}for(var V=0;V<7;V++){var U=X*7+V;var T=document.createElement("div");T.id="GD"+U;if(V==6){T.className="date-grid last"}else{T.className="date-grid"}var Z=document.createElement("span");Z.id="SD"+U;Z.className="sd";var Y=document.createElement("span");Y.id="LD"+U;Y.className="ld";T.appendChild(Z);T.appendChild(Y);W.appendChild(T)}i[0].appendChild(W)}};this.enableView=function(){var aa='<div class="console"><div class="year"><div class="prev-btn">&lt;</div><div class="next-btn">&gt;</div><div class="label"></div></div><div class="month"><div class="prev-btn">&lt;</div><div class="next-btn">&gt;</div><div class="label"></div></div></div>';var Y=["日","一","二","三","四","五","六"];var U="";for(var W=0;W<Y.length;W++){var T=W+w;var Z=Y[T];if(T>=Y.length){Z=Y[T-7]}U+='<div class="label">'+Z+"</div>"}var V='<div class="week">'+U+"</div>";var X='<div class="grids"></div>';b.append(aa+V+X);i=b.find(".grids");E();s(m,t);b.find(".console .year .prev-btn").click(function(){l.prevYear()});b.find(".console .year .next-btn").click(function(){l.nextYear()});b.find(".console .month .prev-btn").click(function(){l.prevMonth()});b.find(".console .month .next-btn").click(function(){l.nextMonth()})};var Q,P;this.enableFormControl=function(U){k=b;b=null;var T=false;Q=function(){if(!T){T=true;var V=k.offset().left;var aa=k.offset().top+k.outerHeight();var Z=$("body").width()-$("body").offset().left;var Y=$("body").height()-$("body").offset().top;if(V+308>Z){V=Z-313}if(aa+339>Y){aa=Y-344}var W="left: "+V+"px; top: "+aa+"px;";b=$('<div id="__gust_calender_container" class="'+(U?U:"")+'" style="'+W+'"></div>').appendTo("body");l.enableView();if(""!=k.val()){var X=k.val().split("-");if(X.length>=3){D(parseInt(X[0]),parseInt(X[1]),parseInt(X[2]))}}P=function(ab){if($(ab.target).closest(b).length==0){T=false;b.empty();b.remove();document.body.removeEventListener("click",P,true)}};document.body.addEventListener("click",P,true);b.find(".grids .date-grid").click(function(){if(!$(this).hasClass("disable")){b.find(".grids .date-grid.active").removeClass("active");$(this).addClass("active");T=false;b.empty();b.remove();document.body.removeEventListener("click",P,true);var ab=B+1;var ac=$(this).find(".sd").html();k.val(q+"-"+(ab<10?"0"+ab:ab)+"-"+(ac<10?"0"+ac:ac));if(typeof l.onChoose=="function"){l.onChoose(q,ab,ac)}}})}};k[0].addEventListener("click",Q,true)};this.destroy=function(){if(null!=b){b.empty()}if(null!=k){k[0].removeEventListener("click",Q,true);if(null!=b){b.remove()}}if(null!=P){document.body.removeEventListener("click",P,true)}k=null;Q=null;P=null;b=null};this.prevYear=function(){if(q==1900){s(2050,B)}else{s(q-1,B)}};this.nextYear=function(){if(q==2050){s(1900,B)}else{s(q+1,B)}};this.prevMonth=function(){if(B==0){s(q-1,11)}else{s(q,B-1)}};this.nextMonth=function(){if(B==11){s(q+1,0)}else{s(q,B+1)}};var D=function(U,V,T){if(null!=T){S={year:U,month:V-1,date:T}}if($("#__gust_calender_container").length>0){s(U,V-1)}};this.gotoDate=function(U,V,T){D(U,V,T);if(typeof this.onChoose=="function"){this.onChoose(U,V,T)}};this.getYear=function(){return q};this.getMonth=function(){return B};this.onChange=function(T,U){};this.onChoose=function(U,V,T){}};