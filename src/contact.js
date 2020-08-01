const contact = () => {
    const contactContent = `
    <h1> Contact Details </h1>
    <p> You can find us at </p>`



    const contentDiv = document.querySelector('#content')
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('added-content');
    innerDiv.innerHTML = contactContent;
    contentDiv.appendChild(innerDiv);
};


export default contact