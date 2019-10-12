const getRepairPriceListJSON = () => {
    const navListPopupRepair = document.querySelector('.nav-list-popup-repair'), // список табов
        switchInner = document.querySelector('#switch-inner'),
        popupRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table'), // блок со списками видов ремонта
        popupRepairTypesTab = document.querySelector('.popup-repair-types-tab'), // блок с табами
        navPopupRepairTypes = popupRepairTypesTab.querySelector('.nav-popup-repair-types');


    let popupRepairTypesContentTableList,        
        popupRepairTypesNavItems,
        tableList;

    fetch('././db/db.json')
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('status network not 200');
            }
            return response.json();
        })
        .then(data => {
            data.forEach((dataElem, i) => {
                const navButton = document.createElement('button'),
                    tbody = document.createElement('tbody');
                let tr, td1, td2, td3, td4, td5;

                navButton.classList.add('button_o');
                navButton.classList.add('popup-repair-types-nav__item');
                navButton.textContent = dataElem.stageName;
                navListPopupRepair.appendChild(navButton);

                tableList = document.createElement('table');
                tableList.classList.add('popup-repair-types-content-table__list');
                tableList.appendChild(tbody);

                dataElem.priceList.forEach((elem, i) => {
                    tr = document.createElement('tr');
                    td1 = document.createElement('td');
                    td4 = document.createElement('td');
                    td5 = document.createElement('td');
                    td2 = document.createElement('td');
                    td3 = document.createElement('td');
                    td1.textContent = elem.nameService;
                    td2.textContent = 'Ед. измерения';
                    td3.textContent = 'Цена за ед.';
                    td4.textContent = elem.units;
                    td5.textContent = elem.cost;

                    tr.classList.add('mobile-row');
                    tr.classList.add('showHide');

                    td1.classList.add('repair-types-name');

                    td2.classList.add('mobile-col-title');
                    td2.classList.add('tablet-hide');
                    td2.classList.add('desktop-hide');

                    td3.classList.add('mobile-col-title');
                    td3.classList.add('tablet-hide');
                    td3.classList.add('desktop-hide');

                    td4.classList.add('repair-types-value');
                    td5.classList.add('repair-types-value');

                    tr.appendChild(td1);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td2);
                    tr.appendChild(td3);

                    tbody.appendChild(tr);
                });
                popupRepairTypesContentTable.appendChild(tableList);
            });

            popupRepairTypesNavItems = navListPopupRepair.querySelectorAll('.popup-repair-types-nav__item');
            popupRepairTypesContentTableList = popupRepairTypesContentTable.querySelectorAll('.popup-repair-types-content-table__list');

            const initRepairList = (indexRepairList) => {
                popupRepairTypesNavItems.forEach((navItem, i) => {
                    if (i === indexRepairList) {
                        navItem.classList.add('active');
                        switchInner.textContent = navItem.textContent;
                    } else if (navItem.matches('.active')) {
                        navItem.classList.remove('active');
                    }
                });
                popupRepairTypesContentTableList.forEach((popupRepairList, i) => {
                    if (i === indexRepairList) {
                        popupRepairList.style.display = 'block';
                    } else {
                        popupRepairList.style.display = 'none';
                    }
                });
            };

            popupRepairTypesNavItems.forEach((navItem, i) => {
                if (navItem.matches('.active')) {
                    initRepairList(i);
                }
                navItem.addEventListener('click', () => {
                    initRepairList(i);
                });
            });

            let offsetNavPopup,
            currentPosNavItemPopup = 0,
            numNavPopup;
    
        const checkResponsePopup = () => {
            const widthWindowPopup = document.documentElement.clientWidth;
            if (widthWindowPopup < 1025) {
                numNavPopup = navListPopupRepair.clientWidth / navPopupRepairTypes.clientWidth;// - 1;
                if (numNavPopup < 1) {
                    numNavPopup = 1;
                }
                offsetNavPopup = navPopupRepairTypes.clientWidth;
            } else {
                currentPosNavItemPopup = 0;
                navListPopupRepair.style.cssText = `transform: translateX(0px);`;
            }
    
        };
        checkResponsePopup();
        window.addEventListener("resize", checkResponsePopup);
        // if (widthWindowPopup < 1025) {
            numNavPopup = navListPopupRepair.clientWidth / navPopupRepairTypes.clientWidth;// - 1;
            if (numNavPopup < 1) {
                numNavPopup = 1;
            }
            offsetNavPopup = navPopupRepairTypes.clientWidth;
            popupRepairTypesTab.addEventListener('click', (event) => {
                let target = event.target;
                if (target.closest('#nav-arrow-popup-repair_right')) {
                    // if (currentPosNavItemPopup === Math.ceil(numNavPopup)) {
                        if (currentPosNavItemPopup === Math.floor(numNavPopup)) {
                        return;
                    } else {
                        currentPosNavItemPopup++;
                        navListPopupRepair.style.cssText = `transform: translateX(-${offsetNavPopup*currentPosNavItemPopup}px);`;
                    }
                }
                if (target.closest('#nav-arrow-popup-repair_left')) {
                    if (currentPosNavItemPopup === 0) {
                        return;
                    } else {
                        currentPosNavItemPopup--;
                        navListPopupRepair.style.cssText = `transform: translateX(-${offsetNavPopup*currentPosNavItemPopup}px);`;
                    }
                }
    
            });
        })
        .catch(error => {
            console.error(error);
        });

};

export default getRepairPriceListJSON;