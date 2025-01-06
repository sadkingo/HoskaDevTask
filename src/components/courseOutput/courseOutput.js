import { escapeHtml } from "../../util/escapeHtml";

function renderCourseOutput(courseOutput, container) {
    let courseOutputHtml = ''
    Object.values(courseOutput).map((output) => {
        courseOutputHtml += `
        <div
            class="flex max-lg:flex-col text-white bg-brandSecondary rounded-[30px]"
          >
            <div class="h-full flex items-center p-[10px]">
              <span
                class="mdi mdi-star flex max-lg:justify-center items-center flex-1 text-gold text-8xl"
              ></span>
            </div>
            <div
              class="flex flex-col gap-[10px] justify-center p-5 max-lg:pt-0"
            >
              <span class="text-2xl font-bold">${escapeHtml(output.title)}</span>
              <span class="text-[16px] max-lg:mb-7">
                ${escapeHtml(output.description)}
              </span>
            </div>
          </div>
        </div>
        `;
    })

    container.html(courseOutputHtml);
}


export { renderCourseOutput }