const sidebar = document.getElementById("sidebar");
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
    window.scrollTo(0,document.body.scrollTop);
}



/* ----------------------------------------------------------- */
/*  FUNCTION TO ADD NEW LINKS ON LOGIN BUTTON CLICK
/* ----------------------------------------------------------- */
function newSidebar(){
    const a = document.createElement('a');
    
    const att = ["href", "class"];
    const att_val =["javascript:void(0);","button new-data"];
    const innerVal = ["xxx","yyy","zzz"];
    //a.setAttribute("href" , "javascript:void(0);");
    for(let i=0;i<=1;i++){
    a.setAttribute(att[i], att_val[i]);
    }

    for(let i=0;i<3;i++){
    var clone = a.cloneNode();
    clone.innerHTML = innerVal[i];
    sidebar.insertBefore(clone, sidebar.children[i+1]);
    }
    return false;
}
  
/* ----------------------------------------------------------- */
/*  FUNCTION TO SCROLLDOWN AND OPEN SIDEBAR
/* ----------------------------------------------------------- */
function scrollDown() {
    sidebarOpen();
    window.scrollTo(0,document.body.scrollHeight);
    newSidebar();
    return false;
}
  