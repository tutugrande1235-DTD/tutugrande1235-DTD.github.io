const b = document.getElementById("installpkg");

async function download(text, file) {
    const blob = new Blob([text], { type: "application/octet-stream" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = file;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

async function main(){
    const dc = document;
    const div = await dc.getElementById("pkghub");
    let pkgnamet = await dc.getElementById("pkgname");
    let pkgownert = await dc.getElementById("pkgowner");
    let pkgname = await pkgnamet.textContent.trim();
    let pkgowner = await pkgownert.textContent.trim();
    let text = dc.createElement("p");
    text.style.fontSize = "40px";
    text.style.margin = "20px";
    text.textContent = `Downloading ${pkgname} from ${pkgowner}...`;
    await div.appendChild(text);
    
    const url = `https://raw.githubusercontent.com/tutugrande1235-DTD/DTD-Source-Scripts/main/Market/${pkgname}@${pkgowner}/content@${pkgowner}`;

    const p = await fetch(url);
    if (!p.ok){
        text.style.color = "red";
        text.textContent = "Error while Downloading...";
        await new Promise(resolve => {
            setTimeout(() => {
                text.style.color = "white";
                resolve();
            }, 1000);
        });
        return;
    }
    let g = await p.text()
    if (g) {
        text.textContent = g;
        await download(g, pkgname);
        div.removeChild(text);
    }
}

b.addEventListener("click", async function(e){
    this.style.backgroundColor = "white";
    setTimeout(() => {
        this.style.backgroundColor = "black";
        main();
    }, 100);
});