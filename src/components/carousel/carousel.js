import { renderCourseCarouselItem } from "./carouselItem"

function renderCoursesCarousel(courses, container) {
    const courseItems = courses.map(renderCourseCarouselItem).join('');
    const coursesHtml = `
        <div class="owl-stage-outer flex-1">
            <div class="owl-stage h-full flex items-center">
                ${courseItems}
            </div>
        </div>
    `;
    container.html(coursesHtml);
}

export { renderCoursesCarousel }