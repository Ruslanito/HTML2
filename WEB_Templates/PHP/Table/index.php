<?php
error_reporting(-1);

$r = 1; //row in a table
$c = 1; //column in a table
$rmax = 10; //max rows in a table
$cmax = 3; //max columns in a table

echo'<table border="1">'; //declare a table

while ($r<= $rmax) { //loop for row in the table
	echo "<tr>";

	while ($c <= $cmax) { //loop for column in the row of the table
		echo "<td>Row-$r | Col-$c";
		$c++;
	}
	echo "</tr>";
	$r++;
}
echo "</table>"
?>