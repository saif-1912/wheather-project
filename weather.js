document.querySelector('button').onclick = function () {
    document.querySelector('.weather').style.display = "block"
    var apikey = "9c945f4e465363fc17a002fdc0e24eee"

    var apiurl = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=9c945f4e465363fc17a002fdc0e24eee&units=metric"

    var value = document.querySelector('input').value
    console.log(value)

    var data = new XMLHttpRequest()
    data.onreadystatechange = function () {
        console.log(data.readyState, data.status)
        if (data.readyState == 4 & data.status == 200) {
            console.log(data.responseText)
            var result = JSON.parse(data.responseText)
            console.log(result)

            document.querySelector('.city').innerHTML = result.name
            document.querySelector('.temp').innerHTML = Math.round(result.main.temp) + "°c"
            document.querySelector('.humidity').innerHTML = result.main.humidity + "%"
            document.querySelector('.wind').innerHTML = result.wind.speed + "km/hr"           


            var weathericon = document.querySelector('.weather-icon')

            if (result.weather[0].main == "Clouds") {
                weathericon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOeQcRUsdOTzyNS3RQXb5daye9LGBH2LBwQ&usqp=CAU"
            }
            else if (result.weather[0].main == "Clear") {
                weathericon.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F3222%2F3222800.png&tbnid=p6uzyh6E2XfSkM&vet=12ahUKEwjZveLWhvaBAxUEmmMGHXa2CgQQMygAegQIARBY..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fclear-sky_3222800&docid=KNLOEw5m6GkBzM&w=512&h=512&q=clear%20weather%20icon%20png&ved=2ahUKEwjZveLWhvaBAxUEmmMGHXa2CgQQMygAegQIARBY"
            }
            else if (result.weather[0].main == "Rain") {
                weathericon.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F263%2F263883.png&tbnid=LaIl5DBAvXCEdM&vet=12ahUKEwjzvdyJh_aBAxXGz6ACHfJTBVcQMygEegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Frain_263883&docid=VpAUrkKG2-XaXM&w=512&h=512&q=Rain%20weather%20icon%20png&ved=2ahUKEwjzvdyJh_aBAxXGz6ACHfJTBVcQMygEegQIARBV"
            }
            else if (result.weather[0].main == "Drizzle") {
                weathericon.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F4837%2F4837678.png&tbnid=1l4GFMxxHssD8M&vet=12ahUKEwja24Gqh_aBAxXypekKHeUoBI0QMygKegQIARBe..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fdrizzle_4837678&docid=rOp1hWSnQmn-oM&w=512&h=512&q=Drizzle%20weather%20icon%20png&ved=2ahUKEwja24Gqh_aBAxXypekKHeUoBI0QMygKegQIARBe"
            }
            else if (result.weather[0].main == "Mist") {
                weathericon.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fweather-forecast-meteorology-color-1%2F128%2Fweather-foggy-sunny-512.png&tbnid=pzrq154bYM6yOM&vet=12ahUKEwiAxLTTh_aBAxUs2zgGHY10ALsQMygOegQIARBq..i&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1921189%2Ffog_foggy_mist_misty_sun_sunny_weather_icon&docid=P6NDOUt4XF9qvM&w=512&h=512&q=Mist%20weather%20icon%20png&ved=2ahUKEwiAxLTTh_aBAxUs2zgGHY10ALsQMygOegQIARBq"
            }
        }
    }




    data.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apikey}&units=metric`, true)
    data.send()
}
document.querySelector('.weather').style.display = "none"