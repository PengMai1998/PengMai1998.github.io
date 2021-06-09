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
theoreticalstudy[2] = "动态单目标优化";
theoreticalstudy[3] = "昂贵优化";
theoreticalstudy[4] = "动态多目标优化";
theoreticalstudy[5] = "动态约束优化";
theoreticalstudy[6] = "鲁棒优化";

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
					if(college[weekIndex] == '专业学习要求'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;掌握较扎实的自然科学基础与较好的人文社会科学基础与<strong>外语应用能力</strong>；掌握<strong>学科专业领域较宽的基础理论知识和基本技能</strong>，包括数学、物理学、电路理论、电子技术、控制理论、计算机技术、过程控制、运动控制、信息处理等；了解<strong>学科前沿与发展趋势</strong>，能进行相关控制系统的设计、分析、开发和运行管理；在学科领域内<strong>具备一定的科学研究、科技开发、组织管理能力，具有较强的工作适应能力</strong>；具有较强的自学能力、创新意识与较高的综合素质。</p>'+
						'<p>&emsp;&emsp;除修满学科必修学分外，需要修够<strong>专业选修课学分15分、通选课学分12分、创新创业学分5分</strong>。具体需要学习内容请参考学院下发的资料<strong>《自动化专业培养方案》、《测控技术与仪器专业培养方案》</strong>。</p>'+
						'</ul>'+
						'<ul>'+
						'<p>&emsp;&emsp;在导师指导下于第 1 学期内确定学位论文研究方向，在查阅大量文献资料的基础上于<strong>第 2 学期完成</strong>研究方向文献综述报告，并进行公开报告。引用的<strong>参考文献资料应 60 本（篇）以上</strong>，其中外文文献资料至少应在三分之一以上。</p>'+
						'</ul>'
					}

					else if(college[weekIndex] == '科研实践活动'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;本科生应积极参加科研实践活动与科研竞赛。积极参加科研实践活动与科研竞赛有利于提升学生的实践动手能力，加深对学科知识的理解，提高专业素养；同时，参加科研实践活动与科研竞赛将有利于本科生阶段的评奖评优（如奖学金、荣誉评优等）。</p>'+
						'<p>&emsp;&emsp;我院组织参加的科研实践活动有<strong>“大学生基础科研训练计划”、”大学生创新创业训练项目”</strong>等，经学生自主申报、学院推荐、学校组织专家评审立项。建议小组内同学积极联系组内老师，与老师沟通，由老师提供相关选题，经老师指导，完成相应课题。<strong>建议本科阶段完成1-2项科研训练计划。</strong></p>'+
						'<p>&emsp;&emsp;自动化专业与测控技术与仪器专业能够参加的科研竞赛相似，科研竞赛获奖对保研（保研加分、保研面试）、找工作有很大的帮助。本科阶段可以参加的科研竞赛有智能车竞赛、电子设计竞赛、数学建模竞赛、机器人竞赛等，按照等级可分为校级、省级、国家级、国际级。本科生可先参加相关校级竞赛（风磁电车竞赛、校级电子设计竞赛、校级数学建模选拔）进行练手，打下基础，再参加相关省/国家级竞赛（全国大学生电子设计竞赛、全国大学生数学建模大赛、全国大学生智能车竞赛）提高自身实践能力，争得荣誉。<strong>建议本科阶段完成2-3项国家级以上的科研竞赛活动。</strong></p>'+
						'</ul>'
					}

					else if(college[weekIndex] == '毕业设计'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;本科生的最后培养环节为毕业设计，一般在大四学年进行。毕业设计的流程为：<strong>选题-开题-中期检查-成果验收-毕业答辩</strong>。一般在12月前由指导老师提供相关方向与建议，完成选题；次年1月份进行开题，需要按照相关格式撰写开题报告，制作开题答辩ppt，进行五分钟的开题答辩；终期答辩一般定在4月，需要制作终期答辩ppt，进行五分钟的中期答辩；最后需要进行成果验收与毕业答辩，按照毕业论文的格式要求进行毕业论文的撰写、查重，只有查重通过的论文才能进行毕业答辩。</p>'+
						'<p>&emsp;&emsp;<strong>本小组内同学可提前开展毕业设计相关工作，由小组内老师在大四前提供相关课题，作为本科生学习阶段的一个实践课题</strong>，该实践课题可参加大学生创新创业训练计划等，在大学前三年的学习积累下，慢慢深入了解该课题，由浅入深，最终可更好地完成毕业设计的相关内容，产生更多的学术成果。</p>'+
						'<p>本小组的研究课题详见《附件6-1 本科毕设题目》。毕业论文的撰写可参考《附件6-2 优秀本科毕业论文》。</p>'+
						'</ul>'

					}
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

					if(master[weekIndex] == '研究方向文献综述'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;根据学校对研究生的培养要求，自动化学院制定了具体的培养环节和要求，包括课程必修学分、研究课题应取得的成果等，以下只列出了培养环节中关键节点的部分要求，具体要求参考学院下发的<strong>《中国地质大学自动化学院研究生手册》</strong>，<strong>请小组成员认真阅读上述手册，以免错过关键培养环节，或是缺少毕业必要条件</strong>。</p>'+
						'</ul>'+
						'<ul>'+
						'<p>&emsp;&emsp;在导师指导下于第 1 学期内确定学位论文研究方向，在查阅大量文献资料的基础上于<strong>第 2 学期完成</strong>研究方向文献综述报告，并进行公开报告。引用的<strong>参考文献资料应 60 本（篇）以上</strong>，其中外文文献资料至少应在三分之一以上。</p>'+
						'</ul>'
					}

					else if(master[weekIndex] == '开题报告'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;按照学校有关文件规定，在第 3 学期进行，<strong>并提前1个星期在系统里填报开题信息，否则需要重新开题</strong>。开题报告选题应具有一定的学术意义或应用价值，或对国家经济、教育、文化和社会发展具有一定实用价值。引用的<strong>参考文献资料应 60 本（篇）以上</strong>，其中外文文献资料至少应在三分之一以上。</p>'+
						'</ul>'
					}

					else if(master[weekIndex] == '学术活动'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;<strong>完成 2 次学术报告</strong>（须含1次研究生科技报告会），<strong>至少参加 1 次及以上国内外学术交流</strong>（如短期出国访学、参加国家级的数学建模、参加国家级的电子设计比赛等），至少<strong>参加 20 次学院组织的学术讲座</strong>。</p>'
						'</ul>'

					}
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
					if(doctor[weekIndex] == '研究方向文献综述'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;公开报告，<strong>完成 2 个不同研究方向</strong>的文献综述报告；每次引用的参考文献资料应<strong>每次综述均120 本（篇）以上</strong>，其中外文文献资料至少应在三分之一以上。</p>'+
						'</ul>'
					}

					else if(doctor[weekIndex] == '开题报告'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;按照学校有关文件规定执行，<strong>提前1个星期在系统里填报开题信息，否则需要重新开题</strong>。<strong>直博生、硕博连读生</strong>博士学位论文开题原则上应在进入研究生学习的<strong>第 3 学年</strong>进行；<strong>提前攻博生、申请考核生和统考生</strong>博士学位论文开题原则上应在进入博士学习阶段的<strong>第 3 学期</strong>进行。引用的<strong>参考文献资料应 120 本（篇）以上</strong>，其中外文文献资料至少应在三分之一以上。</p>'+
						'</ul>'
					}

					else if(doctor[weekIndex] == '资格考核与中期考核'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;按照学校有关文件规定执行。<strong>直博生、硕博连读生</strong>在<strong>第 3 学期进行</strong>资格考核；<strong>提前攻博生、申请考核生、统考生</strong>在博士阶段<strong>第 3 学期</strong>进行中期考核。</p>'+
						'</ul>'
					}

					else if(doctor[weekIndex] == '学术活动'){
						appendIframe=
						'<ul>'+
						'<p>&emsp;&emsp;<strong>完成 3 次学术报告</strong>（须含1次研究生科技报告会），并<strong>至少参加国际学术交流活动 1 次</strong>，鼓励博士研究生出国进修、学术交流、联合培养。提前攻博生、申请考核生和统考生至少参加 30次学院组织的学术讲座，直博生、硕博连读生至少<strong>参加 50 次学院组织的学术讲座</strong>。</p>'+
						'</ul>'
					}
					//!结束编辑内容
					$(".article_content").append(appendIframe);
			}
		}
	});
	
//在读研究生编辑
	$(".postgraduatedoctor").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 在读博士生");
		//!编辑内容
		appendIframe=
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr height='40px'><th>年级</th><th>名字</th><th>硕士/博士</th><th>QQ号码</th><th>研究方向</th></tr></thead>"+
		'<tbody><tr><td>2017级</td><td>王俊臣</td><td>博士</td><td>168412262</td><td>基于吸引域搜索潜力预测的探索与开发平衡方法</td></tr><tr><td>2017级</td><td>刘永峰</td><td>学硕</td><td>531817981</td><td>演化计算在电子游戏中的应用</td></tr><tr><td>2018级</td><td>刁义雅</td><td>博士</td><td>744862398</td><td>动态及不确定环境下鲁棒优化</td></tr><tr><td>2018级</td><td>谭青山</td><td>博士</td><td>809637807</td><td>动态多目标优化问题建模与算法设计</td></tr><tr><td>2018级</td><td>夏海</td><td>学硕</td><td>767940087</td><td>基于强化学习的演化算法</td></tr><tr><td>2018级</td><td>吴小芳</td><td>学硕</td><td>208854640</td><td>基于空间划分的多目标演化算法</td></tr><tr><td>2019级</td><td>陈宝剑</td><td>学硕</td><td>2545415252</td><td>动态车辆路径规划</td></tr><tr><td>2019级</td><td>杨瑞</td><td>学硕</td><td>2280920465</td><td>供水管网污染源定位技术</td></tr><tr><td>2019级</td><td>王宽</td><td>专硕</td><td>872376093</td><td>基于演化计算的神经网络结构搜索</td></tr><tr><td>2020级</td><td>彭劢</td><td>博士</td><td>1153776149</td><td>约束优化</td></tr><tr><td>2020级</td><td>白春辉</td><td>学硕</td><td>799568773</td><td>演化计算电子游戏中的应用</td></tr><tr><td>2020级</td><td>蒋思懿</td><td>专硕</td><td>724762708</td><td>待定</td></tr><tr><td>2020级</td><td>马友腾</td><td>专硕</td><td>1326675196</td><td>待定</td></tr><tr><td>2020级</td><td>戴家欣</td><td>专硕</td><td>421206233</td><td>待定</td></tr><tr><td>2015级</td><td>焦儒旺</td><td>博士</td><td>544945252</td><td>约束优化</td></tr><tr><td>2018级</td><td>许庆辉</td><td>专硕</td><td>861922085</td><td>多目标优化及天线阵列设计应用</td></tr><tr><td>2019级</td><td>谢海华</td><td>博士</td><td>1332729941</td><td>雷达信号处理</td></tr><tr><td>2019级</td><td>呼彩娥</td><td>博士</td><td>1943327486</td><td>昂贵优化</td></tr><tr><td>2019级</td><td>程伟鹏</td><td>专硕</td><td>954839440</td><td>多目标优化及天线阵列设计应用</td></tr><tr><td>2019级</td><td>杨秀晴</td><td>学硕</td><td>596994520</td><td>雷达信号处理、深度学习</td></tr><tr><td>2020级</td><td>胡刘磊</td><td>学硕</td><td>306282137</td><td>雷达信号处理</td></tr><tr><td>2020级</td><td>邹汉华</td><td>学硕</td><td>1134230502</td><td>雷达信号处理</td></tr><tr><td>2020级</td><td>何珺</td><td>学硕</td><td>2595364703</td><td>天线阵列优化</td></tr><tr><td>2020级</td><td>吴佳怡</td><td>学硕</td><td>820170882</td><td>雷达信号处理</td></tr><tr><td>2020级</td><td>王洋</td><td>学硕</td><td>1224959238</td><td>昂贵天线智能优化</td></tr></tbody>'+
		'</table></figure>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);

	});
	
