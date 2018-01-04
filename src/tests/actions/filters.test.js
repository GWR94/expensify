import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from "../../actions/filters";
import moment from 'moment';

test('should set text filter object to default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT",
        text: ''
    });
});

test('should set text filter to correct value', () => {
    const text = "BILL";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT",
        text
    });
});

test('should generate set start date action object', ()=> {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});

test('should generate set end date action object', ()=> {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT"});
});

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});