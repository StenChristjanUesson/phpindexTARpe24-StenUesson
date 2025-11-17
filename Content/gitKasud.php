<?php
echo "<h2>GIT CMD käsurida</h2>";
echo "<ul>";
echo "<li>git init - uus repo</li>";
?>
<li>git config --global user.name "StenChristjanUesson" - Registeerib github konto nime
    <pre>
git config --global user.email "StenUesson@gmail.com" - Registeerib github konto emaili<br>

git config --global --list - näitab mis on registreeritud
    </pre>
</li>
<li>
    Lisa jälgimisele ja commit'i loomine -
    git add .<br>
    git commit -a -m "on loodud phpIndex"<br>
    git remote remove origin<br>
    //
    git remote add origin git@github.com:StenUesson/phpIndex<br>
    git branch -M main<br>
    git push -u origin main<br>
</li>
<li>
    //ssh võti loomine
    ssh-keygen -o -t rsa -C "StenUesson@gmail.com"
    //võti salvestakse opilane/.ssh kausta
    //id_rsa.pub tuleb kopeerida oma git hub -reposse
</li>

