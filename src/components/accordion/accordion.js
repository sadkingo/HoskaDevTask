
function renderAccordion(data) {
    const accordionContainer = $('<div class="accordion"></div>');

    data.forEach(item => {
        const accordionItem = $('<div class="accordion-item"></div>');
        const accordionHeader = $('<div class="accordion-header flex justify-between pt-[20px] rounded-[30px] p-2 m-2"></div>').html(item.header);
        const accordionContent = $('<div class="accordion-content ps-[50px] border-t-[#E6E6E6] border-t-2"></div>');

        accordionHeader.appendTo(accordionItem);
        accordionContent.appendTo(accordionItem);

        if (item.children && item.children.length > 0) {
            const childAccordion = renderAccordion(item.children);
            accordionContent.append(childAccordion);
        }

        accordionContainer.append(accordionItem);
    });

    return accordionContainer;
}

export { renderAccordion };