<html>
    <head>
        <title>Inicio</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h2 align="center">Inicio<br><img src="./img.png"></h2>
        </header>
        <form action="action.php" method="post">
            <section id="secIndex">
                Codigo del producto para editar: <input class="box_code" type="button" value="<?php echo $code_found?>">
                <input type="submit" name="btn_Bak" value="Cancelar">
            </section>
            <footer>
                <pre>
                    ©2021 Cristopher Sic &nbsp;|&nbsp; Todos los derechos reservados
                </pre>
            </footer>
        </form>
    </body>
</html>