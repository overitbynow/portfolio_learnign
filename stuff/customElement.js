class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1>Overit</h1>
            <div id="NavButtons">
                <button onclick="window.location.href = 'index.html'">Home</button>
                <button onclick="window.location.href = 'HTMLGames.html'">HTML GAMES</button>
                <button onclick="window.location.href = 'Game1.html'">Game 1</button>
                <button onclick="window.location.href = 'Game2.html'">Game 2</button>
                <button onclick="window.location.href = 'Game3.html'">Game 3</button>
            </div>
        </header>`;
    }
} 
class MyOpener extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id ="opener">
            <form  action="https://api.web3forms.com/submit" method="POST" id="VisitorForm">
                <input type="hidden" name="access_key" value="cb25b1a1-74e7-4d25-8518-dfb903c9c79f">
                <label for ="">Name <input type="text" id="visitorName" name = "name"></label>
                <label for ="">Company <input type="text" id="visitorCompany" name="company"></label>
                <button type= "submit"input value="Submit Details" id="submitVisitor">
                <button type= "submit"input value="Nah" id="SubmitAnon">

            </form>
        </div>`;
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <footer>
            <p>This Is Footer</p>
        </footer>`;
    }
}
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);