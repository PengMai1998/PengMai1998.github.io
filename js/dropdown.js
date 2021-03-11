// JavaScript Document
/*function dropMenudown(){
	document.getElementById("drop1").style.display="none"
	if(document.getElementById("drop1").style.display=="none"){
	document.getElementById("drop1").style.display="block";
	}
}

function dropMenuup(){
	if(document.getElementById("drop1").style.display=="block"){
	document.getElementById("drop1").style.display="none";
	}
}*/

var annualwork = new Array();
/*annualwork[0] = "";
annualwork[1] = "";
annualwork[2] = "";
annualwork[3] = "";*/

var teachers = new Array();
teachers[0] = "李长河";
teachers[1] = "曾三友";
teachers[2] = "杨圣祥";
teachers[3] = "刘小波";
teachers[4] = "朱媛";

var college = new Array();
college[0] = "专业学习要求";
college[1] = "科研实践活动";
college[2] = "毕业设计";

var master = new Array();
master[0] = "研究方向文献综述";
master[1] = "开题报告";
master[2] = "学术活动";

var doctor = new Array();
doctor[0] = "研究方向文献综述";
doctor[1] = "开题报告";
doctor[2] = "资格考核与中期考核";
doctor[3] = "学术活动";

var theoreticalstudy = new Array();
theoreticalstudy[0] = "全局优化";
theoreticalstudy[1] = "约束优化";
theoreticalstudy[2] = "昂贵优化";
theoreticalstudy[3] = "鲁棒优化";
theoreticalstudy[4] = "动态单目标优化";
theoreticalstudy[5] = "动态多目标优化";
theoreticalstudy[6] = "动态约束优化";

var applicationstudy = new Array();
applicationstudy[0] = "管网水资源调度与质量检测";
applicationstudy[1] = "动态车辆路径规划";
applicationstudy[2] = "天线设计";
applicationstudy[3] = "智能游戏";
applicationstudy[4] = "智能矿山";

var subjectname = new Array();
subjectname[0] = "在研项目";
subjectname[1] = "结题项目";

var readpaper = new Array();
readpaper[0] = "阅读前的准备";
readpaper[1] = "阅读Abstract";
readpaper[2] = "阅读Introduction";
readpaper[3] = "阅读Conclusion";
readpaper[4] = "几点启示";

var wxzs = new Array();
wxzs[0] = "撰写建议";
wxzs[1] = "字体格式要求";
wxzs[2] = "格式与模板";

var xslw = new Array();
xslw[0] = "论文的准备";
xslw[1] = "结构安排的原则";
xslw[2] = "标题";
xslw[3] = "摘要和关键字";
xslw[4] = "引言";
xslw[5] = "正文";
xslw[6] = "结果分析与讨论";
xslw[7] = "参考文献";
xslw[8] = "论文署名的单位";
xslw[9] = "书写技巧和修改";

var lxsq = new Array();
lxsq[0] = "立项依据";
lxsq[1] = "研究内容";
lxsq[2] = "研究目标";
lxsq[3] = "拟解决的关键问题";
lxsq[4] = "项目的特色和创新";
lxsq[5] = "研究方案";
lxsq[6] = "技术路线";
lxsq[7] = "可行性分析";
lxsq[8] = "预期研究进展和成果";
lxsq[9] = "研究计划";
lxsq[10] = "研究基础与条件";

var gsyq = new Array();
gsyq[0] = "专有名词";
gsyq[1] = "公式";
gsyq[2] = "图片排版";
gsyq[3] = "流程图";
gsyq[4] = "伪代码";
gsyq[5] = "参考文献";

var pbyy = new Array();
pbyy[0] = "格式排版";
pbyy[1] = "排版的意义";

var zlrz = new Array();
zlrz[0] = "发明专利";
zlrz[1] = "软件著作权";

