import { initializeOwlCarousel } from "./components/carousel/carousel.config";
import { renderCoursesCarousel } from "./components/carousel/carousel";
import { handleError } from "./util/handleError";
import { renderCarouselCards } from "./components/courseCard/courses";
import { renderCourseDetail } from "./components/courseDetail/courseDetail";
import { renderCourseOutput } from "./components/courseOutput/courseOutput";
import { renderAccordion } from "./components/accordion/accordion";
import { accordionData } from "./components/accordion/accordion.config.js";

// global courses
const courses = [];

function main() {

    // menu logic
    initializeHighlightActiveMenu();
    initializeToggleMobileMenu();

    // hydration
    fetchAndRenderCourses();

    // search logic
    initializeFilterCoursesBySearch();

    // accordion logic
    initializeAccordions();

}

function initializeHighlightActiveMenu() {
    // header scripts
    const menusContainer = document.getElementById("menus");
    const menus = menusContainer.getElementsByTagName("A");
    for (const menu of menus) {
        const menuUrl = menu.getAttribute("href");
        if (menuUrl === window.location.pathname) {
            menu.classList.add("text-brandPrimary");
            menu.classList.add("hover:text-white");
        }
    }
}

function initializeToggleMobileMenu() {
    // mobile menu script
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    const closeButton = document.getElementById('closeButton');

    closeButton.addEventListener("click", () => {
        mobileNav.classList.add('opacity-0');
        mobileNav.classList.add('translate-x-full');
        setTimeout(() => {
            mobileNav.classList.add('hidden');
        }, 400);
    });

    burger.addEventListener('click', () => {
        mobileNav.classList.remove('hidden');
        setTimeout(() => {
            mobileNav.classList.remove('opacity-0');
            mobileNav.classList.remove('translate-x-full');
        }, 100);
    });
}

function fetchAndRenderCourses() {
    // API DATA Hydration
    const $carouselContainer = $('#carouselContainer');
    const $courseCardsContainer = $('#courseCardsContainer');
    $(document).ready(function () {

        $.get('https://test-api.mapiner.tech/api/courses', function (response) {
            if (response.success && Array.isArray(response.courses)) {
                // render carousel
                renderCoursesCarousel(response.courses, $carouselContainer);
                initializeOwlCarousel();
                // render courses cards
                renderCarouselCards(response.courses, $courseCardsContainer);
                // export courses to global scope
                courses.push(...response.courses);
            } else {
                $carouselContainer.html('<p>No courses available.</p>');
            }
        }).fail(handleError);

        // get course detail
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id');
        if (!courseId) {
            if (window.location.pathname === '/course.html')
                window.location.href = '/';
            return
        }

        $.get(`https://test-api.mapiner.tech/api/course/${courseId}`, function (response) {
            if (response.success) {
                const $courseDetail = $('#courseDetail')
                const $outputs = $('#outputs');
                renderCourseDetail(response.course, $courseDetail);
                renderCourseOutput(response.course.details.course_outputs, $outputs);
            } else {
                $('#courseDetailContainer').html('<p>Course not found.</p>');
            }
        }).fail(handleError);
    });
}

function initializeFilterCoursesBySearch() {
    $(document).ready(function () {
        $('#search').on('input', function () {
            renderCarouselCards(courses.filter((course) => course.name.includes($(this).val())), $courseCardsContainer);
        });
    });
}

function initializeAccordions() {
    $(document).ready(function () {
        const accordionHtml = renderAccordion(accordionData);
        $('#accordion-container').append(accordionHtml);

        $('#accordion-container .accordion-content').hide();

        // activate program accordion
        $('#accordion-container').on('click', '.accordion-header', function () {
            $(this).next('.accordion-content').slideToggle();
        });

        // activate info accordion
        $('#infoAccordion').on('click', '.accordion-header', function () {
            $(this).next('.accordion-content').slideToggle();
        });

        $('.accordion-toggle').click(function () {
            const icon = $(this).find('.mdi');
            icon.toggleClass('mdi-chevron-down mdi-chevron-up');
        });
    });
}

export default main;