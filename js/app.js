$(document).foundation();
   
$('#any_id').barousel();


                 

$(document).ready(function () {
    $('#barousel_prevnextnav').barousel({    
        navType: 2
    });
    
    document.getElementById("new").style.display = "block";
    document.getElementById("new").className += " active";
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}