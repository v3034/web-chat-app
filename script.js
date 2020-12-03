

output("p","bot","Welcome <br> Say Hi to start the conversation.....");

var user_input=document.getElementById("input")


user_input.addEventListener("click",function loadDoc() {
  var xhttp = new XMLHttpRequest();
  try{
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
    var data= JSON.parse(this.responseText);
    var msg=document.getElementById("inp").value;
    
    document.getElementById("inp").value="";
    
    output("p","user",msg);
    
    if(msg=="Hi" || msg=="hi" || msg=="hy" || msg=="Hy")
    {
      output("p","bot",get_timeofday_greeting()+","+Greeting()+"<br>"+data["menu"]);
    }

    else if(msg.length==1)
    {
      if(data[msg]){
         output("p","bot",data[msg]);
         if(msg=="4"){
          output("p","bot","Say hi to restart the bot");
        }
      }

      else{
          output("p","bot","Plz enter only a number [1-3]");
      }
    }

    else if(msg.includes("Shiny")){
      Morning(msg.split(" ")[1]);
    }

    else if(msg.includes("Matniee"))
    {
      Afternoon(msg.split(" ")[1].trim())
    }

    else if(msg.includes("Teatime")){
      Evening(msg.split(" ")[1].trim());
    }

    else if(msg.includes("back")){
      output("p","bot",data["menu"]);
    }

    else{
      output("p","bot","Sorry I didnt get that");
    }

  }

 };

  xhttp.open("GET", "file.json", true);
  xhttp.send();
  }

  catch(e){
    output("p","bot","Sorry I didnt get that");
  }

}

);


function output(tag,className,text){

  var reply= document.getElementById("main")


  if(className=="bot"){
    reply.innerHTML+=`<img class="bot_image" 
    src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/becoming-human-chatbot-300x175.jpg">`;
  }

  if(className=="user"){
    reply.innerHTML+=`<img  class="user_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrbGOT7l_cyQNoFXn8BuCGrPmTEdlrc-keug&usqp=CAU">`;
  }

  if(className=="image"){
    reply.innerHTML+=`<img class="bot_image" 
    src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/becoming-human-chatbot-300x175.jpg">`;
  }

  reply.innerHTML+=`<${tag} class=${className}>${text}</${tag}>`
}


function Greeting(){ 

  res=[" Nice to see you. I can provide the following options for you", 

  " Its a pleasure chatting with you. Here are the options I can provide you"];  
  
  return res[Math.floor((Math.random() * res.length) + 1)-1];
  
}

function get_timeofday_greeting(){

    var date = new Date();
    var current_time = date.getHours();
    let timeofday_greeting ="Good Morning"
    if(current_time>21)
        timeofday_greeting ="Good Night"
    else if(current_time>16)
        timeofday_greeting ="Good Evening"
    else if(current_time>=12)
        timeofday_greeting ="Good AfterNoon"
    
    return timeofday_greeting ;

}




function Morning(shows)
{
   output("p","bot","This is the Dolphin show")
    output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://ca-times.brightspotcdn.com/dims4/default/fc15f5f/2147483647/strip/true/crop/3497x2186+0+73/resize/2000x1250!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F17%2Fba0c75c848a38e23ba889a59f52b%2F3082061-sd-me-seaworld-dolphins003.JPG'>","This is Dolphin show");
   
    output("p","bot","This is Ethic museum")
    output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://keralafolkloremuseum.org/images/ethnicHandyImg.jpg'>","This is ethic museum");
    
    output("p","bot","If you want to know the evening and afternoon shows"+"<br>"+ "enter back");
}



function Afternoon(shows)
{
      output("p","bot","This is Water ride")
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2018/06/cover10.jpg'>","This is water ride");
      output("p","bot","This is under water ride")
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://i1.wp.com/www.holidaypost.in/wp-content/uploads/2014/03/tikuji-ni-wadi.jpg'>","This is under water ride")
      output("p","bot","If you want to know the details of morning and evening "+"<br>"+ "enter back")
}

function Evening(shows)
{
      output("p","bot","This is Gaint Wheel")
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://media.cntraveler.com/photos/55c8be0bd36458796e4ca38a/master/pass/london-eye-2-cr-getty.jpg'>","This is Gaint wheel");
      output("p","bot","This is Planetary model")
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://i.ytimg.com/vi/rbXXCm6Buns/maxresdefault.jpg '>","This is planetary model")
      output("p","bot","If you want to know the details of morning and afternoon"+"<br>"+ "enter back")
  
}