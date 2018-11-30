<?php
 error_reporting(-1);

$d = getdate(); // использовано текущее время
foreach ( $d as $key => $val )
echo "$key = $val\n";
echo "<hr>Сегодня: $d[mday].$d[mon].$d[year]";

echo date( "Сегодня d.m.y H:i\n" );
echo "+++\n";
$day = date(d);
$day2 = date(l);
$month = date(F);
echo "$day $month - $day2\n";

echo("Местное время:\n");
echo strftime("%A %d %B %Y %H:%M\n");
setlocale('LC_ALL','');
echo strftime("%A %d %B %Y %X\n");
echo strftime("%Z\n");
$day3 = strftime("%d");
$month2 = strftime("%B");
$dayname = strftime("%A");
$year = strftime("%Y");
echo"$day3 $month2 $year $dayname";


?>