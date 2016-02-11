<?php
$url = filter_input(INPUT_GET, 'url', FILTER_SANITIZE_SPECIAL_CHARS);
$s = filter_input(INPUT_GET, 's', FILTER_SANITIZE_SPECIAL_CHARS);;
$urls = json_decode(file_get_contents("urls.json"));
$short = file_get_contents("{$urls->$s}$url");
echo $short;

