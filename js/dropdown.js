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
		$(this).parent().parent().find("li").css('background-color','#f8f8f8');
		$(this).attr('class','doubleweekFa');
		$(".leftpath .col-menu ul li ul li a").css('color','black');
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
		if(readpaper[weekIndex] == '阅读前的准备'){
			appendIframe=
				'<ul>'+
				'<li><p>了解自己的需求</p>'+
				'<ul>'+
				'<li>了解领域动态。 那你看看摘要就好了，读懂标题，知道本文的核心结论就好。具体要求见知乎文章。</li>'+
				'<li>准备入一行，扩充知识面。重点读引言，看图表结果，大致了解本文的逻辑推理路线。</li>'+
				'<li>准备借鉴此文开展自己的研究工作。这就是最深层次的阅读了，必须要理解本文的设计理念，此时讨论就尤为重要。</li>'+
				
				'</ul>'+
				'</li>'+
				'<li><p>误区</p>'+
				'<ul>'+
				'<li>不要高亮不认识的词，没意义，只能高亮文章的逻辑核心词汇和语句。</li>'+
				'<li>不要一开始就通读，这样你很快就读不下去；正确的做法是由总到细，由浅及深，分步阅读。</li>'+
				'<li>不要读完就不管了，在没有自我总结之前，知识是不属于你的。</li>'+
				'<li>不要以为文献读一遍就够了，理解认知是一个螺旋循环上升的过程。</li>'+
				
				'</ul>'+
				'</li>'+
				
				'</ul>'
		}
		else if(readpaper[weekIndex] == '阅读Abstract'){
			appendIframe=
			'<p>&emsp;&emsp;摘要本身就是对全篇内容的概括，是重中之重。 一篇论文的核心往往是一两句话，而论文的其他部分都是在用不同的方式支持它的核心 ，因此读好摘要是非常重要的。</p>'+
			'<ul>'+
			'<li><p>Abstract 中我们应该需要做的笔记</p>'+
			'<ul>'+
			'<li>作者想解决什么问题？Question</li>'+
			'<li>作者通过什么理论/模型来解决这个问题？Method</li>'+
			'<li>作者给出的结论是什么？Answer</li>'+
			
			'</ul>'+
			'</li>'+
			'<li><p>通过摘要，可以得到的信息</p>'+
			'<ul>'+
			'<li>这篇文章与我的研究内容是否相关？</li>'+
			'<li>采用的方法是否新颖，我是否感兴趣？</li>'+
			'<li>他的结果，是我想要的么？</li>'+
			
			'</ul>'+
			'<p>以上三个问题，可以变化你阅读论文心中所带的问题</p>'+
			'<ul>'+
			'<li>他是如何把这种方法运用到这类问题中的？（学习）</li>'+
			'<li>它的结果完美么？是否是充分必要的？保守性强不强？有没有可以改进的地方？（总结+反思）</li>'+
			
			'</ul>'+
			'</li>'+
			
			'</ul>'+
			'<p>&emsp;&emsp;所以，阅读论文的 Abstract，实际是你为阅读论文所做的最重要的准备工作，带着问题去读论文才最有效率，<strong>万万不可跳过 Abstract</strong>。</p>'+
			'<p>&emsp;&emsp;每次读完文献（不管是细读还是粗读），合上文献后，想想看，文章最重要的 take home message 是什么，如果不知道，就从 abstract, conclusion 里找，并且从 discuss 里最好确认一下。这样一来，一篇文章就过关了。Take home message其实都不会很多，基本上是一些 concepts，如果你发现你需要记得很多，那往往是没有读到重点。</p>'
		}
		else if(readpaper[weekIndex] == '阅读Introduction'){
			appendIframe=
			'<p>&emsp;&emsp;这一部分其实是对于 文章的研究背景和研究意义的介绍，有些论文也会将文献综述的简化版加在里面。在 Introduction 的最后，作者会介绍文章的架构，让你清楚文章的每一部分都在做什么。</p>'+
			'<ul>'+
			'<li><p>Introduction 中我们需要做的笔记</p>'+
			'<ul>'+
			'<li>此问题的由来（历史），作者为什么研究这个课题？</li>'+
			'<li>此问题在全世界内的研究进展（现状），目前这个课题的研究进行到了哪一阶段？</li>'+
			'<li>引申出作者的研究动机，作者使用的理论是基于哪些假设？</li>'+
			
			'</ul>'+
			'</li>'+
			'<li><p>建议</p>'+
			'<p>Introduction 可以读完，泛读时着重读前两段。此时你必须要能回答出几个问题才算真正抓住了本文的核心：文章的引言、结果和结论是如何将摘要详细展开的。</p>'+
			'</li>'+
			
			'</ul>'
		}
			else if(readpaper[weekIndex] == '阅读Conclusion'){
			appendIframe=
			'<p>&emsp;&emsp;Conclusion 通常会把整个文章的主要内容复述一遍，帮助读者回顾+ 理清思路，然后在此基础上深入自己 的研究。在 Abstract 或者 Introduction 中，作者就已经给出了课题的结论。而在 Conclusion中会评价自己的结论，并且在这个课题上的基础上 进一步探讨，比如延伸到这个课题未来还有哪些研究方向，可以用来解决哪些问题，等等。</p>'+
			'<ul>'+
			'<li><p>Conclusion 中我们需要做的笔记</p>'+
			'<ul>'+
			'<li>这篇文章存在哪些缺陷？</li>'+
			'<li>作者关于这个课题的构思有哪几点？</li>'+
			
			'</ul>'+
			'</li>'+
			
			'</ul>'+
			'<p>&emsp;&emsp;读完以上三步，并做完笔记以后，我们已经对这篇文章的 核心有了比较清晰的认识。接下来需要了解的就是 作者如何像做数学证明题一样，一步一步得出了他的结论。但是如果直接从研究方法 method 开始读，复杂的公式往往让人很难有耐心地进行下去，因此要搞清楚作者的研究方法，应该先看的不是理论的推导过程，而是文章中的表格。</p>'
		}
		
			else if(readpaper[weekIndex] == '几点启示'){
			appendIframe=
			'<ul class = qishi>'+
			'<li>每月关注《IEEE Evolutionary Computation》和《Evolutionary Computation》，定期查看《科学》和《自然》。如果时间有限，读读文章标题以及与自己研究领域相关的科研论文的 abstract，即可！这样做可以保证一个学生基本上能够跟踪本领域最重要的发现和进展，同时开阔视野，大概知道其它领域的动态。顶刊上的综述文献往往都是本领域的牛人们写的。对此要精读，要分析其文章的构架，特别要关于作者对各个方向的优缺点的评价以及对缺点的改进和展望。通过精读一篇好的英文综述，所获得的不只是对本领域现在发展状况的了解，同时也可以学会很多地道的英文表达。</li>'+
			'<li>当遇到一些实验或结果分析很晦涩难懂时，不必花太多时间深究，而力求一气把文章读完。也许你的问题在后面的内容中自然就有解答。这与听学术讲座非常相似！你如果想每个细节都听懂，留心每一个技术细节，那你听学术讲座不仅会很累，而且也许会为了深究一个小技术环节而影响了对整个讲座逻辑推理及核心结论的理解。</li>'+
			'<li>对个别重要的文章和自己领域内的科研论文，应该精读。对与自己课题相关的每一篇论文则必须字斟句酌地读。这些论文，不仅要完全读懂，理解每一个实验的细节、分析、结论，还必须联想到这些实验和结论对自己的课题的影响和启发，提出自己的观点。</li>'+
			'<li>科学论文的阅读水平是循序渐进的。每个人开始都会很吃力，所以你有这种感觉不要气馁。坚持很重要，你一定会渐入佳境。当你有问题时或有绝妙分析时，应该与师兄师姐或找导师讨论。</li>'+
			'<li>科研训练的一个重要组成部分就是科研论文的阅读。每一个博士生必须经过严格的科研论文阅读的训练。除了你自己的习惯性阅读外，你应该在研究生阶段选修以阅读分析专业文献为主的一至两门课，在实验室内也要有定期的科研论文讨论（Journal Club）。如果你的实验室还没有这种讨论，你们学生可以自发地组织起来。</li>'+
			'<li>前面几条都是讨论如何提高科研论文的阅读能力，但是一旦入了门，就要学会 critical reading。不要迷信已发表的论文，哪怕是发表在非常好的期刊上。要时刻提醒自己：该论文逻辑是否严谨，数据是否可靠，实验证据是否支持结论，你是否能想出更好的实验，你是否可以在此论文的基础上提出新的重要问题？等等。</li>'+
			
			'</ul>'
		}
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
		if(kfpt[weekIndex] == "OFEC"){
			appendIframe=
			'<p>&emsp;&emsp;OFEC是基于C++语言的演化计算科研平台，包括动态优化、组合优化、多目标优化、多模优化等模块。由于本小组研究课题算法的实现、测试和对比，以及测试问题的开发都是在该平台上进行的，所以，与上述研究课题相关的小组成员<strong>必须掌握该实验平台</strong>。</p>'+
			"<p>&emsp;&emsp;OFEC在线文档：<a href='https://changhe160.github.io/OFEC_Alpha_doc/index.html'>https://changhe160.github.io/OFEC_Alpha_doc/index.html</a> 。</p>"+
			"<div align='center'>"+
			"<img class='study_sm' src='images/image_sm/OFEC_DEMO.png'>"+
			"</div>"+
			"<p class='imagetext'>OFEC可视化平台展示</p>"
		}
		else if(kfpt[weekIndex] == "天线设计"){
			appendIframe=
			"<p>&emsp;&emsp;做天线设计相关研究课题的小组成员，需要掌握天线设计软件。参见软件使用说明，具体资料见<a href='addons/附件3-1-1 天线设计软件使用说明.pdf' download='天线使用说明.pdf'>《附件3-1-1天线设计软件使用说明》</a>。</p>"+
			"<div align='center'>"+
			"<img class='study_sm' src='images/image_sm/天线设计软件.png'>"+
			"</div>"+
			"<p class='imagetext'>天线设计平台展示</p>"
		}
		else if(kfpt[weekIndex] == "服务器使用"){
			appendIframe=
			'<p>&emsp;&emsp;本小组成员在做研究课题时，或多或少都会使用服务器运行程序，例如多任务运行各种优化算法、小队作战游戏环境的部署等。为了多人能够同时使用服务器，本小组一般采用远程桌面的方式，如果主机和服务器在在同一部交换机下，可使用局域网进程远程连接。</p>'+
			'<ul>'+
			'<li><p>远程连接：可以使用SSH提供的命令行的远程连接，也可以使用图形远程桌面连接。</p>'+
			'</li>'+
			'<li><p>传文件：部分远程桌面软件都支持直接复制粘贴文件，但有时失效，所以可能文件共享可能需要一些别的手段，例如Samba共享文件夹。</p>'+
			'</li>'+
			'<li><p>开发环境：服务器已预装C++调试有关工具（g++，make，以及代码编辑器等），开箱即用。</p>'+		
			'</li>'+
			
			'</ul>'+
			"<p>服务器使用详情可以参见附件<a href='addons/附件3-1-2 服务器使用参考.pdf' download='服务器使用说明.pdf'>《附件3-1-2 服务器使用参考》</a>。</p>"
		}
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
		if(bcyy[weekIndex] == "C/C++"){
			appendIframe=
			'<p>推荐按照以下顺序学习：</p>'+
			'<ul>'+
			"<li>完整学习李长河教授主编的书籍《C++ 程序设计（基于C++11标准）》；</li>"+
			"<li>需详细了解的部分查阅<a href='addons/附件3-2-1 C++ Primer 英文版.pdf' download='C++Prime英语版.pdf'>《附件3-2-1 C++ Primer英文版》</a><a href='addons/附件3-2-1 C++ Primer 中文版.pdf' download='C++Prime中文版.pdf'>《附件3-2-2 C++ Primer中文版》</a>；</li>"+
			"<li>有关C++标准库 STL，即&quot;#include &lt;&gt;&quot; 相关的类型，查询 <a href='https://en.cppreference.com/'>cppreference.com</a> ；</li>"+
			"<li>具备一定C++编程经验后，推荐学习<a href='addons/附件3-2-3 Effective Modern C++.pdf' download='附件3-2-3 Effective Modern C++.pdf'>《附件3-2-3 Effective Modern C++》</a>；</li>"+
			"<li>还需要进一步学习设计模式推荐阅读<a href='addons/附件3-2-4 Modern C++ Design.pdf' download='附件3-2-4 Modern C++ Design.pdf'>《附件3-2-4 Modern C++ Design》</a>。</li>"+
			"</ul>";
		//!结束编辑内容
		$(".article_content").append(appendIframe);
		}
		if(bcyy[weekIndex] == "Python"){
			appendIframe=
			'<p>Python的学习是一个循序渐进的过程，应该有简入难的递进式的学习。</p>'+
			'<ul>'+
			'<li>掌握python的基础内容，推荐参考书《Python 的基础教程》、《Python 编程：从入门到实践》、《Python语言入门》等；</li>'+
			'<li>《Python 学习手册（第四版）》、《流场的Python》这两本书可以作为入门到进阶学习工具；</li>'+
			'<li>学习Python中数据分析的一些工具，推荐参考书《利用Python进行数据分析》、《Python标准库》；</li>'+
			'<li>通过一些项目实例掌握Python编程的 技巧，推荐参考书《集体智慧编程》；</li>'+
			'<li>学习通过Python实现算法方法，推荐参考书《Python算法教程》；</li>'+
			'<li>了解应用Python开发，推荐参考书《Python核心编程》、《Python编程实战：运用设计模式、开发和程序库创建高质量程序》。</li>'+

			'</ul>'+
			"<p>&emsp;&emsp;上述书籍资料详见<a href='addons/附件3-2-5 Python资料.rar' download='附件3-2-5 Python资料.rar'>《附件3-2-5 Python资料》</a>。除此之外，可以利用一些网上的资源提高Python的学习，如覆盖很多编程电子书籍的Wowebook；包含很多开源代码库的Github；方便交流学习的CSDN等。</p>"
		//!结束编辑内容
		$(".article_content").append(appendIframe);
		}
		
		if(bcyy[weekIndex] == "MATLAB"){
			appendIframe=
			'<ul>'+
			'<li><p><strong>软件简介</strong></p>'+
			'<ul>'+
			'<li>Matlab是美国Mathworks公司开发的一款商业科学计算软件，从最初的矩阵运算发展至今，已经集成了众多工程领域的工具箱。使用Matlab软件，可以完成基础的符号运算如求解复杂方程，2D、3D作图，数值拟合，多元回归以及复杂的如机器学习及深度学习的项目开发。</li>'+
			
			'</ul>'+
			'</li>'+
			'<li><p><strong>常用模块</strong></p>'+
			'<ul>'+
			'<li><p><strong>解方程</strong></p>'+
			"<pre><code class='language-matlab' lang='matlab'>%% 解方程<br>"+
			'syms x; %定义变量<br>'+
			'e1=x^2-2*x; %方程：x^2-2*x=0<br>'+
			's=double(solve(e1,x)); %solve()函数解方程<br>'+
			'</code></pre>'+
			"<pre><code class='language-matlab' lang='matlab'>%% 解方程组<br>"+
			'syms x y z; %定义三个变量<br>'+
			'e1 = 2*x - y +z; %方程组<br>'+
			'e2 = x + y - 6;<br>'+
			'e3 = z +2*y;<br>'+
			'[x0,y0,z0]=solve(e1,e2,e3,x,y,z); %solve()函数求解方程组<br>'+
			's=double([x0,y0,z0]);<br>'+
			'</code></pre>'+
			"<pre><code class='language-matlab' lang='matlab'>%% 返回一个范围内的一个解<br>"+
			'syms x;<br>'+
			's=double(vpasolve(0.5 - sin(x),x,[-2,2])); %vpasolve()函数求解[-2,2]范围内的解<br>'+
			'</code></pre>'+
			"<pre><code class='language-matlab' lang='matlab'>%% 返回一个值附近的解<br>"+
			'syms x;<br>'+
			's=double(vpasolve(0.5 - sin(2*pi*x),x,2)); %vpasolve()函数求解 2 附近的解<br>'+
			'</code></pre>'+
			'</li>'+
			'<li><p><strong>画图</strong></p>'+
			'<ul>'+
			'<li>画图之前先进行数据采集，每一维的数据以一维向量的形式存储，二维数据主要有直线拟合图和散点图，三维数据有等高线图和海拔图等。</li>'+
			
			'</ul>'+
			"<pre><code class='language-matlab' lang='matlab'>%% 二维数据画图"+
			'x=0:0.01:4; %第一维数据<br>'+
			'y1=sin(pi*x); %第二维数据<br>'+
			'y2=cos(pi*x);<br>'+
			'plot(x,y1,&#39;r&#39;,&#39;linewidth&#39;,3); %折线图，‘r’定义线条颜色，‘linewidth’定义线宽<br>'+
			'hold on; %在上幅图的坐标区继续画图<br>'+
			'scatter(x,y2,20,&#39;*&#39;); %散点图,&#39;20&#39;表示散点大小，‘*’表示散点形状<br>'+
			'grid on; %坐标区加网格<br>'+
			'xlabel(&#39;x&#39;); %x 轴标签<br>'+
			'ylabel(&#39;y&#39;); %y 轴标签<br>'+
			'title(&#39;x-y&#39;); %图标题<br>'+
			'legend(&#39;sin(x)&#39;,&#39;cos(x)&#39;); %设置图例<br>'+
			'axis([0 4 -1 1]); %坐标区取值范围<br>'+
			'grid off; %取消网格<br>'+
			'hold off; %取消连续画图<br>'+
			'</code></pre>'+
			"<pre><code class='language-matlab' lang='matlab'>%% 三维画图<br>"+
			'x=0:0.01:2; %第一维向量<br>'+
			'y=0:0.01:2; %第二维向量<br>'+
			'[x1,x2]=meshgrid(x,y); %生成二维向量的均匀组合网格<br>'+
			'f=sin(2*pi*x1)+cos(2*pi*x2); %第三维网格向量<br>'+
			'f=f+4;<br>'+
			'mesh(x1,x2,f); %画三维网格图<br>'+
			'hold on;<br>'+
			'contour(x1,x2,f,20); %画函数值的等高线，‘20’表示等高线的条数<br>'+
			'xlabel(&#39;x1&#39;);<br>'+
			'ylabel(&#39;x2&#39;);<br>'+
			'zlabel(&#39;f&#39;);<br>'+
			'title(&#39;三维图&#39;);<br>'+
			'legend(&#39;海拔图&#39;,&#39;等高线图&#39;);<br>'+
			'</code></pre>'+
			'<figure><table>'+
			'<thead>'+
			"<tr><th style='text-align:center;' ><img src='images/image_sm/二维图.png' width=100% referrerpolicy='no-referrer'></th><th style='text-align:center;' ><img src='images/image_sm/三维图.png' width=100% referrerpolicy='no-referrer'></th></tr></thead>"+
			"<tbody><tr><td class='imagetext' style='text-align:center;' >二维图</td><td class='imagetext' style='text-align:center;' >三维图</td></tr></tbody>"+
			'</table></figure>'+
			'</li>'+
			'<li><p><strong>曲线拟合工具箱</strong></p>'+
			'<ul>'+
			'<li>曲线拟合工具箱用于有限数据点的模型拟合，有数据反向设计函数形式，在 matlab 中可以使用工具箱完成。首先定义两个一维数据：x=[];y=[]。然后 matlab 的命令行输入“cftool”进入曲线拟合工具箱界面。</li>'+
			
			'</ul>'+
			"<p><img src='images/image_sm/工具箱界面.png' width=100% referrerpolicy='no-referrer'></p>"+
			"<ul><p class='imagetext'>MATLAB工具箱界面</p></ul>"+
			'</li>'+
			'<li><p><strong>变量自回归</strong></p>'+
			'<ul>'+
			'<li>变量自回归模型在数据挖掘、时间序列分析及预测的方法设计中较为常见，所以掌握基本的自回归模型的使用比较有帮助。具体操作方法为：在matlab命令行窗口输入：help ar。打开ar函数的帮助页。</li>'+
			'</ul>'+
			'</li>'+
			
			'</ul>'+
			'</li>'+
			'<li><p><strong>参考资料</strong></p>'+
			'<ul>'+
			"<li>书籍：《MATLAB揭秘》、《MATLAB编程》等等，详见<a href='addons/附件3-2-6 Matlab资料.rar'>《附件3-2-6 Matlab编程资料》</a>。</li>"+
			'<li>在线资源：CSDN上应有尽有</li>'+
			"<li>优化平台：PlatEMO多目标优化平台，基于matlab语言。<a href='https://github.com/BIMK/PlatEMO'>https://github.com/BIMK/PlatEMO</a>。</li>"+
			'</ul>'+
			'</li>'+
			'</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
		}
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
		if(bchj[weekIndex] == 'Visual Studio'){
			appendIframe=
			'<ul>'+
			'<li><p><strong>Visual Studio简介</strong></p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;Visual Studio集成开发环境是一种创新启动板，可用于编辑、调试并生成代码，然后发布应用。集成开发环境(IDE) 是一个功能丰富的程序，可用于软件开发的许多方面。除了大多数 IDE 提供的标准编辑器和调试器之外，Visual Studio 还包括编译器、代码完成工具、图形设计器和许多其他功能，以简化软件开发过程。如图是Visual Studio面板示意图。'+
			'</li>'+
			
			'</ul>'+
			"<div align='center'>"+
			"<img src='images/image_sm/Visual Studio面板示意图.png' width=90% referrerpolicy='no-referrer'>"+
			"<p class='imagetext'>Visual Studio面板示意图</p>"+
			'</div>'+
			'<ul>'+
			'<li><p><strong>初学Visual Studio需要掌握</strong></p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;软件安装、创建工程、环境配置、代码编写（掌握C++等语言）、代码调试（断点调试、调用堆栈查看等）</strong>等方面知识，这些知识在《Visual Studio IDE用户手册》中都有非常详细的介绍与讲解，对于初学者来说，可以参考《Visual Studio IDE用户手册》中的快速入门。'+
			"<div align='center'>"+
			"<img src='images/image_sm/初学VS.png' width=90% referrerpolicy='no-referrer'>"+
			"<p class='imagetext'>初学VS</p>"+
			'</div>'+
			'</li>'+
			'<li><p><strong>Visual Studio扩展功能</strong></p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;扩展是可以允许你在 Visual Studio中进行自定义并增强在其中的体验的附加项，通过添加新功能或集成现有工具实现。扩展复杂程度不一，但是其主要用途在于提高工作效率并满足工作流需求。使用“管理扩展”对话框来安装和管理 Visual Studio扩展。<strong>若要打开 “管理扩展”对话框，请选择“扩展” &gt; “管理扩展” 。 或者，在搜索框中键入“扩展” ，然后选择“管理扩展”</strong> 。'+
			"<div align='center'>"+
			"<img src='images/image_sm/VS扩展功能.png' width=90% referrerpolicy='no-referrer'>"+
			"<p class='imagetext'>VS拓展功能</p>"+
			'</div>'+
			'</li>'+
			
			'</ul>'+
			'<ul>'+
			'<li><p><strong>Visual Studio实用控件推荐</strong></p>'+
			'<ul>'+
			'<li><p>Viasfora</p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;很好地区分各种括号、添加outlining，在需要阅读结构较复杂的工程时可提高阅读效率。不建议初学者在阅读可读性较好的工程时长期依赖此控件。'+
			"<div align='center'>"+
			"<img src='images/image_sm/Viasfora.png' width=90% referrerpolicy='no-referrer'></p>"+
			"<p class='imagetext'>Viasfora</p>"+
			'</div>'+
			'</li>'+
			'<li><p>Editor</p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;一个在Visual Studio中的Markdown工具，具有实时预览和语法突出显示功能。支持GitHub风格的Markdown，例如用Visual Studio打开GitHub中的.md文件以方便浏览。'+
			"<div align='center'>"+
			"<img src='images/image_sm/markdown_editor.png' width=90% referrerpolicy='no-referrer'></p>"+
			"<p class='imagetext'>Markdown_editor</p>"+
			"</div>"+
			'</li>'+
			'</ul>'+
			'</li>'+
			'</ul>'+
			'<ul>'+
			'<li><p><strong>学习资料</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;参见附件资料<a href='addons/附件3-3-1 Visual Studio IDE用户手册.pdf'>《附件3-3-1 Visual Studio IDE用户手册》<a><a href='addons/附件3-3-2 Visual Studio C++参考文档.pdf'>《附件3-3-2 Visual Studio C++参考文档》"+
			'</li>'+
			'</ul>'
		}
		
		if(bchj[weekIndex] == 'Qt'){
			appendIframe=
			'<ul>'+
			'<li><p><strong>Qt简介</strong></p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;Qt是一个跨平台的<strong>C++图形用户界面应用程序框架</strong>，提供给应用程序开发者建立艺术级的图形用户界面所需的所用功能。它既可以开发GUI程序，也可用于开发非GUI程序，比如控制台工具和服务器。Qt很容易扩展，并且允许真正地组件编程。Qt与GTK、KDE、MFC，OWL，VCL，ATL是一样的图形界面库。Qt具有<strong>优良的跨平台特性、面向对象、丰富的API、大量的开发文档、支持2D/3D图形渲染，支持OpenGL</strong>等优点。'+
			'</li>'+
			'<li><p><strong>Qt与Qt Creator下载与安装</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;Qt Creator 是全新的跨平台 Qt IDE，可单独使用，也可与 Qt 库和开发工具组成 一套完整的 SDK。其中包括：<strong>高级 C++ 代码编辑器，项目和生成管理工具，集成的上下文相关的帮助系统，图形化调试器，代码管理和浏览工具。</strong>Qt下载地址：<a href='http://download.qt.io/official_releases/qt/' target='_blank'>http://download.qt.io/official_releases/qt/</a>，具体的Qt与Qt creator下载与安装方法可参考<a href='https://www.cnblogs.com/lxmwb/p/6352220.html' target='_blank'>https://www.cnblogs.com/lxmwb/p/6352220.html</a>。"+
			'</li>'+
			'<li><p><strong>Qt学习教程</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;参考《Qt学习之路2》<a href='https://www.devbean.net/2012/08/qt-study-road-2-catelog/' target='_blank'>https://www.devbean.net/2012/08/qt-study-road-2-catelog/</a>。"+
			'</li>'+
			'<li><p><strong>Qt官方文档</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://doc.qt.io/' target='_blank'>https://doc.qt.io/</a>、<a href='https://www.qtdoc.cn/' target='_blank'>https://www.qtdoc.cn/</a>（中文版）。"+
			'</li>'+
			'</ul>'
		}
		if(bchj[weekIndex] == 'Openframeworks'){
			appendIframe=
			'<ul>'+
			'<li><p><strong>Openframeworks简介</strong></p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;Openframeworks是C++为基准的简洁的开发框架，擅长开发图像和动画，框架代码支持跨平台，目前支持<strong>五种</strong>操作系统（Windows，OSX， Linux，iOS，Android ）和4个IDE（Xcode，Code::Block，VisaulStudio，Eclipse）,所有的接口都是简单易读的模式设计的。旨在通过实验提供简单直观的框架来协助创作过程。'+
			'</li>'+
			'<li><p>Openframeworks被设计来解决各种问题，其常常与以下的第三方库整合在一起。</p>'+
			'<ul>'+
			'<li>图形：openGL,GLEW,GLUT,libtess2,和cairo</li>'+
			'<li>音频输入、输出与分析：rtAudio，PortAudio，OpenAL和Kiss FFT或 FMOD</li>'+
			'<li>字体：FreeType</li>'+
			'<li>图片加载与导出：FreeImage</li>'+
			'<li>视频播放与生成：Quicktime ，GStreamer 和 vedioInput</li>'+
			'<li>多功能工具库：poco</li>'+
			'<li>计算机视觉：openCV</li>'+
			'<li>加载三维模型：Assimp</li>'+
			
			'</ul>'+
			'</li>'+
			'<li><p><strong>Openframeworks下载与安装</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;Openframeworks需要选择一个IDE（集成开发环境）来运行，根据电脑的操作系统和开发环境的不同选择相应的Openframeworks版本进行安装，具体的安装指南参考：<a href='https://openframeworks.cc/zh_cn/download/' target='_blank'>https://openframeworks.cc/zh_cn/download/</a>"+
			'</li>'+
			'<li><p><strong>openframeworks学习教程</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://openframeworks.cc/zh_cn/learning/' target='_blank'>https://openframeworks.cc/zh_cn//learning/</a>"+
			'</li>'+
			'<li><p><strong>Openframework核心与组件的资料</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;主要是openframeworks类，函数，附加组件的参考资料，详细内容参考：<a href='https://openframeworks.cc/zh_cn/' target='_blank' class='url'>https://openframeworks.cc/zh_cn/</a><a href='https://openframeworks.cc/zh_cn/documentation/'>documentation/</a>"+
			'</li>'+
			
			'</ul>'
		}
		if(bchj[weekIndex] == 'PyTorch'){
			appendIframe=
			'<ul>'+
			'<li><p><strong>PyTorch简介</strong></p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;PyTorch是一个开源的Python机器学习库，基于Torch，用于自然语言处理等应用程序。PyTorch的前身是Torch，其底层和Torch框架一样，但是使用Python重新写了很多内容，不仅<strong>更加灵活，支持动态图，而且提供了Python接口。</strong>它是由Torch7团队开发，是一个以Python优先的深度学习框架，不仅能够<strong>实现强大的GPU加速</strong>，<strong>同时还支持动态神经网络</strong>，这是很多主流深度学习框架比如Tensorflow等都不支持的。PyTorch既可以看作加入了GPU支持的numpy，同时也可以看成一个拥有<strong>自动求导功能</strong>的强大的<strong>深度神经网络</strong>。'+
			'</li>'+
			'<li><p><strong>PyTorch下载与安装</strong></p>'+
			"&nbsp;&nbsp;&nbsp;&nbsp;PyTorch的安装十分简单，根据<strong>PyTorch官网</strong>，对系统选择和安装方式等灵活选择即可。推荐使用<strong>anaconda</strong>（开源的Python包管理器），具体的安装指南参考：<a href='http://pytorch123.com/FirstSection/InstallIutorial/' target='_blank'>http://pytorch123.com/FirstSection/InstallIutorial/</a>"+
			'</li>'+
			'<li><p><strong>PyTorch学习教程</strong></p>'+
			'<ul>'+
			"<li>英文文档：<a href='https://pytorch.org/tutorials/' target='_blank'>https://pytorch.org/tutorials/</a></li>"+
			"<li>中文文档：<a href='https://pytorch-cn.readthedocs.io/zh/latest/notes/autograd/' target='_blank'>https://pytorch-cn.readthedocs.io/zh/latest/notes/autograd/</a> , <a href='http://pytorch123.com/' target='_blank'>http://pytorch123.com/</a></li>"+
			
			'</ul>'+
			'</li>'+
			
			'</ul>'+
			'<ul>'+
			'<li><p><strong>PyTorch的C++扩展</strong></p>'+
			'&nbsp;&nbsp;&nbsp;&nbsp;LibTorch是PyTorch的C++接口，便于C++平台环境和使用条件下的部署和性能优化。LibTorch的安装、下载以及类和API可参考官方文档：'+
			"<a href='https://pytorch.org/tutorials/advanced/cpp_export.html' target='_blank'>https://pytorch.org/tutorials/advanced/cpp_export.html</a>、<a href='https://pytorch.org/cppdocs/' target='_blank'>https://pytorch.org/cppdocs/</a>  。"+
			'</li>'+
			
			'</ul>'
		}
		$(".article_content").append(appendIframe);
		//!结束编辑内容
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
		if(htgj[weekIndex] == '矢量图'){
			appendIframe=
			'<p>&emsp;&emsp;流程图推荐使用 Microsoft Visio，示意图推荐使用 Inkscape 或 Adobe Illustrator，均可导出矢量图。</p>'+
			'<br>'+
			"<div align='center'>"+
			"<img src='images/image_sm/AMP.png' width=90% referrerpolicy='no-referrer'>"+
			"<p class='imagetext'>使用Visio所绘制的多种群算法示意图</p>"
		}
		else if(htgj[weekIndex] == '脚本语言'){
			appendIframe=
			'<p>&emsp;&emsp;熟悉 Python 语言的同学推荐使用 Scipy、Numpy处理数据，结合 Matplotlib 绘图；也可以直接利用TikZ和Pgfplots在Latex中绘图；其他推荐使用Gnuplot 和 MatLab 绘图。</p>'+
			"<div align='center'>"+
			"<img src='images/image_sm/Scipy.png' width=80% referrerpolicy='no-referrer'>"+
			"<p class='imagetext'>使用Scipy所绘制的高斯分布曲线</p>"+
			"<br>"+
			"<div align='center'>"+
			"<img src='images/image_sm/TikZ.png' width=80% referrerpolicy='no-referrer'>"+
			"<p class='imagetext'>使用TikZ所绘制的元素周期表</p>"
			
		}
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	

