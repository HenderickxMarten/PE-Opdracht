let oefening0 = () => {
    document.title = "Henderickx Marten"
    let navbarbrand = document.getElementsByClassName("navbar-brand")
    navbarbrand[0].innerHTML = "";
    var logo = document.createElement("img");
    logo.setAttribute("src","img/LogoWebsite.png");
    logo.setAttribute("height","50");
    logo.setAttribute("width","50");
    navbarbrand[0].appendChild(logo);
}