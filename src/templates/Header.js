const Header = () => {
    const view = `
<div class="Header-main">
    <div class="header-logo">
        <h1>
            <a href="/">
                Rick API
            </a>
        </h1>
        <h2>Este proyecto es una Single Page Aplication con JS vanilla para practicar el asincronismo consumiendo una API </br> Utilizando también, HTML5, CSS grid layout, y resposive Design</h2>

    </div>
    <div class="header-nav">
        <a href="#/about/">
            About 
        </a>
    </div>
</div>
`
    return view;
}
export default Header;