var openerElement;
console.dir(openerElement);

window.customElements.whenDefined('my-opener').then(function() {
    openerElement = document.getElementById("opener");
    console.dir(openerElement)
    setupOpener();
    document.getElementById("VisitorForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const formdata = new FormData(event.target);
        fetch(event.target.action, {
            method: event.target.method,
            body:formdata
        }),then(response => response.json())
    .then(data => {
        registerVisitor(false);
        openerElement.style.display="none";
    })
    });
    // document.getElementById("submitVisitor").addEventListener('click',function(event) {
    //     event.preventDefault();
    //     registerVisitor(false);
    //     openerElement.style.display="none";
    // });
    document.getElementById("SubmitAnon").addEventListener('click',function(event) {
        event.preventDefault();
        registerVisitor(true);
        openerElement.style.display="none";
    });
});

function registerVisitor(anonCheck) {
    if(!anonCheck) {
                sessionStorage.setItem("visitorCompany",document.getElementById("VisitorCompany").value);
        sessionStorage.setItem("visitorName",document.getElementById("visitorName").value);
    } else {
        sessionStorage.setItem("visitorCompany","anon");
        sessionStorage.setItem("visitorName","anon");
    }
}


function setupOpener() {
    if(sessionStorage.getItem("visitorName")==null) {
        openerElement.style.display = "block";
    } else {
        openerElement.style.display = "none";
    }

}