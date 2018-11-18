<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Сложная форма php</title>
</head>
<body>
    <center>
        <?php
        if(isset($_POST["login"]))
        {
            ?>
            <h1>Вы ввели:</h1>

            <?php
            echo"<br>Логин: ". $_POST["login"],
                "<br>Пароль: ". $_POST["password"],
                "<br>Ваши увлечения: ". $_POST["preferences"],
                "<br>Ваш любимый вид спорта: ". $_POST["sport"],
                "<br>Вызанимаетесь спортом: ".$_POST["sportsmen"],
                "<brВы хотите получить ссылку: ".$_POST["message"];
        }
        else
        {
            ?>
            <!Это форма ввода данных !>
            <h1>Образец формы</h1>
            <form method="post" action="complex_form.php"
            Логин
            <input name="login" type="text">
            <br><br>Пароль
            <input name="password" type="password">
            <br><br>Перечисли свои увлечения <br>
            <textarea name="preferences" cols="20" rows="3">
                1.
                2.
                3.
            </textarea>
            <br><br>Выберите любимый вид спорта
            <Select name="sport">
                <option value="">Футбол</option>
                <option value="">Баскетбол</option>
                <option value="">Волейбол</option>
            </Select>
            <br><br><br><br>Вы занимаетесь спортом?
            <input type="radio" name="sportsmen" value="Да">Да
            <input type="radio" name="sportsmen" value="Нет">Нет
            <br>Я хочу получит сведения о новых событиях
            <input type="checkbox" name="message" value="Да">
            <br><br>
            <input type="submit" value="OK">
            </form>

            <?php
        }
            ?>

    </center>    
</body>
</html>