//在读硕士编辑
	$(".postgraduatemaster").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 在读硕士生");
		//!编辑内容
		appendIframe=
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr height='40px'><th>年级</th><th>名字</th><th>硕士/博士</th><th>QQ号码</th><th>研究方向</th></tr></thead>"+
		'<tbody><tr><td>2017级</td><td>王俊臣</td><td>博士</td><td>168412262</td><td>基于吸引域搜索潜力预测的探索与开发平衡方法</td></tr><tr><td>2017级</td><td>刘永峰</td><td>学硕</td><td>531817981</td><td>演化计算在电子游戏中的应用</td></tr><tr><td>2018级</td><td>刁义雅</td><td>博士</td><td>744862398</td><td>动态及不确定环境下鲁棒优化</td></tr><tr><td>2018级</td><td>谭青山</td><td>博士</td><td>809637807</td><td>动态多目标优化问题建模与算法设计</td></tr><tr><td>2018级</td><td>夏海</td><td>学硕</td><td>767940087</td><td>基于强化学习的演化算法</td></tr><tr><td>2018级</td><td>吴小芳</td><td>学硕</td><td>208854640</td><td>基于空间划分的多目标演化算法</td></tr><tr><td>2019级</td><td>陈宝剑</td><td>学硕</td><td>2545415252</td><td>动态车辆路径规划</td></tr><tr><td>2019级</td><td>杨瑞</td><td>学硕</td><td>2280920465</td><td>供水管网污染源定位技术</td></tr><tr><td>2019级</td><td>王宽</td><td>专硕</td><td>872376093</td><td>基于演化计算的神经网络结构搜索</td></tr><tr><td>2020级</td><td>彭劢</td><td>博士</td><td>1153776149</td><td>约束优化</td></tr><tr><td>2020级</td><td>白春辉</td><td>学硕</td><td>799568773</td><td>演化计算电子游戏中的应用</td></tr><tr><td>2020级</td><td>蒋思懿</td><td>专硕</td><td>724762708</td><td>待定</td></tr><tr><td>2020级</td><td>马友腾</td><td>专硕</td><td>1326675196</td><td>待定</td></tr><tr><td>2020级</td><td>戴家欣</td><td>专硕</td><td>421206233</td><td>待定</td></tr><tr><td>2015级</td><td>焦儒旺</td><td>博士</td><td>544945252</td><td>约束优化</td></tr><tr><td>2018级</td><td>许庆辉</td><td>专硕</td><td>861922085</td><td>多目标优化及天线阵列设计应用</td></tr><tr><td>2019级</td><td>谢海华</td><td>博士</td><td>1332729941</td><td>雷达信号处理</td></tr><tr><td>2019级</td><td>呼彩娥</td><td>博士</td><td>1943327486</td><td>昂贵优化</td></tr><tr><td>2019级</td><td>程伟鹏</td><td>专硕</td><td>954839440</td><td>多目标优化及天线阵列设计应用</td></tr><tr><td>2019级</td><td>杨秀晴</td><td>学硕</td><td>596994520</td><td>雷达信号处理、深度学习</td></tr><tr><td>2020级</td><td>胡刘磊</td><td>学硕</td><td>306282137</td><td>雷达信号处理</td></tr><tr><td>2020级</td><td>邹汉华</td><td>学硕</td><td>1134230502</td><td>雷达信号处理</td></tr><tr><td>2020级</td><td>何珺</td><td>学硕</td><td>2595364703</td><td>天线阵列优化</td></tr><tr><td>2020级</td><td>吴佳怡</td><td>学硕</td><td>820170882</td><td>雷达信号处理</td></tr><tr><td>2020级</td><td>王洋</td><td>学硕</td><td>1224959238</td><td>昂贵天线智能优化</td></tr></tbody>'+
		'</table></figure>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);

	});
	
