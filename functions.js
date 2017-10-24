//funksioni per vendosjen e ores se sakte. 

function showDate()
  {
    var now = new Date();
	var days = new Array('Sun','Mon','Tue','Wed','Thur','Fri','Sat');
	var months = new Array('Jan','Feb','March','Apr','May','June','Jul','Aug','Sep','Oct','Nov',
    'Dec');
	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
	function fourdigits(number)
	{
		return (number < 1000) ? number + 1900 : number;
	}
	
	tnow=new Date();
	thour=now.getHours();
	tmin=now.getMinutes();
	tsec=now.getSeconds();
	
	if (tmin<=9) { tmin="0"+tmin; }
	if (tsec<=9) { tsec="0"+tsec; }
	if (thour<10) { thour="0"+thour; }
	
	today = days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + ", " + (fourdigits(now.getYear())) + " " + thour + ":" + tmin ;
	document.getElementById("demo").innerHTML = today;
  }

    setInterval("showDate()", 0);

//funksioni per shfaqjen ose jo te kategorive duke klikuar folderin ne te djathte.
/** */

    $(document).ready(function(){
    $("#glyphicon-folder-close").click(function(){
        $("#navertical").toggle();
       
     });
  });

    //funksioni per te shfaqur nr random ne inputin e kartes 
    function random() {

var a=Math.floor(1000 + Math.random() * 9000);
var b=Math.floor(1000 + Math.random() * 9000);
var c=Math.floor(1000 + Math.random() * 9000);
var d=Math.floor(1000 + Math.random() * 9000);

    document.getElementById("nrKarte").value = a+" "+b+" "+c+" "+d;
}



 //  Badge Counter
 	var clicks = 0;
      function count() {
      

        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    var clicks1 = 0;
    function count1() {
        clicks1 += 1;
        document.getElementById("clicks1").innerHTML = clicks1;
    };
    var clicks2 = 0;
    function count2() {
        clicks2 += 1;
        document.getElementById("clicks2").innerHTML = clicks2;
    };
    var clicks3 = 0;
    function count3() {
        clicks3 += 1;
        document.getElementById("clicks3").innerHTML = clicks3;
    };
    var clicks4 = 0;
    function count4() {
        clicks4 += 1;
        document.getElementById("clicks4").innerHTML = clicks4;
    };
    var clicks5 = 0;
    function count5() {
        clicks5 += 1;
        document.getElementById("clicks5").innerHTML = clicks5;
    };


 $(document).ready(function() {
    $("#cancel,#cancel1,#cancel2,#cancel3, #cancel4").click(function() {
        $("input").val("");
         $("textarea").val("");
          $(".badge").val("");
        
    });
});

//funksioni json
function ajax_get_json() {
    var data = {
        "Ushqime": [{
                "id": "001",
                "name": "Makarona",
                "cmimi": 57
            }, {
                "id": "002",
                "name": "Oriz",
                "cmimi": 68
            }, {
                "id": "003",
                "name": "Sheqer",
                "cmimi": 100
            }, {
                "id": "004",
                "name": "Kripe",
                "cmimi": 20
            }
        ],
        "Pije": [{
                "id": "01",
                "name": "Pepsi",
                "cmimi": 80
            }, {
                "id": "02",
                "name": "Fanta",
                "cmimi": 80
            }, {
                "id": "03",
                "name": "Ivi",
                "cmimi": 80
            }, {
                "id": "04",
                "name": "Uje",
                "cmimi": 50
            }, {
                "id": "05",
                "name": "Red Bull",
                "cmimi": 200
            }
        ]
    };
   
  
  }
//
$(document).ready(function(){
         $("#ushqime").click(function(){
          ajax_get_json();
        var results = document.getElementById('results');
        results.innerHTML = data.Ushqime[0].name + "   " +  data.Ushqime[1].name+ "   " + data.Ushqime[2].name;

         
});  
});
// Shtimi i klientit ne Dropdown
$(document).ready(function(){
         $("#shtoKlient").click(function(){
         $("#klient").append("<option>"+$("#emri").val()+"</option>");
         $("input").val("");
});  
});

$('#shtoKlient').click(function() {
    $('.modal').modal('hide');
});