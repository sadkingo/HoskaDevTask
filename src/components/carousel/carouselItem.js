import { escapeHtml } from "../../util/escapeHtml";

function renderCourseCarouselItem(course) {
    return `
        <div dir="rtl" class="owl-item flex flex-col gap-5 max-md:items-center">
            <div class="flex w-fit justify-center items-center bg-hotColor py-1 px-5 gap-[6px] rounded-[38px]">
                <span class="mdi mdi-fire"></span>
                <span class="text-[13px]">رائج الآن</span>
            </div>
            <div class="title text-4xl">${escapeHtml(course.name)}</div>
            <div class="description max-w-[500px] text-2xl max-md:text-center">
                ${escapeHtml(course.description)}
            </div>
            <a class="w-fit flex gap-[5px] text-2xl font-bold px-7 py-[14px] rounded-full bg-brandPrimary hover:bg-hotColor mt-5" href="/course.html?id=${encodeURIComponent(course.id)}">
                <button class="flex justify-center items-center">
                    <div class="mb-1">تفاصيل الدورة</div>
                    <div class="mdi mdi-chevron-left"></div>
                </button>
            </a>
        </div>
    `
}

export { renderCourseCarouselItem };