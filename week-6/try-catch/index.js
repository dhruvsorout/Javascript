function getLength(name){
    return name.length;
}

try {
    const ans = getLength();
    console.log(ans);
} catch (e) {
    console.log("inside catch statement")
}

console.log("hi there")