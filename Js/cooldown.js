window.onload = function () {
    countDown();
    function addZero(I) {
        return I < 10 ? "0" + I: I + "";
    }
    function countDown() {
        var nowtime = new Date();
        var endtime = new Date("2022/07/01,00:00:00");
        var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
        var d = parseInt(lefttime / (24*60*60))
        var h = parseInt(lefttime / (60 * 60) % 24);
        var m = parseInt(lefttime / 60 % 60);
        var s = parseInt(lefttime % 60);
        d = addZero(d)
        h = addZero(h);
        m = addZero(m);
        s = addZero(s);
        document.querySelector(".t-cooldown").innerHTML = `于 ${d} 天 ${h} 时 ${m} 分 ${s} 秒 后公布...`;
        if (lefttime <= 0) {
            document.querySelector(".t-cooldown").innerHTML = "于 0 天 0 时 0 分 0 秒 后公布...";
            return;
        }
        setTimeout(countDown, 1000);
    }
}