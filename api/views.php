
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
error_reporting(E_ERROR);

if ($_SERVER['REQUEST_METHOD'] !== 'GET') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request Detected! Only get method is allowed',
    ]);
    exit;
endif;

require 'db_connectee.php';
$database = new Operations();
$conn = $database->dbConnection();

try {
    $sql = "SELECT * FROM `specialiter`";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    if ($stmt->rowCount() > 0) :
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            'success' => 1,
            'data' => $data,
        ]);
    else :
        echo json_encode([
            'success' => 0,
            'message' => 'No Record Found!',
        ]);
    endif;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
?>