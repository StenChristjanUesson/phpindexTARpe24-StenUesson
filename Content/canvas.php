<h1>Joonistamine JS-ga</h1>
<canvas id="tahvel" width="300" height="250"></canvas>
<br>
<input type="button" value="puhasta" onclick="puhasta()">
<input type="button" value="Sirge joon" onclick="Sirgejoon()">
<input type="button" value="kolmnurk" onclick="kolmnurk()">
<br><br>
<input type="button" value="Valkusfoor" onclick="Valkusfoor()">
<input type="button" value="Mine" onclick="Mine()">
<input type="button" value="oota" onclick="Oota()">
<input type="button" value="seisa" onclick="Seisa()">
<br><br>
<label for="raadius">R:</label>
<input type="number" id="raadius" min="0" max="100" value="5" onchange="ring()">
<input type="button" value="ring" onclick="ring()">
<br><br>
<label for="laius">Laius</label>
<input type="number" id="laius" min="0" max="100" value="5" onchange="ristkylik()">
<br><br>
<label for="korgus">Kõrgus</label>
<input type="number" id="korgus" min="0" max="100" value="5" onchange="ristkylik()">
<br><br>
<input type="button" value="ristkülik" onchange="ristkylik()">
<br><br>
<input type="button" value="picsum pilt" onclick="pilt()">
<br><br>
<canvas id="lipp" width="330" height="210"></canvas>
<br><br>
<input type="button" value="Eesti lipp" onclick="eestiLipp()">
<input type="button" value="Prantsusmaa lipp" onclick="prantsusmaa()">
<input type="button" value="Jaapani lipp" onclick="jaapan()">
<br><br>
<input type="button" value="puhasta Lipp" onclick="puhastalipp()">
