function add_user() {
    p1=document.getElementById("player1name").value
    p2=document.getElementById("player2name").value
    localStorage.setItem("player1_name",p1)
    localStorage.setItem("player2_name",p2)
    window.location.replace("game_page.html")
}
