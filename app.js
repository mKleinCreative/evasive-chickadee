

var quotes = [
  "I got an ant farm... them fellas didn't grow shit!",
"I went to a doctor, all he did was suck blood from my neck. Don't go see Dr. Acula.",
"I had a Mr. Pibb, Mr. Pibb is a replica of Dr. Pepper... but it's the bullshit replica, cause dude didn't even get his degree.",
"One time a guy handed me a picture and said \"Here's a picture of me when I was younger.\" Every picture is of you when you were younger! \"Here's a picture of me when I'm older.\" You son of a bitch, how'd you pull that off? Let me see that camera.",
"I had a roommate, his name was Eddie, and Eddie was slow on the mental draw. I was writing a letter, I had a problem... I said, \"Ed, how do you abbreviate Arkansas?\" He said, \"I don't know, just start spelling it, then quit!\"",
"Like, we had a refrigerator with a hard-boiled egg inside, after a few days the shell started to crack. Eddie's first comment was \"man, this guy's a survivor!\"",
"I can't floss my teeth, man... I can't get into the flossing thing. People who smoke cigarettes, they say \"man, you don't know how hard it is to quit smoking.\" Yes I do. It's as hard as it is to start flossing!",
"You know when you go to concerts, and the kids get on stage and they jump into the crowd, stage diving? People think that's dangerous, but not me. Because humans are made out of 95% water! So the audience is 5 percent away from a pool.",
"I rent a lot of cars, cause I go on the road. And when I drive a rental car, I don't know what's going on with it, right? So a lot of times I'll drive for like 10 miles with the emergency brake on. That doesn't say a lot for me, but it really doesn't say a lot for the emergency brake.",
"I play the guitar, I taught myself how to play the guitar, which was a bad decision... because I didn't know how to play it, so I was a shitty teacher. I would never have went to me.",
"I hate turkeys. If you go to the grocery store and you stand in front of the lunchmeat section for too long, you start to get pissed off at turkeys. You see, like, turkey ham, turkey pastrami, turkey bologna... somebody needs to tell the turkeys, \"man, just be yourself!\"",
"I order the club sandwich all the time, but I'm not even a member, man! I don't know how I get away with it.",
"I'm sick of your bullshit, Bootstrap!"
];

var background = [
  '#C71585', 'white',
  '#191970', 'white',
  '#FFE4E1', 'black',
  '#FFE4B5', 'black',
  '#FFDEAD', 'black',
  '#6B8E23', 'white',
  '#FF4500', 'white',
  '#DA70D6', 'white',
  '#EEE8AA', 'black',
  '#98FB98', 'black',
  '#AFEEEE', 'black',
  '#DB7093', 'white',
  '#FFEFD5', 'black',
  '#FFDAB9', 'black',
  '#CD853F', 'white',
  '#FFC0CB', 'black',
  '#DDA0DD', 'black',
  '#B0E0E6', 'black',
  '#BC8F8F', 'white',
  '#4169E1', 'white',
  '#8B4513', 'white',
  '#FA8072', 'white',
  '#F4A460', 'black',
  '#2E8B57', 'white',
  '#A0522D', 'white',
  '#87CEEB', 'black',
  '#6A5ACD', 'white',
  '#708090', 'white',
  '#00FF7F', 'black',
  '#4682B4', 'white',
  '#D2B48C', 'black',
  '#D8BFD8', 'black',
  '#FF6347', 'white',
  '#40E0D0', 'black',
  '#EE82EE', 'white',
  '#F5DEB3', 'black'

]

var lastPos = 0;
var timer = 0;
var backColor = 'rgba(0,0,0,.3)';
var val = 'rgba(0,0,0,.3)';
var timer1;
var timer2;
var timer3;
var timer4;
var timer5;

function quote(pos) {
  return quotes[pos];
}

function bgcolor() {
  var pos = Math.floor(Math.random() * (36));
  var newArr = [];
  newArr.push(background[pos * 2]);
  newArr.push(background[pos * 2 + 1]);
  return newArr;
}


function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.3)';
    }
    throw new Error('Bad Hex');
}


$(document).ready(function () {

  timer = setInterval('$("#makeWork").click()', 15000);


  $('#makeWork').click(function () {

    $('.quotation').empty();
    do {
      var pos = Math.floor(Math.random() * (quotes.length));
    } while (pos === lastPos);
    $('.quotation').append('<p class="quotation">' + quote(pos) + '</p>');
    lastPos = pos;
     do {
      var backArr = bgcolor();
      var val = hexToRgbA(backArr[0]);
      console.log(val);
    } while (val === backColor);
    $('#main-content').css('background-color', val);
    $('#main-content').css('color', backArr[1]);
    $(".one").delay(1500).queue(function(next) {
      $(".one").css("background-color", val);
      next();
    });
    $(".two").delay(1200).queue(function(next) {
      $(".two").css("background-color", val);
      next();
    });
    $(".three").delay(900).queue(function(next) {
      $(".three").css("background-color", val);
      next();
    });
    $(".four").delay(600).queue(function(next) {
      $(".four").css("background-color", val);
      next();
    });
    $(".five").delay(300).queue(function(next) {
      $(".five").css("background-color", val);
      next();
    });
    backColor = val;
    clearInterval(timer);
    timer = setInterval('$("#makeWork").click()', 15000);

  });

})
