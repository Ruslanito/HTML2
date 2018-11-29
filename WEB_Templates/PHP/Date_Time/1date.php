<?php
 
$d = getdate(); // использовано текущее время
foreach ( $d as $key => $val )
echo "$key = $val\n";
echo "<hr>Сегодня: $d[mday].$d[mon].$d[year]";

?>