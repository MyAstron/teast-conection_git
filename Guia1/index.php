<html>
    <head>
        <title>Inicio</title>
    </head>
    <body>
        <header>
            <h1 align="center">Modificacion de un Producto<br><img src="../Imgs/fruits.png"></h1>
        </header>
        <form action="index.php" method="post">
            <section>
                <h4 align="center">
                	Escribe el codigo del producto que deseas ver <input type="text" name="code_found">
                	<input type="submit" name="btn_Env" value="Solicitar">
                </h4>
            </section>
<?php 
error_reporting(0);
	$connect = mysqli_connect('localhost', 'root', '', 'guia1');
	$code_found = $_POST['code_found'];
	if(isset($_POST['btn_Env'])){
		$select = "SELECT * from product where code='$code_found';";
		$ejec=mysqli_query($connect, $select); 
		while($res=mysqli_fetch_array($ejec)) {
			echo'<table align="center">
					<tr class="top"> <th colspan="2"> Datos del Producto</th></tr>
					<tr class="res"> <th align="right">Codigo:</th> <td><input type="text" name="code_edit" value="'.$res['code'].'"> </td> </tr>
					<tr class="res"> <th align="right">Nombre:</th> <td><input type="text" name="des" value="'.$res["des"].'"> </td> </tr>
					<tr class="res"> <th align="right">Precio:</th> <td><input type="text" name="price" value="'.$res["price"].'"> </td> </tr>
					<tr class="res"> <th align="right">Stock Actual:</th> <td><input type="text" name="stock_act" value="'.$res["stock_act"].'"> </td> </tr>
					<tr class="res"> <th align="right">Stock Minimo:</th> <td><input type="text" name="stock_min" value="'.$res["stock_min"].'"> </td> </tr>
					<tr class="res">
						<th  align="center"> Imagen: </th>
						<td colspan="2" align="center"> <strong>Actual:</strong> [ <a href="../Imgs/Guia3/'.$res["code"].'.png"> Click Here </a> ]
						<br> <input type="file" accept="image/*"> </td>
					</tr>
					<tr> <th colspan="2" class="fot"> <input type="reset">
						&nbsp; <input type="submit" href=".." value="Cancelar"> &nbsp;
						<input type="submit" name="btn_Act" value="Actualizar"> </th></tr>
				</table>';
		}
	}else
	if (isset($_POST['btn_Act'])) {
		$code_edit = $_POST['code_edit'];
		$des = $_POST['des'];
		$price = $_POST['price'];
		$stock_act = $_POST['stock_act'];
		$stock_min = $_POST['stock_min'];

		$update = "UPDATE product set des = '$des', price='$price', stock_act='$stock_act', stock_min='$stock_min' where code = '$code_edit';";
		$ej = mysqli_query($connect, $update);
		if ($ej) {
			echo "<script> alert('Se ha actualizado el producto ".$des."   [".$code_edit."]'); location.href='../Guia1'; </script>";
		}else{
			echo "<script> alert('Se produjo un ERROR. Porfavor intentalo mas tarde'); </script>";
		}
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
    		border: #F08080 dotted; height: 320px;
    	}p{
    		font-size: small;
    	}tr.top{
    		background-color: black; color: white;
    	}th.fot{
    		border-top: groove;
    	}tr.res:hover{
    		background-color: gray;
    	}
    </style>
</html>