
const {getPreviousDate} = require('../modules/getPreviousDate');

test('Previous date test', () => {
    // expect(getPreviousDate(4, 16, 2024)) ....
    expect(getPreviousDate(4, 16, 2024)).toEqual({ month: 4, day: 15, year: 2024 });
    expect(getPreviousDate(3, 1, 2023)).toEqual({ month: 2, day: 28, year: 2023 });
    expect(getPreviousDate(1, 1, 2022)).toEqual({ month: 12, day: 31, year: 2021 });
});