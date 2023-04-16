
    // alert("JS file workingh properly00");

    // ###############  FOR IMAGE 1

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "images/" + randomImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    // ###############  FOR IMAGE 2

    var randomNumber2 = Math.floor(Math.random()*6)+1;

    var randomimgsource2 = "images/dice"+randomNumber2+".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomimgsource2);

    //////////////////////////////////////////////////////////////

    if (randomNumber1 > randomNumber2)
    {
        document.querySelector("h2").innerHTML = "🚩Player 1 Wins !!";
    }
    else if(randomNumber1 < randomNumber2)
    {
        document.querySelector("h2").innerHTML = "Player 2 Wins !! 🚩";
    }
    else
    {
        document.querySelector("h2").innerHTML = "Its A Draw";
    }