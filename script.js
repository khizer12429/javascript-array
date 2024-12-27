// chap no 14-16

// question 1
// let std_name = [];

// question 2
// let std_name = [];

// question 3
// let std_name = ["khizer , "ali" , "huzaifa"];

// question 4
// let std_name = [ 24 , 25 , 84 ];

// question 5
// let bolena = [true , false , true , false];

// question 6
// let mix_array = [25 , 26 , "khizer" , "ali" , 42 , true , false];

// question 7
// let ed_qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"];
// document.write("Qualification" + "<br>");
// document.write(ed_qualification[0] + "<br>");
// document.write(ed_qualification[1]+ "<br>");
// document.write(ed_qualification[2]+ "<br>");
// document.write(ed_qualification[3]+ "<br>");
// document.write(ed_qualification[4]+ "<br>");
// document.write(ed_qualification[5]+ "<br>");
// document.write(ed_qualification[6]+ "<br>");
// document.write(ed_qualification[7]+ "<br>");

// question 8
// let std_name = ["khizer" , "ahmed" , "halal"];
// let score = [285 , 322 , 452];
// let total_marks = 500;
// let percentage = (score[0] / total_marks) * 100;
// let percentage1 = (score[1] / total_marks) * 100;
// let percentage2 = (score[2] / total_marks) * 100;
// document.write("Score of khizer is : " + score[0] + "... " +"percentage is: " + percentage + "<br>");
// document.write("Score of ahmed is : " + score[1] + "... " +"percentage is: " + percentage1  + "<br>");
// document.write("Score of halal is : " + score[2] + "... " +"percentage is: " + percentage2  + "<br>");

// question 9
// a
// let color = ["red", "green", "blue" ];
// let input = prompt("enter color that you add in start");
// color.unshift(input);
// document.write(color);

// b
// let color = ["red", "green", "blue" ];
// let input = prompt("enter color that you add in start");
// color.push(input);
// document.write(color);

// c
// let color = ["red", "green", "blue" ];
// let input = prompt("enter color that you add in start");
// color.unshift(input);
// document.write(color);

// d
// let color = ["red", "green", "blue" ];
// color.shift();
// document.write(color);

// e
// let color = ["red", "green", "blue" ];
// color.pop();
// document.write(color);

// f
// let color = ["red", "green", "blue" ];
// let input = prompt("enter color index and the colour name : ");
// let index = +prompt("enter index : ");
// color.splice(index , 0 , input);
// document.write(color);

//  g
// let color = ["red", "green", "blue" ];
// let input = prompt("enter how many color do you want to delete : ");
// let index = +prompt("enter index : ");
// color.splice(index , input);
// document.write(color);


// question no 10
// let score_of_std = [320 , 230 , 480 , 120];
// score_of_std.sort((a, b) => a - b);
// document.write("In Acessding order :" + " " + score_of_std);


// question no 11
// var arr = ["this" , "is" , "my" , "cat"];
// let result = arr.join(" ");
// document.write(result);

// question no 12
// let city = ["karachi" , "lahore" , "islamabad" , "Quetta" , "Peshawar"];
// document.write("city list :" + "<br>" + city+ "<br>");
// let update = city.slice(2 , 4);
// document.write("slected city : " + "<br>" + update);

// question no 13
// document.write("devices :" + "<br>" + "keyboard , mouse , printer , moniter" + "<br>");
// let fifo = [];
// fifo .push("keyboard" + "<br>");
// fifo.push("mouse" + "<br>");
// fifo.push("printer" + "<br>");
// fifo.push("moniter" + "<br>");  
// document.write("devices : " + "<br>" +   fifo + "<br>"); 

// // question no 14
// document.write("devices :" + "<br>" + "keyboard , mouse , printer , moniter" + "<br>");
// let fifo = [];
// fifo .unshift("keyboard" + "<br>");
// fifo.unshift("mouse" + "<br>");
// fifo.unshift("printer" + "<br>");
// fifo.unshift("moniter" + "<br>");  
// document.write("devices : " + "<br>" +   fifo + "<br>");

// question no 15
// let phone_manufacturer = ["apple" , "samsung" , "motorola" , "nokia" , "sony" , "haier"];
// document.write("phone_manufacturer : " + "<br>" + phone_manufacturer);
