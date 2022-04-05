const sidebar = document.getElementById("sidebar");
var flag = true;

/* ----------------------------------------------------------- */
/*  FUNCTION TO OPEN SIDEBAR
/* ----------------------------------------------------------- */

function sidebarOpen() {
    document.getElementById("sidebar").style.display = "block";
}
   
/* ----------------------------------------------------------- */
/*  FUNCTION TO SCROLL ON TOP WHEN SIDEBAR CLOSE
/* ----------------------------------------------------------- */
function scrollUp(){
    setTimeout(window.scrollTo(0,document.body.scrollTop),100);
}

/* ----------------------------------------------------------- */
/*  FUNCTION TO CLOSE SIDEBAR AND REOVE NEW LINKS
/* ----------------------------------------------------------- */
function sidebarClose() {
    document.getElementById("sidebar").style.display = "none";
    scrollUp();
    const newData = document.getElementsByClassName("new-data");
    while(newData.length > 0){
        newData[0].remove();
    }
    flag = true;
}

/* ----------------------------------------------------------- */
/*  FUNCTION TO ADD NEW LINKS ON LOGIN BUTTON CLICK
/* ----------------------------------------------------------- */
function newSidebar(){
    const a = document.createElement('a');
    
    const att = ["href", "class"];
    const att_val =["javascript:void(0);","button new-data"];
    const innerVal = ["Loans","Finance","Debt"];
    ///a.setAttribute("href" , "javascript:void(0);");
    for(let i=0;i<=1;i++) {
    a.setAttribute(att[i], att_val[i]);
    }

    for(let i=0;i<3;i++){
    var clone = a.cloneNode();
    clone.innerHTML = innerVal[i];
    sidebar.insertBefore(clone, sidebar.children[i+1]);
    }
    flag = false;
    return false;
}
  
/* ----------------------------------------------------------- */
/*  FUNCTION TO SCROLLDOWN AND OPEN SIDEBAR
/* ----------------------------------------------------------- */
function scrollDown() {
    sidebarOpen();
    setTimeout(window.scrollTo(0,document.body.scrollHeight),100);
    if (flag) newSidebar();
    flag = false;
    return false;
}
  