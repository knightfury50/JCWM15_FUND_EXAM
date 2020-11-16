function buttonshow() {
    let input = document.getElementById("input")
    let result = document.getElementById("result")
    let result = document
    let output = "RESULT : <br>"
    let a=0
    let b=1
    while(true) {
        let c=b
        b+=a
        a=c
        if(b>input) {
            break
        }
    }
    output += `<br>
    ${b}
    `
    result.innerHTML = output
}