//学习手册：工具-天线建模工具
	$(".txjm").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 天线建模工具");
		//!编辑内容
		appendIframe=
		'<p>&emsp;&emsp;在天线领域，不管是单天线、阵列天线还是其它类型的天线的设计，往往都需要天线设计人员具备较深的理论与实际经验，以便获得较为理想的天线结构参数，这直接决定着天线的基本性能。</p>'+
		"<p>&emsp;&emsp;演化天线小组将群智能优化技术应用到天线设计中，通过智能优化的手段来寻找最优天线结构，以满足所需的天线性能，此举极大地降低了天线设计领域的门槛。但是这并不意味着完全不需要天线领域的知识。进行天线设计的首要任务就是<strong>利用电磁仿真软件对天线进行建模与仿真</strong>。目前使用三维电磁仿真软件<strong>Ansys HFSS18</strong>进行天线结构建模与仿真。</p><p>&emsp;&emsp;详细的步骤与流程请见Ansys HFSS18使用手册参考<a href='addons/附件3-5 HFSS天线建模_李明洋版本.pdf'>《附件3-5 HFSS天线建模_李明洋版本》</a>。</p>"
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：工具-Latex
	$(".latex").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > Latex");
		//!编辑内容
		appendIframe=
		"<p>&emsp;&emsp; Latex 是一种用于格式排版的系统，可用于报告、学术论文等的格式排版。Windows 系统推荐分别安装 <a href='https://miktex.org/download' target='_blank'>MiKTex</a> 和 <a href='http://www.winedt.com/download.html' target='_blank'>WinEdt</a>。LaTex入门指导：见附件<a href='addons/附件3-6 latex入门文档.pdf'>《附件3-6 latex入门文档》</a>。</p>"+
		'<p>&emsp;&emsp;排版时可能会提示需要安装额外包，若第一次出现，建议切换国内镜像：</p>'+
		"<div align='center'>"+
		"<img src='images/image_sm/1.png' referrerpolicy='no-referrer' width=65%>"+
		"<p class='imagetext'>切换国内镜像源-1</p><br>"+
		"<img src='images/image_sm/2.png' referrerpolicy='no-referrer' width=65%>"+
		"<p class='imagetext'>切换国内镜像源-2</p><br>"+
		"<img src='images/image_sm/3.png' width=65% referrerpolicy='no-referrer'>"+
		"<p class='imagetext'>切换国内镜像源-3</p><br>"+
		"</div>"+
		'<p>&emsp;&emsp; 此外，作为一个研究生，需要阅读大量的文献，难免会出现文献管理混乱的情况，可以使用BibTex格式的文件来管理所阅读的相关文献。</p>'
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
		if(mppt[weekIndex] == "PPT制作技巧与规范"){
			appendIframe=
			'<ul>'+
			'<li><p><strong>制作原则</strong>：</p>'+
			'<ul>'+
			'<li>要考虑听众对象，根据不同的对象选择不同的风格，对于大同行可以选择科普型，内容要简单易懂，对于小同行可以多些细节实现；</li>'+
			'<li>考虑时间要求调整幻灯片长度和制作内容的精细程度；</li>'+
			'<li>同一页和相邻页面内容编排的逻辑性，section之间或是并列或是递进关系，而不能随意混合。</li>'+
			
			'</ul>'+
			'</li>'+
			'<li><p><strong>注意事项：</strong></p>'+
			'<ul>'+
			'<li>研究背景要交代清楚，包括理论方法研究和应用背景，研究动机要明确，想要解决什么关键问题；所提出方法的创新性明确罗列；</li>'+
			'<li>避免大段文字叙述，需要提炼重点并标记；</li>'+
			'<li>避免全篇文字，需要详细的原理图、公式，解释观点和论据；</li>'+
			'<li>实验结果展示应该能反映算法的中间行为过程，应该尽量避免只分析最后结果，实验结论应该有原理性的支撑，而不能只靠最后的数据下结论。</li>'+
			
			'</ul>'+
			'</li>'+
			"<li><p><strong>PPT制作模板</strong>：见附件<a href='addons/附件3-7-1 优秀PPT参考.pdf'>《附件3-7-1 优秀PPT参考》</a>。</p>"+
			'</li>'+
			
			'</ul>'
		}
		else if(mppt[weekIndex] == "Beamer sliders制作"){
			appendIframe=
			'<ul>'+
			'<li><p><strong>Beamer sliders简介</strong></p>'+
			'&emsp;&emsp;Beamer 是一个用于创建演示文稿的LaTex文档类，默认生成PDF文件用于演示，与LaTex文档编辑的宏包通用，slides界面具有简洁一致的效果。'+
			'</li>'+
			'<li><p><strong>基本框架</strong></p>'+
			"<pre><code class='language-latex' lang='latex'>\documentclass{beamer}    %使用beamer文档类<br>"+
			"\\usepackage[UTF8]{ctex}   %中文编辑，去掉只能编辑英文"+
			'\\usepackage{graphicx}     %添加各种需要的工具包，如添加图片、公式、表格等<br>'+
			'\\usepackage{...}<br>'+
			'\\usetheme{Madrid}         %设置slides版式风格，顶栏、底栏、导航栏等<br>'+
			'\\begin{document}          % 文档开始<br>'+ 
			'\\title{}                  %标题<br>'+
			'\\author{}                 %作者<br>'+
			'\\date{}                   %日期<br>'+
			'\\begin{frame}             %新建一个幻灯片<br>'+
			'   \\frametitle{标题}       %幻灯片标题<br>'+      
			'   hello, world           %内容<br>'+
			'\\end{frame}               %当前页幻灯片结束<br>'+
			
			'\\begin{frame}             %新建新的一页幻灯片<br>'+
			'  %%不计数列举<br>'+
			'  \\begin{itemize}<br>'+		   
			'	 \\item   ppt<br>'+                                                
			'	 \\item   beamer<br>'+
			'  \\end{itemize}<br>'+
			'  %% 添加图片<br>'+
			'  \\begin{figure}[htbp]	  %[htbp]指定图片的位置<br>'+
			'	 \\centering			  %图片居中显示<br>'+
			'	 \\includegraphics[scale=0.5]{figs/fig.pdf}	%图片大小缩放到0.5倍（不会变形）<br>'+
			'	 \\caption{图片}\label{fig1-1}	%图片说明及引用标签<br>'+
			'  \\end{figure}<br>'+
			'  %% 添加表格<br>'+
			'  \\begin{table}			  %表格环境<br>'+
			'	 \\centering			  %表格居中显示<br>'+
			'	 \\begin{tabular}{|l|c|r|}	%表格行列数及内容显示位置，l,c,r分别为左中右<br>'+
			'		\\hline			  %表格行之间的横线<br>'+      
			'		1 &amp; 2 &amp; 3 \\	  %每个单元格内容用&amp;隔开，一行结束用\\表示<br>'+
			'		\\hline<br>'+ 
			'		4 &amp; 5 &amp; 6 \\<br>'+
			'		\\hline<br>'+
			'	 \\end{tabular}<br>'+
			'	 \\caption{表1}\label{table1-1}		%表头及引用标签<br>'+
			'   \\end{table}<br>'+
			'   %% 添加公式<br>'+
			'   \\begin{equation}\label{eq1-1}<br>'+
			'	   x^{2}+y^{2}=1<br>'+
			'   \\end{equation}<br>'+
			'   %% 构造块block<br>'+
			'   \\begin{block}{Lemma}<br>'+
			'	   1+1=3<br>'+
			'   \\end{block}<br>'+
			'\\end{frame}<br>'+ 
			
			'\\end{document}'+
			'</code></pre>'+
			'</li>'+
			
			'</ul>'+
			'<ul>'+
			'<li><p><strong>参考资料</strong></p>'+
			'<ul>'+
			"<li>beamer入门指导：见附件<a href='addons/附件3-7-2 beamer_guide_cn.pdf'>《附件3-7-2 beamer_guide_cn》</a>。"+
			'<li>更多资料和技巧，网上的CSDN和博客上十分详细。</li>'+
			'</ul>'+
			'</li>'+
			'</li>'+
			
			'</ul>'
		}
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
		if(jtwy[weekIndex] == "学习方法"){
			appendIframe=
			'<ul>'+
			"<li><p>初识网页设计</p>"+
			'<ul>'+
			'<li>初步认识Web前端、静态网页、动态网页、HTML、CSS、JavaScript等概念，了解静态网页的特点。</li>'+
			'</ul>'+

			"<li><p>学习体系语言</p>"+
			'<ul>'+
			'<li>从开发者的角度，学习HTML语法结构、常用HTML标签、CSS基础语法与作用、JavaScript如何与 HTML 和CSS 协同工作等知识。</li>'+
			'</ul>'+
			
			"<li><p>实践进阶学习</p>"+
			'<ul>'+
			'<li>采用基础知识学习与上手实践两者并重的学习方法。可以通过W3School（参考手册、示例、在线编辑器）、CSDN（学习笔记、经验分享、代码实例）、Github（开源代码）、MOOC（视频）等网络资源进行学习。</li>'+
			'</ul>'
			'</ul>'
		}
		else if(jtwy[weekIndex] == "主要语言学习"){
			appendIframe=
			"<ul>"+
			
			"<li><p>HTML</p>"+
			"<ul>"+
			"<li>学习教程：<a href='https://www.w3school.com.cn/html/index.asp'>https://www.w3school.com.cn/html/index.asp</a></li>"+
			"<li>参考手册（在线）：<a href='https://www.w3school.com.cn/tags/index.asp'>https://www.w3school.com.cn/tags/index.asp</a></li>"+
			"<li>参考手册（离线）：详见<a href='addons/附件3-8-1 HTML5（W3CSchool版）.chm'>《附件3-8-1 HTML5（W3CSchool版）》</a></li>"+
			
			"</ul>"+
			"</li>"+
			"<li><p>CSS</p>"+
			"<ul>"+
			"<li>学习教程：<a href='https://www.w3school.com.cn/css/index.asp'>https://www.w3school.com.cn/css/index.asp</a></li>"+
			"<li>参考手册（在线）：<a href='https://www.w3school.com.cn/cssref/index.asp'>https://www.w3school.com.cn/cssref/index.asp</a></li>"+
			"<li>参考手册（离线）：详见<a href='addons/附件3-8-2 CSS3.0（腾讯ISD版）.chm'>《附件3-8-2 CSS3.0（腾讯ISD版）》</a></li>"+
			
			"</ul>"+
			"</li>"+
			
			"</ul>"+
			"<ul>"+
			"<li><p>JavaScript</p>"+
			"<ul>"+
			"<li>学习教程：<a href='https://www.w3school.com.cn/js/index.asp'>https://www.w3school.com.cn/js/index.asp</a></li>"+
			"<li>参考手册（在线）：<a href='https://www.w3school.com.cn/jsref/index.asp'>https://www.w3school.com.cn/jsref/index.asp</a></li>"+
			"<li>参考手册（离线）：详见<a href='addons/附件3-8-3 JavaScript参考资料.rar'>《附件3-8-3 JavaScript参考资料》</li>"+
			
			"</ul>"+
			"</li>"+
			
			"</ul>"
		}
		else if(jtwy[weekIndex] == "静态网页开发工具"){
			appendIframe=
			
			'<ul>'+
			"<li><p>Visual Studio Code</p>"+
			'<ul>'+
			'<li>支持MacOS、Windows、Linux系统；为开发人员设计；支持多种语言的开发；控件丰富。</li>'+
			'</ul>'+

			"<li><p>Adobe Dreamweaver</p>"+
			'<ul>'+
			'<li>最权威的网页开发及设计工具；功能强大；快速制作；方便入手与进阶；暂无Linux版本。</li>'+
			'</ul>'+
			
			"<li><p>GitHub等在线代码编辑</p>"+
			'<ul>'+
			'<li>开源在线；开发环境云端化、化繁为简。</li>'+
			'</ul>'
			
			"<li><p>文本编辑器Notepad(PC) 或 TextEdit (Mac)</p>"+
			'<ul>'+
			'<li>操作便捷；便于上手。</li>'+
			'</ul>'
			'</ul>'
		}
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
		if(git[weekIndex] == "介绍"){
			appendIframe=
			'<p>&emsp;&emsp;版本控制系统是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。<strong>版本控制系统可以用来管理软件源代码，也可用于多人协作完成同一个项目</strong>，使用较多的版本控制系统有svn，git等。由于本小组使用的是git，故此处仅仅介绍基于git的两个版本控制工具GitHub和GitLab。</p>'+
			'<p>&emsp;&emsp;Git 是实现版本控制的一种系统，而GitHub、GtiLab 还有国内的码云Gitee 等是 Git的不同远程服务商。推荐使用 GitHub 和 GitLab 的原因在于：Git 是最常用的版本控制系统，而 GitHub 和 GitLab 又是 Git 中最广泛使用的远程服务商。所以，首先需要了解版本控制是做什么，然后了解 Git 的主要功能（stage、commit、push、fetch、pull、merge、revert、reset 的作用）。</p>'
		}
		if(git[weekIndex] == "具体工具"){
			appendIframe=
			'<p>&emsp;&emsp;最基础的 GitHub 和 GitLab 使用界面是控制台的命令行模式，而检查合并内容、处理合并冲突等比较复杂的功能则需要图形界面的帮助。</p>'+
			'<p>&emsp;&emsp;除了 Git 自带的图形界面，还有很多提供图形界面的第三方 Git 工具。大部分常用的各语言 IDE 如：Visual Studio、VS Code、Pycharm、CLion、eclipse等，都包含集成的 Git 工具，推荐直接使用；至于WinEdt（编写 LaTeX）等不具备 Git 工具的软件，推荐使用 Sourcetree 客户端。</p>'
		}
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：工具-软件发布
	$(".rjfb").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 软件发布");
		//!编辑内容
		appendIframe=
		"<p>&emsp;&emsp;当完成一个软件的代码编写，并且已经通过编译、运行及测试，需要将程序分享出去的时候，不可能把编译的目录拷贝给别人，所有就需要将所有的文件打包成一个安装文件（例如Windows平台.exe文件，Linux平台的.rpm文件），该过程即是软件的发布。具体的软件发布过程可参考附件<a href='addons/附件3-9 软件部署参考.pdf'>《附件3-9 软件部署参考》</a>。</p>"
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：工具-Linux
	$(".linux").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > Linux常用命令");
		//!编辑内容
		appendIframe=
		"&emsp;&emsp;本小组成员在做研究课题时，或多或少都会使用Linux操作系统，例如多任务运行各种优化算法、小队作战游戏环境的部署等。所以本小组成员需要掌握一些Linux系统下的常用命令，包括文件管理、磁盘管理、用户管理等类型的命令，如下表列出了几个常用的命令，更详细的命令参考附件<a href='addons/附件3-10 Linux常用命令.pdf'>《附件3-10 Linux常用命令》</a>。"+
		"<br><br><div align='center'>"+
		"<figure><table width=80% border='1'>"+
		'<thead>'+
		"<tr height='40px'><th style='text-align:center;' >命令名</th><th style='text-align:center;' >用法及参数</th><th style='text-align:center;' >功能注解</th></tr></thead>"+
		"<tbody><tr height='40px'><td style='text-align:center;' >ls</td><td style='text-align:center;' >ls  -a</td><td style='text-align:center;' >列出当前目录下的所有文件</td></tr><tr height='40px'><td style='text-align:center;' >cd</td><td style='text-align:center;' >cd  路径</td><td style='text-align:center;' >切换到指定路径</td></tr><tr height='40px'><td style='text-align:center;' >cat</td><td style='text-align:center;' >cat  文件名</td><td style='text-align:center;' >查看文件内容</td></tr><tr height='40px'><td style='text-align:center;' >touch</td><td style='text-align:center;' >touch  file</td><td style='text-align:center;' >创建空文件file</td></tr><tr height='40px'><td style='text-align:center;' >make</td><td style='text-align:center;' >make</td><td style='text-align:center;' >编译</td></tr><tr height='40px'><td style='text-align:center;' >kill</td><td style='text-align:center;' >kill  PID</td><td style='text-align:center;' >终止某个PID进程</td></tr></tbody>"+
		'</table></figure>'+
		'</div>'
			
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：工具-makefile
	$(".makefile").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > Makefile文件和CMake工具");
		//!编辑内容
		appendIframe=
		'<p>&emsp;&emsp;makefile可以理解为与Visual Studio项目中的&quot*.sln&quot;,&quot;*.vcxproj&quot;,&quot;*.vcxproj.filters&quot;这几个工程文件起到相同作用的文档，用于组织在安装有GNU make的计算机系统上（主要为linux内核系统）的依赖与链接关系。一个工程中的源文件不计其数，其按类型、功能、模块分别放在若干个目录中，<strong>makefile定义了一系列的规则来指定哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为 makefile也可以执行操作系统的命令</strong>。当程序开发人员需要自己制定程序编译的顺序时，就需要写makefile文件，学习资料可参考附件《附件3-11 gun_make》。</p>'+
		'<p>&emsp;&emsp;CMake 是cross-platform make的缩写，与make起到相同作用，更用户可以跨平台在不同IDE、不同编译器之间使用同一个CMakeList.txt文件。目前CMake支持Windows、Linux、macOS系统，Visual Studio、QtCreator、JetBrains、vim、emacs等IDE，以及 gcc, MSVC, clang等编译器。CMake官方网站有详细的引导和用户手册。</p>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：工具-期刊、会议
	$(".qkhy").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 科研工具 > 演化计算领域期刊、会议");
		//!编辑内容
		appendIframe=
		
			'<ul>'+
			"<li><p>期刊</p>"+
			'<ul>'+
			"<figure><table width=100% border='1'>"+
		
		"<tbody><tr height='40px'><td>IEEE Transaction on Evolutionary Computation</td><td><a href='https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4235' target='_blank' class='url'>https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4235</a></td></tr><tr height='40px'><td>Evolutionary Computation</td><td><a href='https://www.mitpressjournals.org/loi/evco' target='_blank' class='url'>https://www.mitpressjournals.org/loi/evco</a></td></tr><tr height='40px'><td>IEEE transaction on Cybernetics</td><td><a href='https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6221036' target='_blank' class='url'>https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6221036</a></td></tr><tr height='40px'><td>Information Sciences</td><td><a href='https://www.journals.elsevier.com/information-sciences' target='_blank' class='url'>https://www.journals.elsevier.com/information-sciences</a></td></tr><tr height='40px'><td>Swarm and Evolutionary Computation</td><td><a href='https://www.journals.elsevier.com/swarm-and-evolutionary-computation' target='_blank' class='url'>https://www.journals.elsevier.com/swarm-and-evolutionary-computation</a></td></tr><tr height='40px'><td>Applied Soft Computing</td><td><a href='https://www.journals.elsevier.com/applied-soft-computing' target='_blank' class='url'>https://www.journals.elsevier.com/applied-soft-computing</a></td></tr><tr height='40px'><td>Soft Computing</td><td><a href='https://www.springer.com/journal/500' target='_blank' class='url'>https://www.springer.com/journal/500</a></td></tr>"+'</table></figure>'+
			'</ul>'+

			"<li><p>国际会议</p>"+
			'<ul>'+
			"<figure><table width=100% border='1'>"+