//毕业博士编辑
	$(".graduateddoctor").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 毕业博士生");
		//!编辑内容
		appendIframe=
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr height='40px'><th>届</th><th style='text-align:left;' >名字</th><th>博士/硕士</th><th>QQ号码</th><th>学位论文题目</th><th>现工作单位</th></tr></thead>"+
		"<tbody><tr><td>2015届</td><td style='text-align:left;' >洪宗敏</td><td>专硕</td><td>283341330</td><td>一种动态调整惯性权重的粒子群算法</td><td>海伦司企业管理有限公司</td></tr><tr><td>2016届</td><td style='text-align:left;' >夏勇</td><td>学硕</td><td>455399810</td><td>基于统计学习的求解旅行商问题算法研究</td><td>上海银联</td></tr><tr><td>2016届</td><td style='text-align:left;' >阚星航</td><td>专硕</td><td>874487547</td><td>基于移民的蚁群优化算法求解动态旅行商问题</td><td>上海微创医疗器械有限公司</td></tr><tr><td>2018届</td><td style='text-align:left;' >黄祖传</td><td>专硕</td><td>838957471</td><td>基于解空间分解的多模优化算法</td><td>中国电建集团昆明勘测设计研究院有限公司（技术管理岗）</td></tr><tr><td>2019届</td><td style='text-align:left;' >周力</td><td>专硕</td><td>441837060</td><td>基于自适应多种群方法的供水管网污染源定位技术</td><td>趋势科技（南京）</td></tr><tr><td>2020届</td><td style='text-align:left;' >肖龙</td><td>专硕</td><td>917003976</td><td>实时路况下多目标车辆路径规划问题建模与优化</td><td>联友科技（广州）</td></tr><tr><td>2020届</td><td style='text-align:left;' >章锐</td><td>学硕</td><td>1295772386</td><td>多目标演化优化算法优化设计天线及软件开发</td><td>中国电信云计算分公司</td></tr></tbody>"+
		'</table></figure>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//毕业硕士编辑
	$(".graduatedmaster").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 在读研究生 > 毕业硕士生");
		//!编辑内容
		appendIframe=
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr height='40px'><th>届</th><th style='text-align:left;' >名字</th><th>博士/硕士</th><th>QQ号码</th><th>学位论文题目</th><th>现工作单位</th></tr></thead>"+
		"<tbody><tr><td>2015届</td><td style='text-align:left;' >洪宗敏</td><td>专硕</td><td>283341330</td><td>一种动态调整惯性权重的粒子群算法</td><td>海伦司企业管理有限公司</td></tr><tr><td>2016届</td><td style='text-align:left;' >夏勇</td><td>学硕</td><td>455399810</td><td>基于统计学习的求解旅行商问题算法研究</td><td>上海银联</td></tr><tr><td>2016届</td><td style='text-align:left;' >阚星航</td><td>专硕</td><td>874487547</td><td>基于移民的蚁群优化算法求解动态旅行商问题</td><td>上海微创医疗器械有限公司</td></tr><tr><td>2018届</td><td style='text-align:left;' >黄祖传</td><td>专硕</td><td>838957471</td><td>基于解空间分解的多模优化算法</td><td>中国电建集团昆明勘测设计研究院有限公司（技术管理岗）</td></tr><tr><td>2019届</td><td style='text-align:left;' >周力</td><td>专硕</td><td>441837060</td><td>基于自适应多种群方法的供水管网污染源定位技术</td><td>趋势科技（南京）</td></tr><tr><td>2020届</td><td style='text-align:left;' >肖龙</td><td>专硕</td><td>917003976</td><td>实时路况下多目标车辆路径规划问题建模与优化</td><td>联友科技（广州）</td></tr><tr><td>2020届</td><td style='text-align:left;' >章锐</td><td>学硕</td><td>1295772386</td><td>多目标演化优化算法优化设计天线及软件开发</td><td>中国电信云计算分公司</td></tr></tbody>"+
		'</table></figure>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//研究生获奖编辑
	$(".rewards").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 科研与竞技 > 研究生获奖情况");
		//!编辑内容
		appendIframe=
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr height='40px'><th><strong>序号</strong></th><th><strong>获奖人</strong></th><th><strong>时间</strong></th><th><strong>获奖名称</strong></th><th><strong>备注</strong></th></tr></thead>"+
		'<tbody><tr><td>1</td><td>王俊臣</td><td>2018</td><td>2018年全国研究生数学建模</td><td>三等奖</td></tr><tr><td>2</td><td>焦儒旺</td><td>2018</td><td>博士国家奖学金</td><td>&nbsp;</td></tr><tr><td>4</td><td>焦儒旺</td><td>2018</td><td>湖南省中南大学人工智能国际暑期学校</td><td>一等奖</td></tr></tbody>'+
		'</table></figure>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//研究生项目申请编辑
	$(".subjects").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 人才培养 > 科研与竞技 > 研究生项目申请");
		//!编辑内容
		appendIframe=
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr><th><strong>序号</strong></th><th>申请人</th><th><strong>项目名称</strong></th><th>时间</th><th><strong>备注</strong></th></tr></thead>"+
		'<tbody><tr><td>1</td><td>焦儒旺</td><td>基于动态多目标技术的昂贵算法研究及其在耗时仿真天线中的应用</td><td>2017.10-2018.10</td><td>中国地质大学（武汉）优秀博士创新基金</td></tr><tr><td>2</td><td>焦儒旺</td><td>约束多目标演化算法研究及其天线应用</td><td>2019.06-2021.05</td><td>中国地质大学（武汉）优秀博士创新基金</td></tr><tr><td>3</td><td>焦儒旺</td><td>数据驱动的超宽带天线智能优化技术</td><td>2019.12-2021.12</td><td>中国地质大学（武汉）大学生自主创新资助计划领航项目</td></tr></tbody>'+
		'</table></figure>'
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
	if(theoreticalstudy[weekIndex] == '全局优化'){
		appendIframe=
		'<p><strong>（1）全局优化</strong></p>'+
		'<p>&emsp;&emsp;全局优化是相对于局部优化的一个概念，强调在有多个局部最优的问题中找到全局最优。全局最优的关键难点是探索与开发的平衡。开发是在当前已发现的极值点附近搜索，目的是快速收敛到极值点；而探索是在搜索不充分的区域进行搜索，目的是避免算法陷入局部最优。探索与开发互为补充，在全局优化问题中二者缺一不可。</p>'+
		'<p>&emsp;&emsp;然而，演化算法领域在全局优化问题研究中对于探索与开发的平衡大多只关注种群的多样性和收敛性，缺少对搜索空间中算法搜索历史和问题结构特征的学习。具体表现为：1）对于各个极值点的开发难以自适应调节算法行为，个体难以自学习最优搜索策略；2）无法避免探索的盲目性，既牺牲了对极值点的开发效率，难以找到全局最优所在吸引域。</p>'+
		'<p>&emsp;&emsp; 本小组在该研究方向的代表性成果如下 ：</p>'+
		'<ul>'+
		'<li>Changhe Li, Shengxiang Yang and Trung Thanh Nguyen. A Self-learning Particle Swarm Optimizer for Global Optimization Problems. IEEE Transactions on Systems, Man,  and Cybernetics Part B: Cybernetics , 2012, 42(3): 627-646.</li>'+
		
		'</ul>'
	}
	
	else if(theoreticalstudy[weekIndex] == '约束优化'){
		appendIframe=
		'<p><strong>（2）约束优化</strong> </p>'+
		'<p>&emsp;&emsp;约束优化问题是优化问题的分支。它是在一系列约束条件下，寻找一组参数值，使某个或某一组函数的目标值达到最优。其中约束条件既可以是等式约束也可以是不等式约束。寻找这一组参数值的关键可是：满足约束条件和目标值要达到最优。按照约束条件的数学特性，还可以分为线性/非线性约束条件。由于约束条件的存在，导致在决策变量的搜索空间中可行域的搜索范围进一步缩小。从无约束优化到约束优化，原本单一的优化目标必须同时考虑优化目标和约束两个方面，而有效地无约束优化方法处理约束优化问题时却是一筹莫展。</p>'+
		'<p>&emsp;&emsp;基于演化算法的约束优化技术主要存在两个难点：1）由于各种约束条件的限制，搜索空间中的可行域变得离散且不规则，且常常存在可行域离散、多模态、等式约束和非线性等挑战。2）一个约束优化问题的最优解常常位于约束边界或靠近约束边界上，理想的搜索应该从可行域与非可行域同时进行，其本质也即如何处理可行解与非可行解的关系。</p>'+
		'<p>&emsp;&emsp;本小组在该研究方向的代表性成果如下 ：</p>'+
		'<ul>'+
		'<li>Sanyou Zeng, Ruwang Jiao, Changhe Li, and Li, Xi and Alkasassbeh, Jawdat S. A General Framework of Dynamic Constrained Multiobjective Evolutionary Algorithms for Constrained Optimization. IEEE Transactions on Cybernetics, 2017, 47(9): 2678-2688.</li>'+
		'<li>Ruwang Jiao, Sanyou Zeng, Changhe Li. A Feasible-Ratio Control Technique for Constrained Optimization. Information Sciences, 2019, 502C: 201-217.</li>'+
		
		'</ul>'+
		'<ul>'+
		'<li>Ruwang Jiao, Sanyou Zeng, Changhe Li. Handling Constrained Many-objective Optimization Problems via Problem Transformation. IEEE Transactions on Cybernetics, 2020.</li>'+
		
		'</ul>'
	}

	else if(theoreticalstudy[weekIndex] == '动态单目标优化'){
		appendIframe=
		'<p><strong>（3）动态单目标</strong></p>'+
		'<p>&emsp;&emsp;许多现实中的优化问题具有一定的动态变化特性，比如气候的变化，股市的波动，交通路网的实时变化等等。这些优化问题的动态变化具有不同的模式与特点，比如变化频率的不同；变化强度大小的不同；变化模式的不同比如周期变化、线性变化、随机变化等等。对于单个目标在动态变化环境中的优化问题，其难度既包括单目标优化问题本身的问题特性如形状的不规则性、多模特性、局部最优特性等，还包括问题变化的不确定等因素。</p>'+
		'<p>&emsp;&emsp;因此，在利用基于种群的启发式搜索算法来求解动态单目标优化问题，需要研究以下几点：1）如何保证种群在变化发生的时候具有一定的多样性来响应动态问题的变化；2）如何提高种群在搜索过程中的收敛速度，并且仍然具有一定的探索能力，以便于在有限时间内收敛到尽可能好的位置；3）在动态环境下，如何更加精细化地进行计算资源的分配，以便于高效地进行种群多样性和收敛性的分配。</p>'+
		'<p>&emsp;&emsp;本小组在该研究方向的代表性成果如下 ：</p>'+
		'<ul>'+
		'<li>Shengxiang Yang and Changhe Li. A Clustering Particle Swarm Optimizer for Locating and Tracking Multiple Optima in Dynamic Environments. IEEE Transactions on Evolutionary Computation, 2010,14(6): 959-974.</li>'+
		'<li>Changhe Li and Shengxiang Yang. A General Framework of Multi-population Methods with Clustering in Undetectable Dynamic Environments. IEEE Transactions on Evolutionary Computation, 2012,16(4):556-577.</li>'+
		'<li>Changhe Li , Ming Yang and Shengxiang Yang. An Adaptive Multi-Swarm Optimizer for Dynamic Optimization Problems. Evolutionary Computation,  MIT press, 2014, 22(4): 559-594.</li>'+
		'<li>Changhe Li, Trung Thanh Nguyen, Ming Yang, Shengxiang Yang and Sanyou Zeng. Multi-population Methods in Unconstrained Continuous Dynamic Environments: The Challenges. Information Sciences, Elsevier, 2015, 296(296): 95-118.</li>'+
		
		'</ul>'
	}
	
	else if(theoreticalstudy[weekIndex] == '昂贵优化'){
		appendIframe=
		'<p><strong>（4）昂贵优化</strong></p>'+
		'<p>&emsp;&emsp;演化算法在求解优化问题中通常需要对候选解进行大量的目标/约束函数的评估和比较才能获得可接受的最优解。然而对于一些实际的复杂优化问题，仅一次目标/约束函数的评估就需消耗大量时间代价或物理代价；在极端条件下，这些目标/约束函数不存在显示的表达式。这样的优化问题被称为昂贵优化问题。对于这些问题的优化求解称为昂贵优化。</p>'+
		'<p>&emsp;&emsp;模型辅助的演化算法对于求解昂贵优化问题具有潜在的优势。然而，仍然存在一些挑战，具体表现在：1）模型的选择；很少有理论指导如何去选择模型，且不同的模型对不同的昂贵优化问题的求解的性能不同；2）训练数据的选择；在选择训练数据时，不同的模型管理策略可以用于训练数据的选择，但是每个策略存在一些局限性；3）训练数据大小的选择：训练数据的大小直接影响到计算代价和模型准确性，这两点存在冲突，需要去平衡。</p>'+
		'<p>&emsp;&emsp;本小组在该研究方向的代表性成果如下 ：</p>'+
		'<ul>'+
		'<li>Ruwang Jiao , Sanyou Zeng, Changhe Li , Yuhong Jiang, Yaochu Jin. A  Complete Expected Improvement Criterion for Gaussian Process Assisted Highly Constrained Expensive Optimization.Information Sciences, 2018, 471: 80-96.</li>'+
		
		'</ul>'
	}
	else if(theoreticalstudy[weekIndex] == '动态多目标优化'){
		appendIframe=
		'<p><strong>（5）动态多目标</strong></p>'+
		'<p>&emsp;&emsp;针对实际优化问题中广泛存在的动态特性和多目标特性，其给算法设计带来的挑战主要体现在如下几点，</p>'+
		'<ul>'+
		'<li>有限的搜索时间导致算法难以收敛以及难以保持搜索到的最优解的均匀性；</li>'+
		'<li>变化的优化环境或问题导致已有的搜索信息过时，搜索资源浪费；</li>'+
		'<li>环境变化的不确定性使得算法设计倾向于随机，降低了搜索效率。</li>'+
		
		'</ul>'+
		'<p>&emsp;&emsp;针对上述关键难点问题主要开展动态多目标优化问题建模和算法研究的工作。优化问题建模旨在构建一个通用、扩展性强、方便调节的测试问题构造框架，用于进行算法性能测试和训练。算法设计主要着眼于同时保持搜索种群多样性和收敛性的策略，并以先进预测方法、数据挖掘技术辅助，提高种群在动态多目标优化问题下的搜索效率。</p>'
		
	}
	else if(theoreticalstudy[weekIndex] == '动态约束优化'){
		appendIframe=
		'<p><strong>（6）动态约束</strong> </p>'+
		'<p>&emsp;&emsp;动态约束优化问题（Dynamic Constraint Optimization Problem,DCOP）具有目标函数变化、约束条件变化或两者同时变化的特性。目标函数变化可能导致全局最优从一个可行域转移到另一个可行域；约束条件变化会引起可行域的形状、结构、占比变化，难点如下：</p>'+
		'<ul>'+
		'<li>动态约束优化算法在解决DCOP时具有一定的困难，如不可行域使得多样性维持策略或多样性引入策略低效、追踪到当前的最优值策略的有效性变低等问题。</li>'+
		'<li>约束处理策略在解决DCOP时具有一定的困难，如约束处理策略因没有合适的工具处理动态性阻止动态优化策略的高效性、因环境变化引起的约束处理策略过时等问题。</li>'+
		
		'</ul>'+
		'<p>&emsp;&emsp;针对上面的一些难点，本课题组采用了多目标的技术来处理约束和多模困难，把约束转化为约束违反值目标函数来处理约束，通过小生境技术增加了一个niche count目标来处理多模困难，并设计了一个动态约束多目标优化演化算法框架。</p>'
		
	}
	
	else if(theoreticalstudy[weekIndex] == '鲁棒优化'){
		appendIframe=
		'<p><strong>（7）鲁棒优化</strong> </p>'+
		'<p>&emsp;&emsp;鲁棒优化问题（Robust optimization, RO）是指在动态及不确定性环境下的优化问题。该问题来源于实际生产，由于生产工艺的限制，生产过程中充满了不确定性因素，如环境中温度、湿度的变化、仪器的生产误差等，如果产品对这些不确定性因素非常敏感，环境的改变会导致产品性能急剧下降，会导致生产效率或生产效益降低。鲁棒优化问题是考虑问题环境的不确定性及动态特性，找到目标值相对较好的解。求解鲁棒优化问题的主要难点如下：</p>'+
		'<ul>'+
		'<li>鲁棒性定义是基于实际工程应用的需求提出的，研究者需要结合具体的生产应用需求，给出一个合理的鲁棒性定义；</li>'+
		'<li>鲁棒优化中存在不确定性导致适应值评估的不准确，演化算法是由适应值驱动，不准确的适应值评估可以会误导算法陷入局部最优，同时由于这个不确定性，导致支配关系的不确定性，基于关系的非劣集合难以获得；</li>'+
		'<li>由于环境的变化，鲁棒最优解会不断变化，演化算法的收敛造成种群多样性缺失，从而导致算法不能有效地追踪变化的最优解；</li>'+
		'<li>鲁棒优化问题要求鲁棒解在时间尺度上保持一定的鲁棒性，但演化算法是基于历史采样进行演化，是比较短视的，过去时刻的鲁棒解在未来时刻不一定能保持鲁棒性，从而要求算法具有一定的前瞻性。</li>'+
		
		'</ul>'
	}
	
	;
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
	if(applicationstudy[weekIndex] == '管网水资源调度与质量检测'){
		appendIframe=			
		'<p><strong>（1）管网水资源调度与质量检测</strong></p>'+
		'<p>&emsp;&emsp;当供水管网某些节点侵入污染物后，污染物会随着水流扩散到整个供水系统中。通过在供水管网中布置水质传感器进行实时监测，当传感器检测到有污染物时，用模拟优化的方法，将搜索到的解模拟出的传感器污染物浓度与真实浓度进行对比，误差最小的认为是最优解。</p>'+
		'<p>&emsp;&emsp;供水管网污染源定位的研究难点主要包括如下几点：</p>'+
		'<ul>'+
		'<li>实时性。当污染事件发生过一段时间后，再通过收集传感器累积监测到的信息进行搜索，会延后发现污染源的时间。并且当污染源为动态时，当前搜索的污染源位置可能是变化前的位置，那么此时的搜索是无效的。算法应当在有传感器监测到污染物时立即开始搜索，并不断使用新数据来更新搜索行为；</li>'+
		'<li>多模性。当污染事件发生时，由于供水管网中的节点众多，结构复杂，当在不同节点注入不同剂量的污染物时，可能会出现相同的观察结果。所以当多个解符合观测数据时，需要算法具有同时搜索多个解的能力；</li>'+
		'<li>大规模性。当供水管网的节点增多，规模变大时，污染物注入速率的数组会随着数据的增多而变大，从而导致搜索空间呈指数增加，很难找到最优解；</li>'+
		'<li>昂贵性。管网的规模过大，导致算法迭代一次代价变大，所以，计算资源的限制使得问题变成昂贵优化问题。</li>'+
		
		'</ul>'

	}
	
	else if(applicationstudy[weekIndex] == '动态车辆路径规划'){
		appendIframe=
		'<p><strong>（2）动态车辆路径规划</strong></p>'+
		'<p>&emsp;&emsp;路径规划问题（Vehicle Routing Problem，VRP）是一类问题的总称，其中，提高实时路况下物流运输效率属于动态车辆路径规划问题。在求解该类问题时，必须为若干在地理上分散的城市或客户确定基于一个或者多个站点的车队的一组路径，其目标是为一批具有已知需求的客户提供始于和终止于仓库的最低成本的解决方案。在研究该类问题时，主要工作是对路网模型的建立、问题模型建立、以及求解问题的算法，主要的难点如下：</p>'+
		'<ul>'+
		'<li><p>VRP路网模型利用随机函数生成交通状况的数据，通过数据加权到节点之间的距离来处理信息，基于全连接的无向图建立路网，任意节点间相互连通，导致该模型无法反映路段间的车流量信息和同一道路不同方向路况的差异性。</p>'+
		'</li>'+
		'<li><p>通过不同的建模思想把VRP模型建立成单目标VRP和多目标VRP模型，基于不同的前提假设建立不同的模型，因此VRP模型是多变的，问题特性是复杂的，为算法设计增加了一定的难度。</p>'+
		'<ul>'+
		'<li>单目标VRP常使用精确式算法和启发式算法去构建解决方案。精确式算法通过数学方法获得精确的全局最优解，不适合于多约束且结构复杂的问题。启发式算法通过逐渐逼近最优值来寻找一个近似的全局最优解，主流的方法有遗传、禁忌搜索、模拟退火、蚁群优化算法，遗传算法的交叉率和变异率对解的影响大且搜索速度慢；禁忌搜索算法依赖初始解且每次只搜索一个解；模拟退火算法参数调整困难且并行性差；蚁群优化算法的探索能力低。</li>'+
		'<li>多目标VRP常采用三种主流的方法来构建解的方案，分别是基于支配、基于指标、基于分解的多目标优化方法。基于支配的方法先收敛性后多样性；基于指标的方法很难保证解的均匀性；基于分解的方法对pareto前沿的影响大。</li>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>'+
		'<p>&emsp;&emsp; 本小组在该研究方向的代表性成果（包括学术论文、专利、软著）如下 ：</p>'+
		'<ul>'+
		'<li>Long Xiao, Changhe Li, Junchen Wang, Michalis Mavrovouniotis, Shengxiang Yang, Xiaorong Dan. Modeling and Evolutionary Optimization for Multi-objective Vehicle Routing Problem with Real-time Traffic Conditions. Proceedings of the 2020 12th International Conference on Machine Learning and Computing, Shenzhen, China 2020, 518-523.</li>'+
		'<li>申请发明专利：李长河、肖龙，一种实时路况下的车辆路径规划问题模型创建方法，201910，中国，CN201910973500.6 （已公布，公布号：CN110766211A）.</li>'+
		'<li>申请软件著作权：李长河、肖龙，实时路况下车辆路径规划问题（VRPRTC）模型创建软件 [简称：VRPRTC 模型创建软件]V1.0，登记号：2019SR0419753.</li>'+
		
		'</ul>'
	}

	else if(applicationstudy[weekIndex] == '天线设计'){
		appendIframe=
		'<p><strong>（3）天线设计</strong></p>'+
		'<p>&emsp;&emsp;天线是一种变换器，它把传输线上传播的导行波，变换成在无界媒介（通常是自由空间）中传播的电磁波，或者进行相反的变换。在无线电设备中用来发射或接受电磁波的部件。无线电通信、广播、电视、雷达、导航、电子对抗、遥感、射电天文等工程系统，凡是利用电磁波来传递信息的，都依靠天线来进行工作。天线设计则是通过改变天线设计结构以获得较好的天线指标，所以找到最佳的天线结构至关重要。结构参数每一点变化可能对天线的性能都会产生影响。'+
		'<p>&emsp;&emsp;然而传统方法对设计出来的天线进行优化的时候容易陷入局部最优解，并且对设计结构具有一定的约束（比如对称等）的条件限制。此外，在运用数学方法优化的时候天线设计问题存在不可导等特点，因此传统的方法具有很大的限制性。</p>'+
		'<p>&emsp;&emsp;针对以上问题，本小组开展了运用演化算法优化天线的研究，代表性成果如下：</p>'+
		'<ul>'+
		'<li>Xu Qinghui, Zeng Sanyou ,  Fei Zhao, Jiao Ruwang, and Li Changhe, “On Formulating and Designing Antenna Arrays by Evolutionary Algorithms”,  IEEE Transactions on Antennas and Propagation. DOI: 10.1109/TAP. 2020.3016181. </li>'+
		'<li>Caie Hu,  Sanyou Zeng, Yuhong Jiang,Yongzhi Sun, Yuhong Jiang and Steven Gao. A Robust Technique without Additional Computational Cost in Evolutionary Antenna Optimization，IEEE Transactions on Antennas &amp; Propagation ,  2019, 67 (04): 2252-2259. Accession number 20190306372551, 2019. </li>'+
		
		'</ul>'
	}
	
	else if(applicationstudy[weekIndex] == '智能游戏'){
		appendIframe=
		'<p><strong>（4）智能游戏</strong> </p>'+
		'<p>&emsp;&emsp;即时战略游戏是具有非常高分支系数、较长的动作反馈、不完全信息以及实时优化约束的博弈问题。由于存在以上难点，研究此类问题充满挑战的同时也对于推动通用人工智能具有非常重要的意义。'+
		'而当前的相关研究大多专注于离线方法，即通过长时间的离线对局与建模，构建可用于实时对局的基于诸如决策树、人工势场或神经网络的决策模型，然后将之部署于实际对局之中进行决策。就本质而言，离线方法显然存在以下问题：1）适应性不强，面对新场景可能需要重新训练；2）训练所需时间较长，大多需要成千上万的游戏内对局时间。'+
		'&emsp;&emsp;针对现有研究存在的不足，我们采用智能优化方法在线对游戏进行决策。对游戏本身所具有的挑战，我们开展了或拟开展以下五个方面的研究：</p>'+
		'<ul>'+
		'<li>基于游戏数据的算子设计：根据游戏本身的特性以及运行时有关数据设计高效搜索算子来提高算法收敛速度。</li>'+
		'<li>基于模拟的评估方法：由于动作反馈较长，通过引入具有一定时长的模拟来获取准确的动作反馈。</li>'+
		'<li>基于对抗性多种群的在线优化方法：由于敌方策略是无法预知的，通过引入敌方策略种群和我方种群进行对抗，即藉由“左右互搏”的方法来推测敌方策略并提高我方策略的鲁棒性。</li>'+
		'<li>基于代理模型的评估：由于精确模拟对抗相对而言较为耗时，所以引入代理模型对评估结果进行拟合，提高算法运行效率。</li>'+
		'<li>敌方玩家行为建模：对敌方过往操作进行建模，借由行为模型对搜索空间进行有效剪枝。</li>'+
		
		'</ul>'
	}
	
	;
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
		
		if(subjectname[weekIndex] == '在研项目'){
			appendIframe=
			"<ol style='margin-left: 20px;'>"+

			'<li>基于子空间搜索潜力建模的多种群动态约束优化方法（62076226），国家自然科学基金面上项目，2021.01~2024.12 </li>'+
			'<li>超宽带天线阵列智能优化技术  2019.01~待定  盲信号处理国家级重点实验室创新发展基金</li>'+
			'<li>动态环境下自适应多种群算法及其在供水管网污染源追踪中的应用（61673355），国家自然科学基金面上项目，2017.01~2020.12</li>'+
			'<li>外观检测机智能过滤系统（2019346152），横向项目，2019.05~2020.12 </li>'+
			'</ol>'
		}

		else if(subjectname[weekIndex] == '结题项目'){
			appendIframe=
			"<ol style='margin-left: 20px;'>"+
			'<li>模型驱动的动态多目标演化算法和它在求解耗时的星载天线优化设计中的应用（61271140），国家自然科学基金面上项目，2013.01~2016.12 </li>'+
			'<li>卫星天线自动设计中的多目标过约束演化算法研究（60871021），国家自然科学基金面上项目，2009.01~2011.12 </li>'+
			'<li>动态环境下基于聚类的自学习多种群算法研究（61203306），国家自然科学基金青年基金项目，2013.01~2015.12</li>'+
			'<li>基于演化算法和3D打印技术研制小型化宽带飞行器天线 ，航天支撑技术基金项目，2018.04~2019.04  </li>'+
			'<li>湖北省楚天学子计划（ 2013199157），湖北省教育厅，2013.01~2015.12  </li>'+
			'<li>宽带演化天线技术研究，航天8511所预研项目，2013.11~2015.03 </li>'+
			'<li>基于演化天线的弹载微带天线优化设计研究，航天支撑技术基金项目，2012.01~2014.12  </li>'+
			'<li>导弹共形天线阵演化设计，航天支撑技术基金项目，2013.07~2015.07 </li>'+
			
			'</ol>'
		}
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//科研论文
	$(".paper").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 科研论文");
		//!编辑内容
		appendIframe='<p>发表科研论文篇，其中人工智能领域顶级期刊IEEE Transactions on Evolutionary Computation 5篇，Evolutionary Computation 2篇, IEEE Transactions on Cybernetics 5篇，通信工程领域顶级期刊IEEE Transactions on Antennas and Propagation 1篇。本小组近年来发表的学术论文统计参考《附件4-李长河教授和曾三友教授部分论文统计》。</p>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//发明专利
	$(".invention").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 发明专利");
		//!编辑内容
		appendIframe=
		'<ul>'+
		'<li>李长河、肖龙，一种实时路况下的车辆路径规划问题模型创建方法，201910，中国，CN201910973500.6 （已公布，公布号：CN110766211A）.</li>'+
		'<li>曾三友、章锐、程伟鹏、赵菲，基于复方向图相位参数设计的阵列天线快速综合方法（申请号202010217068.0），申请日期：2020.03.25，状态：进入实审</li>'+
		'<li>曾三友、许庆辉、赵菲、叶陆民，一种基于差分进化的天线设计方法及新型折线天线（申请号202010192752.8），申请日期：2020.08.03，状态：进入实审</li>'+
		'<li>张钰锋、曾三友、赵菲，一种基于多目标演化算法设计的双频段Wi-Fi天线（申请号202010402392.X），申请日期：2020.05.13，状态：初审合格</li>'+
		'<li>曾三友、许庆辉，一种减少天线阵列综合中设计参数数目的线性化方法（申请号201910190143.6），申请日期：2019.07.25，状态：进入实审</li>'+
		'<li>焦儒旺、曾三友、许庆辉，求解天线阵列综合方向图问题的约束超多目标智能优化转换框架（申请号201911170078.7），申请日期：2019.11.26，状态：进入实审</li>'+
		'<li>呼彩娥、曾三友，一种基于非平稳高斯模型来提高天线电磁优化仿真效率的方法及系统（申请号202010217068.0），申请日期：2020.03.25，状态：进入实审</li>'+
		
		'</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//软件著作
	$(".software").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 软件著作");
		//!编辑内容
		appendIframe=
		'<ul>'+
		'<li>李长河、肖龙，实时路况下车辆路径规划问题（VRPRTC）模型创建软件 [简称：VRPRTC 模型创建软件]V1.0，登记号：2019SR0419753.</li>'+
		'<li>李长河、吴小芳，基于空间分割的多目标优化软件V1.0，登记号：2020SR0698527.</li>'+
		'<li>曾三友，李正军，分布式天线自动演化软件，登记号： 2011SR002194.</li>'+
		
		'</ul>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//教材著作
	$(".textbook").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 教材著作");
		//!编辑内容
		appendIframe=
		"<figure><table border='1px'>"+
		'<thead>'+
		"<tr height='40px'><th>序号</th><th>教材名称</th><th>作者</th><th>出版社</th><th>出版时间</th></tr></thead>"+
		"<tbody><tr height='40px'><td>1</td><td>C++程序设计（基于C++11标准）</td><td>李长河，童恒建，叶亚琴，杨鸣</td><td>电子工业出版社</td><td>2018</td></tr><tr><td>2</td><td>C++程序设计（基于C++11标准）实验指导书</td><td>李长河，刘小波，叶亚琴，童恒建，陈珺，徐迟</td><td>中国地质大学出版社</td><td>2020</td></tr><tr><td>3</td><td>Intelligent Optimization</td><td>李长河，曾三友，杨圣祥</td><td>中国地质大学出版社</td><td>2021</td></tr></tbody>"+
		'</table></figure>'

		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});

