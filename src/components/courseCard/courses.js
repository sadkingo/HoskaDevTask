import { renderCourseCardItem } from "./courseCardItem";

function renderCarouselCards(courses, container) {
    const courseItems = courses.map(renderCourseCardItem).join('');
    const coursesHtml = `
        <div class="w-full flex justify-center  py-[45px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[25px] flex-wrap">
                ${courseItems}
            </div>
        </div>
    `;
    container.html(coursesHtml);
}

export { renderCarouselCards }