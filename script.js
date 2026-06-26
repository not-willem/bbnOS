const titless = ['terminal','browser','personalization'];
const urls = ['terminal.html','browser.html','personalization.html'];
const openwwindows = [];
var winded = false;
let zindexfds = 100;

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
    applicationsmaenu.style.cssText = "width: 80vw; height: 80vh; background-color: black; border-radius: 10px; text-align: center; display: flex; justify-content: center; align-items: center; margin: auto; position: absolute; top: 0; bottom: 0; left: 0; right: 0; outline: white solid 1px; z-index: 999;";
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
    maekdrag(applicationsmaenu);
}
function closeappligcations() {
    if (currentWindow) {
        currentWindow.remove();
        currentWindow = null;
    }
}
function poopwindow(url) {
    closeappligcations();
    openwwindows.push(url);
    
    zindexfds++;
    
    const windwoss = document.createElement("div");
    windwoss.className = "window-container";
    windwoss.style.cssText = "position: absolute; top: 10vh; left: 10vw; width: 80vw; height: 80vh; background-color:white; border-radius:10px; z-index: " + zindexfds + ";";
    document.body.appendChild(windwoss);
    
    windwoss.addEventListener('mousedown', function() {
        zindexfds++;
        windwoss.style.zIndex = zindexfds;
    });
    
    const windowFrame = document.createElement("iframe");
    windowFrame.src = url;
    windowFrame.title = "idk";
    windowFrame.style.cssText = "width: 100%; height: 100%; border: none;";
    const dfdf = document.createElement("a");
    dfdf.href = "jjdj"; 
    dfdf.className = "closebutton";
    dfdf.innerHTML = "X";
    dfdf.style.cssText = "position: absolute; top: 10px; right: 15px; font-size: 20px; color: gray; z-index: 10; cursor: pointer; text-decoration: none;";
    dfdf.addEventListener('click', function(event) {
        event.preventDefault();
        windwoss.remove();
        const index = openwwindows.indexOf(url);
        if (index > -1) {
            openwwindows.splice(index, 1);
        }
    });
    windwoss.appendChild(dfdf);
    
    windwoss.appendChild(windowFrame);
    
    maekdrag(windwoss);
}

function maekdrag(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    
    const header = element.querySelector('h1') || element.querySelector('.closebutton') || element;
    
    const drafgmousedown = function(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        isDragging = true;
        document.onmouseup = clsoeerrrg;
        document.onmousemove = ecmlemtdrag;
        if (element.setPointerCapture) {
            element.setPointerCapture(e.pointerId);
        }
        
        zindexfds++;
        element.style.zIndex = zindexfds;
    };
    
    const ecmlemtdrag = function(e) {
        e = e || window.event;
        e.preventDefault();
        if (!isDragging) return;
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    };
    
    const clsoeerrrg = function() {
        isDragging = false;
        document.onmouseup = null;
        document.onmousemove = null;
        if (element.releasePointerCapture) {
            element.releasePointerCapture();
        }
    };
    const dfdfdfdfadf = function(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        isDragging = true;
        element.setPointerCapture(e.pointerId);
        
        element.onpointermove = potjtnerdrgag;
        element.onpointerup = clsosbf;
        
        zindexfds++;
        element.style.zIndex = zindexfds;
    };
    
    const potjtnerdrgag = function(e) {
        e.preventDefault();
        if (!isDragging) return;
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    };
    
    const clsosbf = function(e) {
        isDragging = false;
        element.onpointermove = null;
        element.onpointerup = null;
        element.releasePointerCapture(e.pointerId);
    };
    
    if (element.querySelector('h1')) {
        element.querySelector('h1').onmousedown = drafgmousedown;
        element.querySelector('h1').onpointerdown = dfdfdfdfadf;
    } else if (element.querySelector('.closebutton')) {
        const titleBar = document.createElement('div');
        titleBar.style.cssText = "position: absolute; top: 0; left: 0; width: calc(100% - 40px); height: 35px; cursor: move; z-index: 5;";
        element.insertBefore(titleBar, element.firstChild);
        titleBar.onmousedown = drafgmousedown;
        titleBar.onpointerdown = dfdfdfdfadf;
    }
}

function closewindwos() {
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
        const blob = new Blob([event.data.content], { type: 'text/html' });
        const blobUrl = URL.createObjectURL(blob);
        urls.push(blobUrl);
        let appName = 'HTML File';
        if (event.data.filename) {
            appName = event.data.filename.replace('.html', '');
        }
        titless.push(appName);
      }
    });
