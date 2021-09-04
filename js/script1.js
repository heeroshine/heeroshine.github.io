function test() {
    var message = "hi",
        ms2 = "2",
        ms3 = true,
        ms4 = null;
    var bms2 = Boolean(ms2);
    var num = parseInt("070", 8);
    var str = "abc\n\ndef\u03a3";
    var lang = "Java";
    var lang = lang + "Script";
    // alert(message);
    console.log(typeof (message), typeof (ms4), typeof ms3);
    console.log(ms2 == ms3);
    if (ms2) {
        console.log(bms2);
    }
    console.log(num);
    console.log(str);
    console.log(str.length);
    console.log(lang);
}
test();