class mySingleton {
    constructor() {
        if (mySingleton.instance) {
        return mySingleton.instance;
        }
        this.data = 0;
        mySingleton.instance = this;
    }

    getData() {
        return this.data;
    }

    setData(newData) {
        this.data = newData;
    }
}


function changeNumber() {
    const click = new mySingleton();
    click.setData(click.getData()+1);
    document.getElementById('click_show').textContent = `Clicks: ${click.getData()}`;
}


document.getElementById('click_btn1').onclick = () => changeNumber();