$(document).ready(function(){
//导航下拉菜单
	$(".menu").mouseover(function(){
	  var maxL = $(".menu").length;
	  var index = $(this).index();
	  $(".drop-content").eq(index).css("display","block");
	});
	
	
	$(".menu").mouseout(function(){
	  var maxL = $(".menu").length;
	  var index = $(this).index();
	  $(".drop-content").eq(index).css("display","none");
	});
	
//左侧导航下拉菜单
	$(".menuselected").find("ul").slideDown(1000);
	$(".leftpath .col-menu ul li a").click(function(){
		//清除所有待选格式
		$(".leftpath .col-menu ul li").attr('class','');
		$(".leftpath .col-menu ul li").css('background-color','FFF');
		
		//给二级菜单上字色
		$(this).parent().find("ul").find("li").find("a").attr('class','doubleweekFa');
		$(this).parent().find("ul").find("li").css('background-color','#f8f8f8');
		
		//给当前待选的一级菜单上色
		$(".weekFa").css('color','#3d8dc0');
		
		$sub = $(this).parent().find("ul");
		$currentLi = $(this).parent();
		
		//给当店待选一级菜单上背景色
		$currentLi.attr('class','menuselected');
		$currentLi.css('background-color','#f8f8f8');
		if(!$sub.is(":hidden")){
			$sub.slideUp(1000);
		}else{
			$otherSubs = $currentLi.siblings().children("ul");
			$sub.slideDown(1000);
			$otherSubs.slideUp(1000);
		}
	});
	
	$(".leftpath .col-menu ul li ul li a").click(function(){
		//一级标题上色
		$(this).parent().parent().parent().css('background-color','#f8f8f8');
		$(this).parent().parent().find("li").css('background-color','#f8f8f8')
		$(this).attr('class','doubleweekFa');
		$(this).css('color','red');
	});

//年报编辑
	$(".annualwork a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index()
		for(i=0;i<weekLength;i++){
			if(i == weekIndex){
					$(".sitemap").text("当前位置： 实验室概况 > 实验室年报 > 20" + String(20-i) + "年实验室年报");
					$(".article_content").text("20" + String(20-i) + "年实验室年报：");
					if(annualwork[i] != undefined){
						var appendIframe = '<div class="record" align="center"><iframe src=' + annualwork[i] + ' width="1000" height="500"> </iframe></div>';
					}else appendIframe='<p>暂未发布......</p>';

					$(".article_content").append(appendIframe);
			}
		}
	});
	
//教师编辑
	$(".teacherlist a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index()
		for(i=0;i<weekLength;i++){
			if(i == weekIndex){
					$(".sitemap").text("当前位置： 师资力量 > 实验室教师 > " + teachers[i]);
					appendIframe='<p>暂未发布......</p>';
					$(".article_content").append(appendIframe);
			}
		}
	});
	
//本科培养环节编辑
	$(".college a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index()
		for(i=0;i<weekLength;i++){
			if(i == weekIndex){
					$(".sitemap").text("当前位置： 培养环节 > 本科生 > " + college[i]);
					//!编辑内容
					appendIframe='<p>暂未发布......</p>';
					//!结束编辑内容
					$(".article_content").append(appendIframe);
			}
		}
	});
	
//硕士培养环节编辑
	$(".master a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index()
		for(i=0;i<weekLength;i++){
			if(i == weekIndex){
					$(".sitemap").text("当前位置： 培养环节 > 硕士生 > " + master[i]);
					//!编辑内容
					appendIframe='<p>暂未发布......</p>';
					//!结束编辑内容
					$(".article_content").append(appendIframe);
			}
		}
	});
	
//博士培养环节编辑
	$(".doctor a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index()
		for(i=0;i<weekLength;i++){
			if(i == weekIndex){
					$(".sitemap").text("当前位置： 培养环节 > 博士生 > " + doctor[i]);
					//!编辑内容
					appendIframe='<p>暂未发布......</p>';
					//!结束编辑内容
					$(".article_content").append(appendIframe);
			}
		}
	});
	
//在读博士编辑
	$(".postgraduatedoctor").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 在读博士生");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);

	});
	
//在读硕士编辑
	$(".postgraduatemaster").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 在读硕士生");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);

	});
	