//获奖情况
	$(".rewardsteacher").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 科学研究 > 研究成果 > 获奖情况");
		//!编辑内容
		appendIframe=
		"<ol style='margin-left: 20px;'>"+
		'<li>2020年湖北省自然科学奖三等奖，动态约束环境下自适应演化计算方法，李长河、曾三友、杨鸣</li>'+
		
		'</ol>'
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
		$(".sitemap").text("当前位置： 学习手册 > 写作 > 学术论文 > "+xslw[weekIndex]);
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

//学习手册：写作-两周小结
$(".lzxj").click(function(){
	//一级标题上色
	$(".article_content").text("");
	$(".sitemap").text("当前位置： 学习手册 > 写作 > 两周小结");
	//!编辑内容
	appendIframe=
	'<p>&emsp;&emsp;两周小结的内容主要包括：1）过去两周的研究小结；2）未来两周的研究计划；3）其他的学习情况等。模板参考附件《附件2-1 两周小结》。</p>'+
	'<p>需要注意如下几点：</p>'+
	'<ul>'+
	'<li>总结内容不要一句话带过，需要详细叙述近期研究中的所遇到的具体问题、难题以及个人的思考和想法。</li>'+
	
	
	'</ul>'+
	'<ul>'+
	'<li>对于文献阅读，总结该文献的动机（motivation）以及针对的关键科学问题，为什么采用其所述的方法？所使用方法的优缺点是什么？还有哪些关键点未解决，需要深入研究？</li>'+

	'<li>对于实验研究，说明实验动机，说明详细的实验步骤，解释操作依据，出具详细的数据分析结果。</li>'+
	
	'</ul>';
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
	if(wxzs[weekIndex] == '撰写建议'){
		appendIframe=
		'<p>&emsp;&emsp;研究生选定研究课题之后，需要通过阅读大量的文献，以加深对该领域的理解，即需要研究生做文献综述。同时，文献综述也是必修的学分，需要在导师的指导下完成。该部分主要从撰写建议和字体格式要求两个部分来阐述。此外，文献综述的模板参见附件《附件2-2-1 文献综述-word版》《附件2-2-2 文献综述-latex版》。</p>'+

		'<p>&emsp;&emsp;文献综述的内容主要包括摘要、引言（背景）、综述的主题部分（例如XXX算法概述）、总结和展望。</p>'+
		'<ul>'+
		'<li><p><strong>摘要</strong></p>'+
		'<ul>'+
		'<li>摘要不宜过长，限定在 400 字以内，撰写时要注意三大原则：简明扼要、内容完整、用词诚恳。起到画龙点睛的作用，引发阅读者的阅读兴趣。</li>'+
		'<li>首先，开篇需要用1~2两句概括一下该课题的研究意义。其次，由于文献综述主要是该领域已有成果的归纳、总结和分类，所以这里需要表述清楚对什么内容做了归纳总结，例如，本文介绍了XXX优化方法，重点阐述了某一类算法，分析和总结其优缺点，并将目前已存在的改进方法做了分类讨论和总结。最后，用1~2句话总结，例如，依据上述对该类算法的分类总结，对其方向方向做了展望。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>引言</strong></p>'+
		'<ul>'+
		'<li>引言或是背景介绍大致3个方面的内容，采用由大到小，由面到点的方式介绍自己的研究方向和课题。第一方面，主要从宏观、大的方面开始介绍，包括大行业发展趋势，国家政策、法规，实际应用趋势等方面。第二方面，介绍自己研究方向或课题在领域的重要性，目前该方向的粗略的研究现状，可以采用数据统计的方式展现研究方向的热门或重要程度。第三方面，总结该研究方向的基本科学问题，指出这些基本问题给算法设计和方案提出带来的具体挑战。</li>'+
		'<li>第一章主要是引出课题，可以通过实际生活中的场景、问题等作为引例。</li>'+
		'<li>在该章节里最好给出描述应用背景或每年研究文献数目的统计数据及增长趋势（以图片的形式给出），以此说明该研究课题的研究意义。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>主题部分</strong></p>'+
		'<ul>'+
		'<li>这部分内容撰写的关键在于算法的分类和总结。大多数优化问题的求解已经出现了多种算法设计框架，首先需要对所有算法进行分类，不同类型的算法设计之间是一种并列关系。对一类算法进行集中叙述时，按照一定的逻辑性进行分析，最好是递进关系，每叙述一个具体的算法时需要提炼其设计的动机（motivation），并进行优缺点总结；后面的算法设计会为了解决之前算法设计出现的问题而引进新的策略，同时也会出现新的问题。最后，需要对不同类算法的特性进行比较分析和总结，比如某一类算法是否更加适用于某一类优化问题；某一类算法或算子是否更加具有收敛性能或是多样性特性等等。</li>'+
		'<li>不要干巴巴的罗列文献，不要通篇都是“某人或某文献研究了…”，主语通常是方法，而不是方法的提出者，要归纳和总结文献的类别、优缺点等，总结中要体现出自己的思考和深度。句子之间、段落之间要有逻辑关系，包括并列关系、递进关系、承上启下关系等。</li>'+
		'<li>每一节结尾处给出小结，内容不必过多，一小段即可。</li>'+
		'<li>注意正文每一段内容不要过长，6-8行为宜，不要超过10行。</li>'+
		'<li>文献引用[1]，文献引用不能作为一行的开头。参考文献的引用建议使用NoteExpress，正版的软件可以在学校图书馆网站下载，亦可使用EndNote。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>总结和展望</strong> '+
		'<ul>'+
		'<li>总结：对前述综述内容进行再次地简略总结、归纳文献读完之后所提炼的一些结论，并分条归纳出该研究课题所存在的局限性。</li>'+
		'<li>展望：针对前述所总结的局限性，对其中的某一方面或是多个方面进行展望，进而引出自已的研究方向。这一部分内容不易过多，点到即可。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>参考文献</strong></p>'+
		'<ul>'+
		'<li>按照参考<a href='+'#'+
		'>文献格式要求</a>排版，注意文献的时效性，最近两年文献不少于总文献数目的20%。</li>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>';
	}


	else if(wxzs[weekIndex] == '字体格式要求'){
		appendIframe=
		'<p>标题的字号、间距要求具体如下： '+
		'<ul>'+
		'<li><strong>题目标题</strong>：居中，三号宋体加黑、单倍行距、段前和段后0.5行</li>'+
		'<li><strong>摘要和关键字</strong>：五号宋体加黑，摘要正文五号宋体、固定行距20磅</li>'+
		'<li><strong>一级标题</strong>：四号宋体加黑、单倍行距、段前1行、段后0.5行</li>'+
		'<li><strong>二级标题</strong>：小四号宋体加黑、单倍行距、段前0.5行、段后0.5行</li>'+
		'<li><strong>三级标题</strong>：11号宋体加黑、单倍行距、段后0.5行</li>'+
		'<li><strong>四级标题</strong>：五号宋体加黑、固定行距20磅、段后0.5行</li>'+
		'<li><strong>五级标题</strong>：五号宋体、固定行距20磅、段后0.5行</li>'+
		'<li><strong>正文</strong>：采用五号字体、固定行距20磅、段后0.5行、两端对齐</li>'+

		'</ul>';
	}	

		
	else if(wxzs[weekIndex] == '格式与模板'){
		appendIframe="<div align='center'>"+
		"<img src='images/image_sm/文献综述.png' width=90%>"+
		'</div>'
		;

		
	}			

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
	if(wxzs[weekIndex] == '撰写建议'){
	appendIframe=
	'<p>&emsp;&emsp;研究生做过文献综述之后，并对自己研究的课题有一个研究框架，需要在导师的指导下完成开题报告，同时，这也是研究生培养环节里的必要环节。与2.2类似，该部分主要从撰写建议和字体格式要求两个部分来阐述。此外，开题报告的模板参见附件《附件2-3 开题报告》。 '+
	
	'<p>&emsp;&emsp;文献综述的内容主要包括<strong>选题依据</strong>（包括选题的来源，研究目的、意义；国内外研究现状和发展趋势）、<strong>研究内容和目标</strong>（包括选题的具体研究内容，研究目标，以及拟解决的关键科学问题）、<strong>选题研究方案及可行性分析</strong>（包括研究方法，技术路线，理论分析、计算、实验方法和步骤及其可行性）、<strong>课题的创新点</strong>、<strong>研究基础与工作条件</strong>（与本项目相关的研究工作基础，包括已具备的工作条件，尚缺乏的工作条件及拟解决途径等）、<strong>学位论文工作计划及预期研究成果</strong>。可参考<a href='+
	'2.5'+
	'>2.5节立项申请书</a>部分。 '+
	'<ul>'+
	'<li><p><strong>选题依据</strong></p>'+
	'<ul>'+
	'<li><p><strong>选题来源</strong></p>'+
	'一般来源于导师的某个项目。 '+
	'</li>'+
	'<li><p><strong>研究目的与意义</strong></p>'+
	'此部分内容1页即可，可分为3~4段，分别为:'+
	'1）概述研究对象的概念和研究意义：最好通过一些简单的示例或数据展示意义； '+
	'2）概述主要研究方法和关键局限性； '+
	'3）概述本课题拟解决的关键问题和理论研究价值、实际应用价值：不要钻入具体的研究方案等细节，应从宏观上、以工程领域的老师们大多能理解的术语进行介绍。 '+
	'</li>'+
	'<li><p><strong>国内外研究现状和发展趋势</strong></p>'+
	'此部分内容3页即可，相较于文献综述要更加高度归纳。分成几小节，小节之间的关系为并列关系（优缺点互补）或递进关系（逐渐解决上一类的缺点）。最后一节为总结，再次概述各小节的内容，并直接点出小节间的关系。注意：此时距离文献综述大概有一年时间，注意最新文献的更新。 '+
	'</li>'+
	
	'</ul>'+
	'</li>'+
	'<li><p><strong>研究内容和目标</strong></p>'+
	'<ul>'+
	'<li><p><strong>研究目标</strong></p>'+
	'主要为针对什么问题或局限性，提出什么方法，并用2~3句话陈述该方法，该部分需精简，4~6行即可。如“针对…算法的…局限性，本课题通过采用…方法，制定…策略，进而提出一个…算法框架”。 '+
	'</li>'+
	'<li><p><strong>研究内容</strong></p>'+
	'研究内容要讲清楚<strong>做什么</strong>，围绕某某研究目标，将课题的研究内容分为几个方面的内容来阐述，讲清楚研究内容之间的相关性。每个方面的内容描述两段： '+
	'1）与研究目标的关系（“某某方法是某某某的某某”），再详细解释为什么； '+
	'2）再将每个方面的研究内容拆分成几个小点进行（“此方面的研究包括某某、某某、某某”），注意不需要描述每一小点怎样做（怎样做是技术路线部分内容）。 '+
	'通常，最后一个研究内容是对前述研究内容的实验效果分析和可视化软件系统。 '+
	'</li>'+
	'<li><p><strong>拟解决的关键科学问题</strong></p>'+
	'阐述1~2点，每点1~2段。标题要慎重考虑，不是创新点，是有共性、长期存在但一直没有很好的方法解决，格式上可以是某某问题，也可以是某某方法技术。 '+
	'</li>'+
	
	'</ul>'+
	'</li>'+
	'<li><p><strong>选题研究方案及可行性分析</strong></p>'+
	'<ul>'+
	'<li><p><strong>研究方法与技术路线</strong></p>'+
	'技术路线讲清楚<strong>怎样做</strong>，给出总体研究方案图，根据每个研究内容给出详细的研究方法描述。每一个研究方法先概述具体技术之间的关系或顺序。每个具体技术直接描述详细步骤，基本达到能看步骤写出伪代码的程度。配上公式、流程图、示意图或伪代码。最后给出详细的技术路线图，以及相应内容的描述。 '+
	'</li>'+
	'<li><p><strong>可行性分析</strong></p>'+
	'可以从理论分析、研究手段、工作基础以及软硬件设施这四个方面分析本课题研究方案的可行性。 '+
	'1）理论分析：以时间复杂度分析、前人文献论述、高共识性结论作为论述支撑； '+
	'2）研究手段：实证研究还是理论研究、定量研究还是定性研究等等； '+
	'3）工作基础：以已完成工作实验效果、个人的相关学术成果（论文专利软著）、课题组成员的相关工作等作为论述支撑； '+
	'4）软硬件平台条件：列举可利用的的算法开发平台、问题仿真平台、软件运行需要的硬件条件。 '+
	'</li>'+
	
	'</ul>'+
	'</li>'+
	'<li><p><strong>课题的创新点</strong></p>'+
	'<ul>'+
	'<li>所谓创新指的是别人没有做过的事情，<strong>新问题或者新方法</strong>，从研究内容中抽出2-3点创新，注意创新点指的是与别人不一样的地方，即自己的特色。分条陈述。</li>'+
	
	'</ul>'+
	'</li>'+
	'<li><p><strong>研究基础与工作条件</strong></p>'+
	'<ul>'+
	'<li>已进行的工作</li>'+
	'<li>已具备的科学研究条件</li>'+
	
	'</ul>'+
	'</li>'+
	'<li><p><strong>学位论文工作计划及预期研究成果</strong></p>'+
	'<ul>'+
	'<li>注意计划表中相邻两个阶段时间间隔不要太长，最好为2~3个月</li>'+
	
	'</ul>'+
	'</li>'+
	'<li><p><strong>其他注意事项</strong></p>'+
	'<ul><li>封面的<strong>研究方向</strong>不是“某某问题”，比如研究方向为车辆路径规划而不是车辆路径规划问题。研究方向是热点和前沿，而不是研究的问题是热点和前沿；另外，报告中的研究方法还没有具体实施，可以有“提出了某某方法的设计方案”，但不能在报告中有“提出了某某方法”的描述。 '+
	'</li>'+
	
	'</ul>'
	}

	else if(wxzs[weekIndex] == '字体格式要求'){
		appendIframe=
		'<ul>'+
		'<li><strong>一级标题</strong>：一级标题 ， 宋体五号 、加黑距 、固定行距 20 磅、段前 0.5 行、段后 0.5 行</li>'+
		'<li><strong>二级标题</strong>：格式与一级标题相同</li>'+
		'<li><strong>三级标题</strong>：格式与一级标题相同</li>'+
		'<li><strong>正文</strong>：宋体五号、固定行距 20 磅、段前 0.5 行、段后 0.5 行、两端对齐、左右两侧均缩进2 个字符。</li>'+
		
		'</ul>'
	}
	
	else if(wxzs[weekIndex] == '格式与模板'){
		appendIframe=
		"<div align='center'>"+
		"<p><img src='images/image_sm/开题报告1.png' referrerpolicy='no-referrer' width=90%></p>"+
		"<p><img src='images/image_sm/开题报告2.png' referrerpolicy='no-referrer' width=90%></p>"+
		"<p><img src='images/image_sm/开题报告3.png' referrerpolicy='no-referrer' width=90%></p>"+
		"<p><img src='images/image_sm/开题报告4.png' referrerpolicy='no-referrer' width=90%></p>"+
		'</div>'
	}


	
	;
	//!结束编辑内容
	$(".article_content").append(appendIframe);
});

