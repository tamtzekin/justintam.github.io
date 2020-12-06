(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
}(" -⎽__⎽-⎻⎺⎺⎻-⎽__⎽⸝⎻ᐠ⸜ˎ_ˏ⸝^⸜ˎ_ˏ⸝^⸜ˎ_ˏ⸝ᐟ "));

load = (page) => {
    parent.parent.location.hash = page;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var mainpage = parent.frames["main"];
        mainpage.location.href=page;
        return;
    } else {
        parent.document.getElementById('frameSet1').cols = "20%,*,20%"; 
        parent.document.getElementById('frameSet3').rows = "65%,*";
        var mainpage = parent.frames["related"];
        mainpage.location.href="related.html";
        var mainpage = parent.frames["main"];
        mainpage.location.href=page;
    }
}