//毕业博士编辑
	$(".graduateddoctor").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 毕业博士生");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//毕业硕士编辑
	$(".graduatedmaster").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 毕业硕士生");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//研究生获奖编辑
	$(".rewards").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 科研与竞技 > 研究生获奖情况");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//研究生项目申请编辑
	$(".subjects").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 科研与竞技 > 研究生项目申请");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//理论研究编辑
	$(".theortical a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 研究方向 > 理论研究 > "+theoreticalstudy[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//应用研究编辑
	$(".application a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 研究方向 > 应用研究 > "+applicationstudy[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//在研项目/结题项目编辑
	$(".scisubjects a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 科研项目 > "+subjectname[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//科研论文
	$(".paper").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 科研论文");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//发明专利
	$(".invention").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 发明专利");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//软件著作
	$(".software").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 软件著作");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//教材著作
	$(".textbook").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 教材著作");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//获奖情况
	$(".rewardsteacher").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 获奖情况");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：阅读
	$(".reading").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 阅读 > "+readpaper[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：写作-两周小结
	$(".lzxj").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 两周小结");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：写作-文献综述
	$(".wxzs a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 文献综述 > "+wxzs[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：写作-开题报告
	$(".ktbg a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 开题报告 > "+wxzs[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：写作-学术论文
	$(".xslw a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 开题报告 > "+xslw[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：写作-立项申请书
	$(".lxsq a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 立项申请书 > "+lxsq[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：写作-格式要求
	$(".gsyq a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 格式要求 > "+gsyq[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：写作-格式排版及意义
	$(".pbyy a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 格式排版及意义 > "+pbyy[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：写作-格式排版及意义
	$(".zlrz a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 论文专利与著作撰写 > "+zlrz[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

var kfpt = new Array()
kfpt[0] = "OFEC";
kfpt[1] = "天线设计";
kfpt[2] = "服务器使用";
//学习手册：工具-开发平台
	$(".kfpt a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 开发平台 > "+kfpt[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
var bcyy = new Array()
bcyy[0] = "C/C++";
bcyy[1] = "Python";
bcyy[2] = "MATLAB";
//学习手册：工具-编程语言
	$(".bcyy a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 编程语言 > "+bcyy[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
var bchj = new Array()
bchj[0] = "Visual Studio";
bchj[1] = "Qt";
bchj[2] = "Openframeworks";
bchj[3] = "PyTorch";
//学习手册：工具-编程环境
	$(".bchj a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 编程环境 > "+bchj[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
var htgj = new Array()
htgj[0] = "矢量图";
htgj[1] = "脚本语言";
//学习手册：工具-画图工具
	$(".htgj a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 画图工具 > "+htgj[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	

//学习手册：工具-天线建模工具
	$(".txjm").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 天线建模工具");
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：工具-Latex
	$(".latex").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > Latex");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

var mppt = new Array()
mppt[0] = "PPT制作技巧与规范";
mppt[1] = "Beamer sliders制作";
//学习手册：工具-幻灯片制作
	$(".mppt a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 幻灯片制作 > "+mppt[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
var jtwy = new Array()
jtwy[0] = "学习方法";
jtwy[1] = "主要语言学习";
jtwy[2] = "静态网页开发工具";
//学习手册：工具-静态网页开发工具
	$(".jtwy a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 静态网页开发工具 > "+jtwy[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
var git = new Array()
git[0] = "介绍";
git[1] = "具体工具";
//学习手册：工具-GitHub
	$(".git a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > GitHub和GitLab版本控制工具 > "+git[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：工具-软件发布
	$(".rjfb").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 软件发布");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

var linux = new Array()
linux[0] = "介绍";
linux[1] = "具体工具";
//学习手册：工具-Linux
	$(".linux a").click(function(){
		//一级标题上色
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > Linux常用命令 > "+linux[weekIndex]);
		//!编辑内容
		appendIframe='<p>暂未发布......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：工具-makefile
	$(".makefile").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > Makefile文件和CMake工具");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：工具-期刊、会议
	$(".qkhy").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 演化计算领域期刊、会议");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：其他-报账流程
	$(".bzlc").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 其他 > 报账流程");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：其他-文体活动
	$(".wthd").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 其他 > 文体活动");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：实验室记录-考勤与加班
	$(".jbkq").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 实验室纪律 > 考勤与加班");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-两周小结
	$(".twoweek").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 实验室纪律 > 两周小结");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-助研考核
	$(".zykh").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 实验室纪律 > 助研考核");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-研讨会
	$(".yth").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 实验室纪律 > 研讨会");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-实验室管理制度
	$(".glzd").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 实验室纪律 > 实验室管理制度");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//投稿要求-署名
	$(".smdw").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 投稿要求 > 论文署名和单位");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//投稿要求-资金
	$(".zzjj").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 投稿要求 > 资助基金");
		//!编辑内容
		appendIframe='<p>精彩期待......</p>';
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
});

/*$(document).ready(function(){
  $("#menu").children("ul").get;
});*/