<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Steni PHP-Tööde leht</title>
    <link rel="stylesheet" href="style/style.css"/>
    <link rel="stylesheet" href="style/joonistamineStyle.css"/>
    <script src="js/JoonisScript.js"></script>
</head>
<body>
<?php
//päis
include("header.php");
?>

<?php
//navigeerimismenüü
include("nav.php");
?>
<div class="flex-container">
    <div><strong>PHP - </strong>
        Lähtudes dünaamilise veebilehe kirjeldusest, saame PHP’d nimetada serveripoolseks skriptimiskeeleks.
        See tähendab, et koodi käivitamiseks on alati vaja PHP toega serverit.
        Serverit on võimalik teatud tasu eest rentida või ise ülesehitada.
        Seda viimast teeme ka meie ja juba järgmises peatükis.
    </div>
    <div>
        <?php
        //sisu - laetakse content kaustast
        if(isset($_GET["leht"])){
            include('Content/'.$_GET["leht"]);
        } else {
            include('Content/kodu.php');
        }
        ?>
    </div>
    <div>
        <img src="Image/phpPilt.png" alt="PHP pilt"/>
    </div>
</div>

<?php
//sisu - laetakse content kaustast
?>

<?php
//jalus
include("footer.php");
?>
</body>
</html>