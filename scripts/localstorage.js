function checkForm(){
    localStorage.setItem("the_Name", document.getElementById("yourName").value);
    localStorage.setItem("the_Email", document.getElementById("yourEmail").value);
    localStorage.setItem("the_Date", document.getElementById("yourDate").value);
    localStorage.setItem("the_Age", document.getElementById("yourAge").value);
    localStorage.setItem("the_Gender", document.getElementById("yourGender").value);
    localStorage.setItem("the_branch", document.getElementById("branch").value);
    localStorage.setItem("the_comments", document.getElementById("comments").value);
}

function storage(){
    document.getElementById("name_LS").innerHTML = localStorage.getItem("the_Name");
    document.getElementById("email_LS").innerHTML = localStorage.getItem("the_Email");
    document.getElementById("date_LS").innerHTML = localStorage.getItem("the_Date");
    document.getElementById("age_LS").innerHTML = localStorage.getItem("the_Age");
    document.getElementById("gender_LS").innerHTML = localStorage.getItem("the_Gender");
    document.getElementById("branch_LS").innerHTML = localStorage.getItem("the_branch");
    document.getElementById("comments_LS").innerHTML = localStorage.getItem("the_comments");
}