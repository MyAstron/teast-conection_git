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
                Selecciona que deseas ver <select name="table">
                    <option value="Ambas">Todos los datos</option>
                    <option value="Productos">Datos de los Productos</option>
                    <option value="Fabricante">Datos de los Fabricante</option>
                </select>
                <input type="submit" name="btn_Env" value="Solicitar">
            </section>
            <footer>
                <pre>
                    ©2021 Cristopher Sic &nbsp;|&nbsp; Todos los derechos reservados
                </pre>
            </footer>
        </form>
    </body>
</html>