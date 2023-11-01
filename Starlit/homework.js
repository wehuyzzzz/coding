function perimeter1(radius) {
    console.log(2 * Math.PI * radius)

}
perimeter1(5)

function BMI(a, b) {
    console.log(a / (b ^ 2))
}

BMI(49, 50)

function leapYear(a) {
    if ((a % 4 === 0 && a % 100 !== 0 )|| a % 400 === 0) {
        console.log(a, " là năm nhuận")
    }
    else {
        console.log(a, " không là năm nhuận")
    }
}


leapYear(2400)

// ax + b = 0
// a=4 b=10 x= -2.5
// B1: xác định input, output
// B2; đưa ra mẫu: a=0,b=0 => x = vô số nghiệm / a=5, b=0 => x= null / a=4,b=2 => x= -0,5
// B3: suy luận ra ý tưởng bài toán
// B4: code
// B5: test

function timx(a,b) {
    if (a == 0 && b==0 ){
        console.log ("x = infinitely many solutions ")
    }
    else if (b == 0 && a !== 0){
        console.log ("x = null")
    }

    else {
        console.log ("x = ",-b/a)
    }


}

timx(10,5)
timx(0,0)
timx(10,0)



