const div = document.getElementById("session1");
const dc = document;
const page = document.getElementById("mainpage");
const hub = document.getElementById("pkghub");
hub.style.display = "none";
const b2 = document.getElementById("backpkghub");

async function main() {
    let packs = {}
    let get = await fetch("https://api.github.com/repos/tutugrande1235-DTD/DTD-Source-Scripts/contents/Market");
    let data = await get.json();
    
    let p = document.getElementById("debug");
    let t = "";
    for(let i = 0; i < data.length; i++){
        let d = await data[i].name;
        let arr = await d.split("@");
        let pkg = await {
            name: arr[0],
            owner: arr[1]
        };
        
        
        let b = await dc.createElement("button");
        if (b) {
            b.textContent = pkg.name;
            b.style.backgroundColor = "black";
            b.style.borderWidth = "2px";
            b.style.borderStyle = "solid";
            b.style.borderColor = "white";
            b.style.color = "white";
            b.style.fontWidth = "bold";
            b.style.width = "200px";
            b.style.height = "300px";
            b.style.borderRadius = "20px";
            b.style.fontSize = "30px";
            b.style.overflow = "visible";
            b.style.whiteSpace = "normal";
            b.style.wordWrap = "break-word";
            b.style.overflowWrap = "break-word";
            b.style.textAlign = "center";
            b.style.display = "inline-block";
            b.style.verticalAlign = "top";
            b.dataset.pkgname = pkg.name;
            b.dataset.pkgowner = pkg.owner;
            
            b.addEventListener("click", async function(e) {
                page.style.display = "none";
                hub.style.display = "block";
                let name = await dc.getElementById("pkgname");
                name.textContent = this.dataset.pkgname;
                let owner = await dc.getElementById("pkgowner");
                owner.textContent = this.dataset.pkgowner;
                let g = await fetch("https://raw.githubusercontent.com/tutugrande1235-DTD/DTD-Source-Scripts/main/Market/" + this.dataset.pkgname + "@" + this.dataset.pkgowner + "/description@" + this.dataset.pkgowner);
                let dt = await g.text();
                let desc = await dc.getElementById("pkgdesc");
                desc.textContent = dt;
            });
            
            div.appendChild(b);
        }
    }
}

b2.addEventListener("click", async function(e){
    hub.style.display = "none";
    page.style.display = "block";
});

main()