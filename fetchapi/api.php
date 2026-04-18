<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$host="localhost";
$user="tankonyvrendeles";
$pass="NJEBeadando2026";
$db="tankonyvrendeles";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    // olvas
    case "GET":
        $stmt = $pdo->query("SELECT * FROM diak ORDER BY az");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
        break;

    // készít
    case "POST":
        $data = json_decode(file_get_contents("php://input"), true);

        $stmt = $pdo->prepare("INSERT INTO diak (az, nev, osztaly) VALUES (?, ?, ?)");
        $stmt->execute([$data['az'], $data['nev'], $data['osztaly']]);

        echo json_encode(["message" => "Diák hozzáadva"]);
        break;

    // frissít
    case "PUT":
        $data = json_decode(file_get_contents("php://input"), true);

        $stmt = $pdo->prepare("UPDATE diak SET nev=?, osztaly=? WHERE az=?");
        $stmt->execute([$data['nev'], $data['osztaly'], $data['az']]);

        echo json_encode(["message" => "Diák módosítva"]);
        break;

    // töröl
    case "DELETE":
        $data = json_decode(file_get_contents("php://input"), true);

        $stmt = $pdo->prepare("DELETE FROM diak WHERE az=?");
        $stmt->execute([$data['az']]);

        echo json_encode(["message" => "Diák törölve"]);
        break;

    default:
        echo json_encode(["error" => "Unsupported method"]);
}
?>
