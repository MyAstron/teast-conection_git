<html>
    <head>
        <title>Inicio</title>
    </head>
    <body>
        <header>
            <h1 align="center">Eliminacion de un Producto<br><img src="../Imgs/deleting.gif"></h1>
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
	if(isset($_POST['btn_Env'])){
		$code_found = $_POST['code_found'];
		$select = "SELECT * from product where code='$code_found';";
		$obj = mysqli_query($connect, $select);
		while($res=mysqli_fetch_array($obj)){
		echo '
			<table align="center"> 
				<tr class="top">
					<th colspan="2"> Datos del Producto </th>
				</tr>
				<tr class="res">
					<th> Codigo: </th><td> <input type="text" name="code_delete" value="'.$res["code"].'"> </td>
				</tr>
				<tr class="res">
					<th> Nombre: </th><td> <input type="text" value="'.$res["des"].'"> </td>
				</tr>
				<tr class="res">
					<th> Precio: </th><td> <input type="text" value="'.$res["price"].'"> </td>
				</tr>
				<tr class="res">
					<th> Stock Actual: </th><td> <input type="text" value="'.$res["stock_act"].'"> </td>
				</tr>
				<tr class="res">
					<th> Stock Minimo: </th><td> <input type="text" value="'.$res["stock_min"].'"> </td>
				</tr>
				<tr>
					<th align="center" colspan="2" class="fot">
						<input type="submit" name="btn_Act" value="Modificar">
						&nbsp; <input type="submit" href=".." value="Cancelar"> &nbsp;
						<input type="submit" name="btn_Del" value="Elminar">
					</th>
				</tr>
			</table>';
		}
	}else
	if(isset($_POST['btn_Del'])){
		$code_delete = $_POST['code_delete'];
		$delete = 'DELETE FROM product where code="'.$code_delete.'";';
		if(mysqli_query($connect, $delete)){
			echo '<script> alert("El Producto con el codigo '.$code_delete.' ha sido eliminado!!"); </script>';
		}else{
			echo '<script> alert("No se pudo eliminar el Producto!"); </script>';
		}
	}else
	if(isset($_POST['btn_Act'])){
		echo '<script> location.href="../Guia1" </script>';
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