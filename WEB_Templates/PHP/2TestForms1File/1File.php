<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Форма 1 файл</title>
</head>

<body>
    <center>

        <?php 
            if(isset($_REQUEST["name"]))
        {
         ?>
        <h1>Чтение данный, введенных пользователем</h1>
        Вы ввели имя:
        <?php
            echo $_POST["name"];
                else
                {
         ?>
            <h1>Образец формы</h1>
            <form method="POST" action="1File.php">
                Укажите имя
                <input name="name" type="text">
                <!-- <br> Укажите ключевое слово
            <input name="name2" type="text">
            <br>
            <input type="submit" value="OK"> -->
            </form>

            <?php
                }
            ?>


    </center>

</body>

</html>