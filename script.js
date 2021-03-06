$(document).ready(function(){
    alpha1 = .000001;
    alpha0 = 0.51;
    theta0 = 0;
    theta1 = 1;
    var imageData;
    // var ImageData = ctx.getImageData(0,0,400,400);
    n = 0;
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    $("#theta0").html(theta0);
    $("#theta1").html(theta1);
    // ctx.beginPath();
    // ctx.arc(100, 70, 50, 0, 2 * Math.PI);
    // ctx.stroke();
    x = 0;
    y = 0;
    var xList = [];
    var yList = [];
    function getMousePosition(canvas, event) { 
        rect = canvas.getBoundingClientRect(); 
        x = event.clientX - rect.left; 
        y = event.clientY - rect.top;
        xList.push(x);
        yList.push(400 - y);
        // alert("Coordinate x: " + x + "Coordinate y: " + y); 
        // alert(xList);
    } 
    function drawCircle(canvas, event) {
        ctx.fillStyle = "#7FFFD4";
        ctx.beginPath();
        ctx.arc(x , y , 5, 0, 2 * Math.PI);
        // ctx.stroke();
        ctx.fill();
    }
    function drawCircle2(x, y) {
        // alert("drawing circle");
        ctx.fillStyle = "#7FFFD4";
        ctx.moveTo(x, 400 - y);
        // alert("moved to " + x + "," + y);
        ctx.beginPath();
        ctx.arc(x , 400 -y, 5, 0, 2 * Math.PI);
        // alert("arc works");
        // ctx.stroke();
        ctx.fill();
        // alert("'drew circle'");
    }
    function drawLine(){
        redrawObjects();
        // ctx.putImageData(imageData, 0, 0);
        // alert(imageData);
        ctx.moveTo(0, 400 - theta0);
        var endY;
        var endX;
        if ((theta1 * 400 + theta0) > 400) {
            endY = 0;
            endX = (400 - theta0) / theta1;
        } else if ((theta1 * 400 + theta0) < 0){
            endY = 400;
            endX = (0 - theta0) / theta1;
        } else {
            endX = 400;
            endY = 400 - (theta0 + theta1 * 400);
        }
        ctx.lineTo(endX, endY);
        ctx.stroke();
        updateTheta();
        $("#theta0").html(theta0);
        $("#theta1").html(theta1);
        // alert(endX + ", " + endY);
    }
    function redrawObjects(){
        ctx.clearRect(0,0,400,400);
        // alert("recatngle cleared");
        for (i = 0; i < n; i++) {
            drawCircle2(xList[i], yList[i]);
            // alert("loop working");
        }
        // alert("redrew objects");
    }
    function updateTheta() {
        part0 = 0;
        part1 = 0;
        for (i = 0; i < n; i++) {
            part0 = part0 + (theta0 + theta1 * xList[i]) - yList[i];
            part1 = part1 + ((theta0 + theta1 * xList[i]) - yList[i]) * xList[i];
        }
        // alert(part0);
        part0 = alpha0 * part0/n;
        part1 = alpha1 * part1/n;
        theta0 = theta0 - part0;
        if (theta0 < 0) {
            theta0 = 0;
        }
        if (theta0 > 400) {
            theta0 = 400;
        }
        theta1 = theta1 - part1;  
        // alert(theta0 + "" + theta1);  
    }
    canvasElem = document.querySelector("canvas");   
    canvasElem.addEventListener("mousedown", function(e) 
    { 
        getMousePosition(canvasElem, e); 
        drawCircle(canvasElem,e);
        // imageData = ctx.getImageData(0,0,400,400);
    });
    $("#button").click(function(){
        drawLines()
    });
    function drawLines() {
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
        drawLine();
    }
    $("#myCanvas").click(function(){
        // alert("hey");
        var name = x;
        var email = 400 - y;
        var markup = "<tr><td>" + name + "</td><td>" + email + "</td></tr>";
        $("#myTable").append(markup);
        n++;
    });
  });
