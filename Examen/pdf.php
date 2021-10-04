<?php
    // Codigo tipo SQL
    $connect = mysqli_connect('localhost', 'root', '', 'guia1');
    $select = "SELECT * FROM product;";
    $ejec=mysqli_query($connect, $select);
    $num=mysqli_num_rows($ejec);


// Url Local del archivo "fpdf.php"
require('../fpdf.php');

class PDF extends FPDF
{

// Funcion de Titulo o Encabezado
function Header()
{
    $this->SetFont('Arial','U',20);
    $this->Cell(270,10,utf8_decode('Tabla Producto'), 0,0,'C');
    $this->Ln(10);

    // Solo se le agrego el banner.jpg (las medidas de la foto son de 1560px × 1306px)
    $this->Cell(18,80,utf8_decode(''),0,1); 
    $this->Image('banner.jpg', 62, 18, 157);

    $this->SetFont('Arial','B',15);
    $this->SetTextColor(114,176,250);
    $this->SetDrawColor(21,126,251);
    $this->Cell(20,10,utf8_decode(''),0,0);
    $this->Cell(30,10,utf8_decode('Codigo'),1,0, 'C');
    $this->Cell(90,10,utf8_decode('Descripcion'),1,0, 'C');
    $this->Cell(35,10,utf8_decode('Precio'),1,0, 'C');
    $this->Cell(35,10,utf8_decode('Stock Actual'),1,0, 'C');
    $this->Cell(40,10,utf8_decode('Stock Minimo'),1,1, 'C');
}

// Funcion de Pie de Pagina
function Footer()
{
    $this->SetY(-15);
    $this->Cell(0);
    $this->SetFont('Arial','',8);

    // Fecha actual de creacion del PDF (en ingles)
    $this->Cell(0,0,utf8_decode(date('l, jS \of F Y, h:i:s A ')),0,1, 'R');
    
    // Reservacion de los derechos de Autor
    $this->Cell(0,10,utf8_decode('©2021 Cristopher Sic | Todos los derechos reservados'),0,0,'C');

}
}

$pdf = new PDF('L');
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
$pdf->SetTextColor(0,0,0);
while($res=mysqli_fetch_array($ejec)){
    $pdf->Cell(20,10,utf8_decode(''),0,0);
    $pdf->Cell(30,10,utf8_decode($res["code"]),0,0, 'C');
    $pdf->Cell(90,10,utf8_decode($res["des"]),0,0, 'L');
    $pdf->Cell(5,10,utf8_decode('Q.'),0,0);
    $pdf->Cell(30,10,utf8_decode($res["price"]),0,0, 'R');
    $pdf->Cell(35,10,utf8_decode($res["stock_act"]),0,0, 'C');
    $pdf->Cell(35,10,utf8_decode($res["stock_min"]),0,1, 'L');
}
$pdf->SetFont('Arial','B',8);
$pdf->Cell(0,10,'Total de Registros: '.$num,0,1,'C');

$pdf->Output();
?>
