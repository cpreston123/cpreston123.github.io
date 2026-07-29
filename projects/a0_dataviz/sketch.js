let lastLoggedMinute = -1;

// setup() is called once at page-load
function setup() {
    createCanvas(1200,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();
    let hr_ratio = hour() / 24;
    let min_ratio = minute() / 60;
    let sec_ratio = second() / 60;

    background(220);
    textSize(32);
    noStroke();

    fill(180);
    text(hr, 10, 30);
    fill(100);
    text(min, 10, 60);
    fill(0);
    text(sec, 10, 90);

    // CIRCLE CLOCK

    // hour
    fill(238, 190, 60);
    arc(300, 300, 400, 400, 0, 2*PI)
    fill(214, 140, 11);
    arc(300, 300, 400, 400, 0, hr_ratio * TWO_PI)
    
    // min
    fill(118, 193, 83);
    arc(300, 300, 300, 300, 0, 2*PI)
    fill(99, 137, 81);
    arc(300, 300, 300, 300, 0, min_ratio * TWO_PI)

    // sec
    fill(72, 196, 203);
    arc(300, 300, 200, 200, 0, 2*PI)
    fill(60, 122, 126);
    arc(300, 300, 200, 200, 0, sec_ratio * TWO_PI)

    fill(220);
    arc(300, 300, 100, 100, 0, 2*PI)


    // DOT CLOCK

    // day
    fill(200)
    rect(650, 50, 500, 500, 3);

    // hour
    let hr_count = 0;
    fill(238, 190, 60)
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (hr_count < hr) {
                fill(214, 140, 11);
            } else {
                fill(238, 190, 60);
            }
            let newWidth = 110; 
            let newHeight = 66;
            let offsetX = (newWidth - 100) / 2;
            let offsetY = (newHeight - 60) / 2;
            
            rect(650+20*(j+1)+100*j-offsetX,50+(i*20)+(i*60)+20-offsetY,newWidth,newHeight,5);

            if (hr == hr_count){
                let min_count = 0;
                fill(118, 193, 83);
                for (let w = 0; w < 6; w++) {
                    for (let k = 0; k < 10; k++) {
                        if (min_count < min) {
                            fill(60, 122, 126);
                        } else {
                            fill(118, 193, 83);
                        }
                        // seconds
                        if (min == min_count){
                            fill(lerpColor(color(255), color(0), sec_ratio));
                        }
                        rect((650+20*(j+1)+100*j)+10*k+1,(50+(i*20)+(i*60)+20)+10*w+1,8,8,4);
                        min_count = min_count + 1;
                    }
                }
            }
            else if (hr > hr_count){
                let min_count = 0;
                fill(118, 193, 83);
                for (let w = 0; w < 6; w++) {
                    for (let k = 0; k < 10; k++) {
                        fill(60, 122, 126);
                        rect((650+20*(j+1)+100*j)+10*k+1,(50+(i*20)+(i*60)+20)+10*w+1,8,8,4);
                        min_count = min_count + 1;
                    }
                }
            }
            else if (hr < hr_count){
                let min_count = 0;
                fill(118, 193, 83);
                for (let w = 0; w < 6; w++) {
                    for (let k = 0; k < 10; k++) {
                        fill(118, 193, 83);
                        rect((650+20*(j+1)+100*j)+10*k+1,(50+(i*20)+(i*60)+20)+10*w+1,8,8,4);
                        min_count = min_count + 1;
                    }
                }
            }


            hr_count = hr_count + 1;
        }
    }

    // LOG MINUTE 

    if (sec == 0 && min != lastLoggedMinute) {
        console.log(min);
        lastLoggedMinute = min;
    }
}