"<tr height='40px'><td>Parallel Problem Solving from Nature（PPSN）</td><td><a href='https://ppsn2020.liacs.leidenuniv.nl/'>https://ppsn2020.liacs.leidenuniv.nl/</a></td></tr><tr height='40px'><td>IEEE Congress on Evolutionary Computation（CEC）</td><td><a href='http://cec2019.org/'>http://cec2019.org/</a></td></tr><tr height='40px'><td>Genetic and Evolutionary Computation Conference（GECCO）</td><td><a href='https://sig.sigevo.org'>https://sig.sigevo.org</a></td></tr><tr height='40px'><td>IEEE Symposium Series on Computational Intelligence（SSCI）</td><td><a href='http://www.ieeessci2020.org/'>http://www.ieeessci2020.org/</a></td></tr></tbody>"+'</table></figure>'+
			'</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：其他-报账流程
	$(".bzlc").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 其他 > 报账流程");
		//!编辑内容
		appendIframe=
		            '<ul>'+
                    '<li><p>财务报账种类</p>'+
                    '<ul>'+
                    '<li>购买电脑等器材的费用；</li>'+
                    '<li>期刊版面费；</li>'+
                    '<li>会议注册费；</li>'+
                    '<li>差旅费；</li>'+
                    '<li>学术交流所需费用等。</li>'+
                    
                    '</ul>'+
                    '</li>'+
                    
                    '</ul>'+
                    '<ul>'+
                    '<li><p>财务报账流程</p>'+
                    '<ul>'+
                    '<li>第一步：将需要报账的具体种类及金额罗列清楚，并发给导师；</li>'+
                    '<li>第二步：将准备报销的所有发票贴在一张A4纸上（可使用固体胶或胶水）；</li>'+
                    '<li>第三步：由导师在学校财务网站上申请报销，导出报销单；</li>'+
                    '<li>第四步：报销单需要导师、担保人、经办人签字，最后找李儒胜主任（办公室在信息楼326）盖章；</li>'+
                    '<li>第五步：将签字盖章后的报销单和贴好的发票，一起送到东区行政楼一楼的财务大厅（注意财务处的工作时间，以往的规定为：每周四下午不工作，每个月最后一个工作日不收单）。</li>'+
                    
                    '</ul>'+
                    '</li>'+
                    
                    '</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：其他-文体活动
	$(".wthd").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 其他 > 文体活动");
		//!编辑内容
		appendIframe=
		'<p>&emsp;&emsp;为了增强小组凝聚力、丰富小组业余生活，小组购买了各种运动器材，包括乒乓球拍、羽毛球拍、网球拍、排球、足球和篮球，鼓励小组成员加强锻炼，放松心情。</p>'+
		'<p>&emsp;&emsp;每学期组织1~2次户外活动，包括但不限于桌游、烧烤，小组成员也可以提出活动意见和建议。</p>'+'<br>'+
		"<figure><table table width=100% border='1'>"+
		'<thead>'+
		"<tr><th style='text-align:center;' height=50px>运动器材</th><th style='text-align:center;' >乒乓球拍</th><th style='text-align:center;' >羽毛球拍</th><th style='text-align:center;' >网球拍</th><th style='text-align:center;' >排球</th><th style='text-align:center;' >足球</th><th style='text-align:center;' >篮球</th></tr></thead>"+
		"<tbody><tr><td style='text-align:center;' height=50px>数量/个</td><td style='text-align:center;' >4</td><td style='text-align:center;' >2</td><td style='text-align:center;' >2</td><td style='text-align:center;' >1</td><td style='text-align:center;' >1</td><td style='text-align:center;' >1</td></tr></tbody>"+
		'</table></figure>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//学习手册：实验室记录-考勤与加班
	$(".jbkq").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 实验室管理 > 实验室纪律 > 考勤与加班");
		//!编辑内容
		appendIframe=
		'<p>&emsp;&emsp;在工作日，学生须在早上6:00-8:35和下午1:00-2:30进行出勤打卡（若生病或有其他特殊情况，可向研究所打卡考勤统计负责人请假）。此外，研究所要求学生每星期加班时长不得低于10小时。若无故缺勤次数过多、加班时长过短，在研究所学期总结大会中会被通报批评，甚至会影响毕业。实验室考勤的具体内容与数据请进入<strong>“实验室管理 > 实验室考勤”</strong>中查看</p>'+
		'<ul>'+
		'<li><p><strong>日常考勤签到时间表</strong></p>'+
		"<div align='center'> <img src='images/image_sm/日常考勤签到时间.png' width=70%></div>"+
		'<strong>（注：日常考勤无需签退）</strong>'+
		'</li>'+
		'<li><p><strong>加班打卡时间安排</strong> </p>'+
		"<div align='center'> <img src='images/image_sm/加班打卡时间安排.png' width='70%'></div>"+
		'<strong>（注：晚上/周末的加班出勤必须在上表的加班时间段内签到和签退，否则不计入加班时间）</strong>'+
		'</li>'+
		
		'</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-两周小结
	$(".twoweek").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 实验室管理 > 实验室纪律 > 两周小结");
		//!编辑内容
		appendIframe=
		"<p>&emsp;&emsp;研究所要求学生每两个星期提交两周小结，每半年提交半年总结与计划表，每一年提交全年总结与计划表，电子文件命名要包含日期，并按要求发邮件至<a href='mailto:zdhreport@163.com' target='_blank' class='url'>zdhreport@163.com</a>（李长河教授学生），同时抄送给李长河导师与曾三友导师<a href='mailto:lichanghe@cug.edu.cn' target='_blank' class='url'>lichanghe@cug.edu.cn</a>，<a href='mailto:sanyouzeng@gmail.com' target='_blank' class='url'>sanyouzeng@gmail.com</a>）。</p>"
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-助研考核
	$(".zykh").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 实验室管理 > 实验室纪律 > 助研考核");
		//!编辑内容
		appendIframe='<p>&emsp;&emsp;助研补助根据科研和工作情况进行发放。以月度考核方式发放的助研补助，<strong>需要在每个月的10号之前在系统提交考核总结报告</strong>，并告知老师进行考核验收，否则将无法发放。所有参与助研同学必须在学期末提交学期考核报告。</p>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-研讨会
	$(".yth").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： > 实验室管理 > 实验室纪律 > 研讨会");
		//!编辑内容
		appendIframe='<p>&emsp;&emsp;实验室每周三晚19：00在信息楼718会议室开展一次组内研讨会，需本人现场纸质签到，因事不能参加研讨会，需提前向彭劢请假。每次研讨会由2名同学进行汇报，按照规定好的顺序轮流汇报，若有<strong>开题答辩、中期答辩、毕业答辩、文献综述等</strong>大型汇报，需要在组内进行一次预汇报，联系彭劢进行顺序调换。</p>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室记录-实验室管理制度
	$(".glzd").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 实验室管理 > 实验室纪律 > 实验室管理制度");
		//!编辑内容
		appendIframe=
		'<p>&emsp;&emsp;实验室是教学科研的重要基地，实验人员应严格掌握，认真执行本室相关安全制度、计算机管理制度等相关要求，具体要求如下：</p>'+
		"<ul class='disciplines'>"+
		'<li>凡进入实验室工作、学习的人员，必须遵守实验室有关规章制度，不得擅自动用实验室的仪器设备和安全设施。 </li>'+
		'<li>实验室内要经常保持清洁卫生，不得乱扔纸屑等杂物，每天上下班应进行清扫整理，<strong>垃圾桶内的垃圾要每天清空</strong>，不得留垃圾过夜。</li>'+
		'<li><strong>实验矮柜贴好标签说明，实验室应井然有序，物品摆放整齐、合理，并有固定位置</strong>。</li>'+
		'<li><strong>严禁在实验室吸烟、进餐、会客、喧哗，或作为娱乐场所</strong>，不得存放实验室外个人用品、仪器等。</li>'+
		'<li>使用计算机时要严格按照操作规程，避免因人为操作失误造成损坏。严禁随意拆卸，当计算机发生故障无法排除时，报请实验室管理人员检修。实验室购置的计算机一律不得私自借给外单位人员使用。  </li>'+
		'<li>通过互联网进行的数据传输、邮件通讯或新闻发布，不得违反国家对互联网信息安全的有关条例和规定，严格执行安全保密制度，不得利用互联网从事危害国家安全，泄露国家秘密等违法犯罪活动，不得制作，查阅，复制和传布妨碍社会治安的信息和淫秽色情等信息。</li>'+
		'<li>为确保实验室科研环境、实验数据和科研资料的安全，<strong>实验室管理员应对服务器数据每半年备份一次</strong>。</li>'+
		'<li>不许在实验室用互联网做与科研工作无关的事情，如玩游戏、下载娱乐性信息等。</li>'+
		'<li>离开实验室前，尤其节假日应认真检查水、电、气、汽和正在使用的仪器设备，关好门窗方可离去。 </li>'+
		'<li>实验室负责人督促本制度严格执行，出现问题应立即处理、上报。</li>'+
		
		'</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//投稿要求-署名
	$(".smdw").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 投稿要求 > 论文署名和单位");
		//!编辑内容
		appendIframe=
		'<p>&emsp;&emsp;撰写学术论文时，需要添加作者的单位和资助基金，如下给出了相关单位和基金。</p>'+
		'<ul>'+
		'<li><p><strong>署名</strong></p>'+
		'</ul>'+
		"<div align='center'>"+
		"<figure><table border='1px' width=60%>"+
		'<thead>'+
		"<tr height='40px' ><th>姓名</th><th>邮箱</th></tr></thead>"+
		"<tbody><tr height='40px' ><td>Changhe Li</td><td><a href='mailto:changhe.lw@gmail.com' target='_blank' class='url'>changhe.lw@gmail.com</a></td></tr><tr height='40px'><td>Sanyou Zeng</td><td><a href='mailto:sanyouzeng@gmail.com' target='_blank' class='url'>sanyouzeng@gmail.com</a></td></tr></tbody>"+
		'</table></figure>'+
		"</div>"+
		'<ul>'+
		'<li><p><strong>作者单位</strong></p>'+
		'&emsp;&emsp;本小组成员的单位主要含有以下三个，其中自动化学院学生发表论文应包含前两个单位，机电学院学生发表论文应包含第三个单位。'+
		'<ul>'+'<strong>'+
		'<li>中国地质大学（武汉）自动化学院（School of Automation, China University of Geosciences, Wuhan 430074, China）</li>'+
		'<li>复杂系统先进控制与智能自动化湖北省重点实验室（Hubei Key Laboratory of Advanced Control and Intelligent Automation for Complex Systems, Wuhan 430074, China）</li>'+
		'<li>中国地质大学（武汉）机械与电子信息学院（School of Mechanical Engineering and Electronic Information, China University of Geosciences, Wuhan 430074, China）</li>'+'</strong>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//投稿要求-资金
	$(".zzjj").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 学习手册 > 实验室管理 > 投稿要求 > 资助基金");
		//!编辑内容
		appendIframe=
		'<ul>'+
		'<li><p><strong>资助基金</strong></p></li>'+
		
		'</ul>'+
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr height='40px'><th>基金</th><th>编号</th></tr></thead>"+
		"<tbody><tr height='40px'><td>国家自然科学基金 （the National Natural Science Foundation of China）</td><td>61673355,62076226</td></tr><tr height='40px'><td>中央高校基础研究基金（the Fundamental Research Funds for the Central Universities, China University of Geosciences (Wuhan)）</td><td>CUGGC02</td></tr><tr height='40px'><td>湖北省自然科学基金（the Hubei Provincial Natural Science Foundation of China）</td><td>2015CFA010</td></tr><tr height='40px'><td>111 工程（the 111 project）</td><td>B17040</td></tr></tbody>"+
		'</table></figure>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
});

/*$(document).ready(function(){
  $("#menu").children("ul").get;
});*/