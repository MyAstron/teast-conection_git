<html>
    <head>
        <title>Inicio</title>
    </head>
    <body>
        <header>
            <h1 align="center">Tabla Producto</h1>
        </header>
        <form action="index.php" method="post">
<?php 
error_reporting(0);
	echo '
		<table align="center">
			<tr>
				<td colspan="4">
					Fecha:
				<td>
				<td align="center">
					<input type="submit" name="btn_PDF" value="Visualizar en PDF">
				</td>
			</tr>
			<tr class="top">
				<th> Codigo </th><th> Descripcion </th><th> Precio </th><th> Stock Actual </th><th> Stock Minimo </th> <th> Img </th>
			<tr>';
	$connect = mysqli_connect('localhost', 'root', '', 'guia1');
	$select = "SELECT * from product;";
	$obj = mysqli_query($connect, $select);
	while ($res=mysqli_fetch_array($obj)) { 
		echo '
			<tr class="res">
				<td>'.$res["code"].'</td><td>'.$res["des"].'</td><td>'.$res["price"].'</td><td>'.$res["stock_act"].'</td><td>'.$res["stock_min"].'</td> <td> <img src="../Imgs/Guia3/'.$res["code"].'.png"> </td>
			</tr>';
		$tot++;
	}
	echo '
			<tr>
				<th class="fot" colspan="5" align="left"> &nbsp; • Productos en Total Registrados:</th>
				<th class="fot"> '.$tot.' </th>
			</tr>
		</table>';
	if(isset($_POST['btn_PDF'])){
		echo '<script> location.href="pdf.php" </script>';
	}
?>
            <p align="center">
                ©2021 Cristopher Sic | Todos los derechos reservados
                <br> <a href="..">Back</a>
            </p>
        </form>
    </body>
    <style>
    	section{	
    		margin-top: -20px;
    	}img{
    		border: #F08080 dotted; height: 70px;
    		background-color: white; 
    	}p{
    		font-size: small;
    	}tr.top{
    		background-color: black; color: white;
    	}th.fot{
    		border-top: groove;
    		font-size: small;
    	}tr.res:hover{
    		background-color: gray;
    	}
    </style>
</html>