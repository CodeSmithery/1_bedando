<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "tankonyvrendeles", "NJEBeadando2026", "tankonyvrendeles");

$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("Kapcsolódási hiba: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $result = $conn->query("SELECT * FROM tk");

    if (!$result) {
        die("SQL hiba: " . $conn->error);
    }
 
    $data = [];

    while ($row = $result->fetch_assoc()) {
        $data[] = [
            "id" => $row["az"],
            "title" => trim($row["cim"]),
            "subject" => trim($row["targy"]),
            "publisher" => trim($row["kiadoikod"])
        ];
    }

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = json_decode(file_get_contents("php://input"), true);

    $title = $input["title"];
    $subject = $input["subject"];
    $publisher = $input["publisher"];

    $conn->query("INSERT INTO tk (cim, targy, kiadoikod)
                  VALUES ('$title', '$subject', '$publisher')");

    echo json_encode(["status" => "ok"]);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    parse_str($_SERVER['QUERY_STRING'], $params);
    $id = $params["id"];

    $conn->query("DELETE FROM tk WHERE az=$id");

    echo json_encode(["status" => "deleted"]);
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

    parse_str($_SERVER['QUERY_STRING'], $params);
    $id = $params["id"];

    $input = json_decode(file_get_contents("php://input"), true);

    $title = $input["title"];
    $subject = $input["subject"];
    $publisher = $input["publisher"];

    $conn->query("UPDATE tk SET 
        cim='$title',
        targy='$subject',
        kiadoikod='$publisher'
        WHERE az=$id");

    echo json_encode(["status" => "updated"]);
}
?>