const titless = ['Terminal','Browser','Personalization'];
const urls = ['terminal.html','browser.html','personalization.html'];
const openwwindows = []
var winded = false;

function startoss() {
    const timeman = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    document.body.innerHTML = "";
    const timebar = document.createElement('div');
    timebar.style.cssText = "background-color:black; position:absolute;width:100vw;height:50px;top:0;left:0;"
    const timee = document.createElement("p");
    timee.className = "timeeme"
    timee.textContent = timeman;
    timee.style.cssText = "color:white;"
    timebar.appendChild(timee);
    document.body.appendChild(timebar);
    document.body.style.backgroundImage = "url(coolbackground.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center center";
    setInterval(() => {
    const timeman = new Date().toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
    timee.textContent = timeman;
    }, 10);
    const divvv = document.createElement("div");
    divvv.className = "fffdiv"
    const btutotnman = document.createElement("a");
    btutotnman.href="404.com"
    btutotnman.addEventListener('click', function(event) {
        event.preventDefault();
        appligcations();

    } )
    const iamgeg = document.createElement("img");
    iamgeg.src = "oneimagetorulethemall.png";
    iamgeg.style.cssText = "width:35px;position:relative;z-index:10;"
    divvv.style.cssText = "text-align:right;"
    divvv.appendChild(btutotnman)
    btutotnman.appendChild(iamgeg);
    document.body.append(divvv);
}

let currentWindow = null;

function appligcations() {
    const windwoss = document.createElement("div");
    if (currentWindow) {
        currentWindow.remove();
    }
    const applicationsmaenu = document.createElement("div");
    applicationsmaenu.style.cssText = "width: 80vw; height: 80vh; background-color: black; border-radius: 10px; text-align: center; display: flex; justify-content: center; align-items: center; margin: auto; position: absolute; top: 0; bottom: 0; left: 0; right: 0; outline: white solid 1px;";
    const apptext=document.createElement("h1");
    apptext.innerText="Applications";
    apptext.style.cssText = "top: 4vh; position:absolute;"
    apptext.className = "whitetext"
    const adfadf = document.createElement("a")
    adfadf.className = "adfadf";
    adfadf.innerText = "X";
    adfadf.style.cssText = "top: 8vh; position:absolute; right: 7vw; font-size:20px;"
    adfadf.addEventListener('click', function(event) {
        event.preventDefault();
        closeappligcations();

    } )
    adfadf.href = "lmao";
    const appses = document.createElement("div");
    var i = 0
    urls.forEach(item => {
        const li = document.createElement('a');
        li.href="pooey";
        li.textContent = titless[i];
        li.className="listitem";
        li.addEventListener('click', function(event) {
            event.preventDefault();
            if (item.startsWith('blob:')) {
                poopwindow(item);
            } else {
                poopwindow("applications/" + item);
            }
        });
        const br = document.createElement("br");
        appses.appendChild(li);
        appses.appendChild(br);
        i++
    });
    appses.className = "listman";
    applicationsmaenu.appendChild(appses);
    applicationsmaenu.appendChild(adfadf);
    applicationsmaenu.appendChild(apptext);
    document.body.append(applicationsmaenu);
    currentWindow = applicationsmaenu;
}
function closeappligcations() {
    if (currentWindow) {
        currentWindow.remove();
        currentWindow = null;
    }
}
function poopwindow(url) {
    closeappligcations();
    openwwindows.length = 0;
    openwwindows.push(url);
    
    let windwoss = document.getElementById("window-container");

    if (windwoss) {
        windwoss.remove();
    }
    
    windwoss = document.createElement("div");
    windwoss.id = "window-container";
    windwoss.style.cssText = "position: absolute; top: 10vh; left: 10vw; width: 80vw; height: 80vh; background-color:white; border-radius:10px;";
    document.body.appendChild(windwoss);
    
    const windowFrame = document.createElement("iframe");
    windowFrame.src = url;
    windowFrame.title = "idk";
    windowFrame.style.cssText = "width: 100%; height: 100%; border: none;";
    const dfdf = document.createElement("a");
    dfdf.href = "jjdj"; 
    dfdf.className = "closebutton";
    dfdf.id = "closebutton";
    dfdf.innerHTML = "X";
    dfdf.style.top = "2vh";
    dfdf.style.position = "absolute";
    dfdf.style.right = "2vw";
    dfdf.style.fontSize = "20px";
    dfdf.style.color = "gray";
    dfdf.addEventListener('click', function(event) {
        event.preventDefault();
        closewindwos();
    } )
    windwoss.appendChild(dfdf);
    
    windwoss.appendChild(windowFrame);
}

function closewindwos() {
    const container = document.getElementById("window-container");
    if (container) container.remove();
    closeappligcations();
    openwwindows.length = 0;
}

window.addEventListener("message", function(event) {
    if (event.data && event.data.action === "closwindow") {
        closewindwos();
    }
});

window.addEventListener('message', (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data && event.data.type === 'SET_BACKGROUND') {
        const imageURL = event.data.url;
        document.body.style.backgroundImage = `url('${imageURL}')`;
      }
    });
window.addEventListener('message', (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data && event.data.type === 'INSTALL') {
        const urla = event.data.url;
        urls.push(urla);
        titless.push('HTML File')
      }
    });
