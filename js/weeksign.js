// JavaScript Document

var concentWeek2020F = new Array();
concentWeek2020F[0] = "weeksign/record/205-第7周考勤.pdf";
concentWeek2020F[1] = "weeksign/record/205-第8周考勤.pdf";
concentWeek2020F[2] = 'weeksign/record/205-第9周考勤.pdf';
concentWeek2020F[3] = 'weeksign/record/205-第10周考勤.pdf';
concentWeek2020F[4] = 'weeksign/record/205-第11周考勤.pdf';
concentWeek2020F[5] = "weeksign/record/205-第12周考勤.pdf";
concentWeek2020F[6] = 'weeksign/record/205-第13周考勤.pdf';
concentWeek2020F[7] = 'weeksign/record/205-第14周考勤.pdf';
concentWeek2020F[8] = 'weeksign/record/205-第15周考勤.pdf';
concentWeek2020F[9] = 'weeksign/record/205-第16周考勤.pdf';
concentWeek2020F[10] = 'weeksign/record/205-第17周考勤.pdf';

var concentWeek2021S = new Array();


$(document).ready(function(){
	$(".weekselect2020F a").click(function(){
		clearFormat();
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index()-$(".weekselect2021S").length;
		for(i=0;i<weekLength;i++){
			if(i == weekIndex){
					$(".weekselect2020F").eq(i).attr('class','menuselected weekselect2020F');
					$(".weekFa").eq(i+$(".weekselect2021S").length).css('color','#3d8dc0');
					$(".sitemap").text("当前位置： 实验室概况 > 2020年秋季学期第" + String(i+7) + "周考勤");
					$(".article_content").text("2020年秋季学期第" + String(i+7) + "周考勤情况：");
					var appendIframe = '<div class="record" align="center"><iframe src=' + concentWeek2020F[i] + ' width="1000" height="500"> </iframe></div>';
					$(".article_content").append(appendIframe);
			}
			else if(i != weekIndex){
				$(".weekselect2020F").eq(i).attr('class','weekselect2020F');
//				$(".weekFa").eq(i).css('color','black');
			}
		}
	});
	
	$(".weekselect2021S a").click(function(){
		clearFormat();
		$(".article_content").text("");
		var weekLength = $(this).parent().parent().find("li").length;
	    var weekIndex = $(this).parent().index();
		for(i=0;i<weekLength;i++){
			if(i == weekIndex){
					$(".weekselect2021S").eq(i).attr('class','menuselected weekselect2021S');
					$(".weekFa").eq(i).css('color','#3d8dc0');
					$(".sitemap").text("当前位置： 实验室概况 > 2021年春季学期第" + String(i+1) + "周考勤");
					$(".article_content").text("2021年春季学期第" + String(i+1) + "周考勤情况：");
					if(concentWeek2021S[i] != undefined){
						var appendIframe = '<div class="record" align="center"><iframe src=' + concentWeek2021S[i] + ' width="1000" height="500"> </iframe></div>';
					}else appendIframe='<p>暂未发布......</p>';

					$(".article_content").append(appendIframe);
			}
			else if(i != weekIndex){
				$(".weekselect2021S").eq(i).attr('class','weekselect2021S');
//				$(".weekFa").eq(i).css('color','black');
			}
		}
	});
});

function clearFormat(){
	var weekLength2020F = $(".weekselect2020F").length;
	var weekLength2021S = $(".weekselect2021S").length;
	for(i=0;i<weekLength2020F;i++){
		$(".weekselect2020F").eq(i).attr('class','weekselect2020F');
	}
	for(i=0;i<weekLength2021S;i++){
		$(".weekselect2021S").eq(i).attr('class','weekselect2021S');
	}
}