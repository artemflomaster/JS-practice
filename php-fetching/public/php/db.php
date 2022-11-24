<?php session_start();
define("INDEX", ""); // УСТАНОВКА КОНСТАНТЫ ГЛАВНОГО КОНТРОЛЛЕРА

require_once($_SERVER[DOCUMENT_ROOT]."../cfg/core.php");  // ПОДКЛЮЧЕНИЕ ЯДРА

// ПОДКЛЮЧЕНИЕ К БД
$db = new MyDB();
$db->connect();
$query = "SELECT * FROM posts";
echo $query;


$db->close();