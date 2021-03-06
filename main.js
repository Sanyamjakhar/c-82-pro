canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width = 2;




canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}



canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP"
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;




    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        circle(current_position_of_mouse_x, current_position_of_mouse_y);


        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}