const isOutOfBrowser = popupItem => {
    const rect = popupItem.getBoundingClientRect();
    const answer = rect.top < 0 ? true : false; // выходит ли за верхнюю границу
    return answer;
};

export default isOutOfBrowser;