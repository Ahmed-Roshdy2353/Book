//————————————————————————————————————————————————( page body )—————————————————————————————————————|
 var body        = document.querySelector("body")  //  body  //
//——————————————————————————————————————————————————————————————————————————————————————————————————|


//————————————————————————————————————————————————( bar & text )————————————————————————————————————|
 var bar         = document.querySelector("#bar")       // header (bar in top)   //
 var wordbar     = document.querySelector("#word-bar") //  word-bar The-unknown //
//——————————————————————————————————————————————————————————————————————————————————————————————————|


//————————————————————————————————————————————————( part who are ypu )——————————————————————————————|
 var question     = document.querySelector(".question")           // div class="q"       //
 var username     = document.querySelector("#user-name")         // user-name input     //
 var verification = document.querySelector("#verification")     // button Verification //
 var clear        = document.querySelector("#clear")           // button Clear        //
 var userpassword = document.querySelector("#user-password")  // user-password input //
 var passwordtype = document.querySelector("#password-type") // button password-type//

//——————————————————————————————————————————————————————————————————————————————————————————————————|


//————————————————————————————————————————————————( part alert  )———————————————————————————————————|
 var alertpart        = document.querySelector(".alert-part") // div class="alert-part" //
 var h2           = document.querySelector(".h2")            // h2                     //
 var ul           = document.querySelector("ul")            // ul                     //
 var li           = document.querySelector("li")           // li                     //
//——————————————————————————————————————————————————————————————————————————————————————————————————|


//————————————————————————————————————————————————( select )————————————————————————————————————————|
 var selectlink  = document.querySelector(".select-link") // div class="slink"  //
 var html        = document.querySelector(".html")       // select class="html"//
 var css         = document.querySelector(".css")       // select class="css" //
 var js          = document.querySelector(".js")       // select class="js"  //
//——————————————————————————————————————————————————————————————————————————————————————————————————|



//————————————————————————————————————————————( Start button Verification  )————————————————————————|
verification.addEventListener("click",function() {
var inputcheek = username.value && userpassword.value
if (inputcheek === "") {
    alert("Please Write Your user-name & user-password (🤔)")
    console.log("Empty input")
}

else if(
    username.value === "ziad"    && userpassword.value == 1 ||
    username.value === "amr"     && userpassword.value == 2 ||
    username.value === "assim"   && userpassword.value == 3 ||
    username.value === "ahmed"   && userpassword.value == 4 ||
    username.value === "sara"    && userpassword.value == 5 ||
    username.value === "salma"   && userpassword.value == 6 ||
    username.value === "fatoma"  && userpassword.value == 7 ||
    username.value === "hussein" && userpassword.value == 8 ||
    username.value === "norah"   && userpassword.value == 9 ||
    username.value === "zuksh"   && userpassword.value == 10||
    username.value === "yasmeen" && userpassword.value == 11||
    username.value === "yassa"   && userpassword.value == 12||
    username.value === "merna"   && userpassword.value == 13||
    username.value === "ehab"    && userpassword.value == 14||
    username.value === "ziad"    && userpassword.value == 15||
    username.value === "mera"    && userpassword.value == 16||
    username.value === "kareem"  && userpassword.value == 17 
 ){
    console.log("true");
    console.log( "User username : " + username.value);
    console.log( "User userpassword : " + userpassword.value);
    question.style.display = "none";
    alert(" Welcome " + username.value + " 🙋‍♂️");
    body.style.backgroundImage = "url('../IMG/vecteezy_green-leaves-on-a-tree-branch-with-a-blurred-background_49306527.jpg')";
    bar.style.boxShadow = "0px 0px 10px 0px rgb(0, 255, 42)";
    wordbar.style.textShadow = "0px 0px 4px  rgb(0, 255, 42) ,1px 0px 3px  rgb(0, 255, 42),2px 0px 3px  rgba(0, 255, 13, 0.78) ";
    alertpart.style.margin = "180px 30px";
    alertpart.style.display = "block";
    selectlink.style.display = "block";
}

else{
    alert("Wrong username or userpassword 🤦‍♂️");
    console.log("false");
    console.log("User username : " + username.value );
    console.log("User userpassword : " + userpassword.value );
    username.value = "";
    userpassword.value = "";

}})
//————————————————————————————————————————————( End button Verification  )——————————————————————————|



//————————————————————————————————————————————( Start button clear  )———————————————————————————————|
clear.addEventListener("click", function() {
    username.value = "";
    userpassword.value = "";  
})
//————————————————————————————————————————————( End button clear  )—————————————————————————————————|



passwordtype.addEventListener("click", function() {
    if (userpassword.type ==="password") {
        passwordtype.style.backgroundImage = "url('../IMG/Oxygen-Icons.org-Oxygen-Actions-document-decrypt-open.256.png')";
        userpassword.type="text";
        console.log(userpassword.type)


    }
    //         else  لا يمكن استخدامها قبل   ; //
    else (userpassword.type ="password" ,
        passwordtype.style.backgroundImage = "url('../IMG/Oxygen-Icons.org-Oxygen-Actions-document-encrypt-close.256.png')",
        console.log(userpassword.type)
    ) 
    //     لن يتم تنفيذ الكود   else عند استخدامهم مع   ==  === //


})




//————————————————————————————————————————————( Start html select  )————————————————————————————————|


html.addEventListener("change", function() {
    // if  للعمل مكان  chateGpt  كود مختصر من   //
    // var allowedLink = ["A.html","Audio.html","Html-Tags.html","Image.html","Link.html","Ol.html","Table.html","Text.html","Ul.html","Video.html"];
    // if (allowedLink.includes(html.value)) {
    //     window.open(html.value, "_blank");

    if(
        //  هنا يكتب الشرط المطلوب التاكد منه   //
        //        يجب استخدامها لانك وضعت اكثر من شرط    ||  //
        //   يتم تنفيذ الكود المطلوب تنفيذه عند التاكد من صحة اول شرط   //
        //  عند وضع اكثر من شرط يتم التاكد من صحةالشروط بشكل متتالي حتي يتم الوصول الي الشرط الصحيح //
     html.value === "A.html"         ||
     html.value === "Audio.html"     ||
     html.value === "Html-Tags.html" ||
     html.value === "Image.html"     ||
     html.value === "Link.html"      ||
     html.value === "Ol.html"        ||
     html.value === "Table.html"     ||
     html.value === "Text.html"      ||
     html.value === "Ul.html"        ||
     html.value === "Video.html" 
    ){
        //  هنا يكتب المطلوب تنفيذه عند تحقق الشرط  //
    window.open(html.value, "_blank");
    console.log(html.value);
}})

