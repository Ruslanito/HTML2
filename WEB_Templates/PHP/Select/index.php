<?php

$year = 1900; // start value of select

echo '<select>';

while ($year <= 2018) {
	echo "<option value = '$year'> $year </option>";
	$year++;
}
echo '</select>';

?>