<h1>Teenuse kalkulaator</h1>
<fieldset>
    <legend>Teenus</legend>
    <input type="radio" name="teenus" id="teenus1" value="teenus_1" onclick="teenusSelection()">
    <label for="teenus1">Takso</label>
    <br>
    <input type="radio" name="teenus" id="teenus2" value="teenus_2" onclick="teenusSelection()">
    <label for="teenus2">Rong</label>
    <br>
    <input type="radio" name="teenus" id="teenus3" value="teenus_3" onclick="teenusSelection()">
    <label for="teenus3">Restoran</label>
    <br>
    <input type="radio" name="teenus" id="teenus4" value="teenus_4" onclick="teenusSelection()">
    <label for="teenus4">Bussipilet</label>
</fieldset>
<br>
<fieldset>
    <legend>Kogus</legend>
    <div id="kogusinfo"></div>
    <label for="kogus" id="koguslabel"></label>
    <input type="number" name="kogus" id="kogus" min="1" max="100" value="1">
</fieldset>
<br>
<input type="button" value="Arvuta!" onclick="arvutaTeenusHind()">
<br><br>
<fieldset>
    <legend>Lõpphind</legend>
    <img src="" id="selection" alt="">
    <div id="l6pphindinfo"></div>
    <br>
    <div id="l6pphindinfo2"></div>
    <br>
    <div id="l6pphind"></div>
</fieldset>