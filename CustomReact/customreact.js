const mainContainer=document.querySelector('#Root');
const reactElement={
    type:'a',
    props:{
        target:'_blank',
        href:'https://google.com'
    },
    children: 'Go to Google'
}
function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children || '';
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}
customRender(reactElement,mainContainer);