//学习手册：写作-学术论文
$(".xslw a").click(function(){
	//一级标题上色
	$(".article_content").text("");
	var weekLength = $(this).parent().parent().parent().find("li").length;
	var weekIndex = $(this).parent().index();
	$(".sitemap").text("当前位置： 学习手册 > 写作 > 学术论文 > "+xslw[weekIndex]);
	//!编辑内容
	if(xslw[weekIndex] == '论文的准备'){
		appendIframe=
		'<p>&emsp;&emsp;撰写论文之前需要做以下准备：</p>'+
		'<ul>'+
		'<li><p>研究课题的选择与方法设计决定论文的档次，注意不必要研究全面论述性的大问题，所研究的主题，可以很小，却又是重要的。</p>'+
		'</li>'+
		'<li><p>实验的设计与展示是论文的基础。</p>'+
		'</li>'+
		'<li><p>了解投稿的期刊</p>'+
		'<ul>'+
		'<li>阅读期刊网页，检查期刊格式；</li>'+
		'<li>了解期刊的详细规则：如何安排题目，关键字，摘要，标题，副标题，参考文献格式等；</li>'+
		'<li>阅读目标期刊的近期文章，学习相关的表达和了解研究的热点；</li>'+
		'<li>注意上传的文件格式，pdf，word，jpg 等。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p>制定大纲</p>'+
		'<ul>'+
		'<li>总结出关键科学问题及研究动机；</li>'+
		'<li>设计文章结构，科技论文一般框架：背景、相关工作、算法、实验和结论。每一部分的内容要相互关联，逻辑清晰，相互配合，为核心内容服务；</li>'+
		'<li>对搜集的材料，要进行分析、提炼，保留那些能说明论点的例证材料；</li>'+
		'<li>描述要深入浅出，有严密的逻辑性，且要有层次。</li>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>'
	}
	

	else if(xslw[weekIndex] == '结构安排的原则'){
		appendIframe=
		'<ul>'+
		'<li>围绕主题，选择有代表性的典型材料，根据需要，加以适当安排，使主题思想得到鲜明突出的表现。</li>'+
		'<li>疏通思路，正确反映客观事物的规律，就是说，必须反映客观事物的实际情况，内部联系，符合人们的认识规律。</li>'+
		'<li>结构要完整而统一。</li>'+
		'<li>层次分明，有条不紊。文章结构中最重要的是层次。层次就是文章中材料的次序。写文章时把所选材料分成若干部分，按照主题思想的需要，适当安排，分出轻重缓急，依次表达，前后连贯，充分而鲜明地把主题思想表达出来。</li>'+
		
		'</ul>'
	}
	
	else if(xslw[weekIndex] == '标题'){
		appendIframe=
		'<ul>'+
		'<li><p><strong>包含三点内容</strong>：研究方法、解决的问题和创新点。</p>'+
		'</li>'+
		'<li><p><strong>简单醒目</strong>：新颖独特、简练自明、富于信息和有吸引力理解为命名标题的四大原则。应当用最少的文字表达出最丰富的信息。</p>'+
		'<ul>'+
		'<li>新颖独特：是指题目要具有新意和创意，要反映出该研究领域的前沿，起点应尽可能高一些，具有独树一帜的特点。</li>'+
		'<li>简练自明：是指要文字简练、概念准确、语意清晰；能自我解释，能十分清楚地、直截了当地告诉读者，而不是让读者自己去体会或猜测题目的含义。</li>'+
		'<li>富于信息：是指题目的信息量要大，具有深刻的含义。没有告诉读者任何信息的题目，是极不可取的。</li>'+
		'<li>有吸引力：标题应具有吸引力和诱读力，让人难忘，但不是哗众取宠的。具有吸引力的题目决非为滑稽可笑的。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>质量标准</strong>：一个好的项目申请书的标题应该具有新颖醒目、感染力强、独特具体、坦诚明了、正确清楚、字数适中等六个方面的质量要求标准。</p>'+
		'<ul>'+
		'<li>新颖醒目：项目名称最好能鲜明地体现创新性，新颖夺眼球，让专家有“眼前一亮”的感觉。</li>'+
		'<li>感染力强：具有召唤力和可信度，让评审专家第一眼就感兴趣，产生强烈继续阅读的欲望。</li>'+
		'<li>独特具体：项目名称要与其他人的题目（目前或将来的）有所区别，显示出特色和新颖性；同时，项目名称要深入具体，切忌题目过大，做到&quot;以小见大&quot;，也不可过小或笼统模糊。</li>'+
		'<li>坦诚明了：项目名称应直观地反映申请项目的中心意思、核心问题和研究内容，让评议人一看题目就能明确、直接地知道申请者具体要做什么研究，或研究对象是什么，或拟解决什么科学问题等。</li>'+
		'<li>正确清楚：避免一长串起修饰作用的名词，语言修辞正确，词语重复、语序错乱；不可使人阅读后不解其意或感觉文题不符。</li>'+
		'<li>字数适中：题目不可过短，也不可过长。因为过短的标题，显得过于简单化，提供的信息量不足，且不易表达完整的含义；而标题过长，显得累赘、冗长，也容易造成多余的印象和后果。字数控制在 30 个以内。要求通顺，没有标点，长度一般不超过 20 个汉字，英语不超过 100 字母。字数的多少不是标题绝对的唯一标准，它应该服从内容的需要。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>命题中的禁忌</strong></p>'+
		'<ul>'+
		'<li>避免使用“废词”“垃圾词”：标题应尽量避免使用“……的研究”，“……的实验”，“……的观察”，“……的探讨”等等完全不必要的“废词”、“废字”。某些人看来，这种标题是很习惯、很自然、似乎是无可非议的。实际上，无论是“实验”，还是“观察”，或是“研究”等，都是完全无用的。道理很简单，因为课题本身就是实验，就是观察，就是研究，无需在题目中再重复赘述。试想，命题的核心原则是“用最少的词语尽可能表达最丰富的信息”，如果我们去掉这些“实验”、“观察”、或“研究”等“废词”，会影响我们意思的表达吗？不用这些“废词”，我们就不能有更好的句子表达我们的意图了吗？如果答案均是否定的，那么，在字数有限的标题中，使用这些完全不必要的“废词”、“垃圾词”，岂不是“得不偿失”了吗？可被接受的命题应该是把能够去除的废字及“垃圾词”全部丢掉。'+
		'</li>'+
		'<li>避免标题过大：命题应该贴切、合适，不可过大或过小。过分夸大或过于缩小的命题，都会产生“不切题义，与内容不符”的后果，这也可能是被拒的原因之一。不要误以为题目越大越显得有分量，生怕题目过于具体别人笑话“不像科研课题”。其实，好的科研课题往往是“以小见大”，“以小见深”，只要能发现规律就有价值，不在题目的大小。'+
		'</li>'+
		'<li>尽量避免缩略词语、难懂的词以及装腔作势的语言等：只有得到整个科技界或本专业公认的缩略词，才可以应用于题目中。但是，可用可不用的，还是不用为好，以免带来不必要的麻烦。使用混淆不清的、不可理解的、令人费解的、稀奇古怪的术语以及生涩的、拐弯抹角的语词，无益于评审人的阅读和理解，应着实避免。'+
		'</li>'+
		'<li>避免使用成串的名词：应避免成串的名词出现在题目中。这一点也很重要，因为标题并不一定是句子，有些申请者常常把一串名词放在一起，这是应该避免的。标题中 “的” 太多，找不到核心词。'+
		'</li>'+
		'<li>标题过于平淡、没有亮点：如《高效快速安全的多媒体加密算法的研究》，下面第三个标题更合适：<br>'+
		'1)一种具有鲁棒混沌性的混沌运算模型及其应用研究<br>'+
		'2)具有鲁棒混沌性能的混沌运算模型及其应用研究<br>'+
		'<strong>3)具有鲁棒特性的混沌建模新方法及其应用研究<br></strong>'+
		'4)鲁棒混沌系统的建模分析与应用研究'+
		
		'</li>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>'
	}

	else if(xslw[weekIndex] == '摘要和关键字'){
		appendIframe=
		'<ul>'+
		'<li><p><strong>摘要</strong>：不宜过长，限定在 400 字以内，撰写时要注意三大原则：简明扼要、内容完整、用词诚恳。起到画龙点睛的作用，引发评议专家的兴趣，使其产生探个究竟的好奇心。</p>'+
		'<ul>'+
		'<li><p><strong>内容</strong></p>'+
		'<ul>'+
		'<li>摘要需要涵盖目标概述、研究内容、研究方法、科学意义这几方面的内容。在写作时我们可以先用 1~2 句话来概述背景提出问题；然后描述研究的内容，重点要体现研究思路；接着略提一下采用的研究方法；最后用 1~2 句高度凝练的语句点出该研究的意义。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>常用模板</strong></p>'+
		'<ul>'+
		'<li>用…方法进行了…的研究，探索/论证…问题；该研究对阐明…机制/揭示……规律具有重要意义，为…奠定了基础/提供了思路。</li>'+
		'<li>…在…中起关键作用…但…不清（科学问题），我们前期研究发现…， 据此提出（假设）…。我们拟采用…方法（手段）进行…研究，探索/证明…问题，对阐明…机制／揭示…规律有重要意义，为…奠定基础／提供…思路 。</li>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>关键字</strong>：为了便于读者从浩如烟海的书刊中寻找文献，特别是适应计算机自动检索的需要，应在文摘后给出 3-5 个关键词。选能反映文献特征内容，通用性比较强的关键词。</p>'+
		'</li>'+
		
		'</ul>'
	}
	
	else if(xslw[weekIndex] == '引言'){
		appendIframe=
		'<p>&emsp;&emsp;引言的主要作用是提供读者需要的背景资料，向读者展示研究的问题，体现研究的重要性。主要回答 “为什么” (Why) 这个问题。它简明介绍科技论文的背景、相关领域的前人研究历史与现状(有时亦称这部分为文献综述)，以及著者的意图与分析依据，包括科技论文的追求目标、研究范围和理论、技术方案的选取等。</p>'+
		'<p>&emsp;&emsp;一般采用“漏斗式”结构展开，先介绍主题的一般知识，再转向主题特定领域的研究现状，再提出自己要解决的问题，强调一下问题解决方法、重要性，以及研究结论。</p>'+
		'<p>&emsp;&emsp;问题必须是研究的主要问题，在论文中必须有证明的解决方法或者结论。不要把引言写成小型综述，引言中的参考文献要少，写一些特别重要的，与研究的关键科学问题相关的文献，尽量选择一些新的文献。</p>'
		
	}
	
	else if(xslw[weekIndex] == '正文'){
		appendIframe=
		'<p>&emsp;&emsp;正文是科技论文的核心组成部分，主要回答“怎么研究”(how)这个问题。正文应充分阐明科技论文的观点、原理、方法及具体达到预期目标的整个过程，并且突出一个“新”字，以反映 科技论文具有的首创性。根据需要，论文可以分层深人，逐层剖析，按层设分层标题。科技论文写作不要求文字华丽，但要求思路清晰，合乎逻辑，用语简洁准确、明快流畅；内容务求客观、科学、完备，要尽量让事实和数据说话;凡用简要的文字能够说清楚的，应用文字陈述，用文字不容易说明白或说起来比较繁琐的，应由表或图来陈述。物理量和单位应采用法定计量单位。</p>'
		
	}
	
	else if(xslw[weekIndex] == '结果分析与讨论'){
		appendIframe=
		'<ul>'+
		'<li><p><strong>结果分析</strong></p>'+
		'对结果进行解释和论证，解释和理论不符合的结果，指出创新点和他人不同的地方，解释意外发现，解释局限性和实验改进等等，还有就是强调本研究的重要所在。把最重要的东东放在讨论的开始部分，中间讨论和论证答案的准确性，可靠性、创新性、重要性，对于目前还不能解释的要进行推论和假象要明确说明，不能以结论代替假说，论证的方法有陈述实验结果，引用参考文献，理论解释等等，总之要让人信服。对于自己不足的说明不宜太多，也不要推翻自己的研究，只是让研究更为严谨，就是要把握分寸。'+
		'图表遵守不重复原则。也不要直接列出数据，最好还是图表比较明确一些。在结果中可以写出最重要的几个数据以说明成果。'+
		'</li>'+
		'<li><p><strong>结论</strong></p>'+
		'结论是整篇文章的最后总结。主要是回答“研究出什么”(What)。它应该以正文中的试验或考察中得到的现象、数据和阐述分析作为依据，由此完整、准确、简洁地指出：一是由研究对象进行考察或实验得到的结果所揭示的原理及其普遍性；二是研究中有无发现例外或本论文尚难以解释和解决的问题；三是与先前已经发表过的(包括他人或著者自己)研究工作的异同；四是本论文在理论上与实用上的意义与价值；五是对进一步深人研究本课题的建议。'+
		'</li>'+
		'<li><p><strong>致谢资助单位</strong></p>'+
		'对于提供资金或者仪器材料的重要机构和个人要给予感谢！简要一些，一般 1-2 行。'+
		'</li>'+
		
		'</ul>'
	}

	else if(xslw[weekIndex] == '参考文献'){
		appendIframe=
		'<p>&emsp;&emsp;撰写学术论文时，需要添加作者的单位和资助基金，具体见<a href='+
		"'#5.6'"+
		'>5.6节</a>。</p>'

	}

	else if(xslw[weekIndex] == '论文署名与单位'){
		appendIframe=
		'<p>&emsp;&emsp;写研究论文和综述是不同的，不需要大量的参考文献，但是参考文献也是很重要的一个部分，参考文献一定是有效的发表的文献，最好发表的刊物还要有一定的权威性，否则一个名不见经传的刊物上的文章可能自己都有错误，如何证明你的结论呢？使用一次文献，不要从别人的综述里面或者其他二次文献里面找证据。引用文献不要老把标注放在句子结束的地方，要放在作者的观点后面，或者作者的姓名处。对于不重要的文献或者一些常用概念的引用可以不要标注，很多杂志有参考文献个数的限制。</p>'

	}
	
	else if(xslw[weekIndex] == '书写技巧和修改'){
		appendIframe=
		'<ul>'+
		'<li><p><strong>书写技巧</strong></p>'+
		'<ul>'+
		'<li>观点和重点明确，也就是自己的写作功底的问题善意突出重点思路明确，这一切要在实践中不断总结提高的；</li>'+
		'<li>注意就是科技论文写作都是用被动语态；</li>'+
		'<li>文字规范没有低级错误，避免冗长的句子，表达意思明确没有歧义，要符合语法规范，不要有错字之类的低级错误。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>修改</strong></p>'+
		'初稿写成以后，应再三修改，审查是否符合要求。还要让导师、师兄或者自己的同学看看，要保证发出论文的质量。事实上，人的认识不是一次完成的，很难一次就达到完善恰当的程度。仔细检查，反复修改，总会发现还有不恰当、不完善之处，大至问题是否提得鲜明中肯，论点和事例有无说服力，结构层次是否严谨，小至文字的修饰加工，有无废话，语言是否准确、鲜明、生动，等等，总会发现尚需修改之处，发现很多在提纲中看不出的毛病，原先估计不到的问题。写成初稿后反复审查和修改，是十分必要的。'+
		'</li>'+
		
		'</ul>'
	}
	
	
	;
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
	if(lxsq[weekIndex] == '立项依据'){
		appendIframe=
		'<p>&emsp;&emsp;“立项依据”是申请书的重中之重。很多落选的申请书往往走了两个极端：要么寥寥数语，没体现出重要性；要么长篇大论但缺乏清晰的思路，把人看晕了；在撰写立项依据时可适当提及目前已完成得较好的研究基础，不要过度引用文献，注意细节优化避免错别字和语句不通的低级错误。</p>'+
		'<ul>'+
		'<li><p><strong>研究背景与意义</strong></p>'+
		'是指课题所属领域的研究意义。简述其特点、危害，目前主要的方法及其存在的问题。简要分析机理和主要研究热点，引出目前存在的主要问题，也就是本项目要解决的问题，以此为切入点提出假设，阐述如果实现预期目标，相关的理论意义和应用价值。'+
		'</li>'+
		'<li><p><strong>国内外现状分析（综述）</strong></p>'+
		'<ul>'+
		'<li>存在问题：文献复习不够，对国内外现状缺乏真正了解，提出的问题别人已解决—低水平重复；对研究方法不熟悉，简单移植或夸大其作用，缺乏实际应用的可行性；对国内外现状只是简单罗列，缺乏归纳分析，缺乏逻辑性和针对性——总结与表达不够。</li>'+
		'<li>撰写方法：要紧紧围绕本次申请项目的主题。从科学问题切入，简要论述国内外研究成果，并引出当前的热点研究方向；从研究方向展开，较详细地分析国内外在本方向的研究进展，引出阐明机理或发明新方的关键问题所在；围绕关键问题，详细论述国内外以往的研究结果、当前的现状及今后的发展趋势。综合分析后提出目前尚未解决的问题。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>内容组织</strong></p>'+
		'</li>'+
		
		'</ul>'+
		'<p>&emsp;&emsp;撰写立项依据时，可以尝试回答以下几个问题，来组织立项依据的内容：关键科学问题是什么？问题的来源？目前有谁在研究？他们解决了什么问题？是如何进行研究的？还有哪些问题没解决？他们的研究对你要开展的研究有什么启发？为什么要进行本项研究？为什么要由你来研究？前期工作基础如何？是否有科学假说？如何完成研究？</p>'+
		'<p>&emsp;&emsp;对研究方案的简介及依据。对新颖性、重要性和可行性的分析。准确评价自己的工作、同行的工作。研究的重要性和意义。对本科学、分支领域、研究方向的发展有何贡献？对科技、经济、社会发展有何重要意义及应用前景？注意参考文献的时效性。</p>'
		
		
	}
	

	else if(lxsq[weekIndex] == '研究内容'){
		appendIframe=
		'<p>&emsp;&emsp;要过适当的文字点明项目各研究内容之间的关系，使其看上去要能有机地联系在一起，避免拼凑。同时研究内容要在申请经费许可的范围内，避免过多过杂。</p>'+
		'<ul>'+
		'<li><strong>存在问题</strong>： 研究内容大而空，提出的题目很大且内容庞杂、空泛，不具体、不深入，只能大题小作；内容分散，不能集中阐明研究目标；层次不清，主次不分，详略不当，特别是有的通篇不分段落；研究内容撰写得太简单，寥寥几行，根本不能说明问题研究内容宽而泛，近乎为一个分支学科所包含的内容，好似内容很细，实则面面俱到，没有重点，也没有抓住关键。</li>'+
		
		'</ul>'+
		'<ul>'+
		'<li><strong>撰写要求</strong>：内容要适当，重点突出，确保研究周期内完成；与目标相辅相成，为研究目标服务。篇幅要适度，注意与技术路线区别；确定研究目标、内容的依据：回答一个科学问题；根据研究周期、资助强度来确定。</li>'+
		
		'</ul>'
	}
	
	else if(lxsq[weekIndex] == '研究目标'){
		appendIframe=
		'<p>&emsp;&emsp;此处需要点明通过研究要达到的目的，语言要明晰，尽量不用套话虚话。明确的研究目标控制在 2~3 个以内为佳。</p>'+
		'<ul>'+
		'<li><p><strong>撰写方法</strong>：具体、明确、新颖（可以是假说）；与研究内容呼应，是研究内容的结果；</p>'+
		'</li>'+
		'<li><p><strong>参考格式</strong></p>'+
		'<ul>'+
		'<li>探索…问题，明确…关系；揭示…规律；阐明…原理（机制），建立…方法等；</li>'+
		'<li>注意：目标一般 3 条即可，不要太多。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>动词要铿锵有力</strong>：突破、明确、揭示、给出、奠定、建立、提出、开辟、创立、解决、推动、优化、夯实、实现、促进、完善、增强、展现、聚焦、完成、支持、支撑、刻画。</p>'+
		'</li>'+
		'<li><p><strong>名词要深邃隽永</strong>：瓶颈、规律、困难、矛盾、问题、局限、条件、方法、方式、思想、思路、理论、方案、现象、框架、模式、机理、体系、关系、核心、结构、标准、根本、基础、成果、准则、特点、机制、战略、焦点、难点、热点、亮点、认识、作用、调控、计划、创新、领域、前提、关键、动力、设想、指南、特色。</p>'+
		'</li>'+
		
		'</ul>'
	}

	else if(lxsq[weekIndex] == '拟解决的关键问题'){
		appendIframe=
		'<p>&emsp;&emsp;“提出一个问题往往比解决一个问题更重要，因为解决一个问题也许仅仅是一个数学上的或实验上的技能而已。而提出新的问题，新的可能性，从新的角度去看旧的问题，却需要有创造性的想象力，而且标志着科学的真正进步”----爱因斯坦。</p>'+
		'<p>&emsp;&emsp;解决一个科学问题，可能会碰到很多障碍（或技术难点），需要相应的技能。如果这个障碍没有恰当的技能解决，整个课题就会卡壳，无法进行下去。</p>'+
		'<p>&emsp;&emsp;列出整个研究要解决的主要科学问题，并提出明确具体的解决思路。</p>'+
		'<ul>'+
		'<li><strong>关键问题</strong>：研究过程中对达预期目标有重要影响的某些研究内容或因素。为达预期目标所必须掌握的关键技术或研究手段。解决科学问题的关键障碍或困难。</li>'+
		
		'</ul>'+
		'<ul>'+
		'<li><strong>存在问题</strong>：未能抓住关键问题或抓得不准。</li>'+
		'<li><strong>撰写要求</strong>：找出关键科学问题，写出解决办法。</li>'+
		'<li><strong>注意</strong>：一定要分清楚科学问题和技术问题，如何解决、有什么样的意义！</li>'+
		
		'</ul>'
	}

	else if(lxsq[weekIndex] == '项目的特色和创新'){
		appendIframe=
		'<p>&emsp;&emsp;所谓特色创新即在本项目研究领域中申请者与国内外同行所不同的，也即前人未曾有过的新学术思想、新理论、新的研究方法、手段或应用性结果。包括项目的立论依据、研究内容、研究方法与手段、技术路线及实验方案上的研究与创新点进行概括、提炼并集中反映出来。</p>'+
		'<ul>'+
		'<li><p><strong>项目特色</strong>：即项目的独到之处和与众不同，不要和创新性混淆。</p>'+
		'</li>'+
		'<li><p><strong>创新之处</strong>：项目的创新之处即本课题在选题、设计、方法、技术、路线、成果、应用等方面与众不同之处。</p>'+
		'<ul>'+
		'<li>原始创新：填补空白或修改传统的理论；新技术、新方法的发明创造。</li>'+
		'<li>跟踪创新：在前人工作基础上补充、完善现有理论；对原有技术、方法进行修改后产生1＋1＞2 的效果。</li>'+
		'<li>注意：创新点应在充分查阅资料的基础上提出，不能想当然提出。特色与创新之处个列出 2-3 点即可，不要为了创新而创新。</li>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>'
	}

	else if(lxsq[weekIndex] == '研究方案'){
		appendIframe=
		'<p>存在问题：</p>'+
		'<ul>'+
		'<li>过于简单：在实验方案中只有方法名称而无具体步骤。</li>'+
		'<li>过于繁杂：大量罗列一些常规的实验方法。</li>'+
		'<li>撰写要求：以研究项目的需求为前提，尽量采用目前最先进的方法和手段，并将其操作步骤和关键环节体现在技术路线当中（切忌使用有争议的方法）。研究方法与技术路线必须是具体、正确、合理、可行的，以研究项目的需求为前提，尽量采用目前最先进的方法和手段，并将其操作步骤和关键环节体现在技术路线当中。</li>'+
		
		'</ul>'
	}

	else if(lxsq[weekIndex] == '技术路线'){
		appendIframe=
		'<ul>'+
		'<li>存在问题：不清楚，不详细。</li>'+
		'<li>撰写要求：清晰、详细、注意逻辑性。</li>'+
		'<li>撰写方法：以时间顺序为主线设计技术路线；以研究内容为主线设计技术路线；分大小标题，突出逻辑关系。详细地写清楚每个具体步骤。</li>'+
		
		'</ul>'
	}

	else if(lxsq[weekIndex] == '可行性分析'){
		appendIframe=
		'<p>从以下几个方面开展可行性分析：</p>'+
		'<ul>'+
		'<li>理论分析；研究手段、方法分析；</li>'+
		'<li>预实验结果分析；</li>'+
		'<li>所用特殊实验材料（试剂）的分析；</li>'+
		'<li>对所具备的软硬件实验条件进行分析；</li>'+
		'<li>掌握的实验技能及其运用技术方法的能力分析（编程能力，工具使用等方面）。</li>'+
		
		'</ul>'
	}

	else if(lxsq[weekIndex] == '预期研究进展和成果'){
		appendIframe=
		'<p>预期研究进展：应是各研究阶段的研究方案、阶段成果与时间进度的综合表述。</p>'+
		'<ul>'+
		'<li>研究成果：包括成果内容、成果形式、成果数量三要素；应明确、具体，具有可检查性。</li>'+
		'<li>成果内容：回答在什么问题上或哪几个问题上将取得进展并获得成果；</li>'+
		'<li>成果形式：成果形式通常包括论文、论文集、学术专著、研究报告、政策性建议，计算机软件甚至一些系统设计等；</li>'+
		'<li>成果数量：要说明涉及到的成果形式的数量。</li>'+
		
		'</ul>'
	}

	else if(lxsq[weekIndex] == '研究计划'){
		appendIframe=
		'<p>按照季度撰写研究计划，预期研究结果包括：</p>'+
		'<ul>'+
		'<li>理论成果：建立/丰富/补充/填补 ......</li>'+
		'<li>技术方法：建立/完善 …...</li>'+
		'<li>专 利：可望获得 ……</li>'+
		'<li>论 文：国际、国内</li>'+
		
		'</ul>'
	}
	
	else if(lxsq[weekIndex] == '研究基础与条件'){
		appendIframe=
		'<p>从以下几方面阐述：</p>'+
		'<ul>'+
		'<li>已完成的重要项目、论文论著、获奖情况――研究经历与实力的证明；</li>'+
		'<li>与课题有关的论文论著、项目与获奖情况――相关研究基础的证明；</li>'+
		'<li>软件与硬件条件（现有设备与工作环境）。</li>'+
		
		'</ul>'
	}

	;
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
	if(gsyq[weekIndex] == '专有名词'){
		appendIframe=
		'<p>&emsp;&emsp;报告中的专有名词、公式、图片、字母和数字、流程图、伪代码的格式都要有一定的规范性，本章给出他们的格式建议。</p>'+

		'<p>&emsp;&emsp;英文全称首字母大写+英文简称，并使用全角小括号括起来；后续再出现可以直接使用简称。例如：多目标优化问题（Multi-objective Optimization Problems, MOPs），遗传算法（Genetic Algorithm, GA）（<strong>注意：论文摘要不属于正文，摘要出现的缩写在正文中首次出现时要重新定义</strong>）。</p>'


		
	}
	

	else if(gsyq[weekIndex] == '公式'){
		appendIframe=
		'<p>&emsp;&emsp;根据公式在段落中的位置在公式结尾处加上符号“.”或者“,” ，并表明是第几个公式，例如下为公式（1）：</p>'+
		'<p><img src="images/image_sm/公式.png" referrerpolicy="no-referrer" width=80%></p>'+
		'<p>其中（<strong>顶格写</strong>），$x$为决策变量。</p>'+
		'<p>注意：</p>'+
		'<ul>'+
		'<li>变量使用斜体，一般小写；常量不能使用斜体，一般大写；例如上式的 $j$ 和 $M$。</li>'+
		'<li>向量、矩阵、集合符合均要加粗，如上式的 $x$。</li>'+
		
		'</ul>'
	}

	else if(gsyq[weekIndex] == '图片排版'){
		appendIframe=
		'<p>&emsp;&emsp;为了保证报告中图片的清晰度，建议在报告中插入矢量图，latex中可插入pdf格式的矢量图。注意：<strong>图片中文字的字体与正文字体保持一致，字号与正文相同或小一号</strong>，例如正文字号为五号，图片中的字号可以为小五。</p>'+
		'<ul>'+
		'<li><p>word中插入矢量图的方式和排版</p>'+
		'插入矢量图，如.emf格式，Microsoft visio画图软件、Inkscape画图软件和Power Point软件均可导出.emf格式。如果想要多个图片并列放置，可先插入表格，再往表格里插入图片，最后隐藏表格框，如下所示（在导出的pdf格式中，不会显示表格虚线边框）。'+
		'</li>'+
		
		'</ul>'+
		'<p><img src="images/image_sm/图片排版.png" referrerpolicy="no-referrer" width=80%></p>'
		
	}

	else if(gsyq[weekIndex] == '流程图'){
		appendIframe=
		'<p>画流程图需要有一定的规范性，需要注意以下几点：</p>'+
		'<ul>'+
		'<li>注意各模块形状；</li>'+
		'<li>处理流程须以单一入口和单一出口绘制，同一路径的指示箭头应只有一个；</li>'+
		'<li>有循环进入之前模块的，将箭头指向该模块的已有的输入线，不能直接指向该模块（参见下图的第一、第二个模块间的“T”型结构）。</li>'+
		
		'</ul>'+
		'<div align="center"><img src="images/image_sm/流程图.png" width="70%" align="center"> </div>'
		
	}

	else if(gsyq[weekIndex] == '伪代码'){
		appendIframe=
		'<p>word里面可以将伪代码放在表格里，参考格式如下所示：</p>'+
		'<p><img src="images/image_sm/伪代码2.png" referrerpolicy="no-referrer" width=80%></p>'+
		'<h4>2.6.6 <span id="2.6.6">参考文献</span></h4>'+
		'<p>&emsp;&emsp;参考文献的著录均应符合国家有关标准（ GB/T 7714-2015标准 ）。参考文献的序号左顶格[1]，[2]，[3]，每一参考文献条目的最后均以“.”结束，所有参考文献中相同字段的格式要统一，建议给出所有作者列表。参考资料类型可分为专著[M]，会议论文集[C]，报纸文章[N]，期刊文章[J]，学位论文[D]，报告[R]，标准[S]，专利[P]。</p>'+
		'<p>简单方式： </p>'+
		'<p>\\usepackage[backend=biber,style=gb7714-2015]{biblatex} </p>'+
		'<p>%设置gbalign选项以改变文献表序号标签对齐方式，设置gbpub=false取消缺省出版项自填补信息，比如: \\usepackage[backend=biber,style=gb7714-2015,gbalign=gb7714-2015,gbpub=false]{biblatex}</p>'+
		'<p>%默认方式，所有文献使用一种著录格式，即GB/T 7714-2015样式'+
		'\\usepackage[backend=biber,style=gb7714-2015ms]{biblatex}</p>'+
		'<p>%设置gbstyle=false，则中文文献使用GB/T 7714-2015著录格式，而其它语言文献使用biblatex标准样式'+
		'\\usepackage[backend=biber,style=gb7714-2015ms,gbstyle=false]{biblatex}</p>'
		
	}

	else if(gsyq[weekIndex] == '参考文献'){
		appendIframe=
		'<p>&emsp;&emsp;参考文献的著录均应符合国家有关标准（ GB/T 7714-2015标准 ）。参考文献的序号左顶格[1]，[2]，[3]，每一参考文献条目的最后均以“.”结束，所有参考文献中相同字段的格式要统一，建议给出所有作者列表。参考资料类型可分为专著[M]，会议论文集[C]，报纸文章[N]，期刊文章[J]，学位论文[D]，报告[R]，标准[S]，专利[P]。</p>'+
		'<p>简单方式：</p>'+
		'<p>\\usepackage[backend=biber,style=gb7714-2015]{biblatex} </p>'+
		'<p>%设置gbalign选项以改变文献表序号标签对齐方式，设置gbpub=false取消缺省出版项自填补信息，比如: \\usepackage[backend=biber,style=gb7714-2015,gbalign=gb7714-2015,gbpub=false]{biblatex}</p>'+
		'<p>%默认方式，所有文献使用一种著录格式，即GB/T 7714-2015样式'+
		'\\usepackage[backend=biber,style=gb7714-2015ms]{biblatex}</p>'+
		'<p>%设置gbstyle=false，则中文文献使用GB/T 7714-2015著录格式，而其它语言文献使用biblatex标准样式'+
		'\\usepackage[backend=biber,style=gb7714-2015ms,gbstyle=false]{biblatex}</p>'
		
	}

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
	if(pbyy[weekIndex] == '格式排版'){
		appendIframe=
		'<p>&emsp;&emsp;写研究论文主要目的无非是让别人知道你的研究成果和发表论文。所以格式要按照刊物的要求，不管中文和英文对发表的论文都有一定的要求，投稿之前一定要记得好好的上网查一下格式，一般核心刊物或者国际刊物都会有自己的网站，上面有投稿指南和联系方法。尤其中文刊物要求投稿的时候就符合一定的格式规范，这一点很重要。</p>'+
		
		'<p>&emsp;&emsp;图表是论文写作中的重要元素，用来简明的表达主要的实验数据和结论，一定要制作的比较美观，对每一个细节都可以很好的控制。</p>'+
		'<p>&emsp;&emsp;删除各页底部高于 1.5 倍行间距的空白。否则破坏了正文的逻辑流。通过移动相关文字、调整行间距等综合措施完全可以做到。</p>'+
		'<p>&emsp;&emsp;任何图都不应该失真不清晰。画的流程图使用 Visio，然后以对象插入到 Word 文档中。使用其它支持.emf 格式导出的软件来画图，再插入到 Word 文档中。转成.pdf 格式后，无限缩放都不会失真。</p>'+
		'<p>&emsp;&emsp;删除公式前的冒号和“如下”。关于数学公式的表达和排版，参考同济大学编写的《高等数学》教材。</p>'
		
		
	}
	

	else if(pbyy[weekIndex] == '格式排版的意义'){
		appendIframe=
		'<p>&emsp;&emsp;这里分享一篇关于格式排版的网文《文稿格式体现了一个学者的学术品质》（<a href='+
		'http://blog.sciencenet.cn/blog-58729-960501.html'+
		'>http://blog.sciencenet.cn/blog-58729-960501.html</a>）。</p>'+
		'<p>&emsp;&emsp;平时，很多学生，觉得文献格式，并不重要。其实，文献格式排版，非常重要，考察了一个人模仿能力，对细节的精确把控与表达能力。看一个人的文献格式的排版水准，基本上能看出一个人，思维是否缜密、观察力是否强、意志力是否坚定。文献格式的模仿过程，和学习书法的描红类似，看似机械，但还是能将一个人的能力暴露无遗。</p>'+
		'<p>&emsp;&emsp;格式排版虽然非常简单，都是一些标点符号、字体、标号的统一化，规范化过程。但，细节决定胜负，细节决定命运，细微之处见功夫，不规范的文献格式，影响第一印象。在我阅读稿件的时候，如果对方排版的缜密性，几乎让人窒息。这会让我从困意中清醒，生怕错过了一个认真的人，一个用心的人。漂亮的排版，就如精心打扮的一个人，是对别人的尊重，也是对自我的取悦，是一种格调，更是一种认真的生活态度，是一种几乎工业化的标准苛求自己，更加彰显了其内心的冷峻与高远。</p>'+
		'<p>&emsp;&emsp;如果说，走路是跑步的基础，模仿是便是学习和科研的起步阶段，是创新的基础。其中，文献格式的规范这等科研规范的训练，便是以后开展学术活动的基础。不会走就想跑，步子迈大了，就容易扯了。我对能准确开展格式排版的人，充满了敬意。格式排版，体现了一个人对规矩的遵守，对规则的遵循以及对秩序的尊重。他表达了一个人心性的成熟的程度，表明一个人是否能好的掌控自己，管理自己。</p>'+
		'<p>&emsp;&emsp;认真仔细的格式排版，是一种积极的人生态度，是一种高等级的自由，是一种高尚审美情趣的展现。格式排版，是学术表达的一种形式，它承载了学术成果的内容。即使有很好的科研成果，但是恶劣的排版，通常会糟蹋了研究内容，就像臭豆腐一样，虽有营养，但臭不可闻。一个出类拔萃的人，一定是一个懂得观察，深谙模仿的人，一定是一个会格式排版的人。</p>'+
		'<p>&emsp;&emsp;格式是一种美，是一种韵律，就像仪仗队的阵列，严谨、严肃中彰显着纪律和自我克制带来的力量。排版拙劣，漏洞百出，屡教不改的人，终归还是一个人的能力问题，注意力无法持久集中造成的。文献格式排版过程，是一种心思缜密，追求统一化和标准化、追求极致、追求完美的过程。同时，由于文献格式排版风格非常繁多，因此，也能表达一个人的审美和品位。文献格式排版过程，表现出了做研究的细致和用心，是工匠精神在学术上的一种体现。</p>'+
		'<p>&emsp;&emsp;从今天开始，我们要做一个喜欢而又善于格式排版的人，它可以磨砺我们的意志，让我们品质得到淬变和升华。因此，格式排版，某种程度上，体现了一个当代学人的治学态度和学术品质。</p>'
		
	}
	
	
	
	;
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
	if(zlrz[weekIndex] == '发明专利'){
		appendIframe=
		'<p>&emsp;&emsp;本节主要论文发表单位及资助的填写、专利申请、软件著作权登记流程等三个部分进行阐述，其中专利申请和软件著作权登记流程具体可以参考学校知识产权与技术转移中心官网：<a href='+
		'http://tto.cug.edu.cn/index.htm'+
		'>http://tto.cug.edu.cn/index.htm</a> 。</p>'+
		
		'<p>&emsp;&emsp; 专利申请所需提供的材料主要是专利基金申请表。专利申请的具体流程如下图所示，从学校知识产权与技术转移中心官网可以获得具体的申请流程及申请材料：<a href='+
		'http://tto.cug.edu.cn/info/1008/2308.htm'+
		'>http://tto.cug.edu.cn/info/1008/2308.htm&gt;</a> 。此外，附件中提供了本小组成员肖龙的申请材料《附件2-8-1 专利受理通知书及申请材料-肖龙》。</p>'+
		'<div align="center"> <img src="images/image_sm/专利申请流程.png" width="70%"></div>'
		
		
	}
	

	else if(zlrz[weekIndex] == '软件著作权'){
		appendIframe=
		'<p>&emsp;&emsp;软件著作权（软著）登记所需提供的材料主要包括：<strong>申请表、源程序和文档</strong>。申请流程和具体的填写说明如下所述，也可以从学校知识产权与技术转移中心官网获得：<a href='+
		'http://tto.cug.edu.cn/info/1009/2314.htm'+
		'>http://tto.cug.edu.cn/info/1009/2314.htm</a> 。此外，附件中提供了本小组成员肖龙的申请材料《附件2-8-2 软著申请材料-肖龙》。</p>'+
		'<p><img src="images/image_sm/软著申请流程.png" referrerpolicy="no-referrer" width="80%"></p>'+
		'<ul>'+
		'<li><p><strong>申请表</strong></p>'+
		'<ul>'+
		'<li><strong>软件全称</strong>：申请著作权登记的软件的全称。软件名称应简短明确、针对性强，各种文件中的软件名称应填写一致。名称必须以“软件”、“系统”、“平台”、“插件”、“中间件”等结尾，不能写成“××××系统软件”。</li>'+
		'<li><strong>软件简称：</strong>对登记软件全称进行简化的名称，没有简称可以不填此栏。</li>'+
		'<li><strong>版本号：</strong>原创软件通常写成“V1.0”。</li>'+
		'<li><strong>第一申请人：</strong>主要负责开发的一个单位，例：中国地质大学（武汉）。</li>'+
		'<li><strong>其他申请人：</strong>合作研究或合作开发单位、个人，应与中国地质大学（武汉）签订有关本发明创造共享及知识产权利益分配的合同条款，提交纸质材料时应同时提交其他申请人的相关材料，如法人证书、组织机构代码证等。</li>'+
		'<li><strong>编程人员：</strong>本软件编程人员。</li>'+
		'<li><strong>单位：</strong>填写编程人员所在二级单位名称。</li>'+
		'<li><strong>软件权属：</strong>对于委托开发和合作开发，请提供合同书或协议书的复印件；下达任务开发：请提供下达任务开发软件任务书；利用他人软件开发的软件，请提供许可证明。</li>'+
		'<li><strong>硬件环境：</strong>机型及CPU。</li>'+
		'<li><strong>软件环境：</strong>操作系统、支持软件的名称及版本号。</li>'+
		'<li><strong>编程软件：</strong>登记软件的编程语言及版本号。</li>'+
		'<li><strong>源程序量 </strong>：程序条数。</li>'+
		'<li><strong>主要功能和技术特点：</strong>限350字内（包括字符）。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>源程序</strong></p>'+
		'<ul>'+
		'<li>源程序是指使用计算机语言编写的指令或者语句序列。</li>'+
		'<li>按前、后各连续30页,总共提供60页，不足60页全部提交。源程序每页不少于50行(每页不能有空行，结束页除外)，右上角标注页码。</li>'+
		'<li>源程序的页眉上应当标注该申请软件名称，并应当与申请表中相应内容完全一致。</li>'+
		
		'</ul>'+
		'</li>'+
		'<li><p><strong>文档</strong></p>'+
		'<ul>'+
		'<li>文档可以在用户手册、设计说明书、使用说明书等中任选一种。按前、后各连续30页, 共60页(不足60页全部提交)。</li>'+
		'<li>每页不少于30行(结束页除外)，右上角标注页码（从正文开始编号）。</li>'+
		'<li>文档的页眉上应当标注该申请软件名称，并应当与申请表中相应内容完全一致。</li>'+
		'<li>文档包括封面（只需填写软件名称）、目录、正文三部分。</li>'+
		
		'</ul>'+
		'</li>'+
		
		'</ul>'+
		'<p><strong>注意事项</strong>：源程序和文档中不要出现以下情况：</p>'+
		'<ul>'+
		'<li>与申请表中“完成日期”栏不一致的日期；</li>'+
		'<li>在文件中不要出现单位或个人名称（本软件著作人以外，如可以出现“中国地质大学(武汉)”，但不能写成“中国地质大学(武汉)××学院”，“中国地质大学(武汉)××实验室”等等）。</li>'+
		'<li>如果在文档中说明为自然科学基金、863等资助项目，请提供合同复印件。</li>'+
		'<li>文档中每幅图表上面必须附相应说明（如图X所示/如下图X所示。图表下方只需标注“图X”，不需再附详细图解）</li>'+
		
		'</ul>'
	}
	
	
	
	;
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 开发平台 > "+kfpt[weekIndex]);
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 编程语言 > "+bcyy[weekIndex]);
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 编程环境 > "+bchj[weekIndex]);
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 画图工具 > "+htgj[weekIndex]);
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 天线建模工具");
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > Latex");
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 幻灯片制作 > "+mppt[weekIndex]);
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 静态网页开发工具 > "+jtwy[weekIndex]);
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > GitHub和GitLab版本控制工具 > "+git[weekIndex]);
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 软件发布");
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > Linux常用命令");
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > Makefile文件和CMake工具");
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
		$(".sitemap").text("当前位置： 学习手册 > 工具 > 演化计算领域期刊、会议");
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

//学习手册：实验室纪律-考勤与加班
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
	
//学习手册：实验室纪律-两周小结
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
	
//学习手册：实验室纪律-助研考核
	$(".zykh").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： 实验室管理 > 实验室纪律 > 助研考核");
		//!编辑内容
		appendIframe='<p>&emsp;&emsp;助研补助根据科研和工作情况进行发放。以月度考核方式发放的助研补助，<strong>需要在每个月的10号之前在系统提交考核总结报告</strong>，并告知老师进行考核验收，否则将无法发放。所有参与助研同学必须在学期末提交学期考核报告。</p>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室纪律-研讨会
	$(".yth").click(function(){
		//一级标题上色
		$(".article_content").text("");
		$(".sitemap").text("当前位置： > 实验室管理 > 实验室纪律 > 研讨会");
		//!编辑内容
		appendIframe='<p>&emsp;&emsp;实验室每周三晚19：00在信息楼718会议室开展一次组内研讨会，需本人现场纸质签到，因事不能参加研讨会，需提前向彭劢请假。每次研讨会由2名同学进行汇报，按照规定好的顺序轮流汇报，若有<strong>开题答辩、中期答辩、毕业答辩、文献综述等</strong>大型汇报，需要在组内进行一次预汇报，联系彭劢进行顺序调换。</p>'
		//!结束编辑内容
		$(".article_content").append(appendIframe);
	});
	
//学习手册：实验室纪律-实验室管理制度
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
		$(".sitemap").text("当前位置： 实验室管理 > 投稿要求 > 论文署名和单位");
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
		$(".sitemap").text("当前位置： 实验室管理 > 投稿要求 > 资助基金");
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