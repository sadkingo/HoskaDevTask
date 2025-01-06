import { escapeHtml } from "../../util/escapeHtml";

const imagesUrls = [
    "/images/courses/course-01.jpeg",
    "/images/courses/course-02.png",
    "/images/courses/course-03.png",
]
function renderCourseCardItem(course, index) {
    return `
        <div class="flex flex-col w-[380px] rounded-[35px] shadow-custom">
            <img class="w-[380px] rounded-t-[35px] h-[250px]" src="${imagesUrls[index % imagesUrls.length]}" alt="${escapeHtml(course.name)}" class="w-full h-48 object-cover rounded-lg">
            <div class="relative p-5 flex flex-col gap-[10px]">
                <span class="text-[20px] font-semibold ">${escapeHtml(course.name)}</span>
                <span class="text-textDescription text-[12px]">الأستاذ فلان فلان</span>
                <!-- rating -->
                <span class="flex items-center gap-[5px]">
                    <span class="text-gold">
                        ${escapeHtml(course.rating)}
                    </span>
                    ${renderRating(course.rating)}
                    <span class="text-textDescription">|</span>
                    <span class="text-textDescription text-[14px]">(${escapeHtml(course.number_of_ratings)}) تقييم</span>
                </span>
                <!-- info -->
                <div class="flex items-center text-black gap-[15px]">
                    <span class="flex gap-[5px] items-center">
                        <span class="mdi mdi-clock-outline text-xl"></span>
                        <span>${course.course_duration}</span>
                    </span>
                    <span class="flex gap-[5px] items-center">
                        <span class="mdi mdi-play-box-multiple-outline text-xl"></span>
                        <span>${course.course_duration}</span>
                    </span>
                    <span class="">
                        ${renderLevelPill(course.course_level)}
                    </span>
                </div>
                <!-- price -->
                <div class="flex items-center gap-[10px] mt-[15px]">
                    <span class="font-semibold">${escapeHtml(course.course_discounted_price)} دج</span>
                    <span class="font-semibold text-textDescription line-through">${escapeHtml(course.course_original_price)} دج</span>
                </div>
                <!-- badge -->
                <span class="flex gap-[5px] bg-hotColor w-fit px-[15px] py-2 rounded-[30px] text-white text-[16px]">
                    <span class="mdi mdi-creation-outline"></span>
                    <span>جديد</span>
                </span>
                <!-- button -->
                <a href="course.html?id=${escapeHtml(course.id)}" class="absolute bottom-0 end-0 bg-brandSecondary text-white font-semibold rounded-bl-[36px] rounded-tr-[36px] px-[45px] py-[19px]">
                    <span>تفاصيل ...</span>
                </a>
            </div>
        </div>
    `
}

function renderRating(rating) {
    const starsCount = Math.floor(rating);
    const halfStar = rating - starsCount;
    let starsHtml = '';
    for (let i = 0; i < starsCount; i++) {
        starsHtml += '<span class="mdi mdi-star text-gold"></span>';
    }
    if (halfStar) {
        starsHtml += '<span class="mdi mdi-star-half text-gold transform scale-x-[-1]"></span>';
    }
    return starsHtml;
}

function renderLevelPill(level) {
    let color = {
        "مبتدئ": "bg-successColor",
        "متوسط": "bg-gold",
        "متقدم": "bg-hotColor"
    }[level] || "bg-purple";
    let symbol = {
        "مبتدئ": "mdi mdi-signal-cellular-1",
        "متوسط": "mdi mdi-signal-cellular-2",
        "متقدم": "mdi mdi-signal-cellular-3"
    }[level] || "";
    return `
        <span class="${color} text-white text-[12px] rounded-[20px] px-[15px] py-[6px]">
        <span class="${symbol} text-white text-[12px]"></span>
            ${level}
        </span>
    `
}
export { renderCourseCardItem };