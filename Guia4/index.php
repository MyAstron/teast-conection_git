<?php
    // Conexion a la Base de datos
    $connect = mysqli_connect('localhost', 'root', '', 'guia1');

    // Seleccion de datos a la tabla
    $select = "SELECT * FROM product;";

    // Ejecucion o Solicitud de los datos tipo array
    $ejec=mysqli_query($connect, $select);


// Url Local del archivo "fpdf.php"
require('../fpdf.php');

class PDF extends FPDF
{

function Header()
{
    // Tipografia del Header 
    $this->SetFont('Arial','B',15);

    // Contenido del Header
    $this->Cell(11,10,utf8_decode(''),0,0);
    $this->Cell(30,10,utf8_decode('Codigo'),1,0, 'C');
    $this->Cell(90,10,utf8_decode('Descripcion'),1,0, 'C');
    $this->Cell(25,10,utf8_decode('Precio'),1,0, 'C');
    $this->Cell(35,10,utf8_decode('Stock Actual'),1,0, 'C');
    $this->Cell(40,10,utf8_decode('Stock Minimo'),1,0, 'C');
    $this->Cell(35,10,utf8_decode('Imagen'),1,1, 'C');
}

function Footer()
{
    // Localizacion del texto en el eje 'Y'
    $this->SetY(-15);

    // Celda Vacia
    $this->Cell(0);

    // Tipografia del Footer
    $this->SetFont('Arial','',8);

    // Texto del Footer
    $this->Cell(0,10,'Pagina '.$this->PageNo().'/{nb}',0,0,'C');
}
}

// Creacion del PDF
$pdf = new PDF('L');

// Cantidad de Paginas en total
$pdf->AliasNbPages();

// Agrega un pagina a el DOC
$pdf->AddPage();

// Tipografia
$pdf->SetFont('Times','',12);


while($res=mysqli_fetch_array($ejec)){
    $pdf->Cell(11,10,utf8_decode(''),0,0);

    // Mostramos los datos segun la columna de la tabla de la Base de Datos (MySQL)
    $pdf->Cell(30,10,utf8_decode($res["code"]),0,0, 'C');
    $pdf->Cell(90,10,utf8_decode($res["des"]),0,0, 'L');
    $pdf->Cell(5,10,utf8_decode('Q.'),0,0);
    $pdf->Cell(20,10,utf8_decode($res["price"]),0,0, 'R');
    $pdf->Cell(35,10,utf8_decode($res["stock_act"]),0,0, 'C');
    $pdf->Cell(35,10,utf8_decode($res["stock_min"]),0,1, 'L');
}

// Muetre el contenido
$pdf->Output();
?>
