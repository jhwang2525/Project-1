<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Genre
     <div class="image">
     </div>
    <script>
        fetch ("https://api.github.com/users/arand013")
        .then(function(response){
            return response.json()
        })
        .then (function(data){
            console.log(data)
            document.querySelector(".image").innerHTML=`
            <h1>${data.login}</h1>
             <img src="${data.avatar_url}" alt="">
            `
        })
    </script>
</body>
</html> 

