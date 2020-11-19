<?php
function isValid($X, $Y, $R)
{
    $xRange = [];
    $rRange = [];
    for ($i = -5; $i <= 4; $i++) array_push($xRange, $i);
    for ($i = 1; $i <= 3; $i+=0.5) array_push($rRange, $i);

    if (strlen($X) > 10 or strlen($Y) > 10 or strlen($R) > 10) return false;

    $X = floatval($X);
    $Y = floatval($Y);
    $R = floatval($R);

    if (isset($X) and isset($Y) and isset($R) and
        in_array($X, $xRange) and ($Y <= 5) and ($Y >= -3) and in_array($R, $rRange)){
        return true;
    }
    else{
        return false;
    }
}

function isInArea($X, $Y, $R)
{
    $X = floatval($X);
    $Y = floatval($Y);
    $R = floatval($R);

    if ($X >= 0 and $X <= $R and $Y <= 0 and $Y >= -$R) return true;
    if ($X <= 0 and $Y <= 0 and $Y >= -$X / 2 - $R / 2) return true;
    if ($X <= 0 and $Y >= 0 and $R*$R >= $X * $X + $Y * $Y) return true;
    return false;

}

$X = $_REQUEST['X'];
$Y = $_REQUEST['Y'];
$R = $_REQUEST['R'];


if (isValid($X, $Y, $R)) {

    if (isInArea($X, $Y, $R)) {
        $isHit = "Yes";
    } else {
        $isHit = "No";
    }
    $responseJSON ="{\"X\" : {$X},
                    \"Y\" : {$Y},
                    \"R\" : {$R},
                    \"Hit\" : \"{$isHit}\",
                    \"Runtime\" : 0,
                    \"Request start time\": 0}";

    echo $responseJSON;
}
else{
    header('HTTP/1.0 404 not found');
    exit();
}

?>

