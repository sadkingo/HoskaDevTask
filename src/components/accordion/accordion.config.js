const createAccordionData = (data, startIndex = 1) => {
    let itemIndex = startIndex;

    return data.map(({ title, lessons, time, children }) => {
        const timeHTML = time ? `<div class="bg-brandSecondary py-2 px-5 rounded-[39px]">${time}</div>` : '';
        const lessonsHTML = lessons ? `<span class="font-semibold py-2 px-5 rounded-[39px] bg-purple">${lessons}</span>` : '';
        let header = `
        <div class="flex w-full justify-between">
            <span class="text-2xl max-md:text-base font-medium">${title}</span>
            <div class="flex gap-[10px] max-lg:hidden text-white">
                ${lessonsHTML}
                ${timeHTML}
            </div>
        </div>
        `;

        if (!children) {
            header = `
                <span class="text-xl max-md:text-sm font-mediumrounded-[30px]">${itemIndex}. ${title}</span>
                <div class="flex gap-[10px] max-lg:hidden text-white">
                    ${lessonsHTML}
                    ${timeHTML}
                </div>`;
            itemIndex++;
        }

        return {
            header: children ? wrapWithButton(header) : header,
            children: children ? createAccordionData(children, 1) : undefined
        };
    });
};

const wrapWithButton = (content) => `
    <button class="flex items-center w-full gap-[10px] accordion-toggle rounded-[30px]">
        <span class="mdi mdi-chevron-down text-4xl"></span>
        ${content}
    </button>`;

export const accordionData = createAccordionData([
    {
        title: 'مقدمة في عالم التصميم الجرافيكي',
        lessons: '6 دروس',
        time: '7 ساعات ونصف',
        children: [
            {
                title: 'مقدمة في عالم التصميم الجرافيكي',
                lessons: '4 دروس',
                time: '4 ساعات ونصف',
                children: [
                    { title: 'تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية', time: '3:56' },
                    { title: 'أنواع التصاميم الجرافيكية المختلفة (مطبوعات، رقمية وغيرها)', time: '3:56' },
                    { title: 'أدوات وموارد التصميم الأساسية', time: '3:56' },
                ],
            },
            {
                title: 'مبادئ التصميم الأساسية',
                lessons: '3 دروس',
                time: '4 ساعات ونصف',
                children: [
                    { title: 'تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية', time: '3:56' },
                    { title: 'أنواع التصاميم الجرافيكية المختلفة (مطبوعات، رقمية وغيرها)', time: '3:56' },
                    { title: 'أدوات وموارد التصميم الأساسية', time: '3:56' },
                ],
            },
        ],
    },
    {
        title: 'إتقان برامج التصميم الأساسية',
        lessons: '4 دروس',
        time: '5 ساعات ونصف',
        children: [
            {
                title: 'مقدمة في عالم التصميم الجرافيكي',
                lessons: '4 دروس',
                time: '5 ساعات ونصف',
                children: [
                    { title: 'تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية', time: '3:56' },
                    { title: 'أنواع التصاميم الجرافيكية المختلفة (مطبوعات، رقمية وغيرها)', time: '3:56' },
                    { title: 'أدوات وموارد التصميم الأساسية', time: '3:56' },
                ],
            },
        ],
    },
    {
        title: 'تطبيق المعرفة وإنشاء المشاريع',
        lessons: '4 دروس',
        time: '4 ساعات ونصف',
        children: [
            {
                title: 'مقدمة في عالم التصميم الجرافيكي',
                lessons: '4 دروس',
                time: '4 ساعات ونصف',
                children: [
                    { title: 'تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية', time: '3:56' },
                    { title: 'أنواع التصاميم الجرافيكية المختلفة (مطبوعات، رقمية وغيرها)', time: '3:56' },
                    { title: 'أدوات وموارد التصميم الأساسية', time: '3:56' },
                ],
            },
        ],
    },
]);
