import { escapeHtml } from "../../util/escapeHtml";

function renderCourseDetail(course, container) {
    const courseBasicInfo = course.basic_info;
    const courseDetails = course.details.specifications;

    const coursesHtml = `
        <div class="w-full flex justify-center py-[45px] text-white p-4">
            <div class="flex flex-col max-md:items-center max-md:text-center">
                <div class="badges flex gap-[10px] mb-[15px]">
                    <div class="flex w-fit justify-center items-center bg-hotColor px-[22px] py-[5px] h-fit gap-[6px] rounded-[38px]">
                        <span class="mdi mdi-fire"></span>
                        <span class="text-[13px]">رائج الآن</span>
                    </div>
                    ${renderLevelPill(courseBasicInfo.course_level)}
                </div>
                <div class="text-[40px] mb-[30px]"> 
                    ${escapeHtml(courseBasicInfo.name)}
                </div>
                <p class="text-2xl mb-[25px]">
                    ${escapeHtml(courseBasicInfo.description)}
                </p>
                <!-- price -->
                <div class="flex items-center gap-[15px] text-[28px]">
                    <span class="text-gold">${escapeHtml(courseBasicInfo.course_discounted_price)} دج</span>
                    <span class="text-white line-through">${escapeHtml(courseBasicInfo.course_original_price)} دج</span>
                </div>
                <!-- details -->
                <div class="mt-[30px] grid grid-cols-2">
                        <div class="flex flex-col gap-[10px]">
                        <div class="flex gap-[10px] items-center">
                            <span class="mdi mdi-human-male-board text-4xl"></span>
                            <span class="text-[18px]">نمط الدورة: ${escapeHtml(courseDetails.course_type)}</span>
                        </div>
                        <div class="flex gap-[10px] items-center">
                            <span class="mdi mdi-clipboard-clock-outline text-4xl"></span>
                            <span class="text-[18px]">المدة: ${escapeHtml(courseDetails.course_duration)}</span>
                        </div>
                        <div class="flex gap-[10px] items-center">
                            <span class="mdi mdi-certificate-outline text-4xl"></span>
                            <span class="text-[18px]">الشهادة: ${escapeHtml(courseDetails.course_certificate)}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[10px]">
                        <div class="flex gap-[10px] items-center">
                            <span class="mdi mdi-translate-variant text-4xl"></span>
                            <span class="text-[18px]">اللغة: ${escapeHtml(courseDetails.course_language)}</span>
                        </div>
                             <div class="flex gap-[10px] items-center">
                            <span class="mdi mdi-calendar-week-begin-outline text-4xl"></span>
                            <span class="text-[18px]">بداية الدورة: ${escapeHtml(courseDetails.course_begin)}</span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    `;
    container.html(coursesHtml);
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
    <div class="${color} flex w-fit justify-center items-center  px-[22px] py-[5px] h-fit gap-[6px] rounded-[38px]">
        <span class="${symbol}"></span>
        <span class="text-[13px]">${level}</span>
    </div>
    `
}

export { renderCourseDetail }