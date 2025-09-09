<?php

include './config/config.php';
include './layouts/header.php';

$routes = include './config/routes.php';
$page = $_GET['page'] ?? 'home';
$allowedPages = array_keys($routes);
$nolayoutPages = ['login','register','dashboard'];

if (!in_array($page, $nolayoutPages)) {
    include './layouts/navbar.php';
}

if (in_array($page, $allowedPages) && file_exists($routes[$page])) {
    include $routes[$page];
} else {
    echo "<h2 style='text-align:center; margin-top:2rem;'>404 - Halaman Tidak Ditemukan</h2>";
}

if (!in_array($page, $nolayoutPages)) {
    include './layouts/footer.php';
}
?>
