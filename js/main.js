var lastPersonWhoSpoke = "Bot";
var lastSavedTime;

jQuery(window).load(function () {
    var obj = new Date();
    var currentSavedTime = (obj.getMinutes() < 10) ? obj.getHours() + ':0' + obj.getMinutes() : obj.getHours() + ':' + obj.getMinutes();
    $("#history").append('<div class="chat-message clearfix"><img src="https://faasthelp.com/blogs/AI.png" alt="" width="56" height="56"> <div class="chat-message-content clearfix"> <span class="chat-time">'+ currentSavedTime +'</span><h5>Chat Bot</h5><p>Hello, how can I help you?</p></div> <!-- end chat-message-content --></div> <!-- end chat-message --><hr>');
  
});

$("form").submit(function (e) {
    if($("#input").val() === "") //check if input is null
        return;
    var obj = new Date();
    var currentSavedTime = (obj.getMinutes() < 10) ? (String)( obj.getHours() + ':0' + obj.getMinutes()) : (String)(obj.getHours() + ':' + obj.getMinutes());
    if(lastPersonWhoSpoke !== "You" || lastSavedTime != currentSavedTime)
        $("#history").append('<div class="chat-message clearfix"><img src="https://banner2.kisspng.com/20180319/che/kisspng-united-states-computer-icons-desktop-wallpaper-cli-free-high-quality-person-icon-5ab04a54034fe1.2676895415215028040136.jpg" alt="" width="56" height="56"> <div class="chat-message-content clearfix"> <span class="chat-time">'+ currentSavedTime +'</span><h5>You</h5><p id="messages">' + $("#input").val() + '</p></div> <!-- end chat-message-content --></div> <!-- end chat-message --><hr>');
    else
        $("#messages").append("<br />" + $("#input").val());
    $("#input").val('');
    lastSavedTime = currentSavedTime;
    lastpersonwhoSpoke = "You";
});

//                <p class="chat-feedback">Your partner is typing…</p>