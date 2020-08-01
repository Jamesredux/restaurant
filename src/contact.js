const contact = () => {
    const contactContent = `
    <div class="contact-details">
    <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.4478001478856!2d-118.34029938502476!3d47.86965677776303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549dd054fff74921%3A0xb74f072320737f62!2sDavenport%2C%20WA%2099122%2C%20USA!5e0!3m2!1sen!2suk!4v1596298264587!5m2!1sen!2suk" width="500" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

    </div>
    <div class="address">
        <ul>
            <li>34 Wind River Ave</li>
            <li>Deer Meadow</li>
            <li>Washington</li>
            <li>Tel: 0832 322 334</li>
        </ul>
        <p>Email: bbdinerdeermeadow5@gmail.com</p>
    </div>
</div>
    `



    const contentDiv = document.querySelector('#content')
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('added-content');
    innerDiv.innerHTML = contactContent;
    contentDiv.appendChild(innerDiv);
};


export default contact