<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Обработка формы</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script> -->
</head>
<body>
    <center>
        <h1>Пользователь ввел</h1>
        Введенное имя: 
        <?php
        echo $_POST["name1"];
        ?>
        <br>
        Введено ключевое слово:
        <?php
        echo $_POST["name2"];
        ?>
    </center>
    
</body